// The homepage hero's only content renderer. Loaded before app.js.
(() => {
  'use strict';
  const language = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'ko';
  const copy = Object.freeze(language === 'en' ? {
    eyebrow: 'MYLODGE · A NEW WAY TO LIVE',
    headline: ['I Have a Villa', 'of My Own.'],
    description: 'A private seaside villa once felt out of reach. Shared ownership brings the dream of having your first villa closer.',
    primary: 'Explore Villas', secondary: 'Explore Parks',
    pricing: 'USD 3,999 per share · First installment USD 100',
    pricingNote: '1/120 ownership interest per villa · Luxury option +USD 150 per share',
    alt: 'A sculptural coastal villa and pool at dusk. AI architectural concept.',
    caption: 'ARCHITECTURAL IMAGINATION / AI CONCEPT'
  } : {
    eyebrow: 'MYLODGE · 새로운 별장 라이프',
    headline: ['나,', '별장 있다.'],
    description: '혼자 갖기엔 멀었던 바닷가 독채 별장. 함께 소유하는 방식으로, 이제 나의 첫 별장이 됩니다.',
    primary: '분양상품 보기', secondary: '파크 둘러보기',
    pricing: '1구좌 USD 3,999 · 1차 USD 100부터',
    pricingNote: '빌라 1/120 지분 기준 · 럭셔리형 구좌당 USD 150 추가',
    alt: '해 질 무렵, 바다를 향해 열린 곡선형 별장과 수영장. AI 건축 콘셉트.',
    caption: 'AI 공간 콘셉트'
  });
  const render = () => `<section id="home" class="hero lodge-hero${language === 'ko' ? ' lodge-video-hero' : ''}" data-hero-language="${language}" aria-label="${copy.headline.join(' ')}">
    <figure class="lodge-window">
      <div class="lodge-image-depth">
        <img src="assets/images/brand-villa-atmosphere-20261008-1680.webp" srcset="assets/images/brand-villa-atmosphere-20261008-480.webp 480w, assets/images/brand-villa-atmosphere-20261008-960.webp 960w, assets/images/brand-villa-atmosphere-20261008-1680.webp 1680w" sizes="max(100vw, 180svh)" width="1680" height="1120" fetchpriority="high" alt="${copy.alt}">
        ${language === 'ko' ? '<video class="lodge-hero-video" muted loop playsinline preload="metadata" poster="assets/images/brand-villa-atmosphere-20261008-1680.webp" aria-hidden="true"><source src="assets/video/Beach2.mp4" type="video/mp4"></video>' : ''}
      </div>
      <figcaption>${copy.caption}</figcaption>
    </figure>
    <div class="lodge-content">
      <div class="lodge-heading"><p class="lodge-kicker">${copy.eyebrow}</p><h1>${copy.headline.join(' <br>')}</h1></div>
      <div class="lodge-invitation">
        <p class="lodge-description">${copy.description}</p>
        <div class="lodge-actions">
          <a class="lodge-explore" href="#ownership-pricing"><span>${copy.primary}</span> <span aria-hidden="true">↗</span></a>
          <a class="lodge-lifestyle" href="domestic-villas.html">${copy.secondary}</a>
        </div>
        <div class="lodge-pricing-strip" aria-label="${copy.pricing}"><strong>${copy.pricing}</strong><small>${copy.pricingNote}</small></div>
      </div>
    </div>
    ${language === 'ko' ? '<button class="lodge-video-toggle" type="button" aria-label="히어로 영상 재생">영상 재생 ▶</button>' : '<div class="lodge-footer"><a class="lodge-scroll" href="#our-villa"><span aria-hidden="true">↓</span> Discover MyLodge</a><p>A vision in progress. Reservations are not yet available.</p><span class="lodge-edition" aria-hidden="true">THE ART OF STAYING</span></div>'}
  </section>`;
  window.MyLodgeHero = Object.freeze({ render });
})();
