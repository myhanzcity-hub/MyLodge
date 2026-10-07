// Photo-led promotional presentation. No registration, booking or data collection.
(() => {
 'use strict';
 const photo=(name,alt,eager=false)=>`<img src="assets/images/${name}-20261007-960.webp" srcset="assets/images/${name}-20261007-480.webp 480w, assets/images/${name}-20261007-960.webp 960w, assets/images/${name}-20261007-1680.webp 1680w" sizes="(max-width:800px) 100vw, 70vw" width="1680" height="945" alt="${alt}" decoding="async" ${eager?'fetchpriority="high"':'loading="lazy"'}>`;
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
  return;
 }
 if(!document.body.classList.contains('promotion-home'))return;
 const spaces=[
  ['facility-villa','별장 외관','첨단의 별장.<br>휴가의 시작.','곡선형 모듈 별장과 빛나는 풀장. 도착하는 순간, 일상의 분위기가 달라집니다.',['곡선형 모듈 건축','풀장과 이어지는 데크']],
  ['facility-beach','비치사이드 · 풀장','바다를 곁에.<br>풀장 속 여유.','푸른 바다와 풀장, 햇살 아래의 만남. 마음껏 쉬고 함께 즐기는 휴가를 그립니다.',['해변을 바라보는 풀장','함께 즐기는 야외 공간']],
  ['facility-terrace','테라스','편안한 만남.<br>새로운 가능성.','커피 한 잔에서 시작되는 대화. 여유로운 테라스에서 사람과 아이디어를 만납니다.',['사업가들의 편안한 교류','풍경과 함께하는 커피']],
  ['facility-club','카페테리아 · 클럽','낮의 커피.<br>밤의 음악.','이야기가 이어지는 라운지에서 음악과 춤이 있는 밤까지. 머무름에 활기를 더합니다.',['카페와 클럽 라운지','음악과 함께하는 만남']]
 ];
 document.querySelectorAll('.space-panel').forEach((panel,i)=>{
  const [name,label,title,copy,points]=spaces[i];
  panel.querySelector('figure').innerHTML=photo(name,label+' 공간 구상')+'<figcaption>AI 공간 콘셉트</figcaption>';
  panel.querySelector('h3').innerHTML=title;panel.querySelector('.space-copy>p:not(.eyebrow)').textContent=copy;
  panel.querySelector('ul').innerHTML=points.map(p=>'<li>'+p+'</li>').join('');
  const tab=document.querySelector('#space-tab-'+i);tab.innerHTML='<span>0'+(i+1)+'</span>'+label;
 });
 document.querySelector('#villa-spaces .vacation-intro>p:last-child').textContent='공간을 선택해 자세히 둘러보세요.';
 document.querySelector('#villa-spaces .vacation-intro>.eyebrow').textContent='MY LODGE / EXPLORE YOUR VILLA';
 document.querySelector('#space-panel-2 .eyebrow').textContent='03 / TERRACE & CONNECT';
 document.querySelector('#space-panel-3 .eyebrow').textContent='04 / CAFE & CLUB';
 document.querySelector('.promotion-intro-photo').innerHTML=photo('story-destination','해변과 풀장, 모듈 별장이 함께 보이는 휴양지');
 const projectNames=['project-jumunjin','project-yangyang'];
 document.querySelectorAll('#projects .project').forEach((card,i)=>{
  card.querySelector('h3').textContent=i?'양양의 별장':'주문진의 별장';
  card.querySelector('.project-photo img').outerHTML=photo(projectNames[i],i?'숲속의 계단형 별장 단지와 여러 풀장, 교류 광장을 조망한 양양 콘셉트':'해안의 곡선형 별장 단지와 중앙 풀장, 클럽을 조망한 주문진 콘셉트');
  card.querySelector('.project-region-copy').textContent=i?'숲을 따라 이어지는 별장과 풀장. 여유로운 낮, 활기찬 만남을 그립니다.':'바다를 향해 펼쳐진 별장과 클럽. 푸른 저녁을 함께 즐기는 휴양지를 그립니다.';
 });
 const makeCards=(selector,names)=>document.querySelectorAll(selector+' .promotion-cards article').forEach((card,i)=>{
  const copy=document.createElement('div');copy.className='editorial-card-copy';while(card.firstChild)copy.append(card.firstChild);
  const figure=document.createElement('figure');figure.innerHTML=photo(names[i],copy.querySelector('h3').textContent+' · AI 생활 콘셉트');card.append(figure,copy);
 });
 makeCards('#ownership',['owner-unwind','owner-connect','owner-ideas']);
 makeCards('#stay-services',['concierge-arrival','concierge-care','concierge-escape']);
 const stories=[['facility-villa','휴가의 시작.','별장과 풀장, 나의 일상이 달라지는 순간.'],['facility-terrace','사람을 만나는 오후.','편안한 대화 속에서 새로운 생각이 시작됩니다.'],['facility-club','음악이 있는 밤.','함께 즐기는 라운지. 별장의 밤에 활기를 더합니다.']];
 document.querySelectorAll('.life-scene').forEach((scene,i)=>{const [name,title,copy]=stories[i];scene.querySelector('img').outerHTML=photo(name,title+' 공간 콘셉트');scene.querySelector('h2').textContent=title;scene.querySelector('.life-copy>p:last-child').textContent=copy;});
 // A portrait crop needs enough pixels for the image height, not just the screen width.
 document.querySelectorAll('.life-scene>img').forEach(image=>{image.sizes='(max-width:700px) 1152px, (max-height:500px) 1080px, max(100vw, 195svh)';});
 document.querySelectorAll('.life-scene').forEach((scene,i)=>{scene.querySelector('.scene-time').textContent=['도착하는 순간','여유로운 오후','함께 즐기는 밤'][i];scene.querySelector('.eyebrow').textContent=['ARRIVE & UNWIND','MEET & CONNECT','CLUB & MUSIC'][i];});
 document.querySelector('#lifestyle .intro h2').textContent='사진으로 만나는 하루.';
 document.querySelector('#lifestyle .intro>p').remove();
 document.querySelectorAll('#lifestyle .photo').forEach((slide,i)=>{const name=['gallery-pool','gallery-terrace','gallery-night'][i];if(!name)return;const label=['바다와 함께 즐기는 풀장','사업가들이 만나는 테라스','음악과 대화가 있는 클럽'][i];slide.querySelector('img').outerHTML=photo(name,label);slide.querySelector('figcaption').textContent=label;});
 const deckStatus=document.querySelector('.photo-deck-controls .deck-status');if(deckStatus)deckStatus.textContent='01 / 03 · 바다와 함께 즐기는 풀장';
 const paths=document.querySelector('#brand-paths');
 paths.querySelector('h2').innerHTML='휴가에서 시작해,<br>새로운 가능성으로.';
 paths.querySelectorAll('.path-card').forEach((card,i)=>{
  const copy=document.createElement('div');copy.className='path-copy';while(card.firstChild)copy.append(card.firstChild);
  if(!i)copy.querySelector('span').textContent='MY LODGE SHARE';
  const figure=document.createElement('figure');figure.innerHTML=photo(i?'valley-community':'owner-connect',i?'IT 전문가와 창업자의 치앙마이 교류 공간 콘셉트':'풀장과 함께하는 모듈형 별장 콘셉트');card.append(figure,copy);
  if(i){card.href='https://hanzcity.com/chiangmai/intro';copy.querySelector('b').textContent='치앙마이 살펴보기 ↗';copy.querySelector('span').textContent='BUSINESS VALLEY / CHIANG MAI';copy.querySelector('h3').innerHTML='챕터 1. 치앙마이.<br>전 세계 IT맨들이 집결하는 성지.';copy.querySelector('p').innerHTML='함께 자유롭게 만나고.<br>소통하고 협력하고.<br>도모하고. 스타트 업!';}
 });
 // Consistent picture direction for the overview; legal detail stays in the footer.
 const vision=document.querySelector('#vision .vision-photo img');if(vision)vision.outerHTML=photo('vision-masterplan','별장과 풀장, 클럽을 함께 보는 전체 공간 조감도');
 document.querySelector('#vision h2').textContent='별장 단지의 전체 풍경.';
 document.querySelector('#vision .vision-heading>p')?.remove();
 document.querySelectorAll('.promotion-cards img').forEach(img=>img.sizes='(max-width:800px) 100vw, 33vw');
 document.querySelectorAll('.project-photo img,.path-card img').forEach(img=>img.sizes='(max-width:800px) 100vw, 50vw');
 for(const [id,name] of [['our-villa','story-destination'],['brand-paths','valley-community']]){
  const backdrop=document.querySelector('#'+id+' .scenic-camera img');if(backdrop)backdrop.outerHTML=photo(name,'');
 }
 // These sections have opaque reading surfaces; discard their unused image layers.
 document.querySelectorAll('#villa-spaces>.scenic-backdrop,#ownership>.scenic-backdrop,#projects>.scenic-backdrop,#lifestyle>.scenic-backdrop').forEach(layer=>layer.remove());
 const serviceBackdrop=document.querySelector('#stay-services .scenic-camera img');
 if(serviceBackdrop){serviceBackdrop.src='assets/images/living-dinner-960.webp';serviceBackdrop.srcset='assets/images/living-dinner-480.webp 480w, assets/images/living-dinner-960.webp 960w, assets/images/living-dinner-1536.webp 1536w';serviceBackdrop.width=1536;serviceBackdrop.height=864;serviceBackdrop.sizes='100vw';}
 // Decorative neon motifs retain the existing text labels and tab controls.
 const neon=(kind)=>{const mark=document.createElement('span');mark.className='neon-icon neon-'+kind;mark.setAttribute('aria-hidden','true');return mark;};
 document.body.classList.add('neon-presentation');
 document.querySelectorAll('.space-tabs button').forEach((button,i)=>{
  const label=document.createElement('span');label.className='neon-tab-label';
  while(button.firstChild)label.append(button.firstChild);
  button.append(neon(['villa','pool','coffee','music'][i]),label);
 });

})();
