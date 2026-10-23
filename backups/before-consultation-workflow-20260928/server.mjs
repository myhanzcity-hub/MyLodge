import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const allowed=new Map([['/',['index.html','text/html; charset=utf-8']],['/index.html',['index.html','text/html; charset=utf-8']],['/styles.css',['styles.css','text/css; charset=utf-8']],['/app.js',['app.js','text/javascript; charset=utf-8']]]);
for(const name of ['hero','interior','terrace','coastal','forest']){
 const file=`assets/images/lodge-${name}.png`;
 allowed.set('/'+file,[file,'image/png']);
}
allowed.set('/admin-demo.html',['admin-demo.html','text/html; charset=utf-8']);
createServer(async(req,res)=>{
 const item=allowed.get(new URL(req.url,'http://127.0.0.1').pathname);
 if(!item){res.writeHead(404);res.end('Not found');return;}
 try{const data=await readFile(fileURLToPath(new URL(item[0],import.meta.url)));res.writeHead(200,{'Content-Type':item[1],'Cache-Control':'no-store'});res.end(data);}catch{res.writeHead(500);res.end('Unable to read file');}
}).listen(4173,'127.0.0.1',()=>console.log('MyLodge preview: http://127.0.0.1:4173'));
