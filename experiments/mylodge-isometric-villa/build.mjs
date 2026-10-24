import { readFileSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as K from '/Users/aaaaa/.codex/skills/anatomy/kit/iso-kit.mjs';

// Anatomy-generated SVG geometry, animated as a staged architectural assembly.
const HERE = dirname(fileURLToPath(import.meta.url));
const W = 820;
const H = 570;
const SITE = { x: -128, y: -104, w: 256, d: 208, r: 12 };
const P = K.fitProjection(
  [...K.boxCorners(SITE, -4, 0), [-94, 86, 36], [70, 62, 62], [-64, -50, 60]],
  W,
  H,
  { pad: 26, headroom: 7, azimuth: 45, elevation: 30 },
);
const at = point => K.iso(point, P);
const S = (plan, z, height, material, bevel = .55) => K.solidSvg(
  K.slabOf(plan, z, height, P, 8, bevel),
  { tone: 'mid', crease: 'lo', className: material },
);
const L = (d, tone = 'lo', className = '') => K.lineSvg(d, { tone, className });
const plane = points => K.pathOf(points.map(at), true);
const line3 = points => K.pathOf(points.map(at));
const poly = (points, className, attrs = '') => `<path class="${className}" d="${plane(points)}" ${attrs}/>`;
const planLine = (points, z, className = '') => L(K.onTop(points, z, P), 'faint', className);
const part = (name, content, attrs = '') => `<g data-part="${name}" ${attrs}>${content}</g>`;

const defs = `<defs>
  <linearGradient id="water" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#d8e6de"/><stop offset=".48" stop-color="#a4c3ba"/><stop offset="1" stop-color="#789c94"/></linearGradient>
  <linearGradient id="warm-glass" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fff4d8"/><stop offset="1" stop-color="#d4a66a"/></linearGradient>
  <radialGradient id="light-wash"><stop stop-color="#e8c983" stop-opacity=".46"/><stop offset="1" stop-color="#e8c983" stop-opacity="0"/></radialGradient>
  <pattern id="paper-grain" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="4" cy="6" r=".55" fill="#998c76" opacity=".15"/><circle cx="19" cy="14" r=".4" fill="#b69d77" opacity=".1"/><circle cx="11" cy="25" r=".5" fill="#9a907f" opacity=".1"/></pattern>
  <filter id="soft-shadow" x="-40%" y="-40%" width="190%" height="210%"><feGaussianBlur stdDeviation="5"/></filter>
  <clipPath id="pool-water-clip"><path d="${plane([[-84,42,5],[-8,42,5],[-8,75,5],[-84,75,5]])}"/></clipPath>
</defs>`;

const lower = { x: -56, y: -48, w: 112, d: 72, r: 1.5 };
const upper = { x: -43, y: -43, w: 86, d: 63, r: 1.5 };
const pool = { x: -90, y: 37, w: 86, d: 42, r: 5 };
const roofBase = { x: -51, y: -51, w: 102, d: 80, r: 2.8 };
const roofCap = { x: -46, y: -47, w: 92, d: 72, r: 2.4 };

function windowPanel(side, planeAt, start, width, sill, height, id, level) {
  const outer = side === 'x'
    ? [[planeAt,start,sill],[planeAt,start+width,sill],[planeAt,start+width,sill+height],[planeAt,start,sill+height]]
    : [[start,planeAt,sill],[start+width,planeAt,sill],[start+width,planeAt,sill+height],[start,planeAt,sill+height]];
  const inset = side === 'x'
    ? [[planeAt+.22,start+1,sill+1],[planeAt+.22,start+width-1,sill+1],[planeAt+.22,start+width-1,sill+height-1],[planeAt+.22,start+1,sill+height-1]]
    : [[start+1,planeAt+.22,sill+1],[start+width-1,planeAt+.22,sill+1],[start+width-1,planeAt+.22,sill+height-1],[start+1,planeAt+.22,sill+height-1]];
  const mullion = side === 'x'
    ? line3([[planeAt+.3,start+width/2,sill+1],[planeAt+.3,start+width/2,sill+height-1]])
    : line3([[start+width/2,planeAt+.3,sill+1],[start+width/2,planeAt+.3,sill+height-1]]);
  const transom = side === 'x'
    ? line3([[planeAt+.3,start+1,sill+height*.72],[planeAt+.3,start+width-1,sill+height*.72]])
    : line3([[start+1,planeAt+.3,sill+height*.72],[start+width-1,planeAt+.3,sill+height*.72]]);
  return `<g data-part="${level}-glass-${id}" class="glass-panel" data-build="${level}-glass" data-index="${id}">
    ${poly(outer,'glass-frame')}${poly(inset,'glass-pane')}
    <path class="interior-glow" data-glow="${id}" d="${plane(inset)}"/>
    ${L(mullion,'faint','glass-mullion')}${L(transom,'faint','glass-transom')}
    ${L(line3([outer[0],outer[1]]),'gold','window-sill')}
  </g>`;
}

const groundOutline = K.planOutline(K.insetPlan(SITE, 7), 0, P);
const groundPlatform = part('ground-platform', `${S(SITE,-4,4,'site-stone',1.5)}<path id="ground-outline" class="construction-outline" d="${groundOutline}"/>`);
const foundation = part('villa-foundation', S({x:-59,y:-51,w:118,d:78,r:2},0,4,'foundation-stone',.8), 'data-build="foundation"');
const foundationFootings = '';
const poolBasin = part('pool-basin', `${S(pool,0,4,'pool-shell',.9)}${planLine([[-86,40],[-8,40],[-8,76],[-86,76],[-86,40]],4.1,'pool-basin-course')}`, 'data-build="pool-basin"');
const lowerSlab = part('ground-floor-slab', S(lower,5,2.5,'floor-slab',.65), 'data-build="ground-slab"');

const groundColumnSpots = [[-52,25],[52,25],[57,-44],[57,20]];
const groundColumns = groundColumnSpots.map(([x,y],i)=>part(`ground-column-${i+1}`,S({x:x-2.1,y:y-2.1,w:4.2,d:4.2,r:.7},7.5,18,'structural-column',.35),'data-build="ground-columns"')).join('');
const groundWalls = [
  part('ground-front-wall',`${poly([[-56,24,7.5],[56,24,7.5],[56,24,27],[-56,24,27]],'wall-front')}${planLine([[-55,24],[55,24]],27,'facade-band')}`,'data-build="ground-front-wall"'),
  part('ground-side-wall',`${poly([[56,-48,7.5],[56,24,7.5],[56,24,27],[56,-48,27]],'wall-side')}${planLine([[56,-47],[56,23]],27,'facade-band')}`,'data-build="ground-side-wall"'),
].join('');
const groundWindows = part('ground-floor-glazing', [
  windowPanel('y',24,-48,26,8,18,1,'ground'),windowPanel('y',24,-14,28,8,18,2,'ground'),
  windowPanel('x',56,-40,26,8,18,3,'ground'),windowPanel('x',56,-8,25,8,18,4,'ground'),
].join(''), 'data-sequence="ground-glass"');
const entry = part('entry-panel', `${poly([[56,-1,7.5],[56,10,7.5],[56,10,26],[56,-1,26]],'entry-door')}<path class="door-hardware" d="${line3([[56.3,8,15],[56.3,8,20]])}"/>`, 'data-build="ground-glass"');

const secondSlab = part('second-floor-slab', S(upper,27,3,'upper-slab',.75), 'data-build="second-slab"');
const upperColumnSpots = [[-40,21],[40,21],[44,-40],[44,17]];
const upperColumns = upperColumnSpots.map(([x,y],i)=>part(`upper-column-${i+1}`,S({x:x-2,y:y-2,w:4,d:4,r:.7},30,19,'upper-column',.3),'data-build="upper-columns"')).join('');
const upperWalls = [
  part('upper-front-wall',`${poly([[-43,20,30],[43,20,30],[43,20,50],[-43,20,50]],'upper-wall-front')}${planLine([[-42,20],[42,20]],50,'upper-facade-band')}`,'data-build="upper-front-wall"'),
  part('upper-side-wall',`${poly([[43,-43,30],[43,20,30],[43,20,50],[43,-43,50]],'upper-wall-side')}${planLine([[43,-42],[43,19]],50,'upper-facade-band')}`,'data-build="upper-side-wall"'),
].join('');
const upperWindows = part('upper-floor-glazing', [
  windowPanel('y',20,-36,24,31,17,5,'upper'),windowPanel('y',20,-6,24,31,17,6,'upper'),
  windowPanel('x',43,-35,24,31,17,7,'upper'),windowPanel('x',43,-5,24,31,17,8,'upper'),
].join(''), 'data-sequence="upper-glass"');

const balcony = part('balcony', `${S({x:-38,y:20,w:72,d:14,r:2},27.2,1.7,'balcony-stone',.6)}
  ${Array.from({length:8},(_,i)=>poly([[-36+i*9.25,34,29],[-28+i*9.25,34,29],[-28+i*9.25,34,34],[-36+i*9.25,34,34]],'balcony-glass',`data-build="balcony-panels" data-index="${i}"`)).join('')}
  <path id="balcony-rail" class="balcony-rail" d="${line3([[-37,34,34],[34,34,34]])}"/>
  ${planLine([[-37,34],[34,34]],28.8,'balcony-track')}`, 'data-build="balcony-slab"');

const roofLower = part('roof-structure', S(roofBase,50,3.5,'roof-stone',1.1), 'data-build="roof-base"');
const roofUpper = part('roof-crown', S(roofCap,53.5,1.8,'roof-cap',.65), 'data-build="roof-cap"');
const roofEdges = part('roof-edges-and-details', `
  <path id="roof-edge-lower" class="roof-edge" d="${K.planOutline(K.insetPlan(roofBase,2.1),53.6,P)}"/>
  <path id="roof-edge-upper" class="roof-edge roof-edge-gold" d="${K.planOutline(K.insetPlan(roofCap,2),55.4,P)}"/>
  ${Array.from({length:10},(_,i)=>planLine([[-44+i*9.7,-45],[-44+i*9.7,14]],55.55,'roof-rib')).join('')}`, 'data-build="roof-details"');

const poolCoping = part('pool-coping-and-tile-course', `${S({x:-92,y:34,w:90,d:48,r:6},4,1.2,'pool-coping',.4)}
  ${planLine([[-87,39],[-7,39],[-7,77],[-87,77],[-87,39]],5.25,'pool-tile-course')}
  ${Array.from({length:17},(_,i)=>planLine([[-86+i*4.8,39],[-86+i*4.8,41]],5.25,'pool-tile-joint')).join('')}`, 'data-build="pool-coping"');
const waterSurface = part('pool-water-surface', `<g id="pool-water-fill" clip-path="url(#pool-water-clip)">
  ${poly([[-84,42,5.12],[-8,42,5.12],[-8,75,5.12],[-84,75,5.12]],'pool-water')}
  <g class="water-reflections">${Array.from({length:9},(_,i)=>{const x=-79+i*8.5,y=46+(i%3)*8,a=at([x,y,5.2]),c=at([x+11,y+1.2,5.2]),b=at([x+22,y,5.2]);return `<path class="water-ripple ripple-${i%3}" d="M${a[0]} ${a[1]} Q${c[0]} ${c[1]} ${b[0]} ${b[1]}"/>`;}).join('')}</g>
  </g>
  <path class="pool-infinity-edge" d="${line3([[-84,42,5.25],[-8,42,5.25]])}"/>
  ${planLine([[-80,72],[-70,72],[-60,72]],5.26,'pool-entry-steps')}`, 'data-build="pool-water"');

const shadows = part('architectural-contact-shadows', `<ellipse id="villa-shadow" class="assembly-shadow" cx="${at([0,0,0])[0]}" cy="${at([0,0,0])[1]}" rx="130" ry="49"/>
  <ellipse id="pool-shadow" class="assembly-shadow" cx="${at([-48,57,0])[0]}" cy="${at([-48,57,0])[1]}" rx="73" ry="25"/>`);

const svg = K.figureSvg({
  width: W,
  height: H,
  label: 'A two-story modern villa and swimming pool, shown as architectural components assemble in isometric view.',
  className: 'villa-art',
  body: [
    defs,
    `<rect width="${W}" height="${H}" fill="#f8f5ed"/><rect width="${W}" height="${H}" fill="url(#paper-grain)" opacity=".45"/>`,
    shadows,
    groundPlatform,
    foundation,
    foundationFootings,
    poolBasin,
    lowerSlab,
    groundWalls,
    groundColumns,
    groundWindows,
    entry,
    secondSlab,
    upperWalls,
    upperColumns,
    upperWindows,
    balcony,
    roofLower,
    roofUpper,
    roofEdges,
    poolCoping,
    waterSurface,
  ],
});

const styles = `
:root{--paper:#f8f5ed;--ink:#504b43;--gold:#ad8b57;--line:#827867;--anatomy-page:#eee9dd;--anatomy-card:#f8f5ed;--anatomy-text:#6e675d;--anatomy-strong:#38352f;--anatomy-muted:#978e80;--anatomy-paper:#ded3c0;--anatomy-face:#f0e7d8;--anatomy-top:#fbf5e9;--anatomy-shade-0:#b5a892;--anatomy-shade-1:#c8baa4;--anatomy-shade-2:#d8ccb9;--anatomy-shade-3:#e7dccb;--anatomy-lit-top:#fff8e9;--anatomy-lit-shade:#e8d9bd;--anatomy-hi:#665c50;--anatomy-mid:#928574;--anatomy-lo:#a79a87;--anatomy-faint:#cfc4b2;--anatomy-lit:#aa8752;--anatomy-halo:#7b705d;--anatomy-halo-opacity:.18;--anatomy-dot:#726653;--anatomy-weight:.42px;--anatomy-ease:cubic-bezier(.2,.7,.18,1)}
*{box-sizing:border-box}body{background:radial-gradient(ellipse at 52% 28%,#fbf9f2 0%,#f2eee5 54%,#eae4d8 100%);color:var(--ink);font-family:Georgia,'Times New Roman',serif}.iso-page{width:min(1100px,100% - 36px);margin:clamp(22px,4vw,52px) auto 44px}.editorial-head{max-width:730px;margin:0 auto 18px;text-align:center}.eyebrow{margin:0 0 8px;color:var(--gold);font:500 10px/1.5 ui-sans-serif,system-ui,sans-serif;letter-spacing:.2em;text-transform:uppercase}.editorial-head h1{margin:0;color:#3f3b34;font:400 clamp(28px,4.7vw,46px)/1.12 Georgia,'Times New Roman',serif;letter-spacing:-.035em}.editorial-head p:last-child{max-width:600px;margin:10px auto 0;color:#777064;font:400 13px/1.65 ui-sans-serif,system-ui,sans-serif}.scene-card{position:relative;margin:0;padding:12px 16px 8px;border:1px solid #d4cbbb;border-radius:3px;background:rgba(251,249,243,.88);box-shadow:0 18px 42px rgba(85,74,58,.08),inset 0 0 0 5px rgba(255,255,255,.34);overflow:hidden}.scene-card:before{position:absolute;inset:9px;content:"";pointer-events:none;border:1px solid rgba(185,168,140,.27)}.scene-overline,.scene-caption{position:relative;z-index:1;display:flex;justify-content:space-between;gap:12px;color:#8c8272;font:500 9px/1.5 ui-sans-serif,system-ui,sans-serif;letter-spacing:.13em;text-transform:uppercase}.scene-caption{padding:0 7px 4px;letter-spacing:.04em;text-transform:none;font-size:10px}.villa-art{position:relative;z-index:1;width:100%;height:auto;overflow:visible}.iso-svg path,.iso-svg circle,.iso-svg ellipse{vector-effect:non-scaling-stroke}.iso-line{stroke:var(--line)}.iso-line[data-tone="lo"]{stroke:#948775}.iso-line[data-tone="faint"]{stroke:#c5b9a5}.iso-line[data-tone="hi"]{stroke:#5f564a}
.site-stone{--anatomy-paper:#c9bdab;--anatomy-top:#f4eddf;--anatomy-shade-0:#8d8577;--anatomy-shade-1:#aaa08f;--anatomy-shade-2:#c5b9a7;--anatomy-shade-3:#e3dacb}.foundation-stone{--anatomy-paper:#bcae98;--anatomy-top:#ece1cf;--anatomy-shade-0:#897d69;--anatomy-shade-1:#a0927b;--anatomy-shade-2:#c0b198;--anatomy-shade-3:#ddd0ba}.foundation-pier,.structural-column,.upper-column{--anatomy-paper:#ad9e87;--anatomy-top:#eee3d1;--anatomy-shade-0:#857862;--anatomy-shade-1:#9b8d75;--anatomy-shade-2:#b9aa91;--anatomy-shade-3:#d9cbb5}.floor-slab,.upper-slab{--anatomy-paper:#cbbda7;--anatomy-top:#f6eddd;--anatomy-shade-0:#988a75;--anatomy-shade-1:#b1a28a;--anatomy-shade-2:#d1c2aa;--anatomy-shade-3:#e8dcc8}.wall-front,.upper-wall-front{fill:#eee4d3;stroke:#968975;stroke-width:.55}.wall-side{fill:#c9bba4;stroke:#837966;stroke-width:.55}.upper-wall-side{fill:#d4c5ad;stroke:#8d806c;stroke-width:.55}.entry-door{fill:#927a5d;stroke:#79684f;stroke-width:.5}.door-hardware{fill:none;stroke:#c4a269;stroke-width:1;stroke-linecap:round}.glass-frame{fill:#e0d3bd;stroke:#867a66;stroke-width:.55}.glass-pane{fill:#88a49d;stroke:#607b74;stroke-width:.42}.interior-glow{fill:url(#warm-glass);opacity:0}.glass-mullion,.glass-transom{fill:none;stroke:#ede3d0;stroke-width:.7}.window-sill{fill:none;stroke:#b8945c;stroke-width:.6}.facade-band,.upper-facade-band{fill:none;stroke:#c0af94;stroke-width:.55}.stone-joint{fill:none;stroke:#d0c3ae;stroke-width:.42}.balcony-stone{--anatomy-paper:#b9aa91;--anatomy-top:#f5ecdd;--anatomy-shade-0:#8e816c;--anatomy-shade-1:#a69880;--anatomy-shade-2:#c4b49a;--anatomy-shade-3:#e2d4bd}.balcony-glass{fill:#aec2b7;fill-opacity:.33;stroke:#839b92;stroke-width:.4}.balcony-rail{fill:none;stroke:#ae8b57;stroke-width:1.25;stroke-linecap:round}.balcony-track{fill:none;stroke:#b9aa91;stroke-width:.6}.roof-stone{--anatomy-paper:#cfc0a8;--anatomy-top:#fbf3e5;--anatomy-shade-0:#9e9079;--anatomy-shade-1:#b2a38a;--anatomy-shade-2:#d1c2a9;--anatomy-shade-3:#e9dcc6}.roof-cap{--anatomy-paper:#dfd0b7;--anatomy-top:#fff8e9;--anatomy-shade-0:#aa9a80;--anatomy-shade-1:#c1b094;--anatomy-shade-2:#dfcfb5;--anatomy-shade-3:#f2e6d2}.roof-edge{fill:none;stroke:#aa9a81;stroke-width:.78}.roof-edge-gold{stroke:#b49462;stroke-width:.8}.roof-rib{fill:none;stroke:#c9b99e;stroke-width:.4}.assembly-shadow{fill:#776b58;opacity:.14;filter:url(#soft-shadow)}
.pool-shell{--anatomy-paper:#a9aaa0;--anatomy-top:#d9dbd1;--anatomy-shade-0:#7f8982;--anatomy-shade-1:#969c92;--anatomy-shade-2:#b4b8ab;--anatomy-shade-3:#cbd0c2}.pool-coping{--anatomy-paper:#b7b6a9;--anatomy-top:#f0eee3;--anatomy-shade-0:#8a8d84;--anatomy-shade-1:#a3a398;--anatomy-shade-2:#c5c3b5;--anatomy-shade-3:#dfddce}.pool-basin-course,.pool-tile-course{fill:none;stroke:#c6c9bd;stroke-width:.5}.pool-tile-joint,.pool-entry-steps{fill:none;stroke:#9fa69d;stroke-width:.42}.pool-water{fill:url(#water);stroke:#73938c;stroke-width:.45}.pool-infinity-edge{fill:none;stroke:#fff8e9;stroke-width:1.1;opacity:.8}.water-ripple{fill:none;stroke:#f9f7eb;stroke-width:.68;stroke-linecap:round;stroke-dasharray:8 13;opacity:.48}.ripple-1{stroke:#d1e0d8;stroke-dasharray:11 15;opacity:.52}.ripple-2{stroke:#e8e8d9;stroke-dasharray:5 16;opacity:.38}.construction-outline{fill:none;stroke:#b5a58a;stroke-width:.8;stroke-linejoin:round}.motion-part{transform-box:fill-box;transform-origin:center}.construction-outline,.roof-edge,#balcony-rail{stroke-dasharray:var(--line-length);stroke-dashoffset:var(--line-length)}#pool-water-fill{transform-box:fill-box;transform-origin:50% 100%}.motion-controls{display:flex;align-items:center;justify-content:center;gap:14px;margin:14px auto 0}.motion-controls button{min-height:44px;padding:10px 20px;border:1px solid #bdb19e;background:#f8f5ed;color:#514a40;font:500 12px/1.4 ui-sans-serif,system-ui,sans-serif;cursor:pointer}.motion-controls button:focus-visible{outline:2px solid #9e7c48;outline-offset:3px}.motion-status{min-width:105px;color:#81786b;font:11px/1.4 ui-sans-serif,system-ui,sans-serif}.note{max-width:680px;margin:11px auto 0;text-align:center;color:#81786b;font:400 10px/1.6 ui-sans-serif,system-ui,sans-serif}.scene-info{display:flex;justify-content:center;flex-wrap:wrap;gap:8px 23px;margin:17px 0 0;color:#81786b;font:400 10px/1.6 ui-sans-serif,system-ui,sans-serif}.scene-info span:before{content:"•";margin-right:8px;color:#ad8b57}@media(max-width:650px){.iso-page{width:min(100% - 20px,600px);margin:20px auto 34px}.editorial-head{margin-bottom:14px}.editorial-head h1{font-size:31px}.editorial-head p:last-child{font-size:12px;max-width:520px}.scene-card{padding:10px 6px 6px}.scene-card:before{inset:5px}.scene-overline{font-size:8px;padding:0 3px}.scene-caption{font-size:8px;padding-inline:3px}.motion-controls{margin-top:11px}.scene-info{margin-top:13px}}@media(prefers-reduced-motion:reduce){*,*::before,*::after{scroll-behavior:auto!important;transition:none!important;animation:none!important}}
`;

const motion = `
const gsap=window.gsap;
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
const button=document.querySelector('#replay-assembly');
const status=document.querySelector('#assembly-status');
const svg=document.querySelector('.villa-art');
const all=(q)=>[...svg.querySelectorAll(q)];
const tl=gsap.timeline({paused:true,defaults:{ease:'power2.inOut'},onUpdate:()=>{status.textContent='Assembly · '+tl.time().toFixed(1)+' / 12.0 s'},onComplete:()=>{status.textContent='Villa complete';if(!reduced.matches)ambient.play(0)}});
const ambient=gsap.timeline({paused:true,repeat:-1,yoyo:true});
const shift=(selector,from,to,start,duration,ease='power2.inOut',vars={})=>{
  const nodes=typeof selector==='string'?all(selector):[selector];
  nodes.forEach((node,index)=>{gsap.set(node,from);tl.to(node,{...to,...vars,duration,ease},start+index*.055)});
};
const draw=(selector,start,duration)=>{
  all(selector).forEach((node,index)=>{
    const length=node.getTotalLength();
    node.style.setProperty('--line-length',length);
    gsap.set(node,{strokeDasharray:length,strokeDashoffset:length});
    tl.to(node,{strokeDashoffset:0,duration,ease:'power1.inOut'},start+index*.025);
  });
};

// The assembly is positional: parts begin below, beside, or above their true mounts.
shift('#ground-platform',{y:54},{y:0},.12,1.5,'power3.out');
draw('#ground-outline',0,1.85);
shift('[data-build="foundation"]',{y:52},{y:0},.48,1.25,'power3.out');
shift('[data-build="pool-basin"]',{x:-72,y:19},{x:0,y:0},1.05,.9,'power3.out');

// 2–4 s: supports rise, facade panels slide home, and the glazed wall inserts seat.
shift('[data-build="ground-slab"]',{y:27},{y:0},2, .62,'power3.out');
shift('[data-build="ground-columns"]',{y:32},{y:0},2.08,.7,'power3.out');
shift('[data-build="ground-front-wall"]',{x:-52},{x:0},2.42,.92,'power2.out');
shift('[data-build="ground-side-wall"]',{x:52},{x:0},2.48,.9,'power2.out');
shift('[data-build="ground-glass"]',{x:66},{x:0},3.18,.7,'power3.out');

// 4–6 s: upper floor, separate upper structure/glazing, then the balcony enclosure.
shift('[data-build="second-slab"]',{y:-72},{y:0},4,.78,'power3.out');
shift('[data-build="upper-columns"]',{y:34},{y:0},4.42,.68,'power3.out');
shift('[data-build="upper-front-wall"]',{x:-46},{x:0},4.62,.86,'power2.out');
shift('[data-build="upper-side-wall"]',{x:46},{x:0},4.68,.82,'power2.out');
shift('[data-build="upper-glass"]',{x:58},{x:0},5.22,.62,'power3.out');
shift('[data-build="balcony-slab"]',{x:45,y:14},{x:0,y:0},5.3,.55,'power3.out');
shift('[data-build="balcony-panels"]',{x:38},{x:0},5.56,.38,'power2.out');
draw('#balcony-rail',5.68,.3);

// 6–8 s: roof slabs descend onto their bearings; edge lines draw to their joints.
shift('[data-build="roof-base"]',{y:-92},{y:0},6,.82,'power3.out');
shift('[data-build="roof-cap"]',{y:-62},{y:0},6.7,.62,'power3.out');
draw('.roof-edge',7.22,.55);
shift('[data-build="roof-details"]',{y:-10},{y:0},7.34,.48,'power2.out');

// 8–10 s: the coping and tile course finish the pool; water rises from the basin floor.
shift('[data-build="pool-coping"]',{y:24,scale:.92},{y:0,scale:1},8,.86,'power3.out');
gsap.set('#pool-water-fill',{scaleY:0});
tl.to('#pool-water-fill',{scaleY:1,duration:1.05,ease:'power1.out'},8.96);
draw('.pool-tile-course,.pool-tile-joint',8.45,.82);

// 10–12 s: warm glazing and architectural light come on; soft contact shadows settle.
all('.interior-glow').forEach(node=>gsap.set(node,{opacity:0}));
tl.to('.interior-glow',{opacity:.76,duration:1.12,stagger:.12,ease:'sine.inOut'},10.05);
tl.fromTo('#villa-shadow',{opacity:.025,scale:.84,y:-8},{opacity:.17,scale:1,y:0,duration:1.6,ease:'power2.out'},10.1);
tl.fromTo('#pool-shadow',{opacity:.02,scale:.78},{opacity:.12,scale:1,duration:1.35,ease:'power2.out'},10.25);
tl.to({}, {duration:.15},11.85);

ambient.to('.water-ripple',{strokeDashoffset:-30,duration:2.8,ease:'none'},0);
ambient.to('.interior-glow',{opacity:.56,duration:2.1,stagger:.09,ease:'sine.inOut'},0);
ambient.pause(0);

function replay(){
  ambient.pause(0);
  if(reduced.matches){tl.progress(1).pause();status.textContent='Villa complete · reduced motion';return}
  status.textContent='Assembly · 0.0 / 12.0 s';
  tl.restart();
}
button.addEventListener('click',replay);
reduced.addEventListener('change',()=>{
  if(reduced.matches){ambient.pause(0);tl.progress(1).pause();status.textContent='Villa complete · reduced motion'}
  else replay();
});
if(reduced.matches){tl.progress(1).pause();status.textContent='Villa complete · reduced motion'}
else tl.play(0);
`;

const body = `<header class="editorial-head"><p class="eyebrow">MYLODGE · ARCHITECTURAL STUDY</p><h1>A villa, assembled.</h1><p>Watch a contemporary seaside villa take shape, one architectural element at a time.</p></header>
<main><figure class="scene-card"><div class="scene-overline"><span>01 / STRUCTURE IN MOTION</span><span>VILLA · ISOMETRIC STUDY</span></div>${svg}<figcaption class="scene-caption"><span>Architectural watercolor study</span><span>Concept model · not a confirmed property plan</span></figcaption></figure>
<div class="motion-controls"><button id="replay-assembly" type="button">Replay Animation</button><span id="assembly-status" class="motion-status" role="status" aria-live="polite">Assembly · 0.0 / 12.0 s</span></div>
<p class="note">The villa and pool are illustrative architectural concepts, not confirmed plans or availability statements.</p>
<div class="scene-info" aria-label="Assembly sequence"><span>Foundation</span><span>Ground &amp; upper floors</span><span>Roof</span><span>Pool finish</span><span>Architectural light</span></div></main>`;

const gsapSource = readFileSync(`${HERE}/gsap.min.js`, 'utf8');
const html = K.pageHtml({ title: 'MyLodge · Villa Assembly Study', theme: 'light', width: 1100, body, script: motion });
const withStyles = html.replace('</head>', `<script>${gsapSource}</script><style>${styles}</style></head>`);
writeFileSync(`${HERE}/index.html`, withStyles);
console.log(`Wrote ${HERE}/index.html`);
