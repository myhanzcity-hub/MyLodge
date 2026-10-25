// The owner guide owns price, policy and operating information in this local review.
(()=>{
 if(location.pathname.endsWith('/parks/owners.html'))return;
 const park=location.pathname.includes('/parks/'),guide=(id)=>new URL((park?'':'parks/')+'owners.html#'+id,location.href).href;
 const old={'park-product-guide':'price-guide','park-share-preview':'owner-price-preview','multiple-share-guide':'owners-value'};
 if(location.pathname.includes('domestic-villas')&&old[location.hash.slice(1)]){location.replace(guide(old[location.hash.slice(1)]));return}
 const financial=/USD|(?:\$|₩)\s*[\d,]+|\d[\d,]*\s*원|구좌|납입|분납|수수료|연간 이용|이용 TO|1박\s*2일|성수기|취소|계약|등기|상속|양도|매각/;
 const policy=/확정 후|확정 전|미확정|확정(?:된)? 설계|이용 조건|참여 조건|운영 조건|운영 기준|참가 비용|이용료 포함|실제 제공 사양|예약·신청|실제 모집|예약은 진행|서비스.*준비 중|교환 서비스 준비 중|기획 시안|실제 시설.*아닙/;
 let observer;
 function clean(){observer?.disconnect();
  for(const el of [...document.querySelectorAll('p,small,summary,td,dd,dt,figcaption')]){
   if(el.closest('header,nav,script,style,[data-owner-hub-link],.chiangmai-deck-nav,[data-owner-benefit-modal]'))continue;
   const text=el.textContent.trim();if(!financial.test(text)&&!policy.test(text))continue;
   if(el.closest('section')?.id==='park-owner-guide'&&/오너로서 갖는 권리의 범위/.test(text))continue;
   const id=financial.test(text)?(/수수료|서비스|참가|행사/.test(text)?'service-costs':'price-guide'):/이미지|AI|설계|현장/.test(text)?'stay-with-confidence':'service-costs';
   const a=document.createElement('a');a.href=guide(id);a.dataset.ownerHubLink='';a.className='text-link';a.textContent=id==='price-guide'?'가격·이용 안내 →':id==='stay-with-confidence'?'시설·이미지 안내 →':'서비스 이용 안내 →';
   if(el.id)a.id=el.id;
   if(el.tagName==='FIGCAPTION'){el.textContent='AI 공간 콘셉트'}
   else if(el.closest('footer')||el.tagName==='SMALL'||el.closest('dialog')){el.replaceWith(a)}
   else if(el.closest('section')?.id==='chiangmai-business-programmes'&&text.startsWith('개발자')){el.textContent='개발자·창업가·크리에이터가 만나 함께 도모하는 시간.'}
   else{el.replaceWith(a)}
  }
  // Keep adjacent duplicate guidance from accumulating after dynamic section rendering.
  for(const parent of document.querySelectorAll('section,footer')){const links=[...parent.querySelectorAll('[data-owner-hub-link]')];const seen=new Set();for(const a of links){if(seen.has(a.href))a.remove();else seen.add(a.href)}}
  observer?.observe(document.body,{childList:true,subtree:true,characterData:true});
 }
 observer=new MutationObserver(clean);clean();
})();
