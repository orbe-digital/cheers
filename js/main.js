/* =========================================================
   CHEERS EMPÓRIO — comportamento do site
   (links, galeria, cardápio, busca, scrollspy e animações)
   ========================================================= */

const waURL = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.mensagem)}`;
document.querySelectorAll('.js-wa').forEach(a => a.href = waURL);
document.querySelectorAll('.js-review').forEach(a => a.href = CONFIG.avaliacao);
document.querySelectorAll('.js-ig').forEach(a => a.href = CONFIG.instagram);
document.getElementById('yr').textContent = new Date().getFullYear();

/* ---------- Galeria ---------- */
const photos = [["assets/risoto-file.jpg","Filé ao Dijon"],["assets/frango-espaguete.jpg","Frango Crispy"],["assets/risoto-camarao.jpg","Risoto de Camarão"],["assets/fondue.jpg","Mignon na Fonduta Trufada"],["assets/salada.jpg","Salada Cheers"],["assets/croquetes.jpg","Croquetes"],["assets/sobremesa.jpg","Sobremesa"]];
const mq = document.getElementById('marquee');
mq.innerHTML = [...photos, ...photos].map(([f,a],i) =>
  `<figure${i>=photos.length?' aria-hidden="true"':''}><img src="${f}" alt="${i>=photos.length?'':a}" loading="lazy" width="300" height="225"></figure>`).join('');

/* ---------- Render do cardápio (dados em data/menu.json, editados pelo /admin.html) ---------- */
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const norm = s => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const money = v => `<small>R$</small>${esc(v)}`;
const shown = it => !it.hidden;

function itemHTML(it){
  const price = it.price ? `<span class="dots"></span><span class="price">${money(it.price)}</span>` : '';
  const vars = it.variants?.length ? `<div class="variants">${it.variants.map(x=>`<span class="variant"><span>${esc(x.label)}</span><b>R$ ${esc(x.price)}</b></span>`).join('')}</div>` : '';
  const tag = it.tag ? `<span class="tag">${esc(it.tag)}</span>` : '';
  const desc = it.desc ? `<p class="item-desc">${esc(it.desc)}</p>` : '';
  return `<article class="item" data-s="${esc(norm(it.name+' '+(it.desc||'')))}">
    <div class="item-top"><h4 class="item-name">${esc(it.name)}${tag}</h4>${price}</div>${vars}${desc}</article>`;
}
function rowHTML(it){
  return `<div class="row" data-s="${esc(norm(it.name))}"><span class="nm">${esc(it.name)}</span><span class="dots"></span><span class="price">${money(it.price||'')}</span></div>`;
}
function blockHTML(b){
  const items = (b.items||[]).filter(shown);
  let h = '<div class="block">';
  if (b.title) h += `<h4 class="sub">${esc(b.title)}</h4>`;
  if (b.note) h += `<p class="note">${esc(b.note)}</p>`;
  if (items.length) h += b.compact
    ? `<div class="list">${items.map(rowHTML).join('')}</div>`
    : `<div class="items">${items.map(itemHTML).join('')}</div>`;
  return h + '</div>';
}

const chips = document.getElementById('chips');
function renderMenu(menu){
  const cats = menu.categories.filter(c => !c.hidden);
  document.getElementById('cats').innerHTML = cats.map(c => `
  <section class="cat" id="${esc(c.id)}" data-title="${esc(norm(c.title))}">
    <div class="cat-head"><div class="t">${c.group?`<div class="cat-group">${esc(c.group)}</div>`:''}<h3>${esc(c.title)}</h3><div class="rule"></div></div>${c.img?`<div class="cat-thumb"><img src="${esc(c.img)}" alt="" loading="lazy"></div>`:''}</div>
    ${c.blocks.map(blockHTML).join('')}
  </section>`).join('');
  chips.innerHTML = cats.map(c => `<a class="chip" href="#${esc(c.id)}" data-id="${esc(c.id)}">${esc(c.title)}</a>`).join('');
  initScrollspy();
}

/* ---------- Scrollspy das categorias ---------- */
function initScrollspy(){
  const chipEls = [...chips.querySelectorAll('.chip')];
  const setActive = id => chipEls.forEach(ch => {
    const on = ch.dataset.id === id;
    ch.classList.toggle('active', on);
    if (on) chips.scrollTo({left: ch.offsetLeft - chips.clientWidth/2 + ch.clientWidth/2, behavior:'smooth'});
  });
  let current = null;
  const spy = new IntersectionObserver(es => {
    const vis = es.filter(e => e.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top)[0];
    if (vis && vis.target.id !== current){ current = vis.target.id; setActive(current); }
  }, {rootMargin:'-160px 0px -55% 0px'});
  document.querySelectorAll('.cat').forEach(s => spy.observe(s));
}

// "no-cache" revalida com o servidor: assim que o GitHub Pages publica, o visitante já vê o preço novo.
fetch('data/menu.json', {cache:'no-cache'})
  .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
  .then(renderMenu)
  .catch(err => {
    console.error('Falha ao carregar o cardápio', err);
    const empty = document.getElementById('empty');
    empty.innerHTML = '<b>Não foi possível carregar o cardápio</b>Recarregue a página ou fale com a gente pelo WhatsApp.';
    empty.classList.add('show');
  });

/* ---------- Busca ---------- */
const q = document.getElementById('q'), box = document.getElementById('searchBox'), empty = document.getElementById('empty');
function search(){
  const t = norm(q.value.trim());
  box.classList.toggle('has-value', !!t);
  let any = false;
  document.querySelectorAll('.cat').forEach(cat => {
    const catHit = t && cat.dataset.title.includes(t);
    let catAny = false;
    cat.querySelectorAll('.block').forEach(b => {
      let bAny = false;
      b.querySelectorAll('[data-s]').forEach(el => {
        const hit = !t || catHit || el.dataset.s.includes(t);
        el.style.display = hit ? '' : 'none'; if (hit) bAny = true;
      });
      b.style.display = (bAny || (!t && !b.querySelector('[data-s]'))) ? '' : 'none';
      if (bAny) catAny = true;
    });
    cat.style.display = catAny ? '' : 'none';
    if (catAny) any = true;
  });
  empty.classList.toggle('show', !any);
}
q.addEventListener('input', search);
document.getElementById('clearQ').addEventListener('click', () => { q.value=''; search(); q.focus(); });

/* ---------- Flutuantes e animações ---------- */
const fab = document.getElementById('fab'), toTop = document.getElementById('toTop');
addEventListener('scroll', () => {
  const y = scrollY > innerHeight * .7;
  fab.classList.toggle('show', y); toTop.classList.toggle('show', y);
}, {passive:true});
toTop.addEventListener('click', () => scrollTo({top:0, behavior:'smooth'}));
const rv = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ e.target.classList.add('in'); rv.unobserve(e.target);} }), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => rv.observe(el));
