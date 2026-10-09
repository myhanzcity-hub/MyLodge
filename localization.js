// English presentation uses the same content and interactions as the Korean page.
(() => {
 'use strict';
 const english=new URLSearchParams(location.search).get('lang')==='en';
 const translations=new Map(Object.entries({
 '별장과 풀장, 카바나, 테라스가 함께 보이는 마이롯지 별장 분위기':'The MyLodge villa atmosphere, with a pool, cabanas and a terrace',
 '전 세계':'A destination for the global','IT맨':'tech community','들이 집결하는 성지.':'.',
 '한즈시티 치앙마이 사이트 살펴보기':'Explore HanzCity Chiang Mai',
 '오너 혜택':'Owner Benefits',
 '휴가와 함께 시작하는':'A vision for the future,','미래의 비전.':'beginning with a getaway.',
 '꽉막히고 답답한 콘크리트 블럭이 아닌':'Beyond the confines of concrete walls,',
 '가지는 여유로운 일상과 꿈을 실현할 수 있는 곳.':'A place to enjoy a relaxed way of life and make your dreams a reality.',
 '마이롯지 주문진 파크':'MyLodge Jumunjin Park','마이롯지 양양 파크':'MyLodge Yangyang Park',
 '바다를 품은':'Embracing the sea,','아름다운 내 집.':'a beautiful home of my own.',
 '최신식 별장과 365일 완벽한 풀파티. 풍경과 만남을 즐기는 테라스. 그곳에 닿는 순간, 나의 일상은 화려함으로 바뀐다.':'A modern villa, year-round pool parties and a terrace for views and good company. Arrive, and let everyday life take on a little glamour.',
 '비치사이드':'Beachside','풀파티 · 카바나':'Pool Party & Cabanas','마켓':'Market',
 '풍경과 만남을 즐기는 테라스.':'A terrace for taking in the views and enjoying good company.',
 '바다를 곁에.':'The sea beside you.','여유를 가까이.':'Relaxation within reach.',
 '파도와 햇살, 바다를 바라보는 풍경. 해변 곁에서 여유로운 휴가를 그립니다.':'Waves, sunshine and open sea views. Picture a relaxed getaway by the beach.',
 '함께 즐기는 해변의 여유':'Relaxed moments together by the beach',
 '빛나는 풀파티.':'Poolside celebrations.','오너들만의 카바나.':'Cabanas exclusively for owners.',
 '오너들만의 카바나':'Cabanas exclusively for owners',
 '음악과 만남의 풀파티. 카바나에서의 느긋한 휴식.':'Music and good company at the pool party. Leisurely moments in a cabana.',
 '음악과 함께하는 풀파티':'Pool parties with music','프라이빗 카바나의 여유':'Unwind in a private cabana',
 '휴가에 필요한 것들.':'Your holiday essentials.','가까운 마켓에서.':'At the nearby market.',
 '가벼운 먹거리부터 휴가에 필요한 물품까지. 머무는 공간 가까이에서 편하게 둘러보는 마켓을 그립니다.':'From light bites to holiday essentials, picture a convenient market just a short walk from your villa.',
 '먹거리와 휴가용품':'Snacks and holiday essentials','편하게 둘러보는 리조트 마켓':'A resort market to browse at your leisure',
 '반가운 도착.':'A warm welcome.','편안한 머무름.':'An effortless stay.',
 '도착 전 준비부터 머무는 동안의 안내까지. 휴가를 편안하게 즐길 수 있도록 돕는 컨시어지를 그립니다.':'From pre-arrival arrangements to help during your stay, picture a concierge service that makes your getaway easy.',
 '도착과 시설 이용 안내':'Arrival and facility guidance','머무는 동안의 세심한 지원':'Thoughtful support throughout your stay',
 '그들만의 별장에서':'Once reserved for a select few,','그 특별함이 내게로.':'now that special experience is mine.',
 '상류층들의 전유물이었던 별장,':'Once a luxury reserved for the privileged,',
 '이젠 나도 별장 주인이다.':'now I have a villa of my own.',
 '별장 오너가 된 당신에게.':'For you, the villa owner.',
 '완벽한 휴가의 시작.':'The start of a perfect getaway.',
 '자동 재생 멈추기':'Pause slideshow','자동 재생 시작하기':'Resume slideshow',
 '이전 장면':'Previous scene','다음 장면':'Next scene',
 '어디부터 둘러볼까요?':'Where would you like to start?',
 '나만의 시간, 함께하는 경험.':'Time for yourself. Moments to share.',
 '커피와 책 한 권, 나의 속도로 쉬는 시간.':'A coffee, a book and time to unwind at your own pace.',
 '같은 관심사를 가진 사람들과 이야기를 나누는 자리.':'A place to share stories with people who share your interests.',
 '쉬면서 떠오른 아이디어를 대화로 이어가는 시간.':'Let fresh ideas grow through conversation.',
 '도착 전 준비부터 머무는 동안의 관리까지.':'From getting ready to caring for your space.',
 '컨시어지 스탠다드':'Concierge Standard','도착 전에 필요한 모든 것을 완벽하게 세팅 주문.':'Request everything you need, perfectly arranged before you arrive.',
 '시설 관리 서비스':'Property Care','청결한 관리와 늘 새 것 처럼 쾌적한 서비스 지원.':'Care that keeps your villa clean, comfortable and feeling like new.',
 '1 + 1 + 1':'1 + 1 + 1','새로운 분위기, 다른 지역 별장 오너들과 사용권 공유.':'Enjoy a change of scenery by exchanging stays with villa owners in other destinations.',
 '마이롯지의 별장 생활.':'Villa life at MyLodge.','별장 주인들의 이야기를 만나보세요.':'Discover the stories of villa owners.',
 '공간을 선택해 자세히 둘러보세요.':'Choose a space to take a closer look.',
 '사진으로 만나는 하루.':'A day in pictures.','마이롯지 단지 전체 풍경.':'The MyLodge destination at a glance.',
 '본문으로 바로 가기':'Skip to content','주요 메뉴':'Main navigation','마이롯지 홈':'MyLodge home',
 '메뉴 열기':'Open menu','메뉴 닫기':'Close menu','시설 둘러보기':'Explore the Facilities','별장 주인들에게':'For Villa Owners','지역별 별장':'Our Destinations','컨시어지':'Concierge',
 '별장 살펴보기':'Explore Our Villas','별장 둘러보기':'Explore Our Villas','마이롯지':'MyLodge','나 별장있다.':'I have a villa.','나! 별장있다.':'I have a villa!',
 '친구야, 나 별장있어.':'Hey, I have a villa.','함께 준비하는 공유별장':'A villa to share','상류층의 꿈이던 별장,':'Once a dream for the privileged.','이제 우리도.':'Now, a dream we can share.',
 '내 별장 상상해보기':'Imagine Your Villa','함께 갖는 방식':'A Villa to Share','일상을 휴가처럼 · MY LODGE':'Every day, a holiday · MY LODGE',
 'AI 공간 콘셉트 · 실제 부지·설계·주차 조건은 미확정':'AI concept · Site, design and parking arrangements are not confirmed',
 '별장 속으로':'Step into your villa','도착하는 순간,':'From the moment you arrive,','휴가가 시작됩니다.':'your holiday begins.',
 '마이롯지 만나보기':'Discover MyLodge','다시보기':'Watch Again','이어보기':'Resume','일시정지':'Pause','재생':'Play','음량 켜기':'Sound On','음량 끄기':'Sound Off',
 '인트로 영상 이어보기':'Resume intro film','인트로 영상 일시정지':'Pause intro film','인트로 영상 재생':'Play intro film',
 '마이롯지 30초 인트로 영상':'MyLodge 30-second introduction','별장, 휴식, 풀장, 커뮤니티, 만남, 클럽과 야간 축제로 이어지는 마이롯지 영상':'A MyLodge film featuring villas, relaxation, pools, community, connections, club nights and celebrations',
 '인트로 영상을 재생합니다.':'The intro film is playing.','인트로 영상을 일시정지했습니다.':'The intro film is paused.','하단 재생 버튼으로 영상을 재생할 수 있습니다.':'Use the Play button below to start the film.','영상이 끝났습니다. 다시 보거나 별장 공간을 둘러보세요.':'The film has ended. Watch again or explore the villas.',
 '마이롯지가 그리는 생활 · AI 콘셉트 영상':'Life imagined by MyLodge · AI concept film',
 '마이롯지 길잡이':'Your MyLodge Guide','반가워요! 마이롯지를 함께 둘러볼까요?':'Welcome! Let’s explore MyLodge.','공간을 만나고, 마이롯지가 그리는 생활을 살펴보세요.':'Discover the spaces and the life we imagine at MyLodge.','마이롯지 둘러보기':'Explore MyLodge',
 '손을 들어 마이롯지를 안내하는 집 모양 캐릭터':'A smiling house mascot welcoming you to MyLodge',
 '누군가의 별장에서,':'From someone else’s villa,','우리의 별장으로.':'to a villa we share.','일상을 휴가처럼.':'Every day, a holiday.','자연 속 여유와 새로운 만남이 있는 별장 생활을 그립니다.':'Nature all around. Time to unwind. People to connect with.',
 '별장이라는 공간.':'A villa to call your own.','내가 바라던 휴가.':'Your kind of holiday.','별장과 풀장, 테라스와 클럽.':'Villas and pools. Terraces and clubs.','마이롯지에서 꿈꾸는 휴가를 만나보세요.':'Discover your dream holiday at MyLodge.',
 '별장 공간 선택':'Choose a villa space','별장 외관':'The Villa','비치사이드 · 풀장':'Beachside & Pool','테라스':'Terrace','카페테리아 · 클럽':'Café & Club',
 'AI 공간 콘셉트':'AI space concept','AI 공간·생활 콘셉트':'AI space & lifestyle concept','마이롯지 공간 콘셉트':'MyLodge space concept','마이롯지 공간 조성 콘셉트':'MyLodge destination concept',
 '최첨단 별장.':'A state-of-the-art villa.','지금 내가 있는 곳이 이비자!':'It feels like Ibiza here!','휴가의 시작.':'Where your holiday begins.','최신식 별장과 365일 완벽한 풀파티. 그곳에 닿는 순간, 나의 일상은 화려함으로 바뀐다.':'A modern villa. The perfect pool party, 365 days a year. The moment I arrive, my everyday life takes on a glamorous new rhythm.',
 '최신식 모듈러 하우스 별장.':'A modern modular villa.','이비자에 버금가는 풀파티 무대.':'A pool party scene to rival Ibiza.','전체 공간 구상 보기':'See the Full Vision',
 '바다를 곁에.':'The sea beside you.','풀장 속 여유.':'Time to unwind by the pool.','푸른 바다와 풀장, 햇살 아래의 만남. 마음껏 쉬고 함께 즐기는 휴가를 그립니다.':'Blue seas. Inviting pools. Good company. A holiday to enjoy together.',
 '해변을 바라보는 풀장':'A pool overlooking the beach','함께 즐기는 야외 공간':'Outdoor spaces to enjoy together',
 '편안한 만남.':'Easy conversations.','새로운 가능성.':'New possibilities.','커피 한 잔에서 시작되는 대화. 여유로운 테라스에서 사람과 아이디어를 만납니다.':'Meet people. Share ideas. Start a conversation over coffee on the terrace.',
 '사업가들의 편안한 교류':'Entrepreneurs meeting in a relaxed setting','풍경과 함께하는 커피':'Coffee with a view','낮의 커피.':'Coffee by day.','밤의 음악.':'Music by night.',
 '이야기가 이어지는 라운지에서 음악과 춤이 있는 밤까지. 머무름에 활기를 더합니다.':'From conversations in the lounge to nights of music and dancing. Bring a little energy to your stay.','카페와 클럽 라운지':'Café and club lounge','음악과 함께하는 만남':'Good company and great music',
 '도착하는 순간':'The Moment You Arrive','별장과 풀장, 나의 일상이 달라지는 순간.':'A villa, a pool and a new rhythm for your everyday life.','여유로운 오후':'An Easy Afternoon','사람을 만나는 오후.':'An afternoon of good company.','편안한 대화 속에서 새로운 생각이 시작됩니다.':'New ideas begin with an easy conversation.','함께 즐기는 밤':'A Night Together','음악이 있는 밤.':'A night filled with music.','함께 즐기는 라운지. 별장의 밤에 활기를 더합니다.':'Share an evening in the lounge. Bring your villa nights to life.','별장에서 보내는 생활 장면':'Scenes from villa life','스크롤로 다음 장면':'Scroll to the next scene',
 '별장 주인들에게.':'For villa owners.','머무는 시간을 더 풍요롭게.':'Make more of every stay.','마이롯지가 제안하는 별장 생활의 세 가지 즐거움.':'Three pleasures of villa life, imagined by MyLodge.',
 '내 안에 완벽한 여유.':'Space to truly unwind.','자연을 바라보는 자리, 느긋한 커피 한 잔. 일상의 속도를 잠시 내려놓는 시간.':'A seat overlooking nature. A leisurely cup of coffee. Time to slow down and simply be.',
 '나와 비슷한 사람들과.':'Among like-minded people.','관심사와 이야기를 나누며 가까워지는 만남. 혼자여도 함께여도 편안한 공간.':'Shared interests and stories bring people closer. A place to feel at ease, on your own or together.',
 '새로운 계획이 시작되는 곳.':'Where new plans begin.','휴식 속에서 떠오르는 생각, 편안한 대화로 이어지는 가능성. 머무름 너머의 경험.':'Ideas take shape as you relax. Possibilities grow through conversation. More than a place to stay.',
 '마이롯지가 그리는 풍경':'The MyLodge Vision','함께 꿈꾸는 공간,':'The place we dream of,','한눈에 펼쳐보다.':'all in one view.','마이롯지가 그리는 공간의 전체 풍경입니다.':'A panoramic view of the destination we imagine.',
 '바다 곁에서 그리는':'By the sea,','우리의 다음 별장.':'a new vision for villa life.','주문진과 양양에서 그리는 마이롯지의 공간 콘셉트.':'Our vision for MyLodge destinations in Jumunjin and Yangyang.',
 '주문진의 별장':'Villas in Jumunjin','양양의 별장':'Villas in Yangyang','바다를 향해 펼쳐진 별장과 클럽. 푸른 저녁을 함께 즐기는 휴양지를 그립니다.':'Seafront villas and a vibrant club. Imagine evenings by the sea, spent together.',
 '숲을 따라 이어지는 별장과 풀장. 여유로운 낮, 활기찬 만남을 그립니다.':'Villas and pools nestled among the trees. Unhurried days and lively conversations.',
 '꽉막히고 답답한 콘크리트 블럭이 아니라.':'Beyond the confines of concrete walls.','아름다운 휴양지에서.':'In a beautiful holiday destination.','가지는 여유로운 일상과 계획과 목표를 실현할 수 있는 곳.':'A place to unwind, make plans and pursue your goals.',
 '낮의 여유에서,':'From easy days,','밤의 즐거움까지.':'to unforgettable nights.','풀장에서 쉬고, 테라스에서 만나고.':'Unwind by the pool. Connect on the terrace.','음악이 흐르는 라운지에서 하루를 이어갑니다.':'Let the day unfold in a lounge filled with music.',
 '별장 생활 사진':'Villa lifestyle gallery','바다와 함께 즐기는 풀장':'A pool beside the sea','사업가들이 만나는 테라스':'A terrace for meeting fellow entrepreneurs','음악과 대화가 있는 클럽':'A club for music and conversation','이전 사진':'Previous photo','다음 사진':'Next photo','마이롯지가 그리는 생활 · AI 콘셉트 이미지':'Life imagined by MyLodge · AI concept images',
 '휴가에서 시작해,':'From a holiday','새로운 가능성으로.':'to new possibilities.','우리의 별장,':'Our villa,','함께 준비하다.':'imagined together.','자연과 여유, 사람들과의 만남.':'Nature, relaxation and connections.','마이롯지가 그리는 별장 생활을 만나보세요.':'Discover villa life imagined by MyLodge.',
 '챕터 1. 치앙마이.':'Chapter 1. Chiang Mai.','전 세계 IT맨들이 집결하는 성지.':'A destination for the global tech community.','전 세계 IT맨들이':'The global tech community','집결하는 성지.':'coming together.',
 '함께 자유롭게 만나고.':'Come together.','소통하고 협력하고.':'Connect and collaborate.','도모하고. 스타트 업!':'Share ideas. Build something new!','치앙마이 살펴보기':'Explore Chiang Mai',
 '휴식에 집중할 수 있도록.':'More time to unwind.','방문 준비부터 공간 관리까지, 편안한 머무름을 돕는 서비스를 구상합니다.':'We’re planning services to make your stay easier, from arrival preparations to caring for your villa.',
 '머무름의 준비':'Before Your Stay','방문 전 필요한 준비와 안내를 한곳에서 살펴보는 경험.':'Everything to help you prepare for your visit, in one place.','공간을 돌보는 손길':'Care for Your Space','청소와 침구 등 편안한 별장 생활을 위한 관리 서비스.':'A vision for housekeeping, linen care and the comforts of villa life.','다음 여행으로':'Your Next Escape','다른 지역에서의 머무름과 새로운 휴가를 이어가는 경험.':'Discover a new destination for your next escape.',
 '컨시어지는 서비스 구상이며, 현재 예약·신청은 제공하지 않습니다.':'Concierge services are being planned. Bookings and service requests are not currently available.',
 '인생의 휴식처.':'Your haven in life.','마이롯지.':'MyLodge.','당신이 꿈꾸던 별장 생활.':'The villa life you’ve dreamed of.','마이롯지의 공간과 이야기를 만나보세요.':'Discover MyLodge’s spaces and stories.','여유와 만남이 있는 별장 생활, 마이롯지.':'Villa life with time to relax and people to meet. MyLodge.',
 '마이롯지 브랜드·공간 소개 사이트입니다. 이미지는 AI 및 기획 콘셉트로 실제 시설을 나타내지 않습니다. 별장과 서비스의 세부 안내는 확정 후 공개합니다.':'Discover the MyLodge brand and our vision for future villas. AI concept images do not show actual facilities. Villa and service details will be shared once confirmed.',
 'MyLodge 마이롯지':'MyLodge','안내 창 닫기':'Close information','닫기 ×':'Close ×','준비 중':'Coming soon',
 '공간·체류·운영 구상':'A vision for spaces, stays and services','치앙마이 체류·업무·커뮤니티 사업 구상':'A vision for living, working and connecting in Chiang Mai','AI 공간·커뮤니티 콘셉트':'AI space & community concept','AI 교류 콘셉트':'AI community concept','체류 상품 가격 · 예약 공급 준비 중':'Pricing and booking details are not yet available',
 '참여 목적':'Your Purpose','공간 구성':'The Spaces','체류 구상':'Ways to Stay','준비 상태':'What’s Next','공유별장 보기':'Explore Shared Villas','국내 공유별장':'Shared Villas in Korea',
 '나의 체류 목적 살펴보기':'Find Your Purpose','국내 공유별장 SHARE 알아보기':'Explore Shared Villas in Korea','어떤 시간을':'How would you like','보내고 싶나요?':'to spend your time?','체류에서 시작해 업무와 교류까지.':'From a place to stay to a place to work and connect.','필요한 경험을 중심으로 살펴보세요.':'Explore the experience that matters to you.',
 'Business Valley 참여 목적':'Choose your purpose at Business Valley','머물기':'Stay','일하기':'Work','연결하기':'Connect','함께 만들기':'Build Together',
 '낯선 곳에서도,':'Somewhere new,','나의 생활 리듬으로.':'at your own pace.','짧은 체험부터 장기 체류까지, 숙박과 일상의 편의를 함께 구상합니다. 객실·생활 지원·청소의 포함 범위는 실제 공급 조건을 확인한 뒤 안내합니다.':'From a short visit to a longer stay, we envision accommodation with everyday comforts. Room options, daily support and housekeeping details will be shared once confirmed.',
 '체류 유형 살펴보기':'Explore Ways to Stay','당신이 추구하는,':'Find the people, ideas','필요로 하는 모든 자원을':'and resources you need','만날 수 있다.':'to move forward.','사람을 만나고, 생각을 나누고,':'Meet people. Share ideas.','함께 다음 가능성을 그리는 곳.':'Explore new possibilities together.','공간 구성 둘러보기':'Explore the Spaces','마이롯지가 지향하는 커뮤니티의 모습입니다.':'This is the community MyLodge aspires to create.',
 '머무는 자리에서,':'From a place to stay,','함께 만드는 공간으로.':'to a place to create together.','통합 기획서에 담긴 일곱 가지 공간 구성안입니다.':'Seven spaces envisioned in the MyLodge plan.',
 '머무는 별장':'Your Villa','숙박과 일상의 기반이 되는 체류 공간.':'A base for your stay and everyday life.','집중하는 업무 공간':'Space to Focus','개인 업무·회의·협업을 위한 공간 구상.':'A vision for focused work, meetings and collaboration.','만남의 라운지':'A Lounge to Connect','커피와 식사, 선택 모임이 이어지는 공간.':'A place for coffee, meals and gatherings you choose to join.','창업자의 교류':'Meet Fellow Entrepreneurs','창업과 사업 경험을 나누는 공간 구상.':'A space to share experiences of building and running a business.','창작과 전문 활동':'Creative & Professional Life','제작·전문 활동과 사람의 연결을 돕는 공간.':'A place for creatives and professionals to work and connect.','생활 속 회복':'Everyday Wellbeing','휴식과 건강한 생활을 위한 공간 구상.':'A vision for relaxation and healthy daily living.','경험이 모이는 광장':'Events & Gatherings','프로그램과 행사, 공유 활동을 위한 자리.':'A place for programmes, events and shared activities.',
 '전체 구성안 · 실제 주소·규모·시설 공급·운영 여부는 미확정입니다.':'Overall concept · Location, size, facilities and opening plans are not yet confirmed.',
 '짧게 만나거나,':'Visit for a while,','오래 머물거나.':'or stay a little longer.','기획서의 체류 유형을 기준으로 살펴보세요.':'Explore the stay types envisioned in our plan.','먼저 경험하기':'Try It First','일하며 머물기':'Stay & Work','생활하며 머물기':'Settle In','3박 구상':'Proposed stay: 3 nights','7~14일 구상':'Proposed stay: 7–14 days','1~3개월 구상':'Proposed stay: 1–3 months',
 '공간과 커뮤니티를 짧게 경험하는 체류.':'A short introduction to the space and community.','숙박·업무 체험·안내 프로그램 포함 여부 확인 필요':'Included accommodation, workspace access and orientation activities are not yet confirmed','업무의 집중과 휴가의 여유를 함께.':'Focused work with room for a holiday.','좌석·회의·청소·연장·추가 요금 확인 필요':'Workspace access, meeting facilities, housekeeping, stay extensions and extra fees are not yet confirmed','일과 생활의 리듬을 이어가는 장기 체류.':'A longer stay that supports your rhythm of work and life.','월 비용·예치금·공과금·생활 지원 확인 필요':'Monthly costs, deposits, utilities and daily support remain to be confirmed',
 '국내 공유별장과 별도 조건입니다.':'Separate terms for stays in Chiang Mai.','치앙마이의 체류와 서비스는 국내 별장 구상과 별도로 구상하고 있습니다. 가격과 포함 서비스, 이용 조건은 정식 안내에서 확인해 주세요.':'Stays and services in Chiang Mai are planned separately from our villas in Korea. Prices, included services and terms will be published once confirmed.','체류 상품 가격 · 예약 공급':'Pricing & booking details',
 '지금 준비하는 것,':'What we’re preparing,','앞으로 확인할 것.':'and what comes next.','공간 구상과 실제 체류 가능 상태를 함께 살펴보세요.':'Explore the vision for the space and the preparations needed before stays can begin.','치앙마이 공간':'Chiang Mai Spaces','주소·시설 구성·객실 공급 확인 필요':'Address, facilities and room availability remain to be confirmed','업무 환경':'Work Environment','좌석·인터넷·회의 장비·시간·비용 확인 필요':'Workstations, internet, meeting equipment, hours and costs remain to be confirmed','체류 상품':'Stay Options','가격·포함 범위·변경·취소·이용 시작일 확인 필요':'Prices, inclusions, changes, cancellations and opening dates remain to be confirmed','커뮤니티·협업':'Community & Collaboration','운영자·실제 프로그램·승인 과제·참여 조건 확인 필요':'Operators, programmes, approved activities and participation terms remain to be confirmed','현지 연락처':'Local Contact','공식 문의처 공개 준비 중':'Official contact details will be published when ready',
 '현재 사전 안내 단계입니다. 실제 예약·결제·회원가입·관심 등록은 제공하지 않습니다.':'This is a preview. Bookings, payments, membership sign-ups and interest registration are not yet available.',
 '머무는 곳에서,':'Where you stay,','다음 경험이 시작됩니다.':'your next experience begins.','Business Valley의 준비 상태와 국내 공유별장 구상을 살펴보세요.':'Discover what’s next for Business Valley and our vision for shared villas in Korea.','준비 상태 확인하기':'See What’s Next','나 별장있다. SHARE 보기':'Explore MyLodge SHARE','마이롯지 홈으로':'Back to MyLodge','시설과 체류 유형은 기획 단계 안내입니다. 가격·일정·포함 서비스는 정식 조건에서 확인합니다.':'Facilities and stay types are planning concepts. Prices, dates and included services will be detailed in the official terms.',
 '업무의 집중,':'Focus on work,','휴가의 여유.':'with room for a holiday.','업무 좌석과 회의·협업 공간을 체류와 연결하는 구상입니다. 인터넷·장비·좌석 수·이용 시간·추가 비용은 운영 준비와 함께 확인합니다.':'We envision workstations, meeting rooms and collaboration spaces as part of your stay. Internet access, equipment, capacity, hours and additional costs will be confirmed as plans develop.','업무 공간 구상 보기':'Explore Workspaces',
 '필요할 때 만나고,':'Meet when it matters,','나의 속도로 연결되기.':'connect at your own pace.','커뮤니티 모임과 운영자의 소개를 통해 필요한 사람을 만나는 방식을 구상합니다. 프로필 공개와 소개는 당사자의 동의를 전제로 하며, 체류 중 모든 모임 참여를 필수로 두지 않습니다.':'We envision meeting the right people through community gatherings and introductions by the host. Sharing profiles and making introductions require your consent. Participation in gatherings is optional.','커뮤니티 준비 상태 보기':'Explore Community Plans',
 '작은 과제에서,':'From a small task,','함께 완성하는 경험으로.':'to something built together.','협업 준비 상태 보기':'Explore Collaboration Plans',
 '책임자·범위·일정·대가가 확인된 과제를 중심으로 협업을 구상합니다. 실제 공개 과제와 참여 조건은 승인 후 안내하며, 수익이나 보상을 확약하지 않습니다.':'We envision collaboration on tasks with clearly defined responsibilities, scope, timelines and compensation. Available opportunities and participation terms will be announced once approved. Earnings or rewards are not guaranteed.'
 }));
 function translate(value){
  if(translations.has(value))return translations.get(value);
  const ending=value.match(/^(.*?)(\s*[↗↓↑↻])$/);if(ending&&translations.has(ending[1]))return translations.get(ending[1])+ending[2];
  const counter=value.match(/^(\d{2} \/ \d{2} · )(.*)$/);if(counter&&translations.has(counter[2]))return counter[1]+translations.get(counter[2]);
  for(const [suffix,replacement] of [[' · AI 생활 콘셉트',' · AI lifestyle concept'],[' 공간 구상',' space concept'],[' 공간 콘셉트',' space concept']])if(value.endsWith(suffix)&&translations.has(value.slice(0,-suffix.length)))return translations.get(value.slice(0,-suffix.length))+replacement;
  return value;
 }
 const language=document.querySelector('.language-slot');
 const languageURL=lang=>{const url=new URL(location.href);if(lang==='en')url.searchParams.set('lang','en');else url.searchParams.delete('lang');const edge=(document.querySelector('header')?.getBoundingClientRect().bottom||80)+48;const section=[...document.querySelectorAll('main>section[id]')].filter(e=>e.getBoundingClientRect().top<=edge).at(-1);if(section)url.hash=section.id;return url.pathname+url.search+url.hash;};
 if(language){
  language.querySelector('summary').setAttribute('aria-label',english?'Select language · English':'언어 선택 · 현재 한국어');
  language.querySelector('.language-full').textContent=english?'English':'한국어';language.querySelector('.language-short').textContent=english?'EN':'KO';
  language.querySelector('ul').innerHTML=`<li>${english?`<a lang="ko" href="${languageURL('ko')}">한국어</a>`:'<span lang="ko" class="language-current" aria-current="true">한국어 <span>✓</span></span>'}</li><li>${english?'<span lang="en" class="language-current" aria-current="true">English <span>✓</span></span>':`<a lang="en" href="${languageURL('en')}">English</a>`}</li><li><button type="button" lang="zh" disabled>中文 <small>${english?'Coming soon':'준비 중'}</small></button></li><li><button type="button" lang="ja" disabled>日本語 <small>${english?'Coming soon':'준비 중'}</small></button></li>`;
  language.querySelector('.language-note').textContent=english?'Korean and English are available.':'한국어와 영어로 둘러볼 수 있습니다.';
  language.addEventListener('toggle',()=>{if(language.open)language.querySelectorAll('a[lang]').forEach(a=>a.href=languageURL(a.lang));});
 }
 if(!english)return;
 document.documentElement.lang='en';document.body.classList.add('english-page');
 document.title=document.body.classList.contains('valley-page')?'Business Valley · MyLodge':'MyLodge · I have a villa.';
 const description='Every day, a holiday. Discover MyLodge’s vision for villas, relaxation and new connections.';
 document.querySelectorAll('meta[name="description"],meta[property="og:description"]').forEach(e=>e.content=description);
 document.querySelector('meta[property="og:title"]')?.setAttribute('content',document.title);
 document.querySelector('meta[property="og:locale"]')?.setAttribute('content','en_US');
 document.querySelector('meta[property="og:image:alt"]')?.setAttribute('content','A seaside modular villa and an SUV arrival · AI space concept');
 document.querySelector('link[rel="canonical"]')?.setAttribute('href','https://my-lodge-business.vercel.app/'+(document.body.classList.contains('valley-page')?'business-valley.html':'')+'?lang=en');
 document.querySelector('meta[property="og:url"]')?.setAttribute('content',document.querySelector('link[rel="canonical"]')?.href||location.href);
 const imageText={
  '해변과 풀장, 모듈 별장이 함께 보이는 휴양지':'A destination with a beach, pool and modular villas',
  '별장과 풀장, 클럽을 함께 보는 전체 공간 조감도':'An aerial view of villas, pools and a club',
  '해안의 곡선형 별장 단지와 중앙 풀장, 클럽을 조망한 주문진 콘셉트':'Jumunjin concept: curved coastal villas, a central pool and a club',
  '숲속의 계단형 별장 단지와 여러 풀장, 교류 광장을 조망한 양양 콘셉트':'Yangyang concept: terraced forest villas, pools and a community plaza',
  '풀장과 클럽 라운지, 해안의 모듈형 별장 단지를 하늘에서 내려다본 전체 조감도 · AI 공간 콘셉트':'An aerial view of coastal modular villas, pools and a club lounge · AI space concept',
  '풀장과 함께하는 모듈형 별장 콘셉트':'A modular villa beside a pool · Concept image',
  'IT 전문가와 창업자의 치앙마이 교류 공간 콘셉트':'A Chiang Mai community space for tech professionals and founders · Concept image',
  '치앙마이의 풀장과 정원 옆에서 IT 전문가와 창업자들이 교류하는 공간 구상':'Tech professionals and founders connecting beside a pool and garden in Chiang Mai · Concept image',
  '정원과 산을 바라보는 라운지에서 IT 전문가들이 대화하고 협업하는 장면':'Tech professionals connecting in a lounge overlooking gardens and mountains · Concept image',
  '바다와 소나무 사이의 첨단 모듈 별장 앞에 SUV가 도착한 휴가 장면 · AI 콘셉트':'An SUV arriving at a modern modular villa beside the sea and pine trees · AI concept'
 };
 Object.entries(imageText).forEach(([ko,en])=>translations.set(ko,en));
 const filmDescription=document.querySelector('#film-description');if(filmDescription)filmDescription.textContent='A 30-second AI concept film in nine scenes: a villa, serenity, a pool, community, entrepreneurs meeting, business partners, a club, a festival and a celebration. Captions: A villa to call my own. Breathe out. Settle in. Every day feels like a holiday. Find your people. Good company. All year round. Good conversations. Great partnerships. Let the music move you. Make it a night to remember. Feel the MyLodge. Animated captions and graphic transitions accompany the images. Turn on sound to hear ocean waves.';
 function translateNode(root){
  if(root.nodeType===3){if(root.parentElement?.closest('.language-slot,script,style'))return;const value=root.textContent.trim();const next=translate(value);if(next!==value)root.textContent=root.textContent.replace(value,next);return;}
  if(root.nodeType!==1||root.matches('script,style,.language-slot'))return;
  for(const attribute of ['alt','aria-label','title']){const value=root.getAttribute(attribute);if(value){const next=translate(value);if(next!==value)root.setAttribute(attribute,next);}}
  [...root.childNodes].forEach(translateNode);
 }
 translateNode(document.body);
 const chiangMaiTitle=document.querySelector('#brand-paths .valley-path h3');
 if(chiangMaiTitle)chiangMaiTitle.innerHTML='Chapter 1. Chiang Mai.<br>Where the global <strong class="it-highlight">tech community</strong> and<br><strong class="it-highlight">digital nomads</strong><br>come together.';
 const filmHeading=document.querySelector('.film-introduction h1');if(filmHeading)filmHeading.textContent='A villa to call my own.';
 // Media and menu handlers update labels later; translate only their changed nodes.
 new MutationObserver(records=>records.forEach(record=>{if(record.type==='childList')record.addedNodes.forEach(translateNode);else translateNode(record.target);})).observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['aria-label','alt','title']});
 document.querySelectorAll('a[href]').forEach(a=>{if(a.closest('.language-slot'))return;const url=new URL(a.href);if(url.origin===location.origin&&!a.getAttribute('href').startsWith('#')&&/\/(index|business-valley)\.html$/.test(url.pathname)){url.searchParams.set('lang','en');a.href=url.pathname+url.search+url.hash;}});
})();
