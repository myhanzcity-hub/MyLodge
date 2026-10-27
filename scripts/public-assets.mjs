import {readFileSync} from 'node:fs';
// The only files included in the public export.
export const publicAssets = ['index.html', 'styles.css', 'app.js', 'hero-content.js', 'homepage.js', 'luxury-package-anatomy.js', 'luxury-fireplace-anatomy.js', 'anatomy/iso-kit.mjs', 'anatomy/lathe.mjs', 'anatomy/gl.mjs', 'ownership-pricing.css', 'tokens.css', 'luxury-system.css', 'navbar-refinement.css', 'navbar-premium.css', 'our-story-refinement.css', 'owner-cards-refinement.css'];
publicAssets.push('intro.html','arrival-intro.css','arrival-intro.js');
publicAssets.push('mobile-layout.css','mobile-layout.js');
publicAssets.push('view-mode.css','view-mode.js','view.html');
for (const name of ['service-ready','service-property-care','service-owner-exchange']) for (const width of [480,960,1680]) publicAssets.push(`assets/images/${name}-20261008-${width}.webp`);
publicAssets.push('branding.css','branding.js','assets/brand/mylodge-logo.webp','assets/brand/mylodge-character.webp');
publicAssets.push('assets/brand/Dronepicture.png');
publicAssets.push('assets/brand/Nature.png');
publicAssets.push('assets/brand/single-storey.png','assets/brand/two-storey.png');
publicAssets.push('assets/brand/gaji.png');
publicAssets.push('assets/brand/SocialLife.png');
publicAssets.push('assets/brand/imageBeach.png');
publicAssets.push('assets/brand/mylodge-neon-icons-20261007.png');
for (const width of [480,960,1680]) publicAssets.push(`assets/images/resort-overview-20261006-${width}.webp`);
for (const [name, largest] of [['hero',1122],['interior',1440],['terrace',1145],['coastal',1440],['forest',1440]]) {
  for (const width of [480,960,largest]) publicAssets.push(`assets/images/lodge-${name}-${width}.webp`);
}
publicAssets.push('assets/images/lodge-share.jpg');
publicAssets.push('assets/images/bbqplace.png','assets/images/MainCity.png','assets/images/Plan.png','assets/images/pool.png','assets/images/cart.png');
for (const width of [480,960,1680]) publicAssets.push(`assets/images/intro-interior-${width}.webp`);

for (const page of [8,13]) for (const width of [480,960,1440]) publicAssets.push(`assets/images/plan-p${page}-${width}.webp`);
for (const width of [480,960,1536]) publicAssets.push(`assets/images/lodge-dreamscape-${width}.webp`);

publicAssets.push('cinematic.css','cinematic.js');
publicAssets.push('chairman.css','chairman.js');
publicAssets.push('scenery.css','scenery.js');
publicAssets.push('mobile.css','mobile.js');
publicAssets.push('intro.css','intro.js');
publicAssets.push('planning.css');
publicAssets.push('assets/video/mylodge-intro-scenes-20261006-30s.mp4','assets/video/mylodge-intro-scenes-20261006-30s-mobile.mp4','assets/video/mylodge-intro-scenes-20261006-poster.webp','assets/video/mylodge-intro-scenes-20261006-poster-mobile.webp');
publicAssets.push('assets/video/MyLodge1.png');
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
publicAssets.push('assets/images/villa.png','assets/images/luxury2.png','assets/images/meeting.png','assets/images/beachParty.png');
for (const name of ['story-destination','owner-unwind','owner-connect','owner-ideas','concierge-arrival','concierge-care','concierge-escape','gallery-pool','gallery-terrace','gallery-night','vision-masterplan','valley-resources']) for (const width of [480,960,1680]) publicAssets.push('assets/images/'+name+'-20261007-'+width+'.webp');
publicAssets.push('localization.css','localization.js');
publicAssets.push('assets/video/mylodge-intro-en-30s.mp4','assets/video/mylodge-intro-en-30s-mobile.mp4','assets/video/mylodge-intro-en-poster.webp','assets/video/mylodge-intro-en-poster-mobile.webp');
for (const name of ['facility-villa','facility-beach','facility-terrace','facility-club','project-jumunjin','project-yangyang','valley-community']) for (const width of [480,960,1680]) publicAssets.push('assets/images/'+name+'-20261007-'+width+'.webp');

publicAssets.push('assets/brand/mylodge-logo-transparent-20261007.webp');
for (const name of ['villa','beachside','pool-cabanas','cafe-club','market','concierge']) publicAssets.push(`assets/brand/${name}.webp`);
publicAssets.push('assets/brand/barbeque.png');
for (const width of [480,960,1680]) publicAssets.push(`assets/images/brand-villa-atmosphere-20261008-${width}.webp`);

for (const width of [480,960,1680]) publicAssets.push(`assets/images/facility-hotel-pool-20261008-${width}.webp`);
for (const name of ['facility-pool-cabana','facility-market-v2','facility-concierge']) for (const width of [480,960,1680]) publicAssets.push(`assets/images/${name}-20261008-${width}.webp`);

for (const width of [480,960,1680]) publicAssets.push(`assets/images/chiangmai-overview-20261013-${width}.webp`);

for (const name of ['project-yangyang','yangyang-modular-villa','yangyang-pool-party','yangyang-arrival-market']) for (const width of [480,960,1680]) publicAssets.push(`assets/images/${name}-20261013-${width}.webp`);

publicAssets.push('hero-editorial.css', 'hero-editorial.js', 'gsap.min.js', 'ScrollTrigger.min.js');
publicAssets.push('vision-square-reveal.js');
publicAssets.push('ownership-story.css');
publicAssets.push('assets/video/Beach2.mp4');

// Reviewed sidepages; public assets only. John's homepage files remain unchanged.
for (const file of JSON.parse(readFileSync(new URL('./sidepage-public-files.json', import.meta.url), 'utf8'))) if (!publicAssets.includes(file)) publicAssets.push(file);

// Standalone procedural intro; homepage runtime stays independent.
publicAssets.push('entry-3d/intro.css','entry-3d/intro.js','entry-3d/intro-scene.js','entry-3d/villa-reference-model.js','entry-3d/vendor/three.module.js','entry-3d/vendor/three.core.js','entry-3d/vendor/THREE-LICENSE.txt');

publicAssets.push('parks/chiangmai-deck.css','parks/chiangmai-deck.js');
publicAssets.push('assets/video/MainCity.mp4');
// Publish the existing interactive ownership-to-villa study linked from Ownership & Pricing.
publicAssets.push('experiments/ownership-villa-diagram/index.html');

// Local reviewed sidepage integration; retain every current homepage asset.
for (const file of JSON.parse(readFileSync(new URL('./side-review-public-files.json', import.meta.url), 'utf8'))) if (!publicAssets.includes(file)) publicAssets.push(file);

publicAssets.push("parks/main-aligned.css");

publicAssets.push('homepage-deck.css','homepage-deck.js');

publicAssets.push("parks/owner-main-content.css","parks/owner-main-content.js","parks/owner-editorial.css","parks/owner-editorial.js");

// Local photograph-card feedback review.
publicAssets.push("parks/feedback-photo-cards.css");
publicAssets.push("parks/assets/images/feedback-barbecue-20261025-480.webp","parks/assets/images/feedback-barbecue-20261025-960.webp","parks/assets/images/feedback-campfire-20261025-480.webp","parks/assets/images/feedback-campfire-20261025-960.webp","parks/assets/images/feedback-cart-20261025-480.webp","parks/assets/images/feedback-cart-20261025-960.webp","parks/assets/images/feedback-concierge-20261025-480.webp","parks/assets/images/feedback-concierge-20261025-960.webp","parks/assets/images/feedback-couple-20261025-480.webp","parks/assets/images/feedback-couple-20261025-960.webp","parks/assets/images/feedback-delivery-20261025-480.webp","parks/assets/images/feedback-delivery-20261025-960.webp","parks/assets/images/feedback-family-20261025-480.webp","parks/assets/images/feedback-family-20261025-960.webp","parks/assets/images/feedback-gift-20261025-480.webp","parks/assets/images/feedback-gift-20261025-960.webp");

publicAssets.push("parks/owner-benefit-modal.css","parks/owner-benefit-modal.js");

// Domestic interior concept gallery.
publicAssets.push('parks/side-review-20261027.css');
publicAssets.push('parks/assets/images/review-20261027/interior-01-living.webp');
publicAssets.push('parks/assets/images/review-20261027/interior-01-loft.webp');
publicAssets.push('parks/assets/images/review-20261027/interior-02-living.webp');
publicAssets.push('parks/assets/images/review-20261027/interior-02-loft.webp');
publicAssets.push('parks/assets/images/review-20261027/interior-03-living.webp');
publicAssets.push('parks/assets/images/review-20261027/interior-03-loft.webp');
publicAssets.push('parks/assets/images/review-20261027/interior-04-living.webp');
publicAssets.push('parks/assets/images/review-20261027/interior-04-loft.webp');
publicAssets.push('parks/assets/images/review-20261027/interior-05-living.webp');
publicAssets.push('parks/assets/images/review-20261027/interior-05-loft.webp');
publicAssets.push('parks/assets/images/review-20261027/interior-06-living.webp');
publicAssets.push('parks/assets/images/review-20261027/interior-06-loft.webp');
publicAssets.push('parks/assets/images/review-20261027/interior-07-living.webp');
publicAssets.push('parks/assets/images/review-20261027/interior-07-loft.webp');
publicAssets.push('parks/assets/images/review-20261027/interior-08-living.webp');
publicAssets.push('parks/assets/images/review-20261027/interior-08-loft.webp');
publicAssets.push('parks/assets/images/review-20261027/interior-09-living.webp');
publicAssets.push('parks/assets/images/review-20261027/interior-09-loft.webp');
publicAssets.push('parks/assets/images/review-20261027/interior-10-living.webp');
publicAssets.push('parks/assets/images/review-20261027/interior-10-loft.webp');

// Local-only interior experience review.
publicAssets.push('parks/interior-tour/index.html','parks/interior-tour/tour.css','parks/interior-tour/tour.js','parks/interior-tour-host.css','parks/interior-tour-host.js');

// Licensed local-only photographic materials and glTF furniture.
publicAssets.push('parks/interior-tour/realism.js');
publicAssets.push('parks/interior-tour/assets/denim_fabric-nor_gl-1k.webp');
publicAssets.push('parks/interior-tour/assets/denim_fabric-nor_gl-2k.webp');
publicAssets.push('parks/interior-tour/assets/denim_fabric-Rough-1k.webp');
publicAssets.push('parks/interior-tour/assets/denim_fabric-Rough-2k.webp');
publicAssets.push('parks/interior-tour/assets/GlamVelvetSofa-LICENSE.md');
publicAssets.push('parks/interior-tour/assets/GlamVelvetSofa.glb');
publicAssets.push('parks/interior-tour/assets/sources.json');
publicAssets.push('parks/interior-tour/assets/spruit_sunrise_1k.hdr');
publicAssets.push('parks/interior-tour/assets/white_plaster_02-nor_gl-1k.webp');
publicAssets.push('parks/interior-tour/assets/white_plaster_02-nor_gl-2k.webp');
publicAssets.push('parks/interior-tour/assets/white_plaster_02-Rough-1k.webp');
publicAssets.push('parks/interior-tour/assets/white_plaster_02-Rough-2k.webp');
publicAssets.push('parks/interior-tour/assets/wood_floor-AO-1k.webp');
publicAssets.push('parks/interior-tour/assets/wood_floor-AO-2k.webp');
publicAssets.push('parks/interior-tour/assets/wood_floor-Diffuse-1k.webp');
publicAssets.push('parks/interior-tour/assets/wood_floor-Diffuse-2k.webp');
publicAssets.push('parks/interior-tour/assets/wood_floor-nor_gl-1k.webp');
publicAssets.push('parks/interior-tour/assets/wood_floor-nor_gl-2k.webp');
publicAssets.push('parks/interior-tour/assets/wood_floor-Rough-1k.webp');
publicAssets.push('parks/interior-tour/assets/wood_floor-Rough-2k.webp');
publicAssets.push('parks/interior-tour/vendor/BufferGeometryUtils.js');
publicAssets.push('parks/interior-tour/vendor/GLTFLoader.js');
publicAssets.push('parks/interior-tour/vendor/THREE-LICENSE.txt');
publicAssets.push('parks/interior-tour/assets/coffee_table_round_01/coffee_table_round_01.bin');
publicAssets.push('parks/interior-tour/assets/coffee_table_round_01/coffee_table_round_01_1k.gltf');
publicAssets.push('parks/interior-tour/assets/coffee_table_round_01/coffee_table_round_01_2k.gltf');
publicAssets.push('parks/interior-tour/assets/dining_chair_02/dining_chair_02.bin');
publicAssets.push('parks/interior-tour/assets/dining_chair_02/dining_chair_02_1k.gltf');
publicAssets.push('parks/interior-tour/assets/dining_chair_02/dining_chair_02_2k.gltf');
publicAssets.push('parks/interior-tour/assets/modern_arm_chair_01/modern_arm_chair_01.bin');
publicAssets.push('parks/interior-tour/assets/modern_arm_chair_01/modern_arm_chair_01_1k.gltf');
publicAssets.push('parks/interior-tour/assets/modern_arm_chair_01/modern_arm_chair_01_2k.gltf');
publicAssets.push('parks/interior-tour/assets/coffee_table_round_01/textures/coffee_table_round_01_arm_2k-1k.webp');
publicAssets.push('parks/interior-tour/assets/coffee_table_round_01/textures/coffee_table_round_01_arm_2k-2k.webp');
publicAssets.push('parks/interior-tour/assets/coffee_table_round_01/textures/coffee_table_round_01_diff_2k-1k.webp');
publicAssets.push('parks/interior-tour/assets/coffee_table_round_01/textures/coffee_table_round_01_diff_2k-2k.webp');
publicAssets.push('parks/interior-tour/assets/coffee_table_round_01/textures/coffee_table_round_01_nor_gl_2k-1k.webp');
publicAssets.push('parks/interior-tour/assets/coffee_table_round_01/textures/coffee_table_round_01_nor_gl_2k-2k.webp');
publicAssets.push('parks/interior-tour/assets/dining_chair_02/textures/dining_chair_02_arm_2k-1k.webp');
publicAssets.push('parks/interior-tour/assets/dining_chair_02/textures/dining_chair_02_arm_2k-2k.webp');
publicAssets.push('parks/interior-tour/assets/dining_chair_02/textures/dining_chair_02_diff_2k-1k.webp');
publicAssets.push('parks/interior-tour/assets/dining_chair_02/textures/dining_chair_02_diff_2k-2k.webp');
publicAssets.push('parks/interior-tour/assets/dining_chair_02/textures/dining_chair_02_nor_gl_2k-1k.webp');
publicAssets.push('parks/interior-tour/assets/dining_chair_02/textures/dining_chair_02_nor_gl_2k-2k.webp');
publicAssets.push('parks/interior-tour/assets/modern_arm_chair_01/textures/modern_arm_chair_01_legs_arm_2k-1k.webp');
publicAssets.push('parks/interior-tour/assets/modern_arm_chair_01/textures/modern_arm_chair_01_legs_arm_2k-2k.webp');
publicAssets.push('parks/interior-tour/assets/modern_arm_chair_01/textures/modern_arm_chair_01_legs_diff_2k-1k.webp');
publicAssets.push('parks/interior-tour/assets/modern_arm_chair_01/textures/modern_arm_chair_01_legs_diff_2k-2k.webp');
publicAssets.push('parks/interior-tour/assets/modern_arm_chair_01/textures/modern_arm_chair_01_legs_nor_gl_2k-1k.webp');
publicAssets.push('parks/interior-tour/assets/modern_arm_chair_01/textures/modern_arm_chair_01_legs_nor_gl_2k-2k.webp');
publicAssets.push('parks/interior-tour/assets/modern_arm_chair_01/textures/modern_arm_chair_01_pillow_arm_2k-1k.webp');
publicAssets.push('parks/interior-tour/assets/modern_arm_chair_01/textures/modern_arm_chair_01_pillow_arm_2k-2k.webp');
publicAssets.push('parks/interior-tour/assets/modern_arm_chair_01/textures/modern_arm_chair_01_pillow_diff_2k-1k.webp');
publicAssets.push('parks/interior-tour/assets/modern_arm_chair_01/textures/modern_arm_chair_01_pillow_diff_2k-2k.webp');
publicAssets.push('parks/interior-tour/assets/modern_arm_chair_01/textures/modern_arm_chair_01_pillow_nor_gl_2k-1k.webp');
publicAssets.push('parks/interior-tour/assets/modern_arm_chair_01/textures/modern_arm_chair_01_pillow_nor_gl_2k-2k.webp');
publicAssets.push('parks/interior-tour/vendor/addons/loaders/HDRLoader.js');
publicAssets.push('parks/interior-tour/vendor/addons/math/SimplexNoise.js');
publicAssets.push('parks/interior-tour/vendor/addons/postprocessing/EffectComposer.js');
publicAssets.push('parks/interior-tour/vendor/addons/postprocessing/MaskPass.js');
publicAssets.push('parks/interior-tour/vendor/addons/postprocessing/OutputPass.js');
publicAssets.push('parks/interior-tour/vendor/addons/postprocessing/Pass.js');
publicAssets.push('parks/interior-tour/vendor/addons/postprocessing/RenderPass.js');
publicAssets.push('parks/interior-tour/vendor/addons/postprocessing/ShaderPass.js');
publicAssets.push('parks/interior-tour/vendor/addons/postprocessing/SSAOPass.js');
publicAssets.push('parks/interior-tour/vendor/addons/shaders/CopyShader.js');
publicAssets.push('parks/interior-tour/vendor/addons/shaders/OutputShader.js');
publicAssets.push('parks/interior-tour/vendor/addons/shaders/SSAOShader.js');

publicAssets.push('parks/interior-tour/object-experience.js','parks/interior-tour/time-atmosphere.js');

publicAssets.push('parks/interior-tour/suite-loft.js','parks/interior-tour/suite-navigation.js');
