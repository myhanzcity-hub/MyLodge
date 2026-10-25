(() => {
 const hero=document.querySelector('.hero');
 if(!hero)return;
 document.body.classList.add('cinematic-design');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const mobile=matchMedia('(max-width:700px)');
 const landscapeStory=matchMedia('(max-width:1023px) and (max-height:500px)');
 const lifestyleImage=(name,alt,priority=false)=>`<img src="assets/images/living-${name}-960.webp" srcset="assets/images/living-${name}-480.webp 480w, assets/images/living-${name}-960.webp 960w, assets/images/living-${name}-1536.webp 1536w" sizes="100vw" width="1536" height="1024" alt="${alt} · AI 생활 콘셉트" decoding="async" ${priority?'fetchpriority="high"':'loading="lazy"'}>`;
 const ribbon=document.createElement('div');ribbon.className='living-ribbon';ribbon.setAttribute('aria-hidden','true');
 const symbol='<span class="ribbon-symbol"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19"/><circle cx="12" cy="12" r="2.5"/></svg></span>';
 const ribbonUnit=`<span class="ribbon-en">MY OWN VACATION</span>${symbol}<span class="ribbon-kr">마이롯지</span>${symbol}`;
 const ribbonGroup=ribbonUnit.repeat(3);
 ribbon.innerHTML=`<div class="ribbon-track"><div class="ribbon-set">${ribbonGroup}</div><div class="ribbon-set">${ribbonGroup}</div></div>`;
 ribbon.style.cssText='background:#FAF9F6;color:#141414;border-top:1px solid #E2DED6;border-bottom:1px solid #E2DED6;';
 const ribbonTrack=ribbon.querySelector('.ribbon-track');
 const ribbonMotion=matchMedia('(prefers-reduced-motion: reduce)');
 if(!ribbonMotion.matches){
  const ribbonAnimation=ribbonTrack.animate([{transform:'translate3d(0,0,0)'},{transform:'translate3d(-50%,0,0)'}],{duration:38000,iterations:Infinity,easing:'linear'});
  ribbon.addEventListener('mouseenter',()=>ribbonAnimation.pause());
  ribbon.addEventListener('mouseleave',()=>ribbonAnimation.play());
  ribbonMotion.addEventListener('change',event=>{if(event.matches)ribbonAnimation.cancel();});
 }
 document.querySelector('#ownership').before(ribbon);

 const scenes=[
  {name:'terrace',time:'09:00',label:'SLOW MORNING',title:'아무것도 하지 않는<br>시간까지, 나답게.',copy:'책 한 권과 따뜻한 커피. 숲을 바라보는 아침.',alt:'테라스에서 커피와 책을 함께 즐기는 부부'},
  {page:16,time:'16:00',label:'A PLACE TO GATHER',title:'각자의 일상에서,<br>우리의 주말로.',copy:'함께 먹고 웃는 장면에서 시작되는 별장 생활.',alt:'별장 앞에서 함께 식사를 준비하는 사람들'},
  {name:'dinner',time:'18:30',label:'TOGETHER AT THE TABLE',title:'식탁이 길어지면,<br>이야기도 길어집니다.',copy:'함께 준비한 저녁, 서두를 일 없는 대화.',alt:'숲속 별장 테라스에서 저녁을 함께하는 친구들'}
 ];
 const story=document.createElement('section');story.id='life-story';story.className='life-story';story.setAttribute('aria-label','별장에서 보내는 생활 장면');
 story.innerHTML='<div class="life-stage">'+scenes.map((scene,i)=>'<article class="life-scene'+(i===0?' is-active':'')+'" data-life-scene="'+i+'">'+(scene.page?`<img src="assets/images/plan-p16-960.webp" srcset="assets/images/plan-p16-480.webp 480w, assets/images/plan-p16-960.webp 960w, assets/images/plan-p16-1440.webp 1440w" sizes="100vw" width="1440" height="804" alt="${scene.alt} · 사업계획서 콘셉트" loading="lazy" decoding="async">`:lifestyleImage(scene.name,scene.alt))+'<div class="life-copy"><span class="scene-time">'+scene.time+'</span><p class="eyebrow">0'+(i+1)+' / '+scene.label+'</p><h2>'+scene.title+'</h2><p>'+scene.copy+'</p></div><p class="life-caption">'+(scene.page?'사업계획서 생활 콘셉트':'AI 생활 콘셉트')+' · 실제 고객·현장·제공 서비스 사진이 아닙니다</p></article>').join('')+'<div class="life-navigation"><span class="life-counter" aria-live="off">01 / 03</span><div class="life-meter"><i></i></div><span>스크롤로 다음 장면</span></div></div>';
 document.querySelector('#projects').after(story);
 const lifeScenes=[...story.querySelectorAll('.life-scene')];
 const counter=story.querySelector('.life-counter');
 const meter=story.querySelector('.life-meter i');
 const stage=story.querySelector('.life-stage');
 const vision=document.querySelector('#vision');
 const visible=new Set();
 let frame=0,lastScene=-1;
 const clamp=n=>Math.max(0,Math.min(1,n));
 function paint(){
  frame=0;
  if(reduced.matches||document.hidden)return;
  const viewport=innerHeight;
  if(visible.has(vision)){
   const rect=vision.getBoundingClientRect();const progress=clamp((viewport*.65-rect.top)/(viewport*.85));
   vision.style.setProperty('--vision-zoom',(.9+progress*.1).toFixed(3));
   vision.style.setProperty('--vision-corner',(42-progress*38).toFixed(1)+'px');
  }
  if(visible.has(story)&&!story.classList.contains('life-autoplay')&&!landscapeStory.matches&&!mobile.matches){
   const rect=story.getBoundingClientRect();
   const progress=clamp(-rect.top/Math.max(1,rect.height-stage.offsetHeight));
   const index=Math.min(2,Math.floor(progress*3));
   const within=clamp(progress*3-index);
   if(index!==lastScene){
    lastScene=index;
    lifeScenes.forEach((node,i)=>{node.classList.toggle('is-active',i===index);node.setAttribute('aria-hidden',String(i!==index));});
    counter.textContent=`0${index+1} / 03`;
   }
   lifeScenes[index].style.setProperty('--life-zoom',(1.1-within*.06).toFixed(3));
   lifeScenes[index].style.setProperty('--life-drift',((within-.5)*(mobile.matches?20:70)).toFixed(1)+'px');
   meter.style.transform=`scaleX(${progress})`;
  }
 }
 function queue(){if(!frame&&!reduced.matches&&!document.hidden)frame=requestAnimationFrame(paint);}
 const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)visible.add(entry.target);else visible.delete(entry.target);});ribbon.classList.toggle('is-running',visible.has(ribbon));document.body.classList.toggle('life-in-view',visible.has(story));queue();});
 [vision,story,ribbon].forEach(node=>observer.observe(node));
 function updateMotion(){
  if(story.classList.contains('life-autoplay'))return;
  lastScene=-1;
  if(reduced.matches||landscapeStory.matches||mobile.matches){cancelAnimationFrame(frame);frame=0;lifeScenes.forEach(node=>node.removeAttribute('aria-hidden'));}
  else {lifeScenes.forEach(node=>node.setAttribute('aria-hidden',String(!node.classList.contains('is-active'))));queue();}
 }
 reduced.addEventListener('change',updateMotion);
 landscapeStory.addEventListener('change',updateMotion);
 mobile.addEventListener('change',updateMotion);
 window.addEventListener('scroll',queue,{passive:true});window.addEventListener('resize',queue,{passive:true});
 document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(frame);frame=0;}else queue();});
 updateMotion();
})();

// Participation: visual storytelling only. No account, contract or payment integration.
(() => {
 const section=document.querySelector('#participation');if(!section)return;
 section.classList.add('participation-spectacle');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const decoration=document.createElement('div');decoration.className='journey-atmosphere';decoration.setAttribute('aria-hidden','true');
 decoration.innerHTML='<div class="journey-orbit orbit-one"></div><div class="journey-orbit orbit-two"></div><div class="journey-glow"></div><span class="journey-watermark">YOUR NEXT CHAPTER</span>';
 section.prepend(decoration);
 const intro=section.querySelector('.intro');intro.insertAdjacentHTML('afterbegin','<p class="journey-kicker">THE JOURNEY · 함께 준비하는 네 장면</p>');
 const steps=[...section.querySelectorAll('.step')];
 steps.forEach((step,i)=>{
  step.style.setProperty('--step-order',i);
  step.insertAdjacentHTML('afterbegin','<span class="journey-step-label">'+['DISCOVER','CONSIDER','PREPARE','STAY'][i]+'</span><span class="journey-step-ghost" aria-hidden="true">0'+(i+1)+'</span>');
  step.insertAdjacentHTML('beforeend','<span class="journey-step-edge" aria-hidden="true">↗</span>');
 });
 const checklist=section.querySelector('#checklist'),contract=section.querySelector('#member');
 checklist.open=true;contract.open=true;
 const cards=[...checklist.querySelectorAll('.check-card')];
 cards.forEach((card,i)=>{card.insertAdjacentHTML('afterbegin','<span class="check-index" aria-hidden="true">0'+(i+1)+'</span>');card.style.setProperty('--step-order',i);});
 const preview=document.createElement('div');preview.className='contract-art';preview.setAttribute('aria-hidden','true');
 preview.innerHTML='<div class="contract-halo"></div><div class="document-stack stack-back"></div><div class="document-stack stack-mid"></div><div class="document-stack stack-front"><span>MY LODGE</span><b>나의 다음 생활</b><i></i><i></i><i></i><em>화면 구상 · 준비 중</em></div><span class="floating-chip chip-one">계약 문서 · 연결 후 표시</span><span class="floating-chip chip-two">납입 일정 · 조건 확정 후 안내</span><span class="floating-chip chip-three">사업 진행 · 확인된 소식 안내</span>';
 contract.querySelector('summary').after(preview);
 const targets=[intro,...steps,checklist,...cards,contract];
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{entry.target.classList.toggle('journey-visible',entry.isIntersecting||reduced.matches);}),{threshold:.12});
 targets.forEach(node=>{node.classList.add('journey-reveal');observer.observe(node);});
 let visible=false,frame=0;
 const sectionObserver=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;section.classList.toggle('journey-running',visible&&!reduced.matches&&!document.hidden);queue();});sectionObserver.observe(section);
 function paint(){frame=0;if(!visible||reduced.matches||document.hidden)return;const rect=section.getBoundingClientRect();const progress=Math.max(0,Math.min(1,(innerHeight-rect.top)/(innerHeight+rect.height)));section.style.setProperty('--journey-progress',progress.toFixed(4));section.style.setProperty('--orbit-turn',(progress*110).toFixed(2)+'deg');section.style.setProperty('--journey-drift',(progress*140-70).toFixed(1)+'px');}
 function queue(){if(!frame&&visible&&!reduced.matches&&!document.hidden)frame=requestAnimationFrame(paint);}
 window.addEventListener('scroll',queue,{passive:true});window.addEventListener('resize',queue,{passive:true});
 const fine=matchMedia('(hover:hover) and (pointer:fine)');
 [...steps,...cards].forEach(card=>{
  let pointerFrame=0,x=0,y=0;
  card.addEventListener('pointermove',event=>{if(!fine.matches||reduced.matches)return;const rect=card.getBoundingClientRect();x=(event.clientX-rect.left)/rect.width;y=(event.clientY-rect.top)/rect.height;if(pointerFrame)return;pointerFrame=requestAnimationFrame(()=>{pointerFrame=0;card.style.setProperty('--light-x',(x*100).toFixed(1)+'%');card.style.setProperty('--light-y',(y*100).toFixed(1)+'%');card.style.setProperty('--tilt-x',((.5-y)*7).toFixed(2)+'deg');card.style.setProperty('--tilt-y',((x-.5)*9).toFixed(2)+'deg');});});
  card.addEventListener('pointerleave',()=>{cancelAnimationFrame(pointerFrame);pointerFrame=0;['--tilt-x','--tilt-y','--light-x','--light-y'].forEach(key=>card.style.removeProperty(key));});
 });
 reduced.addEventListener('change',()=>{targets.forEach(node=>node.classList.toggle('journey-visible',reduced.matches||node.getBoundingClientRect().top<innerHeight));section.classList.toggle('journey-running',visible&&!reduced.matches&&!document.hidden);queue();});
 document.addEventListener('visibilitychange',()=>{section.classList.toggle('journey-running',visible&&!reduced.matches&&!document.hidden);if(document.hidden){cancelAnimationFrame(frame);frame=0;}else queue();});
 if(reduced.matches)targets.forEach(node=>node.classList.add('journey-visible'));
})();
