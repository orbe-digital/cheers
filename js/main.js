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

/* ---------- Render do cardápio ---------- */
const MENU = window.CHEERS_MENU;
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const norm = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase();
const money = v => `<small>R$</small>${v}`;

function itemHTML(it){
  const price = it.p ? `<span class="dots"></span><span class="price">${money(it.p)}</span>` : '';
  const vars = it.v ? `<div class="variants">${it.v.map(([l,p])=>`<span class="variant"><span>${esc(l)}</span><b>R$ ${p}</b></span>`).join('')}</div>` : '';
  const tag = it.tag ? `<span class="tag">${esc(it.tag)}</span>` : '';
  const desc = it.d ? `<p class="item-desc">${esc(it.d)}</p>` : '';
  return `<article class="item" data-s="${esc(norm(it.n+' '+(it.d||'')))}">
    <div class="item-top"><h4 class="item-name">${esc(it.n)}${tag}</h4>${price}</div>${vars}${desc}</article>`;
}
function rowHTML([n,p]){
  return `<div class="row" data-s="${esc(norm(n))}"><span class="nm">${esc(n)}</span><span class="dots"></span><span class="price">${money(p)}</span></div>`;
}
function blockHTML(b){
  let h = '<div class="block">';
  if (b.sub) h += `<h4 class="sub">${esc(b.sub)}</h4>`;
  if (b.note) h += `<p class="note">${esc(b.note)}</p>`;
  if (b.items) h += `<div class="items">${b.items.map(itemHTML).join('')}</div>`;
  if (b.list) h += `<div class="list">${b.list.map(rowHTML).join('')}</div>`;
  return h + '</div>';
}
document.getElementById('cats').innerHTML = MENU.map(c => `
  <section class="cat" id="${c.id}" data-title="${esc(norm(c.title))}">
    <div class="cat-head"><div class="t">${c.group?`<div class="cat-group">${esc(c.group)}</div>`:''}<h3>${esc(c.title)}</h3><div class="rule"></div></div>${c.img?`<div class="cat-thumb"><img src="${c.img}" alt="" loading="lazy"></div>`:''}</div>
    ${c.blocks.map(blockHTML).join('')}
  </section>`).join('');

const chips = document.getElementById('chips');
chips.innerHTML = MENU.map(c => `<a class="chip" href="#${c.id}" data-id="${c.id}">${esc(c.title)}</a>`).join('');

/* ---------- Scrollspy das categorias ---------- */
const chipEls = [...chips.querySelectorAll('.chip')];
function setActive(id){
  chipEls.forEach(ch => {
    const on = ch.dataset.id === id;
    ch.classList.toggle('active', on);
    if (on) chips.scrollTo({left: ch.offsetLeft - chips.clientWidth/2 + ch.clientWidth/2, behavior:'smooth'});
  });
}
let current = null;
const spy = new IntersectionObserver(es => {
  const vis = es.filter(e => e.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top)[0];
  if (vis && vis.target.id !== current){ current = vis.target.id; setActive(current); }
}, {rootMargin:'-160px 0px -55% 0px'});
document.querySelectorAll('.cat').forEach(s => spy.observe(s));

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
