#!/usr/bin/env node
/* =========================================================
   Gerencia os usuários do painel /admin.

   Uso (na raiz do projeto, Node 18+):
     node tools/admin-user.mjs add <usuario>     cria ou troca a senha de um usuário
     node tools/admin-user.mjs remove <usuario>  remove um usuário
     node tools/admin-user.mjs list              lista os usuários

   Cada usuário guarda uma cópia do token do GitHub cifrada com a
   própria senha (PBKDF2-SHA256 + AES-256-GCM). O arquivo admin/users.json
   é público no site, então a senha precisa ser forte.
   Depois de rodar, faça commit e push de admin/users.json.
   ========================================================= */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { createInterface } from 'node:readline';
import { webcrypto as crypto } from 'node:crypto';

const FILE = new URL('../admin/users.json', import.meta.url);
const ITER = 600_000;
const MIN_PASS = 12;

const b64 = buf => Buffer.from(buf).toString('base64');

function load() {
  if (existsSync(FILE)) return JSON.parse(readFileSync(FILE, 'utf8'));
  let repo = '';
  try {
    const url = execSync('git remote get-url origin', { encoding: 'utf8' }).trim();
    repo = (url.match(/github\.com[:/](.+?)(\.git)?$/) || [])[1] || '';
  } catch {}
  return { repo, branch: 'main', users: [] };
}
const save = db => writeFileSync(FILE, JSON.stringify(db, null, 2) + '\n');

function ask(question, hidden = false) {
  return new Promise(resolve => {
    const rl = createInterface({ input: process.stdin, output: process.stdout, terminal: true });
    if (hidden) rl._writeToOutput = s => { if (s.includes(question)) rl.output.write(question); };
    rl.question(question, answer => { rl.close(); if (hidden) process.stdout.write('\n'); resolve(answer.trim()); });
  });
}

async function encrypt(secret, password) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']);
  const key = await crypto.subtle.deriveKey({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations: ITER },
    base, { name: 'AES-GCM', length: 256 }, false, ['encrypt']);
  const data = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, new TextEncoder().encode(secret));
  return { iter: ITER, salt: b64(salt), iv: b64(iv), data: b64(data) };
}

// Em tokens fine-grained, "permissions" de GET /repos reflete a CONTA, não o token.
// Por isso o teste de escrita cria um blob solto: exige Contents: write, mas não gera commit
// nem altera arquivo nenhum (o GitHub descarta blobs não referenciados).
async function checkToken(token, repo) {
  const headers = { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' };
  try {
    const r = await fetch(`https://api.github.com/repos/${repo}/git/blobs`, {
      method: 'POST', headers, body: JSON.stringify({ content: 'teste de permissão do painel', encoding: 'utf-8' }) });
    if (r.ok) return null;
    if (r.status === 401) return 'Token inválido ou expirado.';
    if (r.status === 404) return `O token não enxerga o repositório ${repo}. Em "Repository access", escolha "Only select repositories" e marque-o.`;
    if (r.status === 403) return 'O token não tem permissão de escrita. Em "Repository access" use "Only select repositories" ' +
      `(não "Public repositories") com ${repo}, e em "Repository permissions" → "Contents" escolha "Read and write".`;
    return `O GitHub respondeu ${r.status}: ${(await r.json().catch(() => ({}))).message || ''}`;
  } catch {
    console.warn('Aviso: não foi possível validar o token agora (sem internet?). Continuando.');
    return null;
  }
}

const [cmd, name] = process.argv.slice(2);
const db = load();

if (cmd === 'list') {
  console.log(`Repositório: ${db.repo} (${db.branch})`);
  console.log(db.users.length ? db.users.map(u => ' - ' + u.user).join('\n') : 'Nenhum usuário.');
} else if (cmd === 'remove' && name) {
  const before = db.users.length;
  db.users = db.users.filter(u => u.user !== name.toLowerCase());
  if (db.users.length === before) { console.error(`Usuário "${name}" não existe.`); process.exit(1); }
  save(db);
  console.log(`Removido. Faça commit e push de admin/users.json.`);
  console.log('Se essa pessoa pode ter copiado o token, revogue-o no GitHub e gere um novo para os demais.');
} else if (cmd === 'add' && name) {
  const user = name.toLowerCase();
  if (!/^[a-z0-9._-]{2,32}$/.test(user)) { console.error('Usuário: 2 a 32 caracteres (letras, números, . _ -).'); process.exit(1); }
  if (!db.repo) db.repo = await ask('Repositório (dono/nome): ');

  const pass = await ask(`Senha para "${user}" (mín. ${MIN_PASS} caracteres): `, true);
  if (pass.length < MIN_PASS) { console.error(`Senha curta demais. Use pelo menos ${MIN_PASS} caracteres; uma frase funciona bem.`); process.exit(1); }
  if (await ask('Repita a senha: ', true) !== pass) { console.error('As senhas não conferem.'); process.exit(1); }

  const token = await ask('Token do GitHub (fine-grained, Contents: Read and write): ', true);
  const problem = await checkToken(token, db.repo);
  if (problem) { console.error(problem); process.exit(1); }

  const entry = { user, ...(await encrypt(token, pass)) };
  db.users = db.users.filter(u => u.user !== user).concat(entry);
  save(db);
  console.log(`Usuário "${user}" salvo. Faça commit e push de admin/users.json.`);
} else {
  console.log('Uso: node tools/admin-user.mjs add <usuario> | remove <usuario> | list');
  process.exit(cmd ? 1 : 0);
}
