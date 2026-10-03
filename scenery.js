// Generated vacation scenery. Native scrolling; decorative layers never intercept input.
(() => {
 'use strict';
 const scenes=[
  ['#villa-spaces','coast','soft','BEACH / PINE / VILLA'],
  ['#our-villa','coast','deep','OUR PLACE, BY THE SEA'],
  ['#ownership','coast','reading','A VILLA, TOGETHER'],
  ['#pricing','arrival','deep','THE DREAM, WITH A PLAN'],
  ['#projects','coast','soft','YOUR NEXT BEACHSIDE'],
  ['#lifestyle','cafe','soft','SLOW DAYS / GOOD COMPANY'],
  ['#brand-paths','cafe','deep','STAY / WORK / CONNECT'],
  ['#stay-services','cafe','deep','COFFEE / COMFORT / VACATION'],
  ['#progress','coast','reading','BUILDING THE NEXT VACATION'],
  ['.vacation-finale','arrival','final','COME HOME TO YOUR VACATION']
 ];
 const sections=[];
 scenes.forEach(([selector,name,tone,label])=>{
  const section=document.querySelector(selector);if(!section)return;
  section.classList.add('scenic-section','scenic-'+tone);
  const layer=document.createElement('div');layer.className='scenic-backdrop';layer.setAttribute('aria-hidden','true');
  layer.innerHTML=`<div class="scenic-camera"><img src="assets/images/scenery-${name}-960.webp" srcset="assets/images/scenery-${name}-480.webp 480w, assets/images/scenery-${name}-960.webp 960w, assets/images/scenery-${name}-1680.webp 1680w" sizes="100vw" width="1680" height="946" alt="" loading="lazy" decoding="async"></div><div class="scenic-shade"></div><div class="scenic-light"></div>`;
  section.prepend(layer);
  const note=document.createElement('div');note.className='scenic-note';
  note.innerHTML='<span aria-hidden="true">'+label+'</span><small>AI 공간 콘셉트 · 실제 부지·시설·설계는 미확정</small>';
  section.append(note);sections.push(section);
  const image=layer.querySelector('img');
  const fit=()=>{const width=Math.ceil(Math.max(section.clientWidth*1.15,(section.offsetHeight+180)*1680/946));image.sizes=width+'px';};
  new ResizeObserver(fit).observe(section);fit();
 });
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const visible=new Set();let frame=0;
 function paint(){
  frame=0;if(reduced.matches||document.hidden)return;
  const range=innerWidth<701?18:88;
  visible.forEach(section=>{
   const rect=section.getBoundingClientRect();
   const progress=Math.max(0,Math.min(1,(innerHeight-rect.top)/(innerHeight+rect.height)));
   section.style.setProperty('--scenic-y',((progress-.5)*range*2).toFixed(1)+'px');
   section.style.setProperty('--scenic-scale',(1.08+progress*(innerWidth<701?.035:.10)).toFixed(3));
  });
 }
 function queue(){if(!frame&&!reduced.matches&&!document.hidden)frame=requestAnimationFrame(paint);}
 const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{entry.target.classList.toggle('scenic-visible',entry.isIntersecting);if(entry.isIntersecting)visible.add(entry.target);else visible.delete(entry.target);});queue();
 },{rootMargin:'100px 0px'});
 sections.forEach(section=>observer.observe(section));
 addEventListener('scroll',queue,{passive:true});addEventListener('resize',queue,{passive:true});
 reduced.addEventListener('change',()=>{
  cancelAnimationFrame(frame);frame=0;
  sections.forEach(section=>{section.style.removeProperty('--scenic-y');section.style.removeProperty('--scenic-scale');});queue();
 });
 document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(frame);frame=0;}else queue();});
})();
