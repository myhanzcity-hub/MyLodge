export function createSuiteNavigation({suite,obstacles}){
 function walkable(x,z,level=0){if(x<=-3.62||x>=3.58||z<=-4.58||z>=4.55)return false;
  // Stair geometry connects the rooms, but navigation jumps to a safe room viewpoint.
  if(Math.hypot(x-2.4,z+3)<(level?1.45:1.35))return false;
  return !obstacles.some(o=>(o.level||0)===level&&Math.abs(x-o.x)<o.w/2&&Math.abs(z-o.z)<o.d/2);
 }
 return {walkable,eyeY:level=>1.58+(level?suite.floorY:0)};
}
