// Chairman's vacation direction. Concept exploration only; no submissions or transactions.
(() => {
 'use strict';
 const hero=document.querySelector('.hero');if(!hero)return;
 document.body.classList.add('vacation-design');
 const photo=(name,largest,alt,eager=false)=>`<img src="assets/images/${name}-960.webp" srcset="assets/images/${name}-480.webp 480w, assets/images/${name}-960.webp 960w, assets/images/${name}-${largest}.webp ${largest}w" sizes="(max-width:700px) 100vw, 90vw" width="${largest}" height="${name==='vacation-arrival'?Math.round(largest*941/1672):Math.round(largest*2/3)}" alt="${alt}" decoding="async" ${eager?'fetchpriority="high"':'loading="lazy"'}>`;
 const pair=hero.querySelector('.price-pair');
 const priceNote=pair.nextElementSibling;
 const ribbon=document.querySelector('.living-ribbon');

 const spaces=[
  {label:'별장 외관',tag:'01 / THE VILLA',title:'첨단의 형태.<br>고즈넉한 풍경.',copy:'부드러운 모듈 형태와 넓은 창. 자연을 가까이 두는 별장 공간을 그립니다.',photo:'facility-villa-20261007',illustration:'villa',alt:'마이롯지 별장 외관 공간 콘셉트',note:'마이롯지 공간 콘셉트'},
  {label:'비치사이드',tag:'02 / BEACHSIDE',title:'바다 곁에,<br>내 주말을 세우다.',copy:'별장 앞에 차를 세우고, 바다와 소나무가 보이는 풍경으로 들어서는 휴가를 상상합니다.',photo:'beachParty.png',width:1579,height:996,illustration:'beachside',alt:'바다 곁 마이롯지 공간 콘셉트',note:'마이롯지 공간 콘셉트'},
  {label:'풀파티 · 카바나',tag:'03 / POOL PARTY & CABANAS',title:'풀파티와 카바나.',copy:'화학 처리수 대신 깨끗한 바닷물로 즐기는 사계절 풀파티 구상입니다.',photo:'facility-pool-cabana-20261008',illustration:'pool-cabanas',alt:'풀과 카바나 공간 콘셉트',note:'마이롯지 공간 콘셉트'},
  {label:'바비큐 & 야외 다이닝',tag:'04 / BBQ & OUTDOOR DINING',title:'바비큐와 야외 다이닝.',copy:'야외에서 식사와 대화를 나누는 공간 콘셉트입니다.',photo:'bbqplace.png',width:1536,height:1024,illustration:'barbeque.png',alt:'바비큐 그릴과 야외 다이닝 공간 콘셉트',note:'계획 시설 콘셉트 · 실제 제공 여부는 미확정'},
  {label:'카페 & 클럽',tag:'05 / CAFÉ & CLUB',title:'커피 한 잔,<br>이야기가 이어지는 곳.',copy:'별장에서 머무는 사람들을 위한 커피와 가벼운 식사, 편안한 대화의 공간을 구상합니다.',photo:'facility-club-20261007',illustration:'cafe-club',alt:'카페와 클럽 공간 콘셉트',note:'마이롯지 공간 콘셉트'},
  {label:'마켓',tag:'06 / MARKET',title:'휴가에 필요한 즐거움.',copy:'머무는 동안 가까이에서 만나는 마켓.',photo:'facility-market-v2-20261008',illustration:'market',alt:'마켓 공간 콘셉트',note:'마이롯지 공간 콘셉트'},
  {label:'컨시어지',tag:'07 / CONCIERGE',title:'편안한 휴가의 시작.',copy:'도착부터 머무는 시간까지 돕는 안내 공간.',photo:'facility-concierge-20261008',illustration:'concierge',alt:'컨시어지 공간 콘셉트',note:'마이롯지 공간 콘셉트'}
 ];
 const facilityPhoto=(space,index)=>space.photo.endsWith('.png')
  ? `<img class="facility-photo${index?'':' is-active'}" src="assets/images/${space.photo}" width="${space.width}" height="${space.height}" alt="${space.alt}" ${index?'loading="lazy"':'fetchpriority="high"'}>`
  : `<img class="facility-photo${index?'':' is-active'}" src="assets/images/${space.photo}-960.webp" srcset="assets/images/${space.photo}-480.webp 480w, assets/images/${space.photo}-960.webp 960w, assets/images/${space.photo}-1680.webp 1680w" sizes="(max-width: 700px) 100vw, 70vw" width="1680" height="945" alt="${space.alt}" ${index?'loading="lazy"':'fetchpriority="high"'}>`;
 const explorer=document.createElement('section');explorer.id='villa-spaces';explorer.className='villa-spaces villa-explorer';
 explorer.innerHTML='<div class="container"><div class="vacation-intro"><p class="eyebrow">02 / EXPLORE YOUR VILLA</p><h2>별장이라는 공간.<br><em>내가 바라던 휴가.</em></h2><p>바다 곁의 첨단 별장, 고즈넉한 테라스와 커피 한 잔.<br>마이롯지가 그리는 공간을 하나씩 만나보세요.</p></div><div class="facility-selector" role="tablist" aria-label="별장 시설 선택">'+spaces.map((s,i)=>`<button class="facility-tab" id="facility-tab-${i}" role="tab" type="button" aria-selected="${i===0}" aria-controls="facility-gallery" tabindex="${i===0?0:-1}"><img src="assets/brand/${s.illustration.endsWith('.png') ? s.illustration : `${s.illustration}.webp`}" alt="" width="512" height="512" loading="${i?'lazy':'eager'}"><span class="facility-tab-meta"><small>0${i+1}</small><b>${s.label}</b></span></button>`).join('')+'</div><section class="facility-gallery" id="facility-gallery" aria-live="polite" aria-label="선택한 별장 시설"><div class="facility-photos">'+spaces.map(facilityPhoto).join('')+'</div><div class="facility-gallery-copy"><p class="facility-tag">'+spaces[0].tag+'</p><span class="facility-count">01 <i>/</i> 0'+spaces.length+'</span><h3>'+spaces[0].title+'</h3><p class="facility-description">'+spaces[0].copy+'</p><p class="facility-note">'+spaces[0].note+'</p></div><div class="facility-controls"><button type="button" class="facility-control" data-facility-previous aria-label="이전 시설">←</button><button type="button" class="facility-control" data-facility-next aria-label="다음 시설">→</button></div></section></div>';
 ribbon.after(explorer);
 const tabs=[...explorer.querySelectorAll('[role="tab"]')];const photos=[...explorer.querySelectorAll('.facility-photo')];const tag=explorer.querySelector('.facility-tag');const count=explorer.querySelector('.facility-count');const title=explorer.querySelector('h3');const description=explorer.querySelector('.facility-description');const note=explorer.querySelector('.facility-note');
 function selectSpace(index,focus=false){const space=spaces[index];tabs.forEach((tab,i)=>{const selected=i===index;tab.setAttribute('aria-selected',String(selected));tab.tabIndex=selected?0:-1;});photos.forEach((image,i)=>image.classList.toggle('is-active',i===index));tag.textContent=space.tag;count.innerHTML=`0${index+1} <i>/</i> 0${spaces.length}`;title.innerHTML=space.title;description.textContent=space.copy;note.textContent=space.note;if(focus){tabs[index].focus();tabs[index].scrollIntoView({block:'nearest',inline:'center',behavior:'smooth'});}}
 tabs.forEach((tab,i)=>{tab.addEventListener('pointerenter',event=>{if(event.pointerType==='mouse')selectSpace(i);});tab.addEventListener('click',()=>selectSpace(i));tab.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight')next=(i+1)%tabs.length;if(e.key==='ArrowLeft')next=(i+tabs.length-1)%tabs.length;if(e.key==='Home')next=0;if(e.key==='End')next=tabs.length-1;if(next!==undefined){e.preventDefault();selectSpace(next,true);}});});
 explorer.querySelector('[data-facility-previous]').addEventListener('click',()=>selectSpace((tabs.findIndex(tab=>tab.getAttribute('aria-selected')==='true')+tabs.length-1)%tabs.length));
 explorer.querySelector('[data-facility-next]').addEventListener('click',()=>selectSpace((tabs.findIndex(tab=>tab.getAttribute('aria-selected')==='true')+1)%tabs.length));
 selectSpace(spaces.length-1);

 const invitation=document.createElement('section');invitation.className='vacation-invitation';invitation.id='our-villa';
 invitation.innerHTML='<div class="container"><p class="eyebrow">A VILLA, TOGETHER</p><div class="invitation-grid"><div><h2>누군가의 별장에서,<br><em>우리의 별장으로.</em></h2><p>한 채를 함께 준비하는 공유별장.<br>별장 생활을 더 가까운 선택으로 만드는 구상입니다.</p><a class="text-link" href="#ownership">120구좌의 공유 방식 알아보기 ↗</a></div><div class="access-facts"><p class="access-label">참여 비용 · 검토 중인 1구좌 기준</p></div></div><p class="invitation-footnote">공동 소유의 법적 구조와 이용 권리는 정식 계약 전 안내합니다.</p></div>';
 ribbon.after(invitation);invitation.after(explorer);invitation.querySelector('.access-facts').append(pair,priceNote);hero.querySelector('.hero-price-seed').remove();
 invitation.querySelector('.eyebrow').textContent='MY LODGE SHARE / 사전 안내';
 invitation.querySelector('.invitation-grid>div>p').innerHTML='여러 참여자가 별장 한 채를 함께 준비하는 구상입니다.<br>한 구좌는 참여 단위이며, 소유할 권리와 머무는 조건은 별도로 확인합니다.';
 invitation.querySelector('.access-label').textContent='전체 참여 기준부터 살펴보세요 · 1구좌 검토 금액';
 pair.querySelector('.price-tile p').textContent='1구좌 참여 기준 · 검토 중';
 pair.querySelectorAll('.price-tile p')[1].textContent='그중 최초 5%의 계산값';
 pair.querySelector('small').textContent='전체 금액이 아닌 최초 5%';
 priceNote.textContent='참여 기준 금액의 포함 항목과 추가 비용, 회차별 납입 조건은 아직 확정되지 않았습니다.';
 invitation.querySelector('.text-link').textContent='한 채·120구좌의 공유 방식 ↗';
 invitation.querySelector('.text-link').insertAdjacentHTML('afterend','<a class="text-link invitation-cost-link" href="#pricing">전체 비용과 권리 확인하기 ↗</a>');
 invitation.querySelector('.invitation-footnote').textContent='현재는 공간·참여 구상을 살펴보는 단계입니다. 실제 상담 접수·모집·계약·수납·예약은 진행하지 않습니다.';
 const ownership=document.querySelector('#ownership');
 ownership.querySelector('.intro h2').innerHTML='혼자 준비하던 별장,<br>함께 준비하는 방법.';
 // Make leisure scenes available before conditions, with direct section navigation.
 const story=document.querySelector('#life-story');explorer.after(story);
 story.after(ownership);ownership.after(document.querySelector('#pricing'));
 const storyData=[
 ['vacation-arrival',1680,'15:00','ARRIVE & UNWIND','별장 앞에 차를 세우면,<br>주말이 달라집니다.','바다와 소나무, 모듈 별장. 돌아오고 싶은 휴가의 첫 장면.','AI 공간 콘셉트 · 위치·주차 조건은 미확정'],
 ['living-terrace',1536,'16:30','SLOW DOWN','아무 일정 없이,<br>좋은 환경 속으로.','테라스의 커피 한 잔. 서두를 일 없는 오후.','AI 생활 콘셉트 · 실제 시설·고객 사진이 아닙니다'],
 ['plan-p16',1440,'18:00','MEET & SHARE','친구야,<br>우리 별장에서 만나.','함께 먹고, 이야기하고. 별장 생활에 더해지는 만남의 공간.','사업계획서 생활 콘셉트 · 실제 시설·운영 조건은 미확정']
 ];
 story.querySelectorAll('.life-scene').forEach((scene,i)=>{const s=storyData[i];scene.querySelector('img').outerHTML=photo(s[0],s[1],s[4].replace(/<br>/g,' '));scene.querySelector('.scene-time').textContent=s[2];scene.querySelector('.eyebrow').textContent='0'+(i+1)+' / '+s[3];scene.querySelector('h2').innerHTML=s[4];scene.querySelector('.life-copy>p:last-child').textContent=s[5];scene.querySelector('.life-caption').textContent=s[6];});
 const nature=document.querySelector('#nature');
 nature.classList.add('resort-story');
 nature.querySelector('img').outerHTML='<img src="assets/brand/gaji.png" sizes="100vw" width="1672" height="941" alt="Aerial view of the swimming pool, club lounge, and coastal modular villa complex · AI space concept" loading="lazy" decoding="async">';
 nature.querySelector('.nature-copy').innerHTML='<span class="eyebrow">MY LODGE / A NEW EVERYDAY</span><p class="resort-lead">꽉막히고 답답한 콘크리트 블럭이 아닌</p><h2>아름다운 휴양지에서.</h2><p class="resort-description">가지는 여유로운 일상과 꿈을 실현할 수 있는 곳.</p>';
 nature.querySelector('figcaption').textContent='AI 공간 콘셉트 · 실제 부지·시설·확정 설계가 아닙니다';
 const lifeIntro=document.querySelector('#lifestyle .intro');lifeIntro.querySelector('h2').innerHTML='별장 안에서,<br>별장 밖으로.';lifeIntro.querySelector('p').innerHTML='큰 창 너머의 풍경, 테라스의 여유.<br>나만의 속도로 머무는 공간을 그립니다.';
 const pricing=document.querySelector('#pricing');pricing.querySelector('.intro h2').innerHTML='별장의 꿈을,<br>현실의 숫자로.';
 const projects=document.querySelector('#projects');projects.querySelector('.intro h2').innerHTML='바다를 품은<br>아름다운 내 집.';
 // Navigation points to real sections; original membership/services controls remain intact.
 const navItems=[['#villa-spaces','시설 둘러보기'],['#ownership','오너 혜택'],['#projects','지역별 별장'],['#stay-services','컨시어지']];
 for(const nav of document.querySelectorAll('header nav')){nav.innerHTML=navItems.map(([hash,label])=>`<a href="${hash}">${label}</a>`).join('');}
 const headerCta=document.querySelector('.header-cta');headerCta.href='#villa-spaces';headerCta.textContent='시설 둘러보기 ↗';
 for(const nav of document.querySelectorAll('header nav'))nav.insertAdjacentHTML('beforeend','<a href="business-valley.html">Business Valley ↗</a>');
 document.querySelector('#stay-services .intro h2').innerHTML='마이롯지 컨시어지,<br>카테고리별로 살펴보세요.';
 document.querySelector('.mobile-price-status').textContent='국내 SHARE · 검토 중 · 1구좌';
 const gateway=document.createElement('section');gateway.id='brand-paths';gateway.className='brand-paths';
 gateway.innerHTML='<div class="container"><p class="eyebrow">MY LODGE / TWO WAYS TO STAY</p><h2>별장 생활에서 시작해,<br>머물고 일하는 경험까지.</h2><div class="path-grid"><a class="path-card" href="#ownership"><span>01 / MY LODGE SHARE</span><h3>우리의 별장,<br>함께 준비하다.</h3><p>국내 공유별장 프로젝트의 참여 방식과<br>비용·소유·이용 조건을 살펴보세요.</p><b>공유별장 알아보기 ↗</b></a><a class="path-card valley-path" href="business-valley.html"><span>02 / BUSINESS VALLEY</span><h3>머물고, 일하고,<br>새로운 일을 만나다.</h3><p>치앙마이 체류·업무·커뮤니티를 연결하는<br>마이롯지 확장 사업 구상입니다.</p><b>Business Valley 살펴보기 ↗</b><small>치앙마이 체류 조건·가격은 별도 검토 중</small></a></div></div>';
 document.querySelector('#lifestyle').after(gateway);
 let navFrame=0;const navLinks=[...document.querySelectorAll('header nav a')];
 function currentNav(){navFrame=0;const current=navItems.map(([hash])=>document.querySelector(hash)).filter(s=>s&&s.getBoundingClientRect().top<=150).sort((a,b)=>b.getBoundingClientRect().top-a.getBoundingClientRect().top)[0];navLinks.forEach(a=>{if(current&&a.hash==='#'+current.id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}
 addEventListener('scroll',()=>{if(!navFrame)navFrame=requestAnimationFrame(currentNav);},{passive:true});currentNav();
 const final=document.createElement('section');final.className='vacation-finale';
 final.innerHTML='<div class="container"><p class="eyebrow">YOUR NEXT VACATION</p><h2>인생의 휴식처.<br><em>마이롯지.</em></h2><p>마음에 드는 공간에서 시작해,<br>비용·소유·이용 조건까지 충분히 살펴보세요.</p><div><a class="primary" href="#projects">별장 둘러보기 ↗</a><a class="outline" href="#pricing">비용·권리 확인하기</a></div><small>현재는 사전 안내 단계입니다. 이용 시작 시점은 아직 확정되지 않았습니다.</small></div>';
 document.querySelector('#progress').after(final);
})();
