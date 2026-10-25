# 마이롯지 — Codex 작업 시작 지침

## 처음 열었을 때

1. `docs/CODEX-HANDOFF.md`의 **최신 GitHub 인계**를 먼저 읽는다.
2. `docs/MAIN-PC-START.md`, `docs/FINAL-CHECK-20260929.md`, `docs/PM-DECISIONS-20260929.md`를 읽는다. 디자인 결정은 `docs/BENCHMARK-20260929.md`를 참고한다.
3. `git status --short --branch`와 최근 커밋을 확인한다. 사용자 변경을 reset/clean/덮어쓰기로 지우지 않는다.
4. 인계 기준 브랜치는 `codex/main-pc-handoff-20260930`. main만 받으면 9월 29일 작업이 없을 수 있다.
5. 현재 사용자의 새 지시를 우선 적용한다. 과거 기록의 미완료 항목을 일괄 구현하라는 승인으로 해석하지 않는다.

## 프로젝트

- For all MyLodge homepage edits, read and follow `MYLODGE_CONTENT_RULES.md`. Verify English and Korean line counts at desktop, tablet, and mobile before finishing.

- 프레임워크 없는 HTML/CSS/JavaScript. Node.js 20 이상, 외부 npm 패키지 설치 불필요.
- `npm start` → `http://127.0.0.1:4173/`. `START-LOCAL.cmd`도 사용 가능.
- `npm run build` → `dist/` 공개 파일 22개. 생성물 직접 편집 금지.
- 상담: `consultation.js`, `consultation.css`, `consultation-refinements.css`.
- 소개·사진 덱·서비스 덱·모션: `app.js`, `styles.css`.
- 가상 운영: `workflow.html`, `workflow*.js/css`. 실제 관리자 시스템이 아니다.
- 확인을 요청받으면 `npm run check`, `npm run check:workflow`, 빌드와 브라우저 점검을 사용한다. 이전 검사 결과를 현재 재실행 결과처럼 보고하지 않는다.

## 유지해야 하는 사용자 결정

- 실제 서버·DB·상담 접수/저장·회원 인증·발송·예약·결제는 **PM 협의 전 보류**.
- 6단계 납입 조건은 미정. 교환/알림/렌트·공동 모집/청소·룸서비스는 준비 중 안내.
- 396만 원·최초 5%는 검토 기준. 이용 일수·소유권·환불·수익·실제 영업시간 등을 만들어 확정하지 않는다.
- 상담은 화면 체험. 예시 정보만 사용하며 실제 전송/저장 성공으로 표현하지 않는다.
- 소개서 다운로드를 추가하지 않는다. 원본 기획·통화 자료는 내부 참고용.
- 자연스러운 그린 계열 디자인, 수동 카드 덱, 네이티브 스크롤, 동작 줄이기를 유지한다. 애니메이션이 입력과 안내문 읽기를 가리지 않게 한다.

## Git / 배포 / 자료

- main push는 기존 운영 배포와 연결되어 있다. 업로드와 운영 배포를 구분하고 main 병합·배포는 별도 지시를 따른다. 강제 push 금지.
- 인계 브랜치 자동 배포는 `vercel.json`에서 비활성화했다. 새 브랜치에서는 다시 배포 범위를 확인한다.
- 기존 `.vscode/settings.json`에는 커밋 후 push 설정이 있다. 로컬 저장만 요청된 경우 자동 push를 유발하지 않는다.
- `마이롯지프로젝트 공용 문서/`, `docs/`, `backups/`, 가상 운영 파일은 공개 배포하지 않는다. 공개 대상은 `dist/`뿐이다.
- 최신 화면 기록은 `docs/review/`. 과거 기록의 `C:/...` 경로와 상위 `review/`는 이전 PC 경로이며 하드코딩하지 않는다.
- 변경 후 중요한 결정·남은 작업·확인 범위를 `docs/CODEX-HANDOFF.md` 첫머리에 기록한다.
