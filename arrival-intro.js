// A separate entry page. The existing homepage and its film stay in index.html.
(() => {
 'use strict';
 function init(){
  const hero=document.querySelector('.hero');
  if(!hero||hero.querySelector('.story-intro'))return;
  const english=new URLSearchParams(location.search).get('lang')==='en';
  const homepage=new URL('index.html',location.href);
  homepage.search=location.search;
  homepage.hash=location.hash&&location.hash!=='#intro'?location.hash:'#home';
  // Preserve old deep links instead of trapping them on the introduction.
  if(location.hash&&!['#home','#intro'].includes(location.hash)){
   location.replace(homepage.href);return;
  }
  if(english){document.documentElement.lang='en';document.title='MyLodge · A Holiday Home of My Own.';}
  document.querySelector('.entry-fallback a').href=homepage.href;
  const motion=matchMedia('(prefers-reduced-motion: reduce)');
  const local=(ko,en)=>english?en:ko;
  const scenes=[
   {id:'ownership',topic:['A HOLIDAY HOME OF MY OWN','OWNERSHIP'],lines:[['나도, 별장이 있다.'],['A Holiday Home','of My Own.']],copy:['특별한 일상을 꿈꾸는 새로운 방식.','A new way to imagine an extraordinary everyday.'],asset:'resort-overview-20261006',position:'60% 48%'},
   {id:'freedom',topic:['BEYOND THE ORDINARY','FREEDOM'],lines:[['일상을 넘어,','나만의 휴식으로.'],['Beyond the Ordinary.']],copy:['바쁜 일상을 벗어나 특별한 시간을 만나다.','Step away from the busy everyday. Make time for something special.'],asset:'brand-villa-atmosphere-20261008',position:'38% 50%'},
   {id:'lifestyle',topic:['A NEW EVERYDAY BEGINS HERE','A NEW LIFESTYLE'],lines:[['새로운 일상이','시작되는 곳.'],['A New Everyday','Begins Here.']],copy:['휴식과 즐거움이 자연스럽게 이어지는 공간.','A place where relaxation flows naturally into enjoyment.'],asset:'resort-overview-20261006',position:'72% 58%'},
   {id:'community',topic:['BETTER MOMENTS, TOGETHER','COMMUNITY'],lines:[['좋은 사람들과,','더 특별한 순간.'],['Better Moments,','Together.']],copy:['새로운 만남과 특별한 경험이 이어지는 곳.','A place for new connections and extraordinary shared experiences.'],asset:'owner-connect-20261007',position:'51% 45%'},
   {id:'my-lodge',topic:['A NEW EVERYDAY','A NEW EVERYDAY'],lines:[['MY LODGE'],['MY LODGE']],copy:['당신이 꿈꾸던 새로운 라이프스타일.','The new lifestyle you have imagined.'],asset:'vision-masterplan-20261007',position:'53% 46%'}
  ];
  const lang=english?1:0;
  const secondsPerScene=4.5,totalSeconds=scenes.length*secondsPerScene;
  const stage=document.createElement('section');
  stage.className='story-intro';stage.dataset.language=english?'en':'ko';stage.tabIndex=0;
  stage.setAttribute('aria-label',local('마이롯지 약 23초 인트로 · 5개 장면','MyLodge 23-second introduction · 5 scenes'));
  stage.setAttribute('aria-describedby','story-intro-description');
  stage.innerHTML=`<div class="story-images" aria-hidden="true"><figure><img alt="" decoding="async"></figure><figure><img alt="" decoding="async"></figure></div>
   <div class="story-shade" aria-hidden="true"></div>
   <div class="story-top"><span>MY LODGE / INTRO</span><button type="button" class="story-enter">${local('인트로 건너뛰기 ↗','Skip Intro ↗')}</button></div>
   <div class="story-caption"><div class="story-meta"><p class="story-topic"></p><span class="story-counter"></span></div><h1 class="story-title"></h1><p class="story-copy"></p><a class="story-discover" href="${homepage.href}" hidden>${local('마이롯지 알아보기','Explore MyLodge')} <span aria-hidden="true">↗</span></a></div>
   <div class="story-bottom"><div class="story-progress" role="progressbar" aria-label="${local('인트로 진행','Introduction progress')}" aria-valuemin="0" aria-valuemax="${totalSeconds}" aria-valuenow="0"><span></span></div>
   <div class="story-controls"><div class="story-transport"><button type="button" class="story-prev" aria-label="${local('이전 장면','Previous scene')}">←</button><button type="button" class="story-play"></button><button type="button" class="story-next" aria-label="${local('다음 장면','Next scene')}">→</button></div><p class="story-note">${local('마이롯지가 그리는 생활 · AI 콘셉트 이미지','Life imagined by MyLodge · AI concept images')}</p></div></div>
   <p id="story-intro-description" class="story-sr">${local('나만의 별장에 대한 꿈에서 자유로운 휴식, 새로운 일상, 함께하는 순간, 마이롯지로 이어지는 다섯 장면입니다. 일시정지하거나 이전·다음 버튼으로 살펴보고, 건너뛰기 또는 마지막 장면의 마이롯지 알아보기로 홈페이지에 이동할 수 있습니다. 이미지는 구상 단계의 콘셉트입니다.','Five scenes move from the dream of a holiday home to freedom, a new lifestyle, community and MyLodge. Pause or use previous and next to explore. Skip Intro or the final Explore MyLodge link opens the homepage. Images show concepts, not confirmed facilities or services.')}</p>
   <p class="story-status story-sr" role="status"></p>`;
  hero.append(stage);hero.classList.add('has-story-intro');
  const frames=[...stage.querySelectorAll('.story-images figure')];
  const topic=stage.querySelector('.story-topic'),counter=stage.querySelector('.story-counter');
  const title=stage.querySelector('.story-title'),copy=stage.querySelector('.story-copy');
  function renderLines(scene){
   title.replaceChildren(...scene.lines[lang].map(line=>{
    const span=document.createElement('span');span.textContent=line;return span;
   }));
   stage.dataset.lines=String(scene.lines[lang].length);
  }
  const playButton=stage.querySelector('.story-play'),prev=stage.querySelector('.story-prev'),next=stage.querySelector('.story-next');
  const progress=stage.querySelector('.story-progress'),status=stage.querySelector('.story-status');
  const menu=document.querySelector('#mobile-menu');
  let index=0,requested=0,active=-1,revision=0,loading=false,finished=false;
  let elapsed=0,lastTick=0,raf=0,lastAnnouncedSecond=-1;
  let inView=false,userPaused=motion.matches||Boolean(location.hash&&location.hash!=='#home');
  const preloaded=new Map();
  function prepare(scene){
   if(preloaded.has(scene.id))return preloaded.get(scene.id);
   const image=new Image(),largest=scene.largest||1680;
   // A full-height portrait crop needs pixels for its height, not just screen width.
   image.decoding='async';image.sizes='max(100vw, 200svh)';
   image.srcset=[480,960,largest].map(w=>`assets/images/${scene.asset}-${w}.webp ${w}w`).join(', ');
   image.src=`assets/images/${scene.asset}-960.webp`;
   let timeout;
   const ready=Promise.race([
    image.decode().then(()=>({image,ok:true})).catch(()=>({image,ok:false})),
    new Promise(resolve=>{timeout=setTimeout(()=>resolve({image,ok:false}),7000);})
   ]).finally(()=>clearTimeout(timeout));
   preloaded.set(scene.id,ready);return ready;
  }
  function available(){return inView&&!document.hidden&&(!menu||menu.hidden)&&!userPaused&&!finished&&!loading;}
  function updateProgress(){
   const value=index*secondsPerScene+Math.min(secondsPerScene,elapsed/1000);
   progress.style.setProperty('--story-progress',String(value/totalSeconds));
   const second=Math.floor(value);
   if(second!==lastAnnouncedSecond){progress.setAttribute('aria-valuenow',String(second));lastAnnouncedSecond=second;}
  }
  function sync(){
   const playing=available();stage.classList.toggle('is-paused',!playing);stage.classList.toggle('is-finished',finished);
   playButton.textContent=finished?local('다시보기 ↻','Replay ↻'):userPaused?local('재생 ▶','Play ▶'):local('일시정지 Ⅱ','Pause Ⅱ');
   playButton.setAttribute('aria-label',finished?local('인트로 다시보기','Replay introduction'):userPaused?local('인트로 재생','Play introduction'):local('인트로 일시정지','Pause introduction'));
   prev.disabled=index===0;next.disabled=index===scenes.length-1;
   cancelAnimationFrame(raf);raf=0;lastTick=0;
   if(playing)raf=requestAnimationFrame(tick);
  }
  function tick(now){
   raf=0;if(!available()){lastTick=0;return;}
   if(lastTick)elapsed+=now-lastTick;
   lastTick=now;updateProgress();
   if(elapsed>=secondsPerScene*1000){
    if(index<scenes.length-1)select(index+1);
    else {finished=true;elapsed=secondsPerScene*1000;updateProgress();sync();}
   }else raf=requestAnimationFrame(tick);
  }
  async function select(value){
   requested=Math.max(0,Math.min(scenes.length-1,value));
   const ticket=++revision,scene=scenes[requested];
   loading=true;finished=false;stage.setAttribute('aria-busy','true');sync();
   const result=await prepare(scene);
   if(ticket!==revision)return;
   const target=active===0?1:0,frame=frames[target],image=frame.querySelector('img');
   image.srcset=result.image.srcset;image.sizes='max(100vw, 200svh)';image.src=result.image.src;
   frame.style.setProperty('--story-focal',scene.position);frame.classList.toggle('image-failed',!result.ok);
   frames.forEach((item,i)=>item.classList.toggle('is-active',i===target));active=target;
   index=requested;elapsed=0;
   topic.textContent=scene.topic[lang];counter.textContent=`${String(index+1).padStart(2,'0')} / ${scenes.length}`;
   renderLines(scene);
   copy.textContent=scene.copy[lang];
   stage.dataset.scene=scene.id;
   stage.querySelector('.story-discover').hidden=index!==scenes.length-1;
   stage.querySelector('.story-caption').getAnimations().forEach(animation=>animation.cancel());
   if(!motion.matches)stage.querySelector('.story-caption').animate([{opacity:.25,transform:'translateY(12px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,easing:'ease-out'});
   loading=false;stage.removeAttribute('aria-busy');updateProgress();sync();
   if(!result.ok)status.textContent=local('장면 이미지를 불러오지 못했습니다. 문구를 읽거나 홈페이지로 이동할 수 있습니다.','This image could not be loaded. Read the scene or explore the website.');
   if(index+1<scenes.length)prepare(scenes[index+1]);
  }
  function step(delta){userPaused=true;select(requested+delta);}
  function enterSite(manual=true){
   userPaused=true;sync();
   if(!manual&&!inView)return;
   // Replace the entry history item so Back does not replay the intro unexpectedly.
   location.replace(homepage.href);
  }
  prev.addEventListener('click',()=>step(-1));next.addEventListener('click',()=>step(1));
  playButton.addEventListener('click',()=>{
   if(finished){userPaused=false;select(0);}
   else {userPaused=!userPaused;sync();}
   status.textContent=userPaused?local('인트로를 일시정지했습니다.','Introduction paused.'):local('인트로를 재생합니다.','Introduction playing.');
  });
  stage.querySelector('.story-enter').addEventListener('click',()=>enterSite());
  stage.addEventListener('keydown',event=>{
   if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();step(event.key==='ArrowLeft'?-1:1);}
   if(event.key==='Escape'){event.preventDefault();enterSite();}
  });
  let gesture=null;
  stage.addEventListener('pointerdown',event=>{
   if(event.pointerType==='mouse'||event.target.closest('button,a')||!event.isPrimary)return;
   gesture={id:event.pointerId,x:event.clientX,y:event.clientY};
  });
  stage.addEventListener('pointerup',event=>{
   if(!gesture||gesture.id!==event.pointerId)return;
   const dx=event.clientX-gesture.x,dy=event.clientY-gesture.y;gesture=null;
   if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.4)step(dx<0?1:-1);
  });
  stage.addEventListener('pointercancel',()=>{gesture=null;});
  new IntersectionObserver(entries=>{inView=entries[0].isIntersecting&&entries[0].intersectionRatio>=.25;sync();},{threshold:[0,.25]}).observe(stage);
  document.addEventListener('visibilitychange',sync);
  if(menu)new MutationObserver(sync).observe(menu,{attributes:true,attributeFilter:['hidden']});
  motion.addEventListener('change',event=>{if(event.matches)userPaused=true;sync();});
  topic.textContent=scenes[0].topic[lang];counter.textContent=`01 / ${scenes.length}`;
  renderLines(scenes[0]);
  select(0);
 }
 // This script is loaded only by intro.html, never by the existing homepage.
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
