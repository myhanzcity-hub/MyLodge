// Concise owner-guide summaries. Native dialog keeps focus inside until closed.
(()=>{
 'use strict';
 const guide=document.getElementById('park-owner-guide');if(!guide)return;
 const sections={
  'owner-experiences':{
   eyebrow:'OWNER / SHARE A DAY',title:'친구에게 선물하는 별장의 하루.',
   lead:'나의 별장에서 보내는 하루를 소중한 지인에게. 이용권으로 휴가를 선물하는 서비스를 준비하고 있습니다.',
   steps:[['하루를 고르고','선물할 파크와 이용 가능한 날짜를 살펴봅니다.'],['지인을 초대하고','이용할 사람과 전달할 내용을 등록합니다.'],['함께 기억하세요','예약이 확정되면 안내에 따라 별장을 이용합니다.']],
   note:'선물 서비스는 준비 중입니다. 현재 초대장이나 이용권을 발급하거나 예약을 확정하지 않습니다.',
   details:'선물 가능한 일수·대상, 예약 가능 여부, 추가 비용과 취소 기준은 서비스 개시 전 안내합니다. 선물은 별장 이용 경험을 나누는 것이며 소유권을 이전하는 절차와 다릅니다.',link:'owner-experiences',label:'오너 경험 자세히 보기'
  },
  'owner-swap':{
   eyebrow:'OWNER / EXCHANGE',title:'내 별장에서 시작하는 또 다른 여행.',
   lead:'국내의 다른 지역부터 해외까지. 마이롯지 오너끼리 별장 이용 경험을 교환하는 서비스를 준비하고 있습니다.',
   steps:[['여행할 곳을 찾고','교환 대상 파크와 이용 가능한 날짜를 살펴봅니다.'],['일정을 제안하고','상대 오너와 날짜·이용 조건을 맞춥니다.'],['확정 후 떠나세요','서로 동의하고 예약이 확정된 뒤 이용합니다.']],
   note:'SWAP은 준비 중입니다. 현재 교환을 신청하거나 일정을 확정할 수 없습니다.',
   details:'대상 파크·회원 자격·교환 일수·수수료·취소 기준은 별도 안내 예정입니다. 같은 회원이라는 이유로 모든 지역과 원하는 날짜의 이용이 자동 보장되지는 않습니다. 교환은 소유권 이전과 구분됩니다.',link:'owner-swap',label:'교환 조건 자세히 보기'
  },
  'price-guide':{
   eyebrow:'OWNER / OWNERSHIP & PRICE',title:'소유의 가치, 이용의 즐거움.',
   lead:'별장 한 채를 120구좌로 나눠 함께 소유합니다. 한 구좌는 해당 별장의 1/120 지분이며, 별장 한 채 전체 가격과 구분됩니다.',
   facts:[['소유 단위','1 / 120 지분'],['구좌당 연간 이용','1박 2일 × 3회'],['선택 방법','여러 구좌·다른 지역']],
   prices:true,
   note:'소유 확인과 숙박 이용 개시는 별도 절차입니다. 실제 권리·납입·이용 조건은 상품별 계약에 따릅니다.',
   details:'등기 확인 후 마이페이지에서 소유 정보를 증빙하고, 본인이 선택한 정보만 인증 링크·QR로 공유하는 기능을 준비합니다. 상속·양도·매각·임대 활용의 대상과 절차는 상품별 계약과 관계 법령에 따라 달라집니다. 현재 소유 인증을 발급하거나 계약·예약·결제를 접수하지 않습니다.',link:'price-guide',label:'가격·권리 상세 안내'
  }
 };
 const dialog=document.createElement('dialog');dialog.className='owner-benefit-modal';dialog.dataset.ownerBenefitModal='';dialog.setAttribute('aria-labelledby','owner-benefit-title');
 dialog.innerHTML='<div class="owner-benefit-header"><p class="eyebrow" data-benefit-eyebrow></p><button type="button" class="owner-benefit-close" aria-label="안내 닫기">닫기 <span aria-hidden="true">×</span></button></div><div class="owner-benefit-scroll"><h2 id="owner-benefit-title" tabindex="-1"></h2><p class="owner-benefit-lead"></p><div class="owner-benefit-content"></div><p class="owner-benefit-note"></p><details class="owner-benefit-details"><summary>이용 전 알아두세요</summary><p></p></details></div><footer class="owner-benefit-footer"><a class="owner-benefit-more"></a><button type="button" class="owner-benefit-done">확인</button></footer>';
 document.body.append(dialog);let opener=null,oldOverflow='';
 const restore=()=>{if(dialog.open)return;document.body.style.overflow=oldOverflow;opener?.focus({preventScroll:true})};
 const close=()=>{dialog.close();restore()};dialog.querySelector('.owner-benefit-close').addEventListener('click',close);dialog.querySelector('.owner-benefit-done').addEventListener('click',close);
 dialog.addEventListener('close',restore);
 dialog.addEventListener('cancel',event=>{event.preventDefault();close()});
 dialog.addEventListener('keydown',event=>{
  if(event.key!=='Tab')return;
  const focusable=[...dialog.querySelectorAll('button:not(:disabled),a[href],summary')].filter(e=>e.checkVisibility());
  const first=focusable[0],last=focusable.at(-1);
  if(event.shiftKey&&(document.activeElement===first||!dialog.contains(document.activeElement))){event.preventDefault();last?.focus()}
  else if(!event.shiftKey&&(document.activeElement===last||!dialog.contains(document.activeElement))){event.preventDefault();first?.focus()}
 });
 dialog.addEventListener('click',e=>{const r=dialog.getBoundingClientRect();if(e.target===dialog&&(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom))close()});
 guide.querySelectorAll('.feedback-card-action a').forEach(a=>{
  const key=new URL(a.href).hash.slice(1),entry=sections[key];if(!entry)return;
  a.setAttribute('aria-haspopup','dialog');a.addEventListener('click',event=>{
   if(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||event.button!==0)return;
   event.preventDefault();opener=a;dialog.querySelector('[data-benefit-eyebrow]').textContent=entry.eyebrow;dialog.querySelector('h2').textContent=entry.title;dialog.querySelector('.owner-benefit-lead').textContent=entry.lead;
   const content=dialog.querySelector('.owner-benefit-content');content.replaceChildren();
   if(entry.steps){const list=document.createElement('ol');list.className='owner-benefit-steps';entry.steps.forEach(([title,text],i)=>{const li=document.createElement('li');li.innerHTML=`<span aria-hidden="true">0${i+1}</span><div><h3>${title}</h3><p>${text}</p></div>`;list.append(li)});content.append(list)}
   if(entry.facts){const facts=document.createElement('dl');facts.className='owner-benefit-facts';entry.facts.forEach(([title,text])=>{const div=document.createElement('div');div.innerHTML=`<dt>${title}</dt><dd>${text}</dd>`;facts.append(div)});content.append(facts)}
   if(entry.prices){const table=document.createElement('table');table.className='owner-benefit-prices';table.innerHTML='<caption>국내 별장 구좌 가격 · USD</caption><thead><tr><th scope="col">타입</th><th scope="col">기본</th><th scope="col">패키지 포함</th></tr></thead><tbody><tr><th scope="row">디럭스</th><td>$3,999</td><td>$4,198</td></tr><tr><th scope="row">스위트</th><td>$5,999</td><td>$6,389</td></tr></tbody>';content.append(table)}
   dialog.querySelector('.owner-benefit-note').textContent=entry.note;const details=dialog.querySelector('details');details.open=false;details.querySelector('p').textContent=entry.details;const more=dialog.querySelector('.owner-benefit-more');more.href='owners.html#'+entry.link;more.textContent=entry.label+' ↗';
   oldOverflow=document.body.style.overflow;document.body.style.overflow='hidden';dialog.showModal();dialog.querySelector('.owner-benefit-scroll').scrollTop=0;
  });
 });
})();
