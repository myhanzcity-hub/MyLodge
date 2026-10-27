import * as THREE from '../../entry-3d/vendor/three.module.js';

const PRESETS = {
  day: { intensity: .7, fog: '#dce5dc', saturation: 1, tint: [1, 1, 1] },
  sunset: { intensity: .75, fog: '#a98771', saturation: .82, tint: [1.24, .70, .43] },
  evening: { intensity: .9, fog: '#1b2b43', saturation: .18, tint: [.46, .78, 1.66] }
};

/**
 * Keep the photographic garden and the camera alignment identical while changing
 * its light. Derivatives stay linear HDR, so the same light also reaches PBR
 * surfaces through their filtered reflection environment. No new network assets.
 * Call after the HDR background has loaded; set(mode) is synchronous afterwards.
 */
export function createTimeAtmosphere({ scene, renderer, invalidate = () => {} }) {
  const source = scene.background;
  const original = {
    background: source,
    environment: scene.environment,
    backgroundIntensity: scene.backgroundIntensity,
    backgroundBlurriness: scene.backgroundBlurriness,
    fogColor: scene.fog?.color.clone()
  };
  const image = source?.image;
  const canGrade = source?.isDataTexture && image?.data && image.width && image.height;
  const ownedTextures = [], ownedEnvironments = [];
  const views = new Map([['day', { background: source, environment: original.environment }]]);
  const state = { mode: 'day', photographic: !!canGrade, prepared: ['day'] };

  if (canGrade) {
    const generator = new THREE.PMREMGenerator(renderer);
    generator.compileEquirectangularShader();
    const sourcePixels = image.data;
    const channels = sourcePixels.length / (image.width * image.height);
    const halfFloat = source.type === THREE.HalfFloatType;
    const read = value => halfFloat ? THREE.DataUtils.fromHalfFloat(value) : value;
    const write = value => halfFloat ? THREE.DataUtils.toHalfFloat(Math.min(65504, Math.max(0, value))) : value;

    for (const mode of ['sunset', 'evening']) {
      const preset = PRESETS[mode];
      const pixels = new sourcePixels.constructor(sourcePixels.length);
      let luminanceSum = 0;
      for (let i = 0; i < sourcePixels.length; i += channels) {
        const r = Math.max(0, read(sourcePixels[i]));
        const g = Math.max(0, read(sourcePixels[i + 1]));
        const b = Math.max(0, read(sourcePixels[i + 2]));
        const luma = r * .2126 + g * .7152 + b * .0722;
        // Compress the photographed sun as well as the sky at dusk, so the
        // evening view cannot retain a bright white daytime sun or white clouds.
        const targetLuma = mode === 'evening'
          ? .18 * Math.pow(luma / (1 + luma), .86)
          : 1.14 * luma / (1 + luma * .18);
        const scale = luma > 1e-7 ? targetLuma / luma : 0;
        const blend = value => targetLuma + (value * scale - targetLuma) * preset.saturation;
        pixels[i] = write(blend(r) * preset.tint[0]);
        pixels[i + 1] = write(blend(g) * preset.tint[1]);
        pixels[i + 2] = write(blend(b) * preset.tint[2]);
        if (channels > 3) pixels[i + 3] = sourcePixels[i + 3];
        luminanceSum += targetLuma;
      }
      const background = new THREE.DataTexture(pixels, image.width, image.height, source.format, source.type);
      background.mapping = THREE.EquirectangularReflectionMapping;
      background.colorSpace = source.colorSpace;
      background.flipY = source.flipY;
      background.magFilter = source.magFilter;
      background.minFilter = source.minFilter;
      background.generateMipmaps = source.generateMipmaps;
      background.needsUpdate = true;
      background.name = 'garden-' + mode;
      const environment = generator.fromEquirectangular(background);
      views.set(mode, {
        background,
        environment: environment.texture,
        averageLuminance: luminanceSum / (image.width * image.height)
      });
      ownedTextures.push(background);
      ownedEnvironments.push(environment);
      state.prepared.push(mode);
    }
    generator.dispose();
  }

  function set(mode = 'day') {
    if (!Object.hasOwn(PRESETS, mode)) mode = 'day';
    const preset = PRESETS[mode], view = views.get(mode) || views.get('day');
    scene.background = view.background;
    scene.environment = view.environment;
    // A color fallback still follows time if the optional HDR resource failed.
    if (!canGrade && source?.isColor) {
      scene.background = mode === 'day' ? source : new THREE.Color(preset.fog);
    }
    scene.backgroundIntensity = preset.intensity;
    scene.backgroundBlurriness = original.backgroundBlurriness;
    if (scene.fog?.color) {
      scene.fog.color.set(mode === 'day' && original.fogColor ? original.fogColor : preset.fog);
    }
    state.mode = mode;
    state.backgroundName = mode === 'day' ? 'garden-day' : view.background?.name || mode;
    state.backgroundIntensity = preset.intensity;
    state.averageLuminance = view.averageLuminance ?? null;
    invalidate();
    return state;
  }

  function dispose() {
    scene.background = original.background;
    scene.environment = original.environment;
    scene.backgroundIntensity = original.backgroundIntensity;
    scene.backgroundBlurriness = original.backgroundBlurriness;
    if (scene.fog?.color && original.fogColor) scene.fog.color.copy(original.fogColor);
    ownedEnvironments.forEach(target => target.dispose());
    ownedTextures.forEach(texture => texture.dispose());
  }

  set('day');
  return { set, state, dispose };
}
