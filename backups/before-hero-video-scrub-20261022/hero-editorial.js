/* Ownership-first storytelling within the existing luxury lifestyle sections. */
(() => {
 'use strict';
 const main=document.querySelector('#main');if(!main?.querySelector('#home.hero'))return;
 const en=new URLSearchParams(location.search).get('lang')==='en';
 const t=(ko,english)=>en?english:ko;
 const $=selector=>main.querySelector(selector);
 document.body.classList.add('ownership-first');
 const about=$('#our-villa');
 about.querySelector('.eyebrow').textContent='WHY MY LODGE / 01';
 about.querySelector('h2').innerHTML=t('멀게만 느껴졌던 별장,<br><em>함께라면 더 가까이.</em>','A holiday home, once a distant dream.<br><em>Imagine preparing it together.</em>');
 about.querySelector('.invitation-grid>div>p').textContent=t('한 채를 함께 준비하는 별장 구상. 그 안에서 꿈꾸는 새로운 일상을 만나보세요.','A holiday home prepared together. Discover the new everyday life MyLodge imagines.');
 about.querySelector('.invitation-grid>div').insertAdjacentHTML('beforeend',`<a class="text-link" href="#ownership">${t('별장이 있는 일상 만나보기','Imagine life with a holiday home')} ↗</a>`);

 const benefits=$('#ownership');
 benefits.querySelector('h2').textContent=t('별장을 꿈꾸는 이유.','Why imagine a home of your own?');
 benefits.querySelector('.owner-benefits-label').textContent='THE LIFE WE IMAGINE / 02';
 benefits.querySelector('.owner-benefits-quote').textContent=t('마이롯지가 그리는 생활의 모습입니다.','Life at MyLodge, imagined.');
 const benefitCopy=[
  [t('나만의 속도로 쉬는 시간.','Time to call your own.'),t('바쁜 일상에서 한 걸음 벗어나, 나의 리듬으로 쉬는 휴가.','Step away from the everyday. Imagine a holiday at your own pace.'),'#life-story',t('휴식의 장면 보기','Explore the lifestyle')],
  [t('좋은 사람들과, 더 좋은 순간.','Good company. Better moments.'),t('관심사를 나누고, 함께하는 경험으로 넓어지는 일상.','Shared interests and shared experiences open up a richer everyday.'),'#lifestyle',t('함께하는 생활 보기','Discover shared moments')],
  [t('나만의 별장이 있는 일상.','Imagine a home to return to.'),t('좋아하는 풍경과 함께, 다시 돌아오고 싶은 나만의 휴가를 그립니다.','A favourite view. Your own kind of holiday, imagined as part of everyday life.'),'#nature',t('마이롯지가 그리는 풍경','Explore the MyLodge vision')]
 ];
 benefits.querySelectorAll('.promotion-cards>article').forEach((card,i)=>{
  const [heading,copy,href,label]=benefitCopy[i];
  card.querySelector('h3').textContent=heading;card.querySelector('.editorial-card-copy>p').textContent=copy;
  card.querySelector('.editorial-card-copy').insertAdjacentHTML('beforeend',`<a class="text-link" href="${href}">${label} ↗</a>`);
  const image=card.querySelector('img');image.alt=heading+t(' · AI 생활 콘셉트',' · AI lifestyle concept');image.sizes='(max-width:700px) 900px, (max-width:1199px) 60vw, 40vw';
  if(i===2){image.src='assets/images/brand-villa-atmosphere-20261008-960.webp';image.srcset=[480,960,1680].map(w=>`assets/images/brand-villa-atmosphere-20261008-${w}.webp ${w}w`).join(', ');}
 });

 $('.vacation-finale')?.remove();
 const order=['home','our-villa','ownership','life-story','lifestyle','nature','villa-spaces','vision','stay-services','brand-paths'];
 order.forEach(id=>{const section=$('#'+id);if(section)main.append(section);});
 const ribbon=$('.living-ribbon');if(ribbon)$('#home').after(ribbon);
 document.querySelectorAll('header nav').forEach(nav=>{
  nav.innerHTML=[['#our-villa',t('마이롯지 소개','Why MyLodge')],['#ownership',t('오너의 생활','Owner Life')],['#villa-spaces',t('시설 둘러보기','Facilities')],['#stay-services',t('컨시어지','Concierge')],['#brand-paths',t('목적지','Destinations')]].map(([href,label])=>`<a href="${href}">${label}</a>`).join('');
 });
 document.querySelectorAll('meta[name="description"],meta[property="og:description"]').forEach(meta=>meta.content=t('나도, 별장이 있다. 나만의 쉼과 새로운 만남, 마이롯지가 그리는 별장 생활을 만나보세요.','A holiday home of my own. Discover the relaxation, connections and holiday-home life imagined by MyLodge.'));
 document.title=t('마이롯지 · 나도, 별장이 있다.','MyLodge · A Holiday Home of My Own.');
})();

/* Homepage art direction. All animation is owned by a reversible GSAP context. */
(() => {
  'use strict';
  const hero = document.querySelector('#home.hero');
  if (!hero) return;
  const en = new URLSearchParams(location.search).get('lang') === 'en';
  hero.classList.add('lodge-hero');
  hero.setAttribute('aria-label', en ? 'MyLodge · A holiday home of my own' : '마이롯지 · 나도, 별장이 있다');
  hero.innerHTML = `
    <figure class="lodge-window">
      <div class="lodge-image-depth"><img src="assets/images/brand-villa-atmosphere-20261008-1680.webp" srcset="assets/images/brand-villa-atmosphere-20261008-480.webp 480w, assets/images/brand-villa-atmosphere-20261008-960.webp 960w, assets/images/brand-villa-atmosphere-20261008-1680.webp 1680w" sizes="max(100vw, 180svh)" width="1680" height="1120" fetchpriority="high" alt="${en ? 'A sculptural coastal villa and pool at dusk. AI architectural concept.' : '해 질 무렵, 바다를 향해 열린 곡선형 별장과 수영장. AI 건축 콘셉트.'}"></div>
      <figcaption>${en ? 'ARCHITECTURAL IMAGINATION / AI CONCEPT' : 'AI 공간 콘셉트 · 실제 현장·확정 설계가 아닙니다'}</figcaption>
    </figure>
    <div class="lodge-heading"><p class="lodge-kicker">MY LODGE / A HOLIDAY HOME OF MY OWN</p><h1>${en ? 'A Holiday Home<br>of My Own.' : '나도,<br>별장이 있다.'}</h1></div>
    <div class="lodge-invitation">
      <p class="lodge-korean">${en ? 'A personal dream. A shared approach.' : '나만의 꿈, 함께 준비하는 별장.'}</p>
      <p class="lodge-description">${en ? 'Imagine a holiday home prepared together.<br>Discover a new everyday, with time to call your own.' : '한 채를 함께 준비하는 별장 구상.<br>그 안에서 꿈꾸는 새로운 일상을 만나보세요.'}</p>
      <a class="lodge-explore" href="#our-villa"><span>${en ? 'Why MyLodge?' : '마이롯지 알아보기'}</span><span aria-hidden="true">↗</span></a>
    </div>
    <div class="lodge-footer"><a class="lodge-scroll" href="#our-villa"><span aria-hidden="true">↓</span> ${en ? 'Discover MyLodge' : '마이롯지의 이야기'}</a><p>${en ? 'A vision in progress. Reservations are not yet available.' : '사전 안내 단계 · 실제 모집·계약·예약은 진행되지 않습니다.'}</p><span class="lodge-edition" aria-hidden="true">THE ART OF STAYING</span></div>`;

  if (!en) {
    hero.classList.add('lodge-video-hero');
    hero.querySelector('.lodge-kicker').remove();
    hero.querySelector('.lodge-description').remove();
    const footer=hero.querySelector('.lodge-footer');
    const disclosure=footer.querySelector('p');
    disclosure.className='hero-context-note';
    disclosure.textContent='AI 공간 콘셉트 · 실제 현장·확정 설계가 아닙니다. '+disclosure.textContent;
    document.querySelector('#our-villa .invitation-grid>div').append(disclosure);
    footer.remove();
    hero.querySelector('.lodge-window figcaption').textContent='AI 공간 콘셉트';
    const depth=hero.querySelector('.lodge-image-depth');
    depth.insertAdjacentHTML('beforeend','<video class="lodge-hero-video" muted loop playsinline preload="metadata" poster="assets/images/brand-villa-atmosphere-20261008-1680.webp" aria-hidden="true"><source src="assets/video/Beach2.mp4" type="video/mp4"></video>');
    hero.insertAdjacentHTML('beforeend','<button class="lodge-video-toggle" type="button" aria-label="히어로 영상 재생">영상 재생 ▶</button>');
    const video=depth.querySelector('video'),toggle=hero.querySelector('.lodge-video-toggle');
    const motion=matchMedia('(prefers-reduced-motion: reduce)');
    let userPaused=motion.matches,visible=true;
    video.muted=true;
    const update=()=>{
      toggle.textContent=video.paused?'영상 재생 ▶':'영상 일시정지 Ⅱ';
      toggle.setAttribute('aria-label',video.paused?'히어로 영상 재생':'히어로 영상 일시정지');
    };
    const syncVideo=()=>{
      if(userPaused||!visible||document.hidden)video.pause();
      else video.play().catch(update);
    };
    video.addEventListener('playing',()=>{video.classList.add('is-ready');update();});
    video.addEventListener('pause',update);
    video.addEventListener('error',()=>{video.classList.remove('is-ready');toggle.hidden=true;});
    video.querySelector('source').addEventListener('error',()=>{video.classList.remove('is-ready');toggle.hidden=true;});
    toggle.addEventListener('click',()=>{userPaused=!video.paused;syncVideo();});
    motion.addEventListener('change',event=>{if(event.matches){userPaused=true;video.classList.remove('is-ready');}syncVideo();});
    new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;syncVideo();},{threshold:0}).observe(hero);
    document.addEventListener('visibilitychange',syncVideo);
    addEventListener('pagehide',()=>video.pause());
    addEventListener('pageshow',syncVideo);
    syncVideo();
  }

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
      document.querySelectorAll('#ownership .promotion-cards>article').forEach(card=>{
        gsap.from(card.querySelector('.editorial-card-copy'),{opacity:0,y:22,duration:1.1,ease:'power3.out',clearProps:'opacity,transform',scrollTrigger:{trigger:card,start:'top 80%',once:true}});
      });
      if (en && !entered && scrollY < hero.offsetHeight / 2) {
        entered = true;
        // The photograph settles like a slow camera pull-back. Entrance uses
        // the image; scroll uses its wrapper, avoiding competing transforms.
        gsap.timeline({ defaults: { ease: 'power3.out' } })
          .from('.lodge-image-depth img', { scale: desktop ? 1.13 : 1.08, duration: 2.6, clearProps: 'transform' }, 0);
      }
      // Overscan keeps the photograph edge-to-edge throughout native scroll.
      const transition=gsap.timeline({ scrollTrigger: { id: 'lodge-hero-cinematic', trigger: hero, start: 'top top', end: 'bottom top', scrub: .8, invalidateOnRefresh: true }, defaults: { ease: 'none' } });
      if(en)transition.to('.lodge-image-depth', { yPercent: desktop ? 8 : 3 }, 0);
      transition.to('.lodge-heading', { y: desktop ? -45 : -18 }, 0);

    }, hero);
  }
  function unmount() { media?.revert(); media = null; }
  mount();
  addEventListener('pagehide', unmount);
  addEventListener('pageshow', mount);
})();
