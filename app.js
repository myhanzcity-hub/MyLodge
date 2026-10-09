// Public project introduction. No consultation, collection or sending interface.
(() => {
// Review figures, not approved contract terms. All displayed prices derive here.
const offer=Object.freeze({amount:3960000,depositRate:.05,shares:120});
const pageRevision=Object.freeze({date:'2026-10-05',label:'2026.10.05'});
const money=value=>{value=Math.max(0,value);if(!value)return '0원';const man=Math.floor(value/10000),rest=value%10000;return (man?man.toLocaleString('ko-KR')+'만':'')+(rest?(man?' ':'')+rest.toLocaleString('ko-KR'):'')+(rest?'원':' 원');};
const priceText={amount:money(offer.amount),deposit:money(Math.round(offer.amount*offer.depositRate)),balance:money(offer.amount-Math.round(offer.amount*offer.depositRate)),rate:(offer.depositRate*100)+'%'};
const images=[['hero',1122,1402],['interior',1448,1086],['terrace',1145,1374],['hero',1122,1402],['coastal',1448,1086],['forest',1448,1086]];
const image=(i,alt)=>{const [name,width,height]=images[i];return '<img src="assets/images/lodge-'+name+'-960.webp" srcset="'+[480,960,Math.min(1440,width)].map(w=>'assets/images/lodge-'+name+'-'+w+'.webp '+w+'w').join(', ')+'" sizes="(max-width:700px) calc(100vw - 40px), (max-width:1023px) 80vw, 600px" width="'+width+'" height="'+height+'" alt="'+alt+' · AI 생성 콘셉트" decoding="async" '+(i?'loading="lazy"':'fetchpriority="high"')+'>';};
const cta = '<a class="primary" href="#projects">별장 둘러보기 ↗</a>';
const planImage=(page,alt)=>'<img src="assets/images/plan-p'+page+'-960.webp" srcset="assets/images/plan-p'+page+'-480.webp 480w, assets/images/plan-p'+page+'-960.webp 960w, assets/images/plan-p'+page+'-1440.webp 1440w" sizes="(max-width:700px) 90vw, 600px" width="1440" height="804" alt="'+alt+' · 사업계획서 콘셉트" loading="lazy" decoding="async">';
const intro = (title, body='') => '<div class="intro"><h2>'+title+'</h2>'+(body?'<p>'+body+'</p>':'')+'</div>';
const section = (id, cls, body) => '<section id="'+id+'" class="'+cls+'"><div class="container">'+body+'</div></section>';
const upcomingServices = [
 {id:'service-swap',title:'지역 교환·일정 조회',description:'나의 이용 일정과 다른 지역의 머무름을 서로 제안하는 서비스 구상입니다.',items:['이용권과 실제 시설·일정 공급의 확인','양측의 조건 확인·추가 금액·혜택·취소 기준'],note:'제공 지역·대상 이용권·교환 방식은 미정입니다. 상대의 제안이나 동의만으로 일정이 확정되는 서비스는 아직 제공하지 않습니다.'},
 {id:'service-notifications',title:'알림',description:'예약·교환 등 필요한 진행 소식을 받아보는 알림을 준비합니다.',items:['상담·예약·교환 중 어떤 소식을 받을지','푸시·카카오·문자 제공 방식과 수신 설정'],note:'푸시·카카오 알림톡·문자 등 제공 방식과 알림 항목은 추후 안내합니다. 현재 알림은 발송되지 않습니다.'},
 {id:'service-rental',title:'렌트·공동 모집',description:'별장을 함께 준비하는 공동 모집과, 이용 가능한 숙박을 빌려주는 렌트는 별도 절차입니다.',items:['공동 모집의 참여 대상과 진행 방식','숙박 렌트의 이용 대상·수수료·정산·취소 기준'],note:'렌트와 공동 모집의 대상·방식·정산·취소 조건은 미정입니다. 현재 예약·결제·모집금 접수는 제공하지 않습니다.'},
 {id:'service-preparation',title:'청소·룸서비스',description:'머무는 날의 준비를 돕는 청소·룸서비스와 침구·타월 제공을 구상합니다.',items:['지역별 제공 업체·작업 범위·가능 일정','품목·기본 수량·추가 비용·신청 마감·취소 기준'],note:'제공 여부와 항목, 비용은 아직 정해지지 않았습니다. 현재 청소·침구·룸서비스 신청은 받지 않습니다.'}
];
const serviceScenes=[
 '<div class="swap-example"><div><span>내 이용 일정</span><strong>지역 A</strong><small>바꾸고 싶은 일정</small></div><span class="swap-arrow" aria-hidden="true">⇄</span><div><span>교환 희망 일정</span><strong>지역 B</strong><small>상대와 조건 확인</small></div></div><p class="service-example-note">지역·날짜는 설명용 구분입니다. 교환 범위와 추가 조건은 미정입니다.</p>',
 '<div class="notification-example"><span class="notice-icon" aria-hidden="true">↗</span><div><strong>진행 소식 확인</strong><p>알림에서 관련 내역으로 이어지는 흐름을 준비합니다.</p></div></div><p class="service-example-note">발송 방식과 수신 설정은 준비 중입니다.</p>',
 '<div class="rental-distinction"><div><span>참여 단계</span><strong>공동 모집</strong><p>별장 한 채를 함께 준비</p><a href="#ownership">공유 방식 보기 ↗</a></div><div><span>이용 단계</span><strong>숙박 렌트</strong><p>이용 가능한 숙박을 유료로 대여</p><small>대상·정산 조건 미정</small></div></div>',
 '<div class="preparation-example"><div><span aria-hidden="true">01</span><strong>방문 일정</strong></div><i aria-hidden="true">→</i><div><span aria-hidden="true">02</span><strong>품목·수량</strong></div><i aria-hidden="true">→</i><div><span aria-hidden="true">03</span><strong>가능 여부</strong></div></div><p class="service-example-note">청소·침구 등 제공 항목과 비용, 신청 마감은 추후 안내합니다.</p>'
];
const upcomingServiceMarkup = '<nav class="service-category-nav" aria-label="준비 중인 서비스 카테고리">'+upcomingServices.map(s=>'<a href="#'+s.id+'">'+s.title+'</a>').join('')+'</nav><div class="service-overview-grid">'+upcomingServices.map((s,i)=>'<article class="card service-overview-card" id="'+s.id+'" aria-labelledby="'+s.id+'-title"><div class="service-card-heading"><span class="number">0'+(i+1)+'</span><span class="preparing">준비 중</span></div><h3 id="'+s.id+'-title">'+s.title+'</h3><p>'+s.description+'</p><details class="service-expand"><summary>이용 흐름과 준비 조건 보기</summary><div class="service-flow-preview"><span class="eyebrow">이용 구상 예시 · 준비 중</span>'+serviceScenes[i]+'</div><p class="service-conditions-label">앞으로 안내할 조건</p><ul class="service-features">'+s.items.map(item=>'<li>'+item+'</li>').join('')+'</ul><p class="small">'+s.note+'</p></details></article>').join('')+'</div>';
const contractPreview={
 description:'참여 후 계약과 납입 안내, 프로젝트의 준비 상황을 한곳에서 확인하는 화면을 구상하고 있습니다.',
 items:['계약 문서 · 연결 후 표시','납입 일정 · 조건 확정 후 안내','사업 진행 · 확인된 소식 안내'],
 note:'계약 연동과 사업 정보 공개 기준은 협의 후 정해집니다.'
};
const contractMarkup='<details id="member" class="contract-preview"><summary>참여 후 내 계약·진행 화면 구상</summary><p>'+contractPreview.description+'</p><ul>'+contractPreview.items.map(item=>'<li>'+item+'</li>').join('')+'</ul><p class="small">'+contractPreview.note+'</p></details>';
const projectFacts=[
 ['위치·부지','정확한 위치와 부지 확보를 확인할 자료'],
 ['공간·시설','면적·객실·정원·전용/공용 시설·확정 도면·실제 사진'],
 ['모집·계약','적용 상품·구좌 단위·가격·납입표·모집 일정'],
 ['이용 시작','공사·시설 준비와 운영 조건을 확인한 이용 개시 안내']
];
const projectDetails = () => '<details class="project-details" id="project-public-scope"><summary>두 프로젝트의 공개 범위와 확인할 조건</summary><p class="small">위치·시설·일정은 확인된 자료부터 순차적으로 안내합니다.</p><dl class="project-scope-list">'+projectFacts.map(([label,description])=>'<div><dt>'+label+'</dt><dd>'+description+'<span>정식 안내 전 확인 필요</span></dd></div>').join('')+'</dl><p class="small">준비 중 표시는 모집 개시나 부지 확보, 인허가 완료를 의미하지 않습니다.</p></details>';
const rightsMarkup = '<div class="rights-heading"><h3 id="rights-title">권리와 추가 비용, 한눈에 확인하세요.</h3><p>현재 안내 가능한 기준과 확인이 필요한 조건을 구분했습니다.</p></div><table class="card rights-table" aria-labelledby="rights-title"><thead><tr class="rights-row rights-head"><th scope="col">확인 항목</th><th scope="col">현재 안내</th><th scope="col">상태</th></tr></thead><tbody>'+[
 ['shares','참여 단위','한 채 기준 '+offer.shares+'구좌 구상 · 프로젝트별 적용 단위는 확인 필요','현재 구상'],
 ['ownership','소유 권리','취득할 권리의 종류·등기 방식·범위·발생 시점·양도 조건','미정'],
 ['use','이용 권리','이용 지역·기간·연간 숙박량·동반 인원·변경·취소 조건','미정'],
 ['schedule','일정 배정','성수기·주말·예약 우선순위','미정'],
 ['costs','추가 비용','세금·등기·정기 관리·수선·청소·침구·선택 서비스 비용','미정'],
 ['cancellation','변경·취소·환불','모집 미달·사업 지연·조건 변경·중도 취소·환불 기준','미정']
 ].map(r=>'<tr class="rights-row" id="rights-'+r[0]+'" tabindex="-1"><th scope="row">'+r[1]+'</th><td class="rights-description">'+r[2]+'</td><td class="rights-state"><span class="status-label">'+r[3]+'</span></td></tr>').join('')+'</tbody></table>';
const costScopeMarkup='<section class="cost-scope" aria-labelledby="cost-scope-title"><div class="cost-scope-heading"><span class="eyebrow">THE WHOLE PICTURE</span><h3 id="cost-scope-title">참여 기준 금액과,<br>추가로 확인할 비용.</h3><p>참여 기준 금액의 포함 항목과 추가 부담까지 확인해야 최종 비용을 알 수 있습니다. 각 항목의 적용 여부와 금액은 최종 비용표에서 안내합니다.</p></div><dl class="cost-scope-grid">'+[
 ['기본 참여금',priceText.amount+'이 어떤 권리와 항목의 대가인지, 적용 프로젝트와 포함 범위를 확인합니다.','포함 범위 미정'],
 ['세금·등기','발생하는 항목과 산정 기준, 부담 주체와 납부 절차를 확인합니다.','적용·금액 미정'],
 ['관리·수선','정기 관리비와 시설 수선·교체 비용, 부과 주기와 부담 방식을 확인합니다.','금액·부담 방식 미정'],
 ['머무는 날의 서비스','청소·침구·타월·룸서비스의 기본 제공 여부와 유료 추가 범위를 확인합니다.','제공·요금 미정']
 ].map(([title,copy,status])=>'<div><dt>'+title+'</dt><dd><p>'+copy+'</p><span>'+status+'</span></dd></div>').join('')+'</dl><p class="cost-scope-note">교환·렌트 등 후속 서비스의 수수료와 취소·양도 시 발생 비용도 별도 검토 대상입니다. 해당 비용의 금액과 적용 여부도 정식 안내에서 확인해야 합니다.</p></section>';
const rightsDefinitionMarkup='<div class="rights-definition" id="ownership-and-stay"><article><span>소유 권리</span><h3>별장에 대해 내가 갖는 권리</h3><p>한 구좌에 참여하면 어떤 권리를 갖는지, 내 이름으로 등기되는지, 다른 사람에게 넘길 수 있는지 살펴봅니다. 소유 방식과 권리 범위는 아직 정해지지 않았습니다.</p></article><article><span>이용 조건</span><h3>언제, 얼마나 머물 수 있는지</h3><p>1년에 몇 박을 머물 수 있는지, 원하는 날짜에 예약할 수 있는지 살펴봅니다. 이용 일수와 성수기·주말의 예약 기준은 아직 정해지지 않았습니다.</p></article></div>';
const progressMarkup = intro('공간의 구상과,<br>사업의 준비를 구분합니다.','현재는 콘셉트와 참여 방식을 소개하는 사전 안내 단계입니다.')+'<div class="readiness-overview" aria-label="현재 공개 정보의 범위">'+[
 ['지금 살펴볼 수 있는 것','공간·생활 콘셉트, 공유 방식, 참여 금액의 검토 기준','사전 안내'],
 ['확인 자료를 기다리는 것','실제 부지·설계·인허가·시공, 상품·운영 주체','자료 공개 준비 중'],
 ['정식 안내 전 확인할 것','모집·계약·납입 조건, 이용 개시와 예약 기준','조건 미확정']
 ].map(([title,copy,status],i)=>'<article><span class="readiness-number">0'+(i+1)+'</span><h3>'+title+'</h3><p>'+copy+'</p><b>'+status+'</b></article>').join('')+'</div><div class="progress-grid"><article class="card progress-card"><span class="preparing">공개 준비 중</span><h3>책임 주체와 확인 자료</h3><p>확인된 자료와 담당 역할을 함께 안내할 예정입니다. 콘셉트 이미지와 지역명이 부지 확보나 공사 진행을 증명하지는 않습니다.</p><dl class="fact-list">'+['계약·사업 주체','설계·시공 담당','시설 운영·고객 응대','공식 연락처·운영시간'].map(t=>'<div><dt>'+t+'</dt><dd>공개 준비 중</dd></div>').join('')+'</dl><p class="small">사업 자료의 확인일은 해당 자료와 함께 안내합니다. 페이지 하단의 화면 업데이트 날짜는 사업 진행이나 준공을 확인한 날짜가 아닙니다.</p></article></div>';
const steps = [
 ['공유 방식을 살핍니다','지금은 공간 콘셉트와 참여 단위, 비용·권리의 검토 기준을 살펴보는 단계입니다.'],
 ['정식 조건을 확인합니다','모집 상품과 전체 비용, 권리·납입·변경·취소 조건이 안내된 뒤 충분히 검토합니다.'],
 ['계약과 납입을 확인합니다','승인된 상품과 절차에 따라 계약·납입을 진행하는 구상입니다. 현재 계약·수납은 제공하지 않습니다.'],
 ['이용 준비를 확인합니다','시설과 운영, 이용권·일정 배정 기준이 준비되어야 합니다. 계약이나 첫 납입만으로 숙박이 시작되지 않습니다.']
];
const decisionGuide='<aside class="decision-guide" aria-labelledby="decision-guide-title"><div><span class="eyebrow">BEFORE YOU DECIDE</span><h3 id="decision-guide-title">내게 맞는 방식인지,<br>세 가지부터 확인해 보세요.</h3><p>소유·이용·비용의 현재 안내 상태를 확인하세요.</p></div><div class="decision-links">'+[
 ['소유의 범위','소유 범위·이전 방식','ownership'],
 ['머무는 기준','이용 일수·일정 배정','use'],
 ['추가 비용','관리·청소·침구 비용','costs']
 ].map((item,index)=>'<a href="#rights-'+item[2]+'"><span class="decision-number" aria-hidden="true">0'+(index+1)+'</span><span><strong>'+item[0]+'</strong><small>'+item[1]+'</small></span><span aria-hidden="true">↗</span></a>').join('')+'</div></aside>';
const ownershipMarkup=intro('한 채에서 시작해,<br>함께 머무는 생활로.','한 채 · 120구좌 · 소유와 이용.<br>세부 조건은 정식 안내 전 확인이 필요합니다.')+
 '<div class="ownership-story"><div class="ownership-visual" aria-hidden="true" data-scene="0"><span class="story-kicker">A PLACE TO SHARE</span><div class="story-house">'+planImage(13,'함께 준비하는 별장 공간')+'<span>함께 준비하는 한 채</span></div><div class="story-shares"><div class="share-grid">'+'<span></span>'.repeat(offer.shares)+'</div><span>'+offer.shares+'구좌 중 한 구좌 예시</span></div><div class="story-rights"><span>소유 권리<small>권리 범위·이전 방식</small></span><i>+</i><span>이용 조건<small>숙박 일수·일정 배정</small></span></div><p class="story-caption">계획서 콘셉트·구조 예시 · 실제 현장·모집 현황이 아닙니다</p><div class="story-dots"><i></i><i></i><i></i></div></div><div class="ownership-chapters">'+[
 ['한 채를 함께 준비합니다.','여러 참여자가 별장 한 채를 함께 준비합니다. 소유 방식과 권리 범위는 계약 전 확인합니다.'],
 [offer.shares+'구좌 중 한 구좌를 살펴봅니다.','구좌는 참여를 구분하는 단위입니다. '+offer.shares+'구좌는 한 채 기준의 구상이며, 실제 프로젝트별 적용은 확인이 필요합니다. 한 구좌가 숙박 하루나 한 사람을 뜻하지는 않습니다.'],
 ['소유와 이용은 따로 확인합니다.','자산에 대한 권리와 머무는 조건은 서로 다릅니다. 등기·양도·권리 발생 시점, 이용량·성수기 배정·예약 방식은 아직 정해지지 않았습니다.']
 ].map((item,i)=>'<article class="ownership-chapter" id="ownership-step-'+i+'" data-scene="'+i+'"><span class="chapter-number">0'+(i+1)+'</span><h3>'+item[0]+'</h3><p>'+item[1]+'</p>'+(i===2?'<a class="text-link" href="#pricing">비용과 권리 함께 확인하기 ↗</a>':'')+'</article>').join('')+'</div></div>';

const checklistMarkup='<details id="checklist" class="participation-checklist"><summary>참여 전 꼭 확인할 세 가지</summary>'+'<div class="check-grid">'+[
 ['소유와 이용의 범위','내가 갖게 되는 권리의 범위와 이전 절차, 이용 일수와 예약 기준을 살펴보세요.','<path d="M6 8h10M6 12h7"/>'],
 ['납입과 취소 조건','총금액과 납입 일정, 추가 비용, 취소와 환불 기준을 미리 확인하세요.','<path d="M11 6v6l4 2"/>'],
 ['진행 상태와 운영 주체','현재 어디까지 준비되었는지, 누가 운영을 맡는지 확인해 보세요.','<circle cx="11" cy="11" r="4"/><path d="M11 1v4M11 17v4M1 11h4M17 11h4"/>']
 ].map(c=>'<article class="card check-card"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#244c45" stroke-width="1.5" aria-hidden="true"><rect x="1" y="1" width="20" height="20" rx="5"/>'+c[2]+'</svg><div><h3>'+c[0]+'</h3><p>'+c[1]+'</p></div></article>').join('')+'</div></details>';

document.querySelector('main').innerHTML =
 '<section id="home" class="hero"><div class="container hero-grid"><div><div class="eyebrow">MY LODGE · 공유별장 프로젝트</div><h1>별장 하나,<br>내 생활에 들이는 법.</h1><p class="hero-sub">함께 준비하는 별장, 나다운 쉼의 시작.</p><p class="hero-description">한 채를 함께 준비하고, 정해질 이용 기준에 따라 머무는 공유별장 프로젝트입니다.</p><div class="price-pair"><div class="price-tile"><p>1구좌 기준 예상 금액</p><strong>'+priceText.amount+'</strong></div><div class="price-tile"><p>이 금액 중 최초 납입 '+priceText.rate+'</p><strong>'+priceText.deposit+'</strong><small>이후 잔여 금액과 별도 비용 확인</small></div></div><p class="small">현재 검토 중인 금액입니다. 납입 일정과 이용 조건은 정식 모집 전 안내합니다.</p><div class="hero-actions">'+cta+'<a class="outline" href="#ownership">공유 방식 알아보기 ↗</a></div><p class="small hero-reassurance">현재는 사전 안내 단계입니다. 실제 모집·계약·예약은 진행되지 않습니다.</p></div><figure class="photo hero-photo">'+image(0,'별장 공간 콘셉트')+'<figcaption>AI 생성 콘셉트 · 실제 현장·확정 설계가 아닙니다</figcaption></figure></div></section>'+
section('ownership','sage',ownershipMarkup+decisionGuide)+
 section('vision','vision-section','<div class="vision-heading"><span class="eyebrow">MY LODGE · SPACE VISION</span><h2>함께 꿈꾸는 공간,<br>한눈에 펼쳐보다.</h2><p>사업계획서에 담긴 공간 조성 콘셉트입니다.</p></div><figure class="photo vision-photo">'+planImage(8,'마이롯지 공간 조성 구상')+'<figcaption>사업계획서 조감도 콘셉트 · 실제 현장·확정 설계가 아닙니다</figcaption></figure>')+
 section('pricing','mist',intro('얼마부터 시작하는지,<br>먼저 살펴보세요.','검토 중인 1구좌 금액과 납입 계획입니다.')+'<div class="card pricing-table">'+[
 ['1구좌 참여 기준 <span>검토 금액</span>','적용 프로젝트와 포함 항목, 최종 가격은 확정 전입니다.',''+priceText.amount+''],['그중 최초 5%의 계산값','기준 금액의 '+priceText.rate+'입니다. 전체 금액이 아니며, 현재 수납은 진행하지 않습니다.',''+priceText.deposit+''],['계산상 잔여 기준 금액',''+priceText.amount+'에서 최초 5%를 뺀 금액입니다. 별도 비용을 합산한 최종 잔액은 아닙니다.',''+priceText.balance+''],['납입 계획','최초 5%의 포함 여부, 회차별 금액·기한·발생 조건은 미정입니다.','6단계 구상 · 상세 미정']
 ].map((r,i)=>'<div class="pricing-row"'+(i===3?' id="payment-plan" tabindex="-1"':'')+'><div><div class="pricing-label">'+r[0]+'</div><p class="small">'+r[1]+'</p></div><strong>'+r[2]+'</strong></div>').join('')+'</div><div class="pricing-note"><p>최초 5%가 전체 6단계에 포함되는지는 아직 정해지지 않았습니다.</p><p class="small">각 단계의 금액·기한·납입 조건은 정식 안내 전 확정이 필요합니다. 계약 전 최종 납입표와 추가 비용표를 함께 확인해야 합니다.</p></div>'+costScopeMarkup+rightsDefinitionMarkup+rightsMarkup+'<div class="center pricing-cta">'+cta+'</div>')+
 section('projects','',intro('다음 마이롯지가<br>머물 곳.','주문진과 양양의 지역 소개와 공간 콘셉트를 살펴보세요.')+
 '<div class="project-intro-note"><span>현재 공개 범위</span><p>이미지는 AI 공간 콘셉트입니다. 실제 위치·시설·설계·일정은 확인 후 안내합니다.</p></div>'+
 '<div class="stack-grid project-grid">'+['주문진','양양'].map((region,index)=>'<article class="card project card-lift" id="project-'+(index?'yangyang':'jumunjin')+'"><div class="photo project-photo">'+image(index+4,region+' 지역 소개용 공간 콘셉트 · 실제 위치를 나타내지 않음')+'<span class="badge">자료 공개 준비 중</span><span class="concept">AI 공간 콘셉트</span></div><div class="project-body"><div class="project-title-row"><h3>'+region+' 프로젝트</h3><span aria-hidden="true">0'+(index+1)+'</span></div><p class="project-region-copy">'+region+'의 지역 소개와 별장 공간 구상을 살펴보는 카드입니다. 실제 부지와 시설이 확정된 모집 상품 안내는 아닙니다.</p><dl class="project-fact-mini"><div><dt>현재 공개</dt><dd>지역명·공간 콘셉트</dd></div><div><dt>위치·시설</dt><dd>확인 자료 공개 전</dd></div><div><dt>모집 조건</dt><dd>정식 안내 전</dd></div><div><dt>이용 시작</dt><dd>일정·운영 조건 미정</dd></div></dl><a class="location" href="#project-public-scope">공개 전 확인할 자료 보기 <span aria-hidden="true">↗</span></a></div></article>').join('')+'</div><div class="project-common">'+projectDetails()+'</div>')+
 section('nature','nature-section','<figure class="nature-visual"><img src="assets/images/lodge-dreamscape-960.webp" srcset="assets/images/lodge-dreamscape-480.webp 480w, assets/images/lodge-dreamscape-960.webp 960w, assets/images/lodge-dreamscape-1536.webp 1536w" sizes="100vw" width="1536" height="1024" alt="청록빛 물과 금빛 숲이 어우러진 몽환적인 자연 · AI 브랜드 콘셉트" loading="lazy" decoding="async"><div class="nature-copy"><span class="eyebrow">A MOMENT BEYOND EVERYDAY</span><h2>일상의 바깥,<br>깊어지는 쉼.</h2><p>자연을 가까이 두는 새로운 생활을 그립니다.</p></div><figcaption>AI 브랜드 콘셉트 · 프로젝트의 실제 자연환경이 아닙니다</figcaption></figure>')+
 section('lifestyle','',intro('혼자 떠나는 날에도,<br>함께 떠나는 날에도.','창가의 아침, 숲을 바라보는 오후.<br>머물고 싶은 하루를 만나보세요.')+'<div class="stack-grid lifestyle-grid"><figure class="photo lifestyle-main">'+image(1,'창가에서 보내는 휴식')+'<figcaption class="photo-label">창가에서 보내는 휴식</figcaption></figure><div class="lifestyle-secondary">'+['숲을 바라보는 테라스','독채형 공간 콘셉트'].map((t,i)=>'<figure class="photo">'+image(i+2,t)+'<figcaption class="photo-label">'+t+'</figcaption></figure>').join('')+'</div></div><p class="image-note">이미지는 AI로 만든 공간 콘셉트입니다. 실제 현장·확정 설계·제공 시설을 나타내지 않습니다.</p>')+
 section('participation','',intro('서두르지 말고,<br>하나씩 알아가세요.')+'<p class="journey-current"><span>지금의 단계</span> 공간과 참여 조건을 살펴보는 사전 안내 · 실제 상담·계약·수납·예약은 제공하지 않습니다.</p><div class="step-grid">'+steps.map((s,i)=>'<article class="card step"><span class="number">0'+(i+1)+'</span><h3>'+s[0]+'</h3><p>'+s[1]+'</p></article>').join('')+'</div><p class="step-note">정식 안내와 준비가 이루어진 이후의 절차를 포함한 구상입니다. 모집 완료·계약 체결·납입·이용 개시는 서로 다른 단계입니다.</p>'+checklistMarkup+contractMarkup)+
 section('stay-services','',intro('마이롯지의 다음 서비스,<br>카테고리별로 살펴보세요.','교환·알림·렌트·방문 준비.<br>제공 시점과 조건은 확정 후 안내합니다.')+upcomingServiceMarkup)+
 section('progress','mist',progressMarkup);

document.body.classList.add('benchmark-design','future-design');
const storyVisual=document.querySelector('.ownership-visual');
// Keep the illustration inside the viewport and pair each scene with its explanation.
const ownershipStory=document.querySelector('.ownership-story');
const ownershipChapters=[...document.querySelectorAll('.ownership-chapter')];
const ownershipScenes=[...storyVisual.querySelectorAll('.story-house,.story-shares,.story-rights')];
const ownershipStage=document.createElement('div');ownershipStage.className='ownership-stage';ownershipStage.setAttribute('aria-hidden','true');
storyVisual.querySelector('.story-kicker').after(ownershipStage);ownershipScenes.forEach(scene=>ownershipStage.append(scene));
storyVisual.removeAttribute('aria-hidden');
storyVisual.querySelector('.story-kicker').textContent='공유 방식 · 세 가지 이야기';
const ownershipGuide=document.createElement('nav');ownershipGuide.className='ownership-guide';ownershipGuide.setAttribute('aria-label','공유 방식 설명 이동');
ownershipGuide.innerHTML=['한 채','120구좌','소유·이용'].map((label,i)=>'<a href="#ownership-step-'+i+'"><span>0'+(i+1)+'</span>'+label+'</a>').join('');
storyVisual.querySelector('.story-kicker').after(ownershipGuide);storyVisual.querySelector('.story-dots').remove();
const ownershipLinks=[...ownershipGuide.querySelectorAll('a')];
const ownershipInline=ownershipChapters.map((chapter,i)=>{chapter.tabIndex=-1;const box=document.createElement('div');box.className='ownership-inline-visual';box.setAttribute('aria-hidden','true');chapter.querySelector('p').before(box);box.insertAdjacentHTML('beforeend','<p class="ownership-inline-note">'+['계획서 공간 콘셉트 · 실제 현장·확정 설계가 아닙니다','참여 단위 설명 · 실제 모집 현황이 아닙니다','권리·이용 기준은 정식 계약 전 확인합니다'][i]+'</p>');return box;});
let ownershipFrame=0,ownershipLayout='',ownershipCurrent=-1;
function paintOwnership(){
 ownershipFrame=0;
 if(ownershipLayout!=='paired')return;
 const storyRect=ownershipStory.getBoundingClientRect();if(storyRect.bottom<0||storyRect.top>innerHeight)return;
 const gridWidth=Math.max(0,Math.min(320,ownershipStage.clientWidth,(ownershipStage.clientHeight-42)*1.2));
 if(ownershipStage.style.getPropertyValue('--ownership-grid-width')!==gridWidth+'px')ownershipStage.style.setProperty('--ownership-grid-width',gridWidth+'px');
 // A single reading line gives the same result going down, up or jumping to an anchor.
 const visualRect=storyVisual.getBoundingClientRect();
 const line=Math.max(visualRect.top,Number(ownershipStory.dataset.stickyTop))+visualRect.height*.42;
 let index=0;ownershipChapters.forEach((chapter,i)=>{if(chapter.getBoundingClientRect().top<=line)index=i;});
 if(index===ownershipCurrent)return;ownershipCurrent=index;storyVisual.dataset.scene=String(index);
 ownershipChapters.forEach((chapter,i)=>chapter.classList.toggle('is-current',i===index));
 ownershipLinks.forEach((link,i)=>{if(i===index)link.setAttribute('aria-current','step');else link.removeAttribute('aria-current');});
}
function queueOwnership(){if(!ownershipFrame)ownershipFrame=requestAnimationFrame(paintOwnership);}
function layoutOwnership(){
 const headerBottom=document.querySelector('.header-inner').getBoundingClientRect().bottom;
 const top=Math.max(88,Math.ceil(headerBottom)+18);
 const bottomBar=document.querySelector('.mobile-cta');
 // Reserve the mobile action bar consistently, including before its first paint.
 const bottom=innerWidth<1024?Math.max(88,bottomBar?.offsetHeight||0):0;
 const available=innerHeight-top-bottom-20;
 const layout=innerWidth>=800&&available>=360?'paired':'stacked';
 ownershipStory.dataset.stickyTop=String(top);ownershipStory.style.setProperty('--ownership-top',top+'px');ownershipStory.style.setProperty('--ownership-height',Math.min(510,available)+'px');
 if(layout!==ownershipLayout){
  ownershipLayout=layout;ownershipStory.dataset.layout=layout;ownershipCurrent=-1;
  ownershipScenes.forEach((scene,i)=>{if(layout==='paired')ownershipStage.append(scene);else ownershipInline[i].prepend(scene);});
  if(layout==='stacked'){ownershipChapters.forEach(chapter=>chapter.classList.remove('is-current'));ownershipLinks.forEach(link=>link.removeAttribute('aria-current'));}
 }
 queueOwnership();
}
window.addEventListener('scroll',queueOwnership,{passive:true});window.addEventListener('resize',layoutOwnership,{passive:true});
const ownershipResize=new ResizeObserver(layoutOwnership);ownershipResize.observe(ownershipStory.querySelector('.ownership-chapters'));ownershipResize.observe(ownershipStage);ownershipResize.observe(document.querySelector('.header-inner'));ownershipResize.observe(document.querySelector('.mobile-cta'));
document.fonts.ready.then(layoutOwnership);layoutOwnership();

document.querySelector('.mobile-cta b').textContent=priceText.amount;
document.querySelector('.mobile-cta small').textContent='그중 최초 '+priceText.rate+' · '+priceText.deposit;
document.querySelector('.copyright').textContent='© 2026 MY LODGE. 사전 안내 페이지 · '+pageRevision.label+' 화면 업데이트';

document.querySelector('.hero .eyebrow').insertAdjacentHTML('afterend','<p class="hero-stage">사전 안내 단계 <span>·</span> 공간과 서비스 구상</p>');
const menu=document.querySelector('.menu-button'),mobileMenu=document.querySelector('#mobile-menu');
function setMenu(open,returnFocus=false){mobileMenu.hidden=!open;menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기');if(returnFocus)menu.focus();}
menu.addEventListener('click',()=>setMenu(mobileMenu.hidden));
mobileMenu.addEventListener('click',event=>{
 const a=event.target.closest('a');if(!a||!mobileMenu.contains(a))return;
 setMenu(false);
 const target=a.hash?document.querySelector(a.hash):null, heading=target?.querySelector('h2') || target;
 if(heading){heading.setAttribute('tabindex','-1');requestAnimationFrame(()=>heading.focus({preventScroll:true}));}
});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!mobileMenu.hidden)setMenu(false,true);});
matchMedia('(min-width:1024px)').addEventListener('change',event=>{if(event.matches)setMenu(false);});
document.addEventListener('click',event=>{if(!mobileMenu.hidden&&!event.target.closest('header'))setMenu(false);});
const navLinks=[...document.querySelectorAll('header nav a')];let navigationFrame=0;
const navigationSections=[...document.querySelectorAll('main>section')].filter(section=>navLinks.some(link=>link.hash==='#'+section.id));
function updateNavigation(){navigationFrame=0;const current=navigationSections.filter(section=>section.getBoundingClientRect().top<=180).at(-1)?.id||'home';navLinks.forEach(link=>{if(link.hash==='#'+current)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}
window.addEventListener('scroll',()=>{if(!navigationFrame)navigationFrame=requestAnimationFrame(updateNavigation);},{passive:true});updateNavigation();
new IntersectionObserver(entries=>{const bar=document.querySelector('.mobile-cta');if(bar)bar.hidden=entries[0].isIntersecting;},{threshold:0}).observe(document.querySelector('footer'));
const infoDialog=document.querySelector('#info-dialog');
const infoPages={
 privacy:{title:'개인정보 처리방침',description:'공식 개인정보 처리방침을 준비하고 있습니다.',body:'<p>승인된 문서가 준비되면 이곳에서 확인하실 수 있습니다.</p><p class="info-note">현재 페이지에서는 개인정보를 입력받거나 접수하지 않습니다.</p>'},
 terms:{title:'이용약관',description:'공식 이용약관을 준비하고 있습니다.',body:'<p>서비스 이용 조건과 관련된 승인 문서가 준비되면 이곳에 공개합니다.</p><p class="info-note">현재 페이지는 사전 안내용입니다. 실제 계약 및 이용 조건은 정식 문서에서 확인해 주세요.</p>'},
 contact:{title:'문의 안내',description:'공식 문의처와 상담 운영시간을 준비하고 있습니다.',body:'<dl class="contact-info">'+['전화','이메일','상담 채널','운영시간'].map(label=>'<div><dt>'+label+'</dt><dd>준비 중</dd></div>').join('')+'</dl><p class="info-note">공식 문의처가 확정되면 안내드리겠습니다.</p>'}
};
document.querySelectorAll('[data-info]').forEach(button=>button.addEventListener('click',()=>{
 const info=infoPages[button.dataset.info];
 document.querySelector('#info-dialog-title').textContent=info.title;
 document.querySelector('#info-dialog-description').textContent=info.description;
 document.querySelector('#info-dialog-content').innerHTML=info.body;
 infoDialog.showModal();
}));
document.querySelector('.info-close').addEventListener('click',()=>infoDialog.close());

// React Bits-inspired treatments, adapted to this dependency-free static site.
const aurora = document.createElement('div');
aurora.className = 'aurora-scene';
aurora.setAttribute('aria-hidden','true');
aurora.innerHTML = '<i></i><i></i><i></i><div class="aurora-grid"></div>';
document.querySelector('.hero').prepend(aurora);
const heroTitle = document.querySelector('.hero h1');
heroTitle.innerHTML = '<span class="title-line">별장 하나,</span><span class="title-line">내 생활에 들이는 법.</span>';
const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
document.querySelectorAll('.service-overview-card').forEach(card=>{
 card.addEventListener('pointermove',event=>{
  if(motionPreference.matches || !finePointer.matches)return;
  const bounds=card.getBoundingClientRect();
  card.style.setProperty('--spot-x',`${event.clientX-bounds.left}px`);
  card.style.setProperty('--spot-y',`${event.clientY-bounds.top}px`);
 });
});
const projectPhotos=document.querySelectorAll('.project-photo');
const resetPhoto=photo=>{photo.style.removeProperty('--tilt-x');photo.style.removeProperty('--tilt-y');};
projectPhotos.forEach(photo=>{
 photo.addEventListener('pointermove',event=>{
  if(motionPreference.matches || !finePointer.matches)return;
  const bounds=photo.getBoundingClientRect();
  photo.style.setProperty('--tilt-x',`${-((event.clientY-bounds.top)/bounds.height-.5)*5}deg`);
  photo.style.setProperty('--tilt-y',`${((event.clientX-bounds.left)/bounds.width-.5)*5}deg`);
 });
 photo.addEventListener('pointerleave',()=>resetPhoto(photo));
 photo.addEventListener('pointercancel',()=>resetPhoto(photo));
});
motionPreference.addEventListener('change',()=>projectPhotos.forEach(resetPhoto));
finePointer.addEventListener('change',()=>projectPhotos.forEach(resetPhoto));
const heroVisibility=new IntersectionObserver(entries=>{
 entries.forEach(entry=>aurora.classList.toggle('paused',!entry.isIntersecting));
});
heroVisibility.observe(document.querySelector('.hero'));

// Count once when the price enters the viewport; expose only the final value to AT.
const priceCounters = [...document.querySelectorAll('.hero .price-tile strong')];
const priceSpecs=[{target:offer.amount,format:value=>money(Math.floor(value/10000)*10000)},{target:Math.round(offer.amount*offer.depositRate),format:value=>money(Math.floor(value/1000)*1000)}];
let countFrame=0, countStarted=false;
const counterSpans=priceCounters.map((node,index)=>{
 const finalText=node.textContent;
 node.classList.add('animated-price');
 node.textContent='';
 const accessible=document.createElement('span');
 accessible.className='motion-sr-only';accessible.textContent=finalText;
 const visual=document.createElement('span');visual.setAttribute('aria-hidden','true');
 visual.className='price-digits';visual.textContent=finalText;
 node.append(accessible,visual);
 return visual;
});
function finishPriceCount(){
 cancelAnimationFrame(countFrame);
 counterSpans.forEach((span,index)=>{
  span.textContent=priceSpecs[index].format(priceSpecs[index].target);
  span.classList.remove('counting');
 });
}
const priceVisibility=new IntersectionObserver(entries=>{
 if(countStarted || !entries.some(entry=>entry.isIntersecting))return;
 countStarted=true;priceVisibility.disconnect();
 if(motionPreference.matches){finishPriceCount();return;}
 counterSpans.forEach(span=>span.classList.add('counting'));
 const started=performance.now(), duration=1700;
 function tick(now){
  const progress=Math.max(0,Math.min(1,(now-started)/duration));
  const eased=1-Math.pow(1-progress,3);
  counterSpans.forEach((span,index)=>{
   const spec=priceSpecs[index];
   span.textContent=spec.format(Math.floor(spec.target*eased));
  });
  if(progress<1)countFrame=requestAnimationFrame(tick);else finishPriceCount();
 }
 countFrame=requestAnimationFrame(tick);
},{threshold:.45});
priceVisibility.observe(document.querySelector('.hero .price-pair'));

// Native scrolling stays intact. Only decorative layers move, within small limits.
const parallaxTargets=[
 ...[...document.querySelectorAll('.hero-photo img,.project-photo img,.lifestyle-grid img,.vision-photo img,.nature-visual img')].map(node=>({node,anchor:node.closest('.photo,.nature-visual'),range:node.closest('.hero')?32:24})),
 {node:aurora,anchor:document.querySelector('.hero'),range:48},
 {node:document.querySelector('.phone'),anchor:document.querySelector('.phone-wrap'),range:28}
].filter(item=>item.node&&item.anchor);
const activeParallax=new Set();
const parallaxByAnchor=new Map(parallaxTargets.map(item=>[item.anchor,item]));
parallaxTargets.forEach(item=>item.node.classList.add('parallax-layer'));
let scrollFrame=0;
function paintParallax(){
 scrollFrame=0;
 if(motionPreference.matches || document.hidden)return;
 const height=window.innerHeight;
 const strength=finePointer.matches?1:.35;
 const positions=[...activeParallax].map(item=>{
  const rect=item.anchor.getBoundingClientRect();
  const progress=Math.max(-1,Math.min(1,(height/2-rect.top-rect.height/2)/((height+rect.height)/2)));
  return {item,offset:progress*item.range*strength};
 });
 positions.forEach(({item,offset})=>item.node.style.setProperty('--parallax-y',`${offset.toFixed(2)}px`));
}
function queueParallax(){
 if(!scrollFrame&&!motionPreference.matches&&!document.hidden)scrollFrame=requestAnimationFrame(paintParallax);
}
const parallaxVisibility=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{
  const item=parallaxByAnchor.get(entry.target);
  if(entry.isIntersecting)activeParallax.add(item);else activeParallax.delete(item);
 });
 queueParallax();
},{rootMargin:'80px 0px'});
parallaxTargets.forEach(item=>parallaxVisibility.observe(item.anchor));
window.addEventListener('scroll',queueParallax,{passive:true});
window.addEventListener('resize',queueParallax,{passive:true});
document.addEventListener('visibilitychange',()=>{
 if(document.hidden){cancelAnimationFrame(scrollFrame);scrollFrame=0;if(countStarted)finishPriceCount();}
 else queueParallax();
});
motionPreference.addEventListener('change',()=>{
 if(motionPreference.matches){
  finishPriceCount();cancelAnimationFrame(scrollFrame);scrollFrame=0;
  parallaxTargets.forEach(item=>item.node.style.removeProperty('--parallax-y'));
 }else queueParallax();
});

// Scroll-linked entrance: blocks are pulled up into place as the page advances.
// No wheel interception, pinning, or delayed access to form controls.
const revealSelectors = [
 '.intake-guide', '.member-grid',
 '.check-card', '.check-bottom'
];
const revealItems=[...document.querySelectorAll(revealSelectors.join(','))].map(node=>{
 node.classList.add('scroll-pull');
 return {node,y:0};
});
let revealFrame=0;
function paintScrollPull(){
 revealFrame=0;
 const reduced=motionPreference.matches;
 const viewport=window.innerHeight;
 const distance=finePointer.matches?110:52;
 // Read all positions first, removing our previous translation from geometry.
 const positions=revealItems.map(item=>{
  const focused=item.node.matches(':focus-within');
  const top=item.node.getBoundingClientRect().top-(focused?0:item.y);
  const raw=Math.max(0,Math.min(1,(viewport*.99-top)/(viewport*.31)));
  const progress=raw*raw*(3-2*raw);
  return {item,y:reduced||focused?0:(1-progress)*distance,opacity:reduced||focused?1:.12+.88*progress};
 });
 positions.forEach(({item,y,opacity})=>{
  item.y=y;
  item.node.style.setProperty('--pull-y',`${y.toFixed(2)}px`);
  item.node.style.setProperty('--pull-opacity',opacity.toFixed(3));
 });
}
function queueScrollPull(){
 if(!revealFrame&&!document.hidden)revealFrame=requestAnimationFrame(paintScrollPull);
}
window.addEventListener('scroll',queueScrollPull,{passive:true});
window.addEventListener('resize',queueScrollPull,{passive:true});
window.addEventListener('hashchange',queueScrollPull);
document.addEventListener('focusin',queueScrollPull);
document.addEventListener('focusout',queueScrollPull);
document.addEventListener('visibilitychange',queueScrollPull);
motionPreference.addEventListener('change',queueScrollPull);
finePointer.addEventListener('change',queueScrollPull);
// Disclosure expansion changes later section positions.
const pullResizeObserver=new ResizeObserver(queueScrollPull);
document.querySelectorAll('main > section').forEach(node=>pullResizeObserver.observe(node));
paintScrollPull();

// Manual service deck; only the front card participates in focus and reading order.
const serviceDeck=document.querySelector('.service-overview-grid');
const deckCards=[...serviceDeck.querySelectorAll('.service-overview-card')];
const deckLinks=[...document.querySelectorAll('.service-category-nav a')];
serviceDeck.classList.add('service-deck');
serviceDeck.setAttribute('role','region');
serviceDeck.setAttribute('aria-label','준비 중 서비스 카드');
serviceDeck.setAttribute('aria-roledescription','캐러셀');
const deckControls=document.createElement('div');
deckControls.className='deck-controls';
deckControls.innerHTML='<button type="button" aria-label="이전 서비스">←</button><p class="deck-status" aria-live="polite" aria-atomic="true"></p><button type="button" aria-label="다음 서비스">→</button>';
serviceDeck.after(deckControls);
let deckIndex=0;
function sizeServiceDeck(){serviceDeck.style.height=`${deckCards[deckIndex].offsetHeight+64}px`;}
function showServiceCard(index){
 deckIndex=(index+deckCards.length)%deckCards.length;
 deckCards.forEach((card,i)=>{
  const offset=(i-deckIndex+deckCards.length)%deckCards.length;
  card.dataset.deckPosition=['active','right','back','left'][offset];
  card.inert=i!==deckIndex;
  card.setAttribute('aria-hidden',String(i!==deckIndex));
  card.setAttribute('aria-roledescription','슬라이드');
 });
 deckLinks.forEach((link,i)=>{if(i===deckIndex)link.setAttribute('aria-current','true');else link.removeAttribute('aria-current');});
 deckControls.querySelector('.deck-status').textContent=`0${deckIndex+1} / 0${deckCards.length} · ${deckCards[deckIndex].querySelector('h3').textContent}`;
 sizeServiceDeck();
}
deckControls.querySelector('[aria-label="이전 서비스"]').addEventListener('click',()=>showServiceCard(deckIndex-1));
deckControls.querySelector('[aria-label="다음 서비스"]').addEventListener('click',()=>showServiceCard(deckIndex+1));
deckLinks.forEach((link,index)=>link.addEventListener('click',event=>{event.preventDefault();showServiceCard(index);}));
deckControls.addEventListener('keydown',event=>{
 if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();showServiceCard(deckIndex+(event.key==='ArrowLeft'?-1:1));}
});
let deckTouch=null;
serviceDeck.addEventListener('pointerdown',event=>{
 if(event.pointerType==='mouse'||event.target.closest('button,a,summary,input,textarea'))return;
 deckTouch={id:event.pointerId,x:event.clientX,y:event.clientY};
});
serviceDeck.addEventListener('pointerup',event=>{
 if(!deckTouch||deckTouch.id!==event.pointerId)return;
 const dx=event.clientX-deckTouch.x,dy=event.clientY-deckTouch.y;deckTouch=null;
 if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.5)showServiceCard(deckIndex+(dx<0?1:-1));
});
serviceDeck.addEventListener('pointercancel',()=>{deckTouch=null;});
function selectServiceHash(){const index=deckCards.findIndex(card=>`#${card.id}`===location.hash);if(index>=0)showServiceCard(index);}
window.addEventListener('hashchange',selectServiceHash);
const deckResize=new ResizeObserver(sizeServiceDeck);deckCards.forEach(card=>deckResize.observe(card));
showServiceCard(0);selectServiceHash();

// Lifestyle photos loop automatically while their section is in view.
const photoDeck=document.querySelector('.lifestyle-grid');
const photoSlides=[...photoDeck.querySelectorAll('figure')];
photoSlides.forEach(figure=>{photoDeck.append(figure);figure.querySelector('img').draggable=false;});
photoDeck.querySelector('.lifestyle-secondary')?.remove();
photoDeck.classList.add('photo-deck');
photoDeck.setAttribute('role','region');
photoDeck.setAttribute('aria-label','별장 생활 사진');
photoDeck.setAttribute('aria-roledescription','캐러셀');
const photoControls=document.createElement('div');
photoControls.className='deck-controls photo-deck-controls';
photoControls.innerHTML='<p class="deck-status" aria-live="off"></p><button type="button" data-photo-pause aria-pressed="false">자동 재생 멈추기</button>';
photoDeck.after(photoControls);
let photoIndex=0;
function showPhoto(index){
 photoIndex=(index+photoSlides.length)%photoSlides.length;
 photoSlides.forEach((figure,i)=>{
  figure.dataset.photoPosition=['active','right','left'][(i-photoIndex+photoSlides.length)%photoSlides.length];
  figure.inert=i!==photoIndex;
  figure.setAttribute('aria-hidden',String(i!==photoIndex));
  figure.setAttribute('aria-roledescription','슬라이드');
 });
 photoControls.querySelector('.deck-status').textContent=`0${photoIndex+1} / 0${photoSlides.length} · ${photoSlides[photoIndex].querySelector('figcaption').textContent}`;
}
let photoTimer=null,photoVisible=false,photoPaused=false,photoDragging=false;
const photoMobileReading=matchMedia('(max-width:1023px)');
const photoPause=photoControls.querySelector('[data-photo-pause]');
function photoReadingDelay(){
 const caption=photoControls.querySelector('.deck-status');
 const lineHeight=parseFloat(getComputedStyle(caption).lineHeight)||20;
 const lines=Math.max(1,Math.round(caption.getBoundingClientRect().height/lineHeight));
 // Short captions leave more time to explore the photograph; wrapped captions get extra time.
 return Math.min(16000,(photoMobileReading.matches?10000:8000)+Math.max(0,lines-1)*2000);
}
function schedulePhotos(){
 clearTimeout(photoTimer);
 if(photoVisible&&!photoPaused&&!photoDragging&&!document.hidden&&!motionPreference.matches)
  photoTimer=setTimeout(()=>{showPhoto(photoIndex+1);schedulePhotos();},photoReadingDelay());
}
photoDeck.addEventListener('mylodge:gesture-start',()=>{photoDragging=true;clearTimeout(photoTimer);});
photoDeck.addEventListener('mylodge:slide-swipe',event=>{showPhoto(photoIndex+event.detail.direction);});
photoDeck.addEventListener('mylodge:gesture-end',()=>{photoDragging=false;schedulePhotos();});
photoPause.addEventListener('click',()=>{
 photoPaused=!photoPaused;photoPause.setAttribute('aria-pressed',String(photoPaused));
 photoPause.textContent=new URLSearchParams(location.search).get('lang')==='en'?(photoPaused?'Resume slideshow':'Pause slideshow'):(photoPaused?'자동 재생 시작하기':'자동 재생 멈추기');
 schedulePhotos();
});
document.addEventListener('visibilitychange',schedulePhotos);
motionPreference.addEventListener('change',schedulePhotos);
photoMobileReading.addEventListener('change',schedulePhotos);
new IntersectionObserver(entries=>{photoVisible=entries[0].isIntersecting;schedulePhotos();},{threshold:.25}).observe(photoDeck);
showPhoto(0);

// One-time mid-page motion: images unfold, headings rise and steps draw in sequence.
const middleEntrances=[
 ...document.querySelectorAll('#vision .vision-heading,#vision .vision-photo,#nature .nature-copy,#pricing .intro,#ownership .intro,#projects .intro,#lifestyle .intro,#participation .intro,#stay-services .intro,#progress .intro'),
 ...document.querySelectorAll('#progress .fact-list>div'),
 ...document.querySelectorAll('.project-grid > .project,.step-grid > .step'),
 photoDeck,document.querySelector('#stay-services')
].filter(Boolean);
document.querySelectorAll('.project-grid > .project').forEach((node,index)=>node.style.setProperty('--middle-delay',`${index*160}ms`));
document.querySelectorAll('.step-grid > .step').forEach((node,index)=>node.style.setProperty('--middle-delay',`${index*140}ms`));
document.querySelectorAll('#progress .fact-list>div').forEach((node,index)=>node.style.setProperty('--middle-delay',`${index*80}ms`));
const middleObserver=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{
  if(!entry.isIntersecting)return;
  entry.target.classList.add('middle-arrived');
  middleObserver.unobserve(entry.target);
 });
},{threshold:0.12,rootMargin:'0px 0px -32px 0px'});
middleEntrances.forEach(node=>{
 node.classList.add('middle-entrance');
 if(motionPreference.matches)node.classList.add('middle-arrived');else middleObserver.observe(node);
});
document.addEventListener('focusin',event=>{
 const entering=event.target.closest('.middle-entrance');
 if(entering){entering.classList.add('middle-arrived');middleObserver.unobserve(entering);}
});
motionPreference.addEventListener('change',()=>{
 if(!motionPreference.matches)return;
 middleObserver.disconnect();middleEntrances.forEach(node=>node.classList.add('middle-arrived'));
});

// Directional entrances use the figure, leaving its image parallax independent.
// Observe each item so stacked mobile photos wait until they reach the viewport.
const sideEntrances=[
 ...[...document.querySelectorAll('.hero-photo')].map(node=>({node,direction:1,delay:100}))
];
const sideObserver=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{
  if(!entry.isIntersecting)return;
  entry.target.classList.add('side-arrived');
  sideObserver.unobserve(entry.target);
 });
},{threshold:0,rootMargin:'0px 0px -36px 0px'});
sideEntrances.forEach(({node,direction,delay})=>{
 node.style.setProperty('--entry-direction',direction);
 node.style.setProperty('--entry-delay',`${delay}ms`);
 node.classList.add('side-entrance');
 if(motionPreference.matches)node.classList.add('side-arrived');
 else sideObserver.observe(node);
});
motionPreference.addEventListener('change',()=>{
 if(!motionPreference.matches)return;
 sideObserver.disconnect();
 sideEntrances.forEach(({node})=>node.classList.add('side-arrived'));
});

// Reveal script-dependent controls only after the page has been initialized.
document.body.classList.add('site-ready');
// The sections are rendered after HTML parsing. Resolve an initial deep link
// once layout is ready instead of leaving the browser at a stale position.
window.addEventListener('load',()=>requestAnimationFrame(()=>{
 const id=location.hash.slice(1);
 if(!id)return;
 const target=document.getElementById(id);
 if(target)target.scrollIntoView({block:'start',behavior:'instant'});
}),{once:true});
})();
