// Watercolor pigment spread reveal for the MyLodge mural before the footer.
(() => {
  const photo = document.querySelector('.pre-footer-mural');
  const image = photo?.querySelector('img');
  if (!photo || !image || !window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);
  const motion = gsap.matchMedia();

  motion.add('(prefers-reduced-motion: no-preference)', () => {
    const svgNS = 'http://www.w3.org/2000/svg';
    const idPrefix = `mylodge-mural-${Math.random().toString(36).slice(2, 8)}`;
    const maskId = `${idPrefix}-mask`;
    const defsSvg = document.createElementNS(svgNS, 'svg');
    defsSvg.setAttribute('aria-hidden', 'true');
    defsSvg.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;overflow:hidden;pointer-events:none';
    const defs = document.createElementNS(svgNS, 'defs');
    const makeMask = id => {
      const mask = document.createElementNS(svgNS, 'mask');
      mask.setAttribute('id', id);
      mask.setAttribute('maskUnits', 'objectBoundingBox');
      mask.setAttribute('maskContentUnits', 'objectBoundingBox');
      mask.setAttribute('x', '0');
      mask.setAttribute('y', '0');
      mask.setAttribute('width', '1');
      mask.setAttribute('height', '1');
      mask.setAttribute('mask-type', 'alpha');
      return mask;
    };
    const makeEdgeMask = (id, gradientId, horizontal) => {
      const gradient = document.createElementNS(svgNS, 'linearGradient');
      gradient.setAttribute('id', gradientId);
      gradient.setAttribute('x1', '0');
      gradient.setAttribute('y1', '0');
      gradient.setAttribute('x2', horizontal ? '1' : '0');
      gradient.setAttribute('y2', horizontal ? '0' : '1');
      const stops = horizontal ? [['0%', '0'], ['5%', '1'], ['95%', '1'], ['100%', '0']] : [['0%', '0'], ['10%', '1'], ['90%', '1'], ['100%', '0']];
      stops.forEach(([offset, opacity]) => {
        const stop = document.createElementNS(svgNS, 'stop');
        stop.setAttribute('offset', offset);
        stop.setAttribute('stop-color', 'white');
        stop.setAttribute('stop-opacity', opacity);
        gradient.append(stop);
      });
      defs.append(gradient);

      const mask = makeMask(id);
      const rect = document.createElementNS(svgNS, 'rect');
      rect.setAttribute('width', '1');
      rect.setAttribute('height', '1');
      rect.setAttribute('fill', `url(#${gradientId})`);
      mask.append(rect);
      defs.append(mask);
    };

    const horizontalFadeId = `${idPrefix}-fade-x`;
    const verticalFadeId = `${idPrefix}-fade-y`;
    makeEdgeMask(horizontalFadeId, `${idPrefix}-gradient-x`, true);
    makeEdgeMask(verticalFadeId, `${idPrefix}-gradient-y`, false);

    const mask = makeMask(maskId);
    const hidden = document.createElementNS(svgNS, 'rect');
    hidden.setAttribute('width', '1');
    hidden.setAttribute('height', '1');
    hidden.setAttribute('fill', 'white');
    hidden.setAttribute('opacity', '0');
    mask.append(hidden);

    const edgeGroup = document.createElementNS(svgNS, 'g');
    edgeGroup.setAttribute('mask', `url(#${horizontalFadeId})`);
    const verticalGroup = document.createElementNS(svgNS, 'g');
    verticalGroup.setAttribute('mask', `url(#${verticalFadeId})`);
    const pigmentGroup = document.createElementNS(svgNS, 'g');
    verticalGroup.append(pigmentGroup);
    edgeGroup.append(verticalGroup);
    mask.append(edgeGroup);

    const regions = [
      { x: .38, y: .43, rx: .34, ry: .47, start: 0, duration: 2.1 }, // Architecture
      { x: .62, y: .70, rx: .29, ry: .27, start: .65, duration: 2.0 }, // Swimming pools
      { x: .50, y: .27, rx: .39, ry: .37, start: 1.05, duration: 2.35 }, // Palm trees
      { x: .16, y: .53, rx: .32, ry: .51, start: 1.45, duration: 2.45 }, // Left landscape
      { x: .84, y: .47, rx: .32, ry: .52, start: 1.8, duration: 2.35 }, // Right landscape
      { x: .57, y: .87, rx: .45, ry: .25, start: 2.2, duration: 2.0 } // Foreground
    ];

    const makePigmentGradient = (index) => {
      const gradient = document.createElementNS(svgNS, 'radialGradient');
      gradient.setAttribute('id', `${idPrefix}-pigment-${index}`);
      gradient.setAttribute('cx', '.5');
      gradient.setAttribute('cy', '.5');
      gradient.setAttribute('r', '.5');
      [['0%', '1'], ['54%', '.98'], ['76%', '.62'], ['92%', '.18'], ['100%', '0']].forEach(([offset, opacity]) => {
        const stop = document.createElementNS(svgNS, 'stop');
        stop.setAttribute('offset', offset);
        stop.setAttribute('stop-color', 'white');
        stop.setAttribute('stop-opacity', opacity);
        gradient.append(stop);
      });
      defs.append(gradient);
      return gradient;
    };

    const pigmentStates = regions.map((region, index) => {
      makePigmentGradient(index);
      const ellipse = document.createElementNS(svgNS, 'ellipse');
      ellipse.setAttribute('cx', region.x);
      ellipse.setAttribute('cy', region.y);
      ellipse.setAttribute('rx', '.001');
      ellipse.setAttribute('ry', '.001');
      ellipse.setAttribute('fill', `url(#${idPrefix}-pigment-${index})`);
      pigmentGroup.append(ellipse);
      return { ...region, targetRx: region.rx, targetRy: region.ry, ellipse, rx: .001, ry: .001 };
    });

    const finalWash = document.createElementNS(svgNS, 'rect');
    finalWash.setAttribute('width', '1');
    finalWash.setAttribute('height', '1');
    finalWash.setAttribute('fill', 'white');
    finalWash.setAttribute('opacity', '0');
    pigmentGroup.append(finalWash);
    defs.append(mask);
    defsSvg.append(defs);
    photo.prepend(defsSvg);

    image.style.maskImage = `url(#${maskId})`;
    image.style.webkitMaskImage = `url(#${maskId})`;
    const caption = photo.querySelector('.pre-footer-mural-copy');
    if (caption) gsap.set(caption, { autoAlpha: 0 });

    const trigger = {
      trigger: photo,
      start: 'top 82%',
      once: true
    };
    const reveal = gsap.timeline({ scrollTrigger: trigger });
    pigmentStates.forEach(region => {
      reveal.to(region, {
        rx: region.targetRx,
        ry: region.targetRy,
        duration: region.duration,
        ease: 'sine.out',
        onUpdate: () => {
          region.ellipse.setAttribute('rx', region.rx.toFixed(4));
          region.ellipse.setAttribute('ry', region.ry.toFixed(4));
        }
      }, region.start);
    });
    reveal.to(finalWash, { attr: { opacity: 1 }, duration: .65, ease: 'power1.inOut' }, 4.35);
    if (caption) reveal.to(caption, { autoAlpha: 1, duration: .55, ease: 'power1.out' }, 4.35);

    ScrollTrigger.refresh();
    return () => {
      reveal.scrollTrigger?.kill();
      image.style.maskImage = '';
      image.style.webkitMaskImage = '';
      defsSvg.remove();
    };
  });
})();
