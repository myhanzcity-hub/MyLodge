// Photo-led promotional presentation. No registration, booking or data collection.
(() => {
 'use strict';
 // Navigation lives in the category menus and the character guide.
 const removePromotionalLinks=()=>{
  document.querySelectorAll('a').forEach(link=>{
   if(link.closest('header nav, #mobile-menu, .lodge-guide, .service-category-nav')||link.matches('.brand,.skip-link'))return;
   if(link.classList.contains('path-card')){
    const card=document.createElement('article');card.className=link.className;
    while(link.firstChild)card.append(link.firstChild);
    card.querySelector('.path-copy>b')?.remove();
    link.replaceWith(card);
   }else link.remove();
  });
  document.querySelectorAll('.film-top,.hero-actions,.vacation-finale>.container>div').forEach(box=>{
   if(!box.children.length&&!box.textContent.trim())box.remove();
  });
 };
 const photo=(name,alt,eager=false,date=20261007)=>`<img src="assets/images/${name}-${date}-960.webp" srcset="assets/images/${name}-${date}-480.webp 480w, assets/images/${name}-${date}-960.webp 960w, assets/images/${name}-${date}-1680.webp 1680w" sizes="(max-width:800px) 100vw, 70vw" width="1680" height="945" alt="${alt}" decoding="async" ${eager?'fetchpriority="high"':'loading="lazy"'}>`;
 document.body.classList.add('photo-led');
 if(document.body.classList.contains('valley-page')){
  const hero=document.querySelector('.valley-hero');
  hero.querySelector('figure').innerHTML=photo('valley-community','치앙마이의 풀장과 정원 옆에서 IT 전문가와 창업자들이 교류하는 공간 구상',true)+'<figcaption>AI 공간·커뮤니티 콘셉트</figcaption>';
  hero.querySelector('h1').innerHTML='챕터 1. 치앙마이.<br><em>전 세계 IT맨들이<br>집결하는 성지.</em>';
  hero.querySelector('p:not(.eyebrow)').innerHTML='함께 자유롭게 만나고.<br>소통하고 협력하고.<br>도모하고. 스타트 업!';
  const resource=document.createElement('section');resource.id='valley-resources';resource.className='resource-story';
  resource.innerHTML='<div class="container"><figure>'+photo('valley-resources','정원과 산을 바라보는 라운지에서 IT 전문가들이 대화하고 협업하는 장면')+'<figcaption>AI 교류 콘셉트</figcaption></figure><div class="resource-copy"><p class="eyebrow">PEOPLE / IDEAS / OPPORTUNITIES</p><h2>당신이 추구하는,<br>필요로 하는 모든 자원을<br>만날 수 있다.</h2><p>사람을 만나고, 생각을 나누고,<br>함께 다음 가능성을 그리는 곳.</p><a class="text-link" href="#valley-spaces">공간 구성 둘러보기 ↓</a><small>마이롯지가 지향하는 커뮤니티의 모습입니다.</small></div></div>';
  document.querySelector('#valley-purpose').after(resource);
  document.querySelectorAll('.valley-page main .eyebrow').forEach(label=>label.textContent=label.textContent.replace(/^\d{2} \/ /,''));
  const cost=document.querySelector('.valley-cost p');if(cost)cost.textContent='치앙마이의 체류와 서비스는 국내 별장 구상과 별도로 구상하고 있습니다. 가격과 포함 서비스, 이용 조건은 정식 안내에서 확인해 주세요.';
  const footerDate=document.querySelector('footer>.container>p:not(.small)');if(footerDate)footerDate.textContent='치앙마이 체류·업무·커뮤니티 사업 구상';
  removePromotionalLinks();
  return;
 }
 if(!document.body.classList.contains('promotion-home'))return;
 const spaces=[
  ['facility-hotel-pool','별장 외관','최첨단 별장.<br>지금 내가 있는 곳이 이비자!','최신식 별장과 365일 완벽한 풀파티. 풍경과 만남을 즐기는 테라스. 그곳에 닿는 순간, 나의 일상은 화려함으로 바뀐다.',['최신식 모듈러 하우스 별장.','풍경과 만남을 즐기는 테라스.','이비자에 버금가는 풀파티 무대.'],20261008,'01 / MY VILLA'],
  ['facility-beach','비치사이드','바다를 곁에.<br>여유를 가까이.','파도와 햇살, 바다를 바라보는 풍경. 해변 곁에서 여유로운 휴가를 그립니다.',['바다를 바라보는 풍경','함께 즐기는 해변의 여유'],20261007,'02 / BEACHSIDE'],
  ['facility-pool-cabana','풀파티 · 카바나','빛나는 풀파티.<br>오너들만의 카바나.','음악과 만남의 풀파티. 카바나에서의 느긋한 휴식.',['음악과 함께하는 풀파티','오너들만의 카바나'],20261008,'03 / POOL PARTY & CABANA'],
  ['facility-club','카페테리아 · 클럽','낮의 커피.<br>밤의 음악.','이야기가 이어지는 라운지에서 음악과 춤이 있는 밤까지. 머무름에 활기를 더합니다.',['카페와 클럽 라운지','음악과 함께하는 만남'],20261007,'04 / CAFE & CLUB'],
  ['facility-market-v2','마켓','휴가에 필요한 것들.<br>가까운 마켓에서.','가벼운 먹거리부터 휴가에 필요한 물품까지. 머무는 공간 가까이에서 편하게 둘러보는 마켓을 그립니다.',['먹거리와 휴가용품','편하게 둘러보는 리조트 마켓'],20261008,'05 / MARKET'],
  ['facility-concierge','컨시어지','반가운 도착.<br>편안한 머무름.','도착 전 준비부터 머무는 동안의 안내까지. 휴가를 편안하게 즐길 수 있도록 돕는 컨시어지를 그립니다.',['도착과 시설 이용 안내','머무는 동안의 세심한 지원'],20261008,'06 / CONCIERGE']
 ];
 document.querySelectorAll('.space-panel').forEach((panel,i)=>{
  const [name,label,title,copy,points,date,tag]=spaces[i];
  panel.querySelector('figure').innerHTML=photo(name,label+' 공간 구상',false,date)+'<figcaption>AI 공간 콘셉트</figcaption>';
  panel.querySelector('.eyebrow').textContent=tag;
  panel.querySelector('h3').innerHTML=title;panel.querySelector('.space-copy>p:not(.eyebrow)').textContent=copy;
  panel.querySelector('ul').innerHTML=points.map(p=>'<li>'+p+'</li>').join('');
  const tab=document.querySelector('#space-tab-'+i);tab.innerHTML='<span>0'+(i+1)+'</span>'+label;
 });
 document.querySelector('#villa-spaces .vacation-intro>p:last-child').textContent='공간을 선택해 자세히 둘러보세요.';
 document.querySelector('#villa-spaces .vacation-intro>.eyebrow').textContent='MY LODGE / EXPLORE YOUR VILLA';
 document.querySelector('.promotion-intro-photo').innerHTML=photo('story-destination','해변과 풀장, 모듈 별장이 함께 보이는 휴양지');
 const projectNames=['project-jumunjin','project-yangyang'];
 document.querySelectorAll('#projects .project').forEach((card,i)=>{
  card.querySelector('h3').textContent=i?'마이롯지 양양 파크':'마이롯지 주문진 파크';
  card.querySelector('.project-photo img').outerHTML=photo(projectNames[i],i?'숲속의 계단형 별장 단지와 여러 풀장, 교류 광장을 조망한 양양 콘셉트':'해안의 곡선형 별장 단지와 중앙 풀장, 클럽을 조망한 주문진 콘셉트');
  card.querySelector('.project-region-copy').textContent=i?'숲을 따라 이어지는 별장과 풀장. 여유로운 낮, 활기찬 만남을 그립니다.':'바다를 향해 펼쳐진 별장과 클럽. 푸른 저녁을 함께 즐기는 휴양지를 그립니다.';
 });
 const makeCards=(selector,names,date=20261007)=>document.querySelectorAll(selector+' .promotion-cards article').forEach((card,i)=>{
  const copy=document.createElement('div');copy.className='editorial-card-copy';while(card.firstChild)copy.append(card.firstChild);
  const figure=document.createElement('figure');figure.innerHTML=photo(names[i],copy.querySelector('h3').textContent+' · AI 생활 콘셉트',false,date);card.append(figure,copy);
 });
 makeCards('#ownership',['owner-unwind','owner-connect','owner-ideas']);
 makeCards('#stay-services',['service-ready','service-property-care','service-owner-exchange'],20261008);
 const stories=[['facility-villa','완벽한 휴가의 시작.','별장과 풀장, 나의 일상이 달라지는 순간.'],['facility-terrace','사람을 만나는 오후.','편안한 대화 속에서 새로운 생각이 시작됩니다.'],['facility-club','음악이 있는 밤.','함께 즐기는 라운지. 별장의 밤에 활기를 더합니다.']];
 document.querySelectorAll('.life-scene').forEach((scene,i)=>{const [name,title,copy]=stories[i];scene.querySelector('img').outerHTML=photo(name,title+' 공간 콘셉트');scene.querySelector('h2').textContent=title;scene.querySelector('.life-copy>p:last-child').textContent=copy;});
 // A portrait crop needs enough pixels for the image height, not just the screen width.
 document.querySelectorAll('.life-scene>img').forEach(image=>{image.sizes='(max-width:700px) 1152px, (max-height:500px) 1080px, max(100vw, 195svh)';});
 document.querySelectorAll('.life-scene').forEach((scene,i)=>{scene.querySelector('.scene-time').textContent=['도착하는 순간','여유로운 오후','함께 즐기는 밤'][i];scene.querySelector('.eyebrow').textContent=['ARRIVE & UNWIND','MEET & CONNECT','CLUB & MUSIC'][i];});
 const lifeStory=document.querySelector('#life-story');
 lifeStory.classList.add('life-autoplay');
 const lifeSlides=[...lifeStory.querySelectorAll('.life-scene')];
 const lifeNavigation=lifeStory.querySelector('.life-navigation');
 lifeNavigation.innerHTML='<span class="life-counter" aria-live="off">01 / 03</span><button type="button" data-life-pause aria-pressed="false">자동 재생 멈추기</button>';
 const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');
 const mobileReading=matchMedia('(max-width:1023px)');
 let lifeIndex=0,lifeTimer=null,lifeVisible=false,lifePaused=false,lifeDragging=false;
 const pauseButton=lifeNavigation.querySelector('[data-life-pause]');
 function showLife(index){
  lifeIndex=(index+lifeSlides.length)%lifeSlides.length;
  lifeSlides.forEach((slide,i)=>{slide.classList.toggle('is-active',i===lifeIndex);slide.setAttribute('aria-hidden',String(i!==lifeIndex));slide.inert=i!==lifeIndex;});
  lifeNavigation.querySelector('.life-counter').textContent=String(lifeIndex+1).padStart(2,'0')+' / '+String(lifeSlides.length).padStart(2,'0');
 }
 function lifeReadingDelay(){
  const copy=lifeSlides[lifeIndex].querySelector('.life-copy');
  const text=copy.textContent.trim();
  const koreanCharacters=(text.match(/[가-힣]/g)||[]).length;
  const words=(text.match(/[A-Za-z]+(?:['’-][A-Za-z]+)*/g)||[]).length;
  const paragraph=copy.querySelector('p:last-child');
  const fontScale=Math.max(1,Math.min(2,parseFloat(getComputedStyle(paragraph).fontSize)/16));
  // Allow image discovery plus reading; these are design values, not measured visitor dwell.
  const readingTime=4500+(koreanCharacters*120+words*400)*fontScale;
  return Math.min(22000,Math.max(mobileReading.matches?14000:10000,Math.ceil(readingTime/1000)*1000));
 }
 function scheduleLife(){
  clearTimeout(lifeTimer);
  if(lifeVisible&&!lifePaused&&!lifeDragging&&!document.hidden&&!motionPreference.matches)lifeTimer=setTimeout(()=>{showLife(lifeIndex+1);scheduleLife();},lifeReadingDelay());
 }
 lifeStory.addEventListener('mylodge:gesture-start',()=>{lifeDragging=true;clearTimeout(lifeTimer);});
 lifeStory.addEventListener('mylodge:slide-swipe',event=>{showLife(lifeIndex+event.detail.direction);});
 lifeStory.addEventListener('mylodge:gesture-end',()=>{lifeDragging=false;scheduleLife();});
 pauseButton.addEventListener('click',()=>{lifePaused=!lifePaused;pauseButton.setAttribute('aria-pressed',String(lifePaused));pauseButton.textContent=new URLSearchParams(location.search).get('lang')==='en'?(lifePaused?'Resume slideshow':'Pause slideshow'):(lifePaused?'자동 재생 시작하기':'자동 재생 멈추기');scheduleLife();});
 document.addEventListener('visibilitychange',scheduleLife);
 motionPreference.addEventListener('change',scheduleLife);
 mobileReading.addEventListener('change',scheduleLife);
 new IntersectionObserver(entries=>{lifeVisible=entries[0].isIntersecting;scheduleLife();},{threshold:.25}).observe(lifeStory);
 showLife(0);
 document.querySelector('#lifestyle .intro h2').textContent='사진으로 만나는 하루.';
 document.querySelector('#lifestyle .intro>p').remove();
 document.querySelectorAll('#lifestyle .photo').forEach((slide,i)=>{const name=['gallery-pool','gallery-terrace','gallery-night'][i];if(!name)return;const label=['바다와 함께 즐기는 풀장','사업가들이 만나는 테라스','음악과 대화가 있는 클럽'][i];slide.querySelector('img').outerHTML=photo(name,label);slide.querySelector('figcaption').textContent=label;});
 const deckStatus=document.querySelector('.photo-deck-controls .deck-status');if(deckStatus)deckStatus.textContent='01 / 03 · 바다와 함께 즐기는 풀장';
 const paths=document.querySelector('#brand-paths');
 paths.querySelector('h2').innerHTML='휴가와 함께 시작하는<br>미래의 비전.';
 paths.querySelectorAll('.path-card').forEach((card,i)=>{
  const copy=document.createElement('div');copy.className='path-copy';while(card.firstChild)copy.append(card.firstChild);
  if(!i)copy.querySelector('span').textContent='MY LODGE SHARE';
  const figure=document.createElement('figure');figure.innerHTML=photo(i?'valley-community':'brand-villa-atmosphere',i?'IT 전문가와 창업자의 치앙마이 교류 공간 콘셉트':'별장과 풀장, 카바나, 테라스가 함께 보이는 마이롯지 별장 분위기',false,i?20261007:20261008);card.append(figure,copy);
  if(i){card.href='https://hanzcity.com/chiangmai/intro';copy.querySelector('b').textContent='치앙마이 살펴보기 ↗';copy.querySelector('span').textContent='BUSINESS VALLEY / CHIANG MAI';copy.querySelector('h3').innerHTML='챕터 1. 치앙마이.<br>전 세계 IT맨들이 집결하는 성지.';copy.querySelector('p').innerHTML='함께 자유롭게 만나고.<br>소통하고 협력하고.<br>도모하고. 스타트 업!';}
 });
 // Consistent picture direction for the overview; legal detail stays in the footer.
 const vision=document.querySelector('#vision .vision-photo img');if(vision)vision.outerHTML=photo('vision-masterplan','별장과 풀장, 클럽을 함께 보는 전체 공간 조감도');
 document.querySelector('#vision h2').textContent='마이롯지 단지 전체 풍경.';
 document.querySelector('#vision .vision-heading>p')?.remove();
 document.querySelectorAll('.promotion-cards img').forEach(img=>img.sizes='(max-width:800px) 100vw, 33vw');
 document.querySelectorAll('#ownership .promotion-cards img').forEach((img,index)=>{
  img.sizes=index===2?'(max-width:800px) 100vw, (max-width:1199px) 60vw, 33vw':'(max-width:800px) 100vw, (max-width:1199px) 50vw, 33vw';
 });
 document.querySelectorAll('.project-photo img,.path-card img').forEach(img=>img.sizes='(max-width:800px) 100vw, 50vw');
 for(const [id,name] of [['our-villa','story-destination'],['brand-paths','valley-community']]){
  const backdrop=document.querySelector('#'+id+' .scenic-camera img');if(backdrop)backdrop.outerHTML=photo(name,'');
 }
 // These sections have opaque reading surfaces; discard their unused image layers.
 document.querySelectorAll('#villa-spaces>.scenic-backdrop,#ownership>.scenic-backdrop,#projects>.scenic-backdrop,#lifestyle>.scenic-backdrop').forEach(layer=>layer.remove());
 const serviceBackdrop=document.querySelector('#stay-services .scenic-camera img');
 if(serviceBackdrop){serviceBackdrop.src='assets/images/living-dinner-960.webp';serviceBackdrop.srcset='assets/images/living-dinner-480.webp 480w, assets/images/living-dinner-960.webp 960w, assets/images/living-dinner-1536.webp 1536w';serviceBackdrop.width=1536;serviceBackdrop.height=864;serviceBackdrop.sizes='100vw';}
 // Decorative neon motifs retain the existing text labels and tab controls.
 const facilityNeon={
  beach:'<path class="neon-cyan" d="M6 43q6-4 12 0t12 0t12 0t12 0M5 50q7-4 14 0t14 0t14 0"/><path class="neon-pink" d="M14 24q14-22 29 0zM28 12v27"/><path class="neon-gold" d="m12 33 10 7h18M21 40l-5 8m21-8 5 7"/><circle class="neon-gold" cx="49" cy="13" r="5"/><path class="neon-gold" d="M49 4V2m0 22v-2M40 13h-2m22 0h-2m-15-6-2-2m15 15-2-2"/>',
  cabana:'<path class="neon-cyan" d="M7 46h50v10H7zM11 51q5-3 10 0t10 0t10 0t10 0"/><path class="neon-gold" d="m9 21 17-12 18 12zM12 23v19m29-19v19M21 34h13"/><path class="neon-pink" d="m14 25 4 15h-6m27-15-4 15h6"/><path class="neon-purple" d="M49 12v15m0-15 8-2v14M49 12l8-2v5l-8 2"/><ellipse class="neon-purple" cx="46" cy="28" rx="3" ry="2"/><ellipse class="neon-purple" cx="54" cy="25" rx="3" ry="2"/><path class="neon-gold" d="M53 36v6m-3-3h6"/>',
  market:'<path class="neon-gold" d="M9 25h46l-5-12H14zM12 32v23h40V32M10 55h44"/><path class="neon-pink" d="M9 25v4q4 7 8 0 4 7 8 0 4 7 8 0 4 7 8 0 4 7 8 0 3 5 6 0v-4M18 14l-2 10m10-10-1 10m9-10 1 10m9-10 3 10"/><path class="neon-cyan" d="M18 37h11v12H18zM36 55V37h10v18"/><path class="neon-purple" d="M23 6h18M6 15v6m-3-3h6M56 40v6m-3-3h6"/>',
  concierge:'<path class="neon-gold" d="M12 43a20 20 0 0 1 40 0zM32 20v-5m-5 0h10"/><path class="neon-cyan" d="M9 47h46M7 54h50"/><path class="neon-pink" d="M18 37a15 15 0 0 1 7-9M8 18v7m-4-3h8M52 11v8m-4-4h8"/><path class="neon-purple" d="m44 24 6 5m-1-8 7 2M15 9l3 4"/>'
 };
 const neon=(kind)=>{
  const mark=document.createElement('span');
  mark.className='neon-icon neon-'+kind;mark.setAttribute('aria-hidden','true');
  if(facilityNeon[kind]){mark.classList.add('neon-vector');mark.innerHTML='<svg viewBox="0 0 64 64" focusable="false">'+facilityNeon[kind]+'</svg>';}
  return mark;
 };
 document.body.classList.add('neon-presentation');
 document.querySelectorAll('.space-tabs button').forEach((button,i)=>{
  const label=document.createElement('span');label.className='neon-tab-label';
  while(button.firstChild)label.append(button.firstChild);
  button.append(neon(['villa','beach','cabana','music','market','concierge'][i]),label);
 });
 removePromotionalLinks();

 // Explicit exception requested by the user: only the Chiang Mai image navigates.
 const chiangMaiCard=document.querySelector('#brand-paths .valley-path');
 const chiangMaiTitle=chiangMaiCard.querySelector('h3');
 chiangMaiTitle.innerHTML='챕터 1. 치앙마이.<br>전 세계 <strong class="it-highlight">IT맨</strong>과<br><strong class="it-highlight">디지털노마드</strong>들이<br>집결하는 성지.';
 const chiangMaiImageLink=document.createElement('a');
 chiangMaiImageLink.className='chiangmai-image-link';
 chiangMaiImageLink.href='https://hanzcity.com/chiangmai/intro';
 chiangMaiImageLink.setAttribute('aria-label','한즈시티 치앙마이 사이트 살펴보기');
 const chiangMaiFigure=chiangMaiCard.querySelector('figure');
 chiangMaiFigure.replaceWith(chiangMaiImageLink);chiangMaiImageLink.append(chiangMaiFigure);
 const imageArrow=document.createElement('span');imageArrow.className='image-link-arrow';
 imageArrow.setAttribute('aria-hidden','true');imageArrow.textContent='↗';chiangMaiImageLink.append(imageArrow);

 // Requested destination navigation is an explicit exception to promotional-link removal.
 const detailHref=(name,hash='')=>{
  const url=new URL(name,location.href),params=new URLSearchParams(location.search);
  for(const key of ['lang','screen-frame'])if(params.has(key))url.searchParams.set(key,params.get(key));
  url.hash=hash;return url.pathname+url.search+url.hash;
 };
 const domesticCard=document.querySelector('#brand-paths .path-card:not(.valley-path)');
 const domesticLink=document.createElement('a');domesticLink.className=domesticCard.className+' domestic-path';
 domesticLink.href=detailHref('domestic-villas.html');
 while(domesticCard.firstChild)domesticLink.append(domesticCard.firstChild);
 domesticCard.replaceWith(domesticLink);
 const domesticCopy=domesticLink.querySelector('.path-copy');
 domesticCopy.querySelector('p').textContent='주문진과 양양, 국내 별장 공간을 만나보세요.';
 domesticCopy.insertAdjacentHTML('beforeend','<span class="path-action">국내 별장 상세 소개 →</span>');
 const chiangMaiCopy=chiangMaiCard.querySelector('.path-copy');
 const chiangMaiDetail=document.createElement('a');chiangMaiDetail.className='path-copy path-copy-link';
 chiangMaiDetail.href=detailHref('business-valley.html');
 while(chiangMaiCopy.firstChild)chiangMaiDetail.append(chiangMaiCopy.firstChild);
 chiangMaiCopy.replaceWith(chiangMaiDetail);
 chiangMaiDetail.insertAdjacentHTML('beforeend','<span class="path-action">치앙마이 상세 소개 →</span>');
 chiangMaiImageLink.insertAdjacentHTML('beforeend','<span class="external-image-label">한즈시티 ↗</span>');
 document.querySelectorAll('header nav a[href="#projects"]').forEach(link=>link.href=detailHref('domestic-villas.html'));
 document.querySelectorAll('a[href="business-valley.html"]').forEach(link=>link.href=detailHref('business-valley.html'));
 document.querySelector('#projects').remove();
 // Keep existing project bookmarks usable after the section moves off the homepage.
 if(['#projects','#project-jumunjin','#project-yangyang'].includes(location.hash)){
  location.replace(detailHref('domestic-villas.html',location.hash==='#projects'?'':location.hash));
 }

 const borderObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>entry.target.classList.toggle('neon-border-running',entry.isIntersecting));
 },{threshold:0});
 document.querySelectorAll('#villa-spaces,#vision').forEach(section=>borderObserver.observe(section));
 const suspendBorders=()=>document.body.classList.toggle('neon-border-suspended',document.hidden);
 document.addEventListener('visibilitychange',suspendBorders);suspendBorders();
})();
