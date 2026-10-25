// Static destination stories and navigation. No booking or data submission.
(() => {
 'use strict';
 const params=new URLSearchParams(location.search),english=params.get('lang')==='en';
 if(english){
  document.documentElement.lang='en';document.body.classList.add('english-page');
  document.title=document.body.dataset.titleEn;
  document.querySelector('meta[name="description"]').content=document.body.dataset.descriptionEn;
  document.querySelectorAll('[data-en]').forEach(node=>node.textContent=node.dataset.en);
  document.querySelectorAll('[data-en-html]').forEach(node=>node.innerHTML=node.dataset.enHtml);
  document.querySelectorAll('[data-alt-en]').forEach(node=>node.alt=node.dataset.altEn);
  document.querySelectorAll('[data-aria-en]').forEach(node=>node.setAttribute('aria-label',node.dataset.ariaEn));
  document.querySelector('header .brand').setAttribute('aria-label','MyLodge home');
 }
 function carryContext(link){
  const url=new URL(link.href);
  if(url.origin!==location.origin||link.closest('.language-slot')||link.getAttribute('href').startsWith('#'))return;
  if(!/\/(?:index|domestic-villas|business-valley|owners)\.html$/.test(url.pathname))return;
  if(english)url.searchParams.set('lang','en');
  if(params.has('screen-frame'))url.searchParams.set('screen-frame',params.get('screen-frame'));
  link.href=url.pathname+url.search+url.hash;
 }
 document.querySelectorAll('a[href]').forEach(carryContext);
 const language=document.querySelector('.language-slot');
 if(language){
  const languageURL=lang=>{const url=new URL(location.href);if(lang==='en')url.searchParams.set('lang','en');else url.searchParams.delete('lang');return url.pathname+url.search+url.hash;};
  language.querySelector('summary').setAttribute('aria-label',english?'Select language · English':'언어 선택 · 현재 한국어');
  language.querySelector('.language-full').textContent=english?'English':'한국어';
  language.querySelector('.language-short').textContent=english?'EN':'KO';
  language.querySelector('ul').innerHTML=`<li>${english?`<a lang="ko" href="${languageURL('ko')}">한국어</a>`:'<span class="language-current" lang="ko" aria-current="true">한국어 ✓</span>'}</li><li>${english?'<span class="language-current" lang="en" aria-current="true">English ✓</span>':`<a lang="en" href="${languageURL('en')}">English</a>`}</li>`;
  language.querySelector('.language-note').textContent=english?'Korean and English are available.':'한국어와 영어로 둘러볼 수 있습니다.';
  language.addEventListener('toggle',()=>{if(language.open)language.querySelectorAll('a[lang]').forEach(a=>a.href=languageURL(a.lang));});
 }
 const parkGroups=[...document.querySelectorAll('.park-nav-group')];
 const closeParkGroups=()=>parkGroups.forEach(group=>group.open=false);
 parkGroups.forEach(group=>{
  group.addEventListener('toggle',()=>{
   if(!group.open)return;
   parkGroups.forEach(other=>{if(other!==group)other.open=false;});
   if(language)language.open=false;
   document.querySelectorAll('header .screen-view-picker').forEach(picker=>picker.open=false);
  });
  group.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeParkGroups));
 });
 document.addEventListener('click',event=>{
  if(!event.target.closest('.park-nav-group'))closeParkGroups();
 });
 document.addEventListener('keydown',event=>{
  const openGroup=parkGroups.find(group=>group.open);
  if(event.key==='Escape'&&openGroup){closeParkGroups();openGroup.querySelector('summary').focus();}
 });
 const button=document.querySelector('.menu-button'),menu=document.getElementById('mobile-menu');
 function toggle(open){
  menu.hidden=!open;button.setAttribute('aria-expanded',String(open));
  button.setAttribute('aria-label',english?(open?'Close menu':'Open menu'):(open?'메뉴 닫기':'메뉴 열기'));
  if(open){closeParkGroups();if(language)language.open=false;}
 }
 button.addEventListener('click',()=>toggle(menu.hidden));
 menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>toggle(false)));
 document.addEventListener('click',event=>{if(!event.target.closest('header'))toggle(false);});
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!menu.hidden){toggle(false);button.focus();}});
 matchMedia(english?'(min-width:1280px)':'(min-width:1024px)').addEventListener('change',event=>{if(event.matches)toggle(false);});
 toggle(false);
 const canonical=document.querySelector('link[rel="canonical"]');
 if(english)canonical.href+='?lang=en';
 const updateDirectory=()=>{
  let current=location.hash;
  if(current.startsWith('#opening-'))current='#chiangmai-introduction';
  else if(current.startsWith('#experience-')||['#chiangmai-day','#chiangmai-city','#chiangmai-alternatives'].includes(current))current='#chiangmai-experiences';
  else if(/^#(?:facility|jumunjin|yangyang)-(?:beach|party|club|terrace|market|concierge)$/.test(current))current='#domestic-facilities';
  document.querySelectorAll('.section-directory a').forEach(link=>{
   if(link.getAttribute('href')===current)link.setAttribute('aria-current','location');
   else link.removeAttribute('aria-current');
  });
 };
 addEventListener('hashchange',updateDirectory);updateDirectory();
 // Progressively enhance the static experience articles into homepage-style tabs.
 const experienceTabs=document.querySelector('.experience-tabs');
 if(experienceTabs){
  const tabs=[...experienceTabs.querySelectorAll('button')];
  const panels=tabs.map(tab=>document.getElementById(tab.getAttribute('aria-controls')));
  const choose=(index,share=false)=>{
   tabs.forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===index));tab.tabIndex=i===index?0:-1;panels[i].hidden=i!==index;});
   if(share){
    try{sessionStorage.setItem('mylodge-chiangmai-experience',panels[index].id);}catch(error){/* Address selection still works when storage is unavailable. */}
    const url=new URL(location.href);url.hash=panels[index].id;
    history.replaceState(history.state,'',url.pathname+url.search+url.hash);
    // Let the existing screen-view wrapper carry the selected experience too.
    dispatchEvent(new Event('hashchange'));
   }
  };
  experienceTabs.setAttribute('role','tablist');
  experienceTabs.setAttribute('aria-label',english?'Chiang Mai experiences':'치앙마이 휴가 생활');
  tabs.forEach((tab,index)=>{
   tab.setAttribute('role','tab');panels[index].setAttribute('role','tabpanel');panels[index].tabIndex=0;
   tab.addEventListener('click',()=>choose(index,true));
   tab.addEventListener('keydown',event=>{
    let next=index;
    if(event.key==='ArrowRight')next=(index+1)%tabs.length;
    else if(event.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;
    else if(event.key==='Home')next=0;
    else if(event.key==='End')next=tabs.length-1;
    else return;
    // Focus first; Enter/Space activates. A pending photograph does not move
    // the reader to another panel just because they are exploring the labels.
    event.preventDefault();tabs.forEach((item,i)=>item.tabIndex=i===next?0:-1);tabs[next].focus();
   });
  });
  const chooseFromAddress=()=>{
   const index=panels.findIndex(panel=>'#'+panel.id===location.hash);
   if(index>=0)choose(index);
  };
  let remembered=0;
  try{const stored=sessionStorage.getItem('mylodge-chiangmai-experience');const found=panels.findIndex(panel=>panel.id===stored);if(found>=0)remembered=found;}catch(error){/* Use the first experience. */}
  choose(remembered);chooseFromAddress();experienceTabs.hidden=false;
  addEventListener('hashchange',chooseFromAddress);
  addEventListener('popstate',chooseFromAddress);
 }
 // The main-page border effect runs only while its photograph is visible.
 const parkPhotos=[...document.querySelectorAll('.park-card,.experience-panel,.scene-frame')];
 if(parkPhotos.length){
  const borderObserver=new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.classList.toggle('is-visible',entry.isIntersecting)),{threshold:0});
  parkPhotos.forEach(card=>borderObserver.observe(card));
  const suspendBorders=()=>document.body.classList.toggle('side-motion-suspended',document.hidden);
  document.addEventListener('visibilitychange',suspendBorders);suspendBorders();
 }
 document.querySelectorAll('.scene-frame img,.experience-panel img,.park-card img').forEach(img=>{
  const showUnavailable=()=>{
   const frame=img.closest('figure');
   frame.classList.add('image-unavailable');
   if(frame.querySelector('.photo-status'))return;
   const message=document.createElement('p');message.className='photo-status';
   message.setAttribute('role','status');
   message.textContent=english?'The photo could not be loaded. You can still read the description.':'사진을 불러오지 못했습니다. 설명은 계속 읽을 수 있습니다.';
   frame.append(message);
  };
  img.addEventListener('load',()=>{
   const frame=img.closest('figure');
   frame.classList.remove('image-unavailable');
   frame.querySelector('.photo-status')?.remove();
  });
  img.addEventListener('error',showUnavailable);
  if(img.complete&&img.naturalWidth===0)showUnavailable();
 });
})();
