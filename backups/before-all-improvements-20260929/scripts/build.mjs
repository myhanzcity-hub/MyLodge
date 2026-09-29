import { mkdir, copyFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const output = new URL('dist/', root);
await mkdir(output, { recursive: true });
for (const file of ['index.html', 'styles.css', 'app.js', 'consultation.css', 'consultation.js']) {
  await copyFile(new URL(file, root), new URL(file, output));
}
console.log('Built public site and shared consultation UI. Operator workflow excluded.');
await mkdir(new URL('assets/images/',output),{recursive:true});
for(const name of ['hero','interior','terrace','coastal','forest']){
 const file=`assets/images/lodge-${name}.png`;
 await copyFile(new URL(file,root),new URL(file,output));
}
console.log('Included five AI concept images; private docs and backups excluded.');
