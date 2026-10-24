// Reproducible static Build Output API artifact, without uploading source documents.
import './build.mjs';
import {mkdir,copyFile,writeFile,readdir} from 'node:fs/promises';
import {resolve,dirname,relative} from 'node:path';import {fileURLToPath} from 'node:url';
import {publicAssets} from './public-assets.mjs';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..'),output=resolve(root,'.vercel/output'),staticRoot=resolve(output,'static');
const allowed=new Set(publicAssets);await mkdir(staticRoot,{recursive:true});
async function inspect(dir){for(const entry of await readdir(dir,{withFileTypes:true})){const file=resolve(dir,entry.name);if(entry.isDirectory())await inspect(file);else if(!allowed.has(relative(staticRoot,file).replaceAll('\\','/')))throw Error('Unexpected public artifact: '+file);}}
await inspect(staticRoot);
for(const name of publicAssets){const target=resolve(staticRoot,name);if(!target.startsWith(staticRoot+'\\')&&!target.startsWith(staticRoot+'/'))throw Error('Public path escapes output');await mkdir(dirname(target),{recursive:true});await copyFile(resolve(root,'dist',name),target);}
// Legacy sidepage wrappers preserve their query/hash. Root remains John's intro.
await writeFile(resolve(output,'config.json'),JSON.stringify({version:3,routes:[{src:'^/$',dest:'/intro.html'},{handle:'filesystem'}]},null,2));
console.log(`Prepared ${publicAssets.length} static public files. No documents, backups, recordings, credentials or original archives included.`);
