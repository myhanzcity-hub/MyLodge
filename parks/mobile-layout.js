// Rearrange the reading order on phones and restore the original desktop order.
(()=>{
 const main=document.querySelector('main');if(!main||document.body.hasAttribute('data-chiangmai-deck'))return;
 const english=document.documentElement.lang==='en',media=matchMedia('(max-width:600px)');
 const original=[...main.children],directory=main.querySelector(':scope > .page-directory');
 const orders={
  owners:['visual-first','owners-value','owner-experiences','owner-swap','price-guide','owner-rights','service-costs','owner-faq','owner-journey','stay-with-confidence','value-comparison','destinations'],
  domestic:['visual-first','side-parks','project-jumunjin','project-yangyang','domestic-community','pool-programme','domestic-facilities','park-services','park-product-guide','park-sections','villa-types','park-share-preview','multiple-share-guide','park-owner-guide'],
  chiangmai:['visual-first','chiangmai-introduction','chiangmai-day-and-night','chiangmai-experiences','chiangmai-business-programmes','chiangmai-spaces','global-interiors','chiangmai-local','chiangmai-vacation','chiangmai-services','park-owner-guide','chiangmai-community']
 };
 const kind=document.body.classList.contains('side-owners')?'owners':document.body.classList.contains('side-domestic')?'domestic':'chiangmai';
 const outline=document.createElement('details');outline.className='mobile-page-outline';
 const summary=document.createElement('summary');summary.textContent=english?'Page contents & image information':'페이지 목차 · 이미지 안내';outline.append(summary);
 const dock=document.createElement('nav');dock.className='mobile-park-dock';dock.setAttribute('aria-label',english?'Park pages':'파크 페이지 이동');
 [['domestic','domestic-villas.html','국내 파크','Korea'],['chiangmai','business-valley.html','해외 파크','Abroad'],['owners','owners.html','오너 안내','Owner guide']].forEach(([key,url,ko,en])=>{
  const a=document.createElement('a');a.href=url+(english?'?lang=en':'');a.textContent=english?en:ko;if(key===kind)a.setAttribute('aria-current','page');dock.append(a);
 });
 function layout(){
  if(media.matches){
   const hero=original.find(el=>el.matches('.guide-hero,.side-hero'));if(hero)main.append(hero);
   for(const id of orders[kind]){const node=document.getElementById(id);if(node?.parentElement===main)main.append(node);}
   if(directory){outline.append(directory);document.getElementById('visual-first')?.after(outline);}
   document.body.append(dock);document.body.classList.add('phone-layout');
  }else{
   for(const node of original)main.append(node);outline.remove();dock.remove();document.body.classList.remove('phone-layout');
  }
 }
 layout();media.addEventListener('change',layout);
})();
