import * as THREE from '../../entry-3d/vendor/three.module.js';

/** Architectural concept only: two enclosed stories connected by an internal spiral stair. */
export function createSuiteArchitecture({world,materials,floorMat,invalidate=()=>{},reduced=false}){
  const {white,oak,darkWood,brass}=materials;
  const root=new THREE.Group();root.name='suite-architecture';root.userData.enclosedFloors=true;world.add(root);
  const floorY=3.1,stairCenter={x:2.4,z:-3},holeRadius=1.2;
  const stairTreads=[],guards=[],stairPath=[];
  const steel=new THREE.MeshPhysicalMaterial({color:'#323d38',roughness:.4,metalness:.72});
  const railGlass=new THREE.MeshPhysicalMaterial({color:'#dce9e5',transparent:true,opacity:.16,roughness:.05,metalness:0,depthWrite:false,side:THREE.DoubleSide});
  function box(w,h,d,material,x,y,z,parent=root){const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material);mesh.position.set(x,y,z);mesh.castShadow=!material.transparent;mesh.receiveShadow=true;parent.add(mesh);return mesh;}
  function cylinder(radius,height,material,x,y,z,parent=root){const mesh=new THREE.Mesh(new THREE.CylinderGeometry(radius,radius,height,24),material);mesh.position.set(x,y,z);mesh.castShadow=!material.transparent;mesh.receiveShadow=true;parent.add(mesh);return mesh;}
  function tube(points,radius,material,parent=root){const curve=new THREE.CatmullRomCurve3(points),mesh=new THREE.Mesh(new THREE.TubeGeometry(curve,Math.max(12,points.length*2),radius,8,false),material);mesh.castShadow=!material.transparent;mesh.receiveShadow=true;parent.add(mesh);return mesh;}
  const roofHeight=z=>6.3+.03*(z+5);
  // The front wall is genuinely split around the entry opening.
  box(.18,6.6,10.1,white,-4,3.3,0);box(8.1,6.6,.18,white,0,3.3,-5);
  const doorX=1.3,doorWidth=1.15,doorHeight=2.3,left=doorX-doorWidth/2,right=doorX+doorWidth/2;
  box(left+4,6.6,.18,white,(left-4)/2,3.3,5);
  box(4-right,6.6,.18,white,(4+right)/2,3.3,5);
  box(doorWidth,6.6-doorHeight,.18,white,doorX,doorHeight+(6.6-doorHeight)/2,5);
  // Separate glazing bands and an opaque floor band make the two enclosed stories clear.
  box(.2,.36,10,white,4,.18,0);box(.2,.22,10,oak,4,6.43,0);
  for(const z of [-4.92,-2.46,0,2.46,4.92])box(.14,6.25,.10,darkWood,3.96,3.23,z);
  box(.23,.24,10,white,4,floorY-.025,0);
  for(const y of [2.91,3.22,6.32])box(.12,.07,9.92,darkWood,3.96,y,0);
  for(let i=0;i<4;i++){
    const z=-3.69+i*2.46;
    for(const [low,high]of [[.36,2.91],[3.24,6.32]]){
      const pane=box(.045,high-low,2.35,railGlass,4,(low+high)/2,z);pane.name='suite-window';pane.castShadow=false;
    }
  }
  box(7.8,.12,.055,white,0,.07,-4.93);
  // Stop the front skirting at each jamb; no bar crosses the door opening.
  box(left+3.9,.12,.055,white,(left-3.9)/2,.07,4.91);
  box(3.9-right,.12,.055,white,(3.9+right)/2,.07,4.91);
  box(.055,.12,9.9,white,-3.89,.07,0);

  // A full floor/ceiling separates both stories; its only opening is the internal staircase.
  const shape=new THREE.Shape();shape.moveTo(-3.91,-4.91);shape.lineTo(3.91,-4.91);shape.lineTo(3.91,4.91);shape.lineTo(-3.91,4.91);shape.closePath();
  const opening=new THREE.Path();opening.absarc(stairCenter.x,-stairCenter.z,holeRadius,0,Math.PI*2,true);shape.holes.push(opening);
  const slabGeometry=new THREE.ExtrudeGeometry(shape,{depth:.18,bevelEnabled:false,curveSegments:64});slabGeometry.rotateX(-Math.PI/2);
  const uv=slabGeometry.attributes.uv,pos=slabGeometry.attributes.position;for(let i=0;i<pos.count;i++)uv.setXY(i,(pos.getX(i)+4)/8,(pos.getZ(i)+5)/10);
  const loftFloor=new THREE.Mesh(slabGeometry,floorMat);loftFloor.position.y=floorY-.18;loftFloor.name='suite-upper-floor';loftFloor.userData.fullStorey=true;loftFloor.castShadow=loftFloor.receiveShadow=true;loftFloor.userData.floorLevel=1;root.add(loftFloor);
  // White finish on the underside keeps the first-floor ceiling bright.
  const ceilingGeometry=new THREE.ShapeGeometry(shape,64);ceilingGeometry.rotateX(-Math.PI/2);
  const ceilingIndex=ceilingGeometry.index;for(let i=0;i<ceilingIndex.count;i+=3){const b=ceilingIndex.getX(i+1);ceilingIndex.setX(i+1,ceilingIndex.getX(i+2));ceilingIndex.setX(i+2,b);}ceilingGeometry.computeVertexNormals();
  const ceiling=new THREE.Mesh(ceilingGeometry,white);ceiling.position.y=floorY-.185;ceiling.name='suite-first-floor-ceiling';ceiling.castShadow=false;ceiling.receiveShadow=true;root.add(ceiling);
  // Upstairs skirting follows the room perimeter, rather than an interior balcony edge.
  for(const z of [-4.91,4.91])box(7.8,.11,.05,white,0,floorY+.065,z);
  box(.05,.11,9.82,white,-3.89,floorY+.065,0);
  // Landing bridges the last wedge to the clear route beside the bed.
  const landing=box(1.30,.18,.86,floorMat,1.25,floorY-.09,-3);landing.name='suite-upper-landing';landing.userData.floorLevel=1;

  // Enclose the upstairs stairwell in opaque walls, with one doorway at its landing.
  // There is no mezzanine edge or glass overlook into the first floor.
  const stairwell=new THREE.Group();stairwell.name='suite-enclosed-stairwell';root.add(stairwell);
  const startGuard=Math.PI+.45,endGuard=Math.PI*3-.45,innerWall=holeRadius+.025,outerWall=innerWall+.115;
  const wallSection=new THREE.Shape();wallSection.moveTo(Math.cos(startGuard)*innerWall,-Math.sin(startGuard)*innerWall);wallSection.lineTo(Math.cos(startGuard)*outerWall,-Math.sin(startGuard)*outerWall);wallSection.absarc(0,0,outerWall,-startGuard,-endGuard,true);wallSection.lineTo(Math.cos(endGuard)*innerWall,-Math.sin(endGuard)*innerWall);wallSection.absarc(0,0,innerWall,-endGuard,-startGuard,false);wallSection.closePath();
  const wallGeometry=new THREE.ExtrudeGeometry(wallSection,{depth:3.2,bevelEnabled:false,curveSegments:64});wallGeometry.rotateX(-Math.PI/2);
  const stairWall=new THREE.Mesh(wallGeometry,white);stairWall.position.set(stairCenter.x,floorY,stairCenter.z);stairWall.castShadow=stairWall.receiveShadow=true;stairWall.name='suite-stairwell-wall';stairwell.add(stairWall);guards.push(stairWall);
  const openingX=stairCenter.x-Math.cos(.45)*(innerWall+.04),openingHalf=Math.sin(.45)*(innerWall+.04);
  for(const z of [stairCenter.z-openingHalf,stairCenter.z+openingHalf])box(.075,2.4,.075,oak,openingX,floorY+1.2,z,stairwell);
  box(.13,.075,openingHalf*2+.13,oak,openingX,floorY+2.4,stairCenter.z,stairwell);
  box(.15,.8,openingHalf*2+.15,white,openingX,floorY+2.8,stairCenter.z,stairwell);
  // Spiral treads are actual annular sectors, not a disguised ramp.
  const steps=18,startAngle=Math.PI/2,turn=Math.PI*2.5,stepAngle=turn/steps,outer=1.03,inner=.18;
  cylinder(.12,floorY+1.2,steel,stairCenter.x,(floorY+1.2)/2,stairCenter.z);
  const groundLanding=[2.4,1.58,-1.5];stairPath.push(new THREE.Vector3(...groundLanding));
  // Enter through the stair's open radial side, without crossing its outer handrail.
  stairPath.push(new THREE.Vector3(3.1,1.58,-2.1));
  for(let i=0;i<steps;i++){
    const a=startAngle+i*stepAngle,b=a+stepAngle*.985,section=new THREE.Shape();
    section.moveTo(Math.cos(a)*inner,-Math.sin(a)*inner);section.lineTo(Math.cos(a)*outer,-Math.sin(a)*outer);
    section.absarc(0,0,outer,-a,-b,true);section.lineTo(Math.cos(b)*inner,-Math.sin(b)*inner);section.absarc(0,0,inner,-b,-a,false);section.closePath();
    const g=new THREE.ExtrudeGeometry(section,{depth:.065,bevelEnabled:false,curveSegments:8});g.rotateX(-Math.PI/2);
    const step=new THREE.Mesh(g,oak);step.position.set(stairCenter.x,(i+1)*floorY/steps-.065,stairCenter.z);step.castShadow=step.receiveShadow=true;step.name='suite-stair-step-'+(i+1);step.userData.stairStep=i;root.add(step);stairTreads.push(step);
    const mid=(a+b)/2,r=.67;stairPath.push(new THREE.Vector3(stairCenter.x+Math.cos(mid)*r,(i+1)*floorY/steps+1.58,stairCenter.z+Math.sin(mid)*r));
    if(i%2===0){const t=a+stepAngle*.5;guards.push(cylinder(.014,1.05-floorY/steps/2,steel,stairCenter.x+Math.cos(t)*1.065,(i+1)*floorY/steps+(1.05-floorY/steps/2)/2,stairCenter.z+Math.sin(t)*1.065));}
  }
  stairPath.push(new THREE.Vector3(1.58,floorY+1.58,-3));stairPath.push(new THREE.Vector3(.7,floorY+1.58,-2.5));
  const spiralRail=[];for(let i=0;i<=100;i++){const p=i/100,t=startAngle+turn*p;spiralRail.push(new THREE.Vector3(stairCenter.x+Math.cos(t)*1.065,p*floorY+1.05,stairCenter.z+Math.sin(t)*1.065));}guards.push(tube(spiralRail,.026,oak));

  // Sloping roof and skylight belong only to the enclosed second-floor room.
  function roofPanel(x0,x1,z0,z1,material=white){const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute([x0,roofHeight(z0),z0,x1,roofHeight(z0),z0,x1,roofHeight(z1),z1,x0,roofHeight(z1),z1],3));g.setAttribute('uv',new THREE.Float32BufferAttribute([0,0,1,0,1,1,0,1],2));g.setIndex([0,1,2,0,2,3]);g.computeVertexNormals();const mesh=new THREE.Mesh(g,material);mesh.castShadow=!material.transparent;mesh.receiveShadow=true;root.add(mesh);return mesh;}
  const skylight={x0:-2.9,x1:-.65,z0:-4.3,z1:-2.75};
  roofPanel(-4.1,skylight.x0,-5.1,5.1);roofPanel(skylight.x1,4.1,-5.1,5.1);roofPanel(skylight.x0,skylight.x1,-5.1,skylight.z0);roofPanel(skylight.x0,skylight.x1,skylight.z1,5.1);
  const skyGlass=railGlass.clone();skyGlass.opacity=.2;roofPanel(skylight.x0,skylight.x1,skylight.z0,skylight.z1,skyGlass).name='suite-skylight';
  for(const x of [skylight.x0,skylight.x1]){const beam=box(.075,.075,skylight.z1-skylight.z0+.12,oak,x,roofHeight((skylight.z0+skylight.z1)/2)-.025,(skylight.z0+skylight.z1)/2);beam.rotation.x=Math.atan(.03);}
  for(const z of [skylight.z0,skylight.z1])box(skylight.x1-skylight.x0+.12,.075,.075,oak,(skylight.x0+skylight.x1)/2,roofHeight(z)-.025,z);
  for(const z of [-4.65,-1.1,2.5,4.75])box(8,.14,.11,oak,0,roofHeight(z)-.085,z);

  // Flush timber entry door with separate frame and hardware; no projecting threshold.
  const doorRoot=new THREE.Group();doorRoot.name='suite-entry-door';root.add(doorRoot);
  const frameMat=darkWood;
  box(.085,doorHeight+.08,.21,frameMat,left-.025,(doorHeight+.08)/2,4.935,doorRoot);box(.085,doorHeight+.08,.21,frameMat,right+.025,(doorHeight+.08)/2,4.935,doorRoot);box(doorWidth+.13,.085,.21,frameMat,doorX,doorHeight+.025,4.935,doorRoot);
  const door=new THREE.Group();door.name='suite-door-leaf';door.position.set(left+.02,0,4.93);doorRoot.add(door);
  const doorMat=oak.clone();doorMat.color.set('#bba27c');doorMat.roughness=.55;
  box(doorWidth-.04,doorHeight-.04,.065,doorMat,(doorWidth-.04)/2,doorHeight/2,0,door);
  for(const y of [.42,.82,1.22,1.62,2.02])box(doorWidth-.11,.008,.004,darkWood,(doorWidth-.04)/2,y,-.035,door);
  box(.035,.28,.035,brass,doorWidth-.18,1.16,-.078,door);box(.10,.025,.055,brass,doorWidth-.215,1.275,-.061,door);box(.10,.025,.055,brass,doorWidth-.215,1.045,-.061,door);
  const lock=cylinder(.022,.013,brass,doorWidth-.18,.965,-.041,door);lock.rotation.x=Math.PI/2;
  let targetAngle=0,isOpen=false,sharedOakMap=oak.map;
  function setOpen(value){isOpen=!!value;targetAngle=isOpen?-Math.PI*.48:0;door.userData.open=isOpen;if(reduced)door.rotation.y=targetAngle;invalidate();return isOpen;}
  const choices=[{label:'내추럴 오크',color:'#bba27c'},{label:'웜 월넛',color:'#79543d'},{label:'딥 그린',color:'#53665a'}];
  const doorObject={id:'door',label:'현관문',roots:[doorRoot],pinAt:[1.3,1.34,4.84],target:[1.3,1.1,4.9],p:[1.3,1.5,2.9],mobileP:[1.3,1.5,2.9],fov:48,mobileFov:82,options:choices,apply:i=>{doorMat.color.set(choices[i].color);invalidate();},actions:[{id:'door-toggle',label:()=>isOpen?'문 닫기':'문 열기',run:()=>{setOpen(!isOpen);return isOpen?'문 닫기':'문 열기';}}]};
  function update(dt=0){
    // Materials receive photographic maps after the scene's asynchronous asset load.
    if(sharedOakMap!==oak.map){for(const key of ['map','normalMap','roughnessMap','bumpMap','bumpScale'])doorMat[key]=oak[key];if(oak.normalScale)doorMat.normalScale.copy(oak.normalScale);doorMat.needsUpdate=true;sharedOakMap=oak.map;}
    if(Math.abs(door.rotation.y-targetAngle)>.001){door.rotation.y=reduced?targetAngle:THREE.MathUtils.damp(door.rotation.y,targetAngle,8,Math.max(0,dt));if(Math.abs(door.rotation.y-targetAngle)<.001)door.rotation.y=targetAngle;invalidate();return true;}return false;
  }
  return {root,loftFloor,ceiling,stairwell,landing,stairTreads,stairPath:stairPath.map(p=>p.toArray()),groundLanding,stairCenter,holeRadius,doorObject,door,doorRoot,setDoorOpen:setOpen,update,get moving(){return Math.abs(door.rotation.y-targetAngle)>.001;},floorY,guards};
}
