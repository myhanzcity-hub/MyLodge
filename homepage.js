// Final homepage content and section order. Existing artwork, video, and controls stay in place.
(() => {
  'use strict';
  const main = document.querySelector('#main');
  if (!main?.querySelector('#home.hero')) return;

  const english = new URLSearchParams(location.search).get('lang') === 'en';
  // Both homepage languages are authored explicitly; prevent browser auto-translation.
  document.documentElement.setAttribute('translate', 'no');
  const t = (ko, en) => english ? en : ko;
  const motionAllowed = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const villaTypes = {
    deluxe: {
      name: 'Deluxe',
      nameKo: '디럭스',
      floors: 1,
      indoorAreaM2: 33,
      basePrice: 3999,
      luxuryPackagePrice: 199,
    },
    suite: {
      name: 'Prestige',
      nameKo: '프레스티지',
      floors: 2,
      indoorAreaM2: 66,
      basePrice: 5999,
      luxuryPackagePrice: 390,
    },
  };
  // Set window.HANZCITY_AUTH_URL in the site configuration when the real authentication URL is supplied.
  const authUrlValue = String(window.HANZCITY_AUTH_URL || '').trim();
  let authUrl = '';
  try {
    const candidate = new URL(authUrlValue);
    if (['https:', 'http:'].includes(candidate.protocol)) authUrl = candidate.href;
  } catch { /* Keep registration unavailable until a valid URL is configured. */ }
  const money = amount => `$${new Intl.NumberFormat('en-US').format(amount)}`;
  const route = (file, hash = '') => {
    const url = new URL(file, location.href);
    const params = new URLSearchParams(location.search);
    for (const key of ['lang', 'screen-frame']) if (params.has(key)) url.searchParams.set(key, params.get(key));
    url.hash = hash;
    return url.pathname + url.search + url.hash;
  };

  // Why MyLodge: lead with the emotional value of ownership, then show how the model works.
  const why = main.querySelector('#our-villa');
  if (why) {
    why.lang = english ? 'en' : 'ko';
    if (english) why.setAttribute('translate', 'no');
    why.setAttribute('aria-labelledby', 'why-title');
    const label = why.querySelector('.eyebrow');
    if (label) label.textContent = t('WHY MYLODGE', 'WHY MYLODGE');
    const grid = why.querySelector('.invitation-grid');
    const photo = grid?.querySelector('figure');
    const guide = why.querySelector('.lodge-guide');
    if (grid) {
      grid.innerHTML = `<div class="why-copy"><h2 id="why-title">${t('내 별장에서 누리는 사치스러운 행복', 'The Luxury of My Own Villa.')}</h2>
        <div class="why-copy-story">
          <p>${t('친구들을 내 별장에 초대해 특별한 휴가를 함께하세요.', 'Welcome friends to your villa and share an unforgettable getaway.')}</p>
          <p>${t('함께한 시간은 오래 기억되고, 그 순간을 만든 당신도 특별한 사람으로 남습니다.', 'Your guests will remember you as someone special for sharing your villa.')}</p>
        </div></div>${photo ? photo.outerHTML : ''}`;
      if (label) grid.before(label);
      const facts = document.createElement('ul');
      facts.className = 'ownership-facts';
      facts.setAttribute('aria-label', t('공동 소유 방식과 연간 이용 안내', 'Shared ownership and annual usage overview'));
      facts.innerHTML = `
        <li class="ownership-fact-shares">
          <span class="ownership-fact-number">01</span>
          <strong><span data-share-count>120</span> ${t('소유 구좌', 'Ownership Shares')}</strong>
          <p>${t('빌라 한 채는 120개 소유 구좌로 구성됩니다.', 'Each villa is divided into 120 ownership shares.')}</p>
        </li>
        <li class="ownership-fact-interest">
          <span class="ownership-fact-number">02</span>
          <strong class="ownership-ratio-final">1 / 120</strong>
          <span class="ownership-ratio-preview" aria-hidden="true" hidden><span class="ownership-ratio-one">1 ${t('구좌', 'share')}</span><span class="ownership-ratio-equals">=</span><span class="ownership-ratio-denominator"><span data-ownership-denominator>120</span><small>${t('전체 구좌', 'total shares')}</small></span></span>
          <span class="ownership-ratio-label">${t('나의 소유 지분', 'Your Ownership Share')}</span>
          <p>${t('각 구좌는 빌라의 1/120 지분을 의미하며, 최종 소유 조건은 계약에 따릅니다.', 'Each share represents a 1/120 interest in a villa, subject to the final ownership agreement.')}</p>
        </li>
        <li class="ownership-fact-annual">
          <span class="ownership-fact-number">03</span>
          <strong class="ownership-annual-value">${english ? '<span data-annual-number>1</span> Night, <span data-annual-number>2</span> Days × <span data-annual-number>3</span> Stays' : '<span data-annual-number>1</span>박 <span data-annual-number>2</span>일 × <span data-annual-number>3</span>회'}</strong>
          <p>${t('구좌당 연간 3회 이용을 기준으로 하며, 예약 가능 여부가 적용됩니다.', 'Three villa stays per year, based on one ownership share and subject to booking availability.')}</p>
        </li>
      `;
      const how = document.createElement('div');
      how.className = 'ownership-how-heading';
      how.innerHTML = `<p class="eyebrow">${t('공동 소유 안내', 'HOW OWNERSHIP WORKS')}</p><h3>${t('한 채를 함께, 휴가는 온전히 나답게.', 'Share a villa. Make every holiday yours.')}</h3><div class="ownership-how-intro"><p>${t('별장 한 채를 120구좌로 나눠 함께 소유합니다.', 'A villa is divided into 120 shares for shared ownership.')}</p><p>${t('구좌만큼 지분과 연간 이용일이 배정되고,', 'Ownership and annual stays are allocated by share.')}</p><p>${t('원하면 구좌를 더하거나 다른 지역을 추가할 수 있습니다.', 'You can add shares or another destination.')}</p></div>`;
      const layout = document.createElement('div');
      layout.className = 'ownership-how-layout';
      layout.lang = english ? 'en' : 'ko';
      if (english) layout.setAttribute('translate', 'no');
      layout.innerHTML = `<figure class="ownership-how-photo"><img src="assets/brand/prestige-rounded-20261028.webp" width="1672" height="941" loading="lazy" decoding="async" alt="${t('실내 원형 계단과 두 층을 갖춘 라운드형 별장 외관 콘셉트', 'Rounded two-storey villa with an internal spiral staircase, garden and terrace')}"></figure><div class="ownership-how-content"></div>`;
      const photoElement = layout.querySelector('.ownership-how-photo');
      photoElement.setAttribute('aria-label', t('라운드형 별장과 가든 공간 콘셉트', 'Rounded villa and garden concept image'));
      const content = layout.querySelector('.ownership-how-content');
      content.append(facts);
      const cta = document.createElement('a');
      cta.className = 'ownership-structure-button why-cta'; cta.href = '#ownership-structure-diagram';
      cta.textContent = t('공동 소유 구조 보기', 'View ownership structure');
      content.append(cta);
      if (guide) {
        grid.after(guide);
        guide.after(how, layout);
      } else grid.after(how, layout);
      // Start chapter 2 with the shared-ownership explanation.
      (label || grid).before(how, layout);

      const ownershipSection = layout;
      if (motionAllowed && window.gsap && window.ScrollTrigger) {
        window.gsap.registerPlugin(window.ScrollTrigger);
        const image = layout.querySelector('.ownership-how-photo img');
        const shareCount = layout.querySelector('[data-share-count]');
        const denominator = layout.querySelector('[data-ownership-denominator]');
        const ratioFinal = layout.querySelector('.ownership-ratio-final');
        const ratioPreview = layout.querySelector('.ownership-ratio-preview');
        const annualNumbers = layout.querySelectorAll('[data-annual-number]');
        const timeline = window.gsap.timeline({
          scrollTrigger: {
            trigger: ownershipSection,
            start: 'top 78%',
            once: true
          },
          onComplete: () => { layout.dataset.animationState = 'complete'; }
        });
        const count = { value: 0 };
        timeline
          .fromTo(image, { autoAlpha: 0, scale: 1.04 }, { autoAlpha: 1, scale: 1, duration: 1.5, ease: 'power2.out' }, 0)
          .fromTo(facts.children, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: .45, stagger: .1, ease: 'power2.out' }, .12)
          .add(() => {
            shareCount.textContent = '0';
            ratioFinal.hidden = true;
            ratioPreview.hidden = false;
            denominator.textContent = '0';
          }, .18)
          .to(count, {
            value: 120,
            duration: 1.5,
            ease: 'power2.out',
            onUpdate: () => {
              const value = Math.floor(count.value);
              shareCount.textContent = String(value);
              denominator.textContent = String(value);
              // Keep the denominator-only progress out of view until it is a valid positive share count.
              ratioPreview.querySelector('.ownership-ratio-denominator').style.visibility = value > 0 ? 'visible' : 'hidden';
            },
            onComplete: () => {
              denominator.textContent = '120';
              ratioPreview.hidden = true;
              ratioFinal.hidden = false;
            }
          }, .2)
          .fromTo(annualNumbers, { autoAlpha: 0, y: 5 }, { autoAlpha: 1, y: 0, duration: .3, stagger: .12, ease: 'power1.out' }, .58);
        const cleanup = () => timeline.scrollTrigger?.kill();
        window.addEventListener('pagehide', cleanup, { once: true });
      } else {
        layout.dataset.animationState = 'static';
      }
    }
    why.querySelector('.invitation-footnote')?.remove();
    const legacyFacts = why.querySelector('.access-facts'); legacyFacts?.remove();
  }

  // Ownership & Pricing: keep all offer values in one small configuration object.
  const pricing = document.createElement('section');
  pricing.id = 'ownership-pricing';
  pricing.setAttribute('aria-labelledby', 'ownership-pricing-title');
  pricing.innerHTML = `<div class="container ownership-pricing-inner">
    <div class="ownership-editorial-left">
      <p class="eyebrow ownership-kicker"><span>${t('소유', 'OWNERSHIP')}</span><span class="ownership-separator" aria-hidden="true">·</span><span>${t('가격 안내', 'PRICING')}</span></p>
      <h2 id="ownership-pricing-title">${t('별장을 소유하는 새로운 방법.', 'A New Way to Own a Villa.')}</h2>
    </div>
    <div class="ownership-configurator">
      <figure class="ownership-villa-showcase" aria-label="${t('선택한 빌라의 공간 콘셉트 이미지', 'Selected villa concept image')}">
        <div class="ownership-villa-image-stack" aria-live="polite">
          <img class="ownership-villa-image is-active" data-villa-image="deluxe" src="assets/brand/single-storey.png" width="1536" height="1024" alt="${t('단층 스튜디오 디럭스 빌라 공간 콘셉트', 'Concept image of the single-storey Deluxe studio villa')}" fetchpriority="low" decoding="async">
          <img class="ownership-villa-image" data-villa-image="suite" src="assets/brand/prestige-rounded-20261028.webp" width="1536" height="1024" alt="" loading="lazy" decoding="async" aria-hidden="true">
        </div>
        <figcaption><span data-villa-caption>${t('디럭스 · 실내 33㎡ + 가든 + 테라스', 'Deluxe · Indoor 33 m² + garden + terrace')}</span><small>${t('공간 콘셉트 이미지', 'Concept image')}</small></figcaption>
      </figure>
      <div class="ownership-pricing-summary">
        <div class="ownership-villa-selector" id="ownership-options" aria-label="${t('빌라 타입과 선택 옵션', 'Villa type and optional package')}">
          <div class="ownership-villa-tabs" role="tablist" aria-label="${t('빌라 선택 · 가격은 1구좌 기준', 'Choose a villa · prices per share')}">
            <button id="villa-tab-deluxe" type="button" role="tab" aria-selected="true" aria-controls="villa-panel" tabindex="0" data-villa-tab="deluxe">
              <img src="assets/brand/single-storey.png" width="1536" height="1024" alt="" aria-hidden="true" loading="lazy" decoding="async">
              <span class="ownership-villa-option-copy"><strong>${t('디럭스', 'Deluxe')}</strong><span>${t('실내 33㎡ + 가든 + 테라스', 'Indoor 33 m² + garden + terrace')}</span><b>${money(villaTypes.deluxe.basePrice).slice(1)} USD <small>/ ${t('구좌', 'share')}</small></b></span>
            </button>
            <button id="villa-tab-suite" type="button" role="tab" aria-selected="false" aria-controls="villa-panel" tabindex="-1" data-villa-tab="suite">
              <img src="assets/brand/prestige-rounded-20261028.webp" width="1536" height="1024" alt="" aria-hidden="true" loading="lazy" decoding="async">
              <span class="ownership-villa-option-copy"><strong>${t('프레스티지', 'Prestige')}</strong><span>${t('실내 66㎡ + 가든 + 테라스', 'Indoor 66 m² + garden + terrace')}</span><b>${money(villaTypes.suite.basePrice).slice(1)} USD <small>/ ${t('구좌', 'share')}</small></b></span>
            </button>
          </div>
          <div class="ownership-config-controls" id="villa-panel" role="tabpanel" aria-labelledby="villa-tab-deluxe">
            <label class="ownership-package-toggle">
              <input type="checkbox" data-luxury-package>
              <span class="ownership-toggle-mark" aria-hidden="true"></span>
              <span class="ownership-package-toggle-copy"><strong>${t('럭셔리 패키지 추가', 'Add Luxury Package')}</strong><small>${t('선택 옵션', 'Optional upgrade')}</small></span>
              <b data-package-increment>+${money(villaTypes.deluxe.luxuryPackagePrice)}</b>
            </label>
            <dl class="ownership-price-breakdown" aria-label="${t('선택한 빌라 가격 내역', 'Selected villa price breakdown')}">
              <div><dt>${t('기본 구좌 가격', 'Base share price')}</dt><dd data-price-base>${money(villaTypes.deluxe.basePrice)}</dd></div>
              <div><dt>${t('럭셔리 패키지', 'Luxury Package')}</dt><dd data-price-package>+$0</dd></div>
              <div class="ownership-total-row"><dt>${t('총 금액', 'Total')}</dt><dd data-price-total aria-live="polite">${money(villaTypes.deluxe.basePrice)}</dd></div>
            </dl>
            <p class="ownership-summary-note">${t('소유 지분과 연간 이용 기준은 아래에서 확인할 수 있습니다. 최종 조건은 계약에 따릅니다.', 'See below for the ownership share and annual-use details. Final terms are subject to the agreement.')}</p>
            <div class="luxury-package-experience" data-package-experience data-active="false">
              <p class="ownership-upgrade-note" data-upgrade-note hidden>${t('럭셔리 패키지는 별도 선택 업그레이드입니다. TV와 벽난로 이미지는 확정 사양이 아닌 콘셉트 프리뷰입니다.', 'The Luxury Package is an optional upgrade. The television and fireplace are conceptual previews, not confirmed specifications.')}</p>
              <div class="luxury-standard-state" data-standard-state>
                <p class="luxury-state-kicker">${t('기본 인테리어', 'STANDARD INTERIOR')}</p>
                <p>${t('선택한 빌라의 기본 구좌 가격을 표시하고 있습니다. 럭셔리 패키지를 선택하면 콘셉트 업그레이드 프리뷰를 볼 수 있습니다.', 'Your selected villa’s base share price is shown. Select the optional Luxury Package to explore conceptual upgrade previews.')}</p>
              </div>
              <div class="luxury-anatomy-host" data-luxury-anatomy-host hidden></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ownership-model-layout" id="ownership-model-before-pricing">
      <div class="ownership-diagram">
        <p class="ownership-diagram-heading"><span>${t('빌라 1채', 'ONE VILLA')}</span><span class="ownership-separator" aria-hidden="true">·</span><span>${t('120개 소유 구좌', '120 OWNERSHIP SHARES')}</span></p>
        <iframe class="ownership-diagram-frame" title="${t('120개 구좌가 빌라 모델로 이어지는 애니메이션', 'Animation connecting 120 ownership shares to a villa model')}" src="/experiments/ownership-villa-diagram/index.html" loading="lazy" scrolling="no"></iframe>
        <p class="ownership-diagram-unavailable" hidden>${t('애니메이션을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.', 'The animation could not be loaded. Please try again later.')}</p>
      </div>
      <ol class="ownership-model-points" aria-label="${t('공동 소유 핵심 안내', 'Shared ownership at a glance')}">
        <li><span>01</span><p>${t('빌라 한 채는 120개 소유 구좌로 나뉩니다.', 'Each villa is divided into 120 ownership shares.')}</p></li>
        <li><span>02</span><p>${t('한 구좌는 1/120 소유 지분이며, 연간 이용은 1박 2일 × 3회 기준입니다.', 'One share represents a 1/120 ownership interest and includes three annual stays of one night and two days each.')}</p></li>
        <li><span>03</span><p>${t('상품에 따라 추가 구좌나 다른 목적지를 선택할 수 있습니다.', 'Additional shares and destinations may be available, depending on the offering.')}</p></li>
      </ol>
    </div>
    <div class="ownership-details">
      <section class="ownership-rights-annual-layout" aria-labelledby="ownership-rights-intro-title">
        <div class="ownership-rights-intro">
          <p class="ownership-group-kicker">${t('소유 권리', 'OWNERSHIP RIGHTS')}</p>
          <h3 id="ownership-rights-intro-title">${t('나만의 별장을 소유하다.', 'A Villa to Call Your Own.')}</h3>
        </div>
        <ol class="ownership-rights-list" aria-label="${t('제안된 소유 관련 항목', 'Proposed ownership-related features')}">
          <li><span class="ownership-right-number">01</span><h4>${t('부동산 소유권 등기', 'Property Registration')}</h4></li>
          <li><span class="ownership-right-number">02</span><h4>${t('소유자 인증', 'Ownership Verification')}</h4></li>
          <li><span class="ownership-right-number">03</span><h4>${t('상속', 'Inheritance')}</h4></li>
          <li><span class="ownership-right-number">04</span><h4>${t('양도 및 매각', 'Transfer & Resale')}</h4></li>
          <li><span class="ownership-right-number">05</span><h4>${t('임대 활용', 'Rental Opportunities')}</h4></li>
        </ol>
        <p class="ownership-rights-disclosure">${t('위 항목은 제안된 소유 관련 개념입니다. 실제 제공 여부와 범위는 최종 법률 검토, 계약 및 관계 법령에 따라 확정됩니다.', 'These are proposed ownership-related concepts. Availability and scope are subject to final legal review, agreements, and applicable law.')}</p>
        <section class="ownership-annual-group" id="ownership-structure-diagram" aria-labelledby="ownership-annual-title">
          <div class="ownership-annual-heading">
            <p class="ownership-group-kicker">${t('연간 이용', 'ANNUAL USE')}</p>
            <h3 id="ownership-annual-title">${t('마이롯지에서 누리는 나만의 시간', 'Your Time at MyLodge')}</h3>
          </div>
          <div class="ownership-annual-value" role="group" aria-label="${t('1박 2일 × 3회', '1 Night, 2 Days × 3 Stays')}"><strong>${english ? '<span class="ownership-annual-term"><span data-annual-number>1</span><span class="ownership-annual-unit">Night</span></span><i aria-hidden="true">,</i><span class="ownership-annual-term"><span data-annual-number>2</span><span class="ownership-annual-unit">Days</span></span><i aria-hidden="true">×</i><span class="ownership-annual-term"><span data-annual-number>3</span><span class="ownership-annual-unit">Stays</span></span>' : '<span class="ownership-annual-term"><span data-annual-number>1</span><span class="ownership-annual-unit">박</span></span><span class="ownership-annual-term"><span data-annual-number>2</span><span class="ownership-annual-unit">일</span></span><i aria-hidden="true">×</i><span class="ownership-annual-term"><span data-annual-number>3</span><span class="ownership-annual-unit">회</span></span>'}</strong></div>
          <p class="ownership-annual-note">${t('연간 이용은 구좌당 기준이며, 예약 가능일과 이용 조건이 적용됩니다.', 'Annual usage is per share and subject to reservation terms.')}</p>
        </section>
      </section>
      <p class="ownership-offer-note">${t('제안된 구좌 가격입니다. 최종 소유 구조와 납입·이용 조건은 계약 전 제공되는 안내와 계약서에서 확인해 주세요.', 'These are proposed share prices. Review the final ownership structure and payment and usage terms in the information and agreement provided before contracting.')}</p>
    </div>
  </div>`;

  // The original three SVG review cards lived inside #participation, which is
  // intentionally removed from the six-section homepage. Keep that existing
  // icon content by relocating it into Ownership & Pricing before cleanup.
  const participationChecklist = main.querySelector('#participation #checklist');
  if (participationChecklist) {
    if (english) {
      const summary = participationChecklist.querySelector('summary');
      if (summary) summary.textContent = 'Three things to review before choosing';
      const translations = [
        ['Ownership and use', 'Review the scope of any rights, transfer procedures, allocated use, and reservation rules.'],
        ['Payment and cancellation', 'Review the total price, installment timing, additional costs, and cancellation or refund terms.'],
        ['Project progress and operator', 'Check the current preparation stage and who will be responsible for operations.']
      ];
      participationChecklist.querySelectorAll('.check-card').forEach((card, index) => {
        const [heading, description] = translations[index] || [];
        if (heading) card.querySelector('h3')?.replaceChildren(document.createTextNode(heading));
        if (description) card.querySelector('p')?.replaceChildren(document.createTextNode(description));
      });
    }
    pricing.querySelector('.ownership-pricing-inner')?.append(participationChecklist);
  }

  const villaSelector = pricing.querySelector('.ownership-villa-selector');
  const villaTabs = [...villaSelector.querySelectorAll('[data-villa-tab]')];
  const packageToggle = villaSelector.querySelector('[data-luxury-package]');
  const packageExperience = villaSelector.querySelector('[data-package-experience]');
  let luxuryAnatomyMounted = false;
  let luxuryAnatomyModule = null;
  let luxuryAnatomyLoading = false;
  function mountLuxuryAnatomy() {
    if (luxuryAnatomyMounted || !luxuryAnatomyModule) return;
    const host = villaSelector.querySelector('[data-luxury-anatomy-host]');
    luxuryAnatomyMounted = true;
    luxuryAnatomyModule.mount(host, { english, gsap: window.gsap });
  }
  const loadLuxuryAnatomy = () => {
    if (luxuryAnatomyModule || luxuryAnatomyLoading) return;
    luxuryAnatomyLoading = true;
    import('./luxury-package-anatomy.js').then(module => {
      luxuryAnatomyModule = module;
      luxuryAnatomyLoading = false;
      if (packageToggle.checked) mountLuxuryAnatomy();
    }).catch(() => {
      luxuryAnatomyLoading = false;
      const host = villaSelector.querySelector('[data-luxury-anatomy-host]');
      host.hidden = false;
      host.textContent = t('프리뷰를 불러오지 못했습니다. 가격 선택은 계속 이용할 수 있습니다.', 'The previews could not be loaded. Villa and price selection remain available.');
    });
  };
  const packageObserver = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) {
      packageObserver.disconnect();
      loadLuxuryAnatomy();
    }
  }, { rootMargin: '400px 0px' }) : null;
  if (packageObserver) packageObserver.observe(packageExperience);
  else loadLuxuryAnatomy();
  let selectedVillaKey = 'deluxe';
  let displayedTotal = villaTypes.deluxe.basePrice;
  let priceTween = null;
  let villaImageTimeline = null;
  let lastVillaImageKey = 'deluxe';
  const updateVillaPrice = (animate = false) => {
    const selectedVilla = villaTypes[selectedVillaKey];
    const luxuryPackageEnabled = packageToggle.checked;
    const total =
      selectedVilla.basePrice +
      (luxuryPackageEnabled
        ? selectedVilla.luxuryPackagePrice
        : 0);
    const villaTitle = english ? selectedVilla.name : selectedVilla.nameKo;
    const villaDescription = selectedVillaKey === 'deluxe'
      ? t('실내 33㎡ + 가든 + 테라스', 'Indoor 33 m² + garden + terrace')
      : t('실내 66㎡ + 가든 + 테라스', 'Indoor 66 m² + garden + terrace');
    const caption = pricing.querySelector('[data-villa-caption]');
    const imageNodes = [...pricing.querySelectorAll('[data-villa-image]')];
    const outgoingImage = imageNodes.find(image => image.dataset.villaImage === lastVillaImageKey);
    const incomingImage = imageNodes.find(image => image.dataset.villaImage === selectedVillaKey);
    imageNodes.forEach(image => {
      const isSelected = image === incomingImage;
      image.alt = isSelected
        ? t(`${selectedVilla.floors}층 ${villaDescription} ${selectedVilla.nameKo} 빌라 공간 콘셉트`, `${villaDescription} ${selectedVilla.name} villa concept image`)
        : '';
      image.setAttribute('aria-hidden', String(!isSelected));
    });
    if (lastVillaImageKey !== selectedVillaKey) {
      if (villaImageTimeline) villaImageTimeline.kill();
      if (animate && motionAllowed && window.gsap && incomingImage && outgoingImage) {
        window.gsap.set(incomingImage, { autoAlpha: 0 });
        villaImageTimeline = window.gsap.timeline({ onComplete: () => {
          incomingImage.classList.add('is-active');
          outgoingImage.classList.remove('is-active');
        } });
        villaImageTimeline
          .to(outgoingImage, { autoAlpha: 0, duration: .55, ease: 'power2.out' }, 0)
          .to(incomingImage, { autoAlpha: 1, duration: .65, ease: 'power2.out' }, .12);
      } else {
        imageNodes.forEach(image => {
          image.classList.toggle('is-active', image === incomingImage);
          image.style.opacity = image === incomingImage ? '1' : '0';
          image.style.visibility = image === incomingImage ? 'visible' : 'hidden';
        });
      }
      if (caption && animate && motionAllowed && window.gsap) {
        window.gsap.fromTo(caption, { autoAlpha: 0, y: 5 }, { autoAlpha: 1, y: 0, duration: .4, ease: 'power2.out' });
      }
      lastVillaImageKey = selectedVillaKey;
    }
    if (caption) caption.textContent = `${villaTitle} · ${villaDescription}`;
    villaSelector.querySelector('[data-price-base]').textContent = money(selectedVilla.basePrice);
    villaSelector.querySelector('[data-price-package]').textContent = `+${money(luxuryPackageEnabled ? selectedVilla.luxuryPackagePrice : 0)}`;
    villaSelector.querySelector('[data-package-increment]').textContent = `+${money(selectedVilla.luxuryPackagePrice)}`;
    const totalElement = villaSelector.querySelector('[data-price-total]');
    if (animate && motionAllowed && window.gsap) {
      if (priceTween) priceTween.kill();
      const amount = { value: displayedTotal };
      priceTween = window.gsap.to(amount, {
        value: total,
        duration: .7,
        ease: 'power2.out',
        onUpdate: () => {
          displayedTotal = Math.round(amount.value);
          totalElement.textContent = money(displayedTotal);
        },
        onComplete: () => { displayedTotal = total; }
      });
    } else {
      displayedTotal = total;
      totalElement.textContent = money(total);
    }
    packageExperience.dataset.active = String(luxuryPackageEnabled);
    villaSelector.querySelector('[data-standard-state]').hidden = luxuryPackageEnabled;
    const upgradeNote = villaSelector.querySelector('[data-upgrade-note]');
    upgradeNote.hidden = !luxuryPackageEnabled;
    if (luxuryPackageEnabled && animate && motionAllowed && window.gsap) {
      window.gsap.fromTo(upgradeNote, { autoAlpha: 0, y: 5 }, { autoAlpha: 1, y: 0, duration: .35, ease: 'power2.out' });
    } else if (!luxuryPackageEnabled) {
      upgradeNote.style.opacity = '';
      upgradeNote.style.visibility = '';
      upgradeNote.style.transform = '';
    }
    const anatomyHost = villaSelector.querySelector('[data-luxury-anatomy-host]');
    anatomyHost.hidden = !luxuryPackageEnabled;
    if (luxuryPackageEnabled) {
      if (luxuryAnatomyModule) mountLuxuryAnatomy();
      else if (!packageObserver) loadLuxuryAnatomy();
    }
    villaSelector.querySelector('#villa-panel').setAttribute('aria-labelledby', `villa-tab-${selectedVillaKey}`);
    villaTabs.forEach(tab => {
      const active = tab.dataset.villaTab === selectedVillaKey;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
    });
  };
  const selectVilla = key => {
    if (!villaTypes[key]) return;
    selectedVillaKey = key;
    updateVillaPrice(true);
  };
  villaTabs.forEach(tab => tab.addEventListener('click', () => selectVilla(tab.dataset.villaTab)));
  villaSelector.querySelector('[role="tablist"]')?.addEventListener('keydown', event => {
    const currentIndex = villaTabs.indexOf(document.activeElement);
    let nextIndex = currentIndex;
    if (event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % villaTabs.length;
    else if (event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + villaTabs.length) % villaTabs.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = villaTabs.length - 1;
    else return;
    event.preventDefault();
    villaTabs[nextIndex].focus();
    selectVilla(villaTabs[nextIndex].dataset.villaTab);
  });
  packageToggle.addEventListener('change', () => updateVillaPrice(true));
  updateVillaPrice();

  // Reuse the standalone Anatomy study in place, adapting only its presentation to this section.
  const ownershipFrame = pricing.querySelector('.ownership-diagram-frame');
  let ownershipLastStartedAt = 0;
  const startOwnershipAnimation = () => {
    const doc = ownershipFrame?.contentDocument;
    const status = doc?.querySelector('#status')?.textContent || '';
    const complete = /Villa complete|Complete \(reduced motion\)|별장 완성|완성 \(동작 줄임\)/.test(status);
    const now = performance.now();
    if (ownershipFrame?.dataset.ready === 'true' && (ownershipFrame.dataset.started !== 'true' || (complete && now - ownershipLastStartedAt > 2000))) {
      ownershipLastStartedAt = now;
      ownershipFrame.dataset.started = 'true';
      doc.querySelector('#replay')?.click();
    }
  };
  const ownershipObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      pricing.dataset.inViewport = entry.isIntersecting ? 'true' : 'false';
      if (entry.isIntersecting) startOwnershipAnimation();
    }
  }, { threshold: 0.12 });
  ownershipObserver.observe(pricing);
  ownershipFrame?.addEventListener('load', () => {
    try {
      const doc = ownershipFrame.contentDocument;
      const stage = doc?.querySelector('#ownership-stage');
      if (!doc || !stage) throw new Error('Ownership animation document unavailable');
      doc.documentElement.lang = english ? 'en' : 'ko';
      doc.querySelector('.editorial-head')?.remove();
      doc.querySelector('.disclosure')?.remove();
      const embedStyles = doc.createElement('style');
      embedStyles.textContent = `
        html,body{width:100%!important;min-width:0!important;margin:0!important;padding:0!important;overflow:hidden!important;background:#f7f5f0!important;color-scheme:light!important}
        .iso-page,.page{width:100%!important;max-width:none!important;margin:0!important;padding:0!important}
        .ownership-stage{grid-template-columns:minmax(0,1.15fr) minmax(0,.85fr)!important;gap:clamp(22px,3vw,48px)!important;align-items:center!important}
        .ownership-card,.villa-card{border:0!important;box-shadow:none!important;background:transparent!important;padding:0!important}
        .controls{margin-top:12px!important}
        @media(max-width:700px){.ownership-stage{grid-template-columns:minmax(0,1fr)!important;gap:14px!important}.ownership-card{padding:16px 18px!important}.villa-card{padding:10px 8px 7px!important}}
      `;
      doc.head.append(embedStyles);
      doc.documentElement.style.colorScheme = 'light';
      doc.documentElement.style.background = '#f7f5f0';
      doc.body.style.background = '#f7f5f0';
      const labels = english ? {
        card: 'THE OWNERSHIP MODEL', villa: ['FROM SHARE TO PLACE', 'ARCHITECTURAL STUDY'],
        share: '1 Night, 2 Days × 3 Stays', shareNote: 'Annual use is per share and subject to reservation terms.',
        villaCaption: 'The highlighted share leads into the villa model.', replay: 'Replay Experience',
        status: { ownership: 'Ownership shares', assembly: 'Villa assembly', complete: 'Villa complete', reduced: 'Complete (reduced motion)' }
      } : {
        card: '공동 소유 모델', villa: ['구좌에서 별장으로', '건축 콘셉트'],
        share: '1구좌 = 1박 2일 × 3회', shareNote: '연간 이용 기준은 최종 이용 약관에 따릅니다.',
        villaCaption: '선택한 구좌가 빌라 모델로 이어집니다.', replay: '애니메이션 다시 보기',
        status: { ownership: '공동 소유 구좌', assembly: '별장 조립', complete: '별장 완성', reduced: '완성 (동작 줄임)' }
      };
      const setText = (selector, value) => { const node = doc.querySelector(selector); if (node) node.textContent = value; };
      doc.querySelector('.ownership-card')?.setAttribute('aria-label', english ? 'Villa ownership diagram' : '별장 공동 소유 구조 도해');
      doc.querySelector('.villa-card')?.setAttribute('aria-label', english ? 'Isometric villa assembly illustration' : '아이소메트릭 빌라 조립 일러스트');
      setText('.card-label', labels.card);
      const villaLabels = doc.querySelectorAll('.villa-card-heading span');
      villaLabels.forEach((node, index) => { node.textContent = labels.villa[index] || ''; });
      setText('#share-statement', labels.share);
      setText('.share-note', labels.shareNote);
      setText('.villa-caption', labels.villaCaption);
      setText('#replay', labels.replay);
      setText('#grid-title', english ? 'One villa divided into 120 ownership shares' : '빌라 한 채를 120개 소유 구좌로 나눈 구조');
      setText('#grid-desc', english ? 'A ten-column by twelve-row villa ownership diagram. One square is highlighted to represent a single share.' : '10열 12행의 별장 소유 구좌 도해입니다. 강조된 한 칸은 한 구좌를 나타냅니다.');
      const svgLabels = doc.querySelectorAll('#share-grid .diagram-kicker,#share-grid .grid-footnote');
      if (!english) {
        if (svgLabels[0]) svgLabels[0].textContent = '별장 1채 / 120구좌';
        if (svgLabels[1]) svgLabels[1].textContent = '10 × 12 / 구획당 1구좌';
      }
      const status = doc.querySelector('#status');
      if (status && !english) {
        const translateStatus = () => {
          const value = status.textContent;
          const translated = value
            .replace(/^Ownership shares/, labels.status.ownership)
            .replace(/^Villa assembly/, labels.status.assembly)
            .replace(/^Villa complete$/, labels.status.complete)
            .replace(/^Complete \(reduced motion\)$/, labels.status.reduced)
            .replace(/\s+s(?=\/|$)/g, '초');
          if (translated !== value) status.textContent = translated;
        };
        new MutationObserver(translateStatus).observe(status, { childList: true, characterData: true, subtree: true });
        translateStatus();
      }
      const updateHeight = () => {
        const contentHeight = Math.ceil(doc.querySelector('.page')?.getBoundingClientRect().height || stage.getBoundingClientRect().height);
        ownershipFrame.style.height = `${contentHeight + 12}px`;
      };
      const sizeObserver = new ResizeObserver(updateHeight);
      sizeObserver.observe(doc.querySelector('.page'));
      doc.defaultView.addEventListener('resize', updateHeight, { passive: true });
      requestAnimationFrame(() => {
        updateHeight();
        ownershipFrame.dataset.ready = 'true';
        if (pricing.dataset.inViewport === 'true') startOwnershipAnimation();
      });
    } catch {
      ownershipFrame.hidden = true;
      const unavailable = pricing.querySelector('.ownership-diagram-unavailable');
      if (unavailable) unavailable.hidden = false;
    }
  });

  // Keep the owner photo/card decks and lifestyle images; the cinematic life-story
  // slideshow is omitted from the homepage and its images remain in Facilities.
  const ownerLife = document.createElement('section');
  ownerLife.id = 'owner-life'; ownerLife.className = 'homepage-group';
  ownerLife.setAttribute('aria-labelledby', 'owner-life-title');
  for (const id of ['ownership', 'lifestyle']) {
    const section = main.querySelector('#' + id);
    if (section) ownerLife.append(section);
  }
  main.querySelector('#life-story')?.remove();
  main.querySelector('#nature')?.remove();
  const ownerIntro = document.createElement('div');
  ownerIntro.className = 'owner-life-intro container';
  const dayEvents = english
    ? [['10:00', 'Arrival'], ['12:00', 'Poolside'], ['18:00', 'BBQ'], ['21:00', 'Evening']]
    : [['10:00', '도착'], ['12:00', '풀사이드'], ['18:00', '바비큐'], ['21:00', '저녁 시간']];
  ownerIntro.innerHTML = `<div class="owner-life-intro-layout">
    <div class="owner-life-editorial">
      <p class="eyebrow">OWNER LIFE</p>
      <h2 id="owner-life-title">${t('함께 누리는 별장 라이프', 'Share the Extraordinary.')}</h2>
      <p>${t('가족과 친구를 초대해 풀사이드의 오후와 바비큐 저녁을 함께하세요.', 'Invite family and friends for poolside afternoons and shared BBQ evenings.')}</p>
    </div>
    <div class="owner-day" aria-label="${t('별장에서 보내는 하루의 예시', 'An illustrative day at the villa')}">
      <p class="eyebrow owner-day-heading">${t('별장에서 보내는 하루', 'A DAY AT THE VILLA')}</p>
      <div class="owner-day-track" data-owner-timeline>
        <svg class="owner-day-line owner-day-line-desktop" viewBox="0 0 920 100" preserveAspectRatio="none" aria-hidden="true"><path d="M115 50 C190 47 270 53 345 50 S500 47 575 50 S730 53 805 50" /></svg>
        <svg class="owner-day-line owner-day-line-mobile" viewBox="0 0 40 330" preserveAspectRatio="none" aria-hidden="true"><path d="M20 10 V256" /></svg>
        <ol class="owner-day-points">${dayEvents.map(([time, label]) => `<li><span class="owner-day-marker" aria-hidden="true"></span><time datetime="${time}">${time}</time><h3>${label}</h3></li>`).join('')}</ol>
      </div>
      <div class="owner-day-footer"><p class="owner-day-note">${t('시간은 예시이며 실제 예약·서비스 운영 시간을 뜻하지 않습니다.', 'Illustrative timings only; booking and service hours are not confirmed.')}</p></div>
    </div>
  </div>
  <figure class="owner-life-feature-photo" data-owner-life-photo>
    <img src="/assets/images/bbqplace.png" alt="${t('수영장 옆 빌라 테라스에서 저녁 바비큐를 즐기는 모임의 콘셉트 이미지', 'Concept image of friends sharing an evening BBQ beside the villa pool')}" width="1536" height="1024" loading="lazy" decoding="async">
  </figure>`;
  ownerLife.prepend(ownerIntro);
  const ownerTimeline = ownerIntro.querySelector('[data-owner-timeline]');
  const ownerTimelinePoints = [...ownerIntro.querySelectorAll('.owner-day-points li')];
  const ownerTimelineMarkers = [...ownerIntro.querySelectorAll('.owner-day-marker')];
  const ownerFeaturePhoto = ownerIntro.querySelector('[data-owner-life-photo]');
  if (motionAllowed && window.gsap && 'IntersectionObserver' in window && ownerFeaturePhoto) {
    const photoObserver = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      photoObserver.disconnect();
      window.gsap.fromTo(ownerFeaturePhoto,
        { autoAlpha: 0, y: 18, scale: 1.018 },
        { autoAlpha: 1, y: 0, scale: 1, duration: .85, ease: 'power2.out', clearProps: 'transform' }
      );
    }, { threshold: 0.08 });
    photoObserver.observe(ownerFeaturePhoto);
  }
  if (ownerTimeline && window.gsap && motionAllowed && 'IntersectionObserver' in window) {
    const ownerTimelinePaths = [...ownerTimeline.querySelectorAll('.owner-day-line path')];
    ownerTimelinePaths.forEach(path => {
      const length = path.getTotalLength();
      window.gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    });
    window.gsap.set(ownerTimelinePoints, { autoAlpha: 0, y: 9 });
    window.gsap.set(ownerTimelineMarkers, { scale: .65, transformOrigin: '50% 50%' });
    let timelinePlayed = false;
    const timelineObserver = new IntersectionObserver(entries => {
      if (timelinePlayed || !entries.some(entry => entry.isIntersecting)) return;
      timelinePlayed = true;
      timelineObserver.disconnect();
      window.gsap.timeline()
        .to(ownerTimelinePaths, { strokeDashoffset: 0, duration: .72, ease: 'power1.inOut' })
        .to(ownerTimelinePoints, { autoAlpha: 1, y: 0, duration: 0.24, stagger: 0.1, ease: 'power2.out' }, '-=0.1')
        .to(ownerTimelineMarkers, { scale: 1, duration: .24, stagger: .11, ease: 'back.out(1.5)' }, '<');
    }, { threshold: 0.12 });
    timelineObserver.observe(ownerTimeline);
  }
  const ownershipCards = ownerLife.querySelector('#ownership .promotion-cards');
  if (ownershipCards) {
    const stories = english ? [
      ['Share a Day at Your Villa', 'Invite someone close for a day they will remember.'],
      ['Afternoons by the Pool', 'Slow down by the water and enjoy time together.'],
      ['Evenings on the Terrace', 'Share dinner and conversation as the day winds down.']
    ] : [
      ['별장에서 함께하는 하루', '소중한 사람을 초대해 오래 기억될 하루를 나눠보세요.'],
      ['풀사이드의 오후', '물가에서 여유롭게 이야기를 나누고 함께 쉬어가는 시간.'],
      ['테라스에서 나누는 저녁', '저녁 식사와 대화로 하루를 특별하게 마무리합니다.']
    ];
    const cards = [...ownershipCards.querySelectorAll('article')];
    const socialCard = cards.find(card => card.querySelector('img')?.src.includes('owner-connect'));
    if (socialCard && ownershipCards.firstElementChild !== socialCard) ownershipCards.prepend(socialCard);
    [...ownershipCards.querySelectorAll('article')].forEach((card, index) => {
      const [title, copy] = stories[index] || stories[0];
      card.querySelector('.editorial-card-copy h3')?.replaceChildren(document.createTextNode(title));
      card.querySelector('.editorial-card-copy p')?.replaceChildren(document.createTextNode(copy));
      const poolStory = title === 'Afternoons by the Pool' || title === '풀사이드의 오후';
      if (poolStory) {
        const image = card.querySelector('figure img');
        if (image) {
          image.src = '/assets/images/pool.png';
          image.removeAttribute('srcset');
          image.sizes = '(max-width: 800px) 100vw, 33vw';
          image.style.objectPosition = '18% 50%';
          image.alt = t('풀사이드에서 여유로운 오후를 보내는 별장 라이프 콘셉트 이미지', 'Villa lifestyle concept image of a relaxed afternoon by the pool');
        }
      }
    });
    let conceptNote = ownerLife.querySelector('.owner-story-note');
    if (!conceptNote) { conceptNote = document.createElement('p'); conceptNote.className = 'owner-story-note container'; ownershipCards.after(conceptNote); }
    conceptNote.textContent = t('생활 장면은 공간 콘셉트이며, 실제 행사나 서비스 운영을 의미하지 않습니다.', 'These lifestyle scenes are illustrative; they do not confirm events or services.');
  }
  const community = document.createElement('section'); community.className = 'owner-community container'; community.id = 'lifestyle-communities';
  const lifestyleStories = english ? [
      ['Family', 'Unhurried meals with family.', 'assets/images/owner-connect-20261007-960.webp'],
      ['Couples', 'A quiet moment on the terrace.', 'assets/images/living-terrace-960.webp'],
      ['Social', 'An afternoon by the pool with friends.', 'assets/images/yangyang-pool-party-20261013-960.webp'],
      ['Business', 'Space for conversation and new ideas.', 'assets/images/owner-ideas-20261007-960.webp'],
      ['Wellness', 'A slower pace, close to nature.', 'assets/images/chiangmai-rest-wellness-20261011-960.webp']
  ] : [
    ['패밀리', '가족과 함께하는 느긋한 식사.', 'assets/images/owner-connect-20261007-960.webp'],
    ['커플', '테라스에서 나누는 둘만의 여유.', 'assets/images/living-terrace-960.webp'],
    ['소셜', '풀사이드에서 친구들과 보내는 오후.', 'assets/images/yangyang-pool-party-20261013-960.webp'],
    ['비즈니스', '대화와 새로운 생각이 머무는 공간.', 'assets/images/owner-ideas-20261007-960.webp'],
    ['웰니스', '자연 가까이에서 누리는 여유.', 'assets/images/chiangmai-rest-wellness-20261011-960.webp']
  ];
  community.innerHTML = `<p class="eyebrow">${t('오너 라이프 · 라이프스타일', 'OWNER LIFE · LIFESTYLE')}</p><h3>${t('머무는 순간마다, 새로운 이야기.', 'Every Stay, Your Story.')}</h3><p class="lifestyle-gallery-intro">${t('함께하는 사람과 그날의 기분에 따라 달라지는 별장 라이프를 만나보세요.', 'Discover villa moments shaped by the people you bring together.')}</p><div class="lifestyle-gallery" id="lifestyle-gallery" data-lifestyle-gallery aria-label="${t('라이프스타일 사진 갤러리. 좌우로 밀어 카테고리를 둘러보세요.', 'Lifestyle photo gallery. Swipe to explore categories.')}" tabindex="0">${lifestyleStories.map(([title, copy, src], index) => `<button class="lifestyle-panel${index === 0 ? ' is-active' : ''}" style="flex-grow:${index === 0 ? 3 : 1}" type="button" aria-pressed="${index === 0}" data-lifestyle-index="${index}"><img src="/${src}" alt="${t(`${title} 라이프스타일 콘셉트 이미지`, `${title} lifestyle concept image`)}" loading="eager" width="960" height="640"><span class="lifestyle-panel-shade"></span><span class="lifestyle-panel-copy"><small>0${index + 1}</small><strong>${title}</strong><span>${copy}</span></span></button>`).join('')}</div><div class="lifestyle-gallery-controls"><span>${t('라이프스타일 콘셉트 이미지 · 프로그램 운영 미확정', 'Lifestyle concept images · events and services are not confirmed')}</span><div><button type="button" data-lifestyle-prev aria-label="${t('이전 카테고리', 'Previous category')}">←</button><button type="button" data-lifestyle-next aria-label="${t('다음 카테고리', 'Next category')}">→</button></div></div>`;
  ownerLife.append(community);

  const lifestyleGallery = community.querySelector('[data-lifestyle-gallery]');
  const lifestylePanels = [...community.querySelectorAll('.lifestyle-panel')];
  let activeLifestyle = 0;
  let lifestyleIsNavigating = false;
  let lifestyleScrollTimer;
  const setLifestyle = (index, scrollToPanel = true) => {
    activeLifestyle = (index + lifestylePanels.length) % lifestylePanels.length;
    lifestylePanels.forEach((panel, panelIndex) => {
      const active = panelIndex === activeLifestyle;
      panel.classList.toggle('is-active', active);
      panel.setAttribute('aria-pressed', String(active));
      if (window.gsap && !matchMedia('(prefers-reduced-motion: reduce)').matches && !matchMedia('(max-width: 760px)').matches) {
        window.gsap.to(panel, { flexGrow: active ? 3 : 1, duration: 0.55, ease: 'power2.inOut', overwrite: true });
      }
    });
    if (scrollToPanel && matchMedia('(max-width: 760px)').matches) {
      const panel = lifestylePanels[activeLifestyle];
      lifestyleIsNavigating = true;
      clearTimeout(lifestyleScrollTimer);
      lifestyleGallery?.scrollTo({ left: panel.offsetLeft - Math.max(0, (lifestyleGallery.clientWidth - panel.clientWidth) / 2), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      lifestyleScrollTimer = setTimeout(() => { lifestyleIsNavigating = false; }, matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 700);
    }
  };
  lifestylePanels.forEach((panel, index) => {
    panel.addEventListener('mouseenter', () => { if (matchMedia('(hover: hover) and (min-width: 761px)').matches) setLifestyle(index); });
    panel.addEventListener('focus', () => setLifestyle(index));
    panel.addEventListener('click', () => setLifestyle(index));
  });
  community.querySelector('[data-lifestyle-prev]')?.addEventListener('click', () => setLifestyle(activeLifestyle - 1));
  community.querySelector('[data-lifestyle-next]')?.addEventListener('click', () => setLifestyle(activeLifestyle + 1));
  lifestyleGallery?.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') { event.preventDefault(); setLifestyle(activeLifestyle + 1); lifestylePanels[activeLifestyle]?.focus(); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); setLifestyle(activeLifestyle - 1); lifestylePanels[activeLifestyle]?.focus(); }
  });
  lifestyleGallery?.addEventListener('scroll', () => {
    if (!matchMedia('(max-width: 760px)').matches || lifestyleIsNavigating) return;
    const center = lifestyleGallery.scrollLeft + lifestyleGallery.clientWidth / 2;
    const nearest = lifestylePanels.reduce((best, panel, index) => Math.abs(panel.offsetLeft + panel.offsetWidth / 2 - center) < Math.abs(lifestylePanels[best].offsetLeft + lifestylePanels[best].offsetWidth / 2 - center) ? index : best, 0);
    if (nearest !== activeLifestyle) setLifestyle(nearest, false);
  }, { passive: true });

  // Facilities: retain the existing interactive selector and all current media.
  const facilities = document.createElement('section');
  facilities.id = 'facilities'; facilities.className = 'homepage-group';
  facilities.setAttribute('aria-labelledby', 'explore-villa-title');
  const spaces = main.querySelector('#villa-spaces');
  let spacesIntro = spaces?.querySelector('.vacation-intro') || null;
  const vision = main.querySelector('#vision');
  if (spaces) facilities.append(spaces);
  if (vision) facilities.append(vision);
  const facilityStories = english ? [
    ['Park Overview', 'Explore the resort concept, villa arrangement, central pool, pathways, and shared amenities.', 'assets/images/Plan.png', 'Conceptual architectural illustration. Final designs and specifications may vary.'],
    ['Resort Overview', 'A conceptual aerial view of the coastal resort setting.', 'assets/brand/gaji.png', 'AI-generated resort concept · site and facilities are unconfirmed.'],
    ['Exterior', 'A first look at the villa concept.', 'assets/images/facility-villa-20261007-1680.webp', 'Architectural concept image'],
    ['Interior', 'Light-filled spaces for unhurried stays.', 'assets/images/intro-interior-1680.webp', 'Interior concept image'],
    ['Terrace', 'An open-air extension of villa life.', 'assets/images/facility-terrace-20261007-1680.webp', 'Terrace concept image'],
    ['Floor Plans', 'Explore an illustrative spatial layout.', 'assets/images/plan-p13-1440.webp', 'Concept plan · not a confirmed villa specification'],
    ['Social Spaces', 'Spaces for conversation and connection.', 'assets/images/facility-club-20261007-1680.webp', 'Planned amenity · concept image']
  ] : [
    ['파크 전체 조감도', '빌라 배치와 중앙 수영장, 산책로 및 공용 공간을 담은 파크 콘셉트를 살펴보세요.', 'assets/images/Plan.png', '본 이미지는 건축 콘셉트 예시이며, 실제 설계 및 사양은 변경될 수 있습니다.'],
    ['리조트 전경', '해안가 리조트의 풍경을 담은 조감 콘셉트 이미지.', 'assets/brand/gaji.png', 'AI 생성 리조트 콘셉트 · 실제 부지와 시설은 미확정입니다.'],
    ['외관', '별장의 첫인상을 그린 건축 콘셉트.', 'assets/images/facility-villa-20261007-1680.webp', '건축 콘셉트 이미지'],
    ['실내', '여유로운 체류를 위한 채광 좋은 공간.', 'assets/images/intro-interior-1680.webp', '실내 콘셉트 이미지'],
    ['테라스', '별장 생활을 바깥으로 이어주는 공간.', 'assets/images/facility-terrace-20261007-1680.webp', '테라스 콘셉트 이미지'],
    ['평면도', '공간 구성을 보여주는 예시 도면.', 'assets/images/plan-p13-1440.webp', '콘셉트 도면 · 확정 빌라 사양이 아닙니다'],
    ['소셜 공간', '대화와 만남을 위한 공용 공간 콘셉트 이미지.', 'assets/images/facility-club-20261007-1680.webp', '계획 시설 · 콘셉트 이미지']
  ];
  const facilitiesGallery = document.createElement('div');
  facilitiesGallery.className = 'facilities-gallery';
  facilitiesGallery.setAttribute('aria-label', t('별장과 파크 시설 콘셉트 이미지 갤러리', 'Villa and resort concept image gallery'));
  facilitiesGallery.dataset.parkOverview = 'true';
  facilitiesGallery.innerHTML = `<div class="facilities-gallery-stage" data-facilities-stage tabindex="0" aria-label="${t('이미지를 좌우로 밀어 둘러보세요. 이미지를 선택하면 확대해서 볼 수 있습니다.', 'Swipe to explore. Select the image to view it larger.')}" role="region"><img class="facilities-gallery-image is-masterplan" data-masterplan-image src="/${facilityStories[0][2]}" alt="${facilityStories[0][0]} — ${t('건축 콘셉트 이미지', 'conceptual architectural presentation')}" width="1672" height="941" loading="eager" tabindex="0" role="button" aria-label="${t('파크 전체 조감도 확대 보기', 'Open Park Overview fullscreen')}" title="${t('확대해서 보기', 'Click to enlarge')}"><span class="facilities-image-caption">${facilityStories[0][3]}</span><div class="facilities-image-controls"><button type="button" data-facilities-prev aria-label="${t('이전 이미지', 'Previous image')}">←</button><button type="button" data-facilities-next aria-label="${t('다음 이미지', 'Next image')}">→</button></div></div><div class="facilities-gallery-details"><p class="eyebrow">${t('공간 콘셉트', 'SPACES IN CONCEPT')}</p><h3 data-facilities-title>${facilityStories[0][0]}</h3><p data-facilities-description>${facilityStories[0][1]}</p><p class="facilities-masterplan-note" data-masterplan-note>${facilityStories[0][3]}</p><ol class="facilities-gallery-nav" role="listbox" aria-label="${t('시설 이미지 선택', 'Choose a facilities image')}">${facilityStories.map(([name], index) => `<li><button type="button" role="option" aria-selected="${index === 0}" data-facilities-index="${index}"><span>0${index + 1}</span><strong>${name}</strong><i aria-hidden="true"></i></button></li>`).join('')}</ol></div>`;
  if (spaces) {
    const iconSelector = spaces.querySelector('.facility-selector');
    const originalPhotoGallery = spaces.querySelector('#facility-gallery');
    const spacesContainer = spaces.querySelector(':scope > .container') || spaces;
    spacesContainer.replaceChildren(...[spacesIntro, iconSelector, originalPhotoGallery, facilitiesGallery].filter(Boolean));
  } else facilityIntro.after(facilitiesGallery);
  const facilityImage = facilitiesGallery.querySelector('.facilities-gallery-image');
  const facilityNavButtons = [...facilitiesGallery.querySelectorAll('[data-facilities-index]')];
  let activeFacility = 0;
  const setFacility = index => {
    activeFacility = (index + facilityStories.length) % facilityStories.length;
    const [name, description, src, caption] = facilityStories[activeFacility];
    facilitiesGallery.dataset.parkOverview = String(activeFacility === 0);
    facilityImage.classList.toggle('is-masterplan', activeFacility === 0);
    const nextImage = new Image();
    const requestedFacility = activeFacility;
    nextImage.onload = () => {
      if (requestedFacility !== activeFacility) return;
      if (window.gsap && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.gsap.to(facilityImage, { opacity: 0, x: -8, duration: 0.22, ease: 'power1.out', onComplete: () => {
          facilityImage.src = nextImage.src;
          facilityImage.alt = t(`${name} 콘셉트 이미지`, `${name} concept image`);
          window.gsap.fromTo(facilityImage, { opacity: 0, x: 8 }, { opacity: 1, x: 0, duration: 0.36, ease: 'power2.out' });
        } });
      } else { facilityImage.src = nextImage.src; facilityImage.alt = t(`${name} 콘셉트 이미지`, `${name} concept image`); }
    };
    nextImage.src = `/${src}`;
    facilitiesGallery.querySelector('[data-facilities-title]').textContent = name;
    facilitiesGallery.querySelector('[data-facilities-description]').textContent = description;
    facilitiesGallery.querySelector('.facilities-image-caption').textContent = caption;
    const masterplanNote = facilitiesGallery.querySelector('[data-masterplan-note]');
    masterplanNote.textContent = caption;
    masterplanNote.hidden = activeFacility !== 0;
    facilityNavButtons.forEach((button, buttonIndex) => button.setAttribute('aria-selected', String(buttonIndex === activeFacility)));
  };
  facilityNavButtons.forEach((button, index) => button.addEventListener('click', () => setFacility(index)));
  facilitiesGallery.querySelector('[data-facilities-prev]')?.addEventListener('click', () => setFacility(activeFacility - 1));
  facilitiesGallery.querySelector('[data-facilities-next]')?.addEventListener('click', () => setFacility(activeFacility + 1));
  const facilityStage = facilitiesGallery.querySelector('[data-facilities-stage]');
  let facilityPointerStart = null;
  facilityStage?.addEventListener('pointerdown', event => { facilityPointerStart = event.clientX; });
  facilityStage?.addEventListener('pointerup', event => {
    if (facilityPointerStart == null) return;
    const delta = event.clientX - facilityPointerStart;
    if (Math.abs(delta) > 40) setFacility(activeFacility + (delta < 0 ? 1 : -1));
    facilityPointerStart = null;
  });
  facilityStage?.addEventListener('keydown', event => {
    if (event.key === 'ArrowRight') { event.preventDefault(); setFacility(activeFacility + 1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); setFacility(activeFacility - 1); }
  });
  const openMasterplan = () => {
    if (activeFacility !== 0) return;
    const dialog = facilitiesGallery.querySelector('[data-masterplan-dialog]');
    if (!dialog) return;
    const dialogImage = dialog.querySelector('img');
    dialogImage.src = facilityImage.currentSrc || facilityImage.src;
    dialogImage.alt = facilityImage.alt;
    dialogImage.style.setProperty('--masterplan-scale', '1');
    dialog.showModal();
    dialog.querySelector('[data-masterplan-zoom-reset]')?.focus();
  };
  facilityImage.addEventListener('click', openMasterplan);
  facilityImage.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openMasterplan(); }
  });
  const masterplanDialog = document.createElement('dialog');
  masterplanDialog.className = 'facilities-masterplan-dialog';
  masterplanDialog.dataset.masterplanDialog = '';
  masterplanDialog.setAttribute('aria-label', t('파크 전체 조감도 확대 보기', 'Park Overview enlarged view'));
  masterplanDialog.innerHTML = `<div class="facilities-masterplan-viewer"><button type="button" class="facilities-masterplan-close" data-masterplan-close aria-label="${t('닫기', 'Close')}">×</button><div class="facilities-masterplan-zoom-controls"><button type="button" data-masterplan-zoom-out aria-label="${t('축소', 'Zoom out')}">−</button><button type="button" data-masterplan-zoom-reset aria-label="${t('화면에 맞추기', 'Fit to screen')}">100%</button><button type="button" data-masterplan-zoom-in aria-label="${t('확대', 'Zoom in')}">+</button></div><div class="facilities-masterplan-canvas"><img src="/${facilityStories[0][2]}" alt="" draggable="false"></div><p>${facilityStories[0][3]}</p></div>`;
  facilitiesGallery.append(masterplanDialog);
  const masterplanDialogImage = masterplanDialog.querySelector('img');
  let masterplanScale = 1;
  const setMasterplanScale = value => {
    masterplanScale = Math.min(4, Math.max(1, value));
    masterplanDialogImage.style.transform = `scale(${masterplanScale})`;
    masterplanDialog.querySelector('[data-masterplan-zoom-reset]').textContent = `${Math.round(masterplanScale * 100)}%`;
  };
  masterplanDialog.querySelector('[data-masterplan-zoom-in]').addEventListener('click', () => setMasterplanScale(masterplanScale + 0.5));
  masterplanDialog.querySelector('[data-masterplan-zoom-out]').addEventListener('click', () => setMasterplanScale(masterplanScale - 0.5));
  masterplanDialog.querySelector('[data-masterplan-zoom-reset]').addEventListener('click', () => setMasterplanScale(1));
  masterplanDialog.querySelector('[data-masterplan-close]').addEventListener('click', () => masterplanDialog.close());
  masterplanDialog.addEventListener('click', event => { if (event.target === masterplanDialog) masterplanDialog.close(); });
  masterplanDialog.addEventListener('close', () => { setMasterplanScale(1); facilityImage.focus(); });
  let pinchStart = null;
  masterplanDialog.querySelector('.facilities-masterplan-canvas').addEventListener('touchstart', event => {
    if (event.touches.length === 2) pinchStart = { distance: Math.hypot(event.touches[0].clientX - event.touches[1].clientX, event.touches[0].clientY - event.touches[1].clientY), scale: masterplanScale };
  }, { passive: true });
  masterplanDialog.querySelector('.facilities-masterplan-canvas').addEventListener('touchmove', event => {
    if (!pinchStart || event.touches.length !== 2) return;
    event.preventDefault();
    const distance = Math.hypot(event.touches[0].clientX - event.touches[1].clientX, event.touches[0].clientY - event.touches[1].clientY);
    setMasterplanScale(pinchStart.scale * distance / pinchStart.distance);
  }, { passive: false });
  masterplanDialog.querySelector('.facilities-masterplan-canvas').addEventListener('touchend', event => { if (event.touches.length < 2) pinchStart = null; });
  if (window.gsap && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealMasterplan = () => window.gsap.fromTo(facilitiesGallery, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.75, ease: 'power2.out' });
    if ('IntersectionObserver' in window) {
      const masterplanObserver = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) { masterplanObserver.disconnect(); revealMasterplan(); }
      }, { threshold: 0.12 });
      masterplanObserver.observe(facilitiesGallery);
    } else revealMasterplan();
  }
  if (spaces) {
    let intro = spacesIntro || spaces.querySelector('.vacation-intro');
    if (!intro) {
      intro = document.createElement('div');
      intro.className = 'vacation-intro';
      intro.innerHTML = '<p class="eyebrow"></p><h2 id="explore-villa-title"></h2><p></p>';
      spaces.prepend(intro);
    }
    spacesIntro = intro;
    const eyebrow = intro.querySelector('.eyebrow');
    const heading = intro.querySelector('h2');
    const description = intro.querySelector(':scope > p:last-child');
    if (eyebrow) eyebrow.textContent = '02 / EXPLORE YOUR VILLA';
    if (heading) {
      heading.id = 'explore-villa-title';
      heading.textContent = t('별장 안팎을 둘러보세요.', 'Explore Your Villa & Resort.');
    }
    if (description) description.textContent = t('바다 곁의 별장과 테라스, 함께 머무는 공간을 만나보세요.', 'Explore villas, terraces, and shared spaces imagined by MyLodge.');
    spaces.setAttribute('aria-labelledby', 'explore-villa-title');
    const selector = spaces.querySelector('.facility-selector');
    if (selector) selector.setAttribute('aria-label', t('별장과 파크 공간 선택', 'Select villa and park spaces'));
  }
  const facilityStatus = document.createElement('p'); facilityStatus.className = 'facility-status-note container';
  facilityStatus.innerHTML = `${t('시설 사진은 콘셉트 이미지입니다. 준공 여부, 운영 상태, 파크별 제공 시설은 계약 전 확인해 주세요.', 'Facility photos are conceptual. Confirm completion, operating status, and park-specific amenities before contracting.')} <a href="#ownership-options">${t('디럭스·프레스티지 비교', 'Compare Deluxe and Prestige')} ↗</a>`;
  facilities.append(facilityStatus);

  // Older guide and gallery scripts create copy after localization.js has run.
  // Normalize their visible copy here, after all of those scripts, in one final pass.
  const guide = why?.querySelector('.lodge-guide');
  if (guide) {
    const guideCopy = english ? {
      title: 'Share the Gift of Your Villa',
      description: 'Your guests will remember you as someone special for sharing your villa.',
      kicker: 'THE JOY OF SHARING',
      cards: [
        ['Your Private Retreat', 'A quiet place to step away from everyday life.', 'Explore the Villa ↗'],
        ['Memories Made Together', 'Share unhurried meals with the people you love.', 'Explore Villa Life']
      ]
    } : {
      title: '지인에게 별장을 선사하세요',
      description: '별장을 함께 나눈 당신은 지인들에게 오래 기억될 특별한 사람이 됩니다.',
      kicker: '함께 나누는 기쁨',
      cards: [
        ['나만의 휴식처', '일상에서 벗어나 나만의 시간을 누리는 곳.', '별장 둘러보기 ↗'],
        ['함께 만드는 추억', '소중한 사람들과 여유로운 식사를 나눠보세요.', '별장 라이프 알아보기']
      ]
    };
    guide.querySelector('.guide-kicker')?.remove();
    guide.querySelector('.guide-editorial-heading h3')?.replaceChildren(document.createTextNode(guideCopy.title));
    guide.querySelector('.guide-editorial-heading p')?.replaceChildren(document.createTextNode(guideCopy.description));
    const guideLink = guide.querySelector('.guide-service-link');
    if (guideLink) {
      guideLink.href = '#owner-life';
      guideLink.replaceChildren(document.createTextNode(english ? 'Explore Owner Life ↗' : '오너 라이프 둘러보기 ↗'));
    }
    guide.querySelectorAll('.guide-story-card').forEach((card, index) => {
      const [heading, copy, actionText] = guideCopy.cards[index] || guideCopy.cards[0];
      card.querySelector('h4')?.replaceChildren(document.createTextNode(heading));
      card.querySelector('.guide-story-copy p')?.replaceChildren(document.createTextNode(copy));
      if (index === 1) card.href = '#owner-life';
      const action = card.querySelector('.guide-story-action');
      if (action) {
        const arrow = action.querySelector('b');
        action.firstChild.nodeValue = `${actionText.replace(/\s*[↗→]$/, '')} `;
        if (arrow) arrow.textContent = index === 1 ? '→' : '↗';
      }
      const image = card.querySelector('img');
      if (english && image) image.alt = index === 0 ? 'Concept illustration of a villa, pool, and landscape' : 'Friends sharing dinner at a villa, lifestyle concept';
    });
  }
  const gallery = main.querySelector('#villa-spaces');
  if (gallery && english) {
    const spacesEnglish = [
      ['The Villa', 'THE VILLA', 'A Place of Your Own.', 'A modular villa concept with generous windows and an open terrace.', 'MyLodge space concept'],
      ['Beachside', 'BEACHSIDE', 'A Weekend by the Sea.', 'Coastal pines, open sky, and time beside the water.', 'MyLodge space concept'],
      ['Pool Party & Cabanas', 'POOL PARTY & CABANAS', 'Gather by the Water.', 'A concept for poolside gatherings and cabana time.', 'Concept image · planned amenity'],
      ['BBQ & Outdoor Dining', 'BBQ & OUTDOOR DINING', 'Dine in the Open Air.', 'A concept for outdoor dining and shared BBQ evenings.', 'Concept image · planned amenity'],
      ['Café & Club', 'CAFÉ & CLUB', 'A Place to Unwind.', 'A lounge concept for coffee, light dining, and conversation.', 'Concept image · planned amenity'],
      ['Market', 'MARKET', 'Everyday Essentials.', 'A market concept for useful items and holiday treats.', 'Concept image · planned amenity'],
      ['Concierge', 'CONCIERGE', 'A Warm Welcome.', 'A service concept for arrival guidance and guest support.', 'Concept image · service details unconfirmed']
    ];
    const tabs = [...gallery.querySelectorAll('.facility-selector .facility-tab')];
    const photos = [...gallery.querySelectorAll('.facility-photo')];
    const applyEnglish = index => {
      const [label, tag, title, description, note] = spacesEnglish[index] || spacesEnglish[0];
      const selectedTab = tabs[index];
      if (selectedTab) selectedTab.querySelector('.facility-tab-meta b').textContent = label;
      gallery.querySelector('.facility-tag').textContent = `0${index + 1} / ${tag}`;
      gallery.querySelector('.facility-count').innerHTML = `0${index + 1} <i>/</i> 0${tabs.length}`;
      gallery.querySelector('.facility-gallery-copy h3').textContent = title;
      gallery.querySelector('.facility-description').textContent = description;
      gallery.querySelector('.facility-note').textContent = note;
      photos.forEach((photo, photoIndex) => { photo.alt = `${spacesEnglish[photoIndex][0]} · MyLodge space concept`; });
    };
    gallery.setAttribute('aria-label', 'Explore MyLodge villa and resort spaces');
    gallery.querySelector('.facility-selector')?.setAttribute('aria-label', 'Choose a villa and resort space');
    gallery.querySelector('[data-facility-previous]')?.setAttribute('aria-label', 'Previous space');
    gallery.querySelector('[data-facility-next]')?.setAttribute('aria-label', 'Next space');
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => applyEnglish(index));
      tab.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') applyEnglish(index); });
      tab.addEventListener('keydown', () => requestAnimationFrame(() => applyEnglish(Math.max(0, tabs.findIndex(item => item.getAttribute('aria-selected') === 'true')))));
    });
    gallery.querySelectorAll('.facility-control').forEach(button => button.addEventListener('click', () => requestAnimationFrame(() => applyEnglish(Math.max(0, tabs.findIndex(item => item.getAttribute('aria-selected') === 'true'))))));
    applyEnglish(Math.max(0, tabs.findIndex(item => item.getAttribute('aria-selected') === 'true')));
  }
  const visionHeading = main.querySelector('#vision .vision-heading');
  if (visionHeading && english) {
    const h2 = visionHeading.querySelector('h2');
    const description = visionHeading.querySelector('p');
    if (h2) h2.textContent = 'A destination imagined by MyLodge.';
    if (description) description.textContent = 'Explore a conceptual view of the wider resort environment.';
    visionHeading.querySelector('.eyebrow')?.replaceChildren(document.createTextNode('THE RESORT VISION'));
    main.querySelectorAll('#vision figcaption').forEach(caption => caption.textContent = 'AI site concept · final design and facilities are unconfirmed');
  }

  // Concierge cards retain their existing approved photo assets.
  const concierge = main.querySelector('#stay-services');
  if (concierge) {
    concierge.setAttribute('aria-labelledby', 'concierge-title');
    const intro = concierge.querySelector('.intro');
    if (intro) intro.innerHTML = `<p class="eyebrow">MYLODGE / CONCIERGE</p><h2 id="concierge-title">${t('몸만 오세요. 나머지는 준비되어 있습니다.', 'Arrive. We’ll Take Care of the Rest.')}</h2><p>${t('체크인, 객실 관리, 장보기와 바비큐, 단지 내 이동 서비스를 살펴보세요.', 'Explore arrival, housekeeping, groceries, BBQ, and resort transport.')}</p>`;
    const cards = concierge.querySelector('.promotion-cards');
    if (cards) {
      const services = english ? [
        ['Check-in & Arrival', 'Check-in instructions, arrival information, and villa access.', '/assets/images/concierge-arrival-20261007-1680.webp', 'Guests arriving at a villa and receiving arrival assistance · concept image'],
        ['Cleaning & Housekeeping', 'Villa cleaning, fresh linens, towels, and room preparation.', '/assets/images/concierge-care-20261007-1680.webp', 'A room being prepared with fresh linens · concept image'],
        ['Grocery & BBQ Services', 'Grocery delivery, BBQ setup, and food preparation.', '/assets/images/bbqplace.png', 'Outdoor BBQ and dining area · concept image'],
        ['Electric Cart Service', 'Transportation for guests and luggage within the resort.', '/assets/images/cart.png', 'Guests and luggage boarding an electric resort cart · concept image']
      ] : [
        ['체크인 및 입실 안내', '체크인 방법, 도착 안내 및 별장 출입 정보를 제공합니다.', '/assets/images/concierge-arrival-20261007-1680.webp', '별장에 도착해 안내를 받는 장면 · 콘셉트 이미지'],
        ['청소 및 객실 관리', '객실 청소, 침구와 수건 교체, 객실 정리 서비스를 안내합니다.', '/assets/images/concierge-care-20261007-1680.webp', '침구를 정돈하는 객실 관리 장면 · 콘셉트 이미지'],
        ['장보기 및 바비큐 서비스', '식료품 배달, 바비큐 준비 및 음식 서비스를 안내합니다.', '/assets/images/bbqplace.png', '야외 바비큐 및 다이닝 공간 · 콘셉트 이미지'],
        ['단지 내 전동카트 서비스', '단지 안에서 투숙객과 짐의 이동을 돕습니다.', '/assets/images/cart.png', '전동카트에 탑승하는 투숙객과 짐 · 콘셉트 이미지']
      ];
      cards.className = 'promotion-cards';
      cards.replaceChildren(...services.map(([title, description, src, alt], index) => {
        const article = document.createElement('article');
        article.className = 'concierge-service-card';
        article.innerHTML = `<figure><img src="${src}" alt="${alt}" width="1680" height="945" loading="lazy" decoding="async"></figure><div class="editorial-card-copy"><span class="eyebrow">0${index + 1}</span><h3>${title}</h3><p>${description}</p></div>`;
        return article;
      }));
      if (motionAllowed && window.gsap && window.ScrollTrigger) {
        window.gsap.registerPlugin(window.ScrollTrigger);
        const reveal = window.gsap.fromTo(cards.querySelectorAll('.concierge-service-card'),
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: .5, stagger: .09, ease: 'power2.out',
            scrollTrigger: { trigger: cards, start: 'top 82%', once: true } }
        );
        window.addEventListener('pagehide', () => reveal.scrollTrigger?.kill(), { once: true });
      }
    }
    let serviceNote = concierge.querySelector('.promotion-service-note');
    if (!serviceNote) { serviceNote = document.createElement('p'); concierge.querySelector('.container')?.append(serviceNote); }
    serviceNote.id = 'service-catalog';
    serviceNote.textContent = t('안내된 서비스는 기획 단계이며, 제공 여부 및 요금은 추후 확정됩니다.', 'Services shown are planned concepts. Availability and pricing are subject to confirmation.');
  }

  // Compose the primary homepage sections, then restore the destination-choice feature.
  const priorOffer = why?.querySelector('.access-facts'); priorOffer?.remove();
  const twoWays = main.querySelector('#brand-paths');
  const twoWaysHeading = twoWays?.querySelector('h2');
  const twoWaysLabel = twoWays?.querySelector('.eyebrow');
  if (twoWaysHeading) twoWaysHeading.textContent = english ? 'A Getaway. A New Beginning.' : '휴가와 함께, 새로운 시작.';
  if (twoWaysLabel) twoWaysLabel.textContent = 'MY LODGE / TWO WAYS TO STAY';
  if (twoWays) {
    const paths = [...twoWays.querySelectorAll('.path-card')];
    const copy = english ? [
      ['A Villa to Call Your Own', 'Explore villas in Korea and our shared ownership concept.', 'Explore Villas in Korea ↗'],
      ['Chiang Mai: Work, Stay & Connect', 'Explore our vision for stays, work, and community in Chiang Mai.', 'Explore Chiang Mai ↗']
    ] : [
      ['함께 준비하는 나만의 별장', '국내 별장과 공유 소유 방식을 살펴보세요.', '국내 별장 알아보기 ↗'],
      ['치앙마이에서 일하고, 머물고, 교류하세요', '체류와 업무, 커뮤니티를 잇는 치앙마이 구상입니다.', '치앙마이 살펴보기 ↗']
    ];
    paths.forEach((card, index) => {
      const [title, description, action] = copy[index] || copy[0];
      const heading = card.querySelector('h3');
      const paragraph = card.querySelector('p');
      const cta = card.querySelector('b');
      if (heading) heading.textContent = title;
      if (paragraph) paragraph.textContent = description;
      if (cta) cta.textContent = action;
      card.lang = english ? 'en' : 'ko';
    });
  }
  twoWays?.remove();
  main.append(pricing, ownerLife, facilities, concierge);
  if (twoWays) main.append(twoWays);
  const ownershipModel = pricing.querySelector('#ownership-model-before-pricing');
  if (ownershipModel) main.insertBefore(ownershipModel, pricing);
  const villaShowcase = pricing.querySelector('.ownership-villa-image-stack');
  if (villaShowcase && motionAllowed && window.gsap && window.ScrollTrigger) {
    window.gsap.registerPlugin(window.ScrollTrigger);
    const villaReveal = window.gsap.fromTo(villaShowcase,
      { autoAlpha: 0, scale: 1.04 },
      { autoAlpha: 1, scale: 1, duration: 1.1, ease: 'power2.out', scrollTrigger: { trigger: pricing, start: 'top 78%', once: true } }
    );
    window.addEventListener('pagehide', () => villaReveal.scrollTrigger?.kill(), { once: true });
  }
  const rightsAndUsage = pricing.querySelector('.ownership-rights-annual-layout');
  if (rightsAndUsage && motionAllowed && window.gsap && window.ScrollTrigger) {
    window.gsap.registerPlugin(window.ScrollTrigger);
    const title = rightsAndUsage.querySelector('.ownership-rights-intro');
    const rightFeatures = rightsAndUsage.querySelectorAll('.ownership-rights-list > li');
    const annualHeading = rightsAndUsage.querySelector('.ownership-annual-heading');
    const annualFigure = rightsAndUsage.querySelector('.ownership-annual-value');
    const annualNumbers = rightsAndUsage.querySelectorAll('.ownership-annual-value [data-annual-number]');
    const rightsTimeline = window.gsap.timeline({
      scrollTrigger: { trigger: title, start: 'top 82%', once: true },
      onComplete: () => { rightsAndUsage.dataset.rightsAnimation = 'complete'; }
    });
    rightsTimeline
      .fromTo(title, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: .48, ease: 'power2.out' }, 0)
      .fromTo(rightFeatures, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: .34, stagger: .07, ease: 'power2.out' }, .12);
    const usageTimeline = window.gsap.timeline({
      scrollTrigger: { trigger: rightsAndUsage.querySelector('.ownership-annual-group'), start: 'top 80%', once: true },
      onComplete: () => { rightsAndUsage.dataset.usageAnimation = 'complete'; }
    });
    usageTimeline
      .fromTo(annualHeading, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: .42, ease: 'power2.out' }, 0)
      .fromTo(annualNumbers, { autoAlpha: 0, y: 4 }, { autoAlpha: 1, y: 0, duration: .24, stagger: .08, ease: 'power1.out' }, .08)
      .fromTo(annualFigure, { autoAlpha: .8 }, { autoAlpha: 1, duration: .4, ease: 'power1.out' }, .08);
    window.addEventListener('pagehide', () => {
      rightsTimeline.scrollTrigger?.kill();
      usageTimeline.scrollTrigger?.kill();
    }, { once: true });
  } else if (rightsAndUsage) {
    rightsAndUsage.dataset.rightsAnimation = 'static';
    rightsAndUsage.dataset.usageAnimation = 'static';
  }
  if (location.hash === '#ownership-pricing') {
    requestAnimationFrame(() => requestAnimationFrame(() => {
      window.scrollTo(0, pricing.getBoundingClientRect().top + window.scrollY - 140);
    }));
  }
  main.querySelectorAll('#participation,#progress,#faq,.vacation-finale,#projects,#pricing,#consultation').forEach(section => section.remove());
  main.querySelector('.living-ribbon')?.remove();

  const navItems = [
    ['home', t('홈', 'Home')], ['our-villa', t('Why MyLodge', 'Why MyLodge')],
    ['ownership-pricing', t('소유·가격 안내', 'Ownership & Pricing')], ['owner-life', t('오너 라이프', 'Owner Life')],
    ['facilities', t('시설', 'Facilities')], ['stay-services', t('컨시어지', 'Concierge')]
  ];
  const registrationControl = () => {
    const label = t('회원가입', 'Sign Up');
    if (authUrl) {
      const link = document.createElement('a'); link.href = authUrl; link.className = 'primary header-cta member-signup';
      link.innerHTML = `<span>${label}</span>`; link.setAttribute('aria-label', label);
      return link;
    }
    const button = document.createElement('button'); button.type = 'button'; button.disabled = true;
    button.className = 'primary header-cta member-signup is-unavailable';
    button.innerHTML = `<span>${label}</span><small>${t('주소 미연결', 'Unavailable')}</small>`;
    button.title = t('한즈시티 인증 주소가 연결되지 않았습니다.', 'HanzCity authentication URL is not configured.');
    button.setAttribute('aria-label', `${label} · ${button.title}`);
    return button;
  };
  document.querySelector('.header-inner .header-cta')?.replaceWith(registrationControl());
  document.querySelectorAll('header nav').forEach(nav => {
    if (nav.id === 'mobile-menu') nav.hidden = true;
    const picker = nav.querySelector('.screen-view-picker');
    nav.innerHTML = navItems.map(([id, label]) => `<a href="#${id}">${label}</a>`).join('');
    if (picker) nav.append(picker);
    if (nav.id === 'mobile-menu') nav.append(registrationControl());
  });
  const hero = main.querySelector('#home');
  const heroPrimary = hero?.querySelector('.lodge-explore');
  if (heroPrimary) heroPrimary.href = '#ownership-pricing';
  const heroParkLink = hero?.querySelector('.lodge-park-link');
  if (heroParkLink) heroParkLink.href = '#brand-paths';

  // Redirect old in-page references to the closest surviving section or existing information route.
  const legacyTargets = { pricing: 'ownership-pricing', ownership: 'owner-life', participation: 'ownership-pricing', faq: 'ownership-pricing', projects: 'ownership-pricing' };
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    const oldId = link.getAttribute('href').slice(1);
    if (legacyTargets[oldId]) link.href = `#${legacyTargets[oldId]}`;
  });
  document.querySelectorAll('footer a[href="#our-villa"]').forEach(link => link.href = '#our-villa');
  document.body.classList.add('homepage-six');

  const sectionOrder = ['home', 'our-villa', 'ownership-pricing', 'owner-life', 'facilities', 'stay-services'];
  let scheduled = false;
  const updateNavigation = () => {
    scheduled = false;
    const current = sectionOrder.filter(id => document.getElementById(id)?.getBoundingClientRect().top <= 180).at(-1) || 'home';
    document.querySelectorAll('header nav a').forEach(link => {
      if (link.hash === '#' + current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };
  addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(updateNavigation); } }, { passive: true });
  updateNavigation();
  requestAnimationFrame(() => window.ScrollTrigger?.refresh());
})();
