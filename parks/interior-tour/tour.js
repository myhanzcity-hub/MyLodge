import * as THREE from '../../entry-3d/vendor/three.module.js';
import { enhanceInterior } from './realism.js';
import { createObjectExperience } from './object-experience.js';
import { createTimeAtmosphere } from './time-atmosphere.js';
import { createSuiteArchitecture } from './suite-loft.js';
import { createSuiteNavigation } from './suite-navigation.js';

const $=s=>document.querySelector(s),canvas=$('#scene'),status=$('#status');
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const styles=[
 ['소프트 핑크 & 크림','#d9b9b0','#eee4d6'],['민트 그린 & 화이트','#a5c2b1','#edece1'],['라벤더 & 그레이','#b9aec4','#d9d7d4'],['피치 & 베이지','#deb59d','#e5d2b9'],['스카이 블루 & 화이트','#b0c8d3','#e7e9e4'],['코랄 & 아이보리','#d39985','#ece1cc'],['세이지 그린 & 샌드','#a7b29b','#d7c6a8'],['더스티 로즈 & 차콜','#b39498','#565a5a'],['버터 옐로우 & 화이트','#e7d69a','#f0ecde'],['소프트 그레이 & 블러쉬','#c2bbb5','#dec9c7']
];
let renderer,dirty=true,realism=null,objectExperience=null,timeAtmosphere=null,currentLevel=0,suiteNavigation=null;
try{renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false,powerPreference:'high-performance'});}catch(e){$('#fallback').hidden=false;$('#welcome').hidden=true;throw e;}
renderer.setPixelRatio(Math.min(devicePixelRatio,innerWidth<600?1.35:1.65));renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.02;renderer.outputColorSpace=THREE.SRGBColorSpace;
const scene=new THREE.Scene();scene.background=new THREE.Color('#dce5dc');scene.fog=new THREE.Fog('#dce5dc',25,85);
document.addEventListener('click',()=>{dirty=true;},true);canvas.addEventListener('pointermove',()=>{dirty=true;});canvas.addEventListener('pointerdown',()=>{dirty=true;});canvas.addEventListener('keydown',()=>{dirty=true;});
const camera=new THREE.PerspectiveCamera(56,1,.075,100);camera.rotation.order='YXZ';
const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2();
const world=new THREE.Group();scene.add(world);const pickables=[],obstacles=[];
const V=(x=0,y=0,z=0)=>new THREE.Vector3(x,y,z),clamp=THREE.MathUtils.clamp;
function roundedGeo(w,h,d,r){const g=new THREE.BoxGeometry(w,h,d,6,6,6),p=g.attributes.position,n=g.attributes.normal,core=V(w/2-r,h/2-r,d/2-r);for(let i=0;i<p.count;i++){const v=V().fromBufferAttribute(p,i),b=V(clamp(v.x,-core.x,core.x),clamp(v.y,-core.y,core.y),clamp(v.z,-core.z,core.z)),normal=v.clone().sub(b).normalize();v.copy(b).addScaledVector(normal,r);p.setXYZ(i,v.x,v.y,v.z);n.setXYZ(i,normal.x,normal.y,normal.z);}return g;}
function surfaceTexture(type){const canvas=document.createElement('canvas');canvas.width=canvas.height=512;const c=canvas.getContext('2d');let seed=391;const rand=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};c.fillStyle=type==='wood'?'#a17c51':'#888888';c.fillRect(0,0,512,512);
  if(type==='wood'){for(let row=0;row<16;row++){const y=row*32,offset=row%2*128;c.fillStyle=`hsl(33 32% ${45+rand()*13}%)`;c.fillRect(0,y,512,31);for(let i=0;i<70;i++){c.strokeStyle=`rgba(${rand()>.6?'45,23,8':'211,179,126'},${.03+rand()*.16})`;c.lineWidth=.3+rand();c.beginPath();const yy=y+rand()*30;c.moveTo(0,yy);c.bezierCurveTo(130,yy+rand()*4,350,yy-rand()*4,512,yy);c.stroke();}c.fillStyle='#382d2230';c.fillRect(0,y+31,512,1);c.fillRect(offset+127,y,1,32);c.fillRect(offset+383,y,1,32);}}
  else if(type==='stone'){for(let i=0;i<70;i++){c.strokeStyle=`rgba(43,43,43,${rand()*.14})`;c.lineWidth=.4+rand()*2;c.beginPath();let y=rand()*512;c.moveTo(0,y);for(let x=0;x<=512;x+=32){y+=(rand()-.5)*30;c.lineTo(x,y);}c.stroke();}for(let i=0;i<7000;i++){const v=100+rand()*100;c.fillStyle=`rgba(${v},${v},${v},.12)`;c.fillRect(rand()*512,rand()*512,rand()*3,1);}}
  else{for(let i=0;i<16000;i++){const v=80+rand()*100;c.fillStyle=`rgb(${v},${v},${v})`;c.fillRect(rand()*512,rand()*512,type==='leather'?2:1,type==='leather'?2:4);}if(type==='fabric')for(let i=0;i<512;i+=4){c.fillStyle='#aaaaaa80';c.fillRect(i,0,1,512);c.fillStyle='#55555565';c.fillRect(0,i,512,1);}}
  const t=new THREE.CanvasTexture(canvas);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(type==='wood'?3:4,type==='wood'?3:4);t.anisotropy=4;return t;}

const mat=(color,roughness=.8,metalness=0)=>new THREE.MeshPhysicalMaterial({color,roughness,metalness});
let seed=17;const rand=()=>{seed=(seed*16807)%2147483647;return(seed-1)/2147483646};
function texture(kind){const c=document.createElement('canvas');c.width=c.height=512;const a=c.getContext('2d');if(kind==='wood'){
 a.fillStyle='#d1b691';a.fillRect(0,0,512,512);
 for(let row=0;row<8;row++){const y=row*64;for(let col=-1;col<3;col++){const x=col*260+(row%2)*110;a.fillStyle=`hsl(33 25% ${66+rand()*8}%)`;a.fillRect(x,y,258,62);a.strokeStyle='#80644115';for(let j=0;j<20;j++){const yy=y+rand()*62;a.beginPath();a.moveTo(x,yy);a.bezierCurveTo(x+80,yy+rand()*3,x+170,yy-rand()*3,x+256,yy);a.stroke();}}}
 }else{a.fillStyle=kind==='rug'?'#e0d8c8':'#f4f1e9';a.fillRect(0,0,512,512);for(let i=0;i<26000;i++){const n=rand()>.5?'#72665218':'#ffffff33';a.fillStyle=n;a.fillRect(rand()*512,rand()*512,kind==='rug'?5:2,1);}}
 const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.anisotropy=Math.min(renderer.capabilities.getMaxAnisotropy(),8);return t;}
const woodMap=texture('wood');woodMap.repeat.set(3,5);const fabricMap=texture('fabric');fabricMap.repeat.set(2,2);const rugMap=texture('rug');rugMap.repeat.set(3,3);
const grain=surfaceTexture('wood'),weave=surfaceTexture('fabric'),stoneMap=surfaceTexture('stone');grain.colorSpace=THREE.SRGBColorSpace;grain.repeat.set(1.4,2.1);
const floorMat=new THREE.MeshPhysicalMaterial({map:grain,bumpMap:grain,bumpScale:.018,color:'#e8cfa9',roughness:.43,clearcoat:.12});
// A filtered environment adds soft window reflections to wood, glass and metal.
const ec=document.createElement('canvas');ec.width=512;ec.height=256;const ex=ec.getContext('2d'),eg=ex.createLinearGradient(0,0,0,256);eg.addColorStop(0,'#b6c8d3');eg.addColorStop(.5,'#e9e1cc');eg.addColorStop(1,'#51483c');ex.fillStyle=eg;ex.fillRect(0,0,512,256);ex.fillStyle='#fff9e9';for(let i=0;i<4;i++)ex.fillRect(265+i*40,55,29,105);const et=new THREE.CanvasTexture(ec);et.mapping=THREE.EquirectangularReflectionMapping;et.colorSpace=THREE.SRGBColorSpace;const pmrem=new THREE.PMREMGenerator(renderer),environment=pmrem.fromEquirectangular(et);scene.environment=environment.texture;scene.environmentIntensity=.55;et.dispose();pmrem.dispose();
const white=mat('#efede4'),accent=mat(styles[0][1]),oak=mat('#a88b66',.55),darkWood=mat('#5a4635',.55),brass=mat('#b8a173',.34,.65),ceramic=mat('#e5d6c2',.42),linen=new THREE.MeshPhysicalMaterial({color:'#e6dfd1',bumpMap:weave,bumpScale:.025,roughness:.84,sheen:.8,sheenColor:new THREE.Color('#eee4d3')}),cushion=mat('#c6a297'),bedLinen=new THREE.MeshPhysicalMaterial({color:'#e8dfd5',bumpMap:weave,bumpScale:.022,roughness:.92,sheen:.65}),glass=new THREE.MeshPhysicalMaterial({color:'#dde8de',transparent:true,opacity:.12,roughness:.08,metalness:.03,depthWrite:false});
for(const m of [oak,darkWood]){m.map=grain;m.bumpMap=grain;m.bumpScale=.012;m.clearcoat=.16;}cushion.bumpMap=weave;cushion.bumpScale=.025;cushion.sheen=.7;
function box(w,h,d,m,x,y,z,parent=world){const o=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
function soft(w,h,d,m,x,y,z,parent=world){const r=Math.min(.115,h*.43,w*.15,d*.4),o=new THREE.Mesh(roundedGeo(w,h,d,r),m);o.position.set(x,y,z);o.castShadow=o.receiveShadow=true;parent.add(o);return o;}
function cylinder(rt,rb,h,m,x,y,z,parent=world){const o=new THREE.Mesh(new THREE.CylinderGeometry(rt,rb,h,36),m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
function ball(r,m,x,y,z,parent=world){const o=new THREE.Mesh(new THREE.SphereGeometry(r,20,12),m);o.position.set(x,y,z);o.castShadow=true;parent.add(o);return o;}
function block(x,z,w,d,level=0){obstacles.push({x,z,w:w+.2,d:d+.2,level});}
const floor=new THREE.Mesh(new THREE.PlaneGeometry(8,10),floorMat);floor.rotation.x=-Math.PI/2;floor.receiveShadow=true;world.add(floor);
const suite=createSuiteArchitecture({world,materials:{white,oak,darkWood,brass,glass},floorMat,invalidate:()=>{dirty=true;},reduced});
// Bedroom nook, open-sided partition and upholstered bed.
const bedroomStart=world.children.length;
box(3.7,3,.08,accent,-2.05,1.5,-4.86);
soft(2.25,.8,.15,linen,-2.15,.82,-4.55);box(2.25,.32,2.25,oak,-2.15,.3,-3.55);soft(2.18,.26,2.15,bedLinen,-2.15,.57,-3.5);
for(const x of [-2.7,-1.58]){const p=soft(.86,.17,.47,linen,x,.79,-4.1);p.rotation.x=.15;}
const throwMat=mat('#c8a9a0');block(-2.15,-3.5,2.4,2.45,1);
for(const x of [-3.6,-.68]){cylinder(.31,.31,.06,oak,x,.53,-4.0);cylinder(.06,.13,.52,oak,x,.26,-4.0);cylinder(.10,.14,.29,ceramic,x,.72,-4);cylinder(.25,.16,.25,mat('#eee0c2'),x,1.0,-4);}

// A draped duvet follows the mattress edges rather than a flat rectangular block.
const duvetGeometry=new THREE.PlaneGeometry(2.5,1.65,80,64),duvetVertices=duvetGeometry.attributes.position;
for(let i=0;i<duvetVertices.count;i++){const x=duvetVertices.getX(i),v=duvetVertices.getY(i);const edge=Math.max(0,Math.abs(x)-1.055);const foot=Math.max(0,-v-.56);const folds=.012*Math.sin(x*22+v*4)*Math.cos(v*12)+.008*Math.sin(x*37-v*7);duvetVertices.setZ(i,folds-edge*1.5-foot*1.2);}
duvetGeometry.computeVertexNormals();const duvet=new THREE.Mesh(duvetGeometry,bedLinen);duvet.rotation.x=-Math.PI/2;duvet.position.set(-2.15,.84,-3.15);duvet.castShadow=duvet.receiveShadow=true;bedLinen.side=THREE.DoubleSide;world.add(duvet);
const bedroomMeshes=world.children.slice(bedroomStart),bedroomGroup=new THREE.Group();world.add(bedroomGroup);for(const o of bedroomMeshes)bedroomGroup.add(o);bedroomGroup.position.y=suite.floorY;
// Living room. Individual cushions receive material changes.
const sofaFabric=linen.clone();const sofa=new THREE.Group();sofa.position.set(-2.15,0,.25);world.add(sofa);
for(const x of [-1.17,1.17])for(const z of [-.36,.36])cylinder(.045,.045,.22,oak,x,.11,z,sofa);
soft(2.85,.28,1.08,sofaFabric,0,.36,0,sofa);soft(2.85,.78,.24,sofaFabric,0,.76,-.46,sofa);
for(const x of [-1.37,1.37])soft(.22,.62,1.08,sofaFabric,x,.64,0,sofa);
for(const x of [-.86,0,.86]){const c=soft(.81,.20,.80,sofaFabric,x,.58,.06,sofa);c.userData.material='sofa';pickables.push(c);}
for(const x of [-.94,1.0]){const p=soft(.45,.44,.16,cushion,x,.91,-.21,sofa);p.rotation.z=x>0?-.13:.12;}
block(-2.15,.25,2.95,1.2);
const rug=new THREE.Mesh(new THREE.PlaneGeometry(3.7,3.5),new THREE.MeshStandardMaterial({map:rugMap,roughness:1}));rug.rotation.x=-Math.PI/2;rug.position.set(-1.75,.013,1.65);world.add(rug);
const shadowCanvas=document.createElement('canvas');shadowCanvas.width=shadowCanvas.height=128;const sc=shadowCanvas.getContext('2d'),sg=sc.createRadialGradient(64,64,10,64,64,64);sg.addColorStop(0,'rgba(37,31,23,.27)');sg.addColorStop(.55,'rgba(37,31,23,.12)');sg.addColorStop(1,'rgba(37,31,23,0)');sc.fillStyle=sg;sc.fillRect(0,0,128,128);const shadowTexture=new THREE.CanvasTexture(shadowCanvas);
for(const [x,z,w,d]of [[-2.15,-3.5,3,3],[-2.15,.25,3.6,1.9],[-1.65,1.92,2.3,2.3],[2.1,-.2,2.3,2.3]]){const shadow=new THREE.Mesh(new THREE.PlaneGeometry(w,d),new THREE.MeshBasicMaterial({map:shadowTexture,transparent:true,depthWrite:false}));shadow.rotation.x=-Math.PI/2;shadow.position.set(x,z===-3.5?suite.floorY+.021:.021,z);world.add(shadow);}
const coffee=cylinder(.72,.72,.08,oak,-1.65,.5,1.92);const coffeeBase=cylinder(.31,.38,.47,oak,-1.65,.235,1.92);block(-1.65,1.92,1.45,1.45);
box(.36,.045,.26,mat('#6d7b68'),-1.79,.57,1.78);box(.30,.035,.23,mat('#e5d1b4'),-1.73,.61,1.8);cylinder(.13,.09,.2,ceramic,-1.37,.64,2.12);
const lounge=new THREE.Group();lounge.position.set(-3.18,0,3.05);lounge.rotation.y=.45;world.add(lounge);soft(.85,.16,.82,linen,0,.45,0,lounge);soft(.85,.73,.18,linen,0,.77,.34,lounge);for(const x of [-.36,.36])for(const z of [-.3,.3])box(.045,.45,.045,oak,x,.23,z,lounge);block(-3.18,3.05,1,1);
// Dining table and chairs, clear of the spiral stair approach.
const diningStart=world.children.length;
cylinder(.79,.79,.08,oak,2.1,.79,-.2);cylinder(.14,.35,.74,oak,2.1,.37,-.2);block(2.1,-.2,1.6,1.6);
const diningChairs=[];
for(const [x,z,rotation]of [[2.1,-1.36,0],[3.2,-.2,-Math.PI/2],[2.1,.96,Math.PI],[.96,-.2,Math.PI/2]]){const g=new THREE.Group();g.position.set(x,0,z);g.rotation.y=rotation;world.add(g);diningChairs.push(g);soft(.51,.10,.50,linen,0,.47,0,g);soft(.51,.54,.07,oak,0,.77,-.23,g);for(const xx of [-.19,.19])for(const zz of [-.18,.18])box(.035,.45,.035,oak,xx,.23,zz,g);}
cylinder(.15,.10,.3,ceramic,2.1,1.0,-.2);const branch=mat('#6c8060');for(let i=0;i<7;i++){const leaf=ball(.1,branch,2.1+(rand()-.5)*.38,1.25+rand()*.25,-.2+(rand()-.5)*.35);leaf.scale.set(1,.4,1.7);}
const diningNodes=world.children.slice(diningStart);for(const o of diningNodes)o.position.z+=.85;for(const o of obstacles)if(o.x===2.1&&o.z===-.2)o.z+=.85;for(const g of diningChairs)block(g.position.x,g.position.z,.5,.5);
// Kitchen wall: simple closed cabinetry and pale stone worktop.
for(let i=0;i<4;i++){box(.78,.86,.65,white,.75+i*.8,.43,-4.45);box(.74,.75,.035,oak,.75+i*.8,.47,-4.1);box(.12,.018,.03,brass,.75+i*.8,.74,-4.06);}
box(3.3,.065,.76,mat('#d9d1bf',.38),1.94,.90,-4.42);box(3.3,.9,.05,mat('#ded6c7'),1.94,1.37,-4.78);box(3.35,.065,.35,oak,1.94,1.92,-4.63);block(1.95,-4.45,3.4,.8);
box(.65,.025,.43,mat('#3f453e',.4),2.6,.95,-4.38);for(const x of [2.43,2.77])for(const z of [-4.24,-4.5])cylinder(.085,.085,.012,mat('#292f29',.4,.2),x,.972,z);
cylinder(.1,.1,.21,ceramic,.85,1.05,-4.4);cylinder(.12,.08,.3,ceramic,1.13,1.07,-4.5);cylinder(.09,.06,.22,mat('#8e9c83'),1.43,1.04,-4.5);
// Compact storage below the sleeping loft.
for(const x of [-3.25,-2.25,-1.25]){box(.94,2.15,.56,oak,x,1.075,-4.52);box(.018,.2,.04,brass,x+.32,1.0,-4.21);}block(-2.25,-4.52,2.95,.65);
// Art above the sofa, built from simple shapes rather than copied artwork.
const artCanvas=document.createElement('canvas');artCanvas.width=512;artCanvas.height=384;const ac=artCanvas.getContext('2d');ac.fillStyle='#eee4d5';ac.fillRect(0,0,512,384);ac.fillStyle='#bc9686';ac.beginPath();ac.arc(220,245,125,Math.PI,0);ac.lineTo(345,384);ac.lineTo(95,384);ac.fill();ac.fillStyle='#8d9b83';ac.fillRect(315,40,90,210);ac.fillStyle='#e0c493';ac.beginPath();ac.arc(137,120,63,0,Math.PI*2);ac.fill();const artTex=new THREE.CanvasTexture(artCanvas);artTex.colorSpace=THREE.SRGBColorSpace;
box(.07,1.12,1.52,oak,-3.86,1.98,.25);const art=box(1.42,1.02,.035,new THREE.MeshStandardMaterial({map:artTex,roughness:1}),-3.81,1.98,.25);art.rotation.y=Math.PI/2;
// Outdoor planting and timber deck are a neutral setting, not a site-specific claim.
box(3,.1,12,oak,5.55,-.10,0);function plant(x,z){cylinder(.28,.23,.42,ceramic,x,.21,z);for(let i=0;i<10;i++){const leaf=ball(.18,mat('#6f8767'),x+(rand()-.5)*.55,.57+rand()*.7,z+(rand()-.5)*.55);leaf.scale.set(.65,2.2,.45);leaf.rotation.z=(rand()-.5)*1.1;}}
plant(3.3,3.9);plant(-3.5,3.9);
// A private timber entry porch keeps the entrance view within the villa concept.
box(3.6,.1,2.4,oak,1.3,-.055,6.2);for(let i=0;i<29;i++){const x=-.44+i*.124;box(.105,2.6,.065,oak,x,1.3,7.24);}box(3.6,.08,.09,darkWood,1.3,2.64,7.24);plant(.15,6.5);plant(2.5,6.55);
// Pendant lighting and daylight.
for(const [x,z]of [[2.1,.65],[-1.65,1.92]]){cylinder(.016,.016,.31,darkWood,x,2.755,z);const shade=new THREE.Mesh(new THREE.ConeGeometry(.39,.28,48,1,true),mat('#c4ab80',.8));shade.position.set(x,2.52,z);shade.material.side=THREE.DoubleSide;world.add(shade);const bulb=ball(.075,new THREE.MeshStandardMaterial({color:'#fff2d7',emissive:'#ffd998',emissiveIntensity:1.4}),x,2.45,z);}
const hemi=new THREE.HemisphereLight('#e3eff9','#786a54',.65);scene.add(hemi);const sun=new THREE.DirectionalLight('#fff0d2',3.4);sun.position.set(10,8.2,3);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);sun.shadow.camera.left=-8;sun.shadow.camera.right=8;sun.shadow.camera.top=8;sun.shadow.camera.bottom=-8;sun.shadow.normalBias=.025;sun.shadow.bias=-.0002;scene.add(sun);sun.target.position.set(-1,0,0);scene.add(sun.target);
const fill=new THREE.PointLight('#ffe8cd',9,11,2);fill.position.set(0,2.35,0);scene.add(fill);
const upperFill=new THREE.PointLight('#ffe6c4',14,9,2);upperFill.position.set(-1.4,5.9,-3);scene.add(upperFill);const kitchenFill=new THREE.PointLight('#ffe9cb',8,6,2);kitchenFill.position.set(.2,2.72,-3.8);scene.add(kitchenFill);
box(6.2,.025,.025,new THREE.MeshStandardMaterial({color:'#fff2d1',emissive:'#ffdbaa',emissiveIntensity:.8}),0,2.96,-1.17);

const curtainMat=new THREE.MeshPhysicalMaterial({color:'#e2daca',roughness:.94,side:THREE.DoubleSide,bumpMap:weave,bumpScale:.012,sheen:.65});
for(const z of [-3.91,-1.41,1.09,3.59])for(const [height,y]of [[2.5,1.62],[2.84,4.82]]){const g=new THREE.PlaneGeometry(.62,height,24,20),a=g.attributes.position;for(let i=0;i<a.count;i++){const u=a.getX(i);a.setZ(i,Math.sin((u+.31)*Math.PI*16)*.055);}g.computeVertexNormals();const c=new THREE.Mesh(g,curtainMat);c.rotation.y=-Math.PI/2;c.position.set(3.83,y,z);c.castShadow=c.receiveShadow=true;world.add(c);}
// Upholstery piping and a softly folded bed runner give furniture a readable silhouette.
for(const x of [-.86,0,.86]){/* cushion seams follow their own seat */const pts=[];for(let i=0;i<=64;i++){const t=i/64*Math.PI*2;pts.push(new THREE.Vector3(x+Math.sign(Math.cos(t))*.34+Math.cos(t)*.045,.65,.06+Math.sign(Math.sin(t))*.335+Math.sin(t)*.045));}const seam=new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts,true),80,.005,5,true),sofaFabric);sofa.add(seam);}
const runnerG=new THREE.PlaneGeometry(2.16,.65,60,16),rp=runnerG.attributes.position;for(let i=0;i<rp.count;i++){const x=rp.getX(i);const z=-2.85-rp.getY(i),v=-(z+3.15);rp.setZ(i,.012*Math.sin(x*22+v*4)*Math.cos(v*12)+.008*Math.sin(x*37-v*7)-Math.max(0,Math.abs(x)-1.055)*1.5-Math.max(0,-v-.56)*1.2);}runnerG.computeVertexNormals();const runner=new THREE.Mesh(runnerG,throwMat);runner.rotation.x=-Math.PI/2;runner.position.set(-2.15,.851,-2.85);runner.castShadow=runner.receiveShadow=true;bedroomGroup.add(runner);throwMat.side=THREE.DoubleSide;throwMat.bumpMap=weave;throwMat.bumpScale=.017;
const atmospheres={day:{sun:3.4,hemi:.65,lamp:9,env:.55,exposure:1.02,color:'#fff0d2',pos:[10,8.2,3]},sunset:{sun:3,hemi:.38,lamp:15,env:.42,exposure:1.06,color:'#ffc080',pos:[10,5.5,1]},evening:{sun:.12,hemi:.24,lamp:42,env:.24,exposure:1.18,color:'#8bacdf',pos:[10,8,3]}};
document.querySelectorAll('[data-light]').forEach(b=>b.addEventListener('click',()=>{const a=atmospheres[b.dataset.light];sun.intensity=a.sun;sun.color.set(a.color);sun.position.set(...a.pos);hemi.intensity=a.hemi;fill.intensity=a.lamp*.7;upperFill.intensity=Math.max(10,a.lamp*1.2);kitchenFill.intensity=Math.max(8,a.lamp*.55);scene.environmentIntensity=a.env;renderer.toneMappingExposure=a.exposure;timeAtmosphere?.set(b.dataset.light);document.documentElement.dataset.timeOfDay=b.dataset.light;document.querySelectorAll('[data-light]').forEach(v=>v.setAttribute('aria-pressed',String(v===b)));dirty=true;announce(b.textContent+' · 창밖 풍경과 실내 빛을 적용했습니다.');}));

// Transparent panes must not cast opaque shadows across the entire interior.
world.traverse(o=>{if(o.isMesh&&o.material===glass)o.castShadow=false;});
// A floor marker previews instant jump destinations.
const marker=new THREE.Mesh(new THREE.RingGeometry(.16,.205,40),new THREE.MeshBasicMaterial({color:'#597b6b',transparent:true,opacity:.72,depthWrite:false,side:THREE.DoubleSide}));marker.rotation.x=-Math.PI/2;marker.position.y=.026;marker.visible=false;world.add(marker);
const locations={living:{p:[1.25,1.6,4.12],target:[-1.2,1.2,-.8],label:'1층 거실',level:0},dining:{p:[.05,1.58,2.15],target:[2.1,1,.65],label:'1층 다이닝',level:0},entrance:{p:[1.3,1.58,2.85],target:[1.3,1.2,4.92],label:'현관',level:0},bedroom:{p:[.65,4.68,-4.35],target:[-1.6,3.85,-2.6],mobileTarget:[-2,3.85,-3],label:'2층 침실',level:1,fov:70,mobileFov:84}};
let active=false,paused=false,inView=true,yaw=0,pitch=0,drag=null,entered=false,lastTime=0,lastPlace='living',viewFade=null;const keys=new Set();
function orient(target){const v=new THREE.Vector3(...target).sub(camera.position);yaw=Math.atan2(-v.x,-v.z);pitch=Math.atan2(v.y,Math.hypot(v.x,v.z));applyRotation();}
function applyRotation(){pitch=THREE.MathUtils.clamp(pitch,-.78,.65);camera.rotation.set(pitch,yaw,0,'YXZ');camera.updateMatrixWorld(true);}
function announce(text){status.textContent=text;}
function normalFov(){const p=locations[lastPlace];return innerWidth<600?(p?.mobileFov||72):(p?.fov||56);}
function readView(){return {p:camera.position.toArray(),level:currentLevel,place:lastPlace,yaw:camera.rotation.y,pitch:camera.rotation.x,fov:camera.fov};}
function setLevel(level){currentLevel=level;document.documentElement.dataset.floorLevel=String(level);if(locations[lastPlace]?.level!==level)lastPlace=level?'bedroom':'living';document.querySelectorAll('[data-place]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.place===lastPlace)));$('#place').textContent=locations[lastPlace]?.label||(level?'2층':'1층');}
// Quick transitions are atomic: no camera path, step traversal, or walking interpolation.
function changeView(pose){keys.clear();drag=null;canvas.classList.remove('dragging');viewFade?.cancel();if(pose.place&&locations[pose.place])lastPlace=pose.place;setLevel(pose.level??currentLevel);camera.position.set(...pose.p);if(pose.target)orient(pose.target);else{yaw=pose.yaw;pitch=pose.pitch;applyRotation();}camera.fov=pose.fov??normalFov();camera.updateProjectionMatrix();camera.updateMatrixWorld(true);marker.visible=false;objectExperience?.update();if(active&&entered&&!reduced)viewFade=canvas.animate([{opacity:.45},{opacity:1}],{duration:140,easing:'ease-out'});dirty=true;return true;}
function go(place){const l=locations[place];if(!l)return;objectExperience?.close({restore:false});lastPlace=place;changeView({...l,place,target:innerWidth<600?(l.mobileTarget||l.target):l.target,fov:innerWidth<600?(l.mobileFov||72):(l.fov||56)});announce(l.label+'로 바로 이동했습니다.');}
function walkable(x,z,level=currentLevel){return suiteNavigation?suiteNavigation.walkable(x,z,level):false;}
function surfaceAt(event){const r=canvas.getBoundingClientRect();pointer.set(((event.clientX-r.left)/r.width)*2-1,-((event.clientY-r.top)/r.height)*2+1);camera.updateMatrixWorld();raycaster.setFromCamera(pointer,camera);const surfaces=currentLevel?[suite.loftFloor,suite.landing]:[floor],hit=raycaster.intersectObjects(surfaces,false)[0];if(!hit)return null;const visible=o=>{for(let p=o;p;p=p.parent)if(!p.visible)return false;return true;};const front=raycaster.intersectObjects(world.children,true).find(h=>visible(h.object)&&![].concat(h.object.material).some(m=>m.transparent));return front&&front.distance<hit.distance-.025&&!surfaces.includes(front.object)?null:hit;}
canvas.addEventListener('pointerdown',e=>{if(!entered||e.button>0)return;canvas.focus({preventScroll:true});drag={x:e.clientX,y:e.clientY,lastX:e.clientX,lastY:e.clientY,distance:0};canvas.setPointerCapture(e.pointerId);canvas.classList.add('dragging');objectExperience?.beginOrbit();});
canvas.addEventListener('pointermove',e=>{if(drag){const dx=e.clientX-drag.lastX,dy=e.clientY-drag.lastY;drag.distance+=Math.abs(dx)+Math.abs(dy);if(objectExperience?.selected){objectExperience.dragOrbit(dx,dy);yaw=camera.rotation.y;pitch=camera.rotation.x;}else{yaw-=dx*.004;pitch-=dy*.003;applyRotation();}drag.lastX=e.clientX;drag.lastY=e.clientY;$('#hint').style.opacity='0';}else if(entered){const hit=surfaceAt(e),pick=objectExperience?.pick(raycaster);canvas.style.cursor=pick?'pointer':'grab';marker.visible=!objectExperience?.selected&&!!hit&&walkable(hit.point.x,hit.point.z);if(marker.visible)marker.position.set(hit.point.x,(currentLevel?suite.floorY:0)+.026,hit.point.z);}});
canvas.addEventListener('pointerup',e=>{if(!drag)return;const click=drag.distance<9;drag=null;canvas.classList.remove('dragging');if(canvas.hasPointerCapture(e.pointerId))canvas.releasePointerCapture(e.pointerId);if(!click)return;const hit=surfaceAt(e),selected=objectExperience?.pick(raycaster);if(selected){objectExperience.select(selected);marker.visible=false;return;}if(hit&&walkable(hit.point.x,hit.point.z)){objectExperience?.close({restore:false});changeView({p:[hit.point.x,suiteNavigation.eyeY(currentLevel),hit.point.z],level:currentLevel,yaw:camera.rotation.y,pitch:camera.rotation.x,fov:normalFov()});announce((currentLevel?'2층':'1층')+'의 선택한 위치로 바로 이동했습니다.');}});
canvas.addEventListener('pointercancel',()=>{drag=null;canvas.classList.remove('dragging');});canvas.addEventListener('lostpointercapture',()=>{drag=null;canvas.classList.remove('dragging');});
canvas.addEventListener('keydown',e=>{if(['w','a','s','d'].includes(e.key.toLowerCase())){e.preventDefault();e.stopPropagation();if(!e.repeat)announce('위치 버튼이나 바닥을 눌러 바로 이동하세요.');return;}if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)){e.preventDefault();e.stopPropagation();if(!keys.size&&objectExperience?.selected)objectExperience.beginOrbit();keys.add(e.key);}});window.addEventListener('keyup',e=>keys.delete(e.key));window.addEventListener('blur',()=>keys.clear());
function updateRotation(dt){if(!keys.size||!entered)return;const horizontal=Number(keys.has('ArrowRight'))-Number(keys.has('ArrowLeft')),vertical=Number(keys.has('ArrowDown'))-Number(keys.has('ArrowUp'));if(objectExperience?.selected){objectExperience.dragOrbit(horizontal*dt*300,vertical*dt*200);yaw=camera.rotation.y;pitch=camera.rotation.x;}else{yaw-=horizontal*dt;pitch-=vertical*dt*.5;applyRotation();}}

document.querySelectorAll('[data-place]').forEach(b=>b.addEventListener('click',()=>go(b.dataset.place)));
$('#reset').addEventListener('click',()=>go('living'));
$('#help').addEventListener('click',()=>$('#instructions').showModal());$('#close-help').addEventListener('click',()=>$('#instructions').close());$('#help-done').addEventListener('click',()=>$('#instructions').close());$('#instructions').addEventListener('click',e=>{if(e.target===$('#instructions')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close();}});
$('#instructions').addEventListener('close',()=>$('#help').focus({preventScroll:true}));
$('#fullscreen').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{announce('이 브라우저에서는 전체 화면을 지원하지 않습니다.');}});
document.addEventListener('fullscreenchange',()=>$('#fullscreen').setAttribute('aria-label',document.fullscreenElement?'전체 화면 닫기':'전체 화면으로 보기'));
$('#enter').addEventListener('click',()=>{entered=true;$('#welcome').hidden=true;objectExperience?.setEntered();canvas.focus({preventScroll:true});if(parent!==window)parent.postMessage({type:'tour:enter'},location.origin);announce('위치 버튼이나 바닥을 눌러 바로 이동하고 드래그로 둘러보세요.');});
function resize(){const r=canvas.getBoundingClientRect();if(!r.width||!r.height)return;renderer.setSize(r.width,r.height,false);camera.aspect=r.width/r.height;const focus=objectExperience?.entries.get(objectExperience.selected);camera.fov=focus?(r.width<600?(focus.mobileFov||80):(focus.fov||48)):normalFov();camera.updateProjectionMatrix();realism?.resize(r.width,r.height);dirty=true;}
new ResizeObserver(resize).observe(canvas);window.addEventListener('message',e=>{if(e.origin!==location.origin||e.source!==parent)return;if(e.data?.type==='tour:visibility'){paused=!e.data.visible;dirty=true;if(paused)keys.clear();else if(entered&&parent!==window)parent.postMessage({type:'tour:enter'},location.origin);}});document.addEventListener('visibilitychange',()=>{inView=!document.hidden;dirty=true;if(!inView)keys.clear();});
canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();paused=true;$('#fallback').hidden=false;announce('공간을 표시할 수 없습니다. 다시 열어주세요.');});
suiteNavigation=createSuiteNavigation({suite,obstacles});go('living',true);resize();
try{realism=await enhanceInterior({scene,world,renderer,camera,sofa,lounge,coffee,coffeeBase,diningChairs,pickables,floorMat,white,oak,darkWood,linen,bedLinen,cushion,throwMat,rug,curtainMat,invalidate:()=>{dirty=true;}});}catch(error){console.warn('Enhanced renderer unavailable; using standard renderer.',error);document.documentElement.dataset.assetState='fallback';$('#asset-load-note').textContent='고급 화면을 준비하지 못해 기본 공간으로 표시합니다. 새로고침해 주세요.';}

const colorOptions=styles.map(([label,color])=>({label,color}));
suite.loftFloor.material=floorMat.clone();suite.landing.material=suite.loftFloor.material;suite.update(0);
const rootsByMaterial=m=>{const result=[];world.traverse(o=>{if(o.isMesh&&o.material===m)result.push(o);});return result;};
const baseObjects=[
 {id:'floor',label:'1층 바닥',level:0,surface:'floor',roots:[floor],pinAt:[.8,.04,2.7],target:[-.5,0,2.3],p:[.6,1.85,3.8],fov:48,mobileFov:76,options:[{label:'내추럴 오크',color:'#f0dfc7'},{label:'웜 월넛',color:'#8e715b'}],apply:i=>{floorMat.color.set(i?'#8e715b':'#f0dfc7');}},
 {id:'bedding',label:'2층 침구',level:1,roots:[...rootsByMaterial(bedLinen),...rootsByMaterial(throwMat),...rootsByMaterial(linen).filter(o=>o.position.z<-2)],pinAt:[-2.15,4.08,-3.45],target:[-2.15,3.85,-3.45],p:[-.55,4.68,-1.6],fov:52,mobileFov:86,options:colorOptions,apply:i=>{throwMat.color.set(styles[i][1]);bedLinen.color.set(styles[i][2]);}},
 {id:'wall',label:'2층 침실 벽',level:1,roots:rootsByMaterial(accent),pinAt:[-2.05,5.2,-4.78],target:[-2.05,4.7,-4.78],p:[-.9,4.8,-1.6],fov:54,mobileFov:86,options:colorOptions,apply:i=>accent.color.set(styles[i][1])},
 {id:'sofa',label:'소파',level:0,roots:[sofa],pinAt:[-2.15,1,.25],target:[-2.15,.65,.25],p:[.3,1.45,3],fov:46,mobileFov:86,options:[{label:'크림',color:'#e6dfd1'},{label:'세이지',color:'#a7afa0'},{label:'로즈',color:'#ad8c87'}],apply:i=>sofaFabric.color.set(['#e6dfd1','#a7afa0','#ad8c87'][i])}
];
baseObjects.push({...suite.doorObject,level:0},
 {id:'loft-floor',label:'2층 바닥',level:1,surface:'floor',roots:[suite.loftFloor,suite.landing],pinAt:[.2,3.15,-2],target:[-.3,3.1,-2.6],p:[.65,4.95,-1.5],fov:48,mobileFov:76,options:[{label:'내추럴 오크',color:'#f0dfc7'},{label:'웜 월넛',color:'#8e715b'}],apply:i=>suite.loftFloor.material.color.set(i?'#8e715b':'#f0dfc7')},
 {id:'stairs-up',label:'2층으로',level:0,roots:suite.stairTreads,pinAt:[2.4,1.15,-1.7],activate:()=>go(currentLevel?'living':'bedroom')},
 {id:'stairs-down',label:'1층으로',level:1,roots:[],pinAt:[.9,4.05,-2.5],activate:()=>go('living')});
const loadedIds=new Set((realism?.objects||[]).map(o=>o.id));
objectExperience=createObjectExperience({canvas,camera,world,objects:[...baseObjects.filter(o=>!loadedIds.has(o.id)),...(realism?.objects||[]).map(o=>({...o,level:0}))],readView,changeView,canOccupy:(x,z,y)=>walkable(x,z)&&y>(currentLevel?suite.floorY:0)+.35&&y<(currentLevel?6.05:2.7),getLevel:()=>currentLevel,requestRender:()=>{dirty=true;},announce});
try{timeAtmosphere=createTimeAtmosphere({scene,renderer,invalidate:()=>{dirty=true;}});}catch(e){console.warn('Time background setup unavailable',e);}
window.__interiorInteractionAudit={readView,select:id=>objectExperience.select(id),get selected(){return objectExperience.selected;},get time(){return timeAtmosphere?.state;},objects:objectExperience.entries,get level(){return currentLevel;},movementMode:'quick',get travelling(){return false;},go,door:suite.door,walkable:(x,z,level)=>suiteNavigation.walkable(x,z,level)};

resize();renderer.compile(scene,camera);if(realism)realism.render();else renderer.render(scene,camera);$('#enter').disabled=false;$('#enter').textContent='공간 둘러보기 →';active=true;if(realism?.audit.results.some(r=>!r.ok))$('#enter').textContent='기본 공간 둘러보기 →';
function render(time){requestAnimationFrame(render);if(!active||paused||!inView||(!dirty&&!keys.size&&!suite.moving)){lastTime=time;return;}if(time-lastTime<30)return;const elapsed=Math.min((time-lastTime)/1000,.25),dt=Math.min(elapsed,.05);lastTime=time;suite.update(elapsed);updateRotation(dt);if(realism)realism.render();else renderer.render(scene,camera);objectExperience?.update();dirty=false;}
requestAnimationFrame(render);

$('#credits').addEventListener('click',()=>$('#instructions').showModal());
