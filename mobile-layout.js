// One header offset and one mobile anchor navigation policy.
(() => {
 'use strict';
 const root=document.documentElement, header=document.querySelector('.header-inner');
 const narrow=matchMedia('(max-width:1023px)');
 // Horizontal touch gestures change slides; native vertical scrolling and pinch zoom remain available.
 document.querySelectorAll('.life-stage,.photo-deck').forEach(surface=>{
  let gesture=null;
  const emit=(name,detail)=>surface.dispatchEvent(new CustomEvent(name,{bubbles:true,detail}));
  const finish=()=>{
   if(!gesture)return;
   const pointerId=gesture.id;gesture=null;
   if(surface.hasPointerCapture(pointerId))surface.releasePointerCapture(pointerId);
   emit('mylodge:gesture-end');
  };
  surface.addEventListener('pointerdown',event=>{
   if(gesture){finish();return;}
   if(!narrow.matches||!event.isPrimary||event.pointerType!=='touch'||event.target.closest('a,button,input,select,textarea,label'))return;
   gesture={id:event.pointerId,x:event.clientX,y:event.clientY,vertical:false};
   surface.setPointerCapture(event.pointerId);emit('mylodge:gesture-start');
  });
  surface.addEventListener('pointermove',event=>{
   if(!gesture||event.pointerId!==gesture.id)return;
   const dx=Math.abs(event.clientX-gesture.x),dy=Math.abs(event.clientY-gesture.y);
   if(dy>12&&dy>dx)gesture.vertical=true;
  });
  surface.addEventListener('pointerup',event=>{
   if(!gesture||event.pointerId!==gesture.id)return;
   const dx=event.clientX-gesture.x,dy=event.clientY-gesture.y;
   if(narrow.matches&&!gesture.vertical&&Math.abs(dx)>=48&&Math.abs(dx)>Math.abs(dy)*1.4)
    emit('mylodge:slide-swipe',{direction:dx<0?1:-1});
   finish();
  });
  surface.addEventListener('pointercancel',finish);
  surface.addEventListener('lostpointercapture',finish);
  narrow.addEventListener('change',finish);
 });
 const measure=()=>{
  if(header)root.style.setProperty('--mobile-header-offset',Math.ceil(header.getBoundingClientRect().bottom+14)+'px');
 };
 if(header)new ResizeObserver(measure).observe(header);
 addEventListener('resize',measure);measure();
 function navigate(id,focus=false){
  const target=document.getElementById(id);if(!target)return;
  const menu=document.querySelector('#mobile-menu'),button=document.querySelector('.menu-button');
  if(menu)menu.hidden=true;
  if(button){button.setAttribute('aria-expanded','false');button.setAttribute('aria-label',root.lang==='en'?'Open menu':'메뉴 열기');}
  const language=document.querySelector('.language-slot');if(language)language.open=false;
  measure();requestAnimationFrame(()=>{
   target.scrollIntoView({block:'start',behavior:'instant'});
   if(focus){const heading=target.querySelector('h2,h1')||target;heading.setAttribute('tabindex','-1');heading.focus({preventScroll:true});}
  });
 }
 document.addEventListener('click',event=>{
  if(!narrow.matches||event.defaultPrevented||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||event.button>0)return;
  const a=event.target.closest('a[href^="#"]');if(!a)return;
  const id=a.getAttribute('href').slice(1);if(!document.getElementById(id))return;
  event.preventDefault();if(location.hash!=='#'+id)history.pushState(null,'','#'+id);
  navigate(id,true);
 });
 addEventListener('popstate',()=>{if(narrow.matches)navigate(location.hash.slice(1)||'home');});
 addEventListener('mylodge-preview-navigate',event=>{history.replaceState(null,'','#'+event.detail.id);navigate(event.detail.id);});
 addEventListener('load',()=>{measure();if(narrow.matches&&location.hash)navigate(location.hash.slice(1));},{once:true});
 narrow.addEventListener('change',()=>{
  measure();const menu=document.querySelector('#mobile-menu');
  if(!narrow.matches&&menu&&!menu.hidden){menu.hidden=true;document.querySelector('.menu-button')?.setAttribute('aria-expanded','false');}
 });
 document.querySelectorAll('#stay-services figure img,#ownership figure img,#brand-paths figure img').forEach(image=>{
  image.sizes='(max-width:800px) calc(100vw - 40px), (max-width:1023px) 45vw, 33vw';
 });
})();
