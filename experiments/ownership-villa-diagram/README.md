# MyLodge Shared Ownership Diagram

A standalone, responsive ownership-to-architecture demonstration. The page combines a 10 × 12 share grid with the existing Anatomy-generated isometric villa and swimming-pool SVG. It does not modify the homepage.

## Open the preview

Open `index.html` in a modern browser, or run this from the project root:

```sh
open experiments/ownership-villa-diagram/index.html
```

The page embeds GSAP 3.12.5 and the villa SVG for local, network-free preview. The bundled GSAP license header is preserved.

## Sequence

The GSAP timeline draws the villa outline, progressively draws the 10-column by 12-row share grid, highlights one share in muted gold, and reveals “1 Share = 3 Allocated Nights / Year.” A gold connector and traveling marker lead into the villa’s ground platform. The same timeline then assembles the existing villa components and pool; its completed state remains visible. **Replay Experience** restarts the sequence. Reduced-motion preference shows the completed diagram and villa without animation.

## Rebuild

Run `node experiments/ownership-villa-diagram/build.mjs` from the project root. The build reads the existing generated villa from `experiments/mylodge-isometric-villa/index.html` and uses the installed Anatomy kit for its page shell and SVG styles.
