// Local review panels; they never submit applications, accept payments, or change inventory.
(() => {
  'use strict';
  window.MyLodgePlanningExtra = { mount };
  function mount({ main, english = false }) {
    if (!main || document.getElementById('contract-progress')) return null;
    const t = (ko, en) => english ? en : ko;
    const copy = value => `<span data-planning-copy>${value}</span>`;
    const paragraph = value => `<p data-planning-copy>${value}</p>`;
    const progress = document.createElement('section');
    progress.id = 'contract-progress'; progress.className = 'planning-extra-section';
    progress.setAttribute('aria-labelledby', 'contract-progress-title');
    progress.innerHTML = `<div class="container planning-extra-inner">
      <div class="planning-extra-heading"><p class="eyebrow">${t('계약과 진행 확인', 'OWNERSHIP / PROGRESS')}</p>
        <h2 id="contract-progress-title" data-planning-copy>${t('내 별장이 지어지는 과정, 손안에서.', 'Your villa, from contract to completion.')}</h2>
        <div class="planning-extra-lead">${paragraph(t('계약과 납입 내역, 등기와 공사 단계, 필요한 서류까지.', 'Your contract, payments, ownership and construction.'))}${paragraph(t('마이페이지에서 언제든 확인하세요.', 'Follow every step in your member account.'))}</div>
      </div>
      <ol class="planning-progress-list">
        <li><span class="planning-step-number">01</span><h3 data-planning-copy>${t('상품·계약 확인', 'Review your contract')}</h3>${paragraph(t('지역과 타입, 구좌 수를 확인합니다.', 'Review your location, villa type and shares.'))}</li>
        <li><span class="planning-step-number">02</span><h3 data-planning-copy>${t('차수별 납입', 'Pay by installment')}</h3>${paragraph(t('납입 방법과 확인 내역을 구분합니다.', 'Track payment methods and verified receipts.'))}</li>
        <li><span class="planning-step-number">03</span><h3 data-planning-copy>${t('등기·공사 확인', 'Ownership and build')}</h3>${paragraph(t('소유권과 공사 단계를 따로 살펴봅니다.', 'Follow ownership and construction separately.'))}</li>
        <li><span class="planning-step-number">04</span><h3 data-planning-copy>${t('서류·증빙 확인', 'Documents and records')}</h3>${paragraph(t('계약과 납입에 필요한 자료를 확인합니다.', 'Find your contract and payment records.'))}</li>
        <li><span class="planning-step-number">05</span><h3 data-planning-copy>${t('이용·예약 안내', 'Stays and reservations')}</h3>${paragraph(t('이용 개시와 예약 조건을 확인합니다.', 'Check when and how stays become available.'))}</li>
      </ol>
      <div class="planning-payment-flow" aria-label="${t('차수별 납입 방법', 'Payment methods by installment')}"><span data-planning-copy>${t('1·2차 LC계좌 입금', 'Installments 1–2: LC transfer')}</span><span aria-hidden="true">→</span><span data-planning-copy>${t('3~5차 현금 납입', 'Installments 3–5: cash')}</span></div>
      <div class="planning-extra-actions"><button type="button" class="planning-extra-button" data-open-contract>${copy(t('계약·납입 절차 보기', 'View contract and payment steps'))}<span aria-hidden="true">↗</span></button><span class="planning-service-state" data-planning-copy>${t('마이페이지 서비스 준비 중', 'Member account service in preparation')}</span></div>
    </div>`;
    const closing = document.createElement('section');
    closing.id = 'start-ownership'; closing.className = 'planning-extra-section planning-start-section';
    closing.setAttribute('aria-labelledby', 'start-ownership-title');
    closing.innerHTML = `<div class="container planning-extra-inner">
      <div class="planning-start-layout"><div class="planning-extra-heading"><p class="eyebrow">${t('분양상품 선택', 'OWNERSHIP / YOUR FIRST VILLA')}</p>
        <h2 id="start-ownership-title" data-planning-copy>${t('이제, 별장 있는 사람이 될 차례.', 'Your first villa starts here.')}</h2>
        <div class="planning-extra-lead">${paragraph(t('지역, 섹션, 타입, 구좌 수만 고르면 신청은 끝납니다.', 'Choose a location, section, type and number of shares.'))}${paragraph(t('1차 USD 100으로 나의 구좌를 시작하세요.', 'Start with a first installment of USD 100.'))}</div>
        <div class="planning-start-price"><span data-planning-copy>${t('국내 디럭스 1구좌', 'One domestic Deluxe share')}</span><strong data-planning-copy>USD 3,999</strong><span data-planning-copy>${t('1차 납입금 USD 100 포함', 'Includes the USD 100 first installment')}</span></div>
        <div class="planning-extra-actions"><a class="planning-extra-button" href="#ownership-selection-preview" data-open-preview>${copy(t('분양상품 선택하기', 'Choose a villa package'))}<span aria-hidden="true">↗</span></a><button type="button" class="planning-extra-button planning-extra-outline" data-open-consultation>${copy(t('1:1 상담 신청', 'Request a consultation'))}<span aria-hidden="true">↗</span></button></div>
      </div><figure class="planning-start-photo"><img src="assets/brand/single-storey.png" width="1536" height="1024" loading="lazy" alt="${t('바닷가 별장과 테라스의 공간 콘셉트', 'Concept of a seaside villa and terrace')}"><figcaption data-planning-copy>${t('공간 콘셉트 이미지', 'Concept image')}</figcaption></figure></div>
      <details class="planning-selection-preview" id="ownership-selection-preview"><summary data-planning-copy>${t('선택 내용 미리보기', 'Preview a selection')}</summary><div class="planning-preview-body">
        ${paragraph(t('선택 흐름을 미리 확인하는 화면입니다.', 'Explore the selection process before applying.'))}
        <div class="planning-preview-fields">
          <label><span data-planning-copy>${t('지역', 'Location')}</span><select name="preview-region"><option value="jumunjin">${t('주문진', 'Jumunjin')}</option><option value="yangyang">${t('양양', 'Yangyang')}</option><option value="chiangmai">${t('치앙마이', 'Chiang Mai')}</option></select></label>
          <label><span data-planning-copy>${t('섹션', 'Section')}</span><select name="preview-section"><option value="family">${t('패밀리', 'Family')}</option><option value="couples">${t('커플', 'Couples')}</option><option value="social">${t('소셜', 'Social')}</option><option value="business">${t('비즈니스', 'Business')}</option><option value="wellness">${t('웰니스', 'Wellness')}</option></select></label>
          <label><span data-planning-copy>${t('타입', 'Villa type')}</span><select name="preview-type"><option value="deluxe">${t('디럭스 · 실내 33㎡', 'Deluxe · indoor 33 m²')}</option><option value="prestige">${t('프레스티지 · 실내 66㎡', 'Prestige · indoor 66 m²')}</option></select></label>
          <label><span data-planning-copy>${t('구좌 수', 'Shares')}</span><input name="preview-shares" type="number" min="1" max="120" step="1" value="1" inputmode="numeric"></label>
        </div>
        <label class="planning-preview-option"><input name="preview-luxury" type="checkbox"><span data-planning-copy>${t('럭셔리 패키지 추가', 'Add the luxury package')}</span></label>
        <div class="planning-selection-prices" aria-live="polite"><p data-preview-base></p><p data-preview-option></p><p class="planning-selection-total" data-preview-total></p><p data-preview-first></p></div>
        <p class="planning-preview-note" data-preview-section>${t('섹션은 선호 유형이며, 실제 배정은 상품별로 확인합니다.', 'Sections describe preferences; actual allocation is confirmed by product.')}</p>
        <button type="button" class="planning-extra-button" data-review-selection>${copy(t('선택 내용 확인', 'Review this selection'))}<span aria-hidden="true">↗</span></button>
        <a class="planning-preview-pricing-link" href="#ownership-pricing">${t('분양상품 가격 다시 보기', 'Review villa package prices')} ↗</a>
        <p class="planning-preview-note">${t('실제 신청·재고 확보·결제는 진행되지 않습니다.', 'This preview does not submit an application, reserve shares or accept payment.')}</p>
      </div></details>
      <div class="planning-extra-notes">${paragraph(t('판매 일정과 신청 서비스는 준비 중입니다.', 'Sales scheduling and applications are in preparation.'))}${paragraph(t('최종 소유·납입·이용 조건은 상품별 계약에 따릅니다.', 'Final ownership, payment and stay terms depend on the product contract.'))}</div>
    </div><div class="planning-mobile-action"><button type="button" data-mobile-product>${copy(t('상품 보기', 'View packages'))}<span aria-hidden="true">↗</span></button></div>`;
    // Keep service readiness beside the promise, including on a short mobile screen.
    progress.querySelector('.planning-extra-heading').append(progress.querySelector('.planning-service-state'));
    const previewState=document.createElement('p');previewState.className='planning-service-state';previewState.dataset.planningCopy='';previewState.textContent=t('분양 신청 서비스 준비 중 · 선택 미리보기', 'Applications in preparation · selection preview');
    closing.querySelector('.planning-extra-lead').after(previewState);
    main.append(progress, closing);
    const dialogs = [];
    const makeDialog = (id, title, content) => {
      const dialog = document.createElement('dialog'); dialog.id = id; dialog.className = 'planning-extra-dialog';
      dialog.setAttribute('aria-labelledby', `${id}-title`);
      dialog.innerHTML = `<div class="planning-dialog-heading"><h2 id="${id}-title" tabindex="-1">${title}</h2><button type="button" class="planning-dialog-close" aria-label="${t('안내 닫기', 'Close information')}">${t('닫기', 'Close')} ×</button></div><div class="planning-dialog-content">${content}</div><div class="planning-dialog-footer"><button type="button" class="planning-extra-button" data-dialog-done>${t('확인', 'Done')}</button></div>`;
      let opener = null, previousOverflow = '';
      const open = element => { opener = element || document.activeElement; previousOverflow = document.body.style.overflow; document.body.style.overflow = 'hidden'; dialog.showModal(); dialog.querySelector('h2').focus(); };
      const close = () => dialog.close();
      dialog.querySelector('.planning-dialog-close').addEventListener('click', close); dialog.querySelector('[data-dialog-done]').addEventListener('click', close);
      dialog.addEventListener('close', () => { document.body.style.overflow = previousOverflow; opener?.focus({ preventScroll: true }); });
      dialog.addEventListener('keydown', event => {
        if (event.key !== 'Tab') return;
        const focusable = [...dialog.querySelectorAll('button:not(:disabled),a[href],input:not(:disabled),select:not(:disabled),textarea:not(:disabled),summary,[tabindex="0"]')].filter(element => element.checkVisibility());
        if (!focusable.length) { event.preventDefault(); return; }
        const index = focusable.indexOf(document.activeElement);
        if (event.shiftKey && index <= 0) { event.preventDefault(); focusable.at(-1).focus(); }
        else if (!event.shiftKey && (index < 0 || index === focusable.length - 1)) { event.preventDefault(); focusable[0].focus(); }
      });
      dialog.addEventListener('click', event => { const r = dialog.getBoundingClientRect(); if (event.target === dialog && (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom)) close(); });
      document.body.append(dialog); dialogs.push(dialog); return { dialog, open };
    };
    const contract = makeDialog('planning-contract-dialog', t('계약·납입 절차', 'Contract and payment steps'), `<p class="planning-dialog-status">${t('절차 안내 · 서비스 준비 중', 'Process guide · service in preparation')}</p><ol class="planning-contract-steps"><li><h3>${t('상품과 계약을 확인합니다.', 'Review the product and contract.')}</h3><p>${t('지역·섹션·타입·구좌 수와 배정 조건을 확인합니다.', 'Confirm the location, section, type, shares and allocation terms.')}</p></li><li><h3>${t('1·2차는 LC계좌로 입금합니다.', 'Pay installments 1–2 to the LC account.')}</h3><p>${t('1차는 계약 시 USD 100, 2차는 모집 완료 통지 후 7일 이내 USD 1,000입니다.', 'The first installment is USD 100 at contract; the second is USD 1,000 within seven days of the collection-completion notice.')}</p></li><li><h3>${t('3~5차는 현금으로 납입합니다.', 'Pay installments 3–5 in cash.')}</h3><p>${t('차수별 금액·기한과 납입 장소는 상품별 계약 및 통지에서 확인합니다.', 'Confirm each amount, deadline and payment location in the contract and notices.')}</p></li><li><h3>${t('소유권과 공사 단계를 확인합니다.', 'Check ownership and construction separately.')}</h3><p>${t('납입 비율은 공사 진행률을 뜻하지 않습니다.', 'The payment ratio does not indicate construction progress.')}</p></li><li><h3>${t('이용 개시와 예약 조건을 확인합니다.', 'Confirm stay activation and booking terms.')}</h3><p>${t('소유권 확인과 숙박 이용 개시는 별도 절차입니다.', 'Ownership verification and the start of stay benefits are separate steps.')}</p></li></ol><p>${t('현재 계좌 안내·입금 확인·서류 발급·예약을 진행하지 않습니다.', 'Account instructions, payment verification, document issuance and bookings are not active in this preview.')}</p>`);
    progress.querySelector('[data-open-contract]').addEventListener('click', event => contract.open(event.currentTarget));
    const consultation = makeDialog('planning-consultation-dialog', t('1:1 상담 안내', 'Consultation information'), `<p class="planning-dialog-status">${t('상담 신청 서비스 준비 중', 'Consultation requests are in preparation')}</p><p>${t('궁금한 지역과 타입, 구좌 수를 먼저 살펴보세요.', 'First explore your preferred location, villa type and shares.')}</p><p>${t('상담 연결이 준비되면 공식 신청 경로를 안내합니다.', 'The official request channel will be announced when ready.')}</p><p>${t('이 화면에서는 개인정보를 수집하거나 상담 신청을 전송하지 않습니다.', 'This preview does not collect personal information or send a consultation request.')}</p><a class="planning-dialog-link" href="parks/owners.html#price-guide">${t('가격·이용 조건 먼저 보기', 'Read pricing and stay terms')} ↗</a>`);
    closing.querySelector('[data-open-consultation]').addEventListener('click', event => consultation.open(event.currentTarget));
    const selection = makeDialog('planning-selection-dialog', t('선택 내용 확인', 'Review your selection'), `<div data-selection-summary></div><p class="planning-dialog-status">${t('미리보기 · 신청 서비스 준비 중', 'Preview · application service in preparation')}</p><p>${t('실제 접수·계약·결제 또는 재고 확보는 진행되지 않았습니다.', 'No application, contract, payment or inventory reservation has been made.')}</p><a class="planning-dialog-link" href="#ownership-pricing">${t('분양상품 가격 다시 보기', 'Review villa package prices')} ↗</a>`);
    selection.dialog.querySelector('a').addEventListener('click', () => selection.dialog.close());
    const region = closing.querySelector('[name="preview-region"]'), section = closing.querySelector('[name="preview-section"]'), type = closing.querySelector('[name="preview-type"]'), shares = closing.querySelector('[name="preview-shares"]'), luxury = closing.querySelector('[name="preview-luxury"]');
    const format = value => new Intl.NumberFormat('en-US').format(value);
    let hasSelection = false;
    const getSelection = () => ({ region: region.value, section: section.value, type: type.value, count: Math.min(120, Math.max(1, Math.floor(Number(shares.value) || 1))), luxury: luxury.checked });
    const totals = data => { const unitBase = data.type === 'prestige' ? 5999 : 3999, unitOption = data.luxury ? (data.type === 'prestige' ? 390 : 199) : 0; return { base: unitBase * data.count, option: unitOption * data.count, total: (unitBase + unitOption) * data.count, first: 100 * data.count }; };
    const update = changed => {
      const data = getSelection(), domestic = data.region !== 'chiangmai', price = totals(data);
      if (changed) hasSelection = true;
      type.disabled = luxury.disabled = !domestic;
      closing.querySelector('[data-preview-base]').textContent = domestic ? t(`기본 가격 USD ${format(price.base)}`, `Base price USD ${format(price.base)}`) : t('치앙마이 상품 조건은 별도 안내합니다.', 'Chiang Mai product terms will be announced separately.');
      closing.querySelector('[data-preview-option]').textContent = domestic ? t(`럭셔리 패키지 +USD ${format(price.option)}`, `Luxury package +USD ${format(price.option)}`) : t('국내 타입·가격은 자동 적용되지 않습니다.', 'Domestic types and prices do not automatically apply.');
      closing.querySelector('[data-preview-total]').textContent = domestic ? t(`${data.count}구좌 · 합계 USD ${format(price.total)}`, `${data.count} ${data.count === 1 ? 'share' : 'shares'} · total USD ${format(price.total)}`) : t('합계는 상품 출시 후 안내합니다.', 'The total will be announced with the product.');
      closing.querySelector('[data-preview-first]').textContent = domestic ? t(`합계 중 1차 납입금 USD ${format(price.first)}`, `First installment within the total: USD ${format(price.first)}`) : t('구좌·납입 조건은 상품별로 확인합니다.', 'Confirm shares and payment terms by product.');
      closing.querySelector('[data-mobile-product] [data-planning-copy]').textContent = hasSelection ? t('선택 내용 확인', 'Review selection') : t('상품 보기', 'View packages');
      return data;
    };
    const normalizeShares = () => { shares.value = getSelection().count; update(true); };
    [region, section, type, luxury].forEach(input => input.addEventListener('change', () => update(true)));
    shares.addEventListener('change', normalizeShares); shares.addEventListener('blur', normalizeShares);
    const preview = closing.querySelector('.planning-selection-preview');
    const openPreview = () => { preview.open = true; preview.scrollIntoView({ block: 'start', behavior: 'instant' }); region.focus({ preventScroll: true }); };
    closing.querySelector('[data-open-preview]').addEventListener('click', event => { event.preventDefault(); openPreview(); });
    window.addEventListener('mylodge:section-choice', event => {
      const value = event.detail?.section;
      if (![...section.options].some(option => option.value === value)) return;
      section.value = value; preview.open = true; update(true);
    });
    document.querySelectorAll('#ownership-pricing [data-villa-tab]').forEach(tab => tab.addEventListener('click', () => {
      type.value = tab.dataset.villaTab === 'suite' ? 'prestige' : 'deluxe';
      luxury.checked = !!document.querySelector('#ownership-pricing [data-luxury-package]')?.checked;
      update(true);
    }));
    document.querySelector('#ownership-pricing [data-luxury-package]')?.addEventListener('change', event => { luxury.checked = event.currentTarget.checked; update(true); });
    const review = opener => {
      const data = update(false), domestic = data.region !== 'chiangmai', price = totals(data); shares.value = data.count;
      const regionText = region.options[region.selectedIndex].text, sectionText = section.options[section.selectedIndex].text, typeText = type.options[type.selectedIndex].text;
      const dl = document.createElement('dl'); dl.className = 'planning-selection-summary';
      const rows = [[t('지역', 'Location'), regionText], [t('섹션 선호', 'Section preference'), sectionText], [t('타입', 'Type'), domestic ? typeText : t('상품별 별도 안내', 'To be announced by product')], [t('구좌 수', 'Shares'), domestic ? String(data.count) : t('출시 후 선택', 'Choose after launch')], [t('실제 배정', 'Actual allocation'), t('상품별 안내에서 확인', 'Confirm in product details')], [t('기본 가격', 'Base price'), domestic ? `USD ${format(price.base)}` : t('별도 안내', 'To be announced')], [t('럭셔리 패키지', 'Luxury package'), domestic ? `+USD ${format(price.option)}` : t('별도 안내', 'To be announced')], [t('선택 합계', 'Selection total'), domestic ? `USD ${format(price.total)}` : t('별도 안내', 'To be announced')], [t('합계 중 1차 납입금', 'First installment within total'), domestic ? `USD ${format(price.first)}` : t('별도 안내', 'To be announced')]];
      rows.forEach(([name, value]) => { const div = document.createElement('div'), dt = document.createElement('dt'), dd = document.createElement('dd'); dt.textContent = name; dd.textContent = value; div.append(dt, dd); dl.append(div); });
      selection.dialog.querySelector('[data-selection-summary]').replaceChildren(dl); selection.open(opener);
    };
    const syncPricingFromPreview = () => {
      const desired = getSelection(); if (desired.region === 'chiangmai') return;
      const key = desired.type === 'prestige' ? 'suite' : 'deluxe';
      const tab = document.querySelector(`#ownership-pricing [data-villa-tab="${key}"]`);
      if (tab && tab.getAttribute('aria-selected') !== 'true') tab.click();
      const packageToggle = document.querySelector('#ownership-pricing [data-luxury-package]');
      if (packageToggle && packageToggle.checked !== desired.luxury) { packageToggle.checked = desired.luxury; packageToggle.dispatchEvent(new Event('change', { bubbles: true })); }
    };
    closing.querySelectorAll('a[href="#ownership-pricing"]').forEach(link => link.addEventListener('click', syncPricingFromPreview));
    selection.dialog.querySelector('a[href="#ownership-pricing"]').addEventListener('click', syncPricingFromPreview);
    closing.querySelector('[data-review-selection]').addEventListener('click', event => review(event.currentTarget));
    closing.querySelector('[data-mobile-product]').addEventListener('click', event => { if (hasSelection) review(event.currentTarget); else openPreview(); });
    update(false);
    if(location.hash==='#ownership-selection-preview')preview.open=true;
    window.addEventListener('hashchange',()=>{if(location.hash==='#ownership-selection-preview')preview.open=true;});
    return { progress, closing, dialogs, reviewSelection: review };
  }
})();


