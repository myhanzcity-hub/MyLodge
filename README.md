# MyLodge · 마이롯지

별장과 파크에서의 휴식, 만남, 새로운 일상을 소개하는 마이롯지 브랜드 사이트입니다. 별도 진입 인트로에서 메인 페이지로 이어지고, 국내 파크와 치앙마이 상세 페이지를 살펴볼 수 있습니다.

**문서 기준일: 2026-10-15** · 담당: 연서흠

- [운영 사이트](https://my-lodge-business.vercel.app/)
- [메인 페이지 바로 보기](https://my-lodge-business.vercel.app/index.html#home)
- [최신 소스 브랜치: `codex/main-pc-handoff-20260930`](https://github.com/IMT-Group-Account/MyLodge_Business/tree/codex/main-pc-handoff-20260930)

최신 구현과 배포 기준 소스는 위 작업 브랜치에 있습니다. 기본 `main` 브랜치에는 이후 작업이 병합되지 않아 내용이 다릅니다. 최근 사이트 배포는 **2026-10-15, 제품 커밋 [`5a3eef8`](https://github.com/IMT-Group-Account/MyLodge_Business/commit/5a3eef80988eeb58f169e131219bbd9da6632df0)**입니다. README 변경과 사이트 배포 이력은 별개로 관리합니다.

## 페이지 구성

| 경로 | 내용 |
|---|---|
| `/` · `intro.html` | 사진 14장면으로 구성한 진입 인트로. 재생·일시정지, 이전·다음, 홈페이지 바로 보기 |
| `index.html#home` | 기존 메인. 별장·시설, 오너 혜택, 컨시어지, 단지 풍경, 국내·해외 파크 소개 |
| `domestic-villas.html` | 국내 파크 소개. 주문진·양양의 조감 이미지, 공간 배치 구상, 대표 생활 장면 |
| `business-valley.html` | 치앙마이 파크 소개, 공간 배치, 생활 장면 6가지, 로컬 음식·공예·문화. 첫 화면과 정보 마지막에 한즈시티 바로가기 |
| `view.html?view=mobile` | 메인 페이지를 모바일 프레임으로 보기 |
| `view.html?view=desktop` | 메인 페이지를 데스크톱 규격으로 보기 |

상단 **화면 보기**에서 모바일·데스크톱·자동 화면을 선택합니다. 상세 페이지도 같은 전환 기능을 제공하며, 자동 모드에서는 화면 너비에 맞게 배치합니다. 한국어·영어 전환, 사진 자동 슬라이드, 모바일 좌우 스와이프를 제공합니다.

이미지는 AI 공간·생활 콘셉트를 포함합니다. 실제 부지·완공 시설·운영 실적과 구분해 안내합니다. 치앙마이 로컬 소개에는 카오소이, 싸이우아, 보쌍 우산, 셀라돈, 란나 문화와 조사 출처를 담았습니다.

## 로컬 실행

**Node.js 20 이상**이 필요합니다. HTML·CSS·JavaScript로 구성하며 외부 npm 패키지 설치 없이 실행합니다.

```powershell
git clone --branch codex/main-pc-handoff-20260930 --single-branch https://github.com/IMT-Group-Account/MyLodge_Business.git MyLodge_Business
cd MyLodge_Business
npm start
```

브라우저에서 **http://127.0.0.1:4173/** 을 엽니다. 기존 메인으로 바로 들어가려면 **http://127.0.0.1:4173/index.html#home** 을 사용합니다. Windows에서는 `START-LOCAL.cmd`로도 실행할 수 있습니다. 웹 폰트와 외부 사이트 방문에는 인터넷 연결이 필요합니다.

기존 작업 폴더를 사용할 때는 먼저 `git status`로 미커밋 변경과 현재 브랜치를 확인합니다. `EADDRINUSE`가 나오면 4173 포트에 기존 미리보기가 실행 중인지 확인합니다.

| 명령 | 용도 |
|---|---|
| `npm start` | 로컬 미리보기 서버 실행 |
| `npm run build` | 공개 허용 파일만 `dist/`에 복사 |
| `npm run check` | 지정된 JavaScript 파일의 문법 확인 |
| `npm run check:workflow` | 가상 운영 모델 검사 |

위 명령 목록은 실행 방법입니다. 전체 페이지의 동작·반응형·접근성 검증 완료를 의미하지 않습니다.

## 주요 파일

| 파일 | 역할 |
|---|---|
| `intro.html`, `arrival-intro.js`, `arrival-intro.css` | 별도 진입 인트로 |
| `index.html`, `app.js`, `styles.css` | 메인 문서와 기본 콘텐츠·동작 |
| `editorial.js`, `editorial.css` | 메인 콘텐츠·시설 이미지·상세 페이지 연결과 표현 |
| `business-valley.html`, `domestic-villas.html` | 치앙마이·국내 상세 페이지 |
| `detail-pages.js`, `detail-pages.css` | 상세 페이지 공통 동작·배치 |
| `branding.js`, `branding.css` | 공통 로고·브랜드 표현 |
| `mobile-layout.js`, `mobile-layout.css` | 모바일 화면·터치 조작 보정 |
| `view.html`, `view-mode.js`, `view-mode.css` | 모바일·데스크톱·자동 보기 전환 |
| `localization.js`, `localization.css` | 한국어·영어 전환 |
| `assets/images/`, `assets/brand/`, `assets/video/` | 이미지·로고·영상 자산 |
| `server.mjs` | 로컬 미리보기와 허용 경로 제공 |
| `scripts/public-assets.mjs`, `scripts/build.mjs` | 공개 파일 목록과 빌드 |
| `vercel.json` | Vercel 빌드·라우팅·브랜치 배포 설정 |

`cinematic.*`, `chairman.*`, `scenery.*`, `intro.*`, `mobile.*`, `planning.css` 등 기존 메인 표현 파일도 함께 사용합니다. 진입 인트로는 `arrival-intro.*`, 메인 안의 기존 영상 표현은 `intro.*`로 구분합니다. `dist/`의 생성물을 직접 수정하지 않습니다.

## 배포

운영 주소는 **https://my-lodge-business.vercel.app/** 입니다. 현재 배포 대상 파일은 `scripts/public-assets.mjs`를 기준으로 하며, **2026-10-15 사이트 배포 기준 235개**입니다.

1. 최신 소스에서 `npm run build`로 공개 파일을 준비합니다.
2. `dist/`만 정적 배포 대상으로 사용합니다.
3. `/`는 `intro.html`로 연결하고, `/index.html`은 기존 메인 페이지로 유지합니다. Vercel의 `vercel.json` 또는 prebuilt 라우팅에도 같은 구성을 반영합니다.
4. 배포 후 운영 경로와 이미지가 준비한 공개 파일과 일치하는지 확인합니다.

현재 작업 브랜치 `codex/main-pc-handoff-20260930`의 Git 자동 배포는 비활성화되어 있습니다. 최근 운영 반영은 공개 파일로 구성한 Vercel prebuilt 배포를 사용했습니다. GitHub push, `main` 병합, 운영 배포를 구분해 진행합니다.

`docs/`, `backups/`, 사업·기획 원자료, 이미지 제작 원본, 로그와 가상 운영 화면은 공개 사이트 배포에서 제외합니다. `workflow.html` 및 `/admin-demo.html`은 로컬 시연용이며 실제 관리자 시스템이 아닙니다.

## 구현 범위와 후속 작업

- 현재는 브랜드·공간·생활 구상을 살펴보는 정적 소개 사이트입니다.
- 실제 상담 접수·저장·발송, 회원 인증, 계약·예약·결제는 연결하지 않았습니다. 기존 상담·운영 코드는 화면 체험용입니다.
- 권리·납입·환불·이용 일수·비용과 실제 서비스 제공 조건은 승인된 자료에 따라 확정해야 합니다.
- 요청된 **메인 페이지의 모바일 파트 분할과 하단 이전·다음 이동은 조사 단계**이며, 2026-10-15 배포에는 포함되지 않았습니다.
- 과거 점검 기록은 해당 시점의 결과입니다. 변경 후 전체 회귀·실기기·접근성 점검 범위는 별도로 기록합니다.

## 인계와 초기 버전

작업 시작 시 [AGENTS.md](https://github.com/IMT-Group-Account/MyLodge_Business/blob/codex/main-pc-handoff-20260930/AGENTS.md)를 확인합니다. [인수인계 기록](https://github.com/IMT-Group-Account/MyLodge_Business/blob/codex/main-pc-handoff-20260930/docs/CODEX-HANDOFF.md), [메인 PC 시작 안내](https://github.com/IMT-Group-Account/MyLodge_Business/blob/codex/main-pc-handoff-20260930/docs/MAIN-PC-START.md), [PM 결정 목록](https://github.com/IMT-Group-Account/MyLodge_Business/blob/codex/main-pc-handoff-20260930/docs/PM-DECISIONS-20260929.md)은 시점별 내부 참고 문서입니다. 문서 날짜와 현행 구현을 함께 확인하고 최신 사용자 결정을 우선합니다.

최초 사이트 틀은 **2026-09-24 v0.1**, 커밋 [`6796bff`](https://github.com/IMT-Group-Account/MyLodge_Business/tree/6796bff8688456629b4dbed6a0c72e14be240198)에 보존되어 있습니다. 현재 사이트는 이후 인트로·반응형·시설·국내·치앙마이 상세 구성으로 확장한 버전입니다.
