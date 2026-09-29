// Update approved figures here; all public prices derive from this object.
const offer=Object.freeze({amount:3960000,depositRate:.05,shares:120});
const money=value=>{value=Math.max(0,value);if(!value)return '0원';const man=Math.floor(value/10000),rest=value%10000;return (man?man.toLocaleString('ko-KR')+'만':'')+(rest?(man?' ':'')+rest.toLocaleString('ko-KR'):'')+(rest?'원':' 원');};
const priceText={amount:money(offer.amount),deposit:money(Math.round(offer.amount*offer.depositRate)),balance:money(offer.amount-Math.round(offer.amount*offer.depositRate)),rate:(offer.depositRate*100)+'%'};
const images=[['hero',1122,1402],['interior',1448,1086],['terrace',1145,1374],['hero',1122,1402],['coastal',1448,1086],['forest',1448,1086]];
const image=(i,alt)=>{const [name,width,height]=images[i];return '<img src="assets/images/lodge-'+name+'-960.webp" srcset="'+[480,960,Math.min(1440,width)].map(w=>'assets/images/lodge-'+name+'-'+w+'.webp '+w+'w').join(', ')+'" sizes="(max-width:700px) calc(100vw - 40px), (max-width:1023px) 80vw, 600px" width="'+width+'" height="'+height+'" alt="'+alt+' · AI 생성 콘셉트" decoding="async" '+(i?'loading="lazy"':'fetchpriority="high"')+'>';};
const cta = '<a class="primary" href="#consultation">상담 화면 미리보기</a>';
const intro = (title, body='') => '<div class="intro"><h2>'+title+'</h2>'+(body?'<p>'+body+'</p>':'')+'</div>';
const section = (id, cls, body) => '<section id="'+id+'" class="'+cls+'"><div class="container">'+body+'</div></section>';
const faq = [
 [''+priceText.amount+'이면 별장 한 채를 갖게 되나요?',''+priceText.amount+'은 1구좌 기준의 현재 안내 금액입니다. 마이롯지는 한 채를 '+offer.shares+'구좌로 나누는 공동소유 방식이며, 소유에 관한 권리와 실제 이용 기준은 구분해 안내됩니다.'],
 [''+priceText.deposit+'만 내면 되나요?',''+priceText.deposit+'은 '+priceText.amount+'의 '+priceText.rate+'에 해당하는 첫 납입 금액입니다. 이후 납입 일정과 별도 비용은 정식 조건이 정해진 뒤 안내드립니다.'],
 ['남은 금액은 언제 내나요?','첫 납입 후 잔여 기준 금액은 '+priceText.balance+'이며 별도 비용은 포함하지 않은 계산입니다. 6단계 분담 조건은 미정입니다. 첫 납입금의 포함 여부와 회차별 금액, 일정은 계약 전 최종 납입표로 확인하실 수 있습니다.'],
 [''+offer.shares+'구좌가 모이면 바로 이용할 수 있나요?','모집 완료와 이용 시작은 다릅니다. 공간 준비와 운영 체계가 갖춰진 뒤, 이용 가능 시점을 안내드립니다.'],
 ['원하는 날에 얼마나 머물 수 있나요?','연간 이용 일수와 이용 기간, 성수기 예약 기준은 상품별로 정해집니다. 모든 날짜의 이용을 보장하는 방식은 아닙니다.'],
 ['일정이 맞지 않으면 바꾸거나 빌려줄 수 있나요?','회원 간 일정·지역 교환과 유료 렌트 기능을 검토하고 있습니다. 제공 여부와 이용 대상, 정산과 취소 기준은 추후 정해집니다.'],
 ['관리비나 청소 비용도 포함되나요?','세금, 관리비와 청소·침구 같은 서비스 비용의 적용 여부는 정식 안내에서 확인할 수 있습니다. 일부 서비스는 별도 신청 방식으로 준비 중입니다.'],
 ['모집이 완료되지 않거나 취소하고 싶다면요?','모집 미달 시 처리와 취소·환불 기준은 정식 계약 조건에 포함됩니다. 지금의 상담 신청은 계약이나 납입을 뜻하지 않습니다.']
];
faq.push(['실제로 어떤 권리를 소유하게 되나요?','구좌는 참여 단위입니다. 등기 방식, 권리의 범위와 이전 가능 여부는 미정이며, 정식 계약서에서 확인해야 합니다.'],['누가 운영하고 진행 상황은 어디에서 보나요?','사업·시공·시설 운영 담당과 공식 문의처는 공개 준비 중입니다. 아래 진행 안내에서 현재 공개 범위를 확인할 수 있으며, 확인된 사업 일정은 추후 안내합니다.']);
const faqCategories = ['소유·참여','비용·납입','비용·납입','소유·참여','이용·서비스','이용·서비스','비용·납입','취소·환불','소유·참여','소유·참여'];
const faqFilters = ['전체',...new Set(faqCategories)];
const faqFilterMarkup = '<div class="faq-filters" role="group" aria-label="질문 분류">'+faqFilters.map((category,i)=>'<button type="button" class="toggle" data-faq-filter="'+category+'" aria-pressed="'+(!i)+'" aria-controls="faq-list">'+category+'</button>').join('')+'</div><p class="small faq-count" id="faq-count" role="status">전체 질문 '+faq.length+'개</p>';
const upcomingServices = [
 {id:'service-swap',title:'지역 교환·일정 조회',description:'회원끼리 이용 가능한 일정을 살펴보고, 다른 지역에서의 머무름을 서로 제안하는 서비스를 준비하고 있습니다.',items:['교환 가능 일정 조회','강릉 ↔ 제주 ↔ 해외 지역 교환 구상','교환 조건과 혜택 확인'],note:'표시된 지역은 서비스 구상 예시입니다. 제공 지역과 교환 기준, 추가 금액·혜택은 아직 정해지지 않았습니다.'},
 {id:'service-notifications',title:'알림',description:'마이롯지의 상담 접수와 예약, 교환 진행 소식을 받아볼 수 있는 알림 서비스를 준비하고 있습니다.',items:['상담·예약 진행 안내','회원 교환 제안과 결과 안내','알림 수신 설정'],note:'푸시·카카오 알림톡·문자 등 제공 방식과 알림 항목은 추후 안내합니다. 현재 알림은 발송되지 않습니다.'},
 {id:'service-rental',title:'렌트·공동 모집',description:'마이롯지 안에서 숙박을 빌려주고 예약하는 렌트 서비스와, 별장 한 채를 함께 준비하는 공동 모집 안내를 준비하고 있습니다.',items:['공동 모집: '+offer.shares+'구좌로 한 채 준비','렌트: 운영 준비 후 숙박 등록·예약','두 절차의 참여·이용 조건 별도 안내'],note:'렌트와 공동 모집의 대상·방식·정산·취소 조건은 미정입니다. 현재 예약·결제·모집금 접수는 제공하지 않습니다.'},
 {id:'service-preparation',title:'청소·룸서비스',description:'방문 일정에 맞춰 청소와 룸서비스를 신청하고, 필요한 물품의 종류와 수량을 선택하는 서비스를 준비하고 있습니다.',items:['방문 전 청소·룸서비스 신청','이불·베개커버·타월 등 물품 선택','서비스 일정과 수량 확인'],note:'제공 항목과 수량, 비용, 신청 마감 시점은 추후 안내합니다. 현재 서비스 예약은 접수되지 않습니다.'}
];
const upcomingServiceMarkup = '<nav class="service-category-nav" aria-label="준비 중인 서비스 카테고리">'+upcomingServices.map(s=>'<a href="#'+s.id+'">'+s.title+'</a>').join('')+'</nav><div class="service-overview-grid">'+upcomingServices.map((s,i)=>'<article class="card service-overview-card" id="'+s.id+'" aria-labelledby="'+s.id+'-title"><div class="service-card-heading"><span class="number">0'+(i+1)+'</span><span class="preparing">준비 중</span></div><h3 id="'+s.id+'-title">'+s.title+'</h3><p>'+s.description+'</p><details class="service-expand"><summary>이용 흐름과 준비 조건 보기</summary><ul class="service-features">'+s.items.map(item=>'<li>'+item+'</li>').join('')+'</ul><p class="small">'+s.note+'</p></details></article>').join('')+'</div>';
const services = [
 ['내 계약·진행','참여 후 계약과 납입 안내, 프로젝트의 준비 상황을 한곳에서 확인하는 화면을 구상하고 있습니다.','계약 연동과 사업 정보 공개 기준은 협의 후 정해집니다.',['계약 문서 · 연결 후 표시','납입 일정 · 조건 확정 후 안내','사업 진행 · 확인된 소식 안내']],
 ['예약·교환','이용 조건 확인 → 가능 일정 조회 → 예약 또는 교환 제안 → 결과 확인 순서로 준비합니다.','예약 우선순위와 교환 혜택, 취소 규칙은 미정입니다.',['내 이용 조건 확인','가능 일정 조회','예약·교환 결과 확인']],
 ['렌트','운영 기준에 따라 렌트 가능 여부를 확인하고 등록, 예약, 정산 내역을 살펴보는 흐름입니다.','모집 참여와 숙박 렌트는 별도 절차입니다. 렌트 대상과 수수료는 미정입니다.',['렌트 가능 여부 확인','등록·예약 내역','정산 안내']],
 ['방문 준비','방문 일정에 맞춰 필요한 청소·룸서비스와 침구 수량을 선택하고 처리 상태를 확인하는 흐름입니다.','제공 지역, 신청 마감, 비용은 미정입니다.',['방문 일정 선택','서비스·물품 선택','신청 내역 확인']],
 ['알림 설정','상담과 예약 등의 진행 소식을 확인하고 수신 방식을 선택하는 화면을 준비합니다.','푸시·카카오 알림톡·문자 제공 여부는 미정입니다. 현재 발송되지 않습니다.',['진행 소식 확인','수신 방식 선택','수신 설정 변경']]
];
const projectDetails = () => '<details class="project-details"><summary>프로젝트 상세 보기</summary><p class="small">현재 공개 범위: 지역 소개와 콘셉트 이미지. 아래 사업 조건은 확정된 자료를 받은 뒤 안내합니다.</p><dl class="fact-list">'+['정확한 위치·부지','면적·객실·수용 인원','시설·평면도·실제 사진','모집 일정·현재 모집 현황','착공·준공·이용 시작일'].map(t=>'<div><dt>'+t+'</dt><dd>미정</dd></div>').join('')+'</dl><p class="small">준비 중 표시는 모집 개시나 부지 확보, 인허가 완료를 의미하지 않습니다.</p></details>';
const rightsMarkup = '<div class="rights-heading"><h3>권리와 추가 비용, 한눈에 확인하세요.</h3><p>현재 안내 가능한 기준과 확인이 필요한 조건을 구분했습니다.</p></div><div class="card rights-table"><div class="rights-row rights-head"><span>확인 항목</span><span>현재 안내</span><span>상태</span></div>'+[
 ['참여 단위','별장 한 채당 '+offer.shares+'구좌 구상','현재 구상'],
 ['소유 권리','등기 방식·권리 범위·양도 절차','미정'],
 ['이용 권리','연간 숙박 일수·이용 기간','미정'],
 ['일정 배정','성수기·주말·예약 우선순위','미정'],
 ['추가 비용','세금·등기·관리·청소·침구 비용','미정'],
 ['취소·환불','모집 미달·중도 취소·환불 기준','미정']
 ].map(r=>'<div class="rights-row"><strong>'+r[0]+'</strong><span>'+r[1]+'</span><span class="status-label">'+r[2]+'</span></div>').join('')+'</div>';
const progressMarkup = intro('어디까지 준비됐는지,<br>확인할 수 있도록.','현재는 사전 안내 화면을 준비하는 단계입니다. 사업 진행과 사이트 변경 사항을 구분해 안내합니다.')+'<div class="progress-grid"><article class="card progress-card"><span class="preparing">공개 준비 중</span><h3>사업 진행 안내</h3><p>모집·부지·인허가·시공 진행률과 이용 시작일은 확인된 자료가 없어 아직 안내하지 않습니다.</p><dl class="fact-list">'+['사업 주체','설계·시공 담당','시설 운영·고객 응대','공식 연락처·운영시간'].map(t=>'<div><dt>'+t+'</dt><dd>공개 준비 중</dd></div>').join('')+'</dl><p class="small">담당 주체와 공식 문의처는 정식 접수 전에 안내할 예정입니다.</p></article><article class="card progress-card"><span class="eyebrow">WEBSITE UPDATE</span><h3>사이트 변경 안내</h3><time datetime="2026-09-29">2026.09.29 · 로컬 미리보기</time><ul><li>프로젝트 상세 안내 틀 추가</li><li>권리·비용·미정 조건 정리</li><li>네 가지 준비 중 서비스와 회원 이용 흐름 안내</li></ul><p class="small">사이트 화면의 변경 기록입니다. 사업 일정이나 모집 진행을 뜻하지 않습니다. 실제 상담 접수 시작일은 미정입니다.</p><a class="text-link" href="#consultation">상담 화면 살펴보기 →</a></article></div>';
const steps = [
 ['먼저, 궁금한 걸 묻습니다','공동소유 방식과 참여 조건, 비용과 이용 기준을 편하게 물어보세요.'],
 ['조건을 충분히 살핍니다','모집 대상과 계약, 납입, 취소 조건을 확인한 뒤 결정합니다.'],
 ['참여 절차를 진행합니다','참여 후에는 계약과 납입 일정, 사업 진행 상황을 안내받습니다.'],
 ['준비가 끝나면 머뭅니다','이용 준비가 완료된 뒤, 정해진 기준에 따라 별장을 이용합니다.']
];
document.querySelector('main').innerHTML =
 '<section id="home" class="hero"><div class="container hero-grid"><div><div class="eyebrow">MY LODGE · 공유별장 프로젝트</div><h1>별장 하나,<br>내 생활에 들이는 법.</h1><p class="hero-sub">갖고 싶었던 별장 생활을, 조금 더 현실적인 방식으로.</p><p class="hero-description">한 채의 별장을 함께 준비하고, 정해질 이용 기준에 따라 머무는 생활을 구상합니다. 예약 서비스와 이용 조건은 준비 중입니다.</p><div class="price-pair"><div class="price-tile"><p>1구좌 기준 예상 금액</p><strong>'+priceText.amount+'</strong></div><div class="price-tile"><p>최초 납입 '+priceText.rate+'</p><strong>'+priceText.deposit+'</strong></div></div><p class="small">위 금액은 현재 검토 중인 기준입니다. 자세한 계약과 납입 조건은 정식 모집 전 안내드립니다.</p><div class="hero-actions">'+cta+'<a class="outline" href="#ownership">공동소유 방식 보기</a></div><p class="small hero-reassurance">가볍게 물어보세요. 신청만으로 계약이 진행되지는 않습니다.</p></div><figure class="photo hero-photo">'+image(0,'별장 공간 콘셉트')+'<figcaption>AI 생성 콘셉트 · 실제 현장·확정 설계가 아닙니다</figcaption></figure></div></section>'+
 section('ownership','sage',intro('한 채의 별장을,<br>함께 소유하는 방법.','마이롯지는 한 채의 별장을 '+offer.shares+'개의 구좌로 나누는 방식입니다. 한 구좌를 통해 소유에 참여하고, 정해진 기준에 따라 별장을 이용합니다.')+'<div class="stack-grid ownership-grid"><div class="card share-card"><h3>한 채의 별장을 '+offer.shares+'구좌로 나누면</h3><div class="share-grid" role="img" aria-label="전체 '+offer.shares+'구좌 중 한 구좌 예시">'+ '<span></span>'.repeat(offer.shares)+'</div><div class="legend"><p><i></i>한 구좌 예시</p><p><i></i>나머지 구좌</p></div><p class="share-note">'+offer.shares+'개의 구좌를 보여드리기 위한 예시입니다.</p></div><div class="ownership-details"><div>'+[
 ['◎','구좌','공동소유에 참여하는 기본 단위입니다.'],['◐','소유 지분','별장에 관한 권리입니다. 범위와 이전 절차는 계약 조건에서 확인할 수 있습니다.'],['◑','이용 조건','이용 지역, 시기, 숙박 일수 등은 정해진 기준에 따라 운영됩니다.']
 ].map(d=>'<div class="card definition"><span class="symbol" aria-hidden="true">'+d[0]+'</span><div><h3>'+d[1]+'</h3><p>'+d[2]+'</p></div></div>').join('')+'</div><p class="ownership-note">공동소유는 단독 소유와 다릅니다. 참여 전에는 권리의 범위와 이용 기준을 꼭 살펴봐 주세요.</p></div></div>')+
 section('projects','',intro('다음 마이롯지가<br>머물 곳.','주문진과 양양에서 준비 중인 프로젝트를 소개합니다.<br>이미지는 지역별 분위기를 표현한 AI 콘셉트이며 실제 현장이나 확정 설계가 아닙니다. 위치와 시설, 모집 일정은 추후 안내합니다.')+'<div class="stack-grid project-grid">'+['주문진','양양'].map((r,i)=>'<article class="card project card-lift"><div class="photo project-photo">'+image(i+4,r+' 프로젝트 콘셉트')+'<span class="badge">준비 중</span><span class="concept">AI 생성 콘셉트</span></div><div class="project-body"><h3>'+r+' 프로젝트</h3><p>현재 공개된 정보와 앞으로 확인할 조건을 살펴보세요.</p><p class="small">위치와 모집 일정, 이용 시작일은 정식 안내 전 확인이 필요합니다.</p>'+projectDetails()+'<button class="location" data-region="'+r+'">'+r+' 이야기 나누기</button></div></article>').join('')+'</div>')+
 section('pricing','mist',intro('얼마부터 시작하는지,<br>먼저 살펴보세요.','지금 안내드릴 수 있는 금액과 납입 계획을 먼저 보여드립니다.')+'<div class="card pricing-table">'+[
 ['1구좌 기준 금액 <span>현재 기준</span>','현재 검토 중인 참여 기준 금액입니다.',''+priceText.amount+''],['첫 납입 금액','기준 금액의 '+priceText.rate+'에 해당합니다.',''+priceText.deposit+''],['첫 납입 후 잔여 기준 금액',''+priceText.amount+'에서 첫 납입금을 뺀 금액이며 별도 비용은 포함하지 않습니다.',''+priceText.balance+''],['납입 계획','단계별 금액과 일정, 최초 납입 포함 여부는 정식 모집 전 안내합니다.','6단계 분담 조건 미정']
 ].map(r=>'<div class="pricing-row"><div><div class="pricing-label">'+r[0]+'</div><p class="small">'+r[1]+'</p></div><strong>'+r[2]+'</strong></div>').join('')+'</div><div class="pricing-note"><p>첫 납입금의 분납 포함 여부와 회차별 금액, 일정은 아직 정해지지 않았습니다. 계약 전 최종 납입표를 확인해 주세요.</p><p class="small">세금과 등기 비용, 유료 서비스 비용은 별도로 발생할 수 있으며 정식 안내 시 함께 확인할 수 있습니다.</p></div>'+rightsMarkup+'<div class="center pricing-cta">'+cta+'</div>')+
 section('participation','',intro('서두르지 말고,<br>하나씩 알아가세요.')+'<div class="step-grid">'+steps.map((s,i)=>'<article class="card step"><span class="number">0'+(i+1)+'</span><h3>'+s[0]+'</h3><p>'+s[1]+'</p></article>').join('')+'</div><p class="step-note">이 순서는 현재 구상 단계의 안내입니다. 상담 신청은 계약이나 구좌 확보가 아니며, 모집 완료 후에도 실제 이용까지는 별도의 준비 과정이 필요합니다.</p>')+
 section('stay-services','',intro('마이롯지의 다음 서비스,<br>카테고리별로 살펴보세요.','지역 교환부터 방문 전 준비까지, 네 가지 서비스를 준비하고 있습니다.<br>각 서비스의 제공 시점과 세부 조건은 확정 후 안내합니다.')+upcomingServiceMarkup)+
 section('lifestyle','',intro('혼자 떠나는 날에도,<br>함께 떠나는 날에도.','아침에는 창가에서, 오후에는 테라스에서.<br>머물고 싶은 하루의 장면을 상상해 보세요.')+'<div class="stack-grid lifestyle-grid"><figure class="photo lifestyle-main">'+image(1,'창가에서 보내는 휴식')+'<figcaption class="photo-label">창가에서 보내는 휴식</figcaption></figure><div class="lifestyle-secondary">'+['숲을 바라보는 테라스','독채형 공간 콘셉트'].map((t,i)=>'<figure class="photo">'+image(i+2,t)+'<figcaption class="photo-label">'+t+'</figcaption></figure>').join('')+'</div></div><p class="image-note">이미지는 AI로 만든 공간 콘셉트입니다. 실제 현장·확정 설계·제공 시설을 나타내지 않습니다.</p>')+
 section('checklist','peach',intro('마음을 정하기 전,<br>이 세 가지만은 꼭.')+'<div class="check-grid">'+[
 ['소유와 이용의 범위','내가 갖게 되는 권리의 범위와 이전 절차, 이용 일수와 예약 기준을 살펴보세요.','<path d="M6 8h10M6 12h7"/>'],
 ['납입과 취소 조건','총금액과 납입 일정, 추가 비용, 취소와 환불 기준을 미리 확인하세요.','<path d="M11 6v6l4 2"/>'],
 ['진행 상태와 운영 주체','현재 어디까지 준비되었는지, 누가 운영을 맡는지 확인해 보세요.','<circle cx="11" cy="11" r="4"/><path d="M11 1v4M11 17v4M1 11h4M17 11h4"/>']
 ].map(c=>'<article class="card check-card"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#244c45" stroke-width="1.5" aria-hidden="true"><rect x="1" y="1" width="20" height="20" rx="5"/>'+c[2]+'</svg><div><h3>'+c[0]+'</h3><p>'+c[1]+'</p></div></article>').join('')+'</div><p class="check-bottom">안내되지 않은 내용은 상담을 통해 편하게 물어보세요.</p>')+
 section('progress','mist',progressMarkup)+
 section('faq','','<div class="faq-inner"><h2>미리 알아두면 좋은 것들.</h2>'+faqFilterMarkup+'<div id="faq-list">'+faq.map((f,i)=>'<div class="faq-item" data-category="'+faqCategories[i]+'"><h3><button class="faq-question" aria-expanded="'+(!i)+'" aria-controls="answer-'+i+'">'+f[0]+'<i aria-hidden="true">+</i></button></h3><div class="faq-answer" id="answer-'+i+'" '+(i?'hidden':'')+'><p>'+f[1]+'</p></div></div>').join('')+'</div><div class="faq-cta"><p>더 궁금한 점이 있다면, 편하게 물어보세요.</p>'+cta+'</div></div>')+
 section('consultation','sage',`<div class="consult-grid cf-layout"><div class="consult-intro cf-intro"><p class="eyebrow">LET’S TALK · CONSULTATION</p><h2>궁금한 것부터,<br>편하게 이야기해요.</h2><p>내게 맞는 별장 생활인지 알아보는 첫 단계.<br>연락받을 기본 정보만으로 시작할 수 있어요.</p><ol class="cf-intro-steps"><li><b>01</b><div><strong>연락받을 정보</strong><span>이름과 연락처를 확인합니다.</span></div></li><li><b>02</b><div><strong>입력 내용 확인</strong><span>희망 시간과 문의를 한 번 더 살펴봅니다.</span></div></li><li><b>03</b><div><strong>담당자 상담</strong><span>정식 접수 시작 후 제공할 절차입니다.</span></div></li></ol><div class="cf-intro-note"><strong>현재는 화면 체험 단계입니다.</strong><p>실제 접수·연락은 진행되지 않습니다. 회사 문의처와 정식 접수 일정은 준비 후 안내합니다.</p></div></div><div id="consultation-form-root"></div></div>`);


const main=document.querySelector('main');
const checklist=document.querySelector('#checklist'), checklistFold=document.createElement('details');
checklistFold.id='checklist'; checklistFold.className='participation-checklist';
checklistFold.innerHTML='<summary>참여 전 꼭 확인할 세 가지</summary>'+checklist.querySelector('.check-grid').outerHTML;
document.querySelector('#participation .container').append(checklistFold); checklist.remove();
['home','ownership','pricing','projects','participation','stay-services','lifestyle','progress','faq','consultation'].forEach(id=>main.append(document.getElementById(id)));
const flowNames=['예약·교환','알림 설정','렌트','방문 준비'];
document.querySelectorAll('.service-expand').forEach((details,index)=>{
 const flow=services.find(item=>item[0]===flowNames[index]), preview=document.createElement('div');
 preview.className='service-flow-preview'; preview.innerHTML='<span class="eyebrow">이용 화면 구상 · 실제 서비스 아님</span><ol>'+flow[3].map(item=>'<li>'+item+'</li>').join('')+'</ol>';
 details.querySelector('summary').after(preview);
});
const contract=document.createElement('details'); contract.id='member'; contract.className='contract-preview';
contract.innerHTML='<summary>참여 후 내 계약·진행 화면 구상</summary><p>'+services[0][1]+'</p><ul>'+services[0][3].map(item=>'<li>'+item+'</li>').join('')+'</ul><p class="small">'+services[0][2]+'</p>';
document.querySelector('#participation .container').append(contract);
document.querySelector('.mobile-cta b').textContent=priceText.amount;
document.querySelector('.mobile-cta small').textContent='최초 '+priceText.rate+' '+priceText.deposit;

document.querySelectorAll('.faq-question').forEach(b=>b.addEventListener('click',()=>{
 const open=b.getAttribute('aria-expanded')!=='true';
 document.querySelectorAll('.faq-question').forEach(q=>{const active=q===b&&open;q.setAttribute('aria-expanded',String(active));document.getElementById(q.getAttribute('aria-controls')).hidden=!active;});
}));
document.querySelectorAll('[data-faq-filter]').forEach(button=>button.addEventListener('click',()=>{
 document.querySelectorAll('[data-faq-filter]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
 filterQuestions();
}));
const consultationUI=window.MyLodgeConsultation.mount(document.querySelector('#consultation-form-root'));
function openConsultation() {
 const target=document.querySelector('#consultation-form-root');
 target.setAttribute('tabindex','-1');
 target.focus({preventScroll:true});
 target.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
}
document.querySelectorAll('[data-region]').forEach(button=>button.addEventListener('click',()=>{
 consultationUI.setRegion(button.dataset.region);
 openConsultation();
}));
const serviceInterests=['지역 교환','알림','렌트·공동 모집','청소·룸서비스'];
document.querySelectorAll('.service-overview-card').forEach((card,index)=>{
 const button=document.createElement('button');button.type='button';button.className='service-inquiry';
 button.textContent='상담에 관심 내용 담기';
 button.setAttribute('aria-label',serviceInterests[index]+' 준비 내용 상담에 담기');
 button.addEventListener('click',()=>{consultationUI.setService(serviceInterests[index]);openConsultation();});
 card.append(button);
});
const faqTopics={'비용·납입':'비용·분납','소유·참여':'공동소유','이용·서비스':'이용 방법','취소·환불':'기타'};
document.querySelectorAll('.faq-answer').forEach((answer,index)=>{
 const button=document.createElement('button');button.type='button';button.className='faq-inquiry';button.textContent='이 질문을 상담에 담기 →';
 button.addEventListener('click',()=>{consultationUI.setQuestion(faq[index][0],faqTopics[faqCategories[index]]);openConsultation();});
 answer.append(button);
});

// Search uses the public FAQ text only; no query is stored or sent.
const searchBox=document.createElement('div');searchBox.className='faq-search';
searchBox.innerHTML='<label for="faq-search">어떤 내용이 궁금하세요?</label><div><input type="search" id="faq-search" maxlength="80" placeholder="예: 납입, 이용 일수, 환불" autocomplete="off" aria-controls="faq-list"><button type="button" id="faq-search-clear" hidden aria-label="질문 검색어 지우기">지우기</button></div>';
document.querySelector('.faq-filters').before(searchBox);
const faqEmpty=document.createElement('div');faqEmpty.className='faq-empty';faqEmpty.hidden=true;
faqEmpty.innerHTML='<strong>일치하는 질문이 없어요.</strong><p>다른 단어로 찾거나 전체 질문을 살펴보세요.</p><button type="button" class="outline">전체 질문 보기</button>';
document.querySelector('#faq-list').after(faqEmpty);
const faqSearch=document.querySelector('#faq-search');
const normalizeSearch=value=>value.toLocaleLowerCase('ko-KR').replace(/[\s,·?]/g,'');
function filterQuestions() {
 const category=document.querySelector('[data-faq-filter][aria-pressed="true"]').dataset.faqFilter;
 const query=normalizeSearch(faqSearch.value);
 let count=0;
 document.querySelectorAll('.faq-item').forEach((item,index)=>{
  item.hidden=(category!=='전체'&&item.dataset.category!==category)||(query&&!normalizeSearch(faq[index].join(' ')).includes(query));
  const open=!item.hidden&&count===0;
  item.querySelector('.faq-question').setAttribute('aria-expanded',String(open));
  item.querySelector('.faq-answer').hidden=!open;
  if(!item.hidden)count++;
 });
 faqEmpty.hidden=Boolean(count);document.querySelector('#faq-search-clear').hidden=!faqSearch.value;
 faqEmpty.querySelector('p').textContent=query&&category!=='전체'?'현재 분류에 일치하는 질문이 없어요. 검색어를 유지하고 전체 분류에서 찾아보세요.':'다른 단어로 찾거나 전체 질문을 살펴보세요.';
 faqEmpty.querySelector('button').textContent=query&&category!=='전체'?'전체 분류에서 검색':'전체 질문 보기';
 document.querySelector('#faq-count').textContent=(query?'검색 결과 · ':'')+category+' 질문 '+count+'개';
}
faqSearch.addEventListener('input',event=>{if(!event.isComposing)filterQuestions();});
faqSearch.addEventListener('compositionend',filterQuestions);
document.querySelector('#faq-search-clear').addEventListener('click',()=>{faqSearch.value='';filterQuestions();faqSearch.focus();});
faqEmpty.querySelector('button').addEventListener('click',()=>{
 if(document.querySelector('[data-faq-filter="전체"]').getAttribute('aria-pressed')==='true')faqSearch.value='';
 document.querySelectorAll('[data-faq-filter]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.faqFilter==='전체')));
 filterQuestions();faqSearch.focus();
});

const skipLink=document.createElement('a');skipLink.href='#main';skipLink.className='skip-link';skipLink.textContent='본문으로 바로 가기';document.body.prepend(skipLink);
main.tabIndex=-1;
document.querySelector('.hero .eyebrow').insertAdjacentHTML('afterend','<p class="hero-stage">사전 안내 단계 <span>·</span> 상담 화면 체험 가능</p>');
const menu=document.querySelector('.menu-button'),mobileMenu=document.querySelector('#mobile-menu');
function setMenu(open,returnFocus=false){mobileMenu.hidden=!open;menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기');if(returnFocus)menu.focus();}
menu.addEventListener('click',()=>setMenu(mobileMenu.hidden));
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
 setMenu(false);
 const target=document.querySelector(a.hash), heading=target?.querySelector('h2') || target;
 if(heading){heading.setAttribute('tabindex','-1');heading.focus({preventScroll:true});}
}));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!mobileMenu.hidden)setMenu(false,true);});
matchMedia('(min-width:1024px)').addEventListener('change',event=>{if(event.matches)setMenu(false);});
document.addEventListener('click',event=>{if(!mobileMenu.hidden&&!event.target.closest('header'))setMenu(false);});
const navLinks=[...document.querySelectorAll('header nav a')];let navigationFrame=0;
function updateNavigation(){navigationFrame=0;const current=[...document.querySelectorAll('main>section')].filter(section=>section.getBoundingClientRect().top<=180).at(-1)?.id||'home';navLinks.forEach(link=>{if(link.hash==='#'+current)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});}
window.addEventListener('scroll',()=>{if(!navigationFrame)navigationFrame=requestAnimationFrame(updateNavigation);},{passive:true});updateNavigation();
new IntersectionObserver(entries=>{document.querySelector('.mobile-cta').hidden=entries[0].isIntersecting;},{threshold:0}).observe(document.querySelector('#consultation'));
const infoDialog=document.querySelector('#info-dialog');
const infoPages={
 privacy:{title:'개인정보 처리방침',description:'공식 개인정보 처리방침을 준비하고 있습니다.',body:'<p>승인된 문서가 준비되면 이곳에서 확인하실 수 있습니다.</p><p class="info-note">현재 상담 화면은 미리보기이며, 입력한 상담 정보는 전송되거나 저장되지 않습니다.</p>'},
 terms:{title:'이용약관',description:'공식 이용약관을 준비하고 있습니다.',body:'<p>서비스 이용 조건과 관련된 승인 문서가 준비되면 이곳에 공개합니다.</p><p class="info-note">현재 페이지는 사전 안내용입니다. 실제 계약 및 이용 조건은 정식 문서에서 확인해 주세요.</p>'},
 contact:{title:'문의 안내',description:'공식 문의처와 상담 운영시간을 준비하고 있습니다.',body:'<dl class="contact-info">'+['전화','이메일','상담 채널','운영시간'].map(label=>'<div><dt>'+label+'</dt><dd>준비 중</dd></div>').join('')+'</dl><p class="info-note">현재 상담 화면 미리보기는 실제 접수로 연결되지 않습니다. 문의처가 확정되면 안내드리겠습니다.</p>'}
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
document.body.classList.add('future-design');
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
 ...[...document.querySelectorAll('.hero-photo img,.project-photo img,.lifestyle-grid img')].map(node=>({node,anchor:node.closest('.photo'),range:node.closest('.hero')?32:24})),
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
 'main section:not(.hero) .intro', '.ownership-grid > *', '.project-grid > .project',
 '.pricing-table', '.pricing-note', '.rights-heading', '.rights-table', '.pricing-cta',
 '.step-grid > .step', '.step-note', '.service-category-nav', '.service-overview-card',
 '.intake-guide', '.member-grid', '.image-note',
 '.check-card', '.check-bottom', '.progress-card', '.faq-inner'
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
// Disclosure/FAQ expansion changes the positions of later sections.
const pullResizeObserver=new ResizeObserver(queueScrollPull);
document.querySelectorAll('main > section').forEach(node=>pullResizeObserver.observe(node));
paintScrollPull();

// Directional entrances use the figure, leaving its image parallax independent.
// Observe each item so stacked mobile photos wait until they reach the viewport.
const sideEntrances=[
 ...[...document.querySelectorAll('.cf-intro > :not(ol), .cf-intro-steps > li')].map((node,index)=>({node,direction:-1,delay:Math.min(index*65,325)})),
 ...[...document.querySelectorAll('.lifestyle-grid .photo')].map((node,index)=>({node,direction:1,delay:(2-index)*110})),
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
