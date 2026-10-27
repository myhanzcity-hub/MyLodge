// M03–M09 local copy review. Original chapters 01, 02 and 08 are deliberately excluded.
(() => {
  'use strict';
  const main = document.querySelector('#main');
  if (!main?.querySelector('#home[data-hero-language]')) return;
  const english = new URLSearchParams(location.search).get('lang') === 'en';
  const t = (ko, en) => english ? en : ko;
  const copy = (node, text) => { if (node) { node.textContent = text; node.dataset.planningCopy = ''; } return node; };
  const paragraphs = (host, pairs) => {
    host.replaceChildren(...pairs.map(([ko, en]) => copy(document.createElement('p'), t(ko, en))));
    host.classList.add('planning-prose');
  };
  const button = (text, href) => {
    const a = copy(document.createElement('a'), text); a.className = 'planning-button'; a.href = href; return a;
  };
  const detail = (file, hash) => `parks/${file}.html${english ? '?lang=en' : ''}#${hash}`;
  function dialog(title) {
    const d = document.createElement('dialog'); d.className = 'planning-dialog';
    const h = document.createElement('h2'); h.id = `planning-dialog-${document.querySelectorAll('.planning-dialog').length}`;
    copy(h, title); d.setAttribute('aria-labelledby', h.id);
    const close = copy(document.createElement('button'), t('닫기 ×', 'Close ×')); close.type = 'button'; close.className = 'planning-dialog-close';
    const body = document.createElement('div'); body.className = 'planning-dialog-body'; d.append(close, h, body); document.body.append(d);
    let opener, oldOverflow='';
    d.addEventListener('keydown', event => {
      if(event.key!=='Tab')return;
      const items=[...d.querySelectorAll('button:not(:disabled),a[href],input:not(:disabled),select:not(:disabled),summary,[tabindex="0"]')].filter(e=>e.checkVisibility());
      const first=items[0],last=items.at(-1);
      if(!first){event.preventDefault();return;}
      if(event.shiftKey&&(document.activeElement===first||!d.contains(document.activeElement))){event.preventDefault();last.focus();}
      else if(!event.shiftKey&&(document.activeElement===last||!d.contains(document.activeElement))){event.preventDefault();first.focus();}
    });
    close.addEventListener('click', () => d.close());
    d.addEventListener('click', e => { if (e.target === d) { const r = d.getBoundingClientRect(); if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) d.close(); } });
    d.addEventListener('close', () => {document.body.style.overflow=oldOverflow;opener?.focus({preventScroll:true});});
    return {body, node:d, open(from) { opener = from; oldOverflow=document.body.style.overflow;document.body.style.overflow='hidden'; d.showModal(); close.focus(); }};
  }

  // M03: preserve both existing photo selectors, galleries and their handlers.
  const facilities = main.querySelector('#facilities');
  if (facilities) {
    const intro = facilities.querySelector('.vacation-intro');
    copy(intro?.querySelector('h2'), t('문을 열면, 우리만의 별장.', 'Open the door to your own villa.'));
    const lead = intro?.querySelector(':scope > p:last-child');
    if (lead) {
      const group = document.createElement('div'); lead.replaceWith(group);
      paragraphs(group, [
        ['독립형 복층 빌라, 햇살 드는 테라스.', 'A private two-storey villa and a sunlit terrace.'],
        ['밤까지 이어지는 바비큐.', 'BBQ evenings that last into the night.'],
        ['사진과 평면도로 머물 공간을 먼저 둘러보세요.', 'Explore your space in photos and floor plans.']
      ]);
      const note = copy(document.createElement('p'), t('복층은 프레스티지 타입의 공간 콘셉트입니다.', 'The two-storey concept refers to Prestige.'));
      note.className = 'planning-note'; group.after(note);
    }
    intro?.append(button(t('객실·타입 비교하기', 'Compare villa types'), detail('domestic-villas', 'villa-types')));
    const gallery = facilities.querySelector('.facilities-gallery');
    if (gallery) {
      const quick = document.createElement('nav'); quick.className = 'planning-space-tabs'; quick.setAttribute('aria-label', t('객실 이미지 빠른 선택', 'Choose a room view'));
      const picks = [[2,'외관','Exterior'],[3,'실내','Interior'],[4,'테라스','Terrace'],[5,'평면도','Floor plans']];
      const sync = () => quick.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(gallery.querySelector(`[data-facilities-index="${b.dataset.spaceIndex}"]`)?.getAttribute('aria-selected') === 'true')));
      picks.forEach(([index,ko,en]) => { const b = copy(document.createElement('button'), t(ko,en)); b.type='button'; b.dataset.spaceIndex=index; b.addEventListener('click',()=>{gallery.querySelector(`[data-facilities-index="${index}"]`)?.click();sync();}); quick.append(b); });
      gallery.before(quick); gallery.querySelectorAll('[data-facilities-index],[data-facilities-prev],[data-facilities-next]').forEach(b=>b.addEventListener('click',sync)); new MutationObserver(sync).observe(gallery.querySelector('.facilities-gallery-nav'),{subtree:true,attributes:true,attributeFilter:['aria-selected']}); sync();
    }
  }

  const ownerLife = main.querySelector('#owner-life');
  // M04: reuse the existing five-category interactive gallery.
  const lifestyles = ownerLife?.querySelector('#lifestyle-communities');
  if (lifestyles) {
    const h = lifestyles.querySelector('h3');
    copy(h, t('어디서 쉴지보다, 누구와 어울릴지.', 'Choose the people, not just the place.'));
    const lead = lifestyles.querySelector('.lifestyle-gallery-intro');
    if (lead) {
      const g=document.createElement('div');lead.replaceWith(g);
      paragraphs(g,[
        ['아이와 뛰노는 패밀리, 둘만의 시간을 위한 커플.', 'Family time with the kids, or a break for two.'],
        ['새 친구를 만나는 소셜, 인맥이 오가는 비즈니스.', 'Meet new friends or make business connections.'],
        ['쉼에 집중하는 웰니스.', 'Make room for wellness and rest.'],
        ['나와 결이 맞는 이웃을 고르세요.', 'Find neighbours who share your rhythm.']
      ]);
    }
    const find = copy(document.createElement('button'), t('나에게 맞는 섹션 찾기', 'Find your community')); find.type='button';find.className='planning-button';
    h?.parentNode.insertBefore(find, lifestyles.querySelector('.lifestyle-gallery'));
    const choice=dialog(t('나에게 맞는 섹션', 'Find your community'));
    const categories = [['패밀리','Family','아이와 함께하는 휴가.','Time away with the kids.'],['커플·라이프','Couples','둘만의 여유로운 시간.','Unhurried time for two.'],['소셜·액티브','Social','새로운 친구와 만남.','New friends and shared moments.'],['비즈니스','Business','일과 대화가 이어지는 곳.','Space for work and conversation.'],['웰니스','Wellness','쉼과 회복에 집중하는 시간.','Time to rest and recharge.']];
    const choices=document.createElement('div');choices.className='planning-choices';
    let chosenPanel=null;
    choice.node.addEventListener('close',()=>{if(chosenPanel){const panel=chosenPanel;chosenPanel=null;panel.focus({preventScroll:true});panel.scrollIntoView({block:'center',behavior:'instant'});}});
    const sectionKeys=['family','couples','social','business','wellness'];
    categories.forEach(([ko,en,descKo,descEn],i)=>{
      const b=document.createElement('button');b.type='button';const title=copy(document.createElement('strong'),t(ko,en)),p=copy(document.createElement('span'),t(descKo,descEn));b.append(title,p);
      b.addEventListener('click',()=>{chosenPanel=lifestyles.querySelector(`[data-lifestyle-index="${i}"]`);chosenPanel?.click();window.dispatchEvent(new CustomEvent('mylodge:section-choice',{detail:{section:sectionKeys[i]}}));choice.node.close();});choices.append(b);
    });choice.body.append(choices);
    const note=copy(document.createElement('p'),t('섹션별 운영·배치는 파크별로 안내합니다.', 'Community layouts are announced by park.'));note.className='planning-note';choice.body.append(note);
    find.addEventListener('click',()=>choice.open(find));
  }

  // M07: keep the timeline, photos and current card/gallery structures.
  if (ownerLife) {
    const intro=ownerLife.querySelector('.owner-life-editorial');
    copy(intro?.querySelector('h2'),t('휴가가 끝나도, 사람은 남습니다.', 'The holiday ends. The friendships stay.'));
    const lead=intro?.querySelector(':scope > p:last-child');
    if(lead){const g=document.createElement('div');lead.replaceWith(g);paragraphs(g,[
      ['바비큐 테이블에서 만난 이웃,', 'Neighbours met around the BBQ table.'],
      ['라운지에서 나눈 사업 이야기.', 'Business ideas shared in the lounge.'],
      ['별장에서 시작된 인연이 일상으로 이어지도록,', 'Connections that continue beyond your stay.'],
      ['멤버 모임을 준비하고 있습니다.', 'Member gatherings are being prepared.']
    ]);}
    intro?.append(button(t('멤버 커뮤니티 알아보기', 'Explore member gatherings'),'#member-gatherings'));
    ownerLife.querySelectorAll('a[href="#life-story"]').forEach(a=>a.href='#lifestyle-communities');
    ownerLife.querySelectorAll('a[href="#nature"]').forEach(a=>a.href='#vision');
    const events=document.createElement('section');events.id='member-gatherings';events.className='planning-member-events container';
    events.innerHTML=`<p class="eyebrow">MEMBER COMMUNITY</p><h3 data-planning-copy>${t('다음 만남을 준비합니다.', 'The next gathering starts here.')}</h3><p class="planning-note" data-planning-copy>${t('멤버 모임은 준비 중입니다.', 'Member gatherings are in preparation.')}</p><div class="planning-event-grid"></div>`;
    const cards=events.querySelector('.planning-event-grid');
    [['바비큐 테이블','BBQ table'],['라운지에서 나누는 대화','Lounge conversations'],['일과 만남','Work and connections']].forEach(([ko,en])=>{
      const a=document.createElement('article');a.innerHTML=`<span class="planning-status" data-planning-copy>${t('준비 중','In preparation')}</span><h4 data-planning-copy>${t(ko,en)}</h4><dl><div><dt>${t('일정·정원','Date · capacity')}</dt><dd>${t('추후 안내','To be announced')}</dd></div><div><dt>${t('대상','Guests')}</dt><dd>${t('마이롯지 멤버','MyLodge members')}</dd></div><div><dt>${t('비용','Cost')}</dt><dd>${t('행사별 안내 예정','Announced per event')}</dd></div></dl>`;cards.append(a);
    });ownerLife.append(events);
  }

  // M06: retain service cards and approved images; show unknown inclusion/park facts honestly.
  const services=main.querySelector('#stay-services');
  if(services){
    const intro=services.querySelector('.intro');copy(intro?.querySelector('h2'),t('몸만 오세요. 나머지는 준비되어 있습니다.', 'Arrive. We’ll take care of the rest.'));
    const lead=intro?.querySelector(':scope > p:last-child');
    if(lead){const g=document.createElement('div');lead.replaceWith(g);paragraphs(g,[
      ['객실 청소와 새 침구, 장보기와 다이닝,', 'Room care, fresh linen, groceries and dining.'],
      ['단지 안 카트 이동까지.', 'Even a cart ride around the park.'],
      ['필요한 서비스만 골라 체류를 가볍게 하세요.', 'Choose the services that make your stay easier.']
    ]);}
    intro?.append(button(t('서비스·요금 보기', 'View services and fees'),detail('owners','service-costs')));
    services.querySelectorAll('.concierge-service-card .editorial-card-copy').forEach(card=>{
      const dl=document.createElement('dl');dl.className='planning-service-facts';dl.innerHTML=`<div><dt>${t('포함·유료 여부','Included or extra')}</dt><dd>${t('서비스별 확인','Confirm per service')}</dd></div><div><dt>${t('제공 파크','Available parks')}</dt><dd>${t('파크별 안내 예정','To be announced')}</dd></div>`;card.append(dl);
    });
  }

  // M05 is a new chapter, so the colleague's original page 08 remains intact.
  const region=document.createElement('section');region.id='region-comparison';region.className='planning-region homepage-group';region.setAttribute('aria-labelledby','region-comparison-title');
  region.innerHTML=`<div class="container"><p class="eyebrow">REGIONS / COMPARE</p><h2 id="region-comparison-title" data-planning-copy>${t('동해로 갈까, 치앙마이로 갈까.', 'The East Coast or Chiang Mai?')}</h2><div class="planning-prose"><p data-planning-copy>${t('파도 소리로 아침을 여는 주문진,','Wake to the waves in Jumunjin.')}</p><p data-planning-copy>${t('서핑과 파티의 양양, 일과 휴식이 만나는 치앙마이.','Surf in Yangyang. Work and unwind in Chiang Mai.')}</p><p data-planning-copy>${t('지역별 공간과 분양 현황을 한 번에 비교하세요.','Compare spaces and product information by region.')}</p></div><div class="planning-region-action"></div><div class="planning-region-grid" id="regional-products" tabindex="-1"></div></div>`;
  region.querySelector('.planning-region-action').append(button(t('지역별 상품 비교하기','Compare regional products'),'#regional-products'));
  const release=dialog(t('출시 알림 안내','Launch notifications'));
  paragraphs(release.body,[['출시 알림 서비스를 준비하고 있습니다.','Launch notifications are in preparation.'],['현재 알림 신청이나 연락처 저장은 진행하지 않습니다.','Notification requests are not being collected yet.']]);
  const regions=[
    ['주문진','Jumunjin','assets/images/project-jumunjin-20261007-960.webp',true,'domestic-villas','project-jumunjin'],
    ['양양','Yangyang','assets/images/project-yangyang-20261007-960.webp',true,'domestic-villas','project-yangyang'],
    ['치앙마이','Chiang Mai','assets/images/valley-resources-20261007-960.webp',false,'business-valley','visual-first']
  ];
  regions.forEach(([ko,en,image,korea,file,hash])=>{
    const a=document.createElement('article');a.className='planning-region-card';a.innerHTML=`<img src="${image}" alt="${t(ko,en)} ${t('공간 콘셉트','space concept')}" width="960" height="640" loading="lazy"><div class="planning-region-copy"><span class="planning-status" data-planning-copy>${t('분양 준비 중','Sales in preparation')}</span><h3 data-planning-copy>${t(ko,en)}</h3><dl><div><dt>${t('기본 구좌 가격','Base share price')}</dt><dd>${korea?'USD 3,999 '+t('부터','and up'):t('안내 예정','To be announced')}</dd></div><div><dt>${t('소개 타입','Presented types')}</dt><dd>${korea?t('디럭스 · 프레스티지','Deluxe · Prestige'):t('지역별 별도 안내','Announced separately')}</dd></div><div><dt>${t('잔여 구좌','Remaining shares')}</dt><dd>${t('분양 개시 후 안내','Announced when sales open')}</dd></div></dl><div class="planning-region-buttons"></div></div>`;
    const box=a.querySelector('.planning-region-buttons');box.append(button(t('공간 살펴보기','Explore spaces'),detail(file,hash)));const launch=copy(document.createElement('button'),t('출시 알림 받기','Launch notifications'));launch.type='button';launch.className='planning-button planning-button-outline';launch.addEventListener('click',()=>release.open(launch));box.append(launch);region.querySelector('.planning-region-grid').append(a);
  });main.append(region);
  window.MyLodgePlanningExtra?.mount({main,english});
  // The user removed the former page 08; regional comparison is its replacement destination.
  main.querySelector('#brand-paths')?.remove();
  document.querySelectorAll('a[href="#brand-paths"]').forEach(a=>a.href='#region-comparison');
  document.body.dataset.planningReview='m03-onward';
})();
