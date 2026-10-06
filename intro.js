// One encoded movie. Playback follows the media clock, never a slide timer.
(() => {
 'use strict';
 const hero=document.querySelector('.hero');if(!hero)return;
 const stage=document.createElement('section');stage.className='film-stage';stage.setAttribute('aria-label','마이롯지 30초 인트로 영상');
 const narrow=matchMedia('(max-width:700px)').matches;
 const movie=narrow?'mylodge-intro-impact-30s-mobile.mp4':'mylodge-intro-impact-30s.mp4';
 const poster=narrow?'mylodge-intro-impact-poster-mobile.webp':'mylodge-intro-impact-poster.webp';
 const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
 stage.innerHTML=`<video class="film-video" playsinline preload="auto" muted poster="assets/video/${poster}" aria-label="외관, 인테리어, 친구들의 휴가로 이어지는 마이롯지 영상" aria-describedby="film-description"><source src="assets/video/${movie}" type="video/mp4"></video>
 <p id="film-description" class="film-sr-only">30초 공간·생활 콘셉트 영상. 빛과 모듈이 모여 바다 곁 별장을 드러내고, 창을 통해 실내로 이어집니다. 가구와 소재가 등장한 뒤 테라스에서 커피를 즐기는 친구들을 보여줍니다. 이미지 요소와 문구에 모션을 합성한 영상이며, 소리를 켜면 파도 소리가 들립니다.</p>
 <div class="film-top"><div class="film-context"><span>MY LODGE SHARE</span><p>공유별장 구상 · 사전 안내</p><a href="#pricing"><span class="film-price-label">1구좌 검토 금액</span> <span class="film-price-value"><b>${document.querySelector('.mobile-price b').textContent}</b> ↗</span></a><small>추가 비용·권리·이용 조건 미확정</small></div><a href="#our-villa" class="film-skip">참여 기준 살펴보기 ↓</a></div>
 <div class="film-introduction film-sr-only"><h1>나 별장있다.</h1></div>
 <div class="film-end" hidden><button type="button" class="film-replay">다시보기 ↻</button><a href="#villa-spaces">별장 둘러보기 ↗</a><a href="#pricing">비용·권리 보기 ↗</a></div>
 <div class="film-bottom"><div class="film-transport"><button type="button" class="film-pause">일시정지</button><button type="button" class="film-sound" aria-pressed="false">음량 켜기</button></div><p class="film-note">AI 공간·생활 콘셉트 · 설계·시설·이용 조건은 미확정입니다.</p></div><p class="film-status film-sr-only" role="status"></p>`;
 hero.append(stage);hero.classList.add('has-motion-intro');
 const video=stage.querySelector('video'),pause=stage.querySelector('.film-pause'),sound=stage.querySelector('.film-sound');
 const transport=stage.querySelector('.film-transport'),ending=stage.querySelector('.film-end'),status=stage.querySelector('.film-status'),menu=document.querySelector('#mobile-menu');
 let started=false,inView=true,resumeOnReturn=false,failed=false;
 function sync(){
  stage.classList.toggle('is-started',started);stage.classList.toggle('is-playing',!video.paused);stage.classList.toggle('is-ended',video.ended);
  pause.hidden=video.ended;ending.hidden=!video.ended;
  const playLabel=started?'이어보기':'재생';
  pause.textContent=video.paused?playLabel:'일시정지';pause.setAttribute('aria-label',video.paused?`인트로 영상 ${playLabel}`:'인트로 영상 일시정지');
  sound.textContent=video.muted?'음량 켜기':'음량 끄기';sound.setAttribute('aria-pressed',String(!video.muted));
 }
 async function play(){
  if(failed)return;started=true;resumeOnReturn=false;sync();
  try{await video.play();status.textContent='인트로 영상을 재생합니다.';}
  catch(error){if(error.name==='AbortError'){sync();return;}started=false;sync();status.textContent='하단 재생 버튼으로 영상을 재생할 수 있습니다.';}
 }
 stage.querySelector('.film-replay').addEventListener('click',()=>{video.currentTime=0;play();pause.focus({preventScroll:true});});
 pause.addEventListener('click',()=>{resumeOnReturn=false;if(video.paused)play();else video.pause();});
 sound.addEventListener('click',()=>{video.muted=!video.muted;if(!started&&!video.muted)play();sync();});
 stage.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{resumeOnReturn=false;video.pause();}));
 video.addEventListener('play',()=>{started=true;sync();visibility();});
 for(const event of ['pause','volumechange'])video.addEventListener(event,sync);
 video.addEventListener('ended',()=>{
  resumeOnReturn=false;sync();status.textContent='영상이 끝났습니다. 다시 보거나 별장 공간을 둘러보세요.';
  if(transport.contains(document.activeElement))stage.querySelector('.film-replay').focus({preventScroll:true});
 });
 function visibility(){
  const available=inView&&!document.hidden&&(!menu||menu.hidden);
  if(!available){if(!video.paused){resumeOnReturn=true;video.pause();}}
  else if(resumeOnReturn&&!video.ended&&!reducedMotion.matches){resumeOnReturn=false;video.play().catch(()=>{});}
 }
 new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;visibility();},{threshold:.15}).observe(hero);
 document.addEventListener('visibilitychange',visibility);
 reducedMotion.addEventListener('change',event=>{if(event.matches){resumeOnReturn=false;video.pause();}});
 if(menu)new MutationObserver(visibility).observe(menu,{attributes:true,attributeFilter:['hidden']});
 video.addEventListener('error',()=>{failed=true;video.pause();stage.remove();hero.classList.remove('has-motion-intro');});
 sync();
 // Muted entry playback starts immediately. Sound remains a visitor choice.
 if(!reducedMotion.matches){if(document.hidden)resumeOnReturn=true;else play();}
})();
