// Page shortcuts share the existing screen-view navigation UI.
(() => {
 'use strict';
 const base=new URL('.',document.currentScript.src);
 const pages=[
  ['intro','intro.html','인트로','Intro'],
  ['main','index.html#home','메인','Main'],
  ['domestic','parks/domestic-villas.html','국내','Domestic'],
  ['overseas','parks/business-valley.html','해외','Overseas'],
  ['owners','parks/owners.html','오너 혜택','Owner benefits']
 ];
 function destination(value){
  const url=new URL(pages.find(page=>page[0]===value)[1],base);
  if(document.documentElement.lang==='en')url.searchParams.set('lang','en');
  return url.href;
 }
 function update(){
  const en=document.documentElement.lang==='en';
  document.querySelectorAll('.screen-view-picker').forEach(picker=>{
   picker.querySelector('.screen-view-label').textContent=en?'Screen view':'화면 보기';
   picker.querySelectorAll('a').forEach((link,i)=>{
    link.textContent=pages[i][en?3:2];
    link.href=destination(link.dataset.screenView);
    if(new URL(link.href).pathname===location.pathname)link.setAttribute('aria-current','page');
    else link.removeAttribute('aria-current');
   });
  });
 }
 const header=document.querySelector('.header-inner');
 const hosts=[header,document.querySelector('#mobile-menu')].filter(Boolean);
 hosts.forEach(host=>{
  const picker=document.createElement('details');
  picker.className='screen-view-picker';
  const summary=document.createElement('summary');
  summary.innerHTML='<svg class="screen-view-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg><span class="screen-view-label"></span><svg class="screen-view-chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="m4 6 4 4 4-4"/></svg>';
  picker.append(summary);
  const choices=document.createElement('div');choices.className='screen-view-options';
  for(const [value] of pages){
   const link=document.createElement('a');link.dataset.screenView=value;link.target='_top';
   link.addEventListener('click',()=>{link.href=destination(value);});choices.append(link);
  }
  picker.append(choices);
  if(host===header)host.insertBefore(picker,host.querySelector('.language-slot')||host.querySelector('.menu-button'));
  else host.append(picker);
  picker.addEventListener('toggle',()=>{
   if(picker.open){
    update();
    document.querySelectorAll('.screen-view-picker').forEach(other=>{if(other!==picker)other.open=false;});
    const language=document.querySelector('.language-slot');if(language)language.open=false;
   }
  });
 });
 document.querySelector('.language-slot')?.addEventListener('toggle',event=>{
  if(event.currentTarget.open)document.querySelectorAll('.screen-view-picker').forEach(p=>p.open=false);
 });
 new MutationObserver(update).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 addEventListener('hashchange',update);update();
 document.addEventListener('click',event=>{
  if(!event.target.closest('.screen-view-picker'))document.querySelectorAll('.screen-view-picker').forEach(p=>p.open=false);
 });
 document.addEventListener('keydown',event=>{
  if(event.key==='Escape')document.querySelectorAll('.screen-view-picker').forEach(p=>{if(p.open){p.open=false;p.querySelector('summary').focus();}});
 });
})();
