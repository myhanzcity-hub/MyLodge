// Regional chapters using the original nodes, copy, images and existing interactions.
(()=>{
 'use strict';
 const main=document.querySelector('main');if(!main)return;
 const en=document.documentElement.lang==='en';
 const domestic=document.body.classList.contains('side-domestic');
 const chapters=(domestic?[
  ['국내 파크 소개','Parks in Korea','.side-hero'],
  ['국내 파크 한눈에 보기','Parks at a glance','#visual-first','#side-parks','.page-directory'],
  ['주문진 파크','Jumunjin Park','#project-jumunjin'],
  ['양양 파크','Yangyang Park','#project-yangyang'],
  ['별장 공간','Villa spaces','#villa-types'],
  ['함께하는 생활','Community life','#domestic-community'],
  ['풀장과 프로그램','Pool & programmes','#pool-programme'],
  ['공용 시설','Shared facilities','#domestic-facilities'],
  ['생활 서비스','Everyday services','#park-services'],
  ['파크 구성 안내','Park sections','#park-sections'],
  ['오너 이용 안내','Owner guide','#park-owner-guide']
 ]:[
  ['치앙마이 소개','Chiang Mai','.side-hero'],
  ['한눈에 둘러보기','At a glance','.page-directory','#visual-first'],
  ['풀파티와 클럽','Pool parties & clubs','#chiangmai-introduction'],
  ['시설 구성','Facilities','#chiangmai-spaces'],
  ['인테리어 콘셉트','Interior concepts','#global-interiors'],
  ['만남과 즐거움','Connect & enjoy','#chiangmai-experiences'],
  ['치앙마이 로컬','Local food & crafts','#chiangmai-local'],
  ['코워킹·프로그램','Coworking & programmes','#chiangmai-business-programmes'],
  ['낮과 밤의 생활','Day & night','#chiangmai-day-and-night'],
  ['휴가의 즐길거리','Holiday experiences','#chiangmai-vacation'],
  ['컨시어지·생활 편의','Everyday services','#chiangmai-services'],
  ['오너 이용 안내','Owner guide','#park-owner-guide'],
  ['글로벌 비즈니스 커뮤니티','Global business community','#chiangmai-community']
 ]).map(([ko,english,...selectors])=>({title:en?english:ko,nodes:selectors.map(s=>main.querySelector(s))}));
 if(chapters.some(c=>c.nodes.some(n=>!n)))return;
 // Each chapter follows its reading order, rather than the former long-page order.
 if(domestic){
  chapters.forEach(chapter=>chapter.nodes.forEach(node=>main.append(node)));
  const related=main.querySelector('#park-product-guide .guide-links');
  if(related){
   main.querySelectorAll('.planning-jump a').forEach(link=>{
    if(![...related.querySelectorAll('a')].some(existing=>existing.hash===link.hash))related.append(link);
   });
  }
  const notice=main.querySelector('.park-concept-notice');
  if(notice){
   const details=document.createElement('details');details.className='deck-planning-notice';
   const summary=document.createElement('summary');summary.textContent=en?'Images & planning information':'이미지·계획 안내';
   notice.before(details);details.append(summary,notice);
  }
 }
 const nav=document.createElement('nav');nav.className='chiangmai-deck-nav';nav.setAttribute('aria-label',en?'Chapter navigation':domestic?'국내 파크 장 이동':'치앙마이 장 이동');
 nav.innerHTML=`<button type="button" class="deck-prev" aria-label="${en?'Previous chapter':'이전 장'}">← <span class="deck-arrow-label">${en?'Previous':'이전'}</span></button><p class="chiangmai-deck-position" role="status" aria-live="polite" aria-atomic="true"></p><button type="button" class="deck-menu" aria-expanded="false" aria-controls="chiangmai-deck-toc">${en?'Contents':'목차'} ☰</button><button type="button" class="deck-next" aria-label="${en?'Next chapter':'다음 장'}"><span class="deck-arrow-label">${en?'Next':'다음'}</span> →</button>`;
 const toc=document.createElement('nav');toc.id='chiangmai-deck-toc';toc.className='chiangmai-deck-toc';toc.hidden=true;toc.setAttribute('aria-label',en?`${chapters.length} chapters`:`${chapters.length}장 전체 목차`);
 const prev=nav.querySelector('.deck-prev'),next=nav.querySelector('.deck-next'),menu=nav.querySelector('.deck-menu'),position=nav.querySelector('.chiangmai-deck-position');
 document.body.append(nav,toc);
 let current=0;
 function closeMenu(){toc.hidden=true;menu.setAttribute('aria-expanded','false');}
 function show(index,{target=null,animate=true}={}){
  if(index<0||index>=chapters.length)return;
  const direction=index<current?'-35px':'35px';current=index;
  chapters.forEach((c,i)=>c.nodes.forEach(node=>{node.hidden=i!==index;node.classList.remove('chiangmai-deck-arrive');if(i===index&&animate){node.style.setProperty('--deck-direction',direction);void node.offsetWidth;node.classList.add('chiangmai-deck-arrive');}}));
  const footer=document.querySelector('body>footer');if(footer)footer.hidden=index!==chapters.length-1;
  prev.disabled=index===0;next.disabled=index===chapters.length-1;
  position.replaceChildren();const count=document.createElement('span');count.textContent=`${String(index+1).padStart(2,'0')} / ${chapters.length}`;position.append(count,document.createTextNode(chapters[index].title));
  [...toc.children].forEach((button,i)=>{if(i===index)button.setAttribute('aria-current','page');else button.removeAttribute('aria-current');});
  closeMenu();
  if(target){target.scrollIntoView({block:'start',behavior:'instant'});}else window.scrollTo({top:0,behavior:'instant'});
 }
 chapters.forEach((chapter,i)=>{const button=document.createElement('button');button.type='button';button.textContent=`${String(i+1).padStart(2,'0')}  ${chapter.title}`;button.addEventListener('click',()=>{go(i);menu.focus({preventScroll:true});});toc.append(button);});
 function find(hash){let id;try{id=decodeURIComponent(hash.slice(1));}catch{return null;}const target=id&&document.getElementById(id);if(!target||!main.contains(target)||target===main)return null;const index=chapters.findIndex(c=>c.nodes.some(n=>n===target||n.contains(target)));return index<0?null:{index,target};}
 function go(index){if(index<0||index>=chapters.length)return;const node=chapters[index].nodes.find(n=>n.id);history.pushState(null,'',node?'#'+node.id:location.pathname+location.search);show(index);}
 prev.addEventListener('click',()=>go(current-1));next.addEventListener('click',()=>go(current+1));menu.addEventListener('click',()=>{toc.hidden=!toc.hidden;menu.setAttribute('aria-expanded',String(!toc.hidden));});
 document.addEventListener('click',event=>{const link=event.target.closest('a[href^="#"]');if(link){const destination=find(link.hash);if(destination)show(destination.index,{target:destination.target});else if(link.hash==='#main')show(0);}else if(!toc.contains(event.target)&&!nav.contains(event.target))closeMenu();});
 function restore(){const destination=find(location.hash);show(destination?.index??0,{target:destination?.target,animate:false});}
 window.addEventListener('hashchange',restore);window.addEventListener('popstate',restore);
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!toc.hidden){closeMenu();menu.focus();return;}if(event.defaultPrevented||event.altKey||event.ctrlKey||event.metaKey||event.shiftKey||event.target.closest('input,textarea,select,button,a,summary,[contenteditable],dialog,[role="dialog"]')||document.querySelector('dialog[open]')||!toc.hidden)return;if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();go(current+(event.key==='ArrowRight'?1:-1));}});
 let start=null;
 main.addEventListener('touchstart',event=>{const t=event.touches[0];start=event.touches.length===1&&!event.target.closest('a,button,input,select,textarea,summary,dialog,.table-scroll')?{x:t.clientX,y:t.clientY}:null;},{passive:true});
 main.addEventListener('touchend',event=>{if(!start)return;const t=event.changedTouches[0],dx=t.clientX-start.x,dy=t.clientY-start.y;start=null;if(Math.abs(dx)>75&&Math.abs(dx)>Math.abs(dy)*1.8)go(current+(dx<0?1:-1));},{passive:true});
 main.addEventListener('touchcancel',()=>start=null,{passive:true});
 restore();
})();
