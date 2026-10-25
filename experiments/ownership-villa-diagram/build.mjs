import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as K from '/Users/aaaaa/.codex/skills/anatomy/kit/iso-kit.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const SOURCE_VILLA = join(HERE, '../mylodge-isometric-villa/index.html');
const existingPage = readFileSync(SOURCE_VILLA, 'utf8');
const villaMatch = existingPage.match(/<svg\b[^>]*\bvilla-art\b[^>]*>[\s\S]*?<\/svg>/);
if (!villaMatch) throw new Error(`Could not find the Anatomy villa SVG in ${SOURCE_VILLA}`);
const villaSvg = villaMatch[0].replace('class="iso-svg villa-art"', 'id="villa-illustration" class="iso-svg villa-art"');
const villaStyles = [...existingPage.matchAll(/<style>([\s\S]*?)<\/style>/g)].at(-1)?.[1];
if (!villaStyles) throw new Error(`Could not find the villa material styles in ${SOURCE_VILLA}`);

// A 10-column by 12-row ownership grid: every cell represents one share.
const grid = { x: 46, y: 48, width: 360, height: 432, columns: 10, rows: 12 };
const cw = grid.width / grid.columns;
const rh = grid.height / grid.rows;
const selected = { column: 9, row: 11 };
const gridSvg = `<svg id="share-grid" viewBox="0 0 452 548" role="img" aria-labelledby="grid-title grid-desc">
  <title id="grid-title">One villa divided into 120 ownership shares</title>
  <desc id="grid-desc">A ten-column by twelve-row villa ownership diagram. One square is highlighted to represent a single share.</desc>
  <text class="diagram-kicker" x="${grid.x}" y="22">ONE VILLA / 120 SHARES</text>
  <path id="grid-frame" d="M${grid.x} ${grid.y}H${grid.x+grid.width}V${grid.y+grid.height}H${grid.x}Z"/>
  <g id="grid-divisions">
    ${Array.from({length:grid.columns-1},(_,i)=>{const x=grid.x+(i+1)*cw;return `<path class="grid-rule" d="M${x} ${grid.y}V${grid.y+grid.height}"/>`;}).join('')}
    ${Array.from({length:grid.rows-1},(_,i)=>{const y=grid.y+(i+1)*rh;return `<path class="grid-rule" d="M${grid.x} ${y}H${grid.x+grid.width}"/>`;}).join('')}
  </g>
  <rect id="selected-share" x="${grid.x+selected.column*cw}" y="${grid.y+selected.row*rh}" width="${cw}" height="${rh}"/>
  <rect id="selected-share-outline" x="${grid.x+selected.column*cw}" y="${grid.y+selected.row*rh}" width="${cw}" height="${rh}"/>
  <text class="grid-footnote" x="${grid.x}" y="${grid.y+grid.height+28}">10 × 12 / ONE SHARE PER CELL</text>
</svg>`;

const body = `<div class="page">
  <header class="editorial-head">
    <p class="eyebrow brand-line"><span>MYLODGE</span><span class="brand-separator" role="separator" aria-hidden="true">·</span><span>SHARED OWNERSHIP</span></p>
    <h1>One villa. A place of your own.</h1>
    <p>See how one shared ownership unit connects to a real villa and pool.</p>
  </header>
  <div class="ownership-stage" id="ownership-stage">
    <section class="ownership-card" id="ownership-card" aria-label="Villa ownership diagram">
      <p class="card-label">THE OWNERSHIP MODEL</p>
      ${gridSvg}
      <p id="share-statement">1 Night / 2 Days × 3 Stays / Year.</p>
      <p class="share-note">One highlighted unit within a shared villa.</p>
    </section>
    <section class="villa-card" aria-label="Isometric villa assembly illustration">
      <div class="villa-card-heading"><span>FROM SHARE TO PLACE</span><span>ARCHITECTURAL STUDY</span></div>
      ${villaSvg}
      <p class="villa-caption">The highlighted share leads into the villa model.</p>
    </section>
    <svg class="bridge-layer" id="bridge-layer" aria-hidden="true" preserveAspectRatio="none" viewBox="0 0 100 100">
      <path id="ownership-bridge" d=""/>
      <circle id="share-token" r="5" cx="0" cy="0"/>
    </svg>
  </div>
  <div class="controls"><button id="replay" type="button">Replay Experience</button><span id="status" role="status" aria-live="polite">Drawing the ownership model</span></div>
  <p class="disclosure">Illustrative ownership diagram and concept villa. Final terms and property specifications are subject to confirmation.</p>
</div>`;

const styles = `
:root{--paper:#fbfaf5;--ink:#393832;--muted:#8f8b80;--hairline:#d8d5ca;--gold:#b3925d;--gold-soft:#e8dec8;--sage:#77847b;--anatomy-page:#f5f2e9;--anatomy-card:#fbfaf5;--anatomy-text:#69665e;--anatomy-strong:#393832;--anatomy-muted:#938f84;--anatomy-paper:#ded3c0;--anatomy-face:#f0e7d8;--anatomy-top:#fbf5e9;--anatomy-shade-0:#b5a892;--anatomy-shade-1:#c8baa4;--anatomy-shade-2:#d8ccb9;--anatomy-shade-3:#e7dccb;--anatomy-lit-top:#fff8e9;--anatomy-lit-shade:#e8d9bd;--anatomy-hi:#665c50;--anatomy-mid:#928574;--anatomy-lo:#a79a87;--anatomy-faint:#cfc4b2;--anatomy-lit:#aa8752;--anatomy-halo:#7b705d;--anatomy-halo-opacity:.18;--anatomy-dot:#726653;--anatomy-weight:.42px;--anatomy-ease:cubic-bezier(.2,.7,.18,1)}
*{box-sizing:border-box}body{margin:0;background:radial-gradient(ellipse at 52% 16%,#fffef9 0%,#f8f6ef 58%,#eeece4 100%);color:var(--ink);font-family:Arial,Helvetica,sans-serif}.page{width:min(1440px,100% - 72px);margin:clamp(34px,5vw,68px) auto 48px}.editorial-head{margin-bottom:32px}.eyebrow{margin:0 0 14px;color:var(--gold);font:500 10px/1.5 Arial,sans-serif;letter-spacing:.21em}.editorial-head h1{margin:0;color:#33322e;font:400 clamp(34px,4.2vw,58px)/1.06 Georgia,'Times New Roman',serif;letter-spacing:-.035em}.editorial-head p:last-child{margin:12px 0 0;color:#77756e;font:400 14px/1.65 Arial,sans-serif}.ownership-stage{position:relative;display:grid;grid-template-columns:minmax(380px,.84fr) minmax(560px,1.16fr);align-items:center;gap:clamp(22px,4vw,62px);isolation:isolate}.ownership-card,.villa-card{position:relative;min-width:0;background:rgba(255,254,249,.58);border:1px solid rgba(205,201,189,.7);box-shadow:0 14px 42px rgba(74,67,53,.035)}.ownership-card{padding:24px clamp(18px,2.8vw,38px) 22px}.card-label,.villa-card-heading{color:#8e897d;font:500 9px/1.4 Arial,sans-serif;letter-spacing:.15em}.card-label{margin:0 0 12px}.villa-card{padding:15px 14px 10px}.villa-card-heading{display:flex;justify-content:space-between;gap:12px;padding:0 3px 4px}.villa-art{display:block;width:100%;height:auto}.villa-caption{margin:0;padding:0 4px;color:#8d877c;font:400 9px/1.5 Arial,sans-serif;letter-spacing:.04em}#share-grid{display:block;width:100%;height:auto;overflow:visible}.diagram-kicker,.grid-footnote{fill:#99958a;font:500 9px/1 Arial,sans-serif;letter-spacing:1.6px}.grid-footnote{font-size:8px;letter-spacing:1.2px}#grid-frame{fill:none;stroke:#4c4a43;stroke-width:1.25;vector-effect:non-scaling-stroke}.grid-rule{fill:none;stroke:#d5d1c5;stroke-width:.85;vector-effect:non-scaling-stroke}#selected-share{fill:var(--gold);fill-opacity:0}#selected-share-outline{fill:none;stroke:#a9844e;stroke-width:1.5;stroke-opacity:0;vector-effect:non-scaling-stroke}#share-statement{margin:17px 0 0;color:#44423c;font:400 clamp(17px,1.65vw,22px)/1.35 Georgia,'Times New Roman',serif;letter-spacing:-.015em;opacity:0;transform:translateY(8px)}.share-note{margin:7px 0 0;color:#918d82;font:400 10px/1.5 Arial,sans-serif;opacity:0}.bridge-layer{position:absolute;inset:0;z-index:4;width:100%;height:100%;overflow:visible;pointer-events:none}.bridge-layer path{fill:none;stroke:#b3925d;stroke-width:1.5;stroke-dasharray:var(--bridge-length);stroke-dashoffset:var(--bridge-length);vector-effect:non-scaling-stroke}.bridge-layer circle{fill:#b3925d;stroke:#fbfaf5;stroke-width:2;opacity:0;vector-effect:non-scaling-stroke}.controls{display:flex;align-items:center;gap:16px;margin:18px 0 0}.controls button{min-height:44px;padding:10px 19px;border:1px solid #b9ac91;border-radius:2px;background:#fbfaf5;color:#48453e;font:500 12px/1.3 Arial,sans-serif;cursor:pointer}.controls button:hover{background:#f1ecdf}.controls button:focus-visible{outline:2px solid #a98750;outline-offset:3px}#status{color:#817c71;font:400 11px/1.4 Arial,sans-serif}.disclosure{margin:14px 0 0;color:#999489;font:400 10px/1.6 Arial,sans-serif}.villa-card .iso-svg{max-width:100%}.villa-card .iso-line{stroke:var(--line)}.villa-card .iso-line[data-tone="faint"]{stroke:#c5b9a5}.villa-card .iso-line[data-tone="lo"]{stroke:#948775}#share-statement{max-width:26ch;font-size:clamp(15px,1.55vw,20px);white-space:normal}.brand-line{display:flex;align-items:center;gap:.7em}.brand-separator{color:#b3925d;font-size:12px}
@media(max-width:980px){.page{width:min(760px,100% - 44px)}.ownership-stage{grid-template-columns:minmax(280px,.86fr) minmax(360px,1.14fr);gap:18px}.ownership-card{padding:20px 18px}.villa-card{padding:11px 9px 8px}}
@media(max-width:700px){.page{width:min(560px,100% - 28px);margin:26px auto 36px}.editorial-head{margin-bottom:20px}.editorial-head h1{font-size:clamp(32px,9vw,42px)}.editorial-head p:last-child{font-size:12px}.ownership-stage{grid-template-columns:1fr;gap:16px}.ownership-card{padding:18px clamp(18px,7vw,30px) 17px}.card-label{margin-bottom:7px}.villa-card{padding:10px 8px 7px}.villa-card-heading{font-size:8px}.villa-caption{font-size:8px}#share-statement{font-size:20px;margin-top:11px}.share-note{font-size:9px}.controls{margin-top:14px}.disclosure{font-size:9px}}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{scroll-behavior:auto!important;transition:none!important;animation:none!important}}
`;

const motion = `
const gsap=window.gsap;
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
const stage=document.querySelector('#ownership-stage');
const gridSvg=document.querySelector('#share-grid');
const villaSvg=document.querySelector('#villa-illustration');
const button=document.querySelector('#replay');
const status=document.querySelector('#status');
const bridge=document.querySelector('#ownership-bridge');
const token=document.querySelector('#share-token');
const all=(q,root=document)=>[...root.querySelectorAll(q)];
const smooth='power2.inOut';

function setPathDraw(el){const length=el.getTotalLength();el.style.setProperty('--line-length',length);gsap.set(el,{strokeDasharray:length,strokeDashoffset:length});return length}
function positionBridge(){
  const stageRect=stage.getBoundingClientRect();
  const bridgeSvg=document.querySelector('#bridge-layer');
  bridgeSvg.setAttribute('viewBox','0 0 '+stageRect.width+' '+stageRect.height);
  const cell=document.querySelector('#selected-share').getBoundingClientRect();
  const sx=cell.left+cell.width/2-stageRect.left,sy=cell.top+cell.height/2-stageRect.top;
  const point=villaSvg.createSVGPoint();point.x=410;point.y=286;
  const end=point.matrixTransform(villaSvg.getScreenCTM());
  const ex=end.x-stageRect.left,ey=end.y-stageRect.top;
  const dx=ex-sx,dy=ey-sy;
  const ownershipRect=document.querySelector('#ownership-card').getBoundingClientRect();
  const villaRect=document.querySelector('.villa-card').getBoundingClientRect();
  if(villaRect.top>ownershipRect.bottom){
    const edgeX=Math.min(stageRect.width-4,ownershipRect.right-stageRect.left-4);
    const exitY=ownershipRect.bottom-stageRect.top+12;
    bridge.setAttribute('d','M'+sx+' '+sy+' C'+(sx+14)+' '+sy+' '+(edgeX-7)+' '+sy+' '+edgeX+' '+sy+' L'+edgeX+' '+exitY+' C'+edgeX+' '+(exitY+24)+' '+(ex+18)+' '+(ey-24)+' '+ex+' '+ey);
  }else{
    const c1x=sx+dx*.36,c1y=sy+dy*.08;
    const c2x=ex-dx*.24,c2y=ey-dy*.18;
    bridge.setAttribute('d','M'+sx+' '+sy+' C'+c1x+' '+c1y+' '+c2x+' '+c2y+' '+ex+' '+ey);
  }
  gsap.set(token,{attr:{cx:sx,cy:sy},opacity:0,scale:.75,transformOrigin:'center'});
  setPathDraw(bridge);
}

const tl=gsap.timeline({paused:true,onUpdate:()=>{status.textContent=tl.time()<5.45?'Ownership shares: '+tl.time().toFixed(1)+' s':tl.time()<18.1?'Villa assembly: '+(tl.time()-5.45).toFixed(1)+' / 12.6 s':'Villa complete'},onComplete:()=>{status.textContent='Villa complete';if(!reduced.matches)ambient.play(0)}});
const ambient=gsap.timeline({paused:true,repeat:-1,yoyo:true});
gsap.set(villaSvg,{visibility:'hidden'});
tl.set(villaSvg,{visibility:'visible'},5.45);

// First the architectural rectangle, then its 120 clearly legible ownership cells.
const frame=document.querySelector('#grid-frame');
const frameLength=setPathDraw(frame);
tl.fromTo(frame,{strokeDashoffset:frameLength},{strokeDashoffset:0,duration:1.05,ease:'power1.inOut'},0);
tl.fromTo('.diagram-kicker',{opacity:0,y:5},{opacity:1,y:0,duration:.48,ease:'power2.out'},.25);
all('.grid-rule').forEach((line,index)=>{
  const length=setPathDraw(line);
  tl.fromTo(line,{strokeDashoffset:length},{strokeDashoffset:0,duration:.68,ease:'power1.inOut'},1.12+index*.038);
});
tl.to('#selected-share',{fillOpacity:.72,duration:.48,ease:'sine.inOut'},3.05);
tl.to('#selected-share-outline',{strokeOpacity:1,duration:.34,ease:'sine.out'},3.06);
tl.fromTo('#selected-share',{scale:.82,transformOrigin:'center center'},{scale:1,duration:.55,ease:'back.out(1.7)'},3.05);
tl.to('#share-statement',{opacity:1,y:0,duration:.56,ease:'power2.out'},3.45);
tl.to('.share-note',{opacity:1,duration:.4,ease:'sine.out'},3.72);

// The chosen share sends a fine gold line and a traveling marker into the villa's foundation.
tl.call(positionBridge,[],4.48);
tl.to(bridge,{strokeDashoffset:0,duration:.92,ease:'power1.inOut'},4.5);
const travel={progress:0};
tl.to(token,{opacity:1,scale:1,duration:.18,ease:'power2.out'},4.5);
tl.to(travel,{progress:1,duration:.86,ease:'power2.inOut',onUpdate:()=>{const p=bridge.getPointAtLength(travel.progress*bridge.getTotalLength());gsap.set(token,{attr:{cx:p.x,cy:p.y}})}},4.66);
tl.to(token,{scale:.3,opacity:0,duration:.2,ease:'power2.in'},5.48);

// Load the existing Anatomy villa at an assembled pose, then stage every physical group off its mount.
const baseAt=5.45;
const offset=(selector,from,to,start,duration,ease='power2.inOut',stagger=0)=>{
  all(selector,villaSvg).forEach((node,index)=>{
    gsap.set(node,{...from,transformOrigin:'center center'});
    tl.to(node,{...to,duration,ease},baseAt+start+index*stagger);
  });
};
const drawVilla=(selector,start,duration,stagger=.02)=>{
  all(selector,villaSvg).forEach((node,index)=>{
    const length=setPathDraw(node);
    tl.to(node,{strokeDashoffset:0,duration,ease:'power1.inOut'},baseAt+start+index*stagger);
  });
};

offset('#ground-platform',{y:610},{y:0},.12,1.45,'power3.out');
drawVilla('#ground-outline',0,1.82);
offset('[data-build="foundation"]',{y:540},{y:0},.42,1.22,'power3.out');
offset('[data-build="foundation-pier"]',{y:600},{y:0},.66,1.05,'power3.out',.07);
offset('[data-build="pool-basin"]',{x:-530,y:150},{x:0,y:0},1.08,.92,'power3.out');

offset('[data-build="ground-slab"]',{y:330},{y:0},2,.62,'power3.out');
offset('[data-build="ground-columns"]',{y:430},{y:0},2.08,.72,'power3.out',.045);
offset('[data-build="ground-front-wall"]',{x:-520},{x:0},2.42,.92,'power2.out');
offset('[data-build="ground-side-wall"]',{x:520},{x:0},2.48,.9,'power2.out');
offset('[data-build="ground-glass"]',{x:570},{x:0},3.18,.7,'power3.out',.05);
offset('[data-build="ground-glass"] .door-hardware',{x:0},{x:0},3.18,.7,'power3.out');

// Build the Suite's interior spiral after the first-floor module and before the upper slab closes in.
all('[data-build="stair-core"]',villaSvg).forEach(node=>{
  gsap.set(node,{y:330});
  tl.to(node,{y:0,duration:.62,ease:'power3.out'},baseAt+3.86);
});
all('[data-build="stair-treads"]',villaSvg).forEach((node,index)=>{
  gsap.set(node,{y:245+index*2.2,scale:.78,transformOrigin:'center center'});
  tl.to(node,{y:0,scale:1,duration:.32,ease:'back.out(1.4)'},baseAt+3.88+index*.024);
});
drawVilla('[data-build="stair-rail"] .stair-helix-rail',4.02,.68,.012);
all('[data-build="stair-rail"] .stair-baluster',villaSvg).forEach((node,index)=>{
  const length=setPathDraw(node);
  tl.to(node,{strokeDashoffset:0,duration:.18,ease:'power1.out'},baseAt+4.12+index*.018);
});

offset('[data-build="second-slab"]',{y:-510},{y:0},4.7,.78,'power3.out');

offset('[data-build="upper-columns"]',{y:390},{y:0},5.12,.68,'power3.out',.045);
offset('[data-build="upper-front-wall"]',{x:-470},{x:0},5.32,.86,'power2.out');
offset('[data-build="upper-side-wall"]',{x:470},{x:0},5.38,.82,'power2.out');
offset('[data-build="upper-glass"]',{x:510},{x:0},5.92,.62,'power3.out',.05);
offset('[data-build="balcony-slab"]',{x:460,y:180},{x:0,y:0},6,.55,'power3.out');
offset('[data-build="balcony-panels"]',{x:390},{x:0},6.26,.38,'power2.out',.045);
drawVilla('#balcony-rail,.stairwell-trim,.cutaway-edge',6.38,.36);

offset('[data-build="roof-base"]',{y:-700},{y:0},6.7,.82,'power3.out');
offset('[data-build="roof-cap"]',{y:-560},{y:0},7.4,.62,'power3.out');
drawVilla('.roof-edge',7.92,.55);
offset('[data-build="roof-details"]',{y:-36},{y:0},8.04,.48,'power2.out');

offset('[data-build="pool-coping"]',{y:240,scale:.92},{y:0,scale:1},8.7,.86,'power3.out');
drawVilla('.pool-tile-course,.pool-tile-joint',9.15,.82,.014);
gsap.set('#pool-water-fill',{scaleY:0,transformOrigin:'50% 100%',transformBox:'fill-box'});
tl.to('#pool-water-fill',{scaleY:1,duration:1.05,ease:'power1.out'},baseAt+9.66);
all('.interior-glow',villaSvg).forEach(node=>gsap.set(node,{opacity:0}));
tl.to('.interior-glow',{opacity:.76,duration:1.12,stagger:.12,ease:'sine.inOut'},baseAt+10.75);
tl.fromTo('#villa-shadow',{opacity:.025,scale:.84,y:-8},{opacity:.17,scale:1,y:0,duration:1.6,ease:'power2.out'},baseAt+10.8);
tl.fromTo('#pool-shadow',{opacity:.02,scale:.78},{opacity:.12,scale:1,duration:1.35,ease:'power2.out'},baseAt+10.95);

ambient.to('.water-ripple',{strokeDashoffset:-30,duration:2.8,ease:'none'},0);
ambient.to('.interior-glow',{opacity:.56,duration:2.1,stagger:.09,ease:'sine.inOut'},0);
ambient.pause(0);

function replay(){
  ambient.pause(0);
  gsap.set(villaSvg,{visibility:reduced.matches?'visible':'hidden'});
  positionBridge();
  if(reduced.matches){tl.progress(1).pause();status.textContent='Complete (reduced motion)';return}
  status.textContent='Drawing the ownership model';
  tl.restart();
}
button.addEventListener('click',replay);
reduced.addEventListener('change',()=>{if(reduced.matches){ambient.pause(0);tl.progress(1).pause();status.textContent='Complete (reduced motion)'}else replay()});
positionBridge();
if(reduced.matches){tl.progress(1).pause();status.textContent='Complete (reduced motion)'}else tl.play(0);
`;

const gsapSource = readFileSync(join(HERE, 'gsap.min.js'), 'utf8');
const html = K.pageHtml({ title: 'MyLodge | Shared Ownership', theme: 'light', width: 1200, body, script: motion });
const withAssets = html.replace('</head>', `<script>${gsapSource}</script><style>${villaStyles}</style><style>${styles}</style></head>`);
writeFileSync(join(HERE, 'index.html'), withAssets);
console.log(`Wrote ${join(HERE, 'index.html')}`);
