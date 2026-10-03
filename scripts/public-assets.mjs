// The only files included in the public export.
export const publicAssets = ['index.html', 'styles.css', 'app.js'];
for (const [name, largest] of [['hero',1122],['interior',1440],['terrace',1145],['coastal',1440],['forest',1440]]) {
  for (const width of [480,960,largest]) publicAssets.push(`assets/images/lodge-${name}-${width}.webp`);
}
publicAssets.push('assets/images/lodge-share.jpg');

for (const page of [8,13]) for (const width of [480,960,1440]) publicAssets.push(`assets/images/plan-p${page}-${width}.webp`);
for (const width of [480,960,1536]) publicAssets.push(`assets/images/lodge-dreamscape-${width}.webp`);

publicAssets.push('cinematic.css','cinematic.js');
publicAssets.push('chairman.css','chairman.js');
publicAssets.push('scenery.css','scenery.js');
publicAssets.push('mobile.css','mobile.js');
for (const name of ['coast','cafe','arrival']) for (const width of [480,960,1680]) publicAssets.push(`assets/images/scenery-${name}-${width}.webp`);
publicAssets.push('business-valley.html','valley.js');
for (const width of [480,960,1680]) publicAssets.push(`assets/images/vacation-arrival-${width}.webp`);
for (const name of ['morning','dinner','terrace']) for (const width of [480,960,1536]) publicAssets.push(`assets/images/living-${name}-${width}.webp`);
for (const width of [480,960,1440]) publicAssets.push(`assets/images/plan-p16-${width}.webp`);
