// The only files included in the public export.
export const publicAssets = ['index.html', 'styles.css', 'app.js', 'consultation.css', 'consultation-refinements.css', 'consultation.js'];
for (const [name, largest] of [['hero',1122],['interior',1440],['terrace',1145],['coastal',1440],['forest',1440]]) {
  for (const width of [480,960,largest]) publicAssets.push(`assets/images/lodge-${name}-${width}.webp`);
}
publicAssets.push('assets/images/lodge-share.jpg');
