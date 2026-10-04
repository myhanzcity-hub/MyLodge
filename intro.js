// Six presentation scenes, three chapters, 30 seconds. No scroll or navigation lock.
(() => {
 'use strict';
 const hero=document.querySelector('.hero');
 if(!hero)return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const scenes=[
  {image:'vacation-arrival',chapter:0,kicker:'01 / THE WHOLE HOUSE',title:'나 별장있다.',copy:'바다 곁, 나의 모듈형 하우스.',alt:'바다와 소나무 곁 올리브색 2층 모듈 하우스 전체와 SUV',position:'center',from:'scale(1)',to:'scale(1.035)'},
  {image:'vacation-arrival',chapter:0,kicker:'02 / ARRIVE & UNWIND',title:'차를 세우면,\n휴가가 시작된다.',copy:'고즈넉한 풍경. 세련된 공간. 나의 베케이션.',alt:'곡선 유리와 은은한 조명이 있는 모듈 하우스 외관',position:'70% center',from:'scale(1.06)',to:'scale(1.12)'},
  {image:'intro-interior',chapter:1,kicker:'03 / STEP INSIDE',title:'문을 열면,\n내가 바라던 쉼.',copy:'큰 창 너머 바다, 빛이 머무는 거실.',alt:'해안 모듈 하우스 안의 큰 창, 아이보리 소파와 우드 주방',position:'62% center',from:'scale(1)',to:'scale(1.045)'},
  {image:'intro-interior',chapter:1,kicker:'04 / INTERIOR DETAILS',title:'취향은,\n작은 디테일에서.',copy:'따뜻한 우드 · 부드러운 패브릭 · 은은한 조명',alt:'모듈 하우스 실내 소파의 패브릭과 우드 가구, 천장의 간접조명',position:'76% center',from:'scale(1.12)',to:'scale(1.18)'},
  {image:'intro-friends',chapter:2,kicker:'05 / TIME TOGETHER',title:'좋은 공간에,\n좋아하는 사람들.',copy:'별장 앞 테라스, 커피와 이야기가 이어지는 오후.',alt:'같은 모듈 하우스 앞 테라스에서 커피와 대화를 즐기는 네 친구',position:'65% center',from:'scale(1)',to:'scale(1.04)'},
  {image:'intro-friends',chapter:2,kicker:'06 / MY OWN VACATION',title:'친구야,\n나 별장있어.',copy:'상류층의 꿈이던 별장, 이제 우리도.',alt:'바다 곁 모듈 하우스에서 함께 휴가를 즐기는 친구들',position:'65% center',from:'scale(1.055)',to:'scale(1.02)'}
 ];
 const picture=(s,i)=>`<img src="assets/images/${s.image}-960.webp" srcset="assets/images/${s.image}-480.webp 480w, assets/images/${s.image}-960.webp 960w, assets/images/${s.image}-1680.webp 1680w" sizes="${i===0?'100vw':'(max-width:700px) 116svh, 100vw'}" width="1680" height="946" alt="${s.alt} · AI 공간·생활 콘셉트" decoding="async" ${i===0?'fetchpriority="high"':'fetchpriority="low"'} style="object-position:${s.position}">`;
 const stage=document.createElement('div');stage.className='intro-stage';stage.setAttribute('aria-label','마이롯지 30초 공간 이야기');
 stage.innerHTML=`<div class="intro-scenes">${scenes.map((s,i)=>`<figure class="intro-scene ${i===0?'is-current':''}" data-intro-scene="${i}" aria-hidden="${i!==0}">${picture(s,i)}</figure>`).join('')}</div>
  <div class="intro-top"><span>MY LODGE / 30 SECONDS OF VACATION</span><a class="intro-skip" href="#villa-spaces">건너뛰기 ↓</a></div>
  <div class="intro-copy"><p class="intro-kicker">${scenes[0].kicker}</p><h1 class="intro-title">${scenes[0].title}</h1><p class="intro-description">${scenes[0].copy}</p></div>
  <div class="intro-footer"><div class="intro-meta"><span class="intro-time">00:00 / 00:30</span><span class="intro-counter">01 / 06</span><a class="intro-explore" href="#villa-spaces">별장 공간 둘러보기 ↗</a></div>
   <div class="intro-controls"><div class="intro-chapters" role="group" aria-label="이야기 장면 선택">${['모듈 하우스','인테리어','함께하는 휴가'].map((label,i)=>`<button type="button" data-intro-chapter="${i}" ${i===0?'aria-current="step"':''}><span class="intro-chapter-number">0${i+1}</span><span>${label}</span><span class="intro-chapter-track" aria-hidden="true"><i></i></span></button>`).join('')}</div>
   <div class="intro-transport"><button type="button" data-intro-prev aria-label="이전 장면">←</button><button type="button" class="intro-play" data-intro-play>일시정지</button><button type="button" data-intro-next aria-label="다음 장면">→</button></div></div>
   <p class="intro-note">AI 공간·생활 콘셉트 · 실제 현장·고객 사진이 아닙니다. 설계·시설·이용 조건은 미확정입니다.</p><span class="intro-status sr-only" role="status"></span></div>`;
 hero.append(stage);hero.classList.add('has-motion-intro');
 const frames=[...stage.querySelectorAll('.intro-scene')],images=frames.map(f=>f.querySelector('img'));
 const chapters=[...stage.querySelectorAll('[data-intro-chapter]')];
 const title=stage.querySelector('.intro-title'),kicker=stage.querySelector('.intro-kicker'),copy=stage.querySelector('.intro-description');
 const play=stage.querySelector('[data-intro-play]'),time=stage.querySelector('.intro-time'),counter=stage.querySelector('.intro-counter');
 const prev=stage.querySelector('[data-intro-prev]'),next=stage.querySelector('[data-intro-next]'),status=stage.querySelector('.intro-status');
 const duration=30000,sceneDuration=5000;
 let elapsed=0,index=-1,wantsPlay=!reduced.matches,inView=true,ready=false,last=0,request=0,camera=null,copyMotion=null,loading=false,loadVersion=0;
 const menu=document.querySelector('#mobile-menu');
 const loads=images.map(img=>img.decode().catch(()=>false));
 function effectivePlay(){return wantsPlay&&inView&&!document.hidden&&(!menu||menu.hidden)&&ready&&!loading&&elapsed<duration;}
 function updateControls(){
  play.textContent=elapsed>=duration?'다시보기':wantsPlay?'일시정지':'재생';
  play.setAttribute('aria-label',elapsed>=duration?'30초 이야기 다시보기':wantsPlay?'30초 이야기 일시정지':'30초 이야기 재생');
  prev.disabled=elapsed===0;next.disabled=index===scenes.length-1;
  stage.classList.toggle('intro-is-paused',!effectivePlay());
 }
 function paintTime(){
  time.textContent=`00:${String(Math.floor(elapsed/1000)).padStart(2,'0')} / 00:30`;
  chapters.forEach((button,i)=>button.querySelector('i').style.transform=`scaleX(${Math.min(1,Math.max(0,(elapsed-i*10000)/10000))})`);
 }
 function render(newIndex){
  if(newIndex===index)return;
  index=newIndex;const s=scenes[index];
  frames.forEach((frame,i)=>{frame.classList.toggle('is-current',i===index);frame.setAttribute('aria-hidden',String(i!==index));});
  title.textContent=s.title;kicker.textContent=s.kicker;copy.textContent=s.copy;
  counter.textContent=`0${index+1} / 06`;stage.dataset.chapter=String(s.chapter);
  chapters.forEach((b,i)=>{if(i===s.chapter)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current');});
  camera?.cancel();copyMotion?.cancel();camera=null;
  if(!reduced.matches){
   camera=images[index].animate([{transform:s.from},{transform:s.to}],{duration:sceneDuration,fill:'both',easing:'linear'});
   camera.pause();camera.currentTime=elapsed-index*sceneDuration;
   copyMotion=stage.querySelector('.intro-copy').animate([{opacity:0,transform:'translateY(12px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,fill:'both',easing:'ease-out'});
  }
  updateControls();
 }
 function sync(){
  cancelAnimationFrame(request);request=0;last=0;
  updateControls();
  if(effectivePlay())request=requestAnimationFrame(tick);
 }
 async function waitForScene(newIndex){
  loading=true;const version=++loadVersion;sync();
  await loads[newIndex];if(version!==loadVersion)return;
  loading=false;render(newIndex);
  if(camera)camera.currentTime=elapsed-index*sceneDuration;
  sync();
 }
 function tick(now){
  request=0;if(!effectivePlay()){last=0;return;}
  if(last)elapsed=Math.min(duration,elapsed+now-last);last=now;
  const newIndex=Math.min(scenes.length-1,Math.floor(elapsed/sceneDuration));
  if(newIndex!==index){
   if(!images[newIndex].complete){waitForScene(newIndex);return;}
   render(newIndex);
  }
  if(camera)camera.currentTime=Math.min(sceneDuration,elapsed-index*sceneDuration);
  paintTime();
  if(elapsed>=duration){wantsPlay=false;sync();return;}
  request=requestAnimationFrame(tick);
 }
 function seek(newIndex){
  elapsed=Math.max(0,Math.min(scenes.length-1,newIndex))*sceneDuration;
  paintTime();waitForScene(Math.floor(elapsed/sceneDuration));
  status.textContent=`${Math.floor(elapsed/sceneDuration)+1}번째 장면: ${scenes[Math.floor(elapsed/sceneDuration)].title.replace(/\n/g,' ')}`;
 }
 chapters.forEach((button,i)=>button.addEventListener('click',()=>seek(i*2)));
 prev.addEventListener('click',()=>seek(index-1));next.addEventListener('click',()=>seek(index+1));
 play.addEventListener('click',()=>{
  if(elapsed>=duration){wantsPlay=true;seek(0);}else{wantsPlay=!wantsPlay;sync();}
 });
 document.addEventListener('visibilitychange',sync);
 if(menu)new MutationObserver(sync).observe(menu,{attributes:true,attributeFilter:['hidden']});
 new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;sync();},{threshold:.15}).observe(hero);
 reduced.addEventListener('change',()=>{wantsPlay=false;index=-1;render(Math.min(5,Math.floor(elapsed/sceneDuration)));sync();});
 images.forEach((img,i)=>img.addEventListener('error',()=>{if(i!==0&&img.getAttribute('src')!==images[0].getAttribute('src')){img.removeAttribute('srcset');img.src=images[0].src;img.alt='마이롯지 모듈 하우스 외관 · 실내 또는 생활 이미지 대신 표시';}}));
 render(0);paintTime();
 loads[0].then(()=>{ready=true;sync();});
 const copyright=document.querySelector('.copyright');
 if(copyright)copyright.textContent='© 2026 MY LODGE. 사전 안내 페이지 · 2026.10.04 화면 업데이트';
})();
