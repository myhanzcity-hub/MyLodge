// Owner-page replicas of the homepage's actual components; homepage files are unchanged.
(()=>{'use strict';const english=false;const t=(ko,en)=>english?en:ko;const motionAllowed=!matchMedia('(prefers-reduced-motion: reduce)').matches;const money=amount=>`$${new Intl.NumberFormat('en-US').format(amount)}`;const pricing=document.querySelector('#owner-main-pricing');if(!pricing)return;
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
    import('../luxury-package-anatomy.js').then(module => {
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

  const ownershipFrame = document.querySelector('#owners-value .ownership-diagram-frame');
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
  ownershipObserver.observe(document.querySelector('#owners-value'));
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
        @media(min-width:561px){.ownership-stage{grid-template-columns:minmax(0,1.15fr) minmax(0,.85fr)!important}}
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
      // The embedded study computes the bridge when it plays, not when its
      // owner chapter or viewport changes. Re-anchor the completed scene only.
      const syncCompletedBridge = () => {
        if (!ownershipFrame.checkVisibility()) return;
        const label = doc.querySelector('#status')?.textContent || '';
        if (!/Villa complete|Complete \(reduced motion\)|별장 완성|완성 \(동작 줄임\)/.test(label)) return;
        doc.defaultView.positionBridge?.();
        const bridge = doc.querySelector('#ownership-bridge');
        if (bridge) bridge.style.strokeDashoffset = '0';
      };
      let bridgeWasComplete = false;
      new MutationObserver(() => {
        const complete = /Villa complete|Complete \(reduced motion\)|별장 완성|완성 \(동작 줄임\)/.test(status?.textContent || '');
        if (complete && !bridgeWasComplete) requestAnimationFrame(syncCompletedBridge);
        bridgeWasComplete = complete;
      }).observe(status, {childList:true,characterData:true,subtree:true});
      const updateHeight = () => {
        if (!ownershipFrame.checkVisibility() || ownershipFrame.clientWidth < 1) return;
        const contentHeight = Math.ceil(doc.querySelector('.page')?.getBoundingClientRect().height || stage.getBoundingClientRect().height);
        if (contentHeight > 100 && Math.abs(ownershipFrame.getBoundingClientRect().height - contentHeight - 12) > 2) ownershipFrame.style.height = `${contentHeight + 12}px`;
        requestAnimationFrame(syncCompletedBridge);
      };
      const sizeObserver = new ResizeObserver(updateHeight);
      sizeObserver.observe(doc.querySelector('.page'));
      sizeObserver.observe(ownershipFrame);
      window.addEventListener('hashchange', () => requestAnimationFrame(updateHeight));
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


})();
