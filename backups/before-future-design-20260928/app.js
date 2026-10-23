const images = [
 'photo-1691950202275-05b7c7ee9af3?w=1200&h=900',
 'photo-1662038271111-5b1c0b4157e8?w=900&h=700',
 'photo-1777473081573-58e77457aa8d?w=600&h=500',
 'photo-1547227639-a6a8d77434e7?w=600&h=500',
 'photo-1766757084313-8d0f199482ea?w=800&h=600',
 'photo-1717920954475-617e0184477a?w=800&h=600'
];
const image = (i, alt) => '<img src="https://images.unsplash.com/'+images[i]+'&fit=crop&auto=format" alt="'+alt+'" '+(i?'loading="lazy"':'fetchpriority="high"')+'>';
const cta = '<a class="primary" href="#consultation">상담 화면 미리보기</a>';
const intro = (title, body='') => '<div class="intro"><h2>'+title+'</h2>'+(body?'<p>'+body+'</p>':'')+'</div>';
const section = (id, cls, body) => '<section id="'+id+'" class="'+cls+'"><div class="container">'+body+'</div></section>';
const faq = [
 ['396만 원이면 별장 한 채를 갖게 되나요?','396만 원은 1구좌 기준의 현재 안내 금액입니다. 마이롯지는 한 채를 120구좌로 나누는 공동소유 방식이며, 소유에 관한 권리와 실제 이용 기준은 구분해 안내됩니다.'],
 ['19만 8,000원만 내면 되나요?','19만 8,000원은 396만 원의 5%에 해당하는 첫 납입 금액입니다. 이후 납입 일정과 별도 비용은 정식 조건이 정해진 뒤 안내드립니다.'],
 ['남은 금액은 언제 내나요?','첫 납입 후 잔여 기준 금액은 376만 2,000원이며 별도 비용은 포함하지 않은 계산입니다. 6단계 분담 조건은 미정입니다. 첫 납입금의 포함 여부와 회차별 금액, 일정은 계약 전 최종 납입표로 확인하실 수 있습니다.'],
 ['120구좌가 모이면 바로 이용할 수 있나요?','모집 완료와 이용 시작은 다릅니다. 공간 준비와 운영 체계가 갖춰진 뒤, 이용 가능 시점을 안내드립니다.'],
 ['원하는 날에 얼마나 머물 수 있나요?','연간 이용 일수와 이용 기간, 성수기 예약 기준은 상품별로 정해집니다. 모든 날짜의 이용을 보장하는 방식은 아닙니다.'],
 ['일정이 맞지 않으면 바꾸거나 빌려줄 수 있나요?','회원 간 일정·지역 교환과 유료 렌트 기능을 검토하고 있습니다. 제공 여부와 이용 대상, 정산과 취소 기준은 추후 정해집니다.'],
 ['관리비나 청소 비용도 포함되나요?','세금, 관리비와 청소·침구 같은 서비스 비용의 적용 여부는 정식 안내에서 확인할 수 있습니다. 일부 서비스는 별도 신청 방식으로 준비 중입니다.'],
 ['모집이 완료되지 않거나 취소하고 싶다면요?','모집 미달 시 처리와 취소·환불 기준은 정식 계약 조건에 포함됩니다. 지금의 상담 신청은 계약이나 납입을 뜻하지 않습니다.']
];
faq.push(['실제로 어떤 권리를 소유하게 되나요?','구좌는 참여 단위입니다. 등기 방식, 권리의 범위와 이전 가능 여부는 미정이며, 정식 계약서에서 확인해야 합니다.'],['누가 운영하고 진행 상황은 어디에서 보나요?','사업·시공·시설 운영 담당과 공식 문의처는 공개 준비 중입니다. 아래 진행 안내에서 현재 공개 범위를 확인할 수 있으며, 확인된 사업 일정은 추후 안내합니다.']);
const faqCategories = ['소유·참여','비용·납입','비용·납입','소유·참여','이용·서비스','이용·서비스','비용·납입','취소·환불','소유·참여','소유·참여'];
const faqFilters = ['전체',...new Set(faqCategories)];
const faqFilterMarkup = '<div class="faq-filters" role="group" aria-label="질문 분류">'+faqFilters.map((category,i)=>'<button type="button" class="toggle" data-faq-filter="'+category+'" aria-pressed="'+(!i)+'" aria-controls="faq-list">'+category+'</button>').join('')+'</div><p class="small faq-count" id="faq-count" role="status">전체 질문 '+faq.length+'개</p>';
const topicField = '<fieldset class="field topic-field"><legend>상담 주제 <span class="optional">선택 사항</span></legend><p class="small" id="topic-help">가장 궁금한 주제를 하나 선택해 주세요.</p><div class="topic-options" aria-describedby="topic-help">'+['비용·분납','공동소유','이용 방법','기타'].map((topic,i)=>'<label class="topic-option"><input type="radio" name="topic" value="'+topic+'"><span>'+topic+'</span></label>').join('')+'</div><button type="button" class="topic-clear" hidden>주제 선택 해제</button></fieldset>';
const upcomingServices = [
 {id:'service-swap',title:'지역 교환·일정 조회',description:'회원끼리 이용 가능한 일정을 살펴보고, 다른 지역에서의 머무름을 서로 제안하는 서비스를 준비하고 있습니다.',items:['교환 가능 일정 조회','강릉 ↔ 제주 ↔ 해외 지역 교환 구상','교환 조건과 혜택 확인'],note:'표시된 지역은 서비스 구상 예시입니다. 제공 지역과 교환 기준, 추가 금액·혜택은 아직 정해지지 않았습니다.'},
 {id:'service-notifications',title:'알림',description:'마이롯지의 상담 접수와 예약, 교환 진행 소식을 받아볼 수 있는 알림 서비스를 준비하고 있습니다.',items:['상담·예약 진행 안내','회원 교환 제안과 결과 안내','알림 수신 설정'],note:'푸시·카카오 알림톡·문자 등 제공 방식과 알림 항목은 추후 안내합니다. 현재 알림은 발송되지 않습니다.'},
 {id:'service-rental',title:'렌트·공동 모집',description:'마이롯지 안에서 숙박을 빌려주고 예약하는 렌트 서비스와, 별장 한 채를 함께 준비하는 공동 모집 안내를 준비하고 있습니다.',items:['공동 모집: 120구좌로 한 채 준비','렌트: 운영 준비 후 숙박 등록·예약','두 절차의 참여·이용 조건 별도 안내'],note:'렌트와 공동 모집의 대상·방식·정산·취소 조건은 미정입니다. 현재 예약·결제·모집금 접수는 제공하지 않습니다.'},
 {id:'service-preparation',title:'청소·룸서비스',description:'방문 일정에 맞춰 청소와 룸서비스를 신청하고, 필요한 물품의 종류와 수량을 선택하는 서비스를 준비하고 있습니다.',items:['방문 전 청소·룸서비스 신청','이불·베개커버·타월 등 물품 선택','서비스 일정과 수량 확인'],note:'제공 항목과 수량, 비용, 신청 마감 시점은 추후 안내합니다. 현재 서비스 예약은 접수되지 않습니다.'}
];
const upcomingServiceMarkup = '<nav class="service-category-nav" aria-label="준비 중인 서비스 카테고리">'+upcomingServices.map(s=>'<a href="#'+s.id+'">'+s.title+'</a>').join('')+'</nav><div class="service-overview-grid">'+upcomingServices.map((s,i)=>'<article class="card service-overview-card" id="'+s.id+'" aria-labelledby="'+s.id+'-title"><div class="service-card-heading"><span class="number">0'+(i+1)+'</span><span class="preparing">준비 중</span></div><h3 id="'+s.id+'-title">'+s.title+'</h3><p>'+s.description+'</p><ul class="service-features">'+s.items.map(item=>'<li>'+item+'</li>').join('')+'</ul><p class="small">'+s.note+'</p></article>').join('')+'</div>';
const services = [
 ['내 계약·진행','참여 후 계약과 납입 안내, 프로젝트의 준비 상황을 한곳에서 확인하는 화면을 구상하고 있습니다.','계약 연동과 사업 정보 공개 기준은 협의 후 정해집니다.',['계약 문서 · 연결 후 표시','납입 일정 · 조건 확정 후 안내','사업 진행 · 확인된 소식 안내']],
 ['예약·교환','이용 조건 확인 → 가능 일정 조회 → 예약 또는 교환 제안 → 결과 확인 순서로 준비합니다.','예약 우선순위와 교환 혜택, 취소 규칙은 미정입니다.',['내 이용 조건 확인','가능 일정 조회','예약·교환 결과 확인']],
 ['렌트','운영 기준에 따라 렌트 가능 여부를 확인하고 등록, 예약, 정산 내역을 살펴보는 흐름입니다.','모집 참여와 숙박 렌트는 별도 절차입니다. 렌트 대상과 수수료는 미정입니다.',['렌트 가능 여부 확인','등록·예약 내역','정산 안내']],
 ['방문 준비','방문 일정에 맞춰 필요한 청소·룸서비스와 침구 수량을 선택하고 처리 상태를 확인하는 흐름입니다.','제공 지역, 신청 마감, 비용은 미정입니다.',['방문 일정 선택','서비스·물품 선택','신청 내역 확인']],
 ['알림 설정','상담과 예약 등의 진행 소식을 확인하고 수신 방식을 선택하는 화면을 준비합니다.','푸시·카카오 알림톡·문자 제공 여부는 미정입니다. 현재 발송되지 않습니다.',['진행 소식 확인','수신 방식 선택','수신 설정 변경']]
];
const projectDetails = () => '<details class="project-details"><summary>프로젝트 상세 보기</summary><p class="small">현재 공개 범위: 지역 소개와 콘셉트 이미지. 아래 사업 조건은 확정된 자료를 받은 뒤 안내합니다.</p><dl class="fact-list">'+['정확한 위치·부지','면적·객실·수용 인원','시설·평면도·실제 사진','모집 일정·현재 모집 현황','착공·준공·이용 시작일'].map(t=>'<div><dt>'+t+'</dt><dd>미정</dd></div>').join('')+'</dl><p class="small">준비 중 표시는 모집 개시나 부지 확보, 인허가 완료를 의미하지 않습니다.</p></details>';
const rightsMarkup = '<div class="rights-heading"><h3>권리와 추가 비용, 한눈에 확인하세요.</h3><p>현재 안내 가능한 기준과 확인이 필요한 조건을 구분했습니다.</p></div><div class="card rights-table"><div class="rights-row rights-head"><span>확인 항목</span><span>현재 안내</span><span>상태</span></div>'+[
 ['참여 단위','별장 한 채당 120구좌 구상','현재 구상'],
 ['소유 권리','등기 방식·권리 범위·양도 절차','미정'],
 ['이용 권리','연간 숙박 일수·이용 기간','미정'],
 ['일정 배정','성수기·주말·예약 우선순위','미정'],
 ['추가 비용','세금·등기·관리·청소·침구 비용','미정'],
 ['취소·환불','모집 미달·중도 취소·환불 기준','미정']
 ].map(r=>'<div class="rights-row"><strong>'+r[0]+'</strong><span>'+r[1]+'</span><span class="status-label">'+r[2]+'</span></div>').join('')+'</div>';
const progressMarkup = intro('어디까지 준비됐는지,<br>확인할 수 있도록.','현재는 사전 안내 화면을 준비하는 단계입니다. 사업 진행과 사이트 변경 사항을 구분해 안내합니다.')+'<div class="progress-grid"><article class="card progress-card"><span class="preparing">공개 준비 중</span><h3>사업 진행 안내</h3><p>모집·부지·인허가·시공 진행률과 이용 시작일은 확인된 자료가 없어 아직 안내하지 않습니다.</p><dl class="fact-list">'+['사업 주체','설계·시공 담당','시설 운영·고객 응대','공식 연락처·운영시간'].map(t=>'<div><dt>'+t+'</dt><dd>공개 준비 중</dd></div>').join('')+'</dl><p class="small">담당 주체와 공식 문의처는 정식 접수 전에 안내할 예정입니다.</p></article><article class="card progress-card"><span class="eyebrow">WEBSITE UPDATE</span><h3>사이트 변경 안내</h3><time datetime="2026-09-28">2026.09.28 · 로컬 미리보기</time><ul><li>프로젝트 상세 안내 틀 추가</li><li>권리·비용·미정 조건 정리</li><li>네 가지 준비 중 서비스와 회원 이용 흐름 안내</li></ul><p class="small">사이트 화면의 변경 기록입니다. 사업 일정이나 모집 진행을 뜻하지 않습니다. 실제 상담 접수 시작일은 미정입니다.</p><a class="text-link" href="#consultation">상담 화면 살펴보기 →</a></article></div>';
const steps = [
 ['먼저, 궁금한 걸 묻습니다','공동소유 방식과 참여 조건, 비용과 이용 기준을 편하게 물어보세요.'],
 ['조건을 충분히 살핍니다','모집 대상과 계약, 납입, 취소 조건을 확인한 뒤 결정합니다.'],
 ['참여 절차를 진행합니다','참여 후에는 계약과 납입 일정, 사업 진행 상황을 안내받습니다.'],
 ['준비가 끝나면 머뭅니다','이용 준비가 완료된 뒤, 정해진 기준에 따라 별장을 이용합니다.']
];
const choices = (name, label, values) => '<fieldset class="field"><legend>'+label+'</legend><div class="choices" data-choice="'+name+'">'+values.map(v=>'<button type="button" class="toggle" aria-pressed="false">'+v+'</button>').join('')+'</div></fieldset>';
const contactTimeField = '<fieldset class="field"><legend>연락받기 편한 시간</legend><div class="contact-date-row"><label for="contact-date">날짜 선택</label><input type="date" id="contact-date" name="contactDate" aria-describedby="contact-date-error"><p class="error" id="contact-date-error"></p></div><label for="contact-hour">시간 선택</label><div class="contact-time-controls"><select id="contact-hour" name="contactHour" aria-label="연락 희망 시" aria-describedby="contact-hour-error" disabled><option value="">시 선택</option>'+Array.from({length:15},(_,index)=>{const hour=String(index+9).padStart(2,'0');return '<option value="'+hour+'">'+hour+'시</option>';}).join('')+'</select><select id="contact-minute" name="contactMinute" aria-label="연락 희망 분" disabled><option value="00">00분</option></select><button type="button" id="any-time" class="toggle" aria-pressed="false">상관없어요</button></div><p class="error" id="contact-hour-error"></p><p class="small">날짜를 먼저 선택해 주세요. 시간은 09시부터 1시간 단위로 선택할 수 있습니다.</p></fieldset>';
document.querySelector('main').innerHTML =
 '<section id="home" class="hero"><div class="container hero-grid"><div><div class="eyebrow">MY LODGE · 공유별장 프로젝트</div><h1>별장 하나,<br>내 생활에 들이는 법.</h1><p class="hero-sub">갖고 싶었던 별장 생활을, 조금 더 현실적인 방식으로.</p><p class="hero-description">한 채의 별장을 함께 소유하고, 떠나고 싶은 날 예약해 머무릅니다. 마이롯지는 그렇게 시작하는 세컨드하우스입니다.</p><div class="price-pair"><div class="price-tile"><p>1구좌 기준 예상 금액</p><strong>396만 원</strong></div><div class="price-tile"><p>최초 납입 5%</p><strong>19만 8,000원</strong></div></div><p class="small">위 금액은 현재 검토 중인 기준입니다. 자세한 계약과 납입 조건은 정식 모집 전 안내드립니다.</p><div class="hero-actions">'+cta+'<a class="outline" href="#ownership">공동소유 방식 보기</a></div><p class="small hero-reassurance">가볍게 물어보세요. 신청만으로 계약이 진행되지는 않습니다.</p></div><figure class="photo hero-photo">'+image(0,'별장 공간 콘셉트')+'<figcaption>공간 콘셉트 이미지 · 실제 설계 및 제공 시설은 달라질 수 있습니다</figcaption></figure></div></section>'+
 section('ownership','sage',intro('한 채의 별장을,<br>함께 소유하는 방법.','마이롯지는 한 채의 별장을 120개의 구좌로 나누는 방식입니다. 한 구좌를 통해 소유에 참여하고, 정해진 기준에 따라 별장을 이용합니다.')+'<div class="stack-grid ownership-grid"><div class="card share-card"><h3>한 채의 별장을 120구좌로 나누면</h3><div class="share-grid" role="img" aria-label="전체 120구좌 중 한 구좌 예시">'+ '<span></span>'.repeat(120)+'</div><div class="legend"><p><i></i>한 구좌 예시</p><p><i></i>나머지 구좌</p></div><p class="share-note">120개의 구좌를 보여드리기 위한 예시입니다.</p></div><div class="ownership-details"><div>'+[
 ['◎','구좌','공동소유에 참여하는 기본 단위입니다.'],['◐','소유 지분','별장에 관한 권리입니다. 범위와 이전 절차는 계약 조건에서 확인할 수 있습니다.'],['◑','이용 조건','이용 지역, 시기, 숙박 일수 등은 정해진 기준에 따라 운영됩니다.']
 ].map(d=>'<div class="card definition"><span class="symbol" aria-hidden="true">'+d[0]+'</span><div><h3>'+d[1]+'</h3><p>'+d[2]+'</p></div></div>').join('')+'</div><p class="ownership-note">공동소유는 단독 소유와 다릅니다. 참여 전에는 권리의 범위와 이용 기준을 꼭 살펴봐 주세요.</p></div></div>')+
 section('projects','',intro('다음 마이롯지가<br>머물 곳.','주문진과 양양에서 준비 중인 프로젝트를 소개합니다.<br>구체적인 위치와 시설, 모집 일정은 정식 안내 전 달라질 수 있습니다.')+'<div class="stack-grid project-grid">'+['주문진','양양'].map((r,i)=>'<article class="card project card-lift"><div class="photo project-photo">'+image(i+4,r+' 프로젝트 콘셉트')+'<span class="badge">준비 중</span><span class="concept">콘셉트 이미지</span></div><div class="project-body"><h3>'+r+' 프로젝트</h3><p>현재 공개된 정보와 앞으로 확인할 조건을 살펴보세요.</p><p class="small">위치와 모집 일정, 이용 시작일은 정식 안내 전 확인이 필요합니다.</p>'+projectDetails()+'<button class="location" data-region="'+r+'">'+r+' 이야기 나누기</button></div></article>').join('')+'</div>')+
 section('pricing','mist',intro('얼마부터 시작하는지,<br>먼저 살펴보세요.','지금 안내드릴 수 있는 금액과 납입 계획을 먼저 보여드립니다.')+'<div class="card pricing-table">'+[
 ['1구좌 기준 금액 <span>현재 기준</span>','현재 검토 중인 참여 기준 금액입니다.','396만 원'],['첫 납입 금액','기준 금액의 5%에 해당합니다.','19만 8,000원'],['첫 납입 후 잔여 기준 금액','396만 원에서 첫 납입금을 뺀 금액이며 별도 비용은 포함하지 않습니다.','376만 2,000원'],['납입 계획','단계별 금액과 일정, 최초 납입 포함 여부는 정식 모집 전 안내합니다.','6단계 분담 조건 미정']
 ].map(r=>'<div class="pricing-row"><div><div class="pricing-label">'+r[0]+'</div><p class="small">'+r[1]+'</p></div><strong>'+r[2]+'</strong></div>').join('')+'</div><div class="pricing-note"><p>첫 납입금의 분납 포함 여부와 회차별 금액, 일정은 아직 정해지지 않았습니다. 계약 전 최종 납입표를 확인해 주세요.</p><p class="small">세금과 등기 비용, 유료 서비스 비용은 별도로 발생할 수 있으며 정식 안내 시 함께 확인할 수 있습니다.</p></div>'+rightsMarkup+'<div class="center pricing-cta">'+cta+'</div>')+
 section('participation','',intro('서두르지 말고,<br>하나씩 알아가세요.')+'<div class="step-grid">'+steps.map((s,i)=>'<article class="card step"><span class="number">0'+(i+1)+'</span><h3>'+s[0]+'</h3><p>'+s[1]+'</p></article>').join('')+'</div><p class="step-note">이 순서는 현재 구상 단계의 안내입니다. 상담 신청은 계약이나 구좌 확보가 아니며, 모집 완료 후에도 실제 이용까지는 별도의 준비 과정이 필요합니다.</p>')+
 section('stay-services','',intro('마이롯지의 다음 서비스,<br>카테고리별로 살펴보세요.','지역 교환부터 방문 전 준비까지, 네 가지 서비스를 준비하고 있습니다.<br>각 서비스의 제공 시점과 세부 조건은 확정 후 안내합니다.')+upcomingServiceMarkup+'<div class="card intake-guide"><h3>참여 상담은 이렇게 준비하고 있습니다.</h3><p>정식 접수는 사이트에서 신청하고 담당자가 확인한 뒤 상담을 진행하는 방식으로 준비합니다.</p><ol><li><strong>사이트에서 상담 신청</strong><span>이름·연락처와 문의 내용을 작성합니다.</span></li><li><strong>접수 확인</strong><span>저장 완료 후 접수번호를 안내하고 담당자가 신청 내용을 확인합니다.</span></li><li><strong>담당자 상담</strong><span>참여 조건과 납입 계획, 이용 기준을 안내받습니다.</span></li></ol><p class="small">현재는 화면 미리보기 단계로 실제 접수·저장·연락은 진행되지 않습니다. 정식 접수 시작 시 담당 문의처와 개인정보 처리 안내를 함께 공개합니다. 상담 신청은 계약이나 구좌 확보가 아닙니다.</p>'+cta+'</div>')+
 section('member','sage','<div class="intro member-intro"><h2>머무는 순간까지,<br>하나의 흐름으로.</h2><span class="preparing">회원 서비스는 준비 중입니다</span><p>예약을 확인하고, 일정을 바꾸고, 방문을 준비하는 일까지.<br>참여 후 사용할 화면의 흐름을 미리 살펴보세요. 표시된 항목은 실제 계약이나 예약 내역이 아닙니다.</p></div><div class="stack-grid member-grid"><div><div class="tabs" role="tablist" aria-label="회원 서비스">'+services.map((s,i)=>'<button class="tab" role="tab" id="tab-'+i+'" aria-controls="service-panel" aria-selected="'+(!i)+'" tabindex="'+(i?-1:0)+'" data-tab="'+i+'">'+s[0]+'</button>').join('')+'</div><div class="card member-content" role="tabpanel" id="service-panel" tabindex="0"></div><div class="member-bottom"><p>예약과 회원 교환 제안, 이벤트와 회사 공지를 받아보는 알림 기능도 추후 추가할 예정입니다.</p><p>서비스의 제공 범위와 시점은 운영 계획에 따라 달라질 수 있습니다.</p></div></div><div class="phone-wrap"><div class="phone"><div class="notch"></div><div class="phone-screen"><div class="phone-header">MY LODGE<span>화면 예시</span></div><div id="phone-content"></div></div></div></div></div>')+
 section('lifestyle','',intro('혼자 떠나는 날에도,<br>함께 떠나는 날에도.','아침에는 창가에서, 오후에는 테라스에서.<br>머물고 싶은 하루의 장면을 상상해 보세요.')+'<div class="stack-grid lifestyle-grid"><figure class="photo lifestyle-main">'+image(1,'창가에서 보내는 휴식')+'<figcaption class="photo-label">창가에서 보내는 휴식<small>콘셉트 이미지</small></figcaption></figure><div class="lifestyle-secondary">'+['자연 속 여유','독채형 공간 콘셉트'].map((t,i)=>'<figure class="photo">'+image(i+2,t)+'<figcaption class="photo-label">'+t+'<small>콘셉트 이미지</small></figcaption></figure>').join('')+'</div></div><p class="image-note">이미지는 공간의 분위기를 담은 콘셉트 컷입니다. 실제 모습은 달라질 수 있습니다.</p>')+
 section('checklist','peach',intro('마음을 정하기 전,<br>이 세 가지만은 꼭.')+'<div class="check-grid">'+[
 ['소유와 이용의 범위','내가 갖게 되는 권리의 범위와 이전 절차, 이용 일수와 예약 기준을 살펴보세요.','<path d="M6 8h10M6 12h7"/>'],
 ['납입과 취소 조건','총금액과 납입 일정, 추가 비용, 취소와 환불 기준을 미리 확인하세요.','<path d="M11 6v6l4 2"/>'],
 ['진행 상태와 운영 주체','현재 어디까지 준비되었는지, 누가 운영을 맡는지 확인해 보세요.','<circle cx="11" cy="11" r="4"/><path d="M11 1v4M11 17v4M1 11h4M17 11h4"/>']
 ].map(c=>'<article class="card check-card"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#244c45" stroke-width="1.5" aria-hidden="true"><rect x="1" y="1" width="20" height="20" rx="5"/>'+c[2]+'</svg><div><h3>'+c[0]+'</h3><p>'+c[1]+'</p></div></article>').join('')+'</div><p class="check-bottom">안내되지 않은 내용은 상담을 통해 편하게 물어보세요.</p>')+
 section('progress','mist',progressMarkup)+
 section('faq','','<div class="faq-inner"><h2>미리 알아두면 좋은 것들.</h2>'+faqFilterMarkup+'<div id="faq-list">'+faq.map((f,i)=>'<div class="faq-item" data-category="'+faqCategories[i]+'"><h3><button class="faq-question" aria-expanded="'+(!i)+'" aria-controls="answer-'+i+'">'+f[0]+'<i aria-hidden="true">+</i></button></h3><div class="faq-answer" id="answer-'+i+'" '+(i?'hidden':'')+'><p>'+f[1]+'</p></div></div>').join('')+'</div><div class="faq-cta"><p>더 궁금한 점이 있다면, 편하게 물어보세요.</p>'+cta+'</div></div>')+
 section('consultation','sage','<p class="demo-note">상담 화면 미리보기입니다. 실제 개인정보 대신 예시 정보를 사용해 주세요. 입력 내용은 전송되거나 저장되지 않습니다.</p><div class="stack-grid consult-grid"><div class="consult-intro"><h2>내게 맞는 별장 생활,<br>궁금한 것부터 물어보세요.</h2><p>상담 신청 화면을 미리 살펴보세요.<br>정식 접수는 사이트 신청 후 담당자가 확인하는 방식으로 준비 중입니다. 현재 입력으로 상담이 접수되지는 않습니다.</p></div><div class="card form-card"><form novalidate><div class="field"><label for="name">이름<span class="required">*</span></label><input id="name" name="name" type="text" autocomplete="name" placeholder="성함을 입력해 주세요" required aria-describedby="name-error"><p class="error" id="name-error"></p></div><div class="field"><label for="phone">휴대전화 번호<span class="required">*</span></label><input id="phone" name="phone" type="tel" autocomplete="tel" placeholder="연락받을 번호를 입력해 주세요" required aria-describedby="phone-error"><p class="error" id="phone-error"></p></div>'+topicField+choices('region','관심 지역',['주문진','양양','아직 정하지 않았어요'])+contactTimeField+'<p class="small">정식 접수 시 희망 연락 시간을 선택하는 화면의 예시입니다.</p><div class="field"><label for="question">궁금한 내용</label><textarea id="question" rows="4" placeholder="참여 조건이나 이용 방법 등 궁금한 점을 남겨 주세요"></textarea></div><div class="consent"><label class="consent-label" for="consent"><input type="checkbox" id="consent" required aria-describedby="consent-error"><span>개인정보 수집·이용에 동의합니다 <span class="required">*</span></span></label><p class="error" id="consent-error"></p><button class="privacy-button" type="button" aria-expanded="false" aria-controls="privacy-copy">내용 보기 ▼</button><div class="privacy-copy" id="privacy-copy" hidden><h4>개인정보 수집·이용 안내</h4><p>수집 목적: 상담 안내와 문의 응대</p><p>정식 접수 시 수집 예정 항목: 이름, 휴대전화 번호, 관심 지역, 상담 주제, 희망 연락 날짜·시간, 문의 내용</p><p>이 페이지는 사전 안내용입니다. 개인정보 처리에 관한 자세한 안내는 정식 상담 접수 전에 고지됩니다.</p></div></div><button class="primary" type="submit">상담 화면 미리보기</button><p class="small center">상담 신청은 계약이나 구좌 확보를 뜻하지 않습니다.</p><div class="form-result" role="status" tabindex="-1" hidden><h3>상담 신청 화면을 확인했습니다.</h3><p>사전 안내용 체험이므로 실제 접수되지 않았습니다. 입력하신 내용은 전송되거나 저장되지 않습니다.</p></div></form></div></div>');


function selectService(index) {
 const s = services[index];
 document.querySelectorAll('[data-tab]').forEach((b,i)=>{b.setAttribute('aria-selected',String(i===index));b.tabIndex=i===index?0:-1;});
 const panel=document.querySelector('#service-panel');
 panel.setAttribute('aria-labelledby','tab-'+index);
 panel.innerHTML='<span class="preparing">준비 중</span><h3>'+s[0]+'</h3><p>'+s[1]+'</p><div class="service-note">'+s[2]+'</div>';
 document.querySelector('#phone-content').innerHTML='<h4>'+s[0]+'</h4><div class="phone-list">'+s[3].map((t,i)=>'<div class="phone-item">'+t+'<span class="skeleton" style="width:'+([70,50,80][i])+'%"></span></div>').join('')+'</div>';
}
selectService(0);
document.querySelectorAll('[data-tab]').forEach(b=>{
 b.addEventListener('click',()=>selectService(Number(b.dataset.tab)));
 b.addEventListener('keydown',e=>{
  let i=Number(b.dataset.tab);
  if(e.key==='ArrowRight')i=(i+1)%services.length;else if(e.key==='ArrowLeft')i=(i+services.length-1)%services.length;else if(e.key==='Home')i=0;else if(e.key==='End')i=services.length-1;else return;
  e.preventDefault();selectService(i);document.querySelector('#tab-'+i).focus();
 });
});
document.querySelectorAll('.faq-question').forEach(b=>b.addEventListener('click',()=>{
 const open=b.getAttribute('aria-expanded')!=='true';
 document.querySelectorAll('.faq-question').forEach(q=>{const active=q===b&&open;q.setAttribute('aria-expanded',String(active));document.getElementById(q.getAttribute('aria-controls')).hidden=!active;});
}));
document.querySelectorAll('[data-faq-filter]').forEach(button=>button.addEventListener('click',()=>{
 const category=button.dataset.faqFilter;
 document.querySelectorAll('[data-faq-filter]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
 let count=0;
 document.querySelectorAll('.faq-item').forEach(item=>{
  item.hidden=category!=='전체'&&item.dataset.category!==category;
  const question=item.querySelector('.faq-question');
  const open=!item.hidden&&count===0;
  question.setAttribute('aria-expanded',String(open));
  item.querySelector('.faq-answer').hidden=!open;
  if(!item.hidden)count++;
 });
 document.querySelector('#faq-count').textContent=category+' 질문 '+count+'개';
}));
const topicClear=document.querySelector('.topic-clear');
document.querySelectorAll('[name="topic"]').forEach(input=>input.addEventListener('change',()=>{topicClear.hidden=false;}));
topicClear.addEventListener('click',()=>{
 document.querySelectorAll('[name="topic"]').forEach(input=>{input.checked=false;});
 topicClear.hidden=true;
 document.querySelector('[name="topic"]').focus();
});
function choose(group,button){group.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));}
document.querySelectorAll('[data-choice]').forEach(g=>g.addEventListener('click',e=>{const b=e.target.closest('button');if(b)choose(g,b);}));
document.querySelectorAll('[data-region]').forEach(b=>b.addEventListener('click',()=>{
 const group=document.querySelector('[data-choice="region"]');
 choose(group,[...group.querySelectorAll('button')].find(x=>x.textContent===b.dataset.region));
 document.querySelector('#consultation').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
}));
const contactDate=document.querySelector('#contact-date'),contactHour=document.querySelector('#contact-hour'),contactMinute=document.querySelector('#contact-minute'),anyTime=document.querySelector('#any-time');
function refreshContactDateMinimum(){const now=new Date();contactDate.min=[now.getFullYear(),String(now.getMonth()+1).padStart(2,'0'),String(now.getDate()).padStart(2,'0')].join('-');}
refreshContactDateMinimum();
contactDate.addEventListener('focus',refreshContactDateMinimum);
function updateContactControls(){const enabled=Boolean(contactDate.value)&&contactDate.validity.valid;contactHour.disabled=!enabled;contactMinute.disabled=!enabled;if(!enabled)contactHour.value='';}
contactDate.addEventListener('change',()=>{anyTime.setAttribute('aria-pressed','false');updateContactControls();});
contactHour.addEventListener('change',()=>anyTime.setAttribute('aria-pressed','false'));
anyTime.addEventListener('click',()=>{contactDate.value='';contactHour.value='';contactMinute.value='00';anyTime.setAttribute('aria-pressed','true');updateContactControls();[contactDate,contactHour].forEach(input=>{input.setAttribute('aria-invalid','false');document.getElementById(input.id+'-error').textContent='';});});
const menu=document.querySelector('.menu-button'),mobileMenu=document.querySelector('#mobile-menu');
menu.addEventListener('click',()=>{const open=mobileMenu.hidden;mobileMenu.hidden=!open;menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기');});
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileMenu.hidden=true;menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','메뉴 열기');}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!mobileMenu.hidden){mobileMenu.hidden=true;menu.setAttribute('aria-expanded','false');menu.focus();}});
document.querySelector('.privacy-button').addEventListener('click',e=>{const copy=document.querySelector('#privacy-copy');copy.hidden=!copy.hidden;e.currentTarget.setAttribute('aria-expanded',String(!copy.hidden));e.currentTarget.textContent=copy.hidden?'내용 보기 ▼':'내용 보기 ▲';});
const form=document.querySelector('form');
form.addEventListener('submit',e=>{
 e.preventDefault();
 const name=document.querySelector('#name'),phone=document.querySelector('#phone'),consent=document.querySelector('#consent');
 refreshContactDateMinimum();
 const errors=[[contactDate,contactDate.value&&!contactDate.validity.valid?'오늘 이후 날짜를 선택해 주세요.':''],[contactHour,contactDate.value&&!contactHour.value?'연락받기 편한 시각을 선택해 주세요.':''],[name,name.value.trim()?'':'성함을 입력해 주세요.'],[phone,/^01[016789][0-9]{7,8}$/.test(phone.value.replace(/[^0-9]/g,''))?'':'휴대전화 번호를 확인해 주세요.'],[consent,consent.checked?'':'개인정보 수집·이용 동의를 확인해 주세요.']];
 errors.forEach(([input,message])=>{document.getElementById(input.id+'-error').textContent=message;input.setAttribute('aria-invalid',String(Boolean(message)));});
 const invalid=errors.find(x=>x[1]);
 const result=document.querySelector('.form-result');result.hidden=Boolean(invalid);
 if(invalid){invalid[0].focus();return;}
 // This prototype intentionally sends no request and persists no form data.
 form.reset();topicClear.hidden=true;document.querySelectorAll('[data-choice] button').forEach(b=>b.setAttribute('aria-pressed','false'));anyTime.setAttribute('aria-pressed','false');updateContactControls();result.focus();
});
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
