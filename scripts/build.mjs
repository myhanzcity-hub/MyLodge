import { mkdir, copyFile, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';
import { publicAssets } from './public-assets.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = resolve(root, 'dist');
// Only the generated project/dist folder may be cleaned.
if (dirname(output) !== resolve(root) || output === resolve(root)) throw new Error('Unsafe output directory');
await rm(output, { recursive: true, force: true });
for (const file of publicAssets) {
  const destination = resolve(output, file);
  await mkdir(dirname(destination), { recursive: true });
  await copyFile(resolve(root, file), destination);
}
console.log(`Built ${publicAssets.length} public files in ${output}. Private docs, originals and operator workflow excluded.`);
