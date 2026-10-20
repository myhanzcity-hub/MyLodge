/* Homepage art direction. All animation is owned by a reversible GSAP context. */
(() => {
  'use strict';
  const hero = document.querySelector('#home.hero');
  if (!hero) return;
  const en = new URLSearchParams(location.search).get('lang') === 'en';
  hero.classList.add('lodge-hero');
  hero.setAttribute('aria-label', en ? 'MyLodge · Your next vacation' : '마이롯지 · 다음 휴가');
  hero.innerHTML = `
    <figure class="lodge-window">
      <div class="lodge-image-depth"><img src="assets/images/brand-villa-atmosphere-20261008-1680.webp" srcset="assets/images/brand-villa-atmosphere-20261008-480.webp 480w, assets/images/brand-villa-atmosphere-20261008-960.webp 960w, assets/images/brand-villa-atmosphere-20261008-1680.webp 1680w" sizes="100vw" width="1680" height="1120" fetchpriority="high" alt="${en ? 'A sculptural coastal villa and pool at dusk. AI architectural concept.' : '해 질 무렵, 바다를 향해 열린 곡선형 별장과 수영장. AI 건축 콘셉트.'}"></div>
      <figcaption>${en ? 'ARCHITECTURAL IMAGINATION / AI CONCEPT' : 'AI 공간 콘셉트 · 실제 현장·확정 설계가 아닙니다'}</figcaption>
    </figure>
    <div class="lodge-invitation">
      <p class="lodge-korean">${en ? 'Make room for a slower life.' : '나만의 쉼이 시작되는 곳.'}</p>
      <p class="lodge-description">${en ? 'Architecture, nature, and time well spent.<br>Discover the villa life imagined by MyLodge.' : '풍경을 들이고, 일상은 잠시 내려놓고.<br>마이롯지가 그리는 별장 생활을 만나보세요.'}</p>
      <a class="lodge-explore" href="domestic-villas.html"><span>${en ? 'Explore the villas' : '별장 둘러보기'}</span><span aria-hidden="true">↗</span></a>
    </div>
    <div class="lodge-footer"><a class="lodge-scroll" href="#our-villa"><span aria-hidden="true">↓</span> ${en ? 'Discover MyLodge' : '마이롯지의 이야기'}</a><p>${en ? 'A vision in progress. Reservations are not yet available.' : '사전 안내 단계 · 실제 모집·계약·예약은 진행되지 않습니다.'}</p><span class="lodge-edition" aria-hidden="true">THE ART OF STAYING</span></div>`;

  // Bound sticky stacking to this single transition so it cannot remain behind
  // the rest of the long homepage. The next section stays in normal flow.
  let nextSection = hero.nextElementSibling;
  while (nextSection && nextSection.tagName !== 'SECTION') nextSection = nextSection.nextElementSibling;
  if (nextSection?.id === 'our-villa') {
    const stage = document.createElement('div');
    stage.className = 'hero-transition-stage';
    hero.before(stage);
    let node = hero;
    while (node) {
      const next = node.nextElementSibling;
      stage.append(node);
      if (node === nextSection) break;
      node = next;
    }
    // ScrollTrigger positions are based on document flow; refresh after wrapping.
    requestAnimationFrame(() => window.ScrollTrigger?.refresh());
  }

  // Static markup remains fully usable when either library is unavailable.
  const { gsap, ScrollTrigger } = window;
  if (!gsap || !ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  let media;
  let entered = false;
  function mount() {
    if (media) return;
    media = gsap.matchMedia();
    media.add({ desktop: '(min-width: 701px)', mobile: '(max-width: 700px)', reduce: '(prefers-reduced-motion: reduce)' }, context => {
      if (context.conditions.reduce) return;
      const desktop = context.conditions.desktop;
      if (!entered && scrollY < hero.offsetHeight / 2) {
        entered = true;
        // The photograph settles like a slow camera pull-back. Entrance uses
        // the image; scroll uses its wrapper, avoiding competing transforms.
        gsap.timeline({ defaults: { ease: 'power3.out' } })
          .from('.lodge-image-depth img', { scale: desktop ? 1.13 : 1.08, duration: 2.6, clearProps: 'transform' }, 0);
      }
      // Overscan keeps the photograph edge-to-edge throughout native scroll.
      gsap.timeline({ scrollTrigger: { id: 'lodge-hero-cinematic', trigger: hero, start: 'top top', end: 'bottom top', scrub: .8, invalidateOnRefresh: true }, defaults: { ease: 'none' } })
        .to('.lodge-image-depth', { yPercent: desktop ? 8 : 3 }, 0)
        .to('.lodge-heading', { y: desktop ? -45 : -18 }, 0);

    }, hero);
  }
  function unmount() { media?.revert(); media = null; }
  mount();
  addEventListener('pagehide', unmount);
  addEventListener('pageshow', mount);
})();
