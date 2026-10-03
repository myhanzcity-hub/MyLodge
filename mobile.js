// Keep phone navigation and promotional overlays out of the reading area.
(() => {
 const menu=document.querySelector('#mobile-menu');
 if(menu){const sync=()=>document.body.classList.toggle('mobile-menu-open',!menu.hidden);new MutationObserver(sync).observe(menu,{attributes:true,attributeFilter:['hidden']});sync();}
 const hero=document.querySelector('.hero');
 if(hero)new IntersectionObserver(entries=>document.body.classList.toggle('hero-in-view',entries[0].isIntersecting),{threshold:0}).observe(hero);
 const landscape=matchMedia('(max-width:1023px) and (max-height:500px)');
 function staticStory(){const story=document.querySelector('#life-story');if(landscape.matches&&story)story.querySelectorAll('.life-scene').forEach(scene=>scene.removeAttribute('aria-hidden'));}
 landscape.addEventListener('change',staticStory);staticStory();
 const portrait=matchMedia('(max-width:700px)');
 document.querySelectorAll('.service-category-nav a').forEach(link=>link.addEventListener('click',()=>{
  if(!portrait.matches)return;
  const card=document.querySelector('.service-overview-card[data-deck-position="active"]');
  const header=document.querySelector('.header-inner');
  const top=(header?.getBoundingClientRect().bottom||70)+16;
  if(card&&card.getBoundingClientRect().top<top)card.scrollIntoView({block:'start',behavior:'instant'});
 }));
})();
