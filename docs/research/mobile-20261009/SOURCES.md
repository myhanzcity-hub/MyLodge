# 마이롯지 모바일 개선 자료 목록

열람일: 2026-10-09. 출처의 규범·설명·설계 패턴·브라우저 역사 자료를 구분한다. 아래 요약은 원문을 복제하지 않고 마이롯지에 필요한 적용점만 기록했다.

| 자료 | 종류 | 확인 내용 | 마이롯지 적용 |
|---|---|---|---|
| [W3C Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) | WCAG 해설 | 일반적인 세로 콘텐츠는 320 CSS px 상당 폭에서 정보/기능 손실과 양방향 스크롤을 피한다. 필수 2차원 콘텐츠 예외가 있다. | PC 폭 강제 금지, 활성 본문과 숨은 콘텐츠를 구분해 검사 |
| [W3C Resize Text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html) | WCAG 해설 | 텍스트 200% 확대에서 정보·기능 보존. 이미지 텍스트/자막 등 적용 범위를 구분한다. | 검토실 확대만으로 적합 선언하지 않고 브라우저 확대 추가 |
| [W3C Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html) | WCAG 해설 | 사용자가 행간 1.5, 문단 뒤 2em, 자간 .12em, 단어 간격 .16em으로 바꿔도 손실이 없어야 한다. 기본 디자인 강제값은 아니다. | 긴 영문, 강조 span, 고정 높이/숨김 규칙 검수 |
| [W3C Contrast Minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) | WCAG 해설 | 일반 텍스트 4.5:1, 큰 텍스트 3:1 기준과 예외. | 사진 위 본문은 불투명 읽기 표면. 작은 AI 표기도 검사 |
| [W3C Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) | WCAG 2.2 AA 해설 | 기본 24×24 CSS px 또는 간격 등 예외. | 프로젝트 주요 버튼 48px 제안은 AA 수치와 구분 |
| [W3C Focus Not Obscured](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html) | WCAG 해설 | 초점 받은 요소가 작성자 콘텐츠에 완전히 가려지지 않게 한다. | 고정 헤더·메뉴·확대 시 선택 항목이 보이는지 확인 |
| [W3C Pause Stop Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide) | WCAG 해설 | 자동 움직임/정보 갱신의 제어 필요. 자동 갱신은 5초 예외로 단순 처리하지 않는다. | 슬라이드·영상·네온을 별개로 제어 검토 |
| [W3C Older Users](https://www.w3.org/WAI/older-users/) | 접근성 지침 | 시각·미세 조작·집중 등 연령 관련 필요와 접근성 기준의 관계. | 60–70대 실제 읽기/터치 관찰. 모두 동일 능력이라고 가정하지 않음 |
| [WAI APG Carousel](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/) | 설계 패턴 | 회전 제어, 초점 진입 시 정지, 숨은 슬라이드 제외, 제어 순서 안내. | 현재 무한 자동 재생 및 화살표 제거 결정과의 차이를 별도로 기록 |
| [WAI APG Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) | 설계 패턴 | tablist/tab/tabpanel 연결, 선택 상태, 키보드 이동. | 2열 시설 탭에서도 읽기 순서·키보드 순서 일치 |
| [WAI APG Disclosure Navigation](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/) | 예제 | 일반 사이트 메뉴는 링크+펼침 버튼으로 구성 가능. 예제의 실서비스 검증 필요. | 메뉴 역할을 과도하게 추가하지 않고 닫기·초점 복귀 정의 |
| [MDN Responsive Images](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images) | 구현 문서 | 해상도 선택과 구도 변경은 별개. srcset/sizes/picture 역할. | 모든 구간의 실제 이미지 폭과 sizes 대조 |
| [MDN Viewport](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/viewport) | 구현 문서 | 기기 폭·초기 확대 지정과 줌 제한의 영향. | width=device-width, 확대 제한 없음 유지 |
| [MDN color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme) | 구현 문서 | 지원 색 체계를 알림. only light는 사용자 에이전트 변경 제한에 활용. | 로고 보호에 사용하되 모든 강제 다크를 차단한다고 단정하지 않음 |
| [MDN prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) | 구현 문서 | 사용자 선호 색상 감지. | 검토용 테마와 OS·브라우저 실제 색 변경을 분리 |
| [MDN Reduced Motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) | 구현 문서 | 사용자 동작 줄이기 선호 감지. | 자동 전환과 네온의 정적 대체 및 재생 상태 정의 |
| [Google Viewport Units](https://web.developers.google.cn/blog/viewport-units?hl=en) | 구현 설명 | svh/lvh/dvh가 브라우저 UI에 따라 다른 높이를 표현. Google 공식 미러에서 본문 확인. | 가로 모드·주소창 변화에서 본문 높이를 강제로 맞추지 않음. 가상 키보드 대응은 별도 |
| [WebKit iOS Video](https://webkit.org/blog/6784/new-video-policies-for-ios/) | 2016 정책 설명 | muted/playsinline 및 play Promise 동작의 배경. | 최신 iOS·인앱 결과를 보장하는 자료로 사용하지 않음. 재생 거절 fallback 필요 |
| [Samsung Internet Dark Mode](https://developer.samsung.com/browser/blog/en/2020/12/15/dark-mode-in-samsung-internet) | 2020 브라우저 설명 | 강제 색 변환과 작은 로고 분류의 문제 설명. | 현재 버전의 설정 위치/동작은 실기기 확인. 과거 실험 옵션을 지시하지 않음 |
| [web.dev Video Performance](https://web.dev/learn/performance/video-performance) | 성능 지침 | poster·preload·autoplay의 전송 비용과 브라우저 힌트 성격. | 영상과 첫 읽기 내용을 분리, 강제 일괄 preload 변경 대신 측정 |
| [web.dev Web Vitals](https://web.dev/articles/vitals) | 성능 지표 | LCP≤2.5s, INP≤200ms, CLS≤.1의 좋은 기준. 모바일/PC별 75백분위 사용. | 현장 기준과 localhost 시험을 혼동하지 않음 |
| [web.dev Optimize LCP](https://web.dev/articles/optimize-lcp) | 성능 지침 | 최초 HTML 및 핵심 자원의 발견 지연과 렌더링 지연 분석. | JS로 여러 번 재구성하는 첫 화면 경로 조사 |
| [web.dev Optimize CLS](https://web.dev/articles/optimize-cls) | 성능 지침 | 크기 예약·동적 삽입·폰트 등 이동 원인. | 슬라이드 안정 높이 외에도 초기 DOM 교체와 이미지 영역 측정 |
| [web.dev Optimize INP](https://web.dev/articles/optimize-inp) | 성능 지침 | 입력 이후 다음 페인트까지 지연과 메인 스레드 작업. | 시설 탭·메뉴·언어 전환 실제 입력 측정 |

## 추가 자료

| 자료 | 종류 | 확인 내용 | 마이롯지 적용 |
|---|---|---|---|
| [W3C Orientation](https://www.w3.org/WAI/WCAG22/Understanding/orientation.html) | WCAG 해설 | 필수인 경우를 제외하고 특정 방향만 강요하지 않는다. 화면 구성 변화 자체와 방향 제한은 다르다. | 가로 화면도 읽기·메뉴·정지 조작 제공 |
| [W3C Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) | WCAG 해설 | 의미 있는 조작/상태 표시의 인접색 대비 기준과 장식 예외. | 시설 선택 표시·재생 상태·초점 표시를 별도로 측정 |
| [W3C Use of Color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html) | WCAG 해설 | 색상만으로 정보를 전달하지 않는다. | 네온 외에 선택 상태를 전달하는 형태와 의미 구조 |
| [W3C Images of Text](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html) | WCAG 해설 | 텍스트로 전달 가능한 내용을 이미지로만 제공할 때의 기준과 예외. | 영상 속 카피의 읽기 대안 검토. 영상 전체를 이 항목의 실패라고 단정하지 않음 |
| [MDN Container Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries) | 구현 문서 | 컨테이너의 조건에 따라 내부 구성을 바꿀 수 있다. | 카드의 실제 유효 폭 기반 전환 후보. 도입 전에 기존 미디어 쿼리 정리 |
| [MDN VisualViewport](https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport) | 구현 문서 | 확대·키보드로 시각 뷰포트가 레이아웃 뷰포트와 달라질 수 있다. iframe 측정의 한계도 설명한다. | 검토실을 실제 주소창·핀치줌·키보드 시험의 대체로 삼지 않음 |
| [MDN env()](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/env) | 구현 문서 | safe-area 환경값과 대체값을 사용할 수 있다. | 상단 로고·하단 제어의 잘림 검사. 환경값만으로 키보드 대응을 보장하지 않음 |
| [W3C Involving Users](https://www.w3.org/WAI/test-evaluate/involving-users/) | 평가 지침 | 다양한 사용자의 평가를 기준 검수와 결합한다. 사용자 시험만으로 적합 판정을 대신하지 않는다. | 60–70대 읽기·터치 과제와 기술 검수를 함께 수행 |
| [WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/) | 표준 본문 | 성공 기준과 적합 요구사항의 원문. 해설 문서·보완 패턴과 구별한다. | 일부 체크리스트 통과를 사이트 전체 AA 적합으로 표현하지 않음 |
| [W3C Page Structure](https://www.w3.org/WAI/tutorials/page-structure/) | 구현 지침 | 제목·영역·의미 있는 구조를 활용한 탐색. | 모바일에서 길어진 페이지의 구간 제목과 읽기 순서 |
| [W3C Clear Page Structure](https://www.w3.org/WAI/WCAG2/supplemental/patterns/o2p03-page-structure/) | 인지 접근성 보완 | 내용의 관계를 구분선·여백·배경·계층으로 설명한다. 필수 WCAG 성공 기준은 아니다. | 카피를 바꾸지 않고 카드 그룹·구간 경계를 명확히 함 |
| [GOV.UK Browser/Device Design](https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices) | 공식 서비스 설계 지침 | 기기·브라우저별 정보와 기능 보존, 이용자 근거에 따른 지원 범위. 2026년 1월 갱신 확인. | 영국 방문자 통계를 마이롯지에 전용하지 않음. 국내 인앱 환경 추가 검수 |
| [GOV.UK Progressive Enhancement](https://www.gov.uk/service-manual/technology/using-progressive-enhancement) | 공식 프런트엔드 지침 | 핵심 HTML 내용에 CSS/JS 기능을 더하는 구조의 복원력. | 기존 기본 안내 HTML의 존재를 인정하고 핵심 콘텐츠 보존 범위 비교. 정부 정책을 마이롯지 의무로 적용하지 않음 |
| [국립전파연구원 KWCAG 2.2 자료실](https://www.rra.go.kr/ko/reference/kcsList_view.do?nb_seq=5247&nb_type=6) | 국내 표준 배포 안내 | 표준명·번호 KS X OT0003·2022-12-28 제개정일과 2.2 원문 첨부를 공식 배포 페이지에서 확인. | 국내 기준을 확인할 원문 경로 보관. 첨부 원문의 전 조항 검독·국내 적합 판정은 이번 조사에서 수행하지 않음 |

## 현재 코드 대조 메모

- 844×390에서 서비스 카드 이미지 표시 폭 792px인데 sizes는 45vw를 지시한다. 처음 관찰한 currentSrc는 480.webp였고, 이후 큰 화면에서 받은 960.webp를 유지한 표본도 있다. 한 열 규칙과 자원 지시값 불일치 후보다.
- 생활 슬라이드 모바일 이미지가 16:10로 흐르는데 sizes는 1152px 등 과거 전체 배경 기준을 사용한다. 작은 화면의 과다 선택 후보다.
- 첫 영상에는 별도의 모바일 자산이 이미 있다. 새로 세로 영상을 만들기 전에 실제 선택·화면 비율·HTML 대체 카피의 유무를 확인해야 한다.
- 여러 스크립트가 화면을 구성·수정한다. index.html의 defer 선언 순서는 app→cinematic→chairman→scenery→mobile→intro→branding→editorial→localization→mobile-layout이다. 해당 순서와 이벤트 후 변경을 구분해 느린 초기 로드 상태를 검증해야 한다.

완료 기획서는 이 자료의 링크를 해당 구현·검수 항목 가까이에 연결한다. 전체 원문 사본은 저장하지 않는다.
