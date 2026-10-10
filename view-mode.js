// Screen layout selection belongs to the category navigation.
(() => {
 'use strict';
 const embedded=new URLSearchParams(location.search).get('screen-frame');
 const mode=embedded||'auto';
 function destination(value){
  const url=new URL(location.href);
  url.searchParams.delete('screen-frame');
  if(value==='auto'){
   url.pathname=url.pathname.replace(/[^/]*$/,'');
   url.searchParams.delete('view');
  }else{
   url.pathname=url.pathname.replace(/[^/]*$/,'view.html');
   url.searchParams.set('view',value);
  }
  return url.href;
 }
 function update(){
  const en=document.documentElement.lang==='en';
  document.querySelectorAll('.screen-view-picker').forEach(picker=>{
   picker.querySelector('summary').textContent=en?'Screen view':'화면 보기';
   const names=en?['Mobile view','Desktop view','Automatic']:['모바일 화면','데스크톱 화면','자동'];
   picker.querySelectorAll('a').forEach((link,i)=>{
    link.textContent=names[i];
    link.href=destination(link.dataset.screenView);
    link.setAttribute('aria-current',link.dataset.screenView===mode?'true':'false');
   });
  });
 }
 document.querySelectorAll('header nav').forEach(nav=>{
  const picker=document.createElement('details');
  picker.className='screen-view-picker';
  const summary=document.createElement('summary');picker.append(summary);
  const choices=document.createElement('div');choices.className='screen-view-options';
  for(const value of ['mobile','desktop','auto']){
   const link=document.createElement('a');link.dataset.screenView=value;link.target='_top';
   link.addEventListener('click',()=>{link.href=destination(value);});choices.append(link);
  }
  picker.append(choices);nav.append(picker);
  picker.addEventListener('toggle',()=>{
   if(picker.open)document.querySelectorAll('.screen-view-picker').forEach(other=>{if(other!==picker)other.open=false;});
  });
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
