// Supplied brand artwork and an in-page guide. Links lead to existing sections.
(() => {
 'use strict';
 const logo='assets/brand/mylodge-logo-transparent-20261007.webp';
 const character='assets/brand/mylodge-character.webp';
 const main=document.querySelector('#main');
 if(main?.querySelector('#home.hero')){
  const mural=document.createElement('figure');
  mural.className='pre-footer-mural';
  mural.setAttribute('aria-labelledby','pre-footer-mural-title');
  mural.innerHTML='<img src="assets/brand/imageBeach.png" width="1983" height="793" sizes="100vw" alt="마이롯지 해안 별장과 치앙마이 별장을 그린 수채화 건축 일러스트 · AI 콘셉트" loading="lazy" decoding="async"><figcaption class="pre-footer-mural-copy"><p>YOUR NEXT VACATION</p><h1 id="pre-footer-mural-title">Your haven in life.<br>MyLodge.</h1></figcaption>';
  document.querySelector('footer')?.before(mural);
 }
 const header=document.querySelector('.header-inner');
 if(header){
  const language=document.createElement('details');
  language.className='language-slot';
  language.innerHTML=`<summary aria-label="언어 선택 · 현재 한국어"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/></svg><span class="language-full">한국어</span><span class="language-short" aria-hidden="true">KO</span><span class="language-chevron" aria-hidden="true">⌄</span></summary><div class="language-panel"><p class="language-heading">LANGUAGE</p><ul><li><span lang="ko" class="language-current" aria-current="true">한국어 <span>✓</span></span></li><li><a lang="en" href="?lang=en">English</a></li></ul><p class="language-note">한국어와 영어로 둘러볼 수 있습니다.</p></div>`;
  header.insertBefore(language,header.querySelector('.menu-button'));
  language.addEventListener('toggle',()=>{const button=header.querySelector('.menu-button');if(language.open&&button?.getAttribute('aria-expanded')==='true'){document.querySelector('#mobile-menu').hidden=true;button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','메뉴 열기');}});
  document.addEventListener('click',event=>{if(!language.contains(event.target))language.open=false;});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&language.open){language.open=false;language.querySelector('summary').focus();}});
 }
 const brand=document.querySelector('header .brand');
 if(brand){
  brand.classList.add('artwork-brand');
  brand.setAttribute('aria-label','마이롯지 홈');
  brand.innerHTML=`<span class="logo-symbol" aria-hidden="true"><img src="${logo}" alt="" width="1536" height="1024"></span><span class="logo-wordmark" aria-hidden="true"><img src="${logo}" alt="" width="1536" height="1024"></span>`;
 }
 const footer=document.querySelector('.footer-top>div') || document.querySelector('footer>.container');
 if(footer){
  if(footer.closest('.footer-top')){footer.querySelector('.eyebrow')?.remove();footer.querySelector('h3')?.remove();}
  const image=document.createElement('img');image.src=logo;image.alt='MyLodge 마이롯지';image.width=1536;image.height=1024;image.className='footer-brand-art';image.loading='lazy';footer.prepend(image);
 }
 const invitation=document.querySelector('#our-villa>.container');
 if(invitation){
  const guide=document.createElement('aside');guide.className='lodge-guide';guide.setAttribute('aria-labelledby','welcome-guide-title');
  guide.innerHTML=`<img class="guide-character" src="${character}" alt="손을 들어 마이롯지를 안내하는 집 모양 캐릭터" width="1254" height="1254" loading="lazy"><div class="guide-copy"><span class="guide-kicker">마이롯지 길잡이</span><h3 id="welcome-guide-title">반가워요! 마이롯지를 함께 둘러볼까요?</h3><p>어떤 별장인지 먼저 보고, 함께 준비하는 방법도 알아보세요.</p><nav class="guide-links" aria-label="마이롯지 둘러보기"><a href="#villa-spaces">시설 둘러보기 <span aria-hidden="true">↗</span></a><a href="#ownership">함께 준비하는 방법 <span aria-hidden="true">↗</span></a><a href="#pricing">비용·권리 살펴보기 <span aria-hidden="true">↗</span></a></nav></div>`;
  invitation.prepend(guide);
 }
 const ownership=document.querySelector('#ownership>.container');
 if(ownership){
  const guide=document.createElement('aside');guide.className='lodge-guide guide-compact';guide.setAttribute('aria-labelledby','ownership-guide-title');
  guide.innerHTML=`<img class="guide-character" src="${character}" alt="" width="1254" height="1254" loading="lazy"><div class="guide-copy"><span class="guide-kicker">다음으로 함께 살펴봐요</span><h3 id="ownership-guide-title">얼마를 준비하고, 어떤 권리를 갖게 될까요?</h3><p>참여 금액과 소유·이용 조건을 한곳에서 살펴보세요.</p><a class="guide-next" href="#pricing">비용과 권리 알아보기 <span aria-hidden="true">→</span></a></div>`;
  ownership.append(guide);
 }
})();

// Public homepage: introduce the brand and its places, without unconfirmed terms.
(() => {
 // Homepage composition must not depend on the optional hero film.
 if(!document.querySelector('#home.hero'))return;
 document.body.classList.add('promotion-home');
 const $=selector=>document.querySelector(selector);
 const cards=items=>'<div class="promotion-cards">'+items.map(([title,copy],i)=>`<article><span class="eyebrow">0${i+1}</span><h3>${title}</h3><p>${copy}</p></article>`).join('')+'</div>';
 $('#our-villa .invitation-grid').innerHTML='<div><h2>멀게만 느껴졌던 별장,<br><em>이제는 우리 일상 가까이.</em></h2><p>한 채를 함께 준비하는 별장 구상.<br>공간과 참여 방식을 둘러보세요.</p><a class="text-link" href="#villa-spaces">시설 둘러보기 ↗</a></div><figure class="promotion-intro-photo"><img src="assets/images/vacation-arrival-960.webp" width="960" height="540" loading="lazy" alt="바다 곁 모듈형 별장과 여유로운 테라스 · AI 콘셉트"></figure>';
 $('#our-villa .eyebrow').textContent='마이롯지 / 우리의 이야기';
 $('#our-villa .invitation-footnote')?.remove();
 const guide=$('#our-villa .lodge-guide');
 guide.classList.add('guide-editorial');
 guide.querySelector('.guide-copy>p').remove();
 guide.innerHTML='<div class="guide-editorial-heading"><div><span class="guide-kicker">마이롯지 길잡이 · START HERE</span><h3 id="welcome-guide-title">내 별장에서 누리는 사치스러운 행복</h3><p>나만의 별장에서 누리는 특별한 순간. 그리고 소중한 사람들과 함께 나누는 행복.</p></div><a class="guide-service-link" href="#stay-services">컨시어지 살펴보기 <span aria-hidden="true">↗</span></a></div><div class="guide-editorial-grid"><a class="guide-story-card guide-place-card" href="#villa-spaces"><figure><img src="assets/brand/Dronepicture.png" sizes="(max-width: 700px) 100vw, 66vw" width="1672" height="941" alt="바닷가의 마이롯지 빌라와 중앙 수영장 · 공간 콘셉트" loading="lazy" decoding="async"><figcaption>AI 공간 콘셉트 · 실제 현장·확정 설계가 아닙니다</figcaption></figure><div class="guide-story-copy"><span class="guide-story-label">01 / THE PLACE</span><h4>나만의 별장, 특별한 일상</h4><p>언제나 꿈꿔왔던 여유와 품격. 나만의 별장에서 일상 이상의 행복을 경험하세요.</p><span class="guide-story-action">시설 둘러보기 <b aria-hidden="true">↗</b></span></div></a><a class="guide-story-card guide-life-card" href="#ownership"><figure><img src="assets/brand/SocialLife.png" width="1671" height="941" sizes="(max-width: 700px) 100vw, 33vw" alt="별장에서 저녁을 함께 나누는 사람들 · AI 생활 콘셉트" loading="lazy" decoding="async"><figcaption>AI 생활 콘셉트 · 실제 고객·서비스 장면이 아닙니다</figcaption></figure><div class="guide-story-copy"><span class="guide-story-label">02 / OWNER LIFE</span><h4>지인에게 별장을 선사하세요</h4><p>친구를 초대하고, 소중한 사람에게 특별한 하루를 선물하세요. 당신의 별장에서 함께한 순간은 오래도록 기억될 소중한 추억이 됩니다.</p><span class="guide-story-action">별장 라이프 알아보기 <b aria-hidden="true">→</b></span></div></a></div>';
 $('#ownership>.container').innerHTML='<div class="intro"><p class="eyebrow">LIFE AT MY LODGE</p><h2>마이롯지가 그리는 오너의 하루.</h2></div>'+cards([
  ['나만의 속도로 쉬는 시간.','커피와 책, 서두르지 않는 하루.'],
  ['나와 비슷한 사람들과.','관심사를 나누는 사람들과의 만남.'],
  ['새로운 계획이 시작되는 곳.','쉼에서 시작되는 새로운 아이디어.']
 ])+'<a class="text-link promotion-section-link" href="#nature">마이롯지가 그리는 풍경 ↗</a>';
 // Preserve the October 6 public presentation; historical content stays in app.js.
 for(const id of ['pricing','participation','progress'])$('#'+id)?.remove();
 $('.mobile-cta')?.remove();
 for(const node of document.querySelectorAll('.scenic-note')){
  if(node.closest('#villa-spaces')&&document.querySelector('#villa-spaces .facility-selector'))continue;
  node.remove();
 }
 $('#projects .intro p').textContent='주문진과 양양에서 그리는 마이롯지의 공간 콘셉트.';
 $('.project-intro-note')?.remove();
 $('.project-common')?.remove();
 document.querySelectorAll('.project').forEach((project,i)=>{
  project.querySelector('.project-fact-mini')?.remove();
  project.querySelector('.location')?.remove();
  project.querySelector('.badge')?.remove();
  project.querySelector('.project-region-copy').textContent=i?'숲과 바다 사이, 휴식과 활기찬 만남이 어우러지는 별장 생활을 그립니다.':'해안의 풍경을 가까이 두고, 느긋한 하루를 보내는 별장 공간을 그립니다.';
 });
 $('#stay-services>.container').innerHTML='<div class="intro"><p class="eyebrow">MY LODGE / CONCIERGE</p><h2>휴식에 집중할 수 있도록.</h2><p>방문 준비부터 공간 관리까지, 편안한 머무름을 돕는 서비스를 구상합니다.</p></div>'+cards([
  ['머무름의 준비','방문 전 필요한 준비와 안내를 한곳에서 살펴보는 경험.'],
  ['공간을 돌보는 손길','청소와 침구 등 편안한 별장 생활을 위한 관리 서비스 구상.'],
  ['다음 여행으로','다른 지역에서의 머무름과 교환 가능성을 살펴보는 경험.']
 ])+'<p class="promotion-service-note">컨시어지는 서비스 구상이며, 현재 예약·신청은 제공하지 않습니다.</p>';
 $('#brand-paths .path-card h3').textContent='마이롯지의 별장 생활.';
 $('#brand-paths .path-card p').textContent='별장 주인들의 이야기를 만나보세요.';
 $('#brand-paths .path-card b').textContent='오너 혜택 ↗';
 $('#brand-paths .valley-path small')?.remove();
 $('.vacation-finale>.container>p:not(.eyebrow)').remove();
 $('.vacation-finale .outline').href='#villa-spaces';
 $('.vacation-finale .outline').textContent='시설 둘러보기';
 $('.vacation-finale small')?.remove();
 for(const node of document.querySelectorAll('.space-panel figcaption,.life-caption,#nature figcaption'))node.textContent=node.textContent.startsWith('사업계획서')?'마이롯지 공간 콘셉트':'AI 공간·생활 콘셉트';
 const lastSpacePoint=$('.space-panel:last-child li:last-child');if(lastSpacePoint)lastSpacePoint.textContent='편안한 대화와 만남';
 $('#vision .vision-heading>p')&&( $('#vision .vision-heading>p').textContent='마이롯지가 그리는 공간의 전체 풍경입니다.' );
 $('#vision figcaption').textContent='마이롯지 공간 조성 콘셉트';
 $('#lifestyle .image-note')&&( $('#lifestyle .image-note').textContent='마이롯지가 그리는 생활 · AI 콘셉트 이미지' );
 const footer=$('.footer-top');
 for(const child of [...footer.children].slice(1))child.remove();
 footer.querySelector('p')?.remove();
 const footerNav=document.createElement('nav');footerNav.className='footer-nav';footerNav.setAttribute('aria-label','푸터 메뉴');
 footerNav.innerHTML='<div><h4>마이롯지</h4><a href="#our-villa">마이롯지 소개</a><a href="#brand-paths">두 가지 머무름</a></div><div><h4>둘러보기</h4><a href="#villa-spaces">시설 둘러보기</a><a href="#ownership">오너의 하루</a><a href="#stay-services">컨시어지</a></div><div><h4>목적지</h4><a href="domestic-villas.html">국내 별장</a><a href="business-valley.html">Business Valley</a></div>';
 footer.append(footerNav);
 $('.footer-links')?.remove();
 $('.footer-disclaimer').textContent='마이롯지 브랜드와 공간 콘셉트를 소개합니다. 이미지는 AI 공간·생활 콘셉트이며, 실제 시설을 나타내지 않습니다. 소유·이용 및 서비스 조건은 공식 상품 안내와 계약에서 확인해 주세요.';
 $('.copyright').textContent='© 2026 MY LODGE.';
 const footerBottom=document.createElement('div');footerBottom.className='footer-bottom';
 const footerDisclaimer=$('.footer-disclaimer'),copyright=$('.copyright');
 footerDisclaimer.before(footerBottom);footerBottom.append(footerDisclaimer,copyright);
 for(const link of document.querySelectorAll('a[href="#pricing"]')){if(link.closest('#home'))continue;link.href='#ownership';link.textContent='오너 혜택 ↗';}
 const description='일상을 휴가처럼. 자연 속 여유, 새로운 만남, 모듈형 별장 공간을 소개하는 마이롯지 브랜드 사이트.';
 for(const node of document.querySelectorAll('meta[name="description"],meta[property="og:description"]'))node.content=description;
})();
