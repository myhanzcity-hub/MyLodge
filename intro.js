// One encoded movie. Playback follows the media clock, never a slide timer.
(() => {
 'use strict';
 const hero=document.querySelector('.hero');if(!hero)return;
 const stage=document.createElement('section');stage.className='film-stage';stage.setAttribute('aria-label','마이롯지 30초 인트로 영상');
 const narrowQuery=matchMedia('(max-width:700px)');
 const narrow=narrowQuery.matches;
 const english=new URLSearchParams(location.search).get('lang')==='en';
 const movie=english?(narrow?'mylodge-intro-en-30s-mobile.mp4':'mylodge-intro-en-30s.mp4'):(narrow?'mylodge-intro-scenes-20261006-30s-mobile.mp4':'mylodge-intro-scenes-20261006-30s.mp4');
 const poster=english?(narrow?'mylodge-intro-en-poster-mobile.webp':'mylodge-intro-en-poster.webp'):(narrow?'mylodge-intro-scenes-20261006-poster-mobile.webp':'mylodge-intro-scenes-20261006-poster.webp');
 const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
 stage.innerHTML=`<video class="film-video" loop playsinline preload="auto" muted poster="assets/video/${poster}" aria-label="별장, 휴식, 풀장, 커뮤니티, 만남, 클럽과 야간 축제로 이어지는 마이롯지 영상" aria-describedby="film-description"><source src="assets/video/${movie}" type="video/mp4"></video>
 <p id="film-description" class="film-sr-only">30초 공간·생활 콘셉트 영상. 문구마다 새로 생성한 별장 외관, 실내 휴식, 풀장, 카페테리아, 사업가들이 함께하는 만남의 광장, 파트너와의 만남, 클럽, 야외 축제, 관객의 열기 이미지 9개를 사용합니다. 문구: 나! 별장있다. 내 안에 완벽한 여유. 속에 나를 담다. 일상을 휴가처럼. 내가 원하는 사람들과의 만남. 그들과 함께 할 수 있는 만남의 광장. 내가 찾는 파트너들과의 조우. 신나는 밤. 춤과 음악. 매일마다 축제. 꺼지지 않는 화려함. 기쁨의 향연. 이미지 요소와 문구에 모션을 합성한 무음 영상입니다.</p>
 <div class="film-top"><a href="#our-villa" class="film-skip">마이롯지 만나보기 ↓</a></div>
 <div class="film-introduction film-sr-only"><h1>나! 별장있다.</h1></div>
 <div class="film-end" hidden><button type="button" class="film-replay">다시보기 ↻</button><a href="#villa-spaces">시설 둘러보기 ↗</a><a href="#projects">별장 둘러보기 ↗</a></div>
 <div class="film-bottom"><div class="film-transport"><button type="button" class="film-pause">일시정지</button></div><p class="film-note">마이롯지가 그리는 생활 · AI 콘셉트 영상</p></div><p class="film-status film-sr-only" role="status"></p>`;
 hero.append(stage);hero.classList.add('has-motion-intro');
 const video=stage.querySelector('video'),pause=stage.querySelector('.film-pause');
 const transport=stage.querySelector('.film-transport'),ending=stage.querySelector('.film-end'),status=stage.querySelector('.film-status'),menu=document.querySelector('#mobile-menu');
 let started=false,inView=true,resumeOnReturn=false,failed=false,finished=false;
 let mediaChange=0;
 narrowQuery.addEventListener('change',event=>{
  if(failed)return;
  const revision=++mediaChange,time=video.currentTime,shouldResume=!video.paused||resumeOnReturn;
  video.pause();
  const prefix=english?'mylodge-intro-en':'mylodge-intro-scenes-20261006';
  video.poster=`assets/video/${prefix}-poster${event.matches?'-mobile':''}.webp`;
  video.querySelector('source').src=`assets/video/${prefix}-30s${event.matches?'-mobile':''}.mp4`;
  video.addEventListener('loadedmetadata',()=>{
   if(revision!==mediaChange)return;
   video.currentTime=Math.min(time,Math.max(0,video.duration-.01));
   resumeOnReturn=shouldResume;sync();visibility();
  },{once:true});
  video.load();
 });
 function sync(){
  const ended=video.ended||finished;
  stage.classList.toggle('is-started',started);stage.classList.toggle('is-playing',!video.paused);stage.classList.toggle('is-ended',ended);
  pause.hidden=ended;ending.hidden=!ended;
  const playLabel=started?'이어보기':'재생';
  pause.textContent=video.paused?playLabel:'일시정지';pause.setAttribute('aria-label',video.paused?`인트로 영상 ${playLabel}`:'인트로 영상 일시정지');
  if(started&&!ended)status.textContent=video.paused?'인트로 영상을 일시정지했습니다.':'인트로 영상을 재생합니다.';
 }
 async function play(){
  if(failed)return;started=true;finished=false;resumeOnReturn=false;sync();
  try{await video.play();sync();}
  catch(error){if(error.name==='AbortError'){sync();return;}started=false;sync();status.textContent='하단 재생 버튼으로 영상을 재생할 수 있습니다.';}
 }
 stage.querySelector('.film-replay').addEventListener('click',()=>{video.currentTime=0;play();pause.focus({preventScroll:true});});
 pause.addEventListener('click',()=>{resumeOnReturn=false;if(video.paused)play();else video.pause();});
 stage.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{resumeOnReturn=false;video.pause();}));
 video.addEventListener('play',()=>{started=true;sync();visibility();});
 for(const event of ['pause','volumechange'])video.addEventListener(event,sync);
 function visibility(){
  const available=inView&&!document.hidden&&(!menu||menu.hidden);
  if(!available){if(!video.paused){resumeOnReturn=true;video.pause();}}
  else if(resumeOnReturn&&!video.ended&&!finished&&!reducedMotion.matches){resumeOnReturn=false;video.play().catch(()=>{});}
 }
 new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;visibility();},{threshold:.15}).observe(hero);
 document.addEventListener('visibilitychange',visibility);
 reducedMotion.addEventListener('change',event=>{if(event.matches){resumeOnReturn=false;video.pause();}});
 if(menu)new MutationObserver(visibility).observe(menu,{attributes:true,attributeFilter:['hidden']});
 video.addEventListener('error',()=>{failed=true;video.pause();stage.remove();hero.classList.remove('has-motion-intro');});
 sync();
 // Silent intro assets start immediately; background music is pending user review.
 if(!reducedMotion.matches){if(document.hidden)resumeOnReturn=true;else play();}
})();
