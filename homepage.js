// Final homepage content and section order. Existing artwork, video, and controls stay in place.
(() => {
  'use strict';
  const main = document.querySelector('#main');
  if (!main?.querySelector('#home.hero')) return;

  const english = new URLSearchParams(location.search).get('lang') === 'en';
  const t = (ko, en) => english ? en : ko;
  const offer = Object.freeze({
    sharesPerVilla: 120, nightsPerShare: 3, standard: 3999, luxuryUpgrade: 150,
    installments: [
      { amount: 100, methodKo: 'LC계좌 입금', methodEn: 'Deposit to LC account' },
      { amount: 1000, methodKo: 'LC계좌 입금', methodEn: 'Deposit to LC account' },
      { amount: 1000, methodKo: '현금 납입', methodEn: 'Cash payment' },
      { amount: 1000, methodKo: '현금 납입', methodEn: 'Cash payment' },
      { amount: 899, methodKo: '현금 납입', methodEn: 'Cash payment' }
    ]
  });
  // Set window.HANZCITY_AUTH_URL in the site configuration when the real authentication URL is supplied.
  const authUrlValue = String(window.HANZCITY_AUTH_URL || '').trim();
  let authUrl = '';
  try {
    const candidate = new URL(authUrlValue);
    if (['https:', 'http:'].includes(candidate.protocol)) authUrl = candidate.href;
  } catch { /* Keep registration unavailable until a valid URL is configured. */ }
  const money = amount => `USD ${new Intl.NumberFormat('en-US').format(amount)}`;
  const route = (file, hash = '') => {
    const url = new URL(file, location.href);
    const params = new URLSearchParams(location.search);
    for (const key of ['lang', 'screen-frame']) if (params.has(key)) url.searchParams.set(key, params.get(key));
    url.hash = hash;
    return url.pathname + url.search + url.hash;
  };

  // Why MyLodge: retain the current hero-adjacent editorial photo and guide assets.
  const why = main.querySelector('#our-villa');
  if (why) {
    why.setAttribute('aria-labelledby', 'why-title');
    const label = why.querySelector('.eyebrow');
    if (label) label.textContent = t('WHY MYLODGE', 'WHY MYLODGE');
    const grid = why.querySelector('.invitation-grid');
    const photo = grid?.querySelector('figure');
    if (grid) {
      grid.innerHTML = `<div class="why-copy"><h2 id="why-title">${t('한 채를 함께,<br>휴가는 온전히 나답게.', 'One Villa, Shared.<br>Your Vacation, Your Way.')}</h2>
        <p>${t('별장 한 채를 120구좌로 나눠 함께 소유합니다. 구좌만큼 지분과 연간 이용일이 배정되고, 원하면 구좌를 더하거나 다른 지역을 추가할 수 있습니다.', 'Each villa is divided into 120 ownership shares. Your share determines your ownership interest and annual stay allocation. You can purchase additional shares or choose other locations.')}</p>
        <p class="why-legal-note">${t('제안 모델 안내입니다. 소유권·등기와 이용 조건은 최종 계약에서 확인해 주세요.', 'Proposed model information. Confirm ownership, registration, and usage terms in the final agreement.')}</p></div>${photo ? photo.outerHTML : ''}`;
      const facts = document.createElement('ul');
      facts.className = 'ownership-facts';
      facts.setAttribute('aria-label', t('공동 소유 제안 모델의 주요 숫자', 'Key figures in the proposed shared-ownership model'));
      facts.innerHTML = [
        [t('1구좌', '1 share'), t('1/120 지분', '1/120 interest')],
        [t('구좌당', 'Per share'), t('연 3박', '3 nights annually')],
        [t('선택 가능', 'Flexible choice'), t('여러 구좌 · 여러 지역', 'More shares · more locations')]
      ].map(([big, small]) => `<li><strong>${big}</strong><span>${small}</span></li>`).join('');
      grid.after(facts);
      const cta = document.createElement('a');
      cta.className = 'text-link why-cta'; cta.href = '#shared-ownership-structure';
      cta.textContent = t('공동 소유 구조 보기 ↗', 'Explore Shared Ownership ↗');
      facts.after(cta);
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
      <p class="eyebrow">${t('소유·가격 안내', 'OWNERSHIP & PRICING')}</p>
      <h2 id="ownership-pricing-title">${t('별장을 소유하는 새로운 방법.', 'A New Way to Own a Villa.')}</h2>
    </div>
    <div class="ownership-pricing-summary">
      <div class="ownership-price-panels" aria-label="${t('제안 구좌 가격', 'Proposed share prices')}">
        <article class="ownership-price-panel"><p>${t('기본형', 'Standard')}</p><strong>USD 3,999</strong><span>${t('/ 구좌', '/ share')}</span></article>
        <article class="ownership-price-panel"><p>${t('럭셔리형', 'Luxury')}</p><strong>USD 4,149</strong><span>${t('/ 구좌', '/ share')}</span><small>${t('USD 150 업그레이드 포함', 'Includes USD 150 upgrade')}</small></article>
      </div>
      <p class="ownership-first-payment"><span>${t('첫 납입', 'FIRST INSTALLMENT')}</span><strong>USD 100</strong><small>${t('전체 가격이 아닌 첫 번째 납입액입니다.', 'This is the first installment, not the total price.')}</small></p>
    </div>
    <div class="ownership-model-layout">
      <div class="ownership-diagram">
        <p class="ownership-diagram-heading">${t('한 채의 별장, 120개의 소유 구좌', 'ONE VILLA · 120 OWNERSHIP SHARES')}</p>
        <iframe class="ownership-diagram-frame" title="${t('120개 구좌가 빌라 모델로 이어지는 애니메이션', 'Animation connecting 120 ownership shares to a villa model')}" src="/experiments/ownership-villa-diagram/index.html" loading="lazy" scrolling="no"></iframe>
        <p class="ownership-diagram-unavailable" hidden>${t('애니메이션을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.', 'The animation could not be loaded. Please try again later.')}</p>
      </div>
      <ol class="ownership-model-points" aria-label="${t('공동 소유 핵심 안내', 'Shared ownership at a glance')}">
        <li><span>01</span><p>${t('빌라 한 채는 120개 소유 구좌로 나뉩니다.', 'Each villa is divided into 120 ownership shares.')}</p></li>
        <li><span>02</span><p>${t('한 구좌는 1/120 기준이며, 연 3박이 배정됩니다.', 'One share represents a 1/120 interest with three allocated nights annually.')}</p></li>
        <li><span>03</span><p>${t('원하는 만큼 구좌를 더하고 여러 지역을 선택할 수 있습니다.', 'You may add shares and choose among multiple locations.')}</p></li>
      </ol>
    </div>
    <div class="ownership-details">
      <div class="ownership-accordions" aria-label="${t('소유 및 이용 안내', 'Ownership and usage information')}">
        <details class="ownership-accordion" open>
          <summary><span>${t('소유 방식은 어떻게 되나요?', 'How does ownership work?')}</span><span class="accordion-mark" aria-hidden="true"></span></summary>
          <div class="accordion-panel"><div><p>${t('각 빌라는 120개 소유 구좌로 나뉩니다.', 'Each villa is divided into 120 ownership shares.')}</p><p class="ownership-legal-note">${t('한 구좌는 빌라 전체가 아닌 1/120 기준입니다. 구체적인 권리와 조건은 최종 계약에서 확인됩니다.', 'One share represents a 1/120 interest, not the entire villa. Specific rights and terms are subject to the final agreement.')}</p></div></div>
        </details>
        <details class="ownership-accordion">
          <summary><span>${t('분할 납입은 어떻게 진행되나요?', 'How do installment payments work?')}</span><span class="accordion-mark" aria-hidden="true"></span></summary>
          <div class="accordion-panel"><div>
            <p>${t('기본형 1구좌 제안 납입 일정', 'Proposed installment schedule for one Standard share')}</p>
            <ol class="ownership-installments">${offer.installments.map((item, index) => `<li><span>${t(`${index + 1}차`, `Installment ${index + 1}`)}</span><strong>${money(item.amount)}</strong><small>${english ? item.methodEn : item.methodKo}</small></li>`).join('')}</ol>
            <p class="ownership-luxury-note">${t('럭셔리형은 5차 납입에 USD 150이 추가되어, 마지막 납입액은 USD 1,049입니다.', 'For Luxury, USD 150 is added to installment five, making the final installment USD 1,049.')}</p>
            <p class="ownership-legal-note">${t('USD 100은 총 소유 가격이나 전체 납입액이 아니라 첫 번째 납입액입니다. 납입 방법과 조건은 최종 안내에서 확인해 주세요.', 'USD 100 is only the first installment, not the total ownership price or total amount due. Confirm payment methods and conditions in the final offer.')}</p>
          </div></div>
        </details>
        <details class="ownership-accordion">
          <summary><span>${t('연간 몇 박을 이용할 수 있나요?', 'How many nights do I receive?')}</span><span class="accordion-mark" aria-hidden="true"></span></summary>
          <div class="accordion-panel"><div><p>${t('각 구좌에는 예약 및 이용 약관에 따라 연 3박이 배정됩니다.', 'Each share includes an allocation of three nights annually, subject to reservation and usage terms.')}</p></div></div>
        </details>
      </div>
      <p class="ownership-offer-note">${t('제안된 구좌 안내이며, 최종 소유 구조·납입 조건 및 이용 약관은 확정 후 안내됩니다.', 'Proposed share information. Final ownership structure, payment conditions, and usage terms are pending confirmation.')}</p>
    </div>
  </div>`;

  // Reuse the standalone Anatomy study in place, adapting only its presentation to this section.
  const ownershipFrame = pricing.querySelector('.ownership-diagram-frame');
  let ownershipLastStartedAt = 0;
  const startOwnershipAnimation = () => {
    const doc = ownershipFrame?.contentDocument;
    const status = doc?.querySelector('#status')?.textContent || '';
    const complete = /Villa complete|Complete · reduced motion|별장 완성|완성 · 동작 줄임/.test(status);
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
        share: '1 Share = 3 Allocated Nights / Year.', shareNote: 'One highlighted unit within a shared villa.',
        villaCaption: 'The highlighted share leads into the villa model.', replay: 'Replay Experience',
        status: { ownership: 'Ownership shares', assembly: 'Villa assembly', complete: 'Villa complete', reduced: 'Complete · reduced motion' }
      } : {
        card: '공동 소유 모델', villa: ['구좌에서 별장으로', '건축 콘셉트'],
        share: '1구좌 = 연 3박 배정', shareNote: '공동 별장 중 강조한 한 구좌를 보여줍니다.',
        villaCaption: '선택한 구좌가 빌라 모델로 이어집니다.', replay: '애니메이션 다시 보기',
        status: { ownership: '공동 소유 구좌', assembly: '별장 조립', complete: '별장 완성', reduced: '완성 · 동작 줄임' }
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
        if (svgLabels[0]) svgLabels[0].textContent = '별장 1채 · 120구좌';
        if (svgLabels[1]) svgLabels[1].textContent = '10 × 12 · 구획당 1구좌';
      }
      const status = doc.querySelector('#status');
      if (status && !english) {
        const translateStatus = () => {
          const value = status.textContent;
          const translated = value
            .replace(/^Ownership shares/, labels.status.ownership)
            .replace(/^Villa assembly/, labels.status.assembly)
            .replace(/^Villa complete$/, labels.status.complete)
            .replace(/^Complete · reduced motion$/, labels.status.reduced)
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

  // Keep existing owner photo/card decks, life-story animation, and lifestyle image sections intact.
  const ownerLife = document.createElement('section');
  ownerLife.id = 'owner-life'; ownerLife.className = 'homepage-group';
  ownerLife.setAttribute('aria-labelledby', 'owner-life-title');
  for (const id of ['ownership', 'life-story', 'lifestyle', 'nature']) {
    const section = main.querySelector('#' + id);
    if (section) ownerLife.append(section);
  }
  const ownerIntro = document.createElement('div');
  ownerIntro.className = 'owner-life-intro container';
  ownerIntro.innerHTML = `<p class="eyebrow">${t('OWNER LIFE', 'OWNER LIFE')}</p><h2 id="owner-life-title">${t('이번 주말, 우리 별장 갈래?', 'Want to Come to My Villa This Weekend?')}</h2><p>${t('친구들을 초대하고, 테라스에서 저녁을 나누고, 풀사이드에서 함께 시간을 보내는 별장 라이프.', 'Invite your friends, share dinner on the terrace, and spend unforgettable afternoons together by the pool.')}</p>`;
  ownerLife.prepend(ownerIntro);
  const ownershipCards = ownerLife.querySelector('#ownership .promotion-cards');
  if (ownershipCards) {
    const stories = english ? [
      ['A Weekend Worth Sharing', 'Imagine sharing the pride of your own villa with friends.'],
      ['Afternoons by the Pool', 'Picture an easy afternoon together by the water.'],
      ['BBQ Evenings Together', 'Terrace dining, music, and celebrations in good company.']
    ] : [
      ['친구에게 건네는 초대', '나만의 별장을 가까운 사람들과 함께 누리는 주말을 그려봅니다.'],
      ['풀사이드에서 만나는 오후', '친구들과 물가에 모여 보내는 여유로운 시간을 상상합니다.'],
      ['바비큐로 이어지는 저녁', '테라스 다이닝과 음악, 함께 축하하는 순간들을 그립니다.']
    ];
    const cards = [...ownershipCards.querySelectorAll('article')];
    const socialCard = cards.find(card => card.querySelector('img')?.src.includes('owner-connect'));
    if (socialCard && ownershipCards.firstElementChild !== socialCard) ownershipCards.prepend(socialCard);
    [...ownershipCards.querySelectorAll('article')].forEach((card, index) => {
      const [title, copy] = stories[index] || stories[0];
      card.querySelector('.editorial-card-copy h3')?.replaceChildren(document.createTextNode(title));
      card.querySelector('.editorial-card-copy p')?.replaceChildren(document.createTextNode(copy));
    });
    let conceptNote = ownerLife.querySelector('.owner-story-note');
    if (!conceptNote) { conceptNote = document.createElement('p'); conceptNote.className = 'owner-story-note container'; ownershipCards.after(conceptNote); }
    conceptNote.textContent = t('생활 장면은 마이롯지가 지향하는 콘셉트이며, 행사 운영을 확정하는 안내가 아닙니다.', 'Lifestyle scenes express the MyLodge concept; they do not confirm scheduled or operating events.');
  }
  const community = document.createElement('section'); community.className = 'owner-community container'; community.id = 'lifestyle-communities';
  community.innerHTML = `<p class="eyebrow">${t('A PLACE FOR EVERY KIND OF GETAWAY', 'A PLACE FOR EVERY KIND OF GETAWAY')}</p><h3>${t('어디서 쉴지보다, 누구와 어울릴지.', 'Choose Your Way to Spend Time Together.')}</h3><p>${t('아이와 뛰노는 패밀리, 둘만의 시간을 위한 커플, 새 친구를 만나는 소셜, 인맥이 오가는 비즈니스, 쉼에 집중하는 웰니스.', 'Family time, couples’ escapes, social connections, business networking, and wellness-focused rest.')}</p><ul class="lifestyle-categories">${(english ? ['Family', 'Couples', 'Social', 'Business', 'Wellness'] : ['패밀리', '커플', '소셜', '비즈니스', '웰니스']).map((label, i) => `<li><span>0${i + 1}</span>${label}</li>`).join('')}</ul><a class="text-link" href="#lifestyle-communities">${t('나에게 맞는 섹션 찾기', 'Find Your Lifestyle Section')} ↗</a><p class="community-note">${t('라이프스타일 카테고리 제안 · 실제 프로그램 운영 여부는 확인 중', 'Lifestyle categories are proposed; program availability is unconfirmed.')}</p>`;
  ownerLife.append(community);
  const member = document.createElement('section'); member.className = 'member-community container'; member.id = 'member-community';
  member.innerHTML = `<p class="eyebrow">${t('MEMBER COMMUNITY · COMING SOON', 'MEMBER COMMUNITY · COMING SOON')}</p><h3>${t('휴가가 끝나도, 사람은 남습니다.', 'The Connections Continue After Vacation.')}</h3><p>${t('바비큐 테이블에서 만난 이웃, 라운지에서 나눈 사업 이야기. 별장에서 시작된 인연이 일상으로 이어지도록 멤버 모임을 준비하고 있습니다.', 'Meet neighbors over BBQ and share ideas in the lounge. Member gatherings are being prepared to help connections made at the villa continue in everyday life.')}</p><span class="coming-soon-badge">${t('준비 중', 'Coming Soon')}</span></section>`;
  ownerLife.append(member);
  const myPage = document.createElement('aside'); myPage.className = 'owner-progress-note container'; myPage.id = 'owner-progress';
  myPage.innerHTML = `<div><p class="eyebrow">${t('OWNER CONTRACT & PAYMENT PROGRESS', 'OWNER CONTRACT & PAYMENT PROGRESS')}</p><h3>${t('내 별장이 지어지는 과정, 손안에서.', 'Follow Your Villa’s Progress, in Your Hands.')}</h3><p>${t('계약과 납입 내역, 등기와 공사 단계, 필요한 서류까지. 마이페이지에서 언제든 확인하세요.', 'Review contracts, payment history, registration and construction stages, and required documents in My Page.')}</p></div><div><span class="coming-soon-badge">${t('마이페이지 기능 준비 중', 'My Page feature coming soon')}</span><p>${t('현재 계약·납입 진행 조회 기능은 제공되지 않습니다.', 'Contract and payment-progress information is not currently available online.')}</p></div>`;
  ownerLife.append(myPage);
  member.insertAdjacentHTML('beforeend', `<a class="text-link" href="#owner-progress">${t('계약·납입 진행 안내 보기', 'View Contract & Payment Progress Information')} ↗</a>`);

  // Facilities: retain the existing interactive selector and all current media.
  const facilities = document.createElement('section');
  facilities.id = 'facilities'; facilities.className = 'homepage-group';
  facilities.setAttribute('aria-labelledby', 'facilities-title');
  const spaces = main.querySelector('#villa-spaces');
  const vision = main.querySelector('#vision');
  if (spaces) facilities.append(spaces);
  if (vision) facilities.append(vision);
  const facilityIntro = document.createElement('div'); facilityIntro.className = 'facility-home-intro container';
  facilityIntro.innerHTML = `<p class="eyebrow">${t('FACILITIES', 'FACILITIES')}</p><h2 id="facilities-title">${t('문을 열면, 우리만의 별장.', 'Open the Door to Your Own Villa.')}</h2><p>${t('외관과 실내, 테라스와 평면도부터 수영장, 바비큐, 소셜·엔터테인먼트 공간까지 살펴보세요.', 'Explore villa exteriors, interiors, terraces and floor plans, alongside pools, BBQ spaces, and social and entertainment areas.')}</p>`;
  facilities.prepend(facilityIntro);
  const facilityCategories = document.createElement('div');
  facilityCategories.className = 'facility-category-links container';
  facilityCategories.innerHTML = `<span>${t('외관', 'Exterior')}</span><span>${t('실내', 'Interior')}</span><span>${t('테라스', 'Terrace')}</span><span>${t('평면도·공간 배치 콘셉트', 'Floor & Site Plan Concepts')}</span><span>${t('수영장', 'Swimming Pools')}</span><span>${t('바비큐 공간 · 계획', 'BBQ Spaces · Planned')}</span><span>${t('소셜·엔터테인먼트 공간 · 계획', 'Social & Entertainment Areas · Planned')}</span><p>${t('개별 빌라의 확정 평면도는 아직 공개되지 않았습니다. 파크 공간 배치도는 콘셉트 자료입니다.', 'Confirmed villa floor plans are not available yet. Park layout drawings are conceptual.')}</p>`;
  facilityIntro.after(facilityCategories);
  if (spaces) {
    const heading = spaces.querySelector('.vacation-intro h2');
    const description = spaces.querySelector('.vacation-intro>p:last-child');
    if (heading) heading.innerHTML = t('별장 안팎의 공간을<br><em>하나씩 둘러보세요.</em>', 'Explore the Spaces<br><em>Inside and Around Your Villa.</em>');
    if (description) description.textContent = t('기존 이미지와 선택 갤러리로 마이롯지가 구상하는 공간을 살펴보세요.', 'Use the existing image selector to explore the spaces MyLodge is planning.');
    const selector = spaces.querySelector('.facility-selector');
    if (selector) selector.setAttribute('aria-label', t('별장과 파크 공간 선택', 'Select villa and park spaces'));
  }
  const facilityStatus = document.createElement('p'); facilityStatus.className = 'facility-status-note container';
  facilityStatus.innerHTML = `${t('시설은 기획 콘셉트입니다. 준공·운영 및 파크별 제공 여부는 확정 후 안내합니다.', 'Facilities shown are planning concepts. Completion, operation, and park-specific availability are pending confirmation.')} <a href="#ownership-options">${t('기본형·럭셔리형 비교', 'Compare Standard and Luxury options')} ↗</a>`;
  facilities.append(facilityStatus);

  // Older guide and gallery scripts create copy after localization.js has run.
  // Normalize their visible copy here, after all of those scripts, in one final pass.
  const guide = why?.querySelector('.lodge-guide');
  if (guide && english) {
    guide.querySelector('.guide-kicker')?.replaceChildren(document.createTextNode('MYLODGE GUIDE · START HERE'));
    guide.querySelector('.guide-editorial-heading p')?.replaceChildren(document.createTextNode('Explore the place and a day in villa life.'));
    guide.querySelector('.guide-service-link')?.replaceChildren(document.createTextNode('Explore Concierge ↗'));
    const guideCopy = [
      ['AI space concept · site and final design unconfirmed', 'The place, imagined'],
      ['AI lifestyle concept · not an actual customer or service scene', 'A day to share']
    ];
    guide.querySelectorAll('.guide-story-card').forEach((card, index) => {
      const [caption, heading] = guideCopy[index] || guideCopy[0];
      card.querySelector('figcaption')?.replaceChildren(document.createTextNode(caption));
      card.querySelector('h4')?.replaceChildren(document.createTextNode(heading));
      const copy = index === 0 ? 'Sea, pools, terraces, and lounges.' : 'Imagine time for rest, connection, and new ideas.';
      card.querySelector('.guide-story-copy p')?.replaceChildren(document.createTextNode(copy));
      card.querySelector('.guide-story-action')?.replaceChildren(document.createTextNode(index === 0 ? 'Explore Facilities ↗' : 'Explore Owner Life ↗'));
      const image = card.querySelector('img');
      if (image) image.alt = index === 0 ? 'Concept illustration of a villa, pool, and landscape' : 'Friends sharing dinner at a villa, lifestyle concept';
    });
  }
  const gallery = main.querySelector('#villa-spaces');
  if (gallery && english) {
    const spacesEnglish = [
      ['Exterior', 'A villa and pool open to the landscape.', 'A concept for villa spaces, a terrace, and time together.', ['Modular villa concept', 'A terrace for views and connection', 'Pool and cabana concept']],
      ['Seaside', 'Closer to the sea. More room to unwind.', 'Imagine a relaxed escape beside the waves and sunshine.', ['Seaside views', 'Time to enjoy the beach']],
      ['Pool & Cabana', 'Evenings beside the water.', 'A poolside setting for music, company, and unhurried rest.', ['Poolside gathering concept', 'Relaxing in the cabana']],
      ['Cafe & Club', 'Coffee by day. Music by night.', 'A lounge concept for conversation, music, and dancing.', ['Cafe and club lounge concept', 'Gatherings with music']],
      ['Market', 'Essentials for your stay.', 'A convenient market concept for snacks and holiday essentials.', ['Food and holiday essentials', 'A resort market concept']],
      ['Concierge', 'A warm welcome. An easier stay.', 'A concierge concept for arrival guidance and guest support.', ['Arrival and facility guidance', 'Support during a stay']]
    ];
    gallery.querySelectorAll('.space-panel').forEach((panel, index) => {
      const [tabTitle, title, description, points] = spacesEnglish[index] || spacesEnglish[0];
      panel.querySelector('.eyebrow')?.replaceChildren(document.createTextNode(`0${index + 1} / ${['THE VILLA', 'SEASIDE', 'POOL & CABANA', 'CAFE & CLUB', 'MARKET', 'CONCIERGE'][index] || 'THE VILLA'}`));
      panel.querySelector('h3')?.replaceChildren(document.createTextNode(title));
      panel.querySelector('.space-copy>p:not(.eyebrow)')?.replaceChildren(document.createTextNode(description));
      const list = panel.querySelector('ul');
      if (list) list.innerHTML = points.map(point => `<li>${point}</li>`).join('');
      const tab = gallery.querySelector(`#space-tab-${index}`);
      if (tab) { const number = tab.querySelector('span'); tab.replaceChildren(...[number, document.createTextNode(tabTitle)].filter(Boolean)); }
      const caption = panel.querySelector('figcaption');
      if (caption) caption.textContent = 'AI space concept';
      const image = panel.querySelector('img');
      if (image) image.alt = `${tabTitle} · MyLodge space concept`;
    });
    gallery.querySelectorAll('.facility-selector button').forEach((button, index) => {
      button.addEventListener('click', () => {
        const panel = gallery.querySelectorAll('.space-panel')[index];
        if (panel) {
          const image = panel.querySelector('img');
          if (image) image.alt = `${button.textContent.replace(/^\d+/, '').trim()} · MyLodge space concept`;
        }
      });
    });
  }
  const visionHeading = main.querySelector('#vision .vision-heading');
  if (visionHeading && english) {
    const h2 = visionHeading.querySelector('h2');
    const description = visionHeading.querySelector('p');
    if (h2) h2.textContent = 'A destination imagined by MyLodge.';
    if (description) description.textContent = 'Explore a conceptual view of the wider resort environment.';
    visionHeading.querySelector('.eyebrow')?.replaceChildren(document.createTextNode('THE RESORT VISION'));
    main.querySelectorAll('#vision figcaption').forEach(caption => caption.textContent = 'AI site concept · final facilities and design unconfirmed');
  }

  // Concierge cards reuse the three existing card images; no new media is introduced.
  const concierge = main.querySelector('#stay-services');
  if (concierge) {
    concierge.setAttribute('aria-labelledby', 'concierge-title');
    const intro = concierge.querySelector('.intro');
    if (intro) intro.innerHTML = `<p class="eyebrow">MY LODGE / CONCIERGE</p><h2 id="concierge-title">${t('몸만 오세요. 나머지는 준비되어 있습니다.', 'Just Bring Yourself. We’ll Take Care of the Rest.')}</h2><p>${t('객실 청소와 새 침구, 장보기와 다이닝, 단지 안 카트 이동까지. 필요한 서비스만 골라 체류를 가볍게 하세요.', 'From room cleaning and fresh bedding to shopping, dining, and transportation around the resort, choose the services that make your stay easier.')}</p>`;
    const cards = concierge.querySelector('.promotion-cards');
    if (cards) {
      const existing = [...cards.querySelectorAll('article')];
      const services = english ? [
        ['Room cleaning', 'Included or paid: to be confirmed', 'Applicable park: to be confirmed', 'Availability: not yet available'],
        ['Fresh bedding', 'Included or paid: to be confirmed', 'Applicable park: to be confirmed', 'Availability: not yet available'],
        ['Shopping', 'Included or paid: to be confirmed', 'Applicable park: to be confirmed', 'Availability: not yet available'],
        ['Dining', 'Included or paid: to be confirmed', 'Applicable park: to be confirmed', 'Availability: not yet available'],
        ['Cart transportation', 'Included or paid: to be confirmed', 'Applicable park: to be confirmed', 'Availability: not yet available']
      ] : [
        ['객실 청소', '포함·유료 여부: 확인 중', '적용 파크: 확인 중', '제공 상태: 준비 중'],
        ['새 침구', '포함·유료 여부: 확인 중', '적용 파크: 확인 중', '제공 상태: 준비 중'],
        ['장보기', '포함·유료 여부: 확인 중', '적용 파크: 확인 중', '제공 상태: 준비 중'],
        ['다이닝', '포함·유료 여부: 확인 중', '적용 파크: 확인 중', '제공 상태: 준비 중'],
        ['카트 이동', '포함·유료 여부: 확인 중', '적용 파크: 확인 중', '제공 상태: 준비 중']
      ];
      cards.replaceChildren(...services.map((service, index) => {
        const article = document.createElement('article'); article.className = 'concierge-service-card';
        const source = existing[index % Math.max(existing.length, 1)];
        const figure = source?.querySelector('figure')?.cloneNode(true);
        if (figure) article.append(figure);
        article.innerHTML += `<div class="editorial-card-copy"><span class="eyebrow">0${index + 1}</span><h3>${service[0]}</h3><ul>${service.slice(1).map(line => `<li>${line}</li>`).join('')}</ul></div>`;
        return article;
      }));
    }
    let serviceNote = concierge.querySelector('.promotion-service-note');
    if (!serviceNote) { serviceNote = document.createElement('p'); concierge.querySelector('.container')?.append(serviceNote); }
    serviceNote.id = 'service-catalog';
    serviceNote.innerHTML = `${t('서비스별 제공·요금·적용 파크는 확정 전입니다. 현재 서비스 예약 및 신청은 제공되지 않습니다.', 'Service availability, pricing, and applicable parks are unconfirmed. Service booking and requests are not available.')} <a href="#service-catalog">${t('서비스·요금 보기', 'View Services & Pricing')} ↗</a>`;
  }

  // Compose exactly six homepage sections while preserving internal section controls.
  const priorOffer = why?.querySelector('.access-facts'); priorOffer?.remove();
  main.append(pricing, ownerLife, facilities, concierge);
  if (location.hash === '#ownership-pricing') {
    requestAnimationFrame(() => requestAnimationFrame(() => {
      window.scrollTo(0, pricing.getBoundingClientRect().top + window.scrollY - 140);
    }));
  }
  main.querySelectorAll('#brand-paths,#participation,#progress,#faq,.vacation-finale,#projects,#pricing,#consultation').forEach(section => section.remove());
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
  const heroPrice = hero?.querySelector('.lodge-pricing-strip');
  if (heroPrice) heroPrice.id = 'hero-pricing';
  const heroPrimary = hero?.querySelector('.lodge-explore');
  if (heroPrimary) heroPrimary.href = '#ownership-pricing';
  const heroPark = hero?.querySelector('.lodge-lifestyle');
  if (heroPark) heroPark.href = route('domestic-villas.html', 'project-jumunjin');

  // Redirect old in-page references to the closest surviving section or existing information route.
  const legacyTargets = { pricing: 'ownership-pricing', ownership: 'owner-life', participation: 'ownership-pricing', progress: 'owner-progress', faq: 'ownership-pricing', 'brand-paths': 'facilities', projects: 'ownership-pricing' };
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
