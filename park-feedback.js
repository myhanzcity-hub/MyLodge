// Enhancements owned by the park subpages. Main/intro scripts are unchanged.
(() => {
 'use strict';
 const links=[...document.querySelectorAll('a[data-park-panorama]')];
 if(!links.length||typeof HTMLDialogElement==='undefined'||!HTMLDialogElement.prototype.showModal)return;
 const english=document.documentElement.lang==='en';
 const words=english?{
  close:'Close panorama',zoom:'View original size',fit:'Fit to screen',
  help:'View the whole image, or choose original size to explore the details. Press Escape to close.',
  viewport:'Panorama image. In original size, scroll to explore.',
  note:'AI space concept. This is not a confirmed site plan or an operating facility.',
  loading:'Loading the panorama…',failed:'The panorama could not be loaded.',retry:'Try again',direct:'Open image directly'
 }:{
  close:'조감도 닫기',zoom:'원본 크기로 보기',fit:'화면에 맞추기',
  help:'전체 이미지를 보거나, 원본 크기로 구석구석 살펴보세요. Esc 키로 닫을 수 있습니다.',
  viewport:'전체 조감도 이미지. 원본 크기에서는 스크롤하여 살펴볼 수 있습니다.',
  note:'AI 공간 콘셉트입니다. 확정된 설계도나 실제 운영 시설이 아닙니다.',
  loading:'조감도를 불러오는 중입니다…',failed:'조감도를 불러오지 못했습니다.',retry:'다시 불러오기',direct:'이미지 바로 열기'
 };
 const dialog=document.createElement('dialog');
 dialog.className='park-panorama-dialog';
 dialog.setAttribute('aria-labelledby','park-panorama-title');
 dialog.setAttribute('aria-describedby','park-panorama-help park-panorama-note');
 dialog.innerHTML=`<div class="park-panorama-toolbar"><h2 id="park-panorama-title"></h2><button class="park-panorama-close" type="button" autofocus></button></div><p id="park-panorama-help" class="park-panorama-help"></p><div class="park-panorama-actions"><button class="park-panorama-zoom" type="button" aria-pressed="false" aria-controls="park-panorama-viewport"></button><a class="park-panorama-direct"></a></div><div class="park-panorama-viewport" id="park-panorama-viewport" tabindex="0" role="region"><img class="park-panorama-image" width="1680" height="945" alt=""><div class="park-panorama-loading" role="status"></div><div class="park-panorama-error" hidden><p role="status"></p><button type="button"></button></div></div><p id="park-panorama-note" class="park-panorama-note"></p>`;
 const title=dialog.querySelector('h2');
 const close=dialog.querySelector('.park-panorama-close');
 const zoom=dialog.querySelector('.park-panorama-zoom');
 const direct=dialog.querySelector('.park-panorama-direct');
 const viewport=dialog.querySelector('.park-panorama-viewport');
 const photo=dialog.querySelector('img');
 const loading=dialog.querySelector('.park-panorama-loading');
 const error=dialog.querySelector('.park-panorama-error');
 const retry=error.querySelector('button');
 close.textContent=words.close;zoom.textContent=words.zoom;direct.textContent=words.direct;
 dialog.querySelector('.park-panorama-help').textContent=words.help;
 dialog.querySelector('.park-panorama-note').textContent=words.note;
 viewport.setAttribute('aria-label',words.viewport);
 loading.textContent=words.loading;error.querySelector('p').textContent=words.failed;retry.textContent=words.retry;
 document.body.append(dialog);
 let opener=null,source='',zoomed=false;
 function setZoom(value){
  zoomed=value;viewport.classList.toggle('is-zoomed',value);
  zoom.setAttribute('aria-pressed',String(value));zoom.textContent=value?words.fit:words.zoom;
  viewport.scrollTop=0;viewport.scrollLeft=0;
 }
 function load(){
  error.hidden=true;loading.hidden=false;photo.hidden=true;zoom.disabled=true;
  viewport.setAttribute('aria-busy','true');
  photo.src=source;
 }
 photo.addEventListener('load',()=>{
  loading.hidden=true;error.hidden=true;photo.hidden=false;zoom.disabled=false;
  photo.width=photo.naturalWidth;photo.height=photo.naturalHeight;
  viewport.removeAttribute('aria-busy');
 });
 photo.addEventListener('error',()=>{
  loading.hidden=true;photo.hidden=true;error.hidden=false;zoom.disabled=true;
  viewport.removeAttribute('aria-busy');
 });
 retry.addEventListener('click',()=>{photo.removeAttribute('src');load();});
 zoom.addEventListener('click',()=>setZoom(!zoomed));
 close.addEventListener('click',()=>dialog.close());
 dialog.addEventListener('close',()=>{
  document.body.classList.remove('park-panorama-open');setZoom(false);
  if(opener?.isConnected)opener.focus({preventScroll:true});
 });
 links.forEach(link=>{
  link.setAttribute('aria-haspopup','dialog');
  link.addEventListener('click',event=>{
   if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
   event.preventDefault();opener=link;
   title.textContent=english?link.dataset.panoramaTitleEn:link.dataset.panoramaTitle;
   photo.alt=english?link.dataset.panoramaAltEn:link.dataset.panoramaAlt;
   source=link.href;direct.href=source;setZoom(false);load();
   dialog.showModal();document.body.classList.add('park-panorama-open');
  });
 });
})();
