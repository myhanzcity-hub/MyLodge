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
  if(english){document.documentElement.lang='en';document.title='MyLodge · I have a villa.';}
  document.querySelector('.entry-fallback a').href=homepage.href;
  const motion=matchMedia('(prefers-reduced-motion: reduce)');
  const local=(ko,en)=>english?en:ko;
  const scenes=[
   {id:'my-villa',topic:["MY OWN VACATION", "MY OWN VACATION"],lines:[["나! 별장있다."], ["I have a villa!"]],asset:'brand-villa-atmosphere-20261008',position:'38% 50%',alt:['바다와 풀장을 바라보는 곡선형 별장 · AI 공간 구상','A curved seaside villa beside a pool · AI concept']},
   {id:'arrival',topic:["ARRIVE & UNWIND", "ARRIVE & UNWIND"],lines:[["완벽한 휴가의 시작."], ["The start of a perfect getaway."]],asset:'vacation-arrival',position:'64% 50%',alt:['바닷가 모듈 별장에 도착하는 휴가 장면 · AI 공간 구상','Arriving at a seaside modular villa · AI concept']},
   {id:'living',topic:["FOR OUR VILLA OWNERS", "FOR OUR VILLA OWNERS"],lines:[["내 안에 완벽한 여유."], ["Space to truly unwind."]],asset:'living-morning',largest:1536,position:'53% 45%',alt:['햇살이 들어오는 별장의 아침 생활 · AI 공간 구상','A sunlit morning in a villa · AI concept']},
   {id:'beach',topic:["02 / BEACHSIDE", "02 / BEACHSIDE"],lines:[["바다를 곁에.", "여유를 가까이."], ["The sea beside you.", "Relaxation within reach."]],asset:'gallery-pool-20261007',position:'51% 46%',alt:['바다를 바라보며 풀장에서 여유를 즐기는 장면 · AI 공간 구상','Relaxing in a pool overlooking the sea · AI concept']},
   {id:'cabana',topic:["03 / POOL PARTY & CABANA", "03 / POOL PARTY & CABANA"],lines:[["빛나는 풀파티.", "오너들만의 카바나."], ["Poolside celebrations.", "Cabanas exclusively for owners."]],asset:'facility-pool-cabana-20261008',position:'55% 48%',alt:['풀파티와 풀장 곁 카바나의 밤 · AI 공간 구상','A pool party and poolside cabanas at night · AI concept']},
   {id:'music',topic:["04 / CAFE & CLUB", "04 / CAFE & CLUB"],lines:[["낮의 커피.", "밤의 음악."], ["Coffee by day.", "Music by night."]],asset:'facility-club-20261007',position:'50% 50%',alt:['음악과 사람들의 만남이 있는 클럽 · AI 공간 구상','Music and connections in a club · AI concept']},
   {id:'people',topic:["FOR OUR VILLA OWNERS", "FOR OUR VILLA OWNERS"],lines:[["나와 비슷한 사람들과."], ["Among like-minded people."]],asset:'owner-connect-20261007',position:'50% 45%',alt:['별장의 테라스에서 대화하는 사람들 · AI 공간 구상','People connecting on a villa terrace · AI concept']},
   {id:'market',topic:["05 / MARKET", "05 / MARKET"],lines:[["휴가에 필요한 것들.", "가까운 마켓에서."], ["Your holiday essentials.", "At the nearby market."]],asset:'facility-market-v2-20261008',position:'52% 48%',alt:['별장 가까이에서 먹거리와 휴가용품을 고르는 마켓 · AI 공간 구상','A nearby market for food and holiday essentials · AI concept']},
   {id:'concierge',topic:["MY LODGE / CONCIERGE", "MY LODGE / CONCIERGE"],lines:[["휴식에 집중할 수 있도록."], ["More time to unwind."]],asset:'service-ready-20261008',position:'45% 47%',alt:['별장의 도착 준비와 생활 편의를 세팅하는 장면 · AI 공간 구상','Preparing a villa for arrival · AI service concept']},
   {id:'jumunjin',topic:["MY LODGE SHARE", "MY LODGE SHARE"],lines:[["마이롯지의 별장 생활."], ["Villa life at MyLodge."]],asset:'project-jumunjin-20261007',position:'51% 47%',alt:['해안의 별장과 중앙 풀장을 조망한 주문진 파크 · AI 공간 구상','Coastal villas and a central pool at Jumunjin Park · AI concept']},
   {id:'yangyang',topic:["MY LODGE / A NEW EVERYDAY", "MY LODGE / A NEW EVERYDAY"],lines:[["아름다운 휴양지에서."], ["In a beautiful holiday destination."]],asset:'project-yangyang-20261013',position:'50% 47%',alt:['양양 파크의 모듈형 별장과 풀장을 조망한 장면 · AI 공간 구상','Modular villas and pools at Yangyang Park · AI concept']},
   {id:'chiangmai',topic:["BUSINESS VALLEY / CHIANG MAI", "BUSINESS VALLEY / CHIANG MAI"],lines:[["챕터 1. 치앙마이."], ["Chapter 1. Chiang Mai."]],asset:'chiangmai-overview-20261013',position:'48% 45%',alt:['치앙마이의 주거와 업무, 문화 공간을 함께 조망한 장면 · AI 공간 구상','Homes, workspaces and culture in Chiang Mai · AI concept']},
   {id:'possibilities',topic:["BUSINESS VALLEY / CHIANG MAI", "BUSINESS VALLEY / CHIANG MAI"],lines:[["전 세계 IT맨과", "디지털노마드들이", "집결하는 성지."], ["Where the global tech community and", "digital nomads", "come together."]],asset:'chiangmai-work-connections-20261011',position:'52% 45%',alt:['치앙마이의 라운지에서 일하고 교류하는 사람들 · AI 공간 구상','Working and connecting in a Chiang Mai lounge · AI concept']},
   {id:'future',topic:["MY LODGE / TWO WAYS TO STAY", "MY LODGE / TWO WAYS TO STAY"],lines:[["휴가와 함께 시작하는", "미래의 비전."], ["A vision for the future,", "beginning with a getaway."]],asset:'resort-overview-20261006',position:'53% 46%',alt:['별장과 풀장, 밤의 만남이 이어지는 마이롯지 전체 풍경 · AI 공간 구상','A MyLodge vision of villas, pools and evening gatherings · AI concept']}
  ];
  const lang=english?1:0;
  const secondsPerScene=4,totalSeconds=scenes.length*secondsPerScene;
  const stage=document.createElement('section');
  stage.className='story-intro';stage.dataset.language=english?'en':'ko';stage.tabIndex=0;
  stage.setAttribute('aria-label',local('마이롯지 56초 인트로 · 14개 장면','MyLodge 56-second introduction · 14 scenes'));
  stage.setAttribute('aria-describedby','story-intro-description');
  stage.innerHTML=`<div class="story-images" aria-hidden="true"><figure><img alt="" decoding="async"></figure><figure><img alt="" decoding="async"></figure></div>
   <div class="story-shade" aria-hidden="true"></div>
   <div class="story-top"><span>MY LODGE / INTRO</span><button type="button" class="story-enter">${local('홈페이지 보기 ↓','Explore MyLodge ↓')}</button></div>
   <div class="story-caption"><div class="story-meta"><p class="story-topic"></p><span class="story-counter"></span></div><h1 class="story-title"></h1></div>
   <div class="story-bottom"><div class="story-progress" role="progressbar" aria-label="${local('인트로 진행','Introduction progress')}" aria-valuemin="0" aria-valuemax="${totalSeconds}" aria-valuenow="0"><span></span></div>
   <div class="story-controls"><div class="story-transport"><button type="button" class="story-prev" aria-label="${local('이전 장면','Previous scene')}">←</button><button type="button" class="story-play"></button><button type="button" class="story-next" aria-label="${local('다음 장면','Next scene')}">→</button></div><p class="story-note">${local('마이롯지가 그리는 생활 · AI 콘셉트 이미지','Life imagined by MyLodge · AI concept images')}</p></div></div>
   <p id="story-intro-description" class="story-sr">${local('별장, 도착, 거실, 바다, 풀파티와 카바나, 음악, 만남, 마켓, 컨시어지, 주문진, 양양, 치앙마이, 새로운 가능성, 미래의 14개 장면이 이어집니다. 일시정지하거나 이전·다음 버튼으로 읽을 수 있습니다. 홈페이지 보기로 바로 이동할 수 있습니다. 실제 시설·제공 서비스와 별도의 공간 구상입니다.','Fourteen scenes introduce villas, arrival, a living room, the sea, pool parties and cabanas, music, people, a market, concierge, Jumunjin, Yangyang, Chiang Mai, possibilities and the future. Pause to read, choose a scene or explore the website. These are concepts, separate from confirmed facilities or services.')}</p>
   <p class="story-status story-sr" role="status"></p>`;
  hero.append(stage);hero.classList.add('has-story-intro');
  const frames=[...stage.querySelectorAll('.story-images figure')];
  const topic=stage.querySelector('.story-topic'),counter=stage.querySelector('.story-counter');
  const title=stage.querySelector('.story-title');
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
    else {finished=true;elapsed=secondsPerScene*1000;updateProgress();sync();enterSite(false);}
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
   stage.dataset.scene=scene.id;
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
