// Reuse existing content nodes and chapter navigation; do not recreate interactive widgets.
(()=>{
 'use strict';
 const main=document.querySelector('#main');if(!main||!document.querySelector('#home.hero'))return;
 const en=new URLSearchParams(location.search).get('lang')==='en';
 const chapters=[
  ['나, 별장 있다.','I have a villa.','#home'],
  ['Why MyLodge','Why MyLodge','#our-villa'],
  ['함께 소유하는 방식','Shared ownership','#ownership-model-before-pricing'],
  ['소유·가격 안내','Ownership & pricing','#ownership-pricing'],
  ['오너 라이프','Owner life','#owner-life'],
  ['별장과 시설','Villa & facilities','#facilities'],
  ['컨시어지','Concierge','#stay-services'],
  ['지역별 상품 비교','Compare regional products','#region-comparison'],
  ['계약·진행 안내','Contract and progress','#contract-progress'],
  ['분양상품 선택','Choose your villa','#start-ownership']
 ].map(([ko,english,...selectors])=>({title:en?english:ko,nodes:selectors.map(selector=>main.querySelector(selector))}));
 if(chapters.some(c=>c.nodes.some(n=>!n)))return;
 document.body.dataset.homepageDeck='';
 const interaction='a,button,input,select,textarea,summary,dialog,iframe,[role="tablist"],[role="slider"],[contenteditable],.lifestyle-gallery,.photo-deck,.facility-gallery,.table-scroll,.ownership-options';
 const nav=document.createElement('nav');nav.className='homepage-deck-nav';nav.setAttribute('aria-label',en?'Page navigation':'메인 페이지 이동');
 nav.innerHTML=`<button type="button" class="deck-prev" aria-label="${en?'Previous chapter':'이전 장'}">← <span class="deck-arrow-label">${en?'Previous':'이전'}</span></button><p class="homepage-deck-position" role="status" aria-live="polite" aria-atomic="true"></p><button type="button" class="deck-menu" aria-expanded="false" aria-controls="homepage-deck-toc">${en?'Contents':'목차'} ☰</button><button type="button" class="deck-next" aria-label="${en?'Next chapter':'다음 장'}"><span class="deck-arrow-label">${en?'Next':'다음'}</span> →</button>`;
 const toc=document.createElement('nav');toc.id='homepage-deck-toc';toc.className='homepage-deck-toc';toc.hidden=true;toc.setAttribute('aria-label',en?`${chapters.length} chapters`:`${chapters.length}장 전체 목차`);
 const prev=nav.querySelector('.deck-prev'),next=nav.querySelector('.deck-next'),menu=nav.querySelector('.deck-menu'),position=nav.querySelector('.homepage-deck-position');
 document.body.append(nav,toc);
 let current=0;
 function closeMenu(){toc.hidden=true;menu.setAttribute('aria-expanded','false');}
 function show(index,{target=null,animate=true}={}){
  if(index<0||index>=chapters.length)return;
  const direction=index<current?'-35px':'35px';current=index;
  chapters.forEach((c,i)=>c.nodes.forEach(node=>{node.hidden=i!==index;node.classList.remove('homepage-deck-arrive');if(i===index&&animate){node.style.setProperty('--deck-direction',direction);void node.offsetWidth;node.classList.add('homepage-deck-arrive');}}));
  document.querySelectorAll('body>footer,body>.pre-footer-mural').forEach(node=>node.hidden=index!==chapters.length-1);
  document.body.dataset.homepagePage=String(index+1);
  document.body.dataset.homepageSection=chapters[index].nodes[0]?.id||'';
  document.querySelectorAll('header a[href^="#"]').forEach(link=>{const match=find(link.hash);if(match?.index===index)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');});
  window.ScrollTrigger?.refresh();
  prev.disabled=index===0;next.disabled=index===chapters.length-1;
  position.replaceChildren();const count=document.createElement('span');count.textContent=`${String(index+1).padStart(2,'0')} / ${chapters.length}`;position.append(count,document.createTextNode(chapters[index].title));
  [...toc.children].forEach((button,i)=>{if(i===index)button.setAttribute('aria-current','page');else button.removeAttribute('aria-current');});
  closeMenu();
  if(target){target.scrollIntoView({block:'start',behavior:'instant'});}else window.scrollTo({top:0,behavior:'instant'});
 }
 chapters.forEach((chapter,i)=>{const button=document.createElement('button');button.type='button';button.textContent=`${String(i+1).padStart(2,'0')}  ${chapter.title}`;button.addEventListener('click',()=>{go(i);menu.focus({preventScroll:true});});toc.append(button);});
 function find(hash){let id;try{id=decodeURIComponent(hash.slice(1));}catch{return null;}const target=id&&document.getElementById(id);if(!target||!main.contains(target)||target===main)return null;const index=chapters.findIndex(c=>c.nodes.some(n=>n===target||n.contains(target)));return index<0?null:{index,target};}
 function go(index){if(index<0||index>=chapters.length)return;const focused=document.activeElement;if(chapters[current].nodes.some(n=>n.contains(focused)))next.focus({preventScroll:true});const node=chapters[index].nodes.find(n=>n.id);history.pushState(null,'',node?'#'+node.id:location.pathname+location.search);show(index);}
 prev.addEventListener('click',()=>go(current-1));next.addEventListener('click',()=>go(current+1));menu.addEventListener('click',()=>{toc.hidden=!toc.hidden;menu.setAttribute('aria-expanded',String(!toc.hidden));});
 document.addEventListener('click',event=>{const link=event.target.closest('a[href^="#"]');if(link){const destination=find(link.hash);if(destination)show(destination.index,{target:destination.target});else if(link.hash==='#main')show(0);}else if(!toc.contains(event.target)&&!nav.contains(event.target))closeMenu();});
 function restore(){if(location.hash==='#brand-paths')history.replaceState(null,'','#region-comparison');const destination=find(location.hash);show(destination?.index??0,{target:destination?.target,animate:false});}
 window.addEventListener('hashchange',restore);window.addEventListener('popstate',restore);
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!toc.hidden){closeMenu();menu.focus();return;}if(event.defaultPrevented||event.altKey||event.ctrlKey||event.metaKey||event.shiftKey||event.target.closest('input,textarea,select,button,a,summary,[contenteditable],dialog,[role="dialog"]')||document.querySelector('dialog[open]')||!toc.hidden)return;if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();go(current+(event.key==='ArrowRight'?1:-1));}});

 let start=null;
 main.addEventListener('touchstart',event=>{const t=event.touches[0];start=event.touches.length===1&&!event.target.closest(interaction)?{x:t.clientX,y:t.clientY}:null;},{passive:true});
 main.addEventListener('touchend',event=>{if(!start)return;const t=event.changedTouches[0],dx=t.clientX-start.x,dy=t.clientY-start.y;start=null;if(Math.abs(dx)>75&&Math.abs(dx)>Math.abs(dy)*1.8)go(current+(dx<0?1:-1));},{passive:true});
 main.addEventListener('touchcancel',()=>start=null,{passive:true});
 restore();
})();
