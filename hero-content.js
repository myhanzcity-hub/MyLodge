// The homepage hero's only content renderer. Loaded before app.js.
(() => {
  'use strict';
  const language = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'ko';
  const copy = Object.freeze(language === 'en' ? {
    headline: ['I Have a Villa', 'of My Own.'],
    description: 'Shared ownership brings the dream of a private seaside villa within reach.',
    primary: 'Explore Villas',
    disclosure: 'Concept imagery. Availability, reservations, and product applications are not currently available.',
    alt: 'A sculptural coastal villa and pool at dusk. AI architectural concept.',
  } : {
    headline: ['나도 별장오너.'],
    description: '꿈같은 별장, 마이롯지와 함께 현실이 되다.',
    primary: '별장 둘러보기',
    disclosure: 'AI 공간 콘셉트입니다. 현재 예약 및 상품 신청은 제공되지 않습니다.',
    alt: '바닷가 모듈형 빌라 리조트의 시네마틱 드론 전경.',
  });
  const render = () => `<section id="home" class="hero lodge-hero lodge-video-hero" data-hero-language="${language}" aria-label="${copy.headline.join(' ')}">
    <figure class="lodge-window">
      <div class="lodge-image-depth">
        <img src="/assets/images/MainCity.png" width="1672" height="941" fetchpriority="high" alt="${copy.alt}">
        <video class="lodge-hero-video" autoplay muted loop playsinline preload="metadata" poster="/assets/images/MainCity.png" aria-hidden="true"><source src="/assets/video/MainCity.mp4" type="video/mp4"></video>
      </div>
    </figure>
    <div class="lodge-content">
      <div class="lodge-heading"><h1>${copy.headline.join(' <br>')}</h1></div>
      <div class="lodge-invitation">
        <p class="lodge-description">${copy.description}</p>
        <div class="lodge-actions">
          <a class="lodge-explore" href="#ownership-pricing"><span>${copy.primary}</span> <span aria-hidden="true">↗</span></a>
        </div>
        <p class="lodge-disclosure">${copy.disclosure}</p>
      </div>
    </div>
    <div class="lodge-media-controls" role="group" aria-label="${language === 'ko' ? '히어로 미디어 제어' : 'Hero media controls'}">
      <button class="lodge-media-control" data-video-toggle type="button" aria-label="${language === 'ko' ? '히어로 영상 재생' : 'Play hero video'}"><svg data-icon-play viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10-6.5z"/></svg><svg data-icon-pause viewBox="0 0 24 24" aria-hidden="true" hidden><path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z"/></svg></button>
      <button class="lodge-media-control" data-music-toggle type="button" aria-label="${language === 'ko' ? '음악 켜기' : 'Turn music on'}" aria-pressed="false"><svg data-icon-volume viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9.5a4 4 0 0 1 0 5"/><path d="M18.5 7a7.5 7.5 0 0 1 0 10"/></svg><svg data-icon-muted viewBox="0 0 24 24" aria-hidden="true" hidden><path d="M4 9v6h4l5 4V5L8 9z"/><path d="m17 9 5 6m0-6-5 6"/></svg></button>
    </div>
  </section>`;
  window.MyLodgeHero = Object.freeze({ render });
})();
