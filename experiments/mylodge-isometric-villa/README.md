# MyLodge Villa Assembly Study

Standalone responsive HTML/SVG experiment built with the installed Anatomy skill's `iso-kit.mjs` construction workflow and GSAP 3.12.5 timelines. It is separate from the homepage.

## Preview

Open `index.html` in a modern browser, or run from the project root:

```sh
open experiments/mylodge-isometric-villa/index.html
```

The page and GSAP runtime are self-contained. `build.mjs` regenerates the page using the local Anatomy kit and the licensed `gsap.min.js` bundle included in this folder. The GSAP license notice is retained in that bundle.

## Animation

A 12-second timeline moves individually grouped SVG components into position: ground platform and foundation; basin; ground-floor slab, supports, walls, and glazing; second-floor slab, supports, walls, windows, and balcony; roof layers and edges; pool coping and rising water; then warm interior lighting and settling contact shadows. Press **Replay Animation** to run it again.

Reduced-motion preference shows the completed still model. After assembly, a separate calm GSAP loop animates the pool ripples and softly modulates the interior light. The scene contains only the villa, architectural base, and swimming pool.

The architecture is a concept illustration, not a confirmed property plan.
