// Informational amount preview only. No inventory hold, application or payment.
(() => {
 'use strict';
 const english=document.documentElement.lang==='en';
 document.querySelectorAll('[data-share-preview]').forEach(box=>{
  const type=box.querySelector('[name="type"]'),quantity=box.querySelector('[name="quantity"]'),park=box.querySelector('[name="park"]'),error=box.querySelector('.share-error'),result=box.querySelector('.share-result');
  const format=n=>'USD '+new Intl.NumberFormat('en-US').format(n);
  function update(){
   const q=quantity.valueAsNumber;
   const valid=Number.isInteger(q)&&q>=1&&q<=120;
   error.hidden=valid;result.hidden=!valid;quantity.setAttribute('aria-invalid',String(!valid));
   if(!valid){error.textContent=english?'Enter a whole number from 1 to 120. This is not live availability.':'1~120 사이의 정수로 입력하세요. 실제 판매 가능한 수량 안내는 아닙니다.';return;}
   const luxury=type.value==='luxury',fifth=899+(luxury?150:0);
   const values={total:(3999+(luxury?150:0))*q,first:100*q,second:1000*q,third:1000*q,fourth:1000*q,fifth:fifth*q,nights:3*q};
   box.querySelectorAll('[data-amount]').forEach(el=>{const key=el.dataset.amount;el.textContent=key==='nights'?values[key]+(english?' nights':'박'):format(values[key]);});
   const name=park.value==='yangyang'?(english?'Yangyang':'양양'):(english?'Jumunjin':'주문진');
   box.querySelector('.share-selection').textContent=english?`${name} · ${luxury?'Luxury':'Standard'} · ${q} share${q===1?'':'s'}`:`${name} · ${luxury?'럭셔리형':'기본형'} · ${q}구좌`;
  }
  box.addEventListener('input',update);box.addEventListener('change',update);update();
 });
})();

// Mobile cards retain the full table values and their column names.
document.querySelectorAll('.requirements-table').forEach(table=>{
 const names=[...table.querySelectorAll('thead th')].map(th=>th.textContent.trim());
 table.classList.add('mobile-card-table');table.setAttribute('role','table');
 table.querySelectorAll('thead,tbody').forEach(el=>el.setAttribute('role','rowgroup'));
 table.querySelectorAll('tr').forEach(row=>{
  row.setAttribute('role','row');
  [...row.children].forEach((cell,index)=>{
   cell.setAttribute('role',cell.tagName==='TH'?(cell.closest('thead')?'columnheader':'rowheader'):'cell');
   if(cell.tagName==='TD')cell.dataset.label=names[index]||'';
  });
 });
 table.closest('.table-scroll')?.classList.add('has-mobile-cards');
});
