// Standalone tap-driven villa → particles → coin intro. No scroll input.
const intro=document.querySelector('#entry-intro'),reduced=matchMedia('(prefers-reduced-motion: reduce)');
const title=document.querySelector('#intro-title'),description=document.querySelector('#intro-description'),enter=document.querySelector('#intro-enter');
let active=true,leaving=false,progress=0,lastPhase=-1,engine=null,raf=0,previousTime=0,initializing=false,running=false,elapsed=0;
const phases=[
 ['01 / THE PLACE','꿈꾸던 공간.\n나의 새로운 시작.','별장을 터치하면,\n그 안의 가치가 새로운 모습으로 펼쳐집니다.','VILLA / POOL / POSSIBILITY'],
 ['02 / TRANSFORMATION','공간의 경계를 넘어.','흩어지는 장면, 다시 모이는 가능성.\n당신의 라이프스타일이 새로운 형태를 갖춥니다.','SPACE INTO PARTICLES'],
 ['03 / THE VALUE','특별한 삶의 가치.\n이제, 당신에게.','동전 옆 Touch! 손가락을 터치해\n마이롯지로 들어오세요.','OWN THE EXTRAORDINARY']];
function activate(){if(!active||running)return;if(progress>=1){finish();return}running=true;elapsed=0;previousTime=0;updateUI();requestFrame()}
function finish(){if(leaving||!active)return;leaving=true;active=false;cancelAnimationFrame(raf);intro.classList.add('intro-exit');const destination=new URL('index.html',location.href);destination.search=location.search;destination.hash=location.hash||'#home';setTimeout(()=>location.replace(destination.href),reduced.matches?0:450)}
function updateUI(){const phase=progress<.22?0:progress<.88?1:2;if(phase!==lastPhase){const p=phases[phase];document.querySelector('#intro-eyebrow').textContent=p[0];title.textContent=p[1];description.textContent=p[2];document.querySelector('#intro-phase').textContent=p[3];lastPhase=phase}
 const ready=progress>=1;intro.dataset.progress=progress.toFixed(3);intro.dataset.phase=String(phase);intro.dataset.state=running?'transforming':ready?'ready':'idle';enter.disabled=running;enter.setAttribute('aria-label',ready?'마이롯지 입장':'별장을 터치하여 변환 시작');document.querySelector('#intro-hint').textContent=running?'가치가 모이는 중':ready?'터치하여 입장':'별장을 터치하세요';}
function requestFrame(){if(!raf&&active&&!document.hidden)raf=requestAnimationFrame(frame)}
function frame(time){raf=0;if(!active||document.hidden)return;const dt=previousTime?Math.min(80,time-previousTime):0;previousTime=time;if(running){elapsed+=dt;const t=Math.min(1,elapsed/(reduced.matches?350:4400));progress=t*t*(3-2*t);if(t===1)running=false}updateUI();engine?.draw(progress,0);if(running||engine?.pointerMoving())requestFrame()}
enter.onclick=activate;document.querySelector('#intro-skip').onclick=finish;
document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(raf);raf=0}else{previousTime=0;requestFrame()}});
window.addEventListener('resize',()=>{engine?.resize();requestFrame()});
intro.hidden=false;updateUI();initialize();
async function initialize(){if(initializing)return;initializing=true;try{const THREE=await import('./vendor/three.module.js');const {buildLuxuryScene}=await import('./intro-scene.js');engine=buildLuxuryScene(THREE,{reduced,onFrame:requestFrame,onEnter:activate,onContextLoss:()=>{intro.classList.add('no-webgl');intro.dataset.renderer='fallback';cancelAnimationFrame(raf);raf=0;engine=null;requestFrame()}});intro.dataset.renderer='webgl';if(active){engine.resize();requestFrame()}}
catch(error){console.warn('3D intro fallback:',error.message);intro.classList.add('no-webgl');intro.dataset.renderer='fallback';document.querySelector('#intro-hint').textContent='터치하여 시작';if(active)requestFrame()}finally{initializing=false}}
