// Shared destination-page identity. Language links are populated by detail-pages.js.
(() => {
 'use strict';
 const header=document.querySelector('.header-inner');
 const menuButton=header?.querySelector('.menu-button');
 const brand=header?.querySelector('.brand');

 if(brand){
  brand.classList.add('artwork-brand');
  brand.setAttribute('aria-label','마이롯지 홈');
  const logo='../assets/brand/mylodge-logo-transparent-20261007.webp';
  brand.innerHTML=`<span class="logo-symbol" aria-hidden="true"><img src="${logo}" alt="" width="1536" height="1024"></span><span class="logo-wordmark" aria-hidden="true"><img src="${logo}" alt="" width="1536" height="1024"></span>`;
 }
 if(menuButton)menuButton.innerHTML='MENU <span aria-hidden="true">＋</span>';

 if(header&&!header.querySelector('.language-slot')){
  const language=document.createElement('details');
  language.className='language-slot';
  language.innerHTML='<summary aria-label="언어 선택 · 현재 한국어"><span class="language-full">한국어</span><span class="language-short" aria-hidden="true">KO</span><span class="language-chevron" aria-hidden="true">⌄</span></summary><div class="language-panel"><p class="language-heading">LANGUAGE</p><ul><li><span lang="ko" class="language-current" aria-current="true">한국어 ✓</span></li><li><a lang="en" href="?lang=en">English</a></li></ul><p class="language-note">한국어와 영어로 둘러볼 수 있습니다.</p></div>';
  header.insertBefore(language,menuButton||null);
  language.addEventListener('toggle',()=>{
   if(!language.open)return;
   header.querySelectorAll('.park-nav-group').forEach(group=>group.open=false);
   if(menuButton?.getAttribute('aria-expanded')==='true'){
    const mobileMenu=document.getElementById('mobile-menu');
    if(mobileMenu)mobileMenu.hidden=true;
    menuButton.setAttribute('aria-expanded','false');
    menuButton.setAttribute('aria-label',document.documentElement.lang==='en'?'Open menu':'메뉴 열기');
   }
  });
  document.addEventListener('click',event=>{
   if(!language.contains(event.target))language.open=false;
  });
  document.addEventListener('keydown',event=>{
   if(event.key==='Escape'&&language.open){
    language.open=false;
    language.querySelector('summary').focus();
   }
  });
 }

 const footer=document.querySelector('footer > .container');
 if(footer&&!footer.querySelector('.footer-wordmark')){
  const content=document.createElement('div');
  content.className='footer-content';
  while(footer.firstChild)content.append(footer.firstChild);
  const wordmark=document.createElement('div');
  wordmark.className='footer-wordmark';
  wordmark.innerHTML='MY LODGE<span>OWN THE EXTRAORDINARY.</span>';
  const disclaimer=document.createElement('p');
  disclaimer.className='footer-disclaimer';
  disclaimer.dataset.en='Images show AI-generated space and lifestyle concepts, not actual facilities or operations. Services, owner features and SWAP are planning concepts. Availability and timing are not confirmed. Ownership, registration, inheritance, prices and payment schedules will be explained separately against the approved terms.';
  disclaimer.textContent='이미지는 AI 공간·생활 콘셉트이며 실제 시설과 운영 모습이 아닙니다. 서비스·오너 기능·SWAP은 기획 시안으로 제공 범위와 일정은 확정 전입니다. 소유·등기·상속·가격·분납 조건은 승인 자료에 따라 별도 안내합니다.';
  footer.append(wordmark,content,disclaimer);
 }
})();
