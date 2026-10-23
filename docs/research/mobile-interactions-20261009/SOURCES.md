# 모바일 조작 개선 조사 — 공식 자료

확인일: 2026-10-09. 자료 내용은 짧게 요약하고 마이롯지 적용점은 별도로 제안한다. WCAG Understanding은 설명 자료, APG는 참조 패턴이다. 이번 조사는 접근성 인증이나 전체 적합성 판정이 아니다.

| 번호 | 자료 | 확인한 요지와 적용점 |
|---|---|---|
| S01 | [W3C Pointer Gestures](https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures.html) | 경로 기반 조작의 단일 포인터 대안 검토. 사진명 선택으로 정밀한 밀기에 의존하지 않게 한다 |
| S02 | [W3C Dragging Movements](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements) | 끌어 이동하는 동작과 스와이프를 구분. 피드백 구현을 바꿀 때 적용 범위를 재판단한다 |
| S03 | [W3C Pointer Cancellation](https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation) | 누르기 시작과 손을 놓는 실행을 구별. 취소·방향 이탈·다중 입력을 보호한다 |
| S04 | [MDN touch-action](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/touch-action) | 기본 제스처 정책과 조상 요소 영향. 갤러리 CSS 충돌 및 핀치줌 실기기 검수 근거 |
| S05 | [MDN Pointer events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events) | 포인터 종류·캡처·취소 흐름. 터치만 가정한 분기를 검토한다 |
| S06 | [MDN setPointerCapture](https://developer.mozilla.org/en-US/docs/Web/API/Element/setPointerCapture) | 캡처 대상과 해제 동작. 취소 후 끌기 상태 정리 검토 |
| S07 | [MDN pointercancel](https://developer.mozilla.org/en-US/docs/Web/API/Element/pointercancel_event) | 브라우저 제스처와 입력 취소. 앱 전환·회전·핀치 상황을 실제 기기에서 확인한다 |
| S08 | [MDN contextmenu](https://developer.mozilla.org/en-US/docs/Web/API/Element/contextmenu_event) | 문맥 메뉴 입력. 사진 길게 누르기 기능을 전역 차단하지 않는다 |
| S09 | [MDN selectionchange](https://developer.mozilla.org/en-US/docs/Web/API/Document/selectionchange_event) | 선택 변화 관찰. 설명 선택 중 슬라이드 이동을 피하는 보완 후보 |
| S10 | [web.dev Carousel Best Practices](https://web.dev/articles/carousel-best-practices) | 내용·조작·레이아웃을 함께 설계. 자동 재생을 유지하되 명확한 통제 수단을 제공한다 |
| S11 | [W3C APG Carousel](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/) | 초점 진입 시 회전 중단, 버튼 이름, 자동·수동 알림 구분. 참조 패턴으로 사용한다 |
| S12 | [W3C Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html) | 움직이는 콘텐츠 제어 수단. 긴 모바일 장면에서도 정지에 접근하게 한다 |
| S13 | [W3C APG Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) | 탭 키보드·선택 패턴. 2열 시설 배치와 프로그램 역할을 함께 검토한다 |
| S14 | [W3C Disclosure Navigation](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/) | 일반 사이트 탐색은 앱 메뉴와 구별. 모바일 보조기술 직접 검수 필요 |
| S15 | [W3C Label in Name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html) | 보이는 이름과 접근성 이름 일치. 언어·정지 버튼·장면 선택 이름 검토 |
| S16 | [W3C Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html) | 상태 전달의 문맥 검토. 수동 선택 결과만 필요한 만큼 알린다 |
| S17 | [W3C Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) | AA24px 기준과 예외. 프로젝트48px 목표와 표준 최소치를 구분한다 |
| S18 | [W3C Concurrent Input Mechanisms](https://www.w3.org/WAI/WCAG22/Understanding/concurrent-input-mechanisms.html) | 여러 입력 병행의 AAA 기준. 태블릿·키보드·터치 사용을 막지 않는 방향 |
| S19 | [MDN any-pointer](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/any-pointer) | 입력 능력 힌트. 폭과 입력 능력을 동일하게 취급하지 않는다 |
| S20 | [MDN overscroll-behavior](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/overscroll-behavior) | 스크롤 연결과 브라우저 제스처 영향. 전역 차단을 기본 해결책으로 쓰지 않는다 |
| S21 | [MDN IntersectionObserver options](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver) | 임계값 교차의 알림과 root 영역. 재생 조건을 실제 읽기 영역과 맞춘다 |
| S22 | [MDN isIntersecting](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/isIntersecting) | 교차 여부와 비율을 구분. threshold 지정만으로25% 노출 조건이 되는 것은 아님 |
| S23 | [MDN Page Visibility](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API) | 문서 숨김과 복귀. 재생 중단 이유와 제스처 정리를 분리한다 |
| S24 | [MDN pageshow](https://developer.mozilla.org/en-US/docs/Web/API/Window/pageshow_event) | 최초 표시와 캐시 복귀 구분. 복귀 상태를 무조건 초기화하지 않는다 |
| S25 | [web.dev bfcache](https://web.dev/articles/bfcache) | 페이지 상태 복원과 캐시 조건. 중복 초기화·중복 타이머를 피한다 |
| S26 | [MDN scrollRestoration](https://developer.mozilla.org/en-US/docs/Web/API/History/scrollRestoration) | 자동·수동 복원 정책. 복원 구현 없이 manual로 바꾸지 않는다 |
| S27 | [MDN VisualViewport](https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport) | 시각 영역과 레이아웃 영역의 차이. iframe 확대와 실제 휴대폰 확대를 구별한다 |
| S28 | [MDN overflow-anchor](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/overflow-anchor) | 스크롤 기준점 동작과 적용 제외. 강제 위치 보정의 만능 해결책으로 쓰지 않는다 |
| S29 | [W3C Orientation](https://www.w3.org/WAI/WCAG22/Understanding/orientation.html) | 방향 제한과 기기 설정을 구분. 가로 화면에서도 조작을 유지한다 |
| S30 | [W3C Focus Not Obscured](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html) | 고정 헤더·패널과 초점 가림. 추가 고정 조작부 검수 기준 |
| S31 | [MDN image decode](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decode) | 표시 준비와 실패 처리. 사진·캡션을 같은 선택 결과로 맞춘다 |
| S32 | [MDN image complete](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/complete) | complete만으로 성공 판단 불가. 실패·정상 준비를 구분한다 |
| S33 | [MDN naturalWidth](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/naturalWidth) | 이미지 고유 크기 확인. 로드 상태 기록에 사용하되 원본 파일 픽셀과 단순 동일시하지 않는다 |
| S34 | [web.dev image lazy loading](https://web.dev/articles/browser-level-image-lazy-loading) | 화면 밖 이미지의 준비 시점. 다음 장면만 준비하는 비교안 검토 |
| S35 | [web.dev Focus](https://web.dev/learn/css/focus) | 조작 초점의 가시성. 새 버튼·선택 UI에 명확한 초점 표시 |
| S36 | [web.dev Design Accessibility](https://web.dev/learn/design/accessibility) | 입력 순서와 동작 줄이기. 시각 배치와 읽기·조작 순서 일치 |
| S37 | [Samsung Dark Mode](https://developer.samsung.com/browser/blog/en/2020/12/15/dark-mode-in-samsung-internet) | 2020년 기술 설명. 작은 로고·이미지 분류와 배경 변환의 한계. 당시 설정을 현재 버전의 보장으로 쓰지 않음 |
| S38 | [Chrome Auto Dark Theme](https://developer.chrome.com/blog/auto-dark-theme) | 2021년 실험 설명. only light 정책의 배경 참고이며 현재 모든 Android 브라우저의 동일 동작을 보장하지 않음 |
| S39 | [MDN color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/color-scheme) | 브라우저 기본 UI와 작성자 테마 지원을 구분. 기존 로고의 밝은 표면 정책 확인 |
| S40 | [MDN text-size-adjust](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-size-adjust) | 모바일 텍스트 확대 보정. 검토실 CSS 확대·브라우저 보정·사용자 확대를 구분 |

## 적용 시 주의할 구분

- 스와이프 감지와 화면 요소를 손가락으로 끌어 이동시키는 동작은 동일하지 않다.
- 정지 버튼이 있다고 해서 확대된 화면에서 쉽게 누를 수 있다는 뜻은 아니다.
- `aria-live`는 모든 자동 변경을 읽게 하는 용도로 사용하지 않는다.
- 스크롤바 없는 검토실·자동 맞춤·CSS 글자 확대는 실제 기기와 결과가 다를 수 있다.
- 이번 출처 검토와 로컬 관찰로 법적 준수·접근성 인증·실제 체류 개선률을 확정하지 않는다.
