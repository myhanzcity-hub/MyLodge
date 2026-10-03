(() => {
 const menu=document.querySelector('.menu-button'),nav=document.querySelector('#mobile-menu');
 function toggle(open){nav.hidden=!open;menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기');}
 menu.addEventListener('click',()=>toggle(nav.hidden));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>toggle(false)));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!nav.hidden){toggle(false);menu.focus();}});
 document.addEventListener('click',e=>{if(!e.target.closest('header'))toggle(false);});matchMedia('(min-width:1024px)').addEventListener('change',e=>{if(e.matches)toggle(false);});
 const tabs=[...document.querySelectorAll('[role="tab"]')],panels=[...document.querySelectorAll('[role="tabpanel"]')];
 function select(index,focus=false){tabs.forEach((t,i)=>{t.setAttribute('aria-selected',String(i===index));t.tabIndex=i===index?0:-1;panels[i].hidden=i!==index;});if(focus)tabs[index].focus();}
 tabs.forEach((t,i)=>{t.addEventListener('click',()=>select(i));t.addEventListener('keydown',e=>{let index;if(e.key==='ArrowRight')index=(i+1)%4;if(e.key==='ArrowLeft')index=(i+3)%4;if(e.key==='Home')index=0;if(e.key==='End')index=3;if(index!==undefined){e.preventDefault();select(index,true);}});});
})();
