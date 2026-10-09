// Chairman's vacation direction. Concept exploration only; no submissions or transactions.
(() => {
 'use strict';
 const hero=document.querySelector('.hero');if(!hero)return;
 document.body.classList.add('vacation-design');
 const photo=(name,largest,alt,eager=false)=>`<img src="assets/images/${name}-960.webp" srcset="assets/images/${name}-480.webp 480w, assets/images/${name}-960.webp 960w, assets/images/${name}-${largest}.webp ${largest}w" sizes="(max-width:700px) 100vw, 90vw" width="${largest}" height="${name==='vacation-arrival'?Math.round(largest*941/1672):Math.round(largest*2/3)}" alt="${alt}" decoding="async" ${eager?'fetchpriority="high"':'loading="lazy"'}>`;
 const heroCopy=hero.querySelector('.hero-grid>div');
 hero.querySelector('.eyebrow').textContent='MY LODGE / YOUR OWN VACATION';
 hero.querySelector('.hero-stage').textContent='함께 준비하는 공유별장';
 hero.querySelector('h1').innerHTML='<span class="title-line">나 별장있다.</span>';
 hero.querySelector('.hero-sub').textContent='친구야, 나 별장있어.';
 hero.querySelector('.hero-description').innerHTML='상류층의 꿈이던 별장,<br><strong>이제 우리도.</strong>';
 const pair=hero.querySelector('.price-pair');
 const priceNote=pair.nextElementSibling;
 hero.querySelector('.hero-photo').innerHTML=photo('vacation-arrival',1680,'바다와 소나무 사이의 첨단 모듈 별장 앞에 SUV가 도착한 휴가 장면 · AI 콘셉트',true)+'<figcaption>AI 공간 콘셉트 · 실제 부지·설계·주차 조건은 미확정</figcaption>';
 const heroLinks=hero.querySelectorAll('.hero-actions a');
 heroLinks[0].href='#villa-spaces';heroLinks[0].textContent='내 별장 상상해보기 ↗';
 heroLinks[1].href='#ownership';heroLinks[1].textContent='함께 갖는 방식 ↓';
 hero.querySelector('.hero-reassurance').textContent='공유별장 구상 · 정식 모집 전 사전 안내';
 hero.querySelector('.scroll-cue').href='#villa-spaces';
 hero.querySelector('.scroll-cue span').textContent='별장 속으로';
 hero.insertAdjacentHTML('beforeend','<div class="arrival-coordinate" aria-hidden="true"><span>BEACH · PINE · MY LODGE</span><b>도착하는 순간,<br>휴가가 시작됩니다.</b><i>01 / THE ARRIVAL</i></div>');
 const ribbon=document.querySelector('.living-ribbon');
 ribbon.innerHTML='<div>'+('<span>마이롯지</span><i>✳</i><span>MY OWN VACATION</span><i>✳</i>').repeat(3)+'</div>';

 const spaces=[
 {label:'별장 외관',tag:'01 / MY VILLA',title:'첨단의 형태.<br>고즈넉한 풍경.',copy:'부드러운 모듈 형태와 넓은 창. 자연을 가까이 두는 별장 공간을 그립니다.',name:'plan-p13',largest:1440,alt:'원기획서의 곡선형 모듈 별장 외관',note:'사업계획서 공간 콘셉트 · 확정 설계가 아닙니다',points:['곡선형 모듈 별장','넓은 유리창과 테라스','은은한 조명']},
 {label:'비치사이드',tag:'02 / BEACHSIDE',title:'바다 곁에,<br>내 주말을 세우다.',copy:'별장 앞에 차를 세우고, 바다와 소나무가 보이는 풍경으로 들어서는 휴가를 상상합니다.',name:'vacation-arrival',largest:1680,alt:'바다가 보이는 모듈 별장과 도착한 SUV',note:'AI 공간 콘셉트 · 위치·바다 접근·주차 조건은 미확정',points:['바다를 바라보는 풍경','소나무와 해안의 여유','SUV로 표현한 휴가의 도착']},
 {label:'풀파티 · 카바나',tag:'03 / POOL PARTY & CABANA',title:'풀파티와 카바나.',copy:'풀장과 프라이빗 카바나에서 즐기는 휴가.',name:'living-terrace',largest:1536,alt:'풀파티와 카바나 공간 콘셉트',note:'AI 공간 콘셉트',points:['풀사이드의 음악과 만남','카바나에서의 여유']},
 {label:'카페테리아',tag:'04 / CAFETERIA',title:'커피 한 잔,<br>이야기가 이어지는 곳.',copy:'별장에서 머무는 사람들을 위한 커피와 가벼운 식사, 편안한 대화의 공간을 구상합니다.',name:'plan-p16',largest:1440,alt:'원기획서에 담긴 별장 앞 공유 식사와 모임 공간',note:'사업계획서 생활 콘셉트 · 카페테리아 운영·메뉴·비용은 미정',points:['커피와 가벼운 식사 구상','이웃과 친구가 만나는 자리','운영 범위는 추후 안내']}
 ,{label:'마켓',tag:'05 / MARKET',title:'휴가에 필요한 즐거움.',copy:'머무는 동안 가까이에서 만나는 마켓.',name:'living-terrace',largest:1536,alt:'마켓 공간 콘셉트',note:'AI 공간 콘셉트',points:['휴가를 위한 장보기','가까운 편의 공간']},
 {label:'컨시어지',tag:'06 / CONCIERGE',title:'편안한 휴가의 시작.',copy:'도착부터 머무는 시간까지 돕는 안내 공간.',name:'living-terrace',largest:1536,alt:'컨시어지 공간 콘셉트',note:'AI 공간 콘셉트',points:['도착 안내','머무는 동안의 지원']}
 ];
 const explorer=document.createElement('section');explorer.id='villa-spaces';explorer.className='villa-spaces';
 explorer.innerHTML='<div class="container"><div class="vacation-intro"><p class="eyebrow">02 / EXPLORE YOUR VILLA</p><h2>별장이라는 공간.<br><em>내가 바라던 휴가.</em></h2><p>바다 곁의 첨단 별장, 고즈넉한 테라스와 커피 한 잔.<br>마이롯지가 그리는 공간을 하나씩 만나보세요.</p></div><div class="space-tabs" role="tablist" aria-label="별장 공간 선택">'+spaces.map((s,i)=>`<button id="space-tab-${i}" role="tab" type="button" aria-selected="${i===0}" aria-controls="space-panel-${i}" tabindex="${i===0?0:-1}"><span>0${i+1}</span>${s.label}</button>`).join('')+'</div><div class="space-panels">'+spaces.map((s,i)=>`<article class="space-panel" id="space-panel-${i}" role="tabpanel" aria-labelledby="space-tab-${i}" tabindex="0" ${i?'hidden':''}><figure>${photo(s.name,s.largest,s.alt)}<figcaption>${s.note}</figcaption></figure><div class="space-copy"><p class="eyebrow">${s.tag}</p><h3>${s.title}</h3><p>${s.copy}</p><ul>${s.points.map(p=>'<li>'+p+'</li>').join('')}</ul></div></article>`).join('')+'</div></div>';
 ribbon.after(explorer);
 const tabs=[...explorer.querySelectorAll('[role="tab"]')];const panels=[...explorer.querySelectorAll('[role="tabpanel"]')];
 function selectSpace(index,focus=false){tabs.forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===index));tab.tabIndex=i===index?0:-1;panels[i].hidden=i!==index;});if(focus){tabs[index].focus();tabs[index].scrollIntoView({block:'nearest',inline:'nearest'});}}
 tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>selectSpace(i));tab.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight')next=(i+1)%tabs.length;if(e.key==='ArrowLeft')next=(i+tabs.length-1)%tabs.length;if(e.key==='Home')next=0;if(e.key==='End')next=tabs.length-1;if(next!==undefined){e.preventDefault();selectSpace(next,true);}});});

 const invitation=document.createElement('section');invitation.className='vacation-invitation';invitation.id='our-villa';
 invitation.innerHTML='<div class="container"><p class="eyebrow">A VILLA, TOGETHER</p><div class="invitation-grid"><div><h2>누군가의 별장에서,<br><em>우리의 별장으로.</em></h2><p>한 채를 함께 준비하는 공유별장.<br>별장 생활을 더 가까운 선택으로 만드는 구상입니다.</p><a class="text-link" href="#ownership">120구좌의 공유 방식 알아보기 ↗</a></div><div class="access-facts"><p class="access-label">참여 비용 · 검토 중인 1구좌 기준</p></div></div><p class="invitation-footnote">공동 소유의 법적 구조와 이용 권리는 정식 계약 전 안내합니다.</p></div>';
 ribbon.after(invitation);invitation.after(explorer);invitation.querySelector('.access-facts').append(pair,priceNote);
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
 nature.querySelector('img').outerHTML='<img src="assets/images/resort-overview-20261006-960.webp" srcset="assets/images/resort-overview-20261006-480.webp 480w, assets/images/resort-overview-20261006-960.webp 960w, assets/images/resort-overview-20261006-1680.webp 1680w" sizes="100vw" width="1680" height="945" alt="풀장과 클럽 라운지, 해안의 모듈형 별장 단지를 하늘에서 내려다본 전체 조감도 · AI 공간 콘셉트" loading="lazy" decoding="async">';
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
 heroCopy.classList.add('vacation-hero-copy');
})();
