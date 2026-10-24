// Original procedural artwork. Three.js r180 (MIT) is vendored locally.
const intro=document.querySelector('#entry-intro'),shell=document.querySelector('#site-shell');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const title=document.querySelector('#intro-title'),description=document.querySelector('#intro-description');
const enter=document.querySelector('#intro-enter'),next=document.querySelector('#intro-next'),prev=document.querySelector('#intro-prev');
let active=false,leaving=false,target=0,progress=0,lastPhase=-1,engine=null,raf=0,previousTime=0,initializing=false;
const phases=[
 ['01 / THE PLACE','꿈꾸던 공간.\n나의 새로운 시작.','프라이빗 별장과 빛나는 풀사이드.\n스크롤해, 그 안의 가치를 만나보세요.','VILLA / POOL / POSSIBILITY'],
 ['02 / TRANSFORMATION','공간의 경계를 넘어.','흩어지는 장면, 다시 모이는 가능성.\n당신의 라이프스타일이 새로운 형태를 갖춥니다.','SPACE INTO PARTICLES'],
 ['03 / THE VALUE','특별한 삶의 가치.\n이제, 당신에게.','하나로 모인 가능성.\n완성된 동전을 눌러 마이롯지로 들어오세요.','OWN THE EXTRAORDINARY']
];
function start(){
 cancelAnimationFrame(raf);raf=0;previousTime=0;leaving=false;active=true;history.scrollRestoration='manual';intro.hidden=false;intro.classList.remove('intro-exit');
 document.documentElement.classList.add('intro-pending');target=progress=0;lastPhase=-1;document.querySelector('#intro-skip').focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});updateUI();
 if(engine){engine.resize();engine.draw(0,0);requestFrame()}else initialize()
}
function finish(){
 if(leaving||!active)return;leaving=true;active=false;cancelAnimationFrame(raf);raf=0;intro.classList.add('intro-exit');
 const destination=new URL('index.html',location.href);destination.search=location.search;destination.hash=location.hash||'#home';
 setTimeout(()=>location.replace(destination.href),reduced.matches?0:450);
}
function setStep(direction){
 const stops=[0,.28,.56,1];let n=direction>0?stops.find(x=>x>target+.03):[...stops].reverse().find(x=>x<target-.03);
 if(n===undefined)n=direction>0?1:0;
 window.scrollTo({top:n*(intro.offsetHeight-innerHeight),behavior:'instant'});
}
document.querySelector('#intro-skip').onclick=finish;
enter.onclick=()=>{if(progress>=.965)finish()};next.onclick=()=>setStep(1);prev.onclick=()=>setStep(-1);
window.addEventListener('scroll',()=>{if(active){target=Math.min(1,Math.max(0,scrollY/Math.max(1,intro.offsetHeight-innerHeight)));requestFrame()}},{passive:true});
window.addEventListener('keydown',e=>{if(!active||e.target.closest('button'))return;if(['ArrowDown','PageDown',' '].includes(e.key)){e.preventDefault();setStep(1)}else if(['ArrowUp','PageUp'].includes(e.key)){e.preventDefault();setStep(-1)}else if(e.key==='End'){e.preventDefault();window.scrollTo(0,intro.offsetHeight-innerHeight)}else if(e.key==='Home'){e.preventDefault();window.scrollTo({top:0,behavior:'instant'})}else if(e.key==='Escape'){finish()}});
window.addEventListener('hashchange',()=>{if(active&&location.hash&&location.hash!=='#home')finish()});
function updateUI(){
 const phase=progress<.22?0:progress<.88?1:2;
 if(phase!==lastPhase){const p=phases[phase];document.querySelector('#intro-eyebrow').textContent=p[0];title.textContent=p[1];description.textContent=p[2];document.querySelector('#intro-phase').textContent=p[3];lastPhase=phase}
 document.querySelector('#intro-meter').style.transform=`scaleX(${progress})`;
 document.querySelector('#intro-percent').textContent=String(Math.round(progress*100)).padStart(3,'0')+'%';
 const ready=progress>=.965;enter.disabled=!ready;enter.classList.toggle('ready',ready);intro.dataset.progress=progress.toFixed(3);intro.dataset.phase=String(phase);
 prev.disabled=target<.01;next.disabled=target>.99;
 document.querySelector('#intro-hint').textContent=ready?'동전을 눌러 입장':'스크롤 · 스와이프로 변형';
}
function requestFrame(){if(!raf&&active&&!document.hidden)raf=requestAnimationFrame(frame)}
function frame(time){raf=0;if(!active||document.hidden)return;const dt=Math.min(500,time-(previousTime||time));previousTime=time;
 progress=reduced.matches?target:progress+(target-progress)*(1-Math.exp(-dt/105));if(Math.abs(progress-target)<.0002)progress=target;
 updateUI();engine?.draw(progress,reduced.matches?0:time*.001);
 // Stop at rest; the scene moves with input, never with an endless background loop.
 if(Math.abs(progress-target)>.0001||engine?.pointerMoving())requestFrame();
}
document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(raf);raf=0}else{previousTime=0;requestFrame()}});
window.addEventListener('resize',()=>{if(active)engine?.resize();if(active){target=Math.min(1,scrollY/Math.max(1,intro.offsetHeight-innerHeight));requestFrame()}});
reduced.addEventListener('change',()=>{requestFrame()});
if(document.documentElement.classList.contains('intro-pending'))start();
async function initialize(){if(initializing)return;initializing=true;try{const THREE=await import('./vendor/three.module.js');const {buildLuxuryScene}=await import('./intro-scene.js');engine=buildLuxuryScene(THREE,{reduced,onFrame:requestFrame,onEnter:()=>{if(progress>=.965)finish()},onContextLoss:()=>{intro.classList.add('no-webgl');intro.dataset.renderer='fallback';cancelAnimationFrame(raf);raf=0;engine=null;requestFrame()}});intro.dataset.renderer='webgl';if(active){engine.resize();requestFrame()}}
catch(error){console.warn('3D intro fallback:',error.message);intro.classList.add('no-webgl');intro.dataset.renderer='fallback';document.querySelector('#intro-hint').textContent='간편 모드 · ↓ 버튼으로 진행';if(active)requestFrame()}finally{initializing=false}}
