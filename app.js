
let IDX=[];
fetch('search.json').then(r=>r.json()).then(d=>{IDX=d});
const box=document.getElementById('search');
const res=document.getElementById('results');
function esc(s){return s.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]))}
if(box){box.addEventListener('input',()=>{
  const q=box.value.trim().toLowerCase();
  if(!q){res.innerHTML='';return}
  const hits=IDX.map(p=>{
    const t=p.title.toLowerCase(),x=p.text.toLowerCase();
    let s=-1;
    if(t.includes(q))s=0; else {const i=x.indexOf(q); if(i>=0)s=1+i/10000;}
    return {p,s};
  }).filter(o=>o.s>=0).sort((a,b)=>a.s-b.s).slice(0,12);
  res.innerHTML=hits.map(({p})=>`<li><a href="${p.href}">${esc(p.title)}</a><span class="rtxt">${esc(p.text.slice(0,90))}</span></li>`).join('');
});}
const mt=document.getElementById('mt'),scrim=document.getElementById('scrim');
if(mt)mt.addEventListener('click',()=>document.body.classList.toggle('nav-open'));
if(scrim)scrim.addEventListener('click',()=>document.body.classList.remove('nav-open'));
