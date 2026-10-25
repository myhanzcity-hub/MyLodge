# MyLodegePlatform — integrated release, 2026-10-24

## Current implementation / 현재 구현

- User-approved integration: preserve Hojiakbar's homepage and intro from `feature/hojiakbar-homepage` (b8a4ddd), add 연서흠's reviewed domestic/Chiang Mai/owner subpages.
- Homepage: `/` uses `intro.html`; `/index.html` serves Hojiakbar's unchanged homepage. Sidepages: `/parks/domestic-villas.html`, `/parks/business-valley.html`, `/parks/owners.html`.
- Old root sidepage URLs continue to redirect, preserving query and hash in local wrappers.
- Run `npm run build`; publish `dist/` only. Build excludes documents, backups, recordings, original image files and demo administration.
- Sidepages include director v1.1 / Oct 22 meeting content, USD prices and five payments, service costs, informational share calculator, bilingual content, updated photos/icons and mobile-first layout.
- Member authentication, actual applications, contracts, cash/LC reconciliation, ownership verification, booking and SWAP are not connected.
- The prior `MyLodge-current-20261023.zip` and `RELEASE-20261023.txt` remain preserved in main as historical materials; neither is publicly deployed.
- Production target: https://my-lodge-business.vercel.app/

## Historical homepage README / 아래는 이전 버전의 원문 안내

The following original README is retained for context. Its old branch/release descriptions are historical; the integration notes above take precedence.

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

---

# English Version

**MyLodge** is a brand website introducing vacation homes and park concepts centered on relaxation, social connections, and new ways of living. A separate opening introduction leads into the main website, with detail pages for domestic parks in Korea and Chiang Mai.

**Documentation updated: October 15, 2026** · Maintainer: 연서흠

- [Live website](https://my-lodge-business.vercel.app/)
- [Go directly to the main page](https://my-lodge-business.vercel.app/index.html#home)
- [Latest source branch: `codex/main-pc-handoff-20260930`](https://github.com/IMT-Group-Account/MyLodge_Business/tree/codex/main-pc-handoff-20260930)

The latest implementation and deployment source are on the working branch linked above. The default `main` branch has not received the subsequent implementation changes and contains older site code. The latest site release was deployed on October 15, 2026, from product commit [`5a3eef8`](https://github.com/IMT-Group-Account/MyLodge_Business/commit/5a3eef80988eeb58f169e131219bbd9da6632df0). README updates and site deployments are tracked separately.

## Pages

| Path | Content |
|---|---|
| `/` · `intro.html` | A separate opening introduction with 14 photo scenes, play/pause, previous/next controls, and a link to enter the main website |
| `index.html#home` | The main page: vacation homes and facilities, owner benefits, concierge concepts, an overview of the development, and domestic and overseas parks |
| `domestic-villas.html` | Domestic parks: aerial concept images, spatial layout concepts, and featured lifestyle scenes for Jumunjin and Yangyang |
| `business-valley.html` | Chiang Mai park introduction, spatial layout, six lifestyle scenes, and local food, crafts, and culture; direct HanzCity links at the opening screen and after the informational content |
| `view.html?view=mobile` | The main page inside a mobile preview frame |
| `view.html?view=desktop` | The main page in a desktop layout |

Use **Screen view** in the header to choose mobile, desktop, or automatic mode. The detail pages provide the same controls. Automatic mode adapts the layout to the viewport width. The site also provides Korean/English switching, automatic photo slideshows, and horizontal swipe controls on mobile.

Images include AI-generated spatial and lifestyle concepts. These are identified separately from actual sites, completed facilities, or operational records. The Chiang Mai local discoveries section covers khao soi, sai ua, Bo Sang umbrellas, celadon, and Lanna culture, with research sources.

## Run locally

**Node.js 20 or later** is required. The project uses HTML, CSS, and JavaScript and runs without installing external npm packages.

```powershell
git clone --branch codex/main-pc-handoff-20260930 --single-branch https://github.com/IMT-Group-Account/MyLodge_Business.git MyLodge_Business
cd MyLodge_Business
npm start
```

Open **http://127.0.0.1:4173/** in your browser. To open the main page directly, use **http://127.0.0.1:4173/index.html#home**. On Windows, you can also run `START-LOCAL.cmd`. An internet connection is required for web fonts and external websites.

When using an existing working directory, first run `git status` to check the current branch and any uncommitted changes. If you encounter `EADDRINUSE`, check whether another preview server is already using port 4173.

| Command | Purpose |
|---|---|
| `npm start` | Start the local preview server |
| `npm run build` | Copy only the files approved for public release into `dist/` |
| `npm run check` | Check the syntax of the specified JavaScript files |
| `npm run check:workflow` | Run checks for the simulated operations model |

These commands describe available development procedures. They do not establish that all pages have passed functional, responsive, or accessibility testing.

## Key files

| File | Role |
|---|---|
| `intro.html`, `arrival-intro.js`, `arrival-intro.css` | Separate opening introduction |
| `index.html`, `app.js`, `styles.css` | Main document, base content, and interactions |
| `editorial.js`, `editorial.css` | Main-page content, facility imagery, detail-page links, and presentation |
| `business-valley.html`, `domestic-villas.html` | Chiang Mai and domestic detail pages |
| `detail-pages.js`, `detail-pages.css` | Shared detail-page interactions and layouts |
| `branding.js`, `branding.css` | Shared logo and brand presentation |
| `mobile-layout.js`, `mobile-layout.css` | Mobile layout and touch interaction adjustments |
| `view.html`, `view-mode.js`, `view-mode.css` | Mobile, desktop, and automatic view selection |
| `localization.js`, `localization.css` | Korean/English switching |
| `assets/images/`, `assets/brand/`, `assets/video/` | Images, logos, and video assets |
| `server.mjs` | Local preview server and allowed routes |
| `scripts/public-assets.mjs`, `scripts/build.mjs` | Public asset manifest and build process |
| `vercel.json` | Vercel build, routing, and branch deployment configuration |

Existing presentation files such as `cinematic.*`, `chairman.*`, `scenery.*`, `intro.*`, `mobile.*`, and `planning.css` are also used. `arrival-intro.*` controls the separate opening introduction; `intro.*` controls the existing video presentation within the main website. Do not edit generated files in `dist/` directly.

## Deployment

The live website is **https://my-lodge-business.vercel.app/**. The deployment inventory is defined in `scripts/public-assets.mjs`. The October 15, 2026 site release contains **235 public files**.

1. Run `npm run build` from the latest source to prepare the public files.
2. Use only `dist/` as the static deployment payload.
3. Route `/` to `intro.html` and keep `/index.html` serving the main page. Preserve this routing in Vercel's `vercel.json` or the prebuilt deployment configuration.
4. After deployment, verify that the live routes and images match the prepared public files.

Automatic Git deployments are disabled for the working branch `codex/main-pc-handoff-20260930`. Recent production updates have used Vercel prebuilt deployments containing the public files. Treat GitHub pushes, merges into `main`, and production deployments as separate operations.

Exclude `docs/`, `backups/`, business and planning source materials, original image-generation files, logs, and simulated operations screens from the public website payload. `workflow.html` and `/admin-demo.html` are local demonstrations, not a production administration system.

## Implementation scope and remaining work

- The current website is a static presentation of the brand, spaces, and lifestyle concepts.
- Live inquiry submission, storage and delivery, member authentication, contracts, bookings, and payments are not connected. Existing inquiry and operations code is for interface demonstrations.
- Ownership rights, payment schedules, refunds, usage days, fees, and actual service terms must be finalized using approved information.
- The requested mobile section paging and bottom previous/next navigation for the main page are still at the research stage and are not included in the October 15, 2026 release.
- Historical verification records apply to the versions reviewed at the time. Record the scope of regression, physical-device, and accessibility checks separately after changes.

## Handoff and initial version

Start by reading [AGENTS.md](https://github.com/IMT-Group-Account/MyLodge_Business/blob/codex/main-pc-handoff-20260930/AGENTS.md). The [handoff log](https://github.com/IMT-Group-Account/MyLodge_Business/blob/codex/main-pc-handoff-20260930/docs/CODEX-HANDOFF.md), [main-PC setup guide](https://github.com/IMT-Group-Account/MyLodge_Business/blob/codex/main-pc-handoff-20260930/docs/MAIN-PC-START.md), and [pending PM decisions](https://github.com/IMT-Group-Account/MyLodge_Business/blob/codex/main-pc-handoff-20260930/docs/PM-DECISIONS-20260929.md) are internal reference documents written at different stages. Check their dates against the current implementation and prioritize the latest user decisions.

The original site scaffold, **v0.1 from September 24, 2026**, is preserved at commit [`6796bff`](https://github.com/IMT-Group-Account/MyLodge_Business/tree/6796bff8688456629b4dbed6a0c72e14be240198). The current site has since expanded to include the opening introduction, responsive layouts, facility content, and domestic and Chiang Mai detail pages.
