import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {createReadStream} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {publicAssets} from './scripts/public-assets.mjs';
const allowed=new Map([['/',['index.html','text/html; charset=utf-8']],['/index.html',['index.html','text/html; charset=utf-8']],['/styles.css',['styles.css','text/css; charset=utf-8']],['/app.js',['app.js','text/javascript; charset=utf-8']]]);
for(const file of publicAssets){
 const ext=file.split('.').at(-1);
 allowed.set('/'+file,[file,({html:'text/html; charset=utf-8',css:'text/css; charset=utf-8',js:'text/javascript; charset=utf-8',webp:'image/webp',jpg:'image/jpeg',png:'image/png',mp4:'video/mp4'})[ext]]);
}
for(const name of ['hero','interior','terrace','coastal','forest']){
 const file=`assets/images/lodge-${name}.png`;
 allowed.set('/'+file,[file,'image/png']);
}
allowed.set('/admin-demo.html',['workflow.html','text/html; charset=utf-8']);
allowed.set('/workflow.html',['workflow.html','text/html; charset=utf-8']);
for(const file of ['consultation.js','workflow-model.js','workflow.js']) allowed.set('/'+file,[file,'text/javascript; charset=utf-8']);
for(const file of ['consultation.css','workflow.css','workflow-layout.css']) allowed.set('/'+file,[file,'text/css; charset=utf-8']);
createServer(async(req,res)=>{
 const item=allowed.get(new URL(req.url,'http://127.0.0.1').pathname);
 if(!item){res.writeHead(404);res.end('Not found');return;}
 try{
  const file=fileURLToPath(new URL(item[0],import.meta.url));
  const headers={'Content-Type':item[1],'Cache-Control':'no-store'};
  if(item[1]==='video/mp4'){
   const {size}=await stat(file);headers['Accept-Ranges']='bytes';
   let start=0,end=size-1,code=200;
   if(req.headers.range){
    const match=/^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
    if(!match||(!match[1]&&!match[2])){res.writeHead(416,{'Content-Range':`bytes */${size}`});res.end();return;}
    if(match[1]){start=Number(match[1]);if(match[2])end=Math.min(end,Number(match[2]));}
    else start=Math.max(0,size-Number(match[2]));
    if(!Number.isSafeInteger(start)||!Number.isSafeInteger(end)||start>=size||start>end){res.writeHead(416,{'Content-Range':`bytes */${size}`});res.end();return;}
    code=206;headers['Content-Range']=`bytes ${start}-${end}/${size}`;
   }
   headers['Content-Length']=end-start+1;res.writeHead(code,headers);
   if(req.method==='HEAD'){res.end();return;}
   const stream=createReadStream(file,{start,end});stream.on('error',()=>res.destroy());res.on('close',()=>stream.destroy());stream.pipe(res);return;
  }
  const data=await readFile(file);headers['Content-Length']=data.length;res.writeHead(200,headers);res.end(req.method==='HEAD'?undefined:data);
 }catch{res.writeHead(500);res.end('Unable to read file');}
}).listen(4173,'127.0.0.1',()=>console.log('MyLodge preview: http://127.0.0.1:4173'));
