// The only files included in the public export.
export const publicAssets = ['index.html', 'styles.css', 'app.js'];
publicAssets.push('intro.html','arrival-intro.css','arrival-intro.js');
publicAssets.push('mobile-layout.css','mobile-layout.js');
publicAssets.push('view-mode.css','view-mode.js','view.html');
for (const name of ['service-ready','service-property-care','service-owner-exchange']) for (const width of [480,960,1680]) publicAssets.push(`assets/images/${name}-20261008-${width}.webp`);
publicAssets.push('branding.css','branding.js','assets/brand/mylodge-logo.webp','assets/brand/mylodge-character.webp');
publicAssets.push('assets/brand/mylodge-neon-icons-20261007.png');
for (const width of [480,960,1680]) publicAssets.push(`assets/images/resort-overview-20261006-${width}.webp`);
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
publicAssets.push('intro.css','intro.js');
publicAssets.push('planning.css');
publicAssets.push('assets/video/mylodge-intro-scenes-20261006-30s.mp4','assets/video/mylodge-intro-scenes-20261006-30s-mobile.mp4','assets/video/mylodge-intro-scenes-20261006-poster.webp','assets/video/mylodge-intro-scenes-20261006-poster-mobile.webp');
for (const name of ['coast','cafe','arrival']) for (const width of [480,960,1680]) publicAssets.push(`assets/images/scenery-${name}-${width}.webp`);
publicAssets.push('business-valley.html','valley.js');
publicAssets.push('domestic-villas.html','detail-pages.css','detail-pages.js');
for (const name of ['khao-soi','sai-ua','bo-sang','celadon','lanna']) for (const width of [480,960,1536]) publicAssets.push(`assets/images/chiangmai-local-${name}-20261015-${width}.webp`);
for (const name of ['food-tea','local-market','play-music','rest-wellness','work-connections']) for (const width of [480,960,1680]) publicAssets.push(`assets/images/chiangmai-${name}-20261011-${width}.webp`);
for (const width of [480,960,1680]) publicAssets.push(`assets/images/chiangmai-nature-walk-20261012-${width}.webp`);
for (const name of ['side-focus','side-tea-craft','side-rain-rest']) for (const width of [480,960,1680]) publicAssets.push(`assets/images/${name}-20261012-${width}.webp`);
for (const width of [480,960,1680]) publicAssets.push(`assets/images/vacation-arrival-${width}.webp`);
for (const name of ['morning','dinner','terrace']) for (const width of [480,960,1536]) publicAssets.push(`assets/images/living-${name}-${width}.webp`);
for (const width of [480,960,1440]) publicAssets.push(`assets/images/plan-p16-${width}.webp`);

publicAssets.push('editorial.css','editorial.js');
for (const name of ['story-destination','owner-unwind','owner-connect','owner-ideas','concierge-arrival','concierge-care','concierge-escape','gallery-pool','gallery-terrace','gallery-night','vision-masterplan','valley-resources']) for (const width of [480,960,1680]) publicAssets.push('assets/images/'+name+'-20261007-'+width+'.webp');
publicAssets.push('localization.css','localization.js');
publicAssets.push('assets/video/mylodge-intro-en-30s.mp4','assets/video/mylodge-intro-en-30s-mobile.mp4','assets/video/mylodge-intro-en-poster.webp','assets/video/mylodge-intro-en-poster-mobile.webp');
for (const name of ['facility-villa','facility-beach','facility-terrace','facility-club','project-jumunjin','project-yangyang','valley-community']) for (const width of [480,960,1680]) publicAssets.push('assets/images/'+name+'-20261007-'+width+'.webp');

publicAssets.push('assets/brand/mylodge-logo-transparent-20261007.webp');
for (const width of [480,960,1680]) publicAssets.push(`assets/images/brand-villa-atmosphere-20261008-${width}.webp`);

for (const width of [480,960,1680]) publicAssets.push(`assets/images/facility-hotel-pool-20261008-${width}.webp`);
for (const name of ['facility-pool-cabana','facility-market-v2','facility-concierge']) for (const width of [480,960,1680]) publicAssets.push(`assets/images/${name}-20261008-${width}.webp`);

for (const width of [480,960,1680]) publicAssets.push(`assets/images/chiangmai-overview-20261013-${width}.webp`);

for (const name of ['project-yangyang','yangyang-modular-villa','yangyang-pool-party','yangyang-arrival-market']) for (const width of [480,960,1680]) publicAssets.push(`assets/images/${name}-20261013-${width}.webp`);

// Park subpage feedback branch: page-scoped styling and AI concept assets.
publicAssets.push('park-feedback.css');
for (const name of ['pool-social','interior-asian','interior-european','interior-global']) for (const width of [480,960,1680]) publicAssets.push(`assets/images/chiangmai-${name}-20261019-${width}.webp`);

// Chairman feedback: social panorama, pool party and crowded club opening scenes.
for (const name of ['panorama','poolparty','club']) for (const width of [480,960,1680]) publicAssets.push(`assets/images/chiangmai-vibrant-${name}-20261019-${width}.webp`);
