// Supplied brand artwork and an in-page guide. Links lead to existing sections.
(() => {
 'use strict';
 const logo='assets/brand/mylodge-logo-transparent-20261007.webp';
 const character='assets/brand/mylodge-character.webp';
 const header=document.querySelector('.header-inner');
 if(header){
  const language=document.createElement('details');
  language.className='language-slot';
  language.innerHTML=`<summary aria-label="언어 선택 · 현재 한국어"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/></svg><span class="language-full">한국어</span><span class="language-short" aria-hidden="true">KO</span><span class="language-chevron" aria-hidden="true">⌄</span></summary><div class="language-panel"><p class="language-heading">LANGUAGE</p><ul><li><span lang="ko" class="language-current" aria-current="true">한국어 <span>✓</span></span></li><li><button type="button" lang="en" disabled>English <small lang="ko">준비 중</small></button></li><li><button type="button" lang="zh" disabled>中文 <small lang="ko">준비 중</small></button></li><li><button type="button" lang="ja" disabled>日本語 <small lang="ko">준비 중</small></button></li></ul><p class="language-note">다국어 페이지를 준비하고 있습니다.</p></div>`;
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
 if(!document.querySelector('.film-stage'))return;
 document.body.classList.add('promotion-home');
 const $=selector=>document.querySelector(selector);
 const cards=items=>'<div class="promotion-cards">'+items.map(([title,copy],i)=>`<article><span class="eyebrow">0${i+1}</span><h3>${title}</h3><p>${copy}</p></article>`).join('')+'</div>';
 $('#our-villa .invitation-grid').innerHTML='<div><h2>누군가의 별장에서,<br><em>우리의 별장으로.</em></h2><p>일상을 휴가처럼.<br>자연 속 여유와 새로운 만남이 있는 별장 생활을 그립니다.</p><a class="text-link" href="#villa-spaces">시설 둘러보기 ↗</a></div><figure class="promotion-intro-photo"><img src="assets/images/vacation-arrival-960.webp" width="960" height="540" loading="lazy" alt="바다 곁 모듈형 별장과 여유로운 테라스 · AI 콘셉트"></figure>';
 $('#our-villa .eyebrow').textContent='MY LODGE / OUR STORY';
 $('#our-villa .invitation-footnote')?.remove();
 const guide=$('#our-villa .lodge-guide');
 guide.querySelector('h3').textContent='어디부터 둘러볼까요?';
 guide.querySelector('.guide-copy>p').remove();
 guide.querySelector('.guide-links').innerHTML='<a href="#villa-spaces">시설 둘러보기 ↗</a><a href="#ownership">별장 주인들에게 ↗</a><a href="#stay-services">컨시어지 ↗</a>';
 $('#ownership>.container').innerHTML='<div class="intro"><p class="eyebrow">FOR OUR VILLA OWNERS</p><h2>별장 주인들에게.<br>나만의 시간, 함께하는 경험.</h2></div>'+cards([
  ['내 안에 완벽한 여유.','커피와 책 한 권, 나의 속도로 쉬는 시간.'],
  ['나와 비슷한 사람들과.','같은 관심사를 가진 사람들과 이야기를 나누는 자리.'],
  ['새로운 계획이 시작되는 곳.','쉬면서 떠오른 아이디어를 대화로 이어가는 시간.']
 ])+'<a class="text-link promotion-section-link" href="#nature">마이롯지가 그리는 풍경 ↗</a>';
 for(const id of ['pricing','participation','progress'])$('#'+id)?.remove();
 $('.mobile-cta')?.remove();
 for(const node of document.querySelectorAll('.scenic-note'))node.remove();
 $('#projects .intro p').textContent='주문진과 양양에서 그리는 마이롯지의 공간 콘셉트.';
 $('.project-intro-note')?.remove();
 $('.project-common')?.remove();
 document.querySelectorAll('.project').forEach((project,i)=>{
  project.querySelector('.project-fact-mini')?.remove();
  project.querySelector('.location')?.remove();
  project.querySelector('.badge')?.remove();
  project.querySelector('.project-region-copy').textContent=i?'숲과 바다 사이, 휴식과 활기찬 만남이 어우러지는 별장 생활을 그립니다.':'해안의 풍경을 가까이 두고, 느긋한 하루를 보내는 별장 공간을 그립니다.';
 });
 $('#stay-services>.container').innerHTML='<div class="intro"><p class="eyebrow">MY LODGE / CONCIERGE</p><h2>휴식에 집중할 수 있도록.</h2><p>도착 전 준비부터 머무는 동안의 관리까지.</p></div>'+cards([
  ['방문 안내','방문 전에 필요한 정보와 준비 사항 안내.'],
  ['공간 관리','청소와 침구 등 별장 공간을 돌보는 서비스.'],
  ['다음 여행 안내','다른 지역의 별장으로 이어지는 여행 소개.']
 ])+'<p class="promotion-service-note">컨시어지는 서비스 구상이며, 현재 예약·신청은 제공하지 않습니다.</p>';
 $('#brand-paths .path-card h3').textContent='마이롯지의 별장 생활.';
 $('#brand-paths .path-card p').textContent='별장 주인들의 이야기를 만나보세요.';
 $('#brand-paths .path-card b').textContent='별장 주인들에게 ↗';
 $('#brand-paths .valley-path small')?.remove();
 $('.vacation-finale>.container>p:not(.eyebrow)').remove();
 $('.vacation-finale .outline').href='#villa-spaces';
 $('.vacation-finale .outline').textContent='시설 둘러보기';
 $('.vacation-finale small')?.remove();
 for(const node of document.querySelectorAll('.space-panel figcaption,.life-caption,#nature figcaption'))node.textContent=node.textContent.startsWith('사업계획서')?'마이롯지 공간 콘셉트':'AI 공간·생활 콘셉트';
 $('.space-panel:last-child li:last-child').textContent='편안한 대화와 만남';
 $('#vision .vision-heading>p')&&( $('#vision .vision-heading>p').textContent='마이롯지가 그리는 공간의 전체 풍경입니다.' );
 $('#vision figcaption').textContent='마이롯지 공간 조성 콘셉트';
 $('#lifestyle .image-note')&&( $('#lifestyle .image-note').textContent='마이롯지가 그리는 생활 · AI 콘셉트 이미지' );
 const footer=$('.footer-top');
 for(const child of [...footer.children].slice(1))child.remove();
 footer.querySelector('p').innerHTML='일상을 휴가처럼.<br>여유와 만남이 있는 별장 생활, 마이롯지.';
 $('.footer-links')?.remove();
 $('.footer-disclaimer').textContent='마이롯지 브랜드·공간 소개 사이트입니다. 이미지는 AI 및 기획 콘셉트로 실제 시설을 나타내지 않습니다. 별장과 서비스의 세부 안내는 확정 후 공개합니다.';
 $('.copyright').textContent='© 2026 MY LODGE.';
 $('.hero-reassurance').textContent='일상을 휴가처럼 · MY LODGE';
 for(const link of document.querySelectorAll('a[href="#pricing"]')){link.href='#ownership';link.textContent='별장 주인들에게 ↗';}
 const description='일상을 휴가처럼. 자연 속 여유, 새로운 만남, 모듈형 별장 공간을 소개하는 마이롯지 브랜드 사이트.';
 for(const node of document.querySelectorAll('meta[name="description"],meta[property="og:description"]'))node.content=description;
})();
