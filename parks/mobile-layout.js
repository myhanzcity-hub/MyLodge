// Rearrange the reading order on phones and restore the original desktop order.
(()=>{
 const main=document.querySelector('main');if(!main||document.body.hasAttribute('data-chiangmai-deck')||document.body.hasAttribute('data-owners-deck'))return;
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
 function layout(){
  if(media.matches){
   const hero=original.find(el=>el.matches('.guide-hero,.side-hero'));if(hero)main.append(hero);
   for(const id of orders[kind]){const node=document.getElementById(id);if(node?.parentElement===main)main.append(node);}
   if(directory){outline.append(directory);document.getElementById('visual-first')?.after(outline);}
   document.body.classList.add('phone-layout');
  }else{
   for(const node of original)main.append(node);outline.remove();document.body.classList.remove('phone-layout');
  }
 }
 layout();media.addEventListener('change',layout);
})();
