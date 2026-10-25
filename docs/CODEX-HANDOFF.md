## 2026-10-25 Sidepage production integration

- Based on colleague main2535702. Preserve index.html, homepage-deck assets, all main/intro source and Vercel configuration exactly. Integrate locally reviewed owner content/layout, shared side styling, icon/pagination/navigation fixes only. Append4 side assets without removing homepage entries. Original4206 review remains intact.

## 2026-10-25 Final local sidepage QA

- Checked36 chapters at6 viewport widths (216 states): no detected overflow, clipped text, grid/flex overlap, page JS errors.84 image URLs and44 link targets pass.34 requirement checks adapted to explicit copy changes/FAQ removal pass.16 pricing combinations and6 panorama/history flows plus3 absent-chapter fallbacks pass. Syntax/build504/workflow9/diff whitespace pass.
- Fix found during final reading: service rate note referring to amounts now follows the amount tiles rather than preceding them. Rechecked at320/390/768/1440.
- Report: reports/20261025_전체최종점검/점검결과.txt (workspace parent). Local4206 only, no push/deploy; main and intro preserved. Real device and backend service integrations not claimed.

## 2026-10-25 Chiang Mai overview composition (local)

- Move overview heading/cards before related destination links. Hide duplicate inline directory in deck mode; full chapter menu remains available. Establish consistent card grid, padding and compact icon/text rows on phones. Fix four scene-link targets to relevant existing sections. Preserve all chapters, content and source directory fallback. No main/intro or deployment changes.

## 2026-10-25 Footer button contrast (local)

- Footer text-color selector overrode filled guide-link foreground, causing dark text on charcoal buttons. Scope explicit ivory foreground and matching hover to footer guide links across three sidepages; version shared stylesheet. Preserve other footer text. No main/intro changes or deployment.

## 2026-10-25 Remove customer-facing gusang terminology (local)

- Rename destination cards to park exploration links; remove gusang wording across all three sidepages, including metadata, SWAP links, directory labels and service descriptions. Preserve preparation/planning status and all destinations/URLs. Local only; main/intro and deployment untouched.

## 2026-10-25 Owner differentiation copy (local)

- Reframe stay-with-confidence as MyLodge differences, not pre-arrival customer checks. Preserve six subheadings/icons; replace bodies with service commitments on search effort, transparent fees, cleaning, responsive concierge, accurate facility information, and prompt environmental maintenance. Preserve preparation-state and image disclosures, prices and terms. Chapter title updated accordingly.
- Local review only; no main/intro edits, push or deploy.

## 2026-10-25 Customer-facing copy correction (local)

- Remove director-plan/source-date wording from service pricing; retain exact amounts, units and unconfirmed status. Replace editorial comparison instructions with customer guidance. Use stable service-rate-title ID in editorial adapter instead of matching heading text.
- Customer-facing preparation/image notices simplified without changing availability. Three sidepages scanned for internal source references. No main/intro changes, commit, push or deployment.

## 2026-10-25 Local photo-over-copy grid fix

- User screenshot reproduced at768/844/919/1024: aspect-ratio figure stretched to the text column height, which transferred an oversized width across the grid gap. Page-level horizontal overflow checks did not catch sibling overlap.
- Owner how-photo now width/max-width100%, self-sized aspect ratio, align-start; image fills its own bounded frame. Reset legacy grid-row/column placements on fact children.
- Rechecked216 chapter/width combinations across domestic11/ChiangMai13/owners12 at320/390/768/919/1024/1440: no sibling grid/flex overlap.919 loaded photo394px remains within its column instead of474px. Image decode/actual screenshot verified.
- Local4206 only. No commit/push/deploy. Main/intro untouched. Report reports/20261025_사진설명_겹침수정 (actual folder uses Korean 사진설명).

## 2026-10-25 Local panorama-to-owner pagination regression fix

- User reported panorama popup image-information link revealing the whole owner page. Fresh load worked; reproduced identical failure by serving pre-FAQ-removal13-chapter owners-deck against current12-chapter document (no nav, all12 sections visible).
- Both owner and regional chapter engines now filter missing nodes/empty chapters instead of returning and disabling the whole deck. Owners removes a retired FAQ left in cached HTML. Version the deck script URLs on all3 sidepages to prevent stale manifest reuse.
- Preserve IDs when owner-info-hub replaces a note with a guide link; fixes missing panorama aria-describedby target. Version that guide script in domestic/overseas pages.
- Pass6 panorama flows at390/1024 across Jumunjin/Yangyang/ChiangMai with close/Escape/owner10-of12/next/back/forward;3 absent-chapter cases retain pagination; modal description references pass. Syntax/build504 pass.
- Local only4206; no commit/push/deploy. Report reports/20261025_페이지네이션_전경이동수정.

## 2026-10-25 Remove owner FAQ chapter locally

- User explicitly requested deleting the pictured owner-faq section. Remove full section and chapter entry; owner guide now12 chapters. Old FAQ hash opens price guide. No push/deploy.

## 2026-10-25 Local animation containment and resize correction

- User reported broken/out-of-bounds reused media. Whole-page horizontal checks alone missed nested diagram gutters and stale bridge geometry.
- Remove doubled standalone/owner gutters:390 viewport embedded page grows231px to327px. Use full outer row through1200px; avoid nested split/stack in tablet widths. Guard iframe height against hidden chapters and remeasure on return/resize.
- Re-anchor completed iframe bridge after layout/resize; restore visible stroke. Keep source shared experiment/main unchanged. Add owner-only containment for image transitions/3D stage and legible skip-link focus colors.
- Verified six viewport transitions320/390/768/1024/1440 and chapter return with no inner/outer overflow;16 price cases,52 chapter states/normal-motion replay/keyboard tabs/package previews pass. Actual viewport screenshots distinguish fixed-header/fullpage-capture artifacts.
- All changes local4206 only; no commit/push/deploy. Report reports/20261025_오너_애니메이션배치검수.

## 2026-10-25 Extend editorial style across owner guide locally

- User requested similar treatment for remaining owner chapters after main component reuse.
- Add owner-editorial.js/css scoped to owners only: gifts/SWAP/rental photographic spreads with numbered rules; service planning rates enlarged with original dated/unconfirmed notice; confidence/FAQ/steps use editorial rules; destination links gain existing photos and candidate-state disclosure. Overview uses fine-rule index.
- Existing manuscript nodes moved rather than rewritten. Original rates2500/8000/5000 and conditional note retained. Main, intro, domestic/overseas, chapter engine and deployment config unchanged.
- Checks:35 text/condition checks,52 chapter states with image decoding, keyboard/normal-motion diagram replay; existing16 price interaction checks remain. One missing destination-photo path corrected. Syntax/public504 build pass.
- Local preview4206/parks/owners.html#owner-experiences. No commit/push/deploy. Report reports/20261025_오너_전체에디토리얼.

## 2026-10-25 Local owner chapters reuse homepage components

- User requested replacing overlapping owner share/pricing/rights content with the exact homepage examples. Local review only.
- Owner chapter3 now uses homepage ownership-how photo/facts and120-share-to-villa iframe; chapter5 uses five rights and annual1-night2-day x3 visual; chapter7 uses actual Deluxe/Suite photos/tabs/package toggle/price breakdown and TV/fireplace previews.
- Removed prior summary cards, dropdown calculator and repeated price table. Unique contract/extra-cost/payment/regional/specification/certification details preserved in labeled disclosures. User instruction now explicitly adopts homepage120-share presentation in owner guide.
- Homepage/intro and domestic/overseas files unchanged. New owner-main-content.css/js are isolated copies/adapters; existing chapter navigation13 preserved.
- Checked35 text requirements,16 price combinations across320/390/768/1440,52 chapter states, keyboard tabs, normal-motion iframe replay and package previews. Old4205 Python server lacks MJS MIME; use new502-public-file preview at http://127.0.0.1:4206/parks/owners.html#price-guide.
- Report/source mapping: reports/20261025_오너_메인콘텐츠이식. No commit/push/deploy.

## 2026-10-25 Homepage deck production release

- User approved Vercel publication of the locally reviewed eight-page homepage. Integrated latest remote main a57ca99 sidepage/quick-link changes; runtime files do not conflict. Preserved both handoff records.
- Publish homepage-deck.js/css, index references and public manifest. Root black intro, original pricing/gallery runtime and latest sidepages remain preserved. Production target myhanzcity-hub/myhanzcity-hub; canonical and legacy redirect domains.
- Prior local QA: 64 responsive page states, bilingual navigation, Suite and facility controls, build 502. Release checks and live verification follow.

## 2026-10-25 Local eight-page homepage preview

- User authorized local implementation only. Separate worktree MyLodge-local-deck-20261025 based on latest canonical MyLodge main dc2cf5c; original checkout preserved. No commit, push or deployment.
- Added homepage-deck.js/css and registered assets in index/public manifest. Reuses existing chapter navigation pattern and original content nodes: hero, Why, shared ownership, pricing, owner life, facilities, concierge, destinations. Intro and homepage content scripts unchanged.
- Fixed bottom previous/count/contents/next, header anchors, history, keyboard arrows, reduced-motion and guarded touch navigation. Native vertical reading retained; existing gallery and pricing controls preserved.
- Syntax/check and workflow 9/9 pass; build 502 public files. Browser 64 language/width/page states at 320/390/768/1440 show no horizontal overflow; tested header navigation, back, keyboard, contents, Suite selection and facility tab. Final owner-heading check <=2 lines across all widths/languages. Long contractual/planning disclosures and existing option help retained without clipping; physical touch swipe not tested.
- Local server http://127.0.0.1:4173/ retains black villa intro; /index.html opens deck. Evidence docs/review/homepage-deck-20261025/.
## 2026-10-25 Approved reading refinements release

- User approved GitHub/Vercel publication of local reading improvements1-3 and Quick links label.
- Remote main dc2cf5c checked; no newer colleague commits. Side annual-use/concierge copy, larger links and progressive price guidance only; financial conditions/tables/calculator and chairman wording preserved.
- view-mode.js differs only in Korean/English picker label (Quick links). Homepage files and procedural intro are unchanged; deployment configuration unchanged.
- Prior local36 requirement checks,111 mobile chapter/icon states,40 disclosures,4 calculator cases passed. Release syntax/build500 passed.

## 2026-10-25 Local reading refinements after mobile audit

- User authorized follow-ups1-3 locally only. No commit/push/deploy.
- Plain Korean annual-use label and concierge copy on sidepages. Price chapter shows1-share scope then calculator; existing extra-cost/payment/regional conditions moved intact to a labeled disclosure. Tables, prices, calculator and chairman mandated copy retained.
- Side links13-14px with44-48px targets. Main, intro and Vercel configuration unchanged.
- Validation:36 rendered requirement checks,111 mobile chapter/icon states,40 disclosure interactions,4 calculator cases pass. Parallel local loading initially failed; standalone reruns pass. Report: reports/20261025_가독성보완_로컬검토.
- Review http://127.0.0.1:4205/parks/owners.html#price-guide.

## 2026-10-25 Approved sidepage design release

- User approved GitHub and Vercel publication of the reviewed4205 design. Remote main ea6923a checked immediately before release; no newer colleague changes.
- Publish only sidepage visual alignment, official logo reuse, three stylesheet references and public asset registration. Homepage, intro, screen-view picker, Vercel configuration, manuscript and chapter engines verified unchanged.
- Previous12-layout148-state navigation review passed; release syntax and500-file build pass. Production verification follows in the external report.

## 2026-10-25 Local sidepage design alignment

- User requested matching all sidepage designs to the current homepage. Local review only, no commit/push/deploy yet.
- Add parks/main-aligned.css after existing styles on domestic/ChiangMai/owners; reuse root tokens and supplied brand artwork via parks/branding.js. Ivory/charcoal/taupe, editorial typography, light cards/tables/navigation, monochrome existing icons, photo-backed dark heroes.
- Manuscript, prices, images and chapter JS remain unchanged; homepage/intro preserved. Build500 public files; checked12 layouts148 chapter states,3 legacy destinations,4 calculator cases, screenshots.
- Review server http://127.0.0.1:4205/parks/owners.html. Report outside checkout: reports/20261025_사이드_메인스타일/결과.txt.

## 2026-10-25 Screen view becomes page shortcuts

- User requested replacing mobile/desktop/auto with Intro, Main, Domestic, Overseas, Owner benefits in the existing screen-view picker.
- Root-aware URLs derive from script location; old frame/view parameters are omitted; EN menu labels follow the document language. Existing side manuscript continues forcing Korean as before.
- Main/intro content and side designs unchanged. Verified8 language/viewport combinations320/390/768/1440 and10 real navigation clicks390/1440; build499 and syntax passed.

## 2026-10-25 Intro skip hit target fix

- Live skip inherited pointer-events:none from intro-top; pointer hits reached intro-canvas instead of skip.
- Restore pointer-events:auto only on intro-skip. Preserve all homepage, scene, sidepage and deployment configuration files.
- Verified real pointer clicks at320/390/430/1440; mobile taps during transformation, ready and fallback; keyboard Enter; normal coin entry. Query/hash preserved. Syntax/build499 and workflow9/9 passed.

## 2026-10-25 Reviewed sidepages release to MyLodge

- User authorized publishing the reviewed 4203 sidepage integration to MyLodge and its connected Vercel project.
- Checked remote main56edaa8 immediately before preparing a separate release checkout; no subsequent colleague commits found at preparation time.
- Restore unified icons39 /107 references, owner13 chapters, domestic11/ChiangMai13 and manuscript v2. Preserve colleague homepage/intro and deployment config byte-for-byte.
- Preserve all453 current public assets, add46 side assets: build499. Homepage owner-info-hub script is not attached; main content is unchanged.
- Verified local148 navigation states,36 rendered requirement checks,38 details interactions,4 price cases,3 legacy redirects. Prior mobile edit candidates7 remain follow-up.
- Known inherited issues: main1/120 copy needs alignment; intro external stairs remain; English/physical-device QA and source product data remain pending.
- Publish status and live deployment verification are recorded outside source in reports/20261025_MyLodge_사이드반영배포. No project connection/domain change is part of this commit.

## 2026-10-25 Local sidepage-only integration review

- Base MyLodge main56edaa8. Separate archive copy, no Git metadata. No push/deploy/settings changes.
- Current colleague homepage and villa intro retained byte-for-byte. No owner-info-hub script attached to homepage.
- Side manuscript v2, owner13 chapters, unified39 icons/107 references, conditions in owner guide, domestic11/ChiangMai13 integrated.
- Existing shared navigation/dock removal retained; chapter engine adapted to domestic11 and dynamic contents label.
- Keep all23 colleague-only public assets plus46 side assets. Public manifest addition is packaging, not deployment configuration.
- Korean reviewed manuscript. English translation still pending. Earlier mobile edit candidates7 are not implemented here.
- QA results are recorded separately in reports/20261025_MyLodge_사이드통합검토 outside this copy.

## 2026-10-25 Production root routing correction

- First production deployment f5489de reached Ready at 8YHJ6J6tEjYTy3r85zgjTsjxA5Dt. Domain served all new assets, but root still resolved index.html despite rewrite. Replaced root rewrite with a temporary redirect to intro.html so first visits reliably open the requested black villa intro. Explicit index.html remains homepage entry.

## 2026-10-25 Requested myhanzcity-hub production deployment

- User authorized deployment to https://myhanzcity-hub.vercel.app/. Verified Vercel project myhanzcity-hub/myhanzcity-hub connects to myhanzcity-hub/MyLodge. It previously tracked feature/hojiakbar-homepage at 4cb4e40, newer than main.
- Merged this latest homepage history into the integration branch. Kept both public asset lists and SVG/MJS server MIME support; combined handoff records. Latest homepage files match 4cb4e40; intro and parks match c2479b3. Syntax and build pass, 453 public files. No homepage copy/layout authored in this merge.
- Set Vercel production tracking to main. Production deployment verification pending below.

## 2026-10-25 Integrate MyLodge_Business into MyLodge

- Target: myhanzcity-hub/MyLodge main at b70c86bf7f10b24d6229fccb29d24bc19f763f81. Source: IMT-Group-Account/MyLodge_Business main at c2479b3b1f1695d54d583f18ccb526e3b0d0f5cd.
- Prepared a conflict-free history-preserving merge on codex/integrate-mylodge-20261025 in a separate worktree. Source working directory and both remote main branches are unchanged.
- Source site files are preserved; target index.html, app.js and styles.css match exactly. Root opens the black villa/pool 3D intro, then enters index.html. Domestic, Chiang Mai and owner pages remain included.
- Disabled automatic deployment for this integration branch. Production main merge/deployment remains pending separate instruction.
- Validation: syntax check passed, workflow 9/9 passed, public build 430 files passed. Browser visibly rendered the requested villa/pool intro and touch began transformation. Full coin-to-home transition and mobile browser QA remain pending.
- User invited IMT-Group-Account with write permission; invitation accepted and integration branch uploaded to myhanzcity-hub/MyLodge. Remote merge commit 7d61440 matched local. Target main remains b70c86b. No credentials stored in project.

## 2026-10-24 Restore visible primary desktop navigation

- User requested the visible top Home/Korea/Abroad/Owner navigation from their reference. The prior 1024px breakpoint collapsed this into MENU at 943px. Updated shared park theme to retain primary navigation at 800px and wider, with compact 800-1100px sizing; smaller phones retain the existing menu.
- Chapter navigation and removed mobile destination dock are unchanged. Applies consistently to domestic, Chiang Mai and owner pages.

## 2026-10-24 Domestic chapter layout refinement

- Preserved first-screen hero and existing copy/images. Chapter 2 now begins with overview heading/cards, followed by park introductions and a compact expandable image/planning notice. Duplicate in-page directory is visually removed in deck mode; bottom contents and header navigation remain.
- Chapter 10 now begins with its heading and two balanced park cards. Related links are consolidated after the content, with duplicate destinations removed. Former top jump strip is hidden after its unique links are moved into the related links.
- Scoped domestic chapter spacing, card padding, heading rhythm and mobile single-column reading; Chiang Mai styling unchanged.
- Verified 1440x900 chapter 10 screenshot and 390x844 chapters 2/10 screenshots, title-first order, no horizontal overflow and five unique related destinations. First-screen HTML unchanged. Physical-device swipe not tested. Target remains imtg-roup/my-lodge-business.

## 2026-10-24 Domestic thirteen-chapter deck and mobile dock removal

- Reused the Chiang Mai deck for domestic-villas.html with thirteen chapters. Original HTML content, first-screen hero, images, copy and calculator preserved; only opt-in and asset references added. Directory/overview/park selector share chapter 2; amount preview/multiple shares share chapter 12.
- Removed the mobile fixed Korea/Abroad/Owner guide dock from the shared mobile layout, including owner pages; removed its reserved bottom padding. Existing header menus remain.
- Verified original domestic HTML preservation; all 13 next transitions, contents, Korean/English and existing calculator display; 390x844 no horizontal overflow and no dock; owners bottom padding 0 and no dock; Chiang Mai chapter 13 unchanged. Syntax/check, workflow 9/9 and public build passed. Physical-device swipe not tested.
- Deployment target remains IMTGroup/my-lodge-business through origin IMT-Group-Account/MyLodge_Business main. Previous deployment 63008ad was Ready and target production JS/CSS/HTML matched local with line endings normalized.

## 2026-10-24 Correct deployment target: IMTGroup my-lodge-business

- Found the requested project in Chrome profile donationschool.com, signed in as imt-group-account. The City profile showed 404. Always use the matching profile for this project.
- Target Vercel project is https://vercel.com/imtg-roup/my-lodge-business, production domain my-lodge-business.vercel.app, connected repository IMT-Group-Account/MyLodge_Business, production branch main.
- Corrected origin to that repository; retained former myhanzcity-hub repository as previous-origin. Scoped Git credentials to the already authenticated IMT-Group-Account via gh and repository author to its verified noreply identity. VS Code push/sync now uses the intended origin.
- Merged original origin/main README-only changes without discarding content or rewriting history. The existing local product changes, including 13 chapters and preserved first-page design, are included. Verify target deployment and production page after push.

## 2026-10-24 Repository-specific Git identity and deployment diagnosis

- Browser confirms the signed-in user owns myhanzcity-hub/MyLodegePlatform and Vercel myhanzcity-hub/my-lodege-platform. Requested imtg-roup/my-lodge-business remains inaccessible in this session; it is not the currently connected project.
- Latest Git deployment was blocked because PC-wide Git author kenitoa is not the Hobby project owner. Set this repository only to the signed-in owner myhanzcity-hub, using verified public GitHub ID 346131387 and its noreply email. Global configuration and historical commits are unchanged.
- main push triggered Production deployment 9Uop7NiyB9KBnQcn2uC7mruiAu2c from c279dff; browser confirmed Ready. Live my-lodege-platform.vercel.app renders chapter 13/13. Deployed deck JS/CSS and HTML match local content after line-ending normalization; root, index, domestic and owner routes return 200. Requested imtg-roup project remains unverified.

## 2026-10-24 Requested Vercel deployment target

- User explicitly requests future commit-and-push / sync to deploy to https://vercel.com/imtg-roup/my-lodge-business. Local main tracks origin/main at myhanzcity-hub/MyLodegePlatform. Existing VS Code git.postCommitCommand is push; main deployment is now explicitly enabled in vercel.json; handoff branch remains disabled.
- Vercel currently shows 404 for the requested project under the logged-in account. Project Git repository and production branch cannot be verified until an account with access opens the project. Repository configuration alone cannot establish that server-side project connection. Do not report production deployment as verified.

## 2026-10-24 Separate community ending as chapter 13

- User requested the pictured existing global business community ending as a separate page. Deck now has 13 chapters: chapter 12 owner guide, chapter 13 unchanged community ending, image, copy and link. Original page HTML/CSS unchanged in this update.
- Navigation count, contents and last-page boundary updated. Verified deck syntax, public build and browser chapter 12/13 separation. No commit, push or deployment.

## 2026-10-24 Chiang Mai twelve-chapter navigation

- Added a scoped 12-chapter deck to parks/business-valley.html. Original HTML content, hero, copy and images are preserved; only stylesheet/script references and an opt-in body attribute were added.
- Original sections are reused, with directory/overview together on chapter 2 and owner/community together on chapter 12. Fixed previous/next, chapter count, contents, keyboard arrows and touch swipe; native vertical reading remains.
- Existing anchor links and URL hashes open the appropriate chapter; Korean/English labels and reduced-motion supported. Chiang Mai bypasses the former mobile section reordering/dock to prevent navigation collisions; other park pages unchanged.
- Verified original HTML preservation, deck syntax, npm run check, workflow 9/9, public build (430 files), live browser next through chapter 12 and contents return to chapter 1. Physical touch-device swipe not verified. No commit, push or deployment.

## 2026-10-24 Touch hint proximity refinement

- Moved villa hint inward using 38% of projected model width, matching user marked reference. Coin hint moved inward and slightly upward. Check mobile bubble/finger bounds at both idle and ready stages.

## 2026-10-24 Object-attached Touch hint

- Removed viewport-corner button chrome; finger and Touch! bubble now follow the projected villa/coin upper-right edge. Hidden during transformation. Coin and accessible hint both enter the unchanged homepage.

## 2026-10-24 Tap-only intro update

- Replaced scrolling with villa tap → automatic particle/coin animation. A second coin or upper-right finger icon tap enters the preserved homepage.
- Removed ENTER label and scroll controls; one viewport, no audio; reduced motion and WebGL fallback supported.

## 2026-10-24 Replace entry intro only

- User requested their villa/pool → particles → coin 3D intro before Hojiakbar homepage.
- intro.html now loads namespaced entry-3d/ code; index.html and all homepage runtime are preserved.
- Skip/coin navigation goes to index.html and preserves query/hash. No audio. WebGL failure retains simple entry controls; reduced-motion uses direct progress.
- Public manifest includes locally vendored Three.js with MIT license.

## 2026-10-24 Sidepage integration; preserve Hojiakbar homepage

- User explicitly chose to preserve Hojiakbar's homepage from feature/hojiakbar-homepage (b8a4ddd).
- Added reviewed domestic, Chiang Mai and owner pages under parks/, with their scoped styles, icons, responsive layouts and public WebP assets.
- Existing root domestic/business/owner URLs redirect to parks/ and preserve query/hash in local wrappers. Main links continue to work.
- Homepage, intro and root runtime files are unchanged. Public build manifest includes sidepages; internal reports, recordings, originals and credentials are excluded.
- Based on director v1.1 and Oct 22 meeting records. Actual membership, contracts, receipts, booking and SWAP remain unconnected. Mobile/table/calculator QA is recorded in the local Oct 24 audit package.
- GitHub update and production deployment requested. Verify final deployment status before reporting completion.
## 2026-10-25 Homepage copy rules, localization, and service media

- Added the supplied `MYLODGE_CONTENT_RULES.md` to the repository root (already present) and referenced it from root `AGENTS.md` as a standing homepage instruction.
- Restored Concierge Services to the existing `.promotion-cards` editorial layout and original three-column desktop image proportions. Kept its four concise bilingual service descriptions, planned-services note, latest relevant images, and restrained reveal. Reused `assets/images/cart.png` for Electric Cart Service and added it with `assets/images/pool.png` to the public build manifest.
- Changed Owner Life’s “Afternoons by the Pool / 풀사이드의 오후” story to use `pool.png` and shifted the crop left so the lounging guest’s face remains in frame. Removed the fireplace Explode control and handler; assembly and fire controls remain.
- Shortened and explicitly localized both destination cards, including Chiang Mai: “Chiang Mai: Work, Stay & Connect” / “치앙마이에서 일하고, 머물고, 교류하세요”. Also condensed long Owner Life, Facilities, Concierge, and destination copy for the two-line rule.
- Verification: current build/check passed; browser screenshot review remains pending because the headless-browser permission request was interrupted. No commit, push, or deployment.

## 2026-10-25 Facilities BBQ category

- Added the supplied `assets/brand/barbeque.png` illustration to the existing Facilities selector as “BBQ & Outdoor Dining / 바비큐 & 야외 다이닝,” with its BBQ dining image and planned-amenity disclosure in the existing detail panel.
- Expanded the selector and bilingual detail data from six to seven categories, updated the category count, retained tab/arrow selection behavior, and kept the grill illustration contained in the thumbnail frame.
- Added the illustration to the public asset manifest. Verification: JavaScript syntax checks, `git diff --check`, and `npm run build` (282 public files) passed. Browser interaction not yet verified.

## 2026-10-25 Removed full-screen Owner Life presentations

- Removed the full-screen “The Moment You Arrive” / three-scene `#life-story` slideshow and the `#nature` “A New Everyday” resort panel from the homepage.
- Kept their image assets and added the existing `assets/brand/gaji.png` resort aerial as a bilingual “Resort Overview / 리조트 전경” item in the Facilities gallery. The slideshow’s villa, terrace, and social-space images remain in the corresponding Facilities items.
- Kept the Owner Life editorial timeline and photo, lifestyle gallery, and other existing homepage content. No image files were deleted.
- Verification: `node --check homepage.js` and `git diff --check` passed. No commit, push, or deployment.

## 2026-10-25 Ownership model order

- Moved the existing “ONE VILLA · 120 OWNERSHIP SHARES” animation and its three explanatory points out of Ownership & Pricing so it appears immediately before that section. The content, iframe animation, and six-section navigation remain intact.
- Added responsive styles for the model in its new location; desktop retains the side-by-side diagram and points, while mobile stacks them.
- Verification: `node --check homepage.js` and `git diff --check` passed. No commit, push, or deployment.

## 2026-10-25 Owner Life cinematic photo and timeline

- Added the existing `assets/images/bbqplace.png` as a large, responsive photo beneath Owner Life's editorial copy and timeline. It shows a villa-side pool BBQ gathering at golden hour; no new or unrelated image asset was introduced. The image's fixed aspect ratio avoids layout shift, and its bilingual alt text describes it as a concept image.
- Tightened the Owner Life heading/timeline spacing. The timeline remains on the right on desktop and uses a shorter vertical track on mobile. GSAP draws the line and reveals the markers sequentially when the timeline enters view; the photo uses a one-time upward fade/scale reveal. Reduced-motion users see the static content immediately.
- Chrome checks at 1440×900 and 390×844 in Korean and English: image loaded at 1536px source width, correct translations and timeline labels, no horizontal overflow, and no console errors. Screenshots: `docs/review/owner-life-feature-20261025/`.
- Verification: `node --check homepage.js`, `npm run check`, `npm run build` (281 public files), and `git diff --check` passed. No commit, push, or deployment.

## 2026-10-25 Homepage section restoration and ownership spacing

- Fixed the Facilities gallery setup in `homepage.js`: it referenced `spacesIntro` before defining it, which threw a `ReferenceError` and stopped final homepage composition. The Ownership & Pricing, Owner Life, and Facilities sections now render again after the intro is skipped. Preserved the existing `02 / EXPLORE YOUR VILLA` introduction and restored bilingual editorial copy above the Facilities gallery.
- Removed excess height and tightened margins/padding around Ownership Rights, Annual Usage, and the proposed-price disclosure in `ownership-pricing.css`. Kept the existing copy, five ownership labels, annual allocation figures, and legal qualification.
- Captured and visually inspected Korean Ownership layouts at 1440px, 1024px, and 390px in `docs/review/ownership-usage-layout-20261025/`. DOM checks confirmed the six homepage sections, five ownership labels, restored Facilities intro, no horizontal overflow, and no browser console errors at all three widths.
- Verification: `node --check homepage.js`, `npm run check`, `npm run build` (281 public files), and `git diff --check` passed. No commit, push, or deployment.

## 2026-10-25 Owner-requested restoration and fireplace integration

- Replaced the WHY MYLODGE `01 / THE PLACE` photograph with the supplied `assets/brand/Dronepicture.png` and added it to the public build manifest. Kept the dinner/share image in the neighboring card.
- Reworked WHY MYLODGE’s content order: the new villa-ownership headline and private-retreat description lead, followed by the prominent “Share the Gift of Your Villa” message with the existing two photographs. Ownership mechanics now sit below in a labeled HOW OWNERSHIP WORKS block with 120 shares, 1/120 interest, annual use, and qualified multi-share/multi-location language.
- Restored the `02 / EXPLORE YOUR VILLA` introduction above the existing Facilities gallery. `homepage.js` had saved the headline copy but removed its `.vacation-intro` node with `replaceChildren()` before applying it; the original node is now retained and reattached. The requested English heading is `Explore the Spaces Inside and Around Your Villa.` The gallery and its images remain in place.
- Rebuilt the optional Luxury Fireplace preview as solid Anatomy-kit geometry with a WebGL flame layer and assembly/explode/ignite controls. Added the Anatomy runtime modules to the public build list. The local preview server now serves `.mjs` modules with the JavaScript MIME type required by dynamic imports. Browser inspection caught GLSL's reserved word `cast`; renamed it to `wallGlow`. Full visual state screenshots remain unverified.
- WHY MyLodge rendered-DOM checks passed in Korean and English with the exact new headline, sharing message, technical subsection order, and no console errors. `node --check` on homepage and Anatomy modules, `npm run check`, `npm run build` (277 public files), and `git diff --check` also passed.

## 2026-10-25 WHY MYLODGE lifestyle copy and guide cards

- Replaced the active WHY MYLODGE heading, description, and three-column facts in `homepage.js` with the requested bilingual villa-lifestyle message. The facts now describe a personal retreat, shared moments, and more accessible shared ownership; the 1/120 interest and annual-use figures remain in Ownership & Pricing.
- Moved the legal qualification from the WHY composition into the Ownership Rights introduction, where registration, rights scope, and annual-use terms are explained. Kept the existing resort image and both navigation destinations.
- Updated the two-image guide copy in `branding.js` and the final bilingual pass in `homepage.js`; the right card now uses the supplied invitation headline, description, and `Explore Villa Life →` / `별장 라이프 알아보기 →`. Its headline is larger with more separation from the description. Added responsive spacing and typography in `our-story-refinement.css` without changing the card layout or images.
- Verification: homepage/branding/localization JS syntax checks, `npm run check`, `npm run build` (272 files), and `git diff --check` passed. A fresh desktop/mobile browser capture was not completed because local preview access could not be established: port 4173 could not be used from the sandbox, and the escalated localhost check was interrupted.

## 2026-10-25 Homepage typography and spacing pass

- The prior Ownership screenshots showed content beginning too far below the floating navbar, inconsistent left edges, excess section spacing, and a 1,020px mobile ownership-animation frame. In `ownership-pricing.css`, aligned Ownership, Owner Life, Facilities, and their galleries to the existing 1,200px content grid; tightened vertical spacing; improved muted-copy contrast; removed a fixed minimum from facility descriptions; and kept Korean phrases together. The Facilities gallery had inherited the global 96px section padding and nested a second `.container`; both sources of excess spacing are removed. The root already reserves 96px for the floating navbar, so homepage targets now add only 16px instead of another 112px, avoiding a doubled anchor gap. Reduced the mobile animation frame to 860px while preserving the stacked diagram/model composition.
- Fixed the Why MyLodge ownership CTA target in `homepage.js` to point to the actual `#ownership-structure-diagram` element, which now receives the same safe scroll offset.
- Replaced the villa specification's inline middle dot with a dedicated flex separator, including when the Deluxe/Suite selector updates the figures.
- GSAP/ScrollTrigger review found no pinning and no animated layout dimensions in the active homepage: the hero scroll effect translates elements, while the Ownership diagram and Owner Life timeline use one-time reveals. Existing `refresh()` calls run after DOM wrapping and final homepage composition. Hero and cinematic Owner Life viewports remain intentional animation stages.
- Verification: `node --check homepage.js`, `npm run check`, `npm run check:workflow` (9/9), `npm run build` (272 public files), and `git diff --check` passed. A fresh Chrome render was not captured because another process already owns port 4173; existing review screenshots were used for layout diagnosis.

## 2026-10-25 Homepage copy and accuracy audit

- Replaced the static homepage fallback and footer copy in `index.html` so a no-JavaScript load no longer shows the old shared-villa planning text or empty company/contact fields. Updated the fallback SEO title/description to match the current Korean hero copy.
- Reworded the English hero note and added its Korean counterpart: this is a concept presentation, and reservations/product applications are unavailable. The copy no longer calls the site a “vision in progress.”
- In `homepage.js`, changed vague Concierge/community status labels to explicit unconfirmed states, stated that installment amounts and dates are not set, and retained the legal/contract qualifications for ownership, annual use, and facility concepts. Translated the nested diagram labels for the Korean page.
- Audited the active homepage strings: the villa selector contains only Deluxe and Suite; the Luxury Package is presented as optional; `$4,149` is absent. Existing legal qualifications remain because the ownership and use terms are not confirmed.
- Still unconfirmed and therefore not described as established: title/registration and the inheritance, transfer, and rental scope; installment amounts and dates; community operation and participation; actual facility completion/specifications by park; Concierge inclusion, fees, applicable parks, and availability. The HanzCity authentication URL remains unavailable, so Sign Up stays disabled.
- Verification for this entry is recorded after the copy audit checks; no commit, push, or deployment was performed.

## 2026-10-25 Concierge service icons

- Replaced the Concierge cards' repeated/cloned photos with consistent inline SVG service icons in `homepage.js`: cleaning, fresh bedding, grocery shopping, BBQ-style dining, and resort buggy transport. The five service labels and availability copy remain unchanged; the cart is distinct from the grocery basket.
- The current five-item Concierge data has a Dining card but no separate BBQ service card. The grill SVG is assigned to Dining as the nearest existing service; no new service was added. Icons use a shared 32×32 viewBox, stroke treatment, and 64px layout slot.
- `node --check homepage.js`, `npm run check`, `npm run build` (272 public files), and `git diff --check` passed. Browser-level screenshot verification was not available in this turn.

## 2026-10-25 Owner Life card and lifestyle copy

- Updated the Owner Life headline, the owner-connect card, and the three villa-story card captions in `homepage.js` with concise Korean/English lifestyle copy. Reused all five approved category images and aligned each caption with the scene shown.
- Kept Family, Couples, Social, Business, and Wellness as five independently selectable panels. Category selection continues to activate its matching image/copy panel in place; it does not navigate to another homepage section. No service entitlements or event guarantees were added.
- Confirmed the four requested internal phrases are absent from active source. `node --check homepage.js`, `npm run check`, and `npm run build` passed. A focused interaction harness verified every category activates only its matching panel in both languages.

## 2026-10-25 Original SVG information cards restored

- The previous commit's three inline SVG review cards were generated under the legacy `#participation` block, which the six-section homepage removes. `homepage.js` now moves that original checklist into Ownership & Pricing before legacy-section cleanup; its icon paths and Korean copy remain from `app.js`, with an English translation applied when the English page is selected.
- The checklist is expanded by default so the SVG icons are visible. Its three columns collapse into a stacked mobile layout, and the homepage remains at six main sections.
- No new illustration assets or ownership promises were added. Verification for this restoration is pending.

## 2026-10-25 Owner Life copy and category storytelling

- Replaced the Owner Life lead headline with `내 별장에서 누리는 사치스러운 행복` and the English equivalent. Updated the owner-connect image card to `지인에게 별장을 선사하세요` with the requested Korean description and matching English copy.
- Rewrote the Family, Couples, Social, Business, and Wellness descriptions to match their existing approved photos. Category clicks, focus, hover, and mobile swiping continue to change only the active gallery panel; no section navigation or service entitlement was added.
- Confirmed the four listed internal phrases are absent from active source. `node --check homepage.js`, `npm run check`, `npm run build` (272 files), and `git diff --check` passed. A focused handler harness exercised all five categories in Korean and English.

## 2026-10-25 Villa comparison and optional package selector

- Replaced the active Standard/Luxury price display with exactly two villa records in `homepage.js`: Deluxe ($3,999 base, +$199 optional Luxury Package) and Suite ($5,999 base, +$390 optional package). Tabs update bilingual villa names/type/area; the checkbox updates base, package, and total rows. No package contents are claimed.
- Updated the hero price strip to match the two base prices and optional package amounts. Removed the old $4,149 amount and old $150 upgrade wording from active homepage source. The previous installment breakdown was removed from the selector area; installment terms are labeled pending confirmation.
- Verification: JS syntax check, project `npm run check`, and `npm run build` passed. Exercised Deluxe/Suite × package off/on in a focused handler harness; totals were $3,999, $4,198, $5,999, and $6,389. Browser interaction screenshots were not captured because the local preview port 4173 is occupied by an existing process and the sandbox cannot connect to it.

## 2026-10-25 Ownership Rights / Annual Use editorial diagram

- Reworked only the Ownership Rights / Annual Use block in `homepage.js` and `ownership-pricing.css` into a three-column editorial composition: section intro, nested villa/shared-ownership/share diagram, then the existing five rights entries and annual-use details. Existing rights descriptions and pending-confirmation labels remain unchanged; no ownership percentages or legal promises were added.
- Added a one-time GSAP reveal for the nested outlines and annual-use divider/label, triggered when the diagram enters the viewport. The diagram remains visible without animation when GSAP is unavailable or reduced motion is enabled. Responsive CSS stacks intro → diagram → rights information on mobile.
- Browser verification and screenshots are still pending. No pricing, navigation, or other homepage sections were changed for this task.

## 2026-10-24 Owner Life 및 Facilities 사진 갤러리

- Owner Life의 다섯 개 플레이스홀더를 승인된 기존 사진을 쓰는 Family / Couples / Social / Business / Wellness 갤러리로 바꿨다. 데스크톱은 GSAP 0.55초 확장 전환, 모바일은 스와이프·이전/다음 조작을 사용한다. 별장 하루 타임라인은 유지했다.
- Member Community를 왼쪽 카피·Coming Soon 상태, 오른쪽 `assets/images/bbqplace.png` 사진의 편집형 소개로 정리했다. 사진은 콘셉트 이미지라고 표시하며 프로그램이 운영 중이라고 표현하지 않는다.
- Owner Contract & Payment Progress / My Page 플레이스홀더와 해당 링크를 홈에서 제거했다.
- Facilities의 기존 작은 카테고리 표현을 외관·실내·테라스·평면도·수영장·바비큐·소셜 공간 사진 선택기로 교체했다. 데스크톱 세로 탐색과 모바일 선택·스와이프를 제공하며, 콘셉트 이미지 및 계획 시설 상태를 함께 표시한다. 이미지와 평면도는 기존 프로젝트 자산만 사용했다.
- 확인: 영문·국문 1440×900 및 390×844 Chrome. Owner Life 호버(선택 패널 flex-grow 3, GSAP), 모바일 다음 패널, Facilities 카테고리 선택·모바일 스와이프, 이미지 로드, Coming Soon 문구, 진행 안내 미노출, 번역 및 가로 넘침 없음 확인. 콘솔 오류 없음. `npm run check`, `npm run check:workflow` (9/9), `npm run build` (270개 공개 파일), JS 구문 및 `git diff --check` 통과.
- 화면 기록: `docs/review/homepage-owner-facilities-20261024/`. 커밋·푸시·배포는 하지 않았다.

## 2026-10-24 Ownership & Pricing reference composition and live animation

- Corrected the generated `#ownership-pricing` section to match the supplied editorial reference: split title/pricing row, then an open, full-width ownership diagram with a large share grid and the villa assembly beside three numbered ownership facts. Kept the Standard/Luxury prices, USD 100 first-installment label, three information accordions, and final-terms note. Korean and English copy are managed in `homepage.js`; styling remains section-scoped in `ownership-pricing.css`.
- Embedded the existing Anatomy experiment directly in that diagram. The 10 × 12 ownership grid, highlighted share, annual-night statement, connector, and GSAP villa/pool assembly are visible in-page. Assembly restarts whenever the section enters view; Replay remains available, Korean labels/status are localized, and reduced motion completes without playing. A direct `#ownership-pricing` URL now scrolls to the dynamically created section below the floating nav. The standalone experiment source remains unchanged.
- Found why the earlier view appeared unchanged: the existing process on port 4173 serves an older allowlist and returns 404 for `/experiments/ownership-villa-diagram/index.html`. It could not be restarted because that process still owns the port. Built the current project and served the updated `dist/` preview on port 4174; use `http://127.0.0.1:4174/index.html#ownership-pricing` for the corrected local view.
- Browser verification on rebuilt preview: opening the direct anchor lands on the generated section, the iframe loads and status progresses from ownership drawing into `Villa assembly · 6.4 / 12.0 s`; Replay remains available. Korean 390px mobile shows localized copy and status. Both tested sizes have the share grid, villa SVG, three numbered points, no horizontal overflow, and clean console. Screenshot evidence: `docs/review/ownership-pricing-editorial-20261024/reference-match-*.png`. `npm run check`, `npm run check:workflow` (9/9), `npm run build` (266 files), `node --check homepage.js`, and `git diff --check` passed.
- No production deployment was performed.

## 2026-10-24 standalone ownership-to-villa animation

- Added `experiments/ownership-villa-diagram/` with a 10 × 12 ownership grid, gold selection, “1 Share = 3 Allocated Nights / Year” statement, connector marker, and the existing Anatomy villa/pool assembly on one GSAP timeline. The generated HTML embeds the existing villa SVG and local GSAP bundle; no homepage files were changed.
- Verification: build script syntax/build passed. Anatomy Chrome captures at 1440px desktop and 390px mobile show no horizontal overflow or console errors. Normal playback completes, Replay Experience restarts at the ownership sequence, and reduced motion opens fully assembled. Previews and build notes are in the experiment directory.
- Remaining: this ownership diagram and the villa illustration are concept visuals; nothing is integrated into the homepage.

## 2026-10-24 standalone isometric villa assembly study

- `experiments/mylodge-isometric-villa/` now contains an isolated Anatomy SVG model and self-contained GSAP 3.12.5 assembly demo. A 12-second sequence moves the foundation, pool basin, floor structure, walls, glazing, balcony, layered roof, pool coping and water into place; Replay Animation restarts it. No homepage files were changed for this experiment.
- Verification: `node --check` and standalone build passed. Chrome captures at desktop and 390px mobile show a clean console and no horizontal overflow. Replay completes; reduced-motion opens on the completed still. Desktop, mobile, and mid-assembly screenshots are in the experiment directory.
- Remaining: this is a concept model and has not been integrated into Why MyLodge.

## 2026-10-24 CEO 요구사항에 따른 홈페이지 전체 정리

- 홈페이지 주요 구간을 Hero → Why MyLodge → Ownership & Pricing → Owner Life → Facilities → Concierge의 여섯 구간으로 구성했다. 제거 대상으로 지정한 Destinations, How It Works, FAQ, Final CTA는 독립 구간으로 표시되지 않으며, 내비게이션은 여섯 구간으로 연결한다.
- `hero-content.js`에 최신 한영 Hero 문구·CTA·가격 스트립을 적용하고, `homepage.js`에서 최종 Hero CTA 연결과 나머지 최종 카피를 관리한다. 기존 Hero 사진·한국어 영상 자산 및 기존 GSAP/시설 선택 동작은 유지했다. 이미지와 영상 파일은 수정하지 않았다.
- Why MyLodge에 공유 모델, 120구좌·1/120 지분 기준, 1구좌 연 3박, 여러 구좌·지역 선택 사실을 표시했다. 소유권·등기·이용의 법적 조건은 계약·공식 안내로 확인하도록 함께 명시했다.
- Ownership & Pricing은 `homepage.js`의 `offer` 설정을 단일 가격 원천으로 사용한다: Standard USD $3,999, Luxury USD $4,149(USD $150 업그레이드), 각각 1/120 기준·연 3박. 5회 제안 납입표(USD 100 + 1,000 + 1,000 + 1,000 + 899)를 표시하고 $100은 총 가격이 아닌 첫 납입액이라고 구분했다. 최종 계약·권리·일정 확정 전 안내를 포함한다.
- 주문진·양양·치앙마이는 기존 파크 정보 페이지로 연결한다. 판매 상태 및 파크별 빌라 타입 제공 여부는 확인 중으로 표시하고 실시간 재고·상품 신청은 구현하지 않았다. 상품 선택 경로는 Region → Lifestyle Section → Villa Type → Number of Shares로 안내하지만 제출 흐름은 만들지 않았다.
- Owner Life에 친구 대화, 별장 경험, 다섯 라이프스타일 카테고리, 멤버 커뮤니티 준비 중 안내, 계약·납입·공사 진행을 마이페이지에서 보여줄 계획 카피를 추가했다. 마이페이지 조회 기능은 아직 없다고 표시했다.
- Facilities의 기존 선택 갤러리와 이미지를 보존하고, 외관·실내·테라스·평면도/배치 콘셉트와 수영장·바비큐·소셜 공간 안내를 더했다. 개별 빌라 평면도는 미공개, 파크 배치도는 콘셉트, 시설 준공·운영은 확인 전으로 명시했다.
- Concierge에 청소·침구·장보기·다이닝·카트 이동 다섯 서비스를 표시했다. 각 항목의 포함/유료 여부, 적용 파크, 제공 상태를 미확정/준비 중으로 표시했다.
- 최종 실제 Chrome 확인: 한·영 1440×900 및 390×844 모두 통과. 6개 구간의 순서, 정확한 섹션 제목, 두 가격 및 5회 납입액, CTA 연결, 시설 탭 선택, 앵커 오류 없음, 가로 넘침 없음, JS 콘솔 오류 없음 확인. 네 화면과 DOM 검증 JSON은 `docs/review/homepage-final-20261024/`에 저장했다.
- 프로젝트 검사 `npm run check`, `npm run check:workflow`(9/9), `npm run build`(265개 공개 파일), `node --check homepage.js`, `node --check hero-content.js`, `git diff --check` 통과. 사용자 로컬 변경을 보존했으며 커밋·업로드·운영 배포는 하지 않았다.
- 남은 시스템 작업: 실시간 상품 재고·신청, 마이페이지 인증과 계약/납입/공사 진행 조회, 실제 서비스의 요금·파크별 운영 정보는 백엔드/사업 조건 확정이 필요하다. 실제 빌라 평면도 및 시설 확정 정보는 아직 제공되지 않았다.

## 2026-10-23 회의 후속 1단계: 홈페이지 구조 및 Ownership & Pricing 재정리

- 최신 사용자 지시가 앞선 전체 섹션 카피 구현보다 우선한다. Hero 구성·문구·미디어와 Why MyLodge, Owner Life, Facilities, Concierge의 기존 본문·이미지·영상은 유지한다. 단, 후속 피드백에 따라 Owner Life에 바비큐·캠핑 라이프스타일 구상, Facilities에 계획 중인 야외 다이닝·바비큐와 캠핑 공간, Concierge에 미확정 바비큐 준비 서비스를 추가했다. 다른 카피 변경은 검토 후 진행한다.
- 홈 주요 구간은 Hero → Why MyLodge → Ownership & Pricing → Owner Life → Facilities → Concierge 순서다. Destinations, How It Works, FAQ, Final CTA는 독립 홈 구간에서 제외되고 내비게이션은 6개 구간을 가리킨다.
- 신규 소유 섹션 가격은 `homepage.js`의 `proposedPrice` 설정에서 USD $3,999로 관리한다. 제안 금액이며 최종 조건 미정, 전체 매입가·계약금·회차별 납입액으로 확정하지 않는다. 소유 구조·결제·이용 조건은 확정 전으로 안내한다. 상담 CTA는 기존과 같이 문의 접수 안내를 펼치며 실제 연락처 수집·전송은 하지 않는다.
- 과거 KRW 검토 금액 블록은 현재 제안 가격과 혼동하지 않도록 Why MyLodge의 금액 영역에서 제거했다. 모바일 고정 CTA는 기존 `branding.js`가 제거하므로 새로 추가하지 않았다.
- 한영 실제 Chrome DOM 및 1440×900, 390×844에서 섹션 순서·가격·바비큐/캠핑 계획 문구·내비게이션 앵커·CTA·가로 넘침을 확인한다. 검토 화면은 `docs/review/homepage-business-meeting-20261023/`에 둔다. 그 외 비가격 섹션 카피 업데이트는 검토 승인 후 진행한다.
- 커밋·업로드·운영 배포 없음.

## 2026-10-23 홈페이지 6개 주요 섹션 및 Ownership & Pricing 추가

- 최신 사용자 지시: Hero 추가 수정 중단. 현재 Hero 디자인·문구·영상·사진을 유지하고, 홈을 Hero → Why MyLodge → Ownership & Pricing → Owner Life → Facilities → Concierge의 6개 주요 섹션으로 구성했다.
- 신규 homepage.js가 최종 구성과 내비게이션을 담당한다. 기존 Hero/Why MyLodge의 시네마틱 래퍼는 유지한다. #owner-life, #facilities는 여백 없는 그룹이며 기존 #ownership 및 생활 장면, #villa-spaces와 #vision의 기존 콘텐츠·이미지를 보존한다. Destinations(#brand-paths), How It Works(#participation), FAQ(#faq), Final CTA(.vacation-finale)는 독립 홈 구간에서 제외했다. 국내 별장/Business Valley 기존 페이지 경로는 유지한다.
- 신규 #ownership-pricing을 Why MyLodge와 Owner Life 사이에 삽입했다. 사용자 지정 한영 문구·세 가지 혜택·USD $3,999를 표시한다. 금액은 homepage.js의 proposedPrice 객체(amount:3999, currency:'USD')에서 수정한다. 과거 396만 원 기록은 이 신규 섹션의 최신 가격 기준이 아니다.
- $3,999는 제안 금액이며 포함 범위·가격 구조가 미정임을 가까이 표시했다. 총 매입가·계약금·할부/회차 납입액으로 확정하지 않았고, 납입 일정·수익 보장·일일 환산 금액은 추가하지 않았다.
- Hero 주 CTA와 소유·가격 메뉴는 #ownership-pricing으로 연결된다. 가격 섹션 CTA는 소유 안내/문의 준비 상태를 인라인으로 펼친다. 실제 소유 상담 접수 경로·공식 문의처는 없으며, 연락처 입력·저장·전송·성공 안내는 만들지 않았다.
- 기존 생활·시설 딥 링크를 보존하고 #pricing/#shared-ownership 등의 과거 가격 앵커는 새 구간으로 연결한다. 제거된 #brand-paths 링크/북마크는 기존 국내 별장 페이지로 이어진다. 내비게이션의 화면 보기 선택기 및 모바일 메뉴 동작을 보존했다.
- 검증: 실제 Chrome에서 한영 1440×900, 390×844의 4개 조합에 대해 6개 주요 섹션 순서, 정확한 가격/제목/설명/혜택명, 24회 실제 내비게이션 클릭, Hero CTA, 가격 CTA 펼침, 가로 넘침 및 JS 오류 없음 확인. npm run check, check:workflow 9/9, 공개 빌드 265개, git diff --check 통과. 화면·검증 JSON은 docs/review/ownership-pricing-20261023/에 있다.
- 한계: 실기기/Safari 점검 없음. 실제 서버·인증·상담·예약·결제·발송 보류 유지. 커밋·업로드·운영 배포 없음. 앞선 Hero 소스 통합 작업은 중단 시점 상태로 보존했으며 이번 단계에서 Hero 디자인을 추가 변경하지 않았다.

## 2026-10-23 홈 Hero 소유·라이프스타일 문구 및 반응형 개선

- 사용자 지정 한국어·영어 eyebrow, 제목, 설명, 소유/라이프스타일 CTA를 기존 Hero에 적용했다. 기존 사진·한국어 Beach2.mp4 영상·플로팅 내비게이션·GSAP 이미지/제목 스크롤 효과·동작 줄이기·영상 제어는 유지한다. 다른 섹션의 마크업·스타일·문구는 수정하지 않았다.
- 현재 branding.js가 #pricing을 제거하므로 소유 CTA는 기존 #ownership으로 대체한다. Owner Life 역시 #ownership이다. Hero는 #pricing → #shared-ownership → #ownership 순서로 존재하는 대상만 선택하며, 이번 작업에서 비용/권리 섹션을 복원하지 않았다.
- Hero 내부 흐름 기반 간격·배경 그라데이션·모바일 CTA 배치를 정리했다. 짧은 가로 화면은 두 열로 배치하며, 320px 영문 제목/AI 고지 겹침을 해소했다. 영상 버튼은 재생 상태에 따라 너비가 변하지 않게 공간을 확보한다.
- app.js·cinematic.js·chairman.js에서는 최종 Hero 전에 폐기되는 Hero 이미지 요청만 제거했다. 브라우저의 초기 resource 기록에서 이전 lodge-hero/vacation-arrival 요청이 없어짐을 확인했다. 다른 섹션의 이미지와 미디어 파일은 그대로다.
- 검증: 한영 1440×1000, 1280×720, 768×1024, 390×844, 320×568, 844×390, 667×375, 568×320의 16개 조합에서 제목/주 CTA 초기 화면 노출 및 가로 넘침 없음 확인. 스크린샷 시각 점검, 두 CTA 실제 스크롤, GSAP 진행률/제목 이동, 영상 정지·재생, 동작 줄이기 정지/비고정 상태 확인. JS 오류 없음. JS 구문·npm run check·check:workflow 9/9·공개 빌드 262개 통과.
- 한계: 기존 페이지 초기 스타일/다단계 JS 구성 과정의 레이아웃 이동은 이전 커밋과 동일하게 관측된다. 사이트 전역 초기화·내비게이션 변경은 범위 밖이므로 건드리지 않았다. 실제 휴대전화·Safari 검증은 하지 않았다. 커밋·업로드·운영 배포 없음.

## 2026-10-22 Hero 스크롤 영상 효과 취소

- 사용자 요청으로 작업 중이던 ScrollTrigger 영상 스크러빙·pin 변경을 취소하고 `backups/before-hero-video-scrub-20261022/`의 `hero-editorial.js/css`로 복원했다. 기존 영상 재생·일시정지와 Hero 동작을 유지한다.
- 앞서 적용한 마지막 대형 이미지 섹션 제거, WHY MY LODGE 사진 두 장 복원, OWNER LIFE의 SocialLife.png 지정은 보존했다. 공개 빌드 262개 완료. 커밋·업로드·배포 없음.

## 2026-10-22 OWNER LIFE 사진 SocialLife.png 적용

- WHY MY LODGE / 01의 두 번째 `02 / OWNER LIFE` 카드 이미지를 `assets/brand/SocialLife.png`로 교체했다. PNG 실제 크기 1671×941을 마크업에 반영하고 공개 빌드 목록에 추가했다.
- 문구·카드 레이아웃 유지. 커밋·업로드·배포 없음.

## 2026-10-22 WHY MY LODGE 사진 두 장 복원

- `hero-editorial.js`가 `#our-villa`의 `.lodge-guide`를 제거하던 동작을 삭제했다. `branding.js`가 생성하는 공간·오너 생활 사진 카드 두 장이 WHY MY LODGE / 01 아래 다시 표시된다.
- 커밋·업로드·배포 없음.

## 2026-10-22 홈 마지막 대형 이미지 섹션 숨김

- `당신이 꿈꾸던 별장 생활 / 마이롯지에서 그려보세요` 문구가 있는 `.vacation-finale` 대형 이미지 섹션을 홈에서 제거했다. 앞선 섹션의 보조 링크도 함께 없어지므로 별도 수정은 필요 없다.
- `hero-editorial.js`에서 해당 섹션만 제거. 커밋·업로드·배포 없음.

## 2026-10-21 10월 16일 회장 피드백 기반 소유 가치 우선 소개

- 실제 활성 `arrival-intro.js`는 작업 시작 시 이미 5장면·22.5초였다. 이를 사용자 지정 소유의 꿈 → 자유로운 휴식 → 새로운 일상 → 커뮤니티 → 브랜드 리빌 문구와 이미지 순서로 정리했다. 마지막 장면은 자동 이동 대신 `마이롯지 알아보기 / Explore MyLodge` CTA와 다시보기를 유지한다. 건너뛰기·이전/다음·일시정지·스와이프·키보드·동작 줄이기는 기존 엔진을 사용한다.
- 기존 로컬 이미지 `resort-overview-20261006`, `brand-villa-atmosphere-20261008`, `owner-connect-20261007`, `vision-masterplan-20261007`를 재사용했다. 새 이미지·영상·라이브러리는 추가하지 않았다. 짙은 네이비/아이보리/샴페인 색상과 기존 사진 크로스페이드·카메라 이동·텍스트 리빌을 사용한다.
- 홈은 Hero → Why MyLodge → 생활 가치 3개 → 기존 공유 방식 설명 → 생활·커뮤니티 → 공간·시설 → 국내/해외 목적지 링크 → 기존 비용·권리·준비 상태 → 참여 전 확인·다음 단계 순서로 배치했다. 기존 `branding.js`가 삭제하던 비용·권리·진행·참여 섹션을 보존하고, 기존 소유 방식 DOM과 스크롤 관찰자를 `#shared-ownership`에 이동했다. 상세 읽기 영역은 불투명 아이보리 표면으로 정리했다.
- 모바일 생활 가치는 약 한 화면씩 자연스럽게 세로 스크롤하며, 사진의 세로 크롭에 충분한 해상도를 요청한다. 한영 문구·앵커·언어 유지 CTA·모바일 메뉴와 기존 갤러리 화살표의 스크롤 방지 동작을 확인했다.
- `intro.html`, `arrival-intro.js/css`, `branding.js`, `editorial.js`의 홈 링크 예외 한 줄, `hero-editorial.js/css`, 신규 홈 전용 `ownership-story.css`, 공개 빌드 목록을 변경했다. 국내/해외 파크 하위 페이지는 수정하지 않았다.
- 검증: Chrome 1440×1000, 390×844 양 언어 스크린샷 확인; 844×390 가로 화면; 인트로 전체 재생(22.5초)·정지/재생/다시보기·CTA·건너뛰기·키보드·이전/다음·모바일 메뉴·동작 줄이기 확인. 가로 넘침·누락 앵커·JS 오류·실패한 로컬 이미지 요청 없음. JS 구문 검사, `npm run check`, `npm run check:workflow` 9/9, 공개 빌드 260개 통과.
- 10월 15일 회의의 확정 혜택 우선순위는 미제공이다. 생활 가치 문구는 지향점이며 확정 계약상 혜택으로 제시하지 않는다. 권리 구조·등기·숙박량·예약·세부 서비스·최종 금액·납입·환불·공식 문의처는 사업 확인이 필요하다. Git 변경 명령·커밋·업로드·배포는 실행하지 않았다.

## 2026-10-21 시설 갤러리 화살표 스크롤 이동 제거

- 홈 `EXPLORE YOUR VILLA`의 이전·다음 화살표를 누를 때 선택 탭으로 포커스가 이동하며 섹션이 불필요하게 스크롤되던 동작을 제거했다. 사진·문구 전환과 탭 키보드 탐색은 유지한다.
- 커밋·업로드·운영 배포 없음.

## 2026-10-21 BEACHSIDE 이미지 지정

- 홈 `EXPLORE YOUR VILLA`의 `02 / BEACHSIDE` 장면에 사용자 지정 `assets/images/beachParty.png`를 적용했다. 기존 문구, 갤러리 전환, cover crop은 유지하고 공개 빌드 목록에 이미지를 추가했다.
- 커밋·업로드·운영 배포 없음.

## 2026-10-20 MY LODGE / OUR STORY 한영 카피 정리

- Our Story 한국어 문구를 영어 문안에 맞춰 `멀게만 느껴졌던 별장, 이제는 우리 일상 가까이.`와 `별장 한 채를 함께 마련하는 공유별장 구상입니다.`로 정리했다. 한국어 오버라인도 `마이롯지 / 우리의 이야기`로 바꾸고 localization.js의 영어 대응을 연결했다.
- Chiang Mai Business Valley 카드 제목에서 gray highlight bar와 hard text shadow를 제거해 강조 단어를 본문과 같은 선명한 잉크색으로 표시하고 제목 밑줄을 막았다.

## 2026-10-20 Vision 영어 제목 줄바꿈

- 영어 페이지의 `The MyLodge destination at a glance.` 제목을 `The MyLodge destination` / `at a glance.` 두 줄로 표시하도록 localization.js에서 명시적 줄바꿈을 적용했다.

## 2026-10-20 EXPLORE YOUR VILLA 텍스트 렌더 오류 수정

- 시설 선택기 첫 설명에 `${spaces[0].tag/title/copy/note}`가 문자 그대로 표시되던 문제를 수정했다. 해당 문자열 조각은 템플릿 리터럴이 아니어서 보간되지 않았다. `chairman.js`에서 문자열 연결로 첫 시설의 실제 데이터를 넣도록 바꿨다. 커밋·업로드·운영 배포 없음.

## 2026-10-20 OUR STORY 및 라이프스타일 사진 지정

- 사용자 지정 이미지로 홈 사진 세 장을 교체했다. `MY LODGE / OUR STORY`에는 `assets/images/villa.png`, `A pool beside the sea`에는 `assets/images/luxury2.png`, `A terrace for meeting fellow entrepreneurs`에는 `assets/images/meeting.png`를 적용했다.
- 기존 섹션 구성, 문구, 이미지 프레임과 cover crop은 유지했다. 세 PNG를 공개 빌드 목록에 추가했다. 커밋·업로드·운영 배포 없음.

## 2026-10-20 라이프스타일 사진 masonry grid

- 사용자 요청으로 `#lifestyle`의 자동 슬라이드쇼를 정적인 3장 masonry grid로 교체했다. 세 사진과 설명이 동시에 보이고, 데스크톱은 3열 staggered 배치, 태블릿·모바일은 비율을 유지한 단일 열로 표시한다.
- 슬라이드 자동 재생, 일시정지 버튼, 캐러셀 상태 표기를 제거했다. 사진 높이를 명시해 이전 0 높이 카드 문제를 방지하고 모바일에도 세 장 모두 표시한다. 사진 asset은 기존 eager 로딩을 유지한다.
- 푸터 전 수채화는 PNG라 DrawSVGPlugin으로 선을 직접 그릴 수 없다. 대신 기존 GSAP/ScrollTrigger 리빌을 약 5초의 워터컬러 번짐으로 교체했다. 여러 개의 겹친 radial-gradient SVG 마스크가 건축물·수영장·야자수·주변 풍경 위치에서 차례로 번지고, 마지막 부드러운 워시가 그림 전체를 드러낸다. 가장자리 페이드와 아이보리 배경을 유지하며, 동작 줄이기 설정에서는 정적인 전체 그림을 표시한다.
- `npm run build`, `git diff --check` 통과. 커밋·업로드·운영 배포 없음.

## 2026-10-20 프리미엄 네비게이션 스타일

- 기존 메뉴 구조와 상호작용을 유지하면서 헤더 표면, 간격, 링크 호버 라인, CTA 대비를 정돈했다. 스타일은 신규 `navbar-premium.css`에 분리했고, `luxury-system.css`의 import 한 줄을 제거하면 즉시 되돌릴 수 있다.
- 공개 빌드 목록에 스타일시트를 등록했다. `npm run build`, `git diff --check` 통과. 커밋·업로드·운영 배포 없음.

## 2026-10-20 푸터 직전 수채화 아트워크 배치

- `assets/brand/imageBeach.png`를 메인 푸터 바로 앞에 배치하고, `YOUR NEXT VACATION`과 `Your haven in life. MyLodge.` 문구를 이미지 위에 오버레이했다. 별도 카피 패널은 추가하지 않았다. 상단 히어로에서는 유사한 영어 슬로건을 제거하고 기존 사진은 유지했다.
- SPACE VISION의 `마이롯지 단지 전체 풍경` 제목과 마스터플랜 조감도는 기존 렌더링으로 복원했다. 워터컬러는 아이보리 바탕에서 네 가장자리 마스크와 multiply 블렌드로 표현하고, GSAP 1.2초 리빌은 푸터 전 아트워크를 대상으로 한다.
- `npm run build`, 변경한 JavaScript 구문 검사, `git diff --check` 통과. 브라우저 시각 확인은 완료하지 못했다. 커밋·업로드·운영 배포 없음.

## 2026-10-19 간결한 브랜드 푸터

- 레퍼런스에 맞춰 홈 푸터를 왼쪽 로고와 오른쪽 3개 링크 묶음, 하단 고지·저작권선으로 정리했다. 기존 소개/시설/오너/컨시어지/목적지 링크만 사용하며 제휴 브랜드 표시는 만들지 않았다.
- `branding.js`가 링크 메뉴와 하단 행을 구성하고 `editorial.js`는 푸터 링크를 보존한다. `localization.js`에 영문 메뉴 번역을 추가하고 `owner-cards-refinement.css`에 데스크톱·모바일 스타일을 추가했다. 사전 안내·AI 콘셉트 고지는 계속 표시한다.
- 확인: 빌드와 JavaScript 구문 검사, `git diff --check`. 브라우저 미리보기는 실행하지 않음. 커밋·업로드·운영 배포 없음.

## 2026-10-19 MY LODGE / TWO WAYS TO STAY 레이아웃

- 사용자가 지정한 기존 홈 `#brand-paths` 두 선택지에 Aman Residences 참고 구성을 적용했다. 국내 별장은 넓은 사진 왼쪽·설명 오른쪽, 치앙마이는 설명 왼쪽·넓은 사진 오른쪽이며 모바일에서는 사진 다음 설명 순서로 쌓인다.
- 기존 제목, 문구, 사진, 목적지 링크를 유지했다. `editorial.css`의 `#brand-paths` 한정 규칙을 추가했다. 먼저 잘못 추가한 새 구간과 인트로 장면의 오버라이드는 제거했다.
- 사용자가 추가로 제공한 컨시어지 레퍼런스에 맞춰 세 카드 이미지 비율을 정사각형으로 조정하고, 추적 자간의 오버라인·세리프 제목·설명 순서를 적용했다. 기존 서비스 문구와 “예약·신청은 제공하지 않습니다” 안내는 유지하며 모바일도 정사각 이미지를 사용한다. 스타일은 `owner-cards-refinement.css`에 추가.
- 커밋·업로드·운영 배포 없음.

## 2026-10-19 A NEW EVERYDAY 이미지 지정

- `#nature` 조감도에 사용자가 지정한 `assets/brand/gaji.png`를 연결했다. 영어 대체 텍스트를 “Aerial view of the swimming pool, club lounge, and coastal modular villa complex · AI space concept”로 맞췄으며, 기존 `MY LODGE / A NEW EVERYDAY` 라벨은 유지했다.
- 공개 빌드 목록에 gaji.png를 추가했다. 다른 이미지/섹션은 변경하지 않음. 커밋·업로드·운영 배포 없음.

## 2026-10-19 마이롯지 길잡이 에디토리얼 구성

- 홈 `#our-villa`의 `.lodge-guide`만 참고 이미지의 비대칭 사진 2장, 사진 아래 제목·설명 구성으로 바꿨다. 기존 로컬 단지/생활 콘셉트 이미지를 사용하고, `시설 둘러보기`, `오너 혜택`, `컨시어지` 진입 링크는 유지했다. AI 콘셉트 고지를 각 이미지에 붙였다.
- `our-story-refinement.css`의 #our-villa 범위 스타일과 `branding.js` 길잡이 마크업만 변경. 아이보리 바탕, 데스크톱 와이드+포트레이트, 모바일 단일 열. `node --check branding.js`, `npm run check`, `npm run build`(252개), `git diff --check` 통과. 브라우저 시각 확인은 하지 않았다. 커밋·업로드·운영 배포 없음.

## 2026-10-19 Vision 조감도 스크롤 정사각형 리빌

- 피드백 후 `#vision .vision-photo img`의 시작 클립을 중앙 32px 정사각형으로 축소하고, `top 90%`부터 `bottom 20%`까지 `scrub: .5`로 확장하도록 조정했다. GSAP ScrollTrigger이며 pin이나 레이아웃 크기 변경은 없다.
- 동작 줄이기에서는 `gsap.matchMedia()`가 효과를 만들지 않아 전체 사진이 그대로 보인다. 되돌리려면 `index.html`의 `vision-square-reveal.js` script 태그와 `scripts/public-assets.mjs` 등록을 제거하고 파일을 삭제하면 된다.
- `npm run check`, `npm run build` 실행 후 결과를 기록한다. 로컬 전용이며 커밋·업로드·운영 배포 없음.

## 2026-10-19 LIFE AT MY LODGE 오너 하루 레이아웃

- `#ownership`만 겹친 카드 carousel에서 세 장의 사진·제목·설명을 함께 보여주는 에디토리얼 3열 구성으로 변경했다. 따뜻한 밝은 배경과 세로 사진 비율을 적용하고, 모바일은 한 열로 쌓는다. 기존 이미지와 카드 콘텐츠는 유지한다.
- `editorial.js`에서 오너 카드 순환·스와이프·카드 버튼 처리를 제거했다. 다른 섹션의 스크립트와 레이아웃은 변경하지 않았다. `owner-cards-refinement.css`의 스코프 override로 구현했다.
- `npm run check`, `npm run build` 통과(공개 파일 251개). 브라우저 스크린샷은 현재 로컬 서버가 구형 페이지 상태를 반환해 시각 검증을 완료하지 못했다. 커밋·업로드·운영 배포 없음.

## 2026-10-19 Hero → Our Villa 스크롤 오버레이

- `hero-editorial.js`가 홈 hero부터 `#our-villa`까지(사이에 있는 living ribbon 포함) 전환 wrapper로 묶는다. 기존 섹션 순서는 유지한다.
- hero는 `100vh/100svh`, sticky top 0. `#our-villa`는 따뜻한 아이보리 solid surface와 높은 stacking order를 사용해 아래에서 올라와 hero를 덮는다. 기존 scenery backdrop을 숨기고 길잡이 영역 텍스트/패널을 어두운 잉크·밝은 표면으로 맞췄다. wrapper가 다음 섹션에서 끝나므로 Hero sticky도 그 경계에서 해제되고 이후는 일반 스크롤이다. 추가 pin이나 전환용 스크롤 거리는 없다.
- 동작 줄이기 설정에서는 hero를 static flow로 바꾼다. 기존 GSAP intro/ScrollTrigger는 이미지와 카피를 움직이며 hero 자체를 transform하지 않는다.
- 브라우저 검증: 데스크톱 1440×900 및 모바일 390×844. hero 높이 각각 viewport와 동일, hero top 0에서 유지, Our Villa가 화면 아래에서 진입, 배경 불투명·z-index 2, 다음 섹션 끝 뒤 hero가 위로 해제됨, reduced-motion에서 position relative, JS 오류 0. 공개 빌드 251개 통과.
- 커밋·업로드·운영 배포 없음.

## 2026-10-19 홈 섹션 복원 및 Hero / Explore 유지

- 원인: `intro.js`가 만드는 `.film-stage`를 `index.html`에서 제거했지만 `branding.js`의 홈 초기화가 해당 요소 존재에 종속되어 전체 프로모션 홈 변환을 건너뛰었다. 그 결과 홈 섹션 순서·콘텐츠가 달라졌다.
- `branding.js` 초기화 조건을 `.film-stage`에서 실제 `#home.hero`로 바꾸어 전체 홈 구성을 복원했다. `editorial.js`는 현재 `.facility-selector`가 있는 Explore 섹션을 덮어쓰지 않고, 해당 섹션의 배경 이미지와 AI 콘셉트 고지도 유지한다. “02 / EXPLORE YOUR VILLA” 유지.
- 이 복구는 현재 로컬의 미커밋 파일을 기준으로 했다. Git 마지막 커밋을 기준으로 되돌리지 않았다. 사전 복구본은 `backups/before-homepage-scope-fix-20261019/`에 보관.
- 검증: 브라우저에서 이전 Hero 작업 직전 DOM의 섹션 순서/제목과 현 상태 비교, Hero 및 Explore 존재와 JS 오류 확인. `node --check branding.js`, `node --check editorial.js`, `npm run check`, `npm run build` 통과. 커밋·업로드·배포 없음.

## 2026-10-19 풀 이미지 히어로 후속 수정

- 사용자 요청으로 숲색 비대칭 프레임을 제거하고 사진을 히어로 전체에 edge-to-edge 배치. 제목·설명·탐색 링크를 사진 위에 배치하고 하단 명암으로 가독성 확보. AI 콘셉트·사전 안내 고지 유지.
- 셔터·스크롤 원근 축소를 제거. GSAP 2.6초 카메라 pull-back과 줄 단위 마스크 타이포 등장, ScrollTrigger 이미지 드리프트 적용. 이미지 wrapper에 상하 10% 여유를 두어 스크롤 중 가장자리 노출 방지. 모바일 이동량 감소, 동작 줄이기 및 context 정리 유지.
- hero-editorial.js 문법 검사와 공개 빌드(251개) 통과. 이번 수정의 브라우저 시각 검수는 미완료. 커밋·업로드·배포 없음.

## 2026-10-19 홈페이지 히어로 및 GSAP 효과 교체

- `hero-editorial.js/css`: 기존 건축 WebP를 활용한 숲색 비대칭 히어로, 영문 대형 제목과 한국어/영어 안내·탐색 링크. index.html의 기존 intro.js 연결만 제거하고 새 히어로를 마지막에 초기화한다.
- 후속 사용자 요청으로 세로 리빌·패럴랙스를 중앙에서 양쪽으로 열리는 셔터, 이미지 줌아웃, 가로 방향 텍스트 등장으로 교체. 스크롤 시 사진 프레임만 축소·원근 회전하며 모바일은 회전 없이 축소한다. 스크롤 고정 없음.
- GSAP/ScrollTrigger 3.12.5 로컬 파일과 공개 빌드 목록 포함. matchMedia와 pagehide에서 정리하고 pageshow에서 복원. 동작 줄이기·라이브러리 실패 시 정적 화면 유지.
- 최초 구현에서 check, check:workflow(9/9), build(251개) 통과. 후속 효과 교체 후 hero-editorial.js 문법 검사와 공개 빌드(251개) 재통과. 브라우저 도구 초기화 실패 및 Chrome 실행 승인 중 사용자 중단으로 시각 검수는 미완료.
- 기존 사용자 변경 보존. 커밋·업로드·운영 배포 없음.

## 2026-10-18 Vision ScrollTrigger 이미지 리빌

- 종료 프레임이 화면 중심보다 아래로 밀리던 원인은 section의 세로 padding이었다. pin 구간의 padding을 없애고, 컨테이너를 정확히 `100svh`로 맞춰 마지막 `100vw × 100vh` 프레임이 뷰포트 중심에 정렬되게 했다. 제목은 단일 열로 고정해 마지막 프레임에서 그리드 압축이 생기지 않는다.
- 사용자 피드백에 따라 scroll 거리 `+=150%`를 `+=95%`, scrub을 `1`에서 `.7`로 줄였다.
- section-sized 종료 시안은 사용자 피드백으로 되돌렸다. 현재 끝 프레임은 중앙 정렬 `100vw × 100vh`, `+=95%` / `.7` 설정이다.
- 끝 프레임에서 pin이 풀리며 이미지가 갑자기 이동해 보이는 문제를 피하기 위해, ScrollTrigger `onLeave`에서 다음 section으로 부드럽게 handoff한다. 위로 돌아오면 handoff 상태를 해제해 리빌을 다시 역방향으로 확인할 수 있다.
- 위 handoff는 `cinematic.js`가 저장한 다음 형제가 이후 `chairman.js`의 DOM 재배치로 Vision 앞에 놓이면서 역방향 jump를 일으킨 것으로 확인했다. handoff를 제거하고, Vision 내부 `.container`를 명시적 pin 대상(`pinSpacing: true`, `pinReparent: false`)으로 고정했다. 이미지·전체 layout 로드 뒤 ScrollTrigger를 refresh한다.
- ScrollTrigger가 pin 대상 주위에 spacer를 삽입하면 `.container`가 더 이상 section의 직접 자식이 아니다. 따라서 Vision stage CSS를 `> .container`에서 descendant `.container`로 바꿔 pin 전후 모두 크기·position이 유지되게 했다.
- inner container pin은 spacer reparenting으로 이미지의 containing block을 바꿔 section 밖 배치를 만들 수 있어 제거했다. 현재 Vision section 자체를 pin하며, 자동 handoff는 계속 제거된 상태다.
- 기존 cinematic scroll loop가 동시에 `--vision-zoom`·`--vision-corner`를 갱신하던 Vision 처리와 observer 연결을 제거했다. GSAP trigger에는 `vision-reveal` ID와 중복 실행 guard를 추가했으며, legacy entrance opacity·clip-path·transform transition도 Vision 리빌 범위에서 무력화했다.
- 사용자 요청으로 GSAP ScrollTrigger Vision 시안은 전체 제거하고, 기존 cinematic Vision observer·zoom·corner 동작으로 복원했다. `vision-scroll-reveal.css` import와 파일, GSAP initializer를 삭제했다.

- `#vision`의 기존 이미지와 제목을 유지한 채, GSAP 3.12.5와 ScrollTrigger로 중앙 120px 정사각형에서 전체 뷰포트(`100vw × 100vh`)까지 확장하는 스크롤 리빌을 추가했다. 현재 `scrub: .7`, `pin: true`, `end: "+=95%"`이며 위로 스크롤하면 자연스럽게 되감긴다.
- 컨테이너만 width·height·border-radius(12px→0)를 애니메이션하고 이미지는 `object-fit: cover`로 유지한다. 가로 넘침을 막고, 모바일은 제목 위치만 조정한다. 동작 줄이기에서는 일반 16:9 이미지로 남는다.
- 되돌릴 때 `luxury-system.css`의 `vision-scroll-reveal.css` import와 `cinematic.js`의 Vision image reveal IIFE를 함께 제거하면 된다. 운영 배포는 하지 않았다.

## 2026-10-17 Edition 02 리본 렌더 우선순위 보강

- 이전 CSS 우선순위에 의해 리본이 검은색으로 보이는 현상을 막기 위해 `cinematic.js`가 생성 시 Edition 02 표면색·테두리를 직접 지정하고, 38초 연속 이동은 Web Animations API로 실행하도록 했다. hover 정지와 동작 줄이기 해제도 유지한다.
- 정지의 실제 원인은 이후 로드되는 `chairman.js`가 새 `.ribbon-track` 전체를 정적 마크업으로 교체하던 것이었다. 해당 교체 한 줄만 제거해 Edition 02 트랙과 애니메이션을 보존한다.
- 수정 범위는 `living-ribbon` 생성부뿐이다.

## 2026-10-17 로컬 미리보기 새 파일 즉시 반영

- `server.mjs`가 시작 시점의 공개 파일 목록만 사용해 새 CSS·미디어가 404가 되는 문제를 수정했다. 로컬 미리보기에서 루트 CSS/JS/HTML과 `assets/images|video|brand`의 안전한 파일명은 요청 시 해석되므로 이후에는 새 파일도 새로고침만으로 확인할 수 있다.
- 이는 로컬 개발 서버의 제공 범위만 바꾸며 공개 빌드 허용 목록과 운영 배포에는 영향을 주지 않는다.

## 2026-10-17 Edition 02 Travertine 리본 확정 시안

- 사용자 요청으로 Edition 02 리본의 표면·글자·테두리를 `#FAF9F6 / #141414 / #716E68 / #E2DED6 / #8E857B` 팔레트에 맞췄다. 38초 선형 애니메이션은 명시적으로 실행되며 hover에서만 멈춘다. 동작 줄이기 설정은 기존대로 정지한다.
- 범위는 `living-ribbon`뿐이며 본문·히어로·플로팅 내비게이션·다른 섹션의 구조나 내용은 변경하지 않았다.

## 2026-10-17 Quiet Architectural Luxury 리본 시안

- 사용자 제공 Edition 02 기준으로 기존 `living-ribbon`을 `MY OWN VACATION`과 `마이롯지`의 연속 루프로 교체했다. 38초 선형 이동, hover 정지, 동작 줄이기 정지를 적용했다.
- 기존 블루프린트 리본 시안은 `cinematic.js`와 `cinematic.css`의 living-ribbon 블록에만 있었으며, 히어로·내비게이션·다른 섹션은 변경하지 않았다.

## 2026-10-17 OUR STORY 아키텍처 에디토리얼 시안

- 사용자 요청으로 `#our-villa`의 `MY LODGE / OUR STORY` 그리드만 따뜻한 아이보리 바탕·에디토리얼 타이포그래피·프레임 이미지 구성으로 재정의했다. 길잡이, 히어로, 내비게이션과 다른 섹션은 유지했다.
- `our-story-refinement.css`를 `luxury-system.css`에서 import하는 방식이라 해당 import만 제거하면 시안을 되돌릴 수 있다. 운영 배포는 하지 않았다.

## 2026-10-17 아키텍처 블루프린트 리본 시안

- 기존 `living-ribbon`만 석재색 바탕·드래프팅 라인·기술 표기·연속 42초 이동으로 재구성했다. hover 시 58초로 부드럽게 감속하며 동작 줄이기 설정에서는 정지한다.
- 히어로·내비게이션·다른 섹션에는 변경이 없다. 운영 배포는 하지 않았다.

## 2026-10-17 플로팅 내비게이션 시안

- 사용자 제공 레퍼런스를 반영해 데스크톱 전용 56px pill 형태의 반투명 플로팅 내비게이션을 `navbar-refinement.css`에 적용했다. 기존 로고·메뉴·화면 보기 드롭다운·언어 전환·CTA 기능은 유지했다.
- 되돌릴 때 `luxury-system.css`의 `navbar-refinement.css` import를 제거하거나 해당 파일을 이전 시안으로 복원한다. 운영 배포는 하지 않았다.

## 2026-10-17 한국어 히어로 이미지 미리보기 교체

- 사용자 요청으로 `assets/video/MyLodge1.png`를 한국어 홈페이지 히어로에 임시 적용했다. 영어 히어로는 기존 영어 영상을 유지하며, 기존 한국어 영상과 포스터 파일은 보존했다.
- 되돌릴 때 `intro.js`의 한국어 static-image 분기를 제거하고 기존 한국어 영상 선택식을 복원하며, `scripts/public-assets.mjs`의 `MyLodge1.png` 공개 목록 한 항목을 제거한다. 운영 배포는 하지 않았다.

## 2026-10-15 타이포그래피 역할 지정

- 사용자 지정: Display Canela, heading Neue Haas Grotesk/Avenir Next, body Avenir Next. `tokens.css`에 역할 토큰을 추가하고, 사이트·진입 화면에 적용했다.
- 웹폰트를 새로 내려받거나 공개하지 않았다. 로컬에 라이선스된 서체가 있을 때 사용하며, 한국어 글리프는 Noto Sans KR로 안전하게 대체한다. 변경은 로컬 개발본만 해당하며 빌드·배포는 하지 않았다.

## 2026-10-09 최신 개발본 운영 배포 완료

- 사용자 요청으로 GitHub/Vercel 업데이트 수행. 사이트 변경 c865466, 공개 빌드 목록·모바일 조사 근거 99db1d9를 기존 codex/main-pc-handoff-20260930 브랜치에 저장.
- 공개169파일 prebuilt 업로드. CLI62.0.0 Not authorized 응답 후 이전 성공 버전61.1.0으로 업로드·promote 완료. 계정/팀/보호 설정 변경 없음.
- Preview dpl_HMcqgfSSWhNXGtHuuy7hrkwiFY4D → Production dpl_92noGSrH3UaSU9cAvXKfVudHaxQV, READY, 2026-10-09 20:21:18 KST. 운영 https://my-lodge-business.vercel.app/ 연결 확인.
- 운영 HTML HTTP200 및 width=device-width, mobile-layout.css/js 참조 확인. 모바일 CSS HTTP200 확인. 이번 요청에서 브라우저/실기기 재검수·자동 테스트 미실행.
- docs/review/release-20261009/deploy-manifest.json에 공개 산출물 SHA256 기록. 원본·백업·내부 자료·상담 운영 시안은 운영 배포 제외. main 변경 없음. 기존 기타 미추적 작업 자료 보존.
## 2026-10-09 최신 개발본 GitHub·Vercel 배포 준비

- 사용자 요청으로 기존 GitHub/Vercel 배포 보류 해제. 기존 codex/main-pc-handoff-20260930 브랜치에 최신 개발본 업로드, 기존 IMTGroup/my-lodge-business 운영 프로젝트 업데이트 진행.
- 모바일 viewport device-width 복원, mobile-layout.css/js 공개 목록 포함. 최신 문구·시설 이미지·네온 효과·슬라이드 읽기 시간·터치 스와이프 및 로고 보완 포함.
- 공개 빌드 169파일 생성 완료. 내부 문서·사진 원본·백업·상담 운영 시안은 공개 산출물 제외. 별도 테스트는 이번 요청에서 실행하지 않음.
- 배포 완료 상태와 식별자는 후속 기록에서 확인. 실제 휴대폰 강제 다크·보조기술 검수 및 조사 문서의 미구현 개선안은 계속 후속 과제.
## 2026-10-09 스와이프 이후 모바일 조작 개선 조사

- 새 요청에 대해 19:08:14–20:08:47 KST, 60분 33초 조사. 오전 조사 시간과 별도. 자료·코드·브라우저 관찰·문서 정리 포함.
- docs/MOBILE-INTERACTION-OPPORTUNITIES-20261009.md: 개선안24개, 우선5개, 실행 순서, 후속 검수32항목. 기존 기획 M번호와 중복 관계 표시.
- docs/research/mobile-interactions-20261009/: 공식 자료40개, 관찰29항목, JSON5개, 확대 화면 기록, 실제 세션 시간.
- 주요 확인: 갤러리 touch-action 계산값 pan-y로 확대 정책 충돌; 메뉴/초점 중 사진 전환; 언어 패널 중 영상 재생; 320px 영문 정지 버튼 이동; 검토용200% 생활 정지 버튼 화면 밖; 실제 뒤로가기 읽기 위치 초기화; 실제 언어 전환 시 선택/수동 정지 초기화.
- 기존 정상 동작: 수동 정지와 폭 변경 중 정지 유지, 메뉴/언어 패널 상호 닫힘, 낮은 메뉴 내부 스크롤, 화면 밖 중단, 비활성 장면 제외. 실제 휴대폰 터치·핀치·OS 확대·강제 다크·보조기술 미검수.
- 문서만 추가·인계 갱신. 제품 코드/빌드/배포 작업 없음. GitHub/Vercel 보류 유지. 임시 브라우저 규격 해제.
## 2026-10-09 모바일 슬라이드 좌우 스와이프

- 생활 슬라이드·사진 갤러리: 모바일 폭 1023px 이하의 터치 입력에서 왼쪽으로 밀면 다음, 오른쪽이면 이전. 최소 48px 및 수평 우세 조건, 세로 이동 잠금으로 스크롤과 구별.
- touch-action pan-y pinch-zoom으로 세로 스크롤/확대 유지. 다중 터치·pointercancel·capture 손실·폭 전환은 취소 처리. 버튼/링크 입력은 제외.
- 터치 중 타이머 중단, 손을 놓으면 현재 장면 읽기 시간 재시작. 사용자가 정지한 경우 스와이프만 동작하고 자동 재생 정지 유지. 무한 순환.
- app.js/editorial.js/mobile-layout.js/css 및 모바일 작업본 반영. 별도 테스트/빌드 미실행, 실기기 스와이프 검수 대기. 배포 보류.

## 2026-10-09 사진 슬라이드 읽기 시간 조정

- 생활 슬라이드 기본 PC 10초/모바일 14초. 현재 장면의 한글 글자·영문 단어 및 본문 글자 크기로 읽기 여유 계산, 최대 22초.
- 사진 갤러리 기본 PC 8초/모바일 10초. 실제 캡션 줄바꿈 한 줄 추가마다 2초, 최대 16초.
- 이는 사진 탐색과 읽기 시간을 고려한 설계값이며 실제 방문자 체류 분석 결과가 아님. 기존 정지·화면 밖 중단·동작 줄이기·무한 반복 유지.
- app.js/editorial.js와 모바일 작업본 동기화. 별도 테스트/빌드 미실행. 배포 보류. 이전 조사 기획서의 10초/8초는 조사 시점 상태임.

## 2026-10-09 헤더 로고 오른쪽 잘림 보완

- 심볼/워드마크 crop 컨테이너에 오른쪽 여백 추가. 모바일 워드마크 flex 축소를 막아 끝 글자 잘림 방지.
- branding.css, mobile-layout.css 및 모바일 작업본 동일 반영. 별도 테스트/빌드 실행 없음, 배포 보류.

## 2026-10-09 헤더 로고 아래 점 형태 정리

- 세로형 로고를 심볼/워드마크로 나누는 CSS crop에서 아래 영문 글자 윗부분이 모바일 심볼 아래에 노출되는 원인 확인.
- branding.css의 심볼 이미지에 비율 기반 clip-path 추가. 본사이트와 모바일 작업본에 동일 적용. 로고 원본·워드마크·하단 로고 유지.
- 별도 테스트/빌드 실행 없음. GitHub/Vercel 배포 보류 유지.

## 2026-10-09 모바일 개선 자료 조사·기획

- 사용자 요청에 따라 최소 1시간의 조사 세션을 진행하고 공식 자료 링크 38개와 프로젝트 적용점을 수집. 국내 KWCAG 자료는 배포 안내 확인 범위이며 원문 전체 검독/인증은 미실시.
- docs/MOBILE-IMPROVEMENT-PLAN-20261009.md: 개선 작업 M01–M18, 검수 T01–T35, 단계별 실행 순서, 자동 재생/읽기 대안/모션 제어 결정안 작성.
- docs/research/mobile-20261009/: 출처, 실제 관찰, JSON 증거, 검토실 캡처, 세션 시간 기록. 가로 이미지 sizes 불일치, 사진 캡션 높이 변화, 확대 적용 범위, 영문 역할 설명 등을 기록.
- 페이지 잘림과 긴 자연 높이 구분, 상단/하단 로고의 OS 다크와 강제 다크 구분, 내부 Business Valley 상세와 외부 한즈시티 이미지 링크 범위 포함.
- 이번 작업은 연구·문서화. 제품 코드 변경/새 테스트 실행/운영 배포 없음. 실기기 강제 다크·핀치줌·보조기술·사용자 성능·고령 사용자 검수는 후속 과제로 명시. GitHub/Vercel 보류 유지.

## 2026-10-09 PC·모바일 비교 검수

- 한영 14규격과 영문 200% 4규격 비교. 활성 본문 가로 넘침 없음, 주요 제목·설명 동일.
- 서비스 소개 13→16px, 구상 안내 12→14px, 번호·표기 배율 연동. 푸터 반투명 연락 안내 스타일 상속 수정.
- 모바일 생활 슬라이드의 가장 긴 장면이 높이 확보(grid), 비활성 inert 추가. 모바일 생활 10초/사진 8초, PC 5초 유지.
- 메뉴 1회 이동·정지 유지·이미지 화면 도달 후 로드 확인. 구문, workflow 9/9, 빌드 169 성공.
- docs/MOBILE-COMPARISON-20261009.md 및 docs/review/mobile-comparison-20261009에 상세 기록.
- 후속: 영상 속 글자 확대 불가, 태블릿 세로 길이, 실기기 강제 다크/OS 확대/스크린리더. GitHub/Vercel 배포 보류.
## 2026-10-09 모바일 이미지·규격 재검수 완료

- 전체 전경 1.1:1 크롭 → 16:9 원경, 사진 덱 PC top -32px/+64px 및 2열 상속 제거.
- 긴 영문 강조의 200% 폭 초과, 일부 제목 배율 누락, 844px 가로 모바일 규칙 누락 수정.
- 한영 14개 규격 및 확대 4개 규격 넘침 없음. 시설 이미지 6개 로드 확인. 공개 WebP 132개 HTTP 성공. 구문·workflow(9/9)·빌드 성공.
- 상세 및 증거: docs/MOBILE-RECHECK-20261009.md, docs/review/mobile-recheck-20261009/.
- 실기기 강제 다크모드 등 검증 대기 범위 문서에 명시. GitHub/Vercel 배포 보류.
## 2026-10-09 모바일 환경 재구축

- 홈페이지·치앙마이 상세의 임시 width=1280 설정 제거. 실제 기기 viewport 사용.
- mobile-layout.css/js 공통 연결: 모바일 2열 시설 탭, 단일 본문 카드, 정상 흐름의 영상·생활 슬라이드 조작부, 단일 활성 사진 덱, 실제 헤더 기준 이동, 로고 색 보호.
- mobile.js의 회전 시 aria-hidden 제거 코드 삭제. 검토실 스크립트는 테마/글자 배율만 처리. baseline 미수정.
- docs/MOBILE-REBUILD-20261009.md에 변경 내용과 검증 대기 항목 기록. 테스트 별도 미실행, 실기기 다크모드 검증 대기.
- localhost 4173/4186 서버 재시작. GitHub/Vercel 배포 보류.
## 2026-10-09 컨시어지 서비스 이미지 재구성 완료

- 10월 8일 새 문구에 맞춰 built-in image_gen으로 각 1장 생성: 도착 전 환영 트레이·식료품 세팅 / 유리문 시설 점검과 라운지 정돈 / 다른 오너와 키카드를 교류하는 휴가 장면.
- 따뜻한 자연광, 우드·아이보리, 해안 별장 분위기 통일. 기존 이미지 재사용하지 않음.
- service-ready / service-property-care / service-owner-exchange 20261008 반응형 WebP 9개 등록. 원본 및 프롬프트는 docs/facilities-20261008 보관.
- 원본 및 모바일 작업본 반영. 새 자산 허용 목록 로드를 위해 로컬 서버 재시작. 문구 유지, 배포 보류.
## 2026-10-08 컨시어지 서비스 문구 31–33 반영

- 세 카드 제목: 컨시어지 스탠다드 / 시설 관리 서비스 / 1 + 1 + 1.
- 설명은 사용자 요청 문구 그대로 반영. 영문 대응 추가.
- 기존 이미지와 서비스 구상 안내 유지. 원본 및 모바일 작업본 반영.
- 배포 보류. 별도 테스트 실행하지 않음.
## 2026-10-08 코랄 하이라이터 시안 적용

- 사용자 선택 4번: 미래 비전 치앙마이 카드의 IT맨 / 디지털노마드 두 단어를 코랄 하이라이터와 밝은 아이보리 글자로 강조. 기존 민트 강조 제거.
- 문구: 전 세계 IT맨과 디지털노마드들이 집결하는 성지. 시안에 맞춰 줄바꿈 적용.
- 영문 tech community / digital nomads 동일 강조. 치앙마이 이미지 링크 유지.
- 원본 및 모바일 작업본 반영. 배포 보류. 이번 요청에서 별도 테스트는 실행하지 않음.
## 2026-10-08 별장 분위기 카드 이미지 교체

- 미래 비전의 MY LODGE SHARE 카드 이미지: 인물 중심 식사 모임 → 별장·풀장·카바나·테라스 중심 새 이미지.
- built-in image_gen 생성 원본/프롬프트: docs/facilities-20261008/brand-villa-atmosphere-original.png, villa-atmosphere-generation.json.
- brand-villa-atmosphere-20261008 responsive WebP 3개 및 공개 자산 등록. 이미지 재사용 안 함. 문구 유지.
- 원본 및 모바일 작업본 반영. 배포 보류.

## 2026-10-08 IT맨 강조 및 치앙마이 이미지 링크 복원

- 미래 비전의 치앙마이 카드 ‘IT맨’ 단어만 1.18배/900 굵기, 밝은 민트·네온 glow·밑줄로 강조. 기존 한국어 문장 유지.
- 해당 이미지에만 https://hanzcity.com/chiangmai/intro 링크 복원. 카드 설명은 클릭 이동 안 함. 이미지에 ↗ 표식 및 키보드 포커스 적용.
- 본문 링크 전체 제거의 명시적 사용자 예외. 영문 대응 및 모바일 작업본 반영. 배포 보류.

## 2026-10-08 오너 혜택 메뉴 명칭

- 상단/모바일 카테고리 ‘별장 주인들에게’ → ‘오너 혜택’. 길잡이 안내 링크에도 같은 명칭.
- 영문 ‘Owner Benefits’. 원본과 별도 모바일 작업본 반영. 배포 보류.

## 2026-10-08 미래 비전 카드 분위기 통일

- 사용자 요청: 문구 수정 없이 두 카드 재구성.
- 두 카드 딥그린 바탕·아이보리 제목·골드 라벨·연녹 본문 통일. 사진 3:2 프레임과 색감, 제목/본문 간격 통일.
- 산만한 후면 사진 대신 차분한 그린 그라데이션 배경. 사진과 문구는 그대로 유지.
- 원본 editorial.css 및 모바일 작업본 반영. 배포 보류.

## 2026-10-08 단지 조감도 네온 테두리

- ‘마이롯지 단지 전체 풍경’의 .vision-photo에 시설 카드와 동일한 5px 밝은 이동 네온·8초 순환·외곽 glow 적용.
- 공통 observer로 각 섹션이 화면에 들어올 때 재생. 숨긴 탭·모션 줄이기 처리 공유.
- 원본 및 모바일 작업본 반영. 배포 보류.

## 2026-10-08 네온 테두리 시인성 강화

- 사용자 피드백: 60~70대에게도 명확히 보이도록.
- 메뉴 4px, 상세 카드 5px로 확대, 불투명도 100%, 빛나는 구간 확대와 청록·백색·노랑·보라 대비 강화.
- 순환 6초/8초로 조정, 외곽 glow 추가. 모션 줄이기에서도 밝은 정적 테두리 유지.
- 원본 및 모바일 작업본 반영. 배포 보류.

## 2026-10-08 시설 테두리 네온 이동 효과

- 시설 메뉴 6개와 상세 이미지/설명 카드 외곽에 얕은 청록·골드·보라 이동광 적용. 1.5~2px, 9초/13초 반복, 메뉴별 시간차.
- CSS conic-gradient 및 mask로 테두리만 출력. 장식 pointer-events:none으로 클릭 방해 없음.
- 화면 밖과 숨긴 탭에서는 animation pause, 모션 줄이기에서는 정적 테두리로 전환.
- 원본 및 모바일 작업본 반영. GitHub/Vercel 보류.

## 2026-10-08 미래 비전 제목 변경

- 브랜드 소개 제목 → ‘휴가와 함께 시작하는 / 미래의 비전.’ 두 줄 구성.
- 원본 editorial.js, 영문 대응 localization.js 및 모바일 작업본 반영. 배포 보류.

## 2026-10-08 휴양지 소개 카피 변경

- ‘꽉막히고 답답한 콘크리트 블럭이 아니라.’ → ‘꽉막히고 답답한 콘크리트 블럭이 아닌’.
- 설명 → ‘가지는 여유로운 일상과 꿈을 실현할 수 있는 곳.’
- 원본 chairman.js 및 영문 대응 localization.js, 모바일 작업본 반영. 이미지 유지, 배포 보류.

## 2026-10-08 지역별 파크 명칭 변경

- ‘주문진의 별장’ → ‘마이롯지 주문진 파크’, ‘양양의 별장’ → ‘마이롯지 양양 파크’.
- 원본 editorial.js, 영문 대응 localization.js 및 모바일 작업본 반영. 배포 보류.

## 2026-10-08 단지 전체 풍경 제목 변경

- ‘별장 단지의 전체 풍경.’ → ‘마이롯지 단지 전체 풍경.’
- 원본 editorial.js 및 영문 대응 localization.js, 모바일 작업본 반영. 이미지 유지, 배포 보류.

## 2026-10-08 지역별 별장 제목 변경

- ‘바다 곁에서 그리는 우리의 다음 별장.’ → ‘바다를 품은 아름다운 내 집.’ 두 줄 구성 유지.
- chairman.js 및 영문 대응 localization.js, 모바일 작업본 반영. 배포 보류.

## 2026-10-08 두 사진 영역 자동 슬라이드

- life-story 좌우 이동 버튼 제거. 화면에 보일 때 5초 간격 무한 순환, hover로 멈추지 않도록 변경.
- ‘사진으로 만나는 하루’ 좌우 버튼·방향키·스와이프 이동 제거, 5초 간격 자동 반복으로 변경.
- 양쪽 모두 순번과 재생/일시정지 유지. 화면 밖·숨겨진 브라우저 탭·OS 모션 줄이기에서는 타이머 중지.
- 원본 및 모바일 작업본 동기화. 모바일 미리보기의 터치 시 강제 일시정지 제거. 배포 보류.

## 2026-10-08 풀파티·카바나 카피 변경

- 제목: 빛나는 풀파티. / 오너들만의 카바나.
- 설명: 음악과 만남의 풀파티. 카바나에서의 느긋한 휴식.
- 영문 대응 및 원본·모바일 작업본 반영. 이미지 유지, 배포 보류.

## 2026-10-08 본문 이동 링크 정리

- 사용자 요청: 카테고리 메뉴와 마이롯지 길잡이 안내를 제외한 페이지 이동 링크 제거.
- editorial.js에서 최종 렌더링 후 본문/인트로/마지막 CTA 및 헤더 별도 CTA 제거. 로고 홈 링크와 접근성 skip-link 보존.
- 브랜드 경로 카드 링크는 article로 바꿔 사진·소개 내용을 유지하고 하단 이동 문구·클릭 이동·링크 hover 효과 제거.
- 치앙마이 소개 페이지에도 같은 정리 적용. 언어 선택과 슬라이드 조작 버튼 유지.
- 원본 및 별도 모바일 작업본 반영. GitHub/Vercel 보류.

## 2026-10-08 풀파티·카바나 이미지 재생성

- 사용자 첨부 반얀트리 풀파티 사진 2장을 참고해 built-in image_gen 생성: DJ 전경, 청록 풀장, 다수 성인 파티 참석자, 보라·파랑 공연 조명, 흰 카바나.
- facility-pool-cabana-20261008 480/960/1680 WebP 교체. 기존 생성 PNG 원본은 보존. 원본 및 프롬프트는 docs/facilities-20261008/facility-pool-cabana-reference-original.png, pool-party-reference-generation.json.
- 원본/모바일 검토실이 공유 자산을 사용하므로 모두 반영. 로컬 적용 화면 확인. GitHub/Vercel 보류.

## 2026-10-08 시설 상세 링크 제거

- 시설 6개 슬롯의 ‘전체 공간 구상 보기 ↗’ 링크를 생성 템플릿에서 제거.
- chairman.js 원본 및 별도 모바일 작업본 반영. 영문판도 같은 템플릿으로 제거됨. 배포 보류.

## 2026-10-08 시설 네온 아이콘 조정

- 비치사이드: 파라솔·해변·태양, 풀파티·카바나: 카바나·풀장·음표로 구분. 같은 pool 스프라이트 중복 제거.
- 마켓: 다색 차양·쇼윈도, 컨시어지: 서비스 벨·반짝임. 청록·골드·핑크·보라 네온 선과 glow 적용.
- 기존 villa/music 이미지 아이콘 유지. 새 4개는 SVG로 작은 화면에서 선명하게 출력하고 aria-hidden 장식 처리.
- editorial.js/css 원본 및 별도 모바일 작업본 반영. 로컬 화면 확인 증거: docs/facilities-20261008/neon-facility-icons-preview.png.
- 배포 보류 유지.

## 2026-10-08 시설 6개 구성

- 사용자 선택: 테라스는 별장 외관 설명에 합침. 별장 외관 / 비치사이드 / 풀파티 · 카바나 / 카페테리아 · 클럽 / 마켓 / 컨시어지.
- chairman.js에서 6개 탭과 패널 생성 후 editorial.js에서 시설별 사진·설명 적용. PC 3열 2줄, 모바일 2열 3줄.
- built-in image_gen으로 풀파티·카바나, 마켓, 컨시어지 이미지 각각 생성. 원본·프롬프트는 docs/facilities-20261008/, responsive WebP 9개는 assets/images/. 기존 마켓 이미지는 보존하고 v2 사용.
- 공개 자산 목록 등록 및 영문 카피 추가. 별도 모바일 site 작업본에도 동기화. baseline은 보존.
- 4173 서버가 이전 파일을 보여주어 확인한 프로세스만 재시작. 현재 github-sync/MyLodge_Business가 4173 최신 개발 소스.
- GitHub/Vercel 업로드 보류 유지.

## 2026-10-08 브랜드 소개 제목 변경

- ‘누군가의 별장에서, 우리의 별장으로.’ → ‘그들만의 별장에서 그 특별함이 내게로.’
- 원본 branding.js와 별도 모바일 작업본 모두 반영. 두 줄 구성과 두 번째 줄 강조 유지. 영문 대응 문구 추가.
- 다른 문구 일괄 변경은 아직 미반영. GitHub/Vercel 업로드 보류.
- 이 변경부터 원본 소스와 모바일 검토실 최초 해시는 달라진다. 최초 22개 무변경 기록은 검토실 생성 시점의 기록이다.

## 2026-10-08 Isolated mobile preview implementation

- Local review lab: http://127.0.0.1:4186/ (running hidden localhost Node server).
- Work copy and baseline: docs/mobile-preview-20261008/site and baseline. Instructions/results: README.md in that directory.
- Mobile viewport, compact header, intro controls, facility features, life slider flow/rotation/70px offset, anchor offset, logo plate and footer contrast improved in isolated copy only.
- Evidence in evidence/; audit report updated with partial/completed/real-device pending distinctions.
- Root public source SHA256 comparison: 22 files, 0 changes. Shared assets are read only. No GitHub/Vercel update.
- Do not rerun prepare.mjs without preserving work copy. It resets copied source edits.
- Browser forced dark, real device touch, full low-network image coverage, dedicated logo assets remain pending.

## 2026-10-08 Mobile audit and remediation plan

- Detailed Korean report: docs/마이롯지_모바일_점검_및_보완계획_20261008.md
- Evidence: docs/review/mobile-audit-20261008/measurements.json and screenshots.
- Confirmed: initial mobile viewport override persists; 844x390 intro controls extend to y=426; mobile facilities hide feature lists; landscape handler removes slide aria-hidden states.
- Current light-mode transparent logos appear normal. Real-device forced-dark results remain pending.
- Audit only. No homepage implementation changes, GitHub push or Vercel deployment.

## 2026-10-08 생활 장면 자동 슬라이드 (로컬)

- 첫 제목을 ‘완벽한 휴가의 시작.’으로 변경, 상단 ‘도착하는 순간’ 유지.
- 기존 스크롤 장면 전환을 5초 간격 자동 순환 슬라이드로 교체. 이전/다음 및 일시정지 버튼 추가.
- 화면 밖/탭 비활성/마우스 호버/키보드 포커스 시 자동 전환 중지. 모션 줄이기 설정에서는 수동 전환.
- 영문 제목 및 버튼 대응. 빌드 146개 공개 파일 생성. GitHub/Vercel 업로드 보류 유지.

## 2026-10-08 별장 외관 이미지 교체 (로컬)

- 반얀트리 서울 오아시스의 카바나·풀장 분위기를 참고해 호텔 풀파티 콘셉트 신규 생성.
- 시설 둘러보기 첫 번째 탭 사진만 교체. 기존 연결 이미지와 원본은 보존.
- 신규 WebP 480/960/1680 공개 에셋 등록. 원본 및 생성 프롬프트는 docs/facilities-20261008에 보관.
- 실제 반얀트리 사진이 아닌 AI 콘셉트 표시 유지. GitHub/Vercel 업로드 보류.

## 2026-10-08 별장 특징 두 번째 항목 수정 (로컬)

- ‘풀장과 이어지는 데크’ → ‘이비자에 버금가는 풀파티 무대.’
- 영문 대응 항목 갱신. GitHub/Vercel 업로드 보류 유지.

## 2026-10-08 별장 특징 항목 수정 (로컬)

- ‘곡선형 모듈 건축’ → ‘최신식 모듈러 하우스 별장.’
- 영문 대응 항목 갱신. 업로드 보류 유지.

## 2026-10-08 별장 소개 본문 수정 (로컬)

- 현재 본문: 최신식 별장과 365일 완벽한 풀파티. 그곳에 닿는 순간, 나의 일상은 화려함으로 바뀐다.
- 영문 번역도 갱신. GitHub/Vercel 업로드는 보류 유지.

## 2026-10-08 ?? ?? ?? ?? (??)

- ?? ?? ??: `??? ??. / ?? ?? ?? ?? ???!`
- ?? `??? ??. / ??? ??.`? ??. ?? ??? ?? ?? `??? ??.`? ??.
- ?? ?? ??? ??. GitHub/Vercel ??? ?? ?? ??.

## 2026-10-08 ??? ?? ?? ?? (???)

??? ?? ??? our-villa ??? ???? ???? / ? ???? ???.? ??. ? ??? ?? ? ?? ??, ?? ?? ??. GitHub/Vercel ??? ?? ??.

## 2026-10-08 소개 영상 문구·만남의 광장 이미지 수정 (로컬만)

사용자 배포 중지 지시: 일 마감 후 별도 요청 전 GitHub push·Vercel deploy 금지. 한국어 영상 자막 나! / 별장있다., 내 안에 완벽한 여유. / 속에 나를 담다., 내가 원하는 사람들과의 만남., 그들과 함께 할 수 있는 만남의 광장., 매일마다 축제. / 꺼지지 않는 화려함., 기쁨의 향연.으로 수정. 13–17초 장면을 생성한 해안 별장 단지 교류 광장 05-meeting-plaza-20261008.png로 변경. 기존 원본 보존, 무한재생 유지. 한국어 PC·모바일 영상·포스터 렌더링. 영어 영상 자막은 이번 한국어 문구 요청에서 변경하지 않음.

## 2026-10-08 소개 영상 반복 재생 및 첫 자막 강조

사용자 요청으로 intro video에 native loop 적용(한국어·영어 공통), 재생 종료 상태·포커스 이동 이벤트 제거. 기존 일시정지·음량·화면 이탈 자동 정지·동작 줄이기 유지. 한국어 첫 장면 나128px / 별장있다.96px로 변경, 두 줄 간격152px로 확보. PC·모바일 한국어 영상과 포스터 재렌더링. 영어 문구 변경 없음. GitHub d7838a4 push, Vercel CLI62.0.0로 dpl_2qXRJN3pJUnnxypigwiTnw6BH9pw READY 후 promote 완료. 운영 video.loop=true 및 재생 확인. 생성 스크립트 docs/film-build/copy-20261006/render-copy.py 및 scenes-20261006/render-scenes.py.

## 2026-10-07 로고 다크 모드 표시 수정

사용자 요청으로 상단·하단 로고에만 적용. built-in image_gen background extraction 결과를 lossless alpha WebP로 저장(assets/brand/mylodge-logo-transparent-20261007.webp). 원본 보존. branding.js 로고 자산 교체, branding.css 로고 multiply 제거, 두 로고 영역에 밝은 gradient 배경·only light 적용. 전체 페이지 다크 모드 및 임시 PC viewport 유지. 공개143파일. Vercel dpl_DnuWnQPNgnAHz3N9ovHtXKXQqTrx READY 후 promote. 운영 상단·하단 로고 표시 확인, 실제 Samsung 강제 다크 모드는 미검사. 추출 prompt: remove white background only, preserve original logo/text/layout, transparent alpha, no redesign. 생성 원본 exec-4e0cbab7-7e8c-4bfe-8122-6fed581d851b.png.

## 2026-10-07 모바일 PC 레이아웃 임시 조치

사용자 요청으로 모바일 수정 작업을 보류하고 700px 이하 최초 접근 시 viewport width=1280으로 PC 레이아웃을 축소 표시. 메인·Business Valley에 스타일 로드 전 동기 처리. 한국어·영어 공통, 확대 제한 없음. 기존 모바일 CSS는 보존. 브라우저 자체 데스크톱 사이트 설정을 바꾸는 방식은 아니며 화면 배치만 PC 기준으로 표시. 실제 모바일 브라우저 강제 다크 모드 문제는 이 조치에서 해결하지 않음. 후속 모바일 전용 개선 시 두 HTML의 임시 스크립트를 제거할 것.

## 2026-10-07 이미지 및 반복 문구 정리 운영 배포 완료

사용자 요청으로 eb2cdc3 커밋 GitHub codex/main-pc-handoff-20260930 push. 새 이미지12종·WebP36개·반복 문구 정리·사진 네온 배지 제거·영어 대응 포함. 공개142파일 prebuilt 운영 배포 dpl_AYRWGXqHYQ1dNRBkaWoVT4hUPYf6 READY 후 promote, https://my-lodge-business.vercel.app/#ownership 화면에서 새 이미지·제목·본문 확인. 브라우저 콘솔 오류 없음. 증거 docs/review/unique-images-20261007/production.png. 비공개 자료·원본·별도 상담 작업은 배포 제외.

## 2026-10-07 반복 문구 및 가독성 정리

시설 안내는 공간 선택 안내로, 생활 갤러리는 사진 중심으로 정리. 갤러리 사진 위 설명을 숨겨 하단 상태 안내에만 표시(슬라이드 변경·접근성 안내 유지). 별장 주인 카드의 추상적인 반복 문장을 구체적인 생활 장면 한 문장으로 축약. 컨시어지 카드 역할을 방문 안내·공간 관리·다음 여행 안내로 구분. 길잡이·브랜드 카드·전체 조감도·마무리의 중복 설명 삭제. 영어 번역 동기화. 회장 지정 영상/자연/마무리 문구와 서비스 구상 안내 유지. 로컬 KO/EN 컨시어지 및 갤러리 변경 확인, 콘솔 오류 없음. 공개 빌드142파일 생성. 세부 기록 docs/COPY-DEDUPLICATION-20261007.md. GitHub/Vercel 미배포.

## 2026-10-07 반복 이미지 정리 및 전용 이미지12개 제작

사용자 요청: 한 번 사용한 이미지 재사용 금지, 연계 장면 예외. built-in image_gen12종 생성 후 별장 주인3개·컨시어지3개·생활 갤러리3개·브랜드 소개1개·전체 조감도1개·Valley 자원 교류1개 배치. 480/960/1680 WebP36파일 추가, 공개142파일. 숨겨진 읽기 섹션 배경4개 제거, 서비스 배경을 별도 living-dinner로 변경. 예외: 시설 탭→life-story 동일 시설 소개, 브랜드 별장 카드→ownership 해당 카드, 치앙마이 카드→Valley hero, 같은 섹션 안 배경·전경. 원본·프롬프트는 docs/unique-image-originals-20261007 및 unique-images-20261007.json 보존. 사진 위 네온 배지는 앞선 요청대로 모두 제거 유지. 로컬 반영, GitHub/Vercel 배포 없음.

## 2026-10-07 별장 주인 카드 네온 배지 제거

추가 요청으로 ownership 사진 배지3개도 제거. 소개 카드의 사진 배지는 모두 제거하고 시설 선택 탭4개에만 네온 아이콘 유지. 로컬 반영.

## 2026-10-07 소개 카드 네온 배지 제거

사용자 사진 지정으로 brand-paths 별장·치앙마이 카드 사진의 네온 배지2개 제거. 시설 탭4개와 별장 주인3개 유지, 총7개. 로컬 반영.

## 2026-10-07 GitHub·Vercel 운영 업데이트 완료

사용자 요청으로 현재 홍보 사이트 공개106파일 반영. 소스 커밋89119f7을 기존 codex/main-pc-handoff-20260930 브랜치에 push. 새 지역/시설 이미지, 치앙마이 연결, 영어 번역·영상, 네온 아이콘9곳, 하단 인생의 휴식처. / 마이롯지. 포함. Vercel CLI61.1.0 기존 IMTGroup 인증으로 prebuilt Preview dpl_D8Ls8EsjPBNiGXrzcNFVz3hNHxBL READY 후 promote. 최종 dpl_6bQcVdpVPr55i51y5LADocFLsGyY production READY, https://my-lodge-business.vercel.app 연결 확인. 운영 브라우저 네온9개·변경 제목 확인, docs/review/release-20261007/production.png 저장. 공개 빌드만 배포, 원본·백업·내부 문서 미배포. main 병합 없음.

## 2026-10-07 하단 마무리 제목 변경

사용자 요청으로 하단 제목을 인생의 휴식처. / 마이롯지. 두 줄로 변경. 영어는 Your haven in life. / MyLodge.로 대응. 배경 사진과 버튼 유지. 로컬 반영.

## 2026-10-07 네온 아이콘 사이트 적용

사용자 선택한5번 네온 스타일 적용. built-in image_gen으로 간결한 투명 배경4종 atlas 생성, assets/brand/mylodge-neon-icons-20261007.png 보존. editorial.js 시설4개 탭에 별장·풀장·커피·음악 아이콘 및 별장 주인3개/브랜드 경로2개 사진 배지 배치. editorial.css 짙은 그린 배경·선택 테두리·작은 화면 아이콘 크기 반영. 장식은 aria-hidden·pointer-events:none, 기존 탭/외부 링크 유지. 공개 목록에1파일 추가(106파일), server.mjs PNG MIME 추가 및 확인된 로컬 서버 재시작. docs/review/neon-icons-20261007 참고. 로컬 반영, 운영 배포 없음.

## 2026-10-07 키치한 아이콘 디자인5안

사용자 대표 피드백으로 아이콘 시안5종 생성. 팝 스티커, 젤리3D, 레트로 마스코트, 크롬 팝, 네온 클럽. 각 안은 별장·풀장·커피·음악4종을 비교하는 콘셉트 보드이며 docs/review/kitsch-icons-20261007에 PNG와 생성 프롬프트 보존. built-in image_gen 사용. 사이트 삽입·배포는 진행하지 않음. 검토 후 채택할 스타일과 세부 아이콘을 결정할 수 있음.

## 2026-10-07 마지막 영문 자막 마침표 추가

사용자 요청으로 마지막 영상 자막 Feel the MyLodge.로 마침표 추가. PC·모바일 영문 영상 재생성. 접근성 설명은 이미 마침표 포함. 로컬 반영, 배포 없음.

## 2026-10-07 마지막 영문 영상 자막 확정

사용자가 앞서 취소했던 문구를 다시 요청하여 마지막 자막을 Feel the MyLodge로 변경. render-english.py와 localization.js 접근성용 영상 설명 반영, PC·모바일 영상 재생성. 앞선 가독성 개선 및 다른8개 자막 유지. 이번 요청이 최신 결정이며 Feel the energy로 유지한다는 이전 기록보다 우선함. 로컬 반영, 배포 없음.
## 2026-10-07 영문 번역 화면 가독성 개선

사용자 영문 가독성 점검 요청. localization.css 영어 제목 자간 -0.015em·균형 줄바꿈·좁은 칼럼 제목 크기 조정, 주요 본문16px/1.75·Valley 보조 안내14px·PC 메뉴13px. localization.js 긴 번역8개 간결화. 시설 제목390px 약125→75px, 소개 제목1440px 약248→140px. 메인·Valley320/390/768/1024/1440px 및 동적 탭 점검. docs/ENGLISH-READABILITY-20261007.md와 화면 증거 참고. 직전 Feel the MyLodge 요청은 취소되어 영상·접근성 안내 모두 Feel the energy 유지. 로컬 반영, 배포 없음.
## 2026-10-07 PPT 소개 영상 영어 광고 문체 조정

사용자 현지 느낌 요청으로 영문 영상9장 중8장 자막을 짧은 광고 문구로 조정. A villa to call my own / Breathe out. Settle in / Every day feels like a holiday / Find your people / Good company. All year round / Good conversations. Great partnerships / Let the music move you / Make it a night to remember. 마지막 Feel the energy 유지. PC·모바일 영상·포스터 재생성, localization.js 접근성용 영상 제목·자막 전문 동기화. docs/INTRO-ENGLISH-COPY-20261007.md 참고. 로컬 반영, 배포 없음.
## 2026-10-07 영어 문법·홍보 문구 검수

사용자 영어 현지 독자 관점 검수 요청. 메인·Business Valley의 문장 연결과 직역투를 다듬고, 휴식·테라스·교류·장기 체류·구상 단계 안내 표현을 정리. 영상 자막 Space to truly unwind / Meet your next business partner 반영, 기존 이미지·모션·30초·파도 음원 유지. 영문 PC·모바일 영상 재생성. docs/ENGLISH-COPY-REVIEW-20261007.md 및 docs/review/english-copy-20261007 참고. 로컬 반영, 운영 배포 없음.
## 2026-10-07 한국어·영어 상세 검수 완료

사용자 상세 오류 검수 요청. intro.js 화면 폭에 따른 영상/포스터 교체·위치/수동 정지/완료 유지 및 상태 안내 수정. localization.js 언어 전환을 실제 보던 섹션으로 이동하도록 변경. chairman.js 상단 버튼을 목적지에 맞춰 시설 둘러보기로 정리. KO/EN 메인·Valley32개 실제 뷰포트 조건 재검사, 언어 왕복·메뉴·탭·사진·영상 종료/다시보기/음량·치앙마이 외부 이동 확인.105자산·영상Range·비공개 경로404, 영상4개 전체 디코딩·JS10개 문법·빌드·공백 검사 통과. docs/ENGLISH-QA-20261007.md와 docs/review/english-audit-20261007 참고. 실제 기기·다른 브라우저 종류·동작 줄이기 OS 설정·음원 청취는 미검사. 로컬만 반영.

## 2026-10-07 영어 번역 로컬 반영

사용자 영어 번역 요청으로 localization.js/css 추가, 상단 한국어/English 전환을 ?lang=en으로 구현. 메인 홍보 본문·시설/사진/캐릭터/컨시어지와 별도 Business Valley 전체 텍스트·alt·제어 안내 번역, 동적으로 바뀌는 영상/메뉴/사진 문구 번역 유지. 내부 페이지 영문 유지, 사용자 지정 치앙마이 외부 링크 유지. 기존9장/30초/파도 음원으로 영문 자막 PC·모바일 영상과 포스터 추가. index.html/business-valley.html/intro.js/public-assets 연결. 영어 타이포 보정, 언어 메타 반영. docs/ENGLISH-LOCALIZATION-20261007.md 참고.105공개파일 빌드, 로컬 서버 재시작 및 화면 반영 확인. 자동 테스트·GitHub/Vercel/Notion 업로드 없음.

## 2026-10-07 치앙마이 카드 외부 연결

사용자 지정 링크에 따라 editorial.js의 치앙마이 카드 전체 링크를 https://hanzcity.com/chiangmai/intro 로 변경하고 버튼을 ‘치앙마이 살펴보기 ↗’로 변경. 같은 탭으로 이동하는 기존 동작 유지. 상단 Business Valley 메뉴는 이번 카드 요청 범위 밖이므로 유지. 로컬 반영만 진행.

## 2026-10-07 홍보 용어 정리 — 프로젝트 → 지역별 별장

회장 피드백을 전달한 사용자 요청으로 홍보 페이지 용어 변경. PC/모바일 메뉴 ‘지역별 별장’, 주문진·양양 카드 ‘주문진의 별장’/‘양양의 별장’, 영상 종료·페이지 하단 버튼 ‘별장 둘러보기’, 푸터 ‘별장과 서비스’로 정리. 초기 HTML 안내도 공유별장·지역별 구상으로 변경. Business Valley 협업 영역은 ‘협업 준비 상태’/‘커뮤니티·협업’, 국내 연계 문구 ‘국내 별장 구상’으로 조정. 내부 앵커 #projects와 파일명 유지. app.js/chairman.js/intro.js/branding.js/editorial.js/index.html/business-valley.html 수정. 로컬 페이지 제목·하단 문구 반영 확인 및99파일 빌드. GitHub/Vercel 업로드 없음.

## 2026-10-07 세 번째 반복 점검

사용자 ‘반복’으로7개 폭의 생활 문구·하단 설명 겹침/잘림/가로 넘침 재확인, 메뉴 시설 이동·시설 키보드 순환·콘솔·공개99자산·빌드 확인.320px 생활 보조 문구 어색한 줄바꿈 발견해 editorial.css 모바일 scene-time22~32px로 조정, 세 문구 한 줄 표시 확인. docs/SITE-RECHECK-20261007.md 및 mobile-320-labels-after.png 기록. 로컬만 반영, 기본 뷰포트 복원.

## 2026-10-07 두 번째 점검 — 모바일 생활 장면 및 이미지 선명도

사용자 재점검 요청. 세로 모바일에서 생활 장면 JS 전환은 멈췄으나 CSS는 첫 장면만 표시하던 누락 발견. editorial.css에 700px 이하 자연스러운 세로3장면 표시, cinematic.js에 PC 복귀 시 aria-hidden 즉시 동기화. editorial.js에 세로 크롭을 고려한 sizes로 모바일 작은480px 사진 확대 흐림 수정. 메인9개 폭·가로형과 Valley6개 폭, 메뉴/언어/Escape·사진 순환·영상 정지/음량·Valley 탭/앵커·콘솔 재확인. 공개99파일 재검사 및 최종빌드 성공. docs/SITE-RECHECK-20261007.md와 docs/review/site-recheck-20261007/mobile-scenes-after.png 참고. 기본 뷰포트 복원. GitHub/Vercel/Notion 업로드 없음.

## 2026-10-07 전체 사이트 표기·UI 점검 완료

사용자 전체 점검 요청으로 메인·Business Valley의 고아 번호/챕터 반복/예전 사진 설명과 시각/치앙마이 해안 사진/옛금액과 날짜를 정리. 모바일 재생성 메뉴의 클릭 이벤트 단절, 언어 패널 겹침, 이중 앵커 여백 및 현재 메뉴 표시,320px 헤더 넘침 수정. app.js/branding.js/valley.js/editorial.js/css 변경.320·390·1024·1440 및 기본 화면, 탭 키보드/메뉴/영상 제어 확인. 공개99자산 정상·99파일 빌드·JS문법 확인. docs/SITE-AUDIT-20261007.md에 수정표/검사 범위 및 증거. 운영 업로드·노션 변경 없음.

## 2026-10-07 브랜드 연결 카드 번호 정리

사용자가 좌측01과 우측챕터1의 중복을 지적. editorial.js에서 좌측 표시를 MY LODGE SHARE로 변경, 우측 치앙마이 챕터1은 유지. 로컬99파일 빌드. 운영 업로드 없음.

## 2026-10-07 준비 문서 5개 항목 로컬 반영

사용자 ‘준비문서 기반으로 작업 시작해’에 따라 NEXT-WORK-20261007 실행. built-in image_gen으로 시설4장(곡선형 별장/해변 풀장/사업가 테라스/클럽), 프로젝트 조감도2장(주문진 저녁 해안·양양 낮 숲속 계단형), 치앙마이 교류1장 생성. assets/images/*-20261007 원본 및 WebP 480/960/1680 보존. editorial.js/css 마지막 표현 계층으로 연결. 시설 PC 폭70:30, 소개/Business Valley 사진 중심 구성, 주인·컨시어지 텍스트 카드에 사진 추가. 메인 Valley 연결 및 별도 hero에 챕터 문구, 별도 교류 구간에 모든 자원 문구 배치(치앙마이/IT/띄어쓰기 정리). 배경 간섭·제목 대비·탭2×2·설명 글자 크기·카드 기울임 개선. cinematic.js 모바일 정적 생활3장면의 aria-hidden 불일치 수정. 준비 상태·가격 정보를 새로 확정하지 않음. PC1280, 모바일360/390, 태블릿768 DOM/스크린샷 및 탭 클릭/키보드/메뉴 이동 검사. 23개 새 공개 자산HTTP200, JS 문법 검사 및99파일 빌드. 자세한 범위 docs/PHOTO-LED-UPDATE-20261007.md, 생성 프롬프트 docs/IMAGE-PROMPTS-20261007.md, 증거 docs/review/photo-led-20261007. 로컬4173 서버 PID16144. Git commit/push, Vercel 배포, 노션 기록은 진행하지 않음. 기존 사용자 상담 변경 등 보존.

## 2026-10-06 다음 작업 준비만 — 시작 대기

사용자는 오늘 작업 종료 후 내일 요청을 메모하며 실제 작업을 하지 말라고 명시했다. docs/NEXT-WORK-20261007.md에 5개 요청(인트로 분위기와 사진 연결/이미지 재생성, 가독성, 치앙마이 두 문구 배치, 이미지7:글3, 주문진·양양 조감도 차별화)을 원문과 함께 저장. 참고 스크린샷2개 docs/next-work-20261007에 보존. 이 준비 문서와 안내 기록만 로컬 저장. 코드·이미지 생성·빌드·점검·Git commit/push·Vercel 배포·노션 수정 없음. 다음 사용자의 작업 시작 지시가 있어야 실행.

## 2026-10-06 최종 업로드 및 업무일지 완료

GitHub 공개 사이트 변경 커밋3396209를 codex/main-pc-handoff-20260930에 push 완료. Vercel CLI61.1.0 prebuilt 공개76파일 Preview dpl_73aat6hrJaPu9sBLMD1UBGB2ER8P READY 후 promote 성공. 운영 dpl_AbiQmcojQK1kARkdiSeNv2q45aDn production READY, my-lodge-business.vercel.app 연결 확인. 직접 --prod는 Not authorized였으며 기존 Preview→promote 방식으로 완료. 운영 프로젝트 화면 저장. 노션 IMT·GROUP 연서흠 10월6일 기존 행(출근7:43) 페이지3f0737bfd51780fbbce9e1f9e52176df에 작업별 하위9페이지와 각3개 세부 항목 작성, 새로고침 후 저장 확인. 노션 커넥터 개인워크스페이스 접근만 가능하여 로그인된 브라우저로 작성. 출퇴근 시간 변경 없음. 내부 문서·원본PNG·백업·상담모듈은 공개 배포에서 제외.

## 2026-10-06 하루 작업 GitHub·운영 배포

사용자 종료 지시로 현재 홍보 사이트 버전을 GitHub 인계 브랜치와 Vercel 운영에 업로드한다. 공개76파일만 배포. 인트로9문구/9이미지, 사업가 만남 이미지, 로고·캐릭터, 휴양지 조감도, 카테고리, 다국어 슬롯, 홍보 중심 정리 포함. 노션 연서흠 업무일지에 동일 날짜 작업 항목을 기존 양식으로 기록 예정. 상담 파일과 별도 개편 초안·백업은 커밋 대상에서 제외.

## 2026-10-06 홍보 사이트 중심 정리

공개 홈 화면을 브랜드·공간·라이프스타일 소개로 정리. 인트로 검토 금액 카드, 396만 원/5%/납입표/권리표, 참여·계약 단계, 준비 현황과 미정 회사정보 제거. 소유 섹션은 별장 주인들의 생활 가치 3카드, 컨시어지는 서비스 구상 3카드로 변경. 프로젝트 지역/이미지 유지, 미정 항목 목록 삭제. 모든 가격 앵커를 홍보 섹션으로 정리. 반복 이미지 안내를 축약하고 하단에 콘셉트·서비스 구상 안내 유지. 기존 원자료/정책 결정은 삭제·확정하지 않음. branding.js 마지막 공개 홈 변환 적용, Business Valley 본문은 유지. 로컬 빌드만 수행, GitHub/Vercel 배포·별도 테스트 없음.

## 2026-10-06 상단 다국어 지원 슬롯

헤더에 지구본·현재 언어 선택 슬롯을 추가. 한국어는 현재 언어, 영어·중국어·일본어는 준비 중으로 표시하며 번역 페이지 연결은 후속 작업. 좁은 화면은 KO로 축약하고 언어 패널은 헤더 아래에 표시. 바깥 클릭·Escape로 닫기. branding.js/css 공통 적용. 로컬 빌드만 진행, GitHub·Vercel 배포 없음.

## 2026-10-06 메뉴 카테고리 개선

사용자 요청으로 상단/모바일 메뉴 별장 공간→시설 둘러보기, 공유 방식→별장 주인들에게, 서비스 구상→컨시어지. 비용·권리 항목은 메뉴 카테고리에서 제거. 프로젝트·Business Valley 유지. 컨시어지 섹션 제목과 캐릭터의 시설 안내 링크도 명칭 통일. 비용·이용 조건 본문은 보존. 기존 앵커 연결 유지, 공개76파일 빌드. 별도 테스트·GitHub 업로드·Vercel 배포 없음.

## 2026-10-06 휴양지 조감도 구간 교체

사용자 지정 #nature 구간의 3문장을 원문대로 도입/제목/설명으로 배치. image_gen으로 풀장·클럽 라운지·모듈형 별장 단지를 한눈에 보는 해안 전체 조감도 생성, 원본 assets/images/resort-overview-20261006.png 및 웹용480/960/1680. chairman.js와 planning.css에 반영, 모바일은 문구와 전체사진 분리. 기존 사진 보존. 공개76파일 빌드 및 4173 서버 갱신. 프롬프트 docs/RESORT-STORY-20261006.md. 별도 테스트·GitHub 업로드·Vercel 배포 없음.

## 2026-10-06 상단 로고 정렬 및 배경 경계 정리

사용자 피드백으로 branding.css의 로고 크기·프레임 위치·간격·중심선 재조정. PC 심볼72×40, 이름128×40, 간격12. 모바일58×34/110×34/간격10, 임의 scale 제거. 헤더와 브랜드 바탕 #f7f5ef 통일 및 isolate+multiply로 흰 사각형 경계 제거. image_gen 배경 제거 두 결과는 번짐/형태 변화 때문에 채택하지 않고 정확한 원본 WebP 유지. 로컬 화면 관찰 및 공개73파일 빌드. 별도 테스트·GitHub 업로드·Vercel 배포 없음.

## 2026-10-06 사업가 교류 장면 교체

사용자 지정 13–17초(365일 언제나…) 이미지를 중년 사업가 두 사람이 테라스에서 편안히 대화하는 새 장면으로 교체. built-in image_gen 생성 원본 assets/images/intro-scenes-20261006/05-business-peers.png, 프롬프트 docs/INTRO-SCENES-20261006.md. PC·모바일 30초 영상 재출력 및 공개73파일 빌드. 이전 이미지와 영상 백업 보존. 기존 문구·다른8장면·음원·브랜드 배치 유지. 별도 테스트·GitHub 업로드·Vercel 배포 없음.

## 2026-10-06 제공 로고·캐릭터 배치

사용자 첨부 원본을 assets/brand에 보존하고 WebP로 변환. branding.js/css에서 상단 로고는 원본의 심볼·문자 부분을 CSS로 가로 배치, 하단은 전체 로고 표시. 첫 소개와 공유 방식 다음에 캐릭터 안내 카드를 배치해 기존 공간·공유 방식·비용/권리 앵커로 안내한다. 별도 상담/챗봇 기능 없음. 모바일은 작은 캐릭터와 세로 링크 구성. 메인 및 Business Valley의 로고 통일, 공개73파일 빌드. 추가 GitHub 업로드·Vercel 배포·별도 테스트 없음.

## 2026-10-06 인트로 가격 카드 문구 삭제

사용자 요청으로 intro.js의 가격 카드 하단 ‘추가 비용·권리·이용 조건 미확정’ 문구를 삭제했다. 로컬 반영 및 공개 빌드 갱신. 별도 테스트·GitHub 업로드·Vercel 배포 없음.

## 2026-10-06 문구별 이미지 9개 재생성 및 로컬 영상 반영

사용자의 문구별 적합 이미지·분위기 반복 방지·풀장/클럽 요청에 따라 built-in image_gen으로 별장 외관, 실내 휴식, 풀장, 커뮤니티 카페테리아, 환영, 파트너 만남, 클럽, 야외 축제, 관객의 열기 9개 이미지를 각각 생성했다. assets/images/intro-scenes-20261006에 원본 보존, 프롬프트와 시간표는 docs/INTRO-SCENES-20261006.md. 새 PC·모바일 30초 영상 및 포스터를 intro.js/css와 공개 목록에 연결. 69파일 빌드 및 4173 로컬 서버 갱신 완료. 이전 이미지/영상 보존. 추가 GitHub 업로드·Vercel 배포·별도 테스트 없음.

## 2026-10-06 첫 화면 영상 문구 수정

요청 문구를 정확히 유지하도록 3–6.5초 문구를 ‘내 안에 / 완벽한 여유.’로 정리했다. ‘도착하면, 휴가가 아니라’ 등 요청에 없는 추가 문장은 제외하고 PC·모바일 영상과 포스터를 다시 출력했다. 9개 장면·30초, 기존 이미지·모션·파도 음원 유지. 공개69파일 재빌드. 별도 테스트·추가 GitHub 업로드·Vercel 배포 없음.

PC·모바일 영상과 포스터 출력 완료. 공개69파일 재빌드 및 4173 서버의 공개 목록 갱신 완료. 로컬 첫 화면에서 새 영상의 마지막 ‘열기의 향연.’ 표시를 관찰했고 docs/review/intro-copy-20261006/desktop.png에 기록했다. 별도 테스트는 실행하지 않았다.

사용자가 첫 화면 영상의 문구를 여유·일상·교류·파트너·춤과 음악·축제·열기의 향연 순서로 교체하고 이미지 변경은 추후 진행하도록 지정했다. 기준87c0fe2의 이미지·모션·파도 음원을 유지한 30초 영상에서 9개 문구 장면으로 나눴다. PC와 모바일 영상·포스터에 날짜가 포함된 새 파일명을 사용하고 intro.js/css 및 공개 목록을 연결했다. 상세 시간표와 제작 경로는 docs/INTRO-COPY-20261006.md. 원본 이미지와 기존 영상은 보존. 추가 GitHub 업로드·Vercel 배포 없음.

## 2026-10-06 현재 화면의 GitHub 업로드 완료 — 87c0fe2

사용자가 현재 열린 4173/#ownership-and-stay의 복원된 10월 5일 최종본을 GitHub에 올리고 이후 수정의 기준으로 지정했다. 실행 서버와 관련 소스 7파일 바이트 일치 확인. 공개 소스 6파일과 docs/BASELINE-20261006.md만 커밋87c0fe2로 기존 codex/main-pc-handoff-20260930에 push 완료. 상담 변경·원본·백업·10월 6일 개편 초안은 로컬 보존. main 병합·Vercel 배포 없음. 이후 수정 기준은 이 커밋과 docs/BASELINE-20261006.md다.

## 2026-10-06 사용자 지시로 로컬 사이트 복원 완료

- 사용자 09:19 UTC: 작업 완료, 롤백 지시. 최종 개편본500파일을 별도 실행 가능 폴더에 보존한 뒤 최초 구현 전03:41:10 UTC 기준으로 복원.
- 최종 개편 보존본: C:/Users/a0109/Documents/Codex/2026-10-06/task/preserved-redesign-final-20261006/site. 부모 폴더 README.md에 별도4279 실행 방법과 검증 증거.
- 기존 사이트11파일 복원. 새 content-data.js/correction.js/correction.css는 보존본 옆 archived-added-files에 이동(삭제 없음). 웹 소스29/기존 자산77 해시 기준 일치. 사용자 무관 파일, 보호 설정, 기존 백업, dist 보존.
- 4173 로컬 서버 재시작 후 메인·치앙마이·인트로 영상 HTTP/파일 해시 일치. Chrome headless1440 실제 화면 확인. 문법11파일 통과, 기존 가상워크플로9/9통과. 실기기·200%·전체 페이지 기능 검증 미실행.
- 새 디자인 편집 시작하지 않음. Git reset/clean/stash/commit/push/PR/merge 및 원격 게시·Vercel 변경/배포 없음. 아래 개편 완료 기록은 현재 사이트가 아닌 보존된 이전 시도의 이력.

---

## 2026년 10월6일 사진 구성과 조작 아이콘 최종 로컬 검토

- 최신 검토는 review/visual-density-20261006/REVIEW.html 및 REVIEW.md. 직접 청취 메모 최우선44항목 표 첨부.
- 메인·치앙마이 사진 중심 구성, 참여4사진, 간결한 기본 카피와 원문 native details, 가격·권리·미확정 조건 기본 노출. 변경 사이트4파일 chairman.js, correction.js, intro.js, correction.css.
- KRDS 참고 직접작성24px/1.6px SVG 조작 아이콘. 모바일 짧은 이름, 데스크톱 hover/focus 설명, 한국어 접근 가능한 이름. 중요한 링크 글자 유지.
- 최종176프레임 모두 마지막 코드 변경 후,1440/390/320×640.69상태 핵심2줄 초과0. 직접 텍스트5395 및 높이 변경 후1116기본 표본 대비 통과. 문법16/16,워크플로9/9.
- 사진 약70%는 일부320폭·조건 설명에서 미달. 실제200%·OS모션감소·실기기 터치·스크린리더 미실행. 비동기 즉시 측정과 안정화 후 서비스4카드 결과는 원자료에 구분.
- 로고·캐릭터 사용자 선정 완료, 실제 PNG 전달 대기. 현재 A는 초안. EN은 미검수 카피 미리보기, 사이트 전체 번역 아님. 다국어·프로젝트 메뉴·IT 호칭 미확정.
- 기존93자산/7보호파일/원기획SHA/HEAD/branch 보존. 기존dirty보존. 빌드·커밋·푸시·PR·배포 없음.4173응답4파일 현재 소스와 일치.

아래 기록은 이전 작업 이력입니다. 현재 단계의 EN·브랜드·콘셉트 상태는 위 내용을 기준으로 봅니다.

---

## 2026-10-06 로컬 검토 후보 — 배포 금지 / 후속 검토 대기

- 재검토 최소 수정: content-data.js의 이미지 오류 부모에 .life-scene 추가, 준비 안내 aria-label에 기존 alt 의미 유지. 실제 생활 이미지3종404, 데스크톱/모바일/반복srcset실패에서 준비 안내1개·제목·설명·캡션 보존, 두 환경 탐색/시설 카페 fallback 확인. LIFE-404-EVIDENCE.json 및 생활404캡처 참조. 대표 단색 텍스트29개 정량대비 통과; 실제200%확대는 도구 미지원 QA환경 보류. R12는 비활성 fallback만 PASS, 활성영문은 번역승인 전 BLOCKED. 공개 배포 금지/최종 재검토 대기.

- 기준: review/implementation-planning-20261006/20261006_마이롯지_최종페이지기획안.md 전체 2351행. SHA256 4B90218D9102F722CE186535DBC6BD307EC4D7320E7507C380D89996FCCAF065. 원문 수정 없음.
- 기존 dirty checkout을 보존한 로컬 수정. 최초 원본·해시·Git 상태는 review/local-implementation-20261006/baseline 및 BASELINE.json에 보관. 과거 백업 복구·리셋·커밋·푸시·배포 없음.
- 두 페이지 공통 언어 준비 상태, 시설 둘러보기/별장 주인들에게/컨시어지, 전체→시설 순서, 정적 생활 장면, 수동 교류 카드 8개, 치앙마이 목적/공간/생활/지원 구조 적용. 국내 권리·가격 설명과 기존 앵커 유지.
- A03/A08/A09/A10–A18 미선정·미승인 자료는 준비 상태. 이전 카피가 내장된 인트로 영상은 재생·공개 후보 목록에서 제외하되 기존 원파일 유지. 새 영상 동작 검수는 BLOCKED. 로고·캐릭터·키치 아이콘 임의 선정 금지. EN 번역 미승인으로 비활성.
- 프로젝트 메뉴 삭제/변경과 IT 대상 호칭은 미결정. 현재 메뉴와 지역 카드를 유지. 실제 시설·365일 운영·주차·지원·가격·권리 확정 금지.
- 실제 브라우저: 두 페이지 320/390/768/1440폭 확인. 치앙마이 placeholder 넘침 및 모바일 메뉴 이동 초점 수정. 시설 방향키/Home/End, 메뉴 Escape, 수동 교류 8개 순환, 기존 서비스 다음 버튼, 미지원 lang 한국어 대체, 로컬 이미지404 대체 확인.
- 실기기 터치·실제 200% 확대·OS 모션 감소·새 영상 자동재생/404는 미확인. 전체 88개 개별 판정은 review/local-implementation-20261006/ACCEPTANCE-RESULTS-88.json. 준비 상태만으로 이미지 요구 완료 처리 금지.
- 별도 폴더로 66개 공개 후보 파일 복사 검사, 기존 dist 69개 파일 보존. 내부 문서·전사·녹음·워크플로·consultation 제외. 다음 검토 전 후보를 운영 배포하거나 보류 자료를 공개하지 말 것.

---

# 노트북 Codex 작업 인수인계

## 최신 로컬 문구 수정 — 2026-10-05 휴가

사용자 요청으로 #nature 제목의 ‘나의 베케이션.’을 ‘나의 휴가.’로 변경했다. chairman.js 한 문구 수정, 공개69파일 재빌드. 로컬만 반영, GitHub push/Vercel 배포 없음.

## 최신 로컬 소유·이용 안내 문구 수정 — 2026-10-05

사용자가 두 정의 카드의 추상적인 문장을 직관적으로 고치도록 요청했다. 소유 카드 제목은 ‘별장에 대해 내가 갖는 권리’, 본문은 한 구좌 참여 시 권리·내 이름 등기 여부·다른 사람에게 넘길 수 있는지로 풀었다. 이용 카드 제목은 ‘언제, 얼마나 머물 수 있는지’, 본문은 연간 숙박량·원하는 날짜 예약·성수기/주말 기준으로 풀었다. 두 카드 모두 조건이 아직 미정이라는 설명을 유지했다. 영문 소제목은 ‘소유 권리/이용 조건’으로 바꾸고 글자 크기와 자간을 한국어에 맞췄다. 해당 묶음의 직접 이동 주소는 #ownership-and-stay. 기능 추가 없음, 로컬 수정만 반영, 공개69파일 빌드. GitHub push/Vercel 배포 없음.

## 최신 로컬 공간 제목 가독성 수정 — 2026-10-05

사용자가 SPACE VISION의 제목·설명이 연한 배경에서 보이지 않는 화면을 제시했다. chairman.css는 배경을 연한 그린으로 바꿨지만 기존 styles.css의 어두운 배경용 흰색 제목/연한 본문이 남아 있었다. planning.css에서 해당 영역 제목을 #244b3d, 설명을 #526454, 소제목을 #746a3d로 명시했다. 제목 묶음의 등장 투명도/이동 지연도 해제해 읽을 때 즉시 보이도록 했다. 조감도 모션과 이미지·내용은 유지. 공개69파일 재빌드, 로컬만 반영. GitHub push/Vercel 배포 없음. 화면 기록 docs/review/vision-title-20261005/.

## 최신 로컬 표 규격 수정 — 2026-10-05

사용자가 비용·권리표의 규격 불일치 화면을 제시하여 planning.css에서 표 레이아웃을 수정했다. 기존 benchmark 스타일의 좌우 padding:0을 이 영역에서 명시적으로 재정의했다. 데스크톱 좌우28px·항목180px/설명 가변/상태104px·행 최소72px, 표 머리글과 본문의 열 기준 통일. 태블릿은 항목150px·상태90px·좌우22px. 700px 이하에서는 항목명/상태를 위에, 설명을 아래에 두는 카드형 행으로 전환한다. 내용·수치·기능 변경 없음. 공개69파일 재빌드 완료. GitHub push/Vercel 배포 없음. 화면 기록 docs/review/rights-table-20261005/.

## 최신 로컬 홈페이지 수정 — 2026-10-05 기획 검토실 대조

사용자가 4185 기획 검토실과 현재 홈페이지를 면밀히 대조해 업데이트하되 QnA·질문·DB 등 기능 추가를 제외하도록 요청했다. 최신 운영 커밋69e2e052 이후의 `github-sync/MyLodge_Business`를 기준으로 정적 콘텐츠와 읽기 레이아웃을 수정했다. 검토실이 참고한 `IMT/MyLodge_Business`는 예전 FAQ/상담 체험 시안으로, ‘영상 없음·FAQ10개·상담 체험 가능’은 최신 공개본의 상태로 채택하지 않았다. 구형 폴더는 덮어쓰지 않았다.

영상 위에 사전 안내와 전체1구좌 검토 금액, 비용·권리 본문 이동을 추가했다. 영상 다음에 396만 원 중심의 공유별장 요약을 배치하고 최초5%=19만8,000원을 보조 설명으로 분리했다. 비용 본문을 공동소유 설명 다음으로 옮겼다. 376만2,000원은 산술 잔액이며 추가비용을 포함한 최종 잔액이 아니라는 설명과 5%/6단계 관계 미정을 명시했다. 추가비용4종 카드·소유/이용 정의·권리표를 보강했다. 주문진/양양 카드의 공개 범위·자료 대기·모집/이용 시작 조건을 구분하고 참여 단계와 미래 서비스 설명을 정리했다. 사업 자료 확인일과 화면 업데이트일을 분리했다. 페이지 날짜는 app.js 단일 기준2026.10.05, 검색/OG/canonical도 정리했다.

공개 수정6파일: app.js/chairman.js/intro.js/index.html/planning.css/scripts/public-assets.mjs. planning.css는 기존 그린/해안/카페 이미지 위의 읽기 레이아웃이며 신규 기능 모듈이 아니다. QnA·FAQ·문의 입력·상담 접수·DB·관리자·회원 인증·예약·결제·실제 알림·방문 신청·집계·분석 기능을 추가하지 않았다. 영상·음량·자연 스크롤·수동 공간/서비스 덱은 유지했다. 기존 상담/내부 문서의 로컬 변경 보존.

공개 빌드69파일 완료. 원본·내부 문서·백업·운영 시안은 제외했다. 변경 전6파일과 SHA256는 backups/before-planning-review-20261005/. 상세 대조표·미정 사업 입력·확인 한계는 docs/PLANNING-REVIEW-UPDATE-20261005.md. 화면 기록 docs/review/planning-update-20261005/.

Chrome 로컬 화면에서 320×740·390×844·768×1024와 기본 데스크톱의 변경 영역을 관찰했다. 첫 화면의 세로 영상/무음 자동 재생·참여 요약·금액 위계·추가비용 카드·프로젝트 상태·기존 서비스 상세의 높이 확장을 확인했다. 관찰한 폭에서 문서 가로 넘침 없음. 자동 테스트·실제 휴대전화·Safari·스크린리더·사업/법률 승인 검증은 실행하지 않았다. 별도 배포 범위 응답이 없어 로컬만 반영했으며 GitHub 커밋/push·Vercel 배포는 실행하지 않았다. 로컬 서버 http://127.0.0.1:4173/ 유지.

## 최신 GitHub·운영 반영 — 2026-10-04 18:08 KST

사용자가 ‘전부 업데이트하고 근무일지용 텍스트 작성해(노션에 쓰진 말고)’라고 지시하여 앞선 운영 변경 금지를 해제했다. 승인된 모든 공개 변경(새 30초 합성 영상, 모바일 세로 영상, 파도 음원, 음량 켜기/끄기, 중앙 시작 버튼 제거/자동 재생, ‘마이롯지’ 띠, 개발 서버 MP4 스트리밍)을 10파일 커밋 `69e2e0524a631fb2877557ebaa309186441407c8`로 기존 origin/codex/main-pc-handoff-20260930에 push했다. 원격 SHA 일치. main 병합/강제 push 없음. 기존 상담 모듈/원본/백업/내부 문서 변경은 로컬 보존.

공개 빌드68파일만 Build Output API v3로 업로드했다. Vercel 연결 앱은 IMTGroup 범위403 오류였지만 기존 CLI61.1.0/officeysh03-4828 로그인으로 Preview `dpl_5PbBw9xpswfdikp8BN9SivaCyPuY` READY 후 promote 성공. 최종 운영 `dpl_AkfyxuBKLVXcgx3XiD7zsY2aSFnf`, target production, READY. 기존 운영 별칭 https://my-lodge-business.vercel.app/ 확인. 운영 도메인 브라우저에서 새 영상30초·시작 버튼 제거·음량 토글·마이롯지 띠 문구를 관찰했다. 모바일390×844도 세로 영상 선택을 관찰했다. 화면 기록 docs/review/impact-20261004/production-*.png. 자동 테스트/실제 휴대전화/Safari 검증은 아니다. 근무일지는 대화창에만 작성, Notion 수정 없음.

## 최신 로컬 자동 재생 수정 — 2026-10-04

사용자 요청으로 중앙 ‘영상 시작하기’ 버튼과 전용 스타일을 완전히 제거했다. 첫 진입 시 무음 재생을 호출하도록 해시 제한을 없앴다. 아래 섹션 해시로 진입하면 화면 밖 영상은 일시정지하고 첫 화면으로 돌아오는 순간 자동으로 이어진다. 화면 이탈·메뉴·비활성 탭 정지와 동작 줄이기 설정은 유지. 자동 재생이 제한되는 환경은 하단의 작은 재생 컨트롤을 사용한다. 음량 켜기/끄기 및 ‘마이롯지’ 띠 문구 유지. 로컬만 수정, Vercel/커밋/push 없음.

## 최신 로컬 문구 수정 — 2026-10-04

사용자 요청으로 intro.js의 버튼 초기/토글 문구를 ‘음량 켜기/음량 끄기’로 변경했다. chairman.js의 hero 아래 반복 띠에서 한국어 문구를 ‘마이롯지’로 변경했다. 영상 내부의 ‘나 별장있다.’ 문구와 파도 음원은 유지했다. 요청의 3번은 내용이 비어 있어 추가 변경을 추측하지 않았다. 로컬만 반영하고 커밋/push/Vercel 배포는 실행하지 않는다.

## 최신 로컬 수정 — 2026-10-04 첫인상 모션·파도 음원

사용자가 이전 MP4의 느린 전개와 사진 이어붙이기/확대·축소 수준을 지적했다. 이번 버전은 전체 이미지 확대·축소를 없애고, 첫 1–3초에 별장 층/계단/차량의 독립 모션·600개 빛 입자·큰 ‘나 별장있다.’ 글자 등장을 넣었다. 창에서 펼쳐지는 실내 전환, 가구별 등장, 천장 빛 이동, 약 2초 간격 소재 문구, 사선 테라스 전환, 사람 이미지 레이어 등장과 커피 김으로 재구성했다. 실제 인물 몸동작을 만든 실촬영/생성형 영상은 아니다. 이전 결과를 승인된 것으로 표현하지 않는다.

배경음은 Dsw4의 Public Domain Waves.ogg 실제 파도 녹음 20–50초로 교체했다. Lake Ontario 해안 녹음으로 마이롯지 현장/바다 녹음이라는 주장은 하지 않는다. 음악 없음. 출처·세부 제작은 docs/INTRO-IMPACT-20261004.md. 내장 imagegen으로 합성 배경 3종을 만든 뒤 docs/film-build/impact/에 비공개 보관. 제작 스크립트는 프레임/영상 합성이며 이미지 편집은 imagegen 사용.

첫 진입은 무음 즉시 재생, ‘파도 소리 켜기’ 버튼 강조. 동작 줄이기는 수동. 메뉴/탭/스크롤 일시정지와 자연 스크롤 유지. 새 MP4 desktop1280×720 약6.1MB, mobile720×1280 약2.24MB, 각각30초/30fps. 모바일은 별도 세로 구도로 변경. 새 영상 2종·포스터 2종으로 공개 목록 교체, 공개 빌드68파일 완료. 이전 영상/PPT/제작 코드/원음/PNG/문서는 비공개 로컬. 백업 backups/before-impact-20261004/.

로컬 브라우저에서 새 파일 선택·30초 duration·첫 화면 무음 자동 재생을 관찰했다. 390×844에서720×1280 선택과 소리 버튼의 muted=false 전환을 관찰했다. 화면 기록 docs/review/impact-20261004/. 자동 테스트·실제 휴대전화·Safari 검증은 아니다. GitHub 커밋/push·Vercel 배포 없음. 운영 사이트 변경 금지는 계속 유효. 로컬 서버 npm start로 유지한다. 기존 상담/내부 문서 등 로컬 변경 보존.

## 최신 로컬 수정 — 2026-10-04 PPT 화면 기반 30초 MP4

사용자가 시간제 슬라이드가 아니라 한즈시티 드론쇼처럼 PPT 화면에 모션을 합성한30초 영상이라고 의도를 정정했다. 앞선5초×6장 타이머 구현은 승인된 결과가 아니다. 외관→인테리어→친구들의 휴가3구간으로 카메라·전경·바다·커튼·빛·커피 김을 합성한 MP4를 제작했다. 실제 인물을 움직이는 생성형 영상/실촬영이라는 주장은 하지 않는다. PPT 원본3장과 자동10초/페이드, 편집 가능한 사진/제목도 로컬에 저장했다.

intro.js/css는 하나의 video 플레이어로 교체했다. 시작·일시정지/이어보기·소리·건너뛰기·종료/다시보기/별장 둘러보기. 강제 스크롤·반복 없음. 화면 이탈/메뉴/탭 비활성 정지, 로드 오류 때 기존hero로 복귀, 동작 줄이기와 직접 시작. 모바일은 전체 가로 프레임을 보존하며 가벼운768px 영상을 선택한다. desktop1280×720/12.2MB, mobile768×432/4.0MB, 둘 다30fps·30초. 직접 합성한 배경음은 기본 무음. server.mjs에 MP4 Range/HEAD 추가.

공개 빌드67파일. PPT·참고 MP4·코드·제작 자료·원본 PNG·문서는 비공개 로컬. 상세 docs/INTRO-FILM-20261004.md, 제작 docs/film-build/, PPT deliverables/MyLodge_30s_PPT_Source_20261004.pptx. 백업 backups/before-film-20261004/. 기존 로컬 상담/내부 문서 변경 보존. 이번 수정은 미커밋이며 GitHub push와 Vercel 배포·인증 갱신을 하지 않았다. 사용자 재지시 전 운영 변경 금지.

빌드 완료, PPT3장 렌더 및 패키지/레이아웃 확인, 영상 정지 프레임 확인. 로컬 브라우저에서 실제video duration30/종료상태/다시보기 UI를 관찰했다. 모바일390×844에서 작은 파일 선택과30초 재생/종료 화면을 확인했고 임시 화면 크기는 복원했다. 기본 브라우저 크기로 첫 화면에서 시작할 수 있게 보여준다. 자동 테스트·실제 휴대전화·Safari 검증은 아니다. 화면 기록 docs/review/film-20261004/.

## 최신 첫 화면 작업 — 2026-10-04 30초 모션 프레젠테이션

사용자가 요청한 전체 외관→실내·인테리어→사람들의 휴가를 5초×6장, 10초×3구간으로 구현했다. 한즈시티 실제 intro와 30초 모듈형 주거 영상 재생 화면, Drive 원사업 계획서와 개발 순서 보고서, Slack 공개 영상 회의록 검색 및 연결된 로컬 전사본, 회장님 피드백·기존 상세 설계 기록을 참고했다. 기존 해안 모듈 하우스 외관을 참고해 실내/친구 테라스 사진 2종을 내장 imagegen으로 새 생성했다.

intro.js/css를 마지막에 로드한다. 기존 hero 내부에 새 첫 화면을 붙이고 이전 첫 화면 내용은 표시하지 않는다. 확대·크로스페이드·문구 등장 모션, 자동30초 뒤 최종 장면 정지, 재생/일시정지/다시보기·이전/다음·3구간·건너뛰기. 자연 스크롤과 메뉴는 계속 사용 가능. 화면 밖/탭 비활성/모바일 메뉴 열림에서 진행 정지. 동작 줄이기에서는 수동·정적 시작. 모바일 외관 전체 표시와 확대 사진 srcset 보완. 조건/120셀/서버 보류 유지. 별도 PPTX·완성 MP4를 만든 것은 아니다.

문서 docs/INTRO-STORYBOARD-20261004.md, 전체 생성 프롬프트 docs/INTRO-IMAGE-PROMPTS-20261004.md. 원본 PNG 2종·문서·백업은 비공개 로컬 보존. 공개 파일 목록70개. 백업 backups/before-intro-20261004/. 로컬1280×720·390×844 화면과 구간 전환, 최종30초 정지·다시보기 상태를 시각 관찰했다. 자동 테스트·실제 휴대전화·Safari·통신별 성능 측정은 실행하지 않았다. 기존 비공개 로컬 변경 보존.

공개10파일은 ae1758bac5b98723b9a72d2820b64be56d52c42b로 기존 GitHub 인계 브랜치에 push했고 원격 SHA 일치. Vercel CLI/연결 앱은 기존팀 권한 오류로 배포 생성에 실패했다. 이후 사용자가 ‘버셀 업데이트는 하지말고 지금의 사이트만 보여줘봐’라고 명시하여 Vercel 작업을 중단했다. 인증 대기 종료를 시도한 시점에는 CLI가 이미 로그인 완료로 종료되어 있었다. 이후 배포를 실행하지 않았다. 운영 사이트는 이전 버전이며, 이번 버전은 로컬 http://127.0.0.1:4173/ 미리보기로 보여준다. 사용자 재지시 전 배포·인증 갱신·운영 변경을 진행하지 않는다.


## 최신 GitHub·운영 반영 — 2026-10-03 17:05 모바일 사용성

사용자 요청으로 모바일 메인 전체와 Business Valley를 확인·개선했다. 공간 탭 2×2/48px, 서비스 카드 폭 100%, 주요 링크 최소 44px, 본문 14px, 제목 지연·프로젝트 가로 밀림 제거. 700px 이하 배경은 화면 높이에 맞춘 sticky 장식으로 변경했다. 첫 화면·생활 장면·열린 메뉴·낮은 가로 화면에서 하단 CTA 숨김. 메뉴 동적 높이·스크롤 및 safe-area/viewport-fit 보강. 낮은 가로 화면에서는 생활 장면을 일반 문서 흐름으로 보여주고 접근성 숨김을 해제한다. Business Valley 공간은 모바일 한 열. 새 mobile.css/js를 마지막으로 로드한다. 120구좌·가격·미정 조건·서버 보류 유지.

공개 8파일을 커밋 `fd15455b7f01907fed40b4b2b680101781f5d3d5`로 기존 origin/codex/main-pc-handoff-20260930에 push, 원격 SHA 일치. 공개 빌드 62파일만 prebuilt Preview `dpl_HTnh7ucndRXfnfj7RRrKyiwyFDMw` READY 후 promote. 운영 `dpl_AGHruv1jR8RGxy6jq4mJMnZoRFb8`, production READY, 2026-10-03 17:05 KST, https://my-lodge-business.vercel.app/.

Windows Edge 모바일 터치/DPR2 시뮬레이션. 320×740/360×800/390×844/430×932/768×1024/844×390: 페이지 가로 넘침·JS 오류 0, 120셀 유지. 탭·메뉴·서비스 상세 4개, 사진/서비스 실제 터치 이벤트 넘기기, 회전·동작 줄이기, Business Valley 320/390/844 확인. 실제 휴대전화·Safari는 실행하지 않았다. 상세 docs/MOBILE-UX-20261003.md, 수치·화면 docs/review/mobile-20261003/. 복원 backups/before-mobile-20261003/. 기존 비공개 로컬 변경 보존.

## 최신 GitHub·운영 반영 — 2026-10-03 16:52 공간 배경과 모션

사용자가 첫 화면 이후 흰 배경·문자 위주 구간을 지적하고 회장님 강조 이미지를 생성해 역동적으로 넣어 달라고 요청했다. 내장 image_gen으로 해안 별장·카페테리아·SUV가 도착한 저녁 별장 3종을 생성해 10구간 배경으로 적용했다. 스크롤 이동·확대와 은은한 빛 효과, 비용·권리·공유 설명의 읽기 패널, 모바일 작은 이동·동작 줄이기 정적 배경을 제공한다. 첫 화면 소스는 유지. 새 모듈 scenery.js/css. 공개 파일 목록 60개. 생성 원본 PNG 3개와 전체 프롬프트는 로컬에 보존한다.

공개 14파일을 `e1f789511ec0768728618b7726629e9610633301`로 기존 origin/codex/main-pc-handoff-20260930에 push해 원격 SHA 일치를 확인했다. Preview `dpl_7ETji4L2w43AUJ7pVn3gu9ZazHKp` READY 후 promote. 운영 `dpl_8J2M7cqn9QBu3XSrZzsNVUmHhPp2`, production READY, 2026-10-03 16:52 KST, https://my-lodge-business.vercel.app/. 공개 60파일만 prebuilt 업로드했다.

1440×900·390×844 Windows Edge 렌더링을 시각적으로 살폈다. 자동 기능 테스트·실제 휴대전화·Safari·성능 계측은 실행하지 않았다. 상세/생성 프롬프트/저장 파일 docs/SCENERY-MOTION-20261003.md, 화면 docs/review/scenery-20261003/, 수정 전 backups/before-scenery-20261003/. 기존 로컬 미커밋 비공개 변경은 보존했다. 서버 기능 보류와 120구좌·비용·미정 조건은 유지.

## 최신 GitHub·운영 반영 — 2026-10-03 공유 방식 스크롤 사용성

사용자 첨부 화면의 왼쪽 설명 카드가 967px로 커져 고정되지 않고 잘리는 문제를 수정했다. 실제 헤더와 하단 버튼을 제외한 화면 공간에 카드 높이를 맞추고 최대 510px로 제한했다. 읽는 위치에 맞춰 한 채/120구좌/소유·이용 그림과 설명을 동기화하며 직접 이동 링크를 추가했다. 설명 가로 이동을 제거했다. 좁거나 낮은 화면에서는 각 설명 바로 아래에 해당 그림을 배치한다. 그림 노드를 이동하므로 120셀은 복제되지 않는다.

공개 수정 3파일(app.js, styles.css, docs/PUBLIC-HANDOFF-20261003.md)을 커밋 `d47a8b99d704b01b7b13412d435df67f1a4ef91c`로 기존 origin/codex/main-pc-handoff-20260930에 push했고 원격 SHA 일치를 확인했다. 공개 빌드 49파일만 기존 프로젝트에 prebuilt 배포했다. Preview `dpl_G2Q2PpNjTXuBxQ4bLQhH21LwYpKc` READY 후 promote. 운영 `dpl_2abbgBS2wx6rnuK7TqTy73N1UrTN`, production READY, 2026-10-03 16:32 KST. 주소 https://my-lodge-business.vercel.app/#ownership.

Windows Edge에서 9가지 화면 크기로 양방향 스크롤·직접 이동·화면 크기 변경을 확인했다. 운영 공개 파일 49개 SHA256 일치, 1440×900/900×600/390×844에서 120셀 유지, 가로 넘침·JS 오류 없음. 실제 휴대전화·Safari 검증은 아니다. 상세 docs/OWNERSHIP-UX-20261003.md, 화면·수치 docs/review/ownership-20261003/. 수정 전 backups/before-ownership-ux-20261003/. 기존 로컬 비공개 파일 변경은 보존했다.

## 최신 GitHub·운영 반영 — 2026-10-03 회장님 피드백 시안

사용자 요청으로 GitHub와 Vercel 업데이트 완료. 공개 소스·최적화 WebP·공개 인계 안내 12파일을 커밋 `e6957c51fe5cec70cc9b0894f280fb358e0e8abb`로 origin/codex/main-pc-handoff-20260930에 push했고 원격 SHA 일치를 확인했다. main은 변경하지 않았다. 기존 로컬 상담·내부 문서·원본 PNG·백업·조사 자료는 보존하며 업로드 대상에서 제외했다.

공개 dist 49파일과 소스의 바이트 일치를 확인해 기존 IMTGroup/my-lodge-business에 prebuilt 배포했다. Preview `dpl_HNrT9wfEVgaLC3eyiu3ZVH7qLxyG` READY 후 promote. 최종 운영 `dpl_5w7MSadrxJSQJUUGn4HxdNmD69rM`, target production, READY, 별칭 https://my-lodge-business.vercel.app/ 확인. Business Valley 운영 주소 https://my-lodge-business.vercel.app/business-valley.html.

배포 자료: docs/review/chairman-20261003/deploy-manifest.json, production-review.json, production-home/valley 화면. 아래 '운영 반영 전'·'Git commit/push 없음'은 이전 로컬 제작 시점 기록이다. 실제 접수/예약/결제/회원/DB/발송은 여전히 보류다.


## 최신 로컬 시안 — 2026-10-03 회장님 피드백 재구성

- 사용자의 통합 기획서와 직접 전달한 회장님 피드백, 녹음 자동 전사 전체, Slack 공개 한즈시티 채널, 실제 hanzcity.com/intro·promotion을 참고했다.
- 메인 “나 별장있다.” / “친구야, 나 별장있어.” / “상류층의 꿈이던 별장, 이제 우리도.”. 원기획서 모듈 외관 참고의 해안·소나무·SUV 도착 이미지를 내장 imagegen으로 새 제작. 이미지 종류·미확정 조건 표시.
- 별장 외관/비치사이드/테라스/카페테리아 탭, 도착→테라스→친구의 휴가 장면, 공유 참여→비용·권리→사업→서비스로 재구성. 120셀과 기존 수동 덱 유지.
- Business Valley 별도 소개 페이지 `business-valley.html`과 두 사업 진입 카드 추가. LIVE/WORK/CONNECT/BUILD, 일곱 공간 구성안, TRY/WORKATION/LIVE, 준비 상태. 치앙마이 가격과 국내 SHARE 가격을 구분했다.
- 소스 `chairman.js/css`, `valley.js`, 새 HTML. index와 cinematic 히어로, app 모바일 메뉴 외부 페이지 연결, 공개 파일 목록 변경. 기존 미커밋 상담/내부 문서 변경 보존.
- 기존 공개 상담·FAQ 삭제 유지. 396만 원·5% 검토 기준, 6단계·권리/이용/환불 미정 유지. 실제 서버/DB/회원/접수/예약/결제/발송 보류.
- 상세 근거·화면 명세·사용자 결정: `docs/CHAIRMAN-REDESIGN-20261003.md`. 브라우저 화면/관찰 기록: `docs/review/chairman-20261003/`. 1440/390/320px 두 페이지 가로 넘침·JS 오류 없음. 동작 줄이기, 탭, 모바일 메뉴, 문의 안내창 확인. 실제 휴대폰/Safari 검증 없음.
- 공개 빌드 49파일. PNG·원문·조사·백업은 제외. 백업 `backups/before-chairman-20261003/`. 로컬 127.0.0.1:4173 미리보기 실행 중.
- **이번 작업은 로컬 저장이며 Git commit/push·main 병합·운영 배포 없음.** 이전 10월1일 운영 상태는 아래 기록.


## 최신 GitHub 인계 — 2026-10-01

**업로드 완료:** `af16b76752f90def58dae15ad82fac779b3ff42a` → `origin/codex/main-pc-handoff-20260930`, 원격 SHA 일치 확인. 자동 승인 검토가 내부 자료까지 포함한 업로드를 거절해 공개 웹 소스·이미 배포된 WebP·`docs/PUBLIC-HANDOFF-20261001.md`만 업로드했다. 아래의 내부 자료 함께 보존은 로컬 보존을 뜻한다. 내부 상담 변경·연구 문서·백업·검토 자료·원본 PNG는 이번 커밋에서 제외했다. 다른 PC의 최신 시작 문서는 `docs/PUBLIC-HANDOFF-20261001.md`다. 이 문서의 최신 수정 자체도 로컬에만 있다.

사용자 지시로 현재 저장본을 `codex/main-pc-handoff-20260930` 브랜치에 커밋하고 업로드한다. 운영 배포와 동일한 공개 소스·최적화 사진, 내부 작업 문서·복원 백업 및 이전 비공개 상담 개선 소스를 함께 보존한다. 공개 빌드는 42파일이며 상담·FAQ·공개 변경 기록은 없다. 현재 운영 `dpl_H8uU3yqZWs7M2gHQaNPj4NtiUEcm`, 기존 IMTGroup 프로젝트 READY. 아래의 ‘Git commit/push 없음’은 당시 기록이다.

다른 PC에서는 이 인계 브랜치를 fetch/pull한 뒤 `docs/PARTICIPATION-EFFECTS-20261001.md`, `docs/IMPROVEMENTS-CINEMATIC-20261001.md`를 읽는다. 로컬 실행 `npm start`, 공개 빌드 `npm run build`. 서버·DB·회원 인증·실제 접수/예약/결제/발송은 PM 협의 전 보류. main 병합 없이 인계 브랜치만 업로드하며 이 브랜치의 Vercel Git 자동 배포는 비활성화되어 있다.

## 최신 운영 반영 — 2026-10-01 참여 안내 강한 효과

사용자가 참여 순서·참여 전 확인·계약 구상 사진을 지목하며 화려한 효과를 요청했다. 해당 영역을 짙은 숲색/골드로 변경하고 스크롤 궤도·배경 사진·대형 문구, 네 카드의 순차 등장/높이 차/마우스 조명/입체 기울기/광택, 겹친 문서와 떠 있는 안내 카드를 추가했다. 확인·계약 구상은 기본 펼침이며 기존 조건과 준비 중 상태를 유지한다. 모바일 배치·이전 #member 배경 충돌 수정, JS 문법 및 42파일 공개 빌드 성공. 자동 테스트 없음. 서버 보류 유지.

- 운영 https://my-lodge-business.vercel.app/#participation — `dpl_H8uU3yqZWs7M2gHQaNPj4NtiUEcm`.
- 관리 https://vercel.com/imtg-roup/my-lodge-business/H8uU3yqZWs7M2gHQaNPj4NtiUEcm . 기존 IMTGroup prebuilt preview 후 promote.
- 운영 DOM에서 효과 클래스/4개 단계/펼친 확인·계약 영역/수정 배경 반영 확인. 화면 `docs/review/feedback-20261001/production-participation-effects.png`.
- 상세 `docs/PARTICIPATION-EFFECTS-20261001.md`, 복원 `backups/before-participation-effects-20261001/RESTORE.md`.
- 이전 운영 `dpl_A6yaSsdhSmbjv7VEevHEH8PftojP`. Git commit/push 없음. 상담·FAQ·공개 변경 기록 삭제 유지.

## 최신 운영 반영 — 2026-10-01 11:42 KST 생활 사진·강한 모션

사용자가 Hanz City intro를 참고해 기존 디자인 변경과 강한 모션, 사람의 생활 사진을 요청했다. 전체 화면 가족 아침 식사, 새 AI 생활 사진 3종, 사업계획서 p16 생활 장면, 아침→오후→저녁 sticky 스크롤 전환을 추가했다. 큰 제목·움직이는 띠·사진 확대/이동·좌우 등장·카드 기울기를 보강했다. 모바일 생활 장면에서 가격 CTA를 숨겨 설명을 가리지 않게 했으며 모션 감소에는 정적 대체를 제공한다.

- 운영 https://my-lodge-business.vercel.app/ — `dpl_A6yaSsdhSmbjv7VEevHEH8PftojP`, production READY, 2026-10-01 11:42:24 KST.
- 고유 주소 https://my-lodge-business-nav6k2uwh-imtg-roup.vercel.app . 기존 IMTGroup 프로젝트에 공개 42파일 prebuilt 배포 후 promote. 이전 운영 `dpl_bGhcDueNnxpND9m6cXcGMrMwgRwr`.
- 운영 DOM에서 cinematic 적용·생활 장면 3개·상담/FAQ/변경 기록 0개와 첫 사진 로드를 확인. 로컬 데스크톱 전환과 390px 모바일 확인, JS 문법/빌드 성공. 자동 테스트 없음.
- 구현 `cinematic.css`, `cinematic.js`, 상세 `docs/IMPROVEMENTS-CINEMATIC-20261001.md`, 복원 `backups/before-cinematic-20261001/RESTORE.md`.
- 운영 화면 `docs/review/feedback-20261001/production-cinematic-hero.png`.
- 구좌 그리드·가격 및 미정 조건 유지. 서버 기능 PM 보류. GitHub commit/push 없음, 기존 미커밋 작업 보존.

## 추가 수정·운영 반영 — 2026-10-01 변경 기록 영역 삭제

사용자가 사진의 ‘사이트 화면 변경 기록’ 삭제를 요청했다. 공개 진행 안내 안의 `.site-history` 전체를 제거하고 기존 IMTGroup 프로젝트에 공개 28파일을 배포·승격했다. 운영 주소에서 해당 요소 0개와 제목 텍스트 제거를 확인했다. 사업 진행 안내와 내부 작업 기록은 유지했다. 백업 `backups/before-history-removal-20261001/app.js`, 화면 `docs/review/feedback-20261001/production-history-removed.png`. 새 운영 배포 관리: https://vercel.com/imtg-roup/my-lodge-business/bGhcDueNnxpND9m6cXcGMrMwgRwr . 이전 운영 `dpl_6trqeqnHRJpz26P8BXD4Cnjym8LP`. GitHub commit/push 없음, 서버 보류 유지.

## 최신 구현·운영 배포 — 2026-10-01 사진 피드백

사용자 요청과 범위 확인 답변에 따라 **상담과 FAQ 모두 삭제**했다. 메뉴·미리보기 버튼·질문 담기·폼/FAQ 초기화 코드와 공개 상담 모듈을 제외했다. CTA는 프로젝트 탐색으로 변경했다. 120칸 구좌 그리드 구조와 검토 중 가격·권리·이용·추가 비용·환불 조건은 유지했다.

집 스케치는 Drive에서 확인한 사업계획서 13페이지 내장 공간 콘셉트로 교체하고, 8페이지 조감도 장면을 추가했다. 두 번째 피드백 사진의 취향을 참고해 별개의 몽환적 자연 이미지를 생성하고 실제 환경이 아님을 표기했다. 본문 요약·챕터 강조·조감도 펼침·자연 장면의 등장과 패럴랙스를 보강했다. 자동 테스트는 실행하지 않았으며 문법·공개 빌드, 데스크톱/390px 모바일, 운영 DOM·이미지·콘솔을 확인했다.

- 운영: https://my-lodge-business.vercel.app/ — **2026.10.01 버전 적용 완료**.
- ID `dpl_6trqeqnHRJpz26P8BXD4Cnjym8LP`, READY, 생성 2026-10-01 11:17:39 KST.
- 고유 주소: https://my-lodge-business-bfmyamvmj-imtg-roup.vercel.app
- 기존 IMTGroup 프로젝트에 공개 **28파일만** prebuilt 업로드하고 promote했다. CLI 62.0.0 업로드 인증 오류는 61.1.0으로 해결했고 계정 교체는 하지 않았다.
- 상세·자료 출처·추가 영상 후보·확인 범위: `docs/IMPROVEMENTS-20261001.md`.
- 복원용 소스: `backups/before-feedback-20261001/RESTORE.md`. 이전 운영 `dpl_7orRsQazdTTg4nRpVHMZ5BMufirK`.
- 화면: `docs/review/feedback-20261001/production-nature.png`.
- **아래의 상담/FAQ 구현 기록은 과거 상태**다. 이번 지시를 우선한다. 비공개 가상 운영에서 쓰는 consultation 모듈은 원본을 보존했으며 운영 사이트에는 배포하지 않는다.
- 기존 미커밋 작업 보존, GitHub commit/push/main 병합 없음. 서버·DB·실제 접수/저장/발송·예약·결제는 PM 협의 전 보류.

## 운영 업데이트 완료 — 2026-09-30 18:16 KST

사용자가 배포 대상을 `https://vercel.com/imtg-roup`으로 명시했다. 인증 계정은 `officeysh03-4828`이며 팀 소유자는 IMTGroup이다. 개인 인증 계정 이름과 프로젝트 소유 팀을 혼동해 계정 교체가 필수라고 설명한 앞선 안내는 정정한다. 직접 `deploy --prod`는 권한 오류가 났지만, 같은 팀 범위에서 기존 READY 미리보기의 `vercel promote ... --scope imtg-roup --yes`가 성공했다. **현재 운영 주소는 최신 개선본으로 업데이트 완료**다.

- 운영: https://my-lodge-business.vercel.app/
- 새 고유 주소: https://my-lodge-business-ifr5ct954-imtg-roup.vercel.app
- 관리: https://vercel.com/imtg-roup/my-lodge-business/7orRsQazdTTg4nRpVHMZ5BMufirK
- 운영 배포 ID: `dpl_7orRsQazdTTg4nRpVHMZ5BMufirK`, 상태 READY, 생성 2026-09-30 18:16:56 KST.
- CLI inspect로 기존 운영 별칭이 새 배포에 연결됨을 확인했다. 실제 공개 브라우저에서 질문 선택 영역 표시·질문 담기·먼저 물어볼 질문 지정 동작을 확인했고 콘솔 오류는 없었다. 화면: `docs/review/inline-questions-20260930/vercel-production.png`.
- 공개 파일 22개만 배포했다. 서버·실제 접수·발송 보류와 GitHub 미커밋·미업로드 상태는 유지된다.
- 업데이트 전 운영 배포: `dpl_Hnfru7wfGgp1BNzkxhnRBcPe9EbB`, https://my-lodge-business-8dgokrqtf-imtg-roup.vercel.app (2026-09-28 00:15:45 KST).


## Vercel 업로드 — 2026-09-30, 운영 권한 대기

사용자가 Vercel 업데이트를 요청하고 공식 CLI 기기 인증을 완료했다. 현재 계정은 `officeysh03-4828`; 기존 프로젝트 `imtg-roup/my-lodge-business`에 연결했다. `scripts/build.mjs`로 공개 22파일을 다시 생성하고 `.vercel/output/static` + Build Output API v3 구성으로 미리보기 업로드 성공(READY, 빌드 2초).

- 미리보기: https://my-lodge-business-99bw4omz3-imtg-roup.vercel.app
- 배포 확인: https://vercel.com/imtg-roup/my-lodge-business/EmAhUYLeKkz5RvQWS3xERKS6RxdW
- ID: `dpl_EmAhUYLeKkz5RvQWS3xERKS6RxdW`
- 운영 배포는 Vercel이 “You don't have permission to create a Production Deployment for this project.”로 거절했다. **운영 주소 업데이트는 미완료**. 운영 권한이 있는 계정의 배포/승격이 필요하다. 인증 코드 재발급 요청 후 로그인 성공한 상태이며 불필요하게 다시 로그아웃하지 않는다.
- 미리보기는 Vercel 인증 보호가 적용된다. CLI inspect로 READY 확인했으나 보호 토큰 발급도 권한 오류여서 배포 URL의 화면·응답 검증은 완료하지 못했다. 보호 설정 변경·우회 비밀 생성은 하지 않았다.
- `.vercel/`, `.env.local`은 CLI가 생성한 로컬 비공개 파일이며 Git 업로드와 공개 산출물에서 제외된다. 공개 산출물에는 내부 문서·가상 운영·서버 기능이 없다. GitHub 커밋·push·main 병합은 하지 않았다.


## 최신 구현 — 2026-09-30 상담 안에서 질문 정리

사용자가 배치 예시에서 ‘상담 안에서 정리’를 선택하고 실제 적용을 요청했다. 공개 상담 폼의 관심 프로젝트 아래에 질문 선택 영역을 추가했다. 기존 FAQ 10개 원고를 재사용하며 이용 일정·추가 비용·소유 권리 3개를 먼저 보여주고 나머지는 펼쳐 볼 수 있다. 중복 방지, 삭제와 삭제 취소, 먼저 물어볼 질문 1개 지정·해제, FAQ 담기 연결, 확인창에서 정형 질문과 자유 문의 분리, 수정 복귀 및 새로 체험하기 초기화를 구현했다. 질문은 선택 사항이며 메모리에서만 유지된다. 가상 운영 폼에는 이 영역을 추가하지 않았다.

현재 로컬 미리보기: `http://127.0.0.1:4173/#consultation`. 이번 변경 직전 소스 3개는 `backups/before-inline-questions-20260930/`에 보관했다. app.js·consultation.js 문법 검사와 공개 22파일 빌드 성공. 브라우저에서 중복 방지·중요 질문·삭제 취소·FAQ 연결·자유 문의 유지·확인창 수정 복귀·체험 완료·초기화·질문 미선택 진행을 확인했다. 화면 기록은 `docs/review/inline-questions-20260930/`. 실제 저장·발송·접수·서버 기능은 PM 협의 전 보류이며 GitHub 업로드와 배포는 수행하지 않았다. 기존 미커밋 개선 사항도 유지했다.

## 최신 기획 확장 — 2026-09-30 추가 20분 요청

사용자의 추가 기획 요청으로 **`FEATURE-SPEC-20260930.md`**를 작성하고 기존 `FEATURE-PLAN-20260930.md` 맨 위에 요약을 연결했다. 5개 후보를 상세 화면·상태·예외·작업 단위로 확장하고 질문별 답변, 공개 정보 승인·변경 관리, 방문 준비·현장 도움, 공통 이용 권리·일정 및 내부 용량 검토를 정리했다. 원기획의 기존 구상과 이번에 더한 세부 설계를 구분했다. 공식 Airbnb 공유, GOV.UK 입력 안내, HomeExchange 교환 확정 안내를 참고했다.

첫 구현 제안은 정형 질문 보관함과 기존 상담 연결(A1–A4)이다. 다음 공개 목적·승인 자료·서버 승인에 따라 후속 순서를 결정한다. 대화용 질문 정리 배치 예시는 저장소 밖의 스레드 시각화 폴더에 있으며 공개 사이트 파일이 아니다. **이번에는 기획 문서와 별도 화면 예시만 작성했고 기존 사이트 소스·공개 빌드·서버 기능·GitHub·배포는 변경하지 않았다.** 다음 작업자는 기획 전체를 일괄 구현하지 말고 사용자의 후속 범위 지시를 따른다.

## 최신 기획 — 2026-09-30 추가 기능 후보

사용자의 약 5분 추가 기능 기획 요청으로 `FEATURE-PLAN-20260930.md`를 작성했다. 질문 보관함, 이용 성향별 확인 항목 안내, 공개 항목 공유, 승인 자료 기반 프로젝트 상세·비교, 서버 승인 후 고객 상담 진행 조회를 제안했다. 현재 FAQ 담기·상담 요약·가상 운영 기능과의 차이 및 선행 결정을 명시했다. **기획만 수행했으며 사이트 소스 수정이나 기능 구현 승인이 아니다.** 다음 구현 범위는 사용자의 후속 지시를 따른다. 기존 로컬 미커밋 개선본과 서버 보류 상태는 유지된다.

## 최신 구현 — 2026-09-30, 9월 29일 최종판 기준 안내·탐색 개선

사용자가 `mylodge-20260929-final`을 기준으로 30분 개선을 요청했다. 기준 커밋은 `2c8c2d22ae0e32e976f15eb0213ce867fff59f8d`. `RESEARCH-20260930.md`의 편집 가능한 제안을 반영했다. 세 가지 판단 질문과 FAQ 연결, 비용·권리 항목으로 바로 이동, 모바일 가격의 검토 상태, 프로젝트 공통 정보 정돈, 서비스 구상 도식과 간격, 상담 요약의 질문 표시를 개선했다. 상담 안내도 실제 화면의 입력→확인→체험 완료와 맞췄다. FAQ 원고·분류·연결을 묶고 일부 중복 렌더링을 정리했으며 기본 HTML 안내를 추가했다.

상세 내용과 확인 범위는 **`IMPROVEMENTS-20260930.md`**. 변경 소스는 `app.js`, `styles.css`, `index.html`, `consultation.js` 네 파일이다. `consultation.js`는 가상 운영 화면에서도 공유하며 이번 변경은 선택 요약 표시다. 자동 테스트·전체 상담 흐름 재검사·실제 기기 검사는 실행하지 않았다. 공개 빌드는 허용된 22개 파일만 생성한다. 화면 기록은 `docs/review/research-improvements-20260930/`에 있다.

**현재는 로컬 미커밋 작업본**이다. 이번 개선의 push·main 병합·운영 배포는 하지 않았다. `4173`은 개선본, `4174`는 별도 사본의 9월 29일 원본이며 서버가 실행 중인 이 PC에서만 열린다. GitHub 태그는 원본을 계속 가리킨다. 네 원본 파일은 `backups/before-research-improvements-20260930/`에 있고 복원 방법은 같은 폴더의 `RESTORE.md`. 실제 서버·발송·예약·결제 및 미정 사업 조건은 계속 PM 협의 전 보류다. 다음 작업자는 로컬 변경을 보존한 뒤 새 사용자 지시를 따른다.

## 버전 고정 — 2026-09-30 사용자 요청

사용자가 확인한 9월 29일 마지막 개선판을 GitHub 태그 `mylodge-20260929-final`로 등록했다. 대상 커밋은 `2c8c2d22ae0e32e976f15eb0213ce867fff59f8d`이며 기존 `codex/main-pc-handoff-20260930` 인계본과 동일하다. 태그 push 성공을 확인했다. 현재 로컬의 9월 30일 소스 수정과 조사 문서는 해당 태그에 포함되지 않는다. main 변경이나 운영 배포는 수행하지 않았다. 이 기록은 로컬 인계 문서에만 추가했다.

## 최신 조사 — 2026-09-30 원자료·현재 화면·새 유사 서비스 비교

사용자의 30–50분 조사 및 이어서 진행 요청에 따라 `docs/RESEARCH-20260930.md`를 작성했다. PDF 53쪽, 플랫폼 기획서, 홍보페이지 개발순서 보고서의 150개 검토 항목, 통화 전사 2종을 현재 로컬 화면·소스와 대조했다. 기존 벤치마크 8곳을 제외하고 NOT A HOTEL·August·21-5·MYNE·HomeExchange·리브애니웨어·Marriott Homes & Villas·Landfolk의 공식 공개 페이지 8곳을 조사했다.

핵심은 PDF의 15%와 통화의 5%·6단계 차이, 이용 일수·관리비의 미확정, 원자료의 모듈형 단지와 현재 독채 이미지의 방향 차이, 지역별 승인 자료 부족이다. 편집 가능한 문구·탐색 개선과 PM 결정 후 가능한 기능을 나눴다. 참조 원본 4종과 통화 음성은 현재 폴더에서 찾지 못했으며 보고서에 한계를 기록했다.

공개 URL `https://my-lodge-business.vercel.app/`은 조사 시 9월 24일 기준 화면(FAQ 8개·기존 시간 선택)을 보여줬고, 로컬 최신본은 9월 29일 개선본이다. GitHub 인계 브랜치 업로드와 운영 배포를 구분한다. 배포 커밋 자체는 식별하지 않았다.

이번 변경은 조사·인계 문서만이다. 사이트 소스 변경·자동 테스트·서버 구현·main 병합·배포·추가 push는 수행하지 않았다. 서버는 계속 PM 협의 전 보류. 다음 작업자는 새 사용자 지시에 따라 보고서 6절의 편집 범위 또는 PM 자료 정리를 선택하며 모든 제안을 일괄 구현하지 않는다.

## 최신 GitHub 인계 — 2026-09-30 (아래 과거 기록보다 우선)

메인 PC의 Codex가 바로 재개할 수 있도록 **`codex/main-pc-handoff-20260930`** 브랜치에 로컬 최신 작업을 모았다. `AGENTS.md` → `docs/MAIN-PC-START.md` → `docs/FINAL-CHECK-20260929.md` 순서로 시작한다. main 기준 커밋은 `6d7491e2a66d4b2dc5bf1ab4e033675522c0bfb4`이며 기존 원격 기획/통화 원본을 보존했다.

이 브랜치를 clone/switch한 폴더는 정상 Git 저장소다. 아래의 “Git 메타데이터 없음”, “GitHub 반영 없음”, “상위 review 경로”는 **업로드 전 로컬 사본의 과거 기록**이다. 최신 캡처는 `docs/review/`, 원본 기획 자료는 `마이롯지프로젝트 공용 문서/`, 복원 소스는 `backups/`에 있다. 공개 빌드는 과거의 3개가 아니라 **22개 파일**이며 `scripts/public-assets.mjs`가 기준이다.

현재 실제 상담/저장/발송/예약/결제/인증은 연결되지 않았다. 서버 기능은 PM 협의 전 보류. 다음 구체 작업은 새 사용자 지시를 따르며 “미완료 목록”을 전부 자동 구현하지 않는다. main 병합·운영 배포는 이번 인계에 포함하지 않았다. 이 브랜치의 Vercel 자동 배포를 비활성화했다.

9월 29일 확인 기록은 그대로 보존했다. 이번에는 업로드·문서·경로 정리만 수행하며 구현 테스트를 새로 실행하지 않았다.

## 최신 저장 — 2026-09-29 상담 마무리·전달 준비

20분 마무리 요청에 따라 날짜·시간 재선택/복원·주간 이동·확인창 수정·모바일 화면을 점검했다. 긴 시간 선택 영역에서 수정 포커스가 화면 위로 가려지는 문제와 좁은 날짜 입력 폭을 수정했다. `FINAL-CHECK-20260929.md`에 확인 범위, `PM-DECISIONS-20260929.md`에 미정 정책, `README-TRANSFER.md`에 실행·전달 방법을 정리했다. 상담 소스 백업은 `backups/before-final-handoff-20260929/`. 개발용/공개용 ZIP은 상위 `deliverables/`에 생성한다. 기존 가상 운영 모델 검사 9개 통과. 실제 기기·실제 서버 연동 검증은 별도이며 서버 기능은 계속 PM 협의 전 보류한다.

## 최신 화면 변경 — 2026-09-29 전체 모션 점검·참여 절차 정돈

사용자의 전체 점검 요청과 참여 절차 스크린샷 수정 요청을 반영했다. 참여 단계는 PC 4열 / 중간 화면 2×2 / 모바일 세로 타임라인으로 바꾸고 번호 정렬을 고쳤다. 프로젝트의 태블릿 2열 배치, 후반 제목·공개 항목 등장, FAQ 펼침·닫힘 애니메이션, 서비스 덱 높이 전환, 사진 패럴랙스 여유 영역을 보완했다. 상세 범위와 확인 결과는 `MOTION-AUDIT-20260929.md`. 소스는 `app.js`, `styles.css`, 이전 사본은 `backups/before-motion-audit-20260929/`. 1440/900/390/320px 화면 및 FAQ·덱 전환·상담 예시 완료 흐름을 확인했다. 실제 서버·발송·배포는 계속 보류한다.

## 최신 화면 변경 — 2026-09-29 중간 구간 모션 추가

사용자의 추가 요청으로 프로젝트 사진의 확대·마스크 등장, 중간 제목의 순차 등장·밑선, 사진 덱의 중앙 모임→좌우 펼침, 참여 단계의 순차 등장·연결선, 서비스 배경의 은은한 밝아짐을 추가했다. 처음 진입할 때 1회 재생하며 네이티브 스크롤을 유지한다. 동작 줄이기에서는 효과를 생략하고, 포커스 진입 시 내용이 바로 보이도록 했다. 기존 비용·FAQ·상담 입력은 대상에 포함하지 않았다. `app.js`의 middleEntrances 및 `styles.css`의 Mid-page accents가 구현. 이전 파일은 `backups/before-middle-motion-20260929/`. 공개 빌드 완료, 자동 테스트 없음. 앞선 저장·중지 요청 이후 사용자가 추가 작업을 요청하여 이어서 수정한 버전이다.

## 최신 화면 변경 — 2026-09-29 라이프스타일 사진 덱

사용자가 서비스 카드와 같은 겹침 방식을 사진 3장에도 요청하여 적용했다. 큰 앞 사진과 좌우 뒤 사진, 이전/다음 버튼, 현재 번호·제목, 터치 스와이프, 방향키 이동으로 구성했다. 자동 재생은 없으며 AI 콘셉트 안내는 유지한다. 기존 사진별 가로 등장 대신 덱 전환을 적용했고 이미지 내부 패럴랙스는 유지했다. 변경 파일은 `app.js`, `styles.css`, 이전 버전은 `backups/before-photo-deck-20260929/`. 공개 빌드 생성 및 로컬 미리보기 진행, 자동 테스트는 실행하지 않았다.

## 최신 구현 — 2026-09-29 벤치마킹 개선 버전

사용자의 개선 버전 요청으로 `BENCHMARK-20260929.md`의 화면 정돈안을 적용했다. 첫 화면의 전체 금액/최초 납입 위계, 공동소유 3장면 설명, 비용·권리 정적 표, 프로젝트 공통 조건 묶음, 사진 비대칭 배치, 선형 참여 절차, 사이트 수정 이력 접기, 상담 선택 요약과 시간 선택 표현을 개선했다. 기존 서비스 겹침 카드와 사진 등장 방향은 유지하고 비용·FAQ의 스크롤 이동을 제외했다.

변경 소스는 `app.js`, `styles.css`, `consultation.js`, `consultation-refinements.css`. 이전 파일은 `backups/before-benchmark-20260929/`에 보관했다. 되돌릴 때 네 파일을 원래 위치에 복사하고 공개 빌드를 다시 생성한다. 공개 빌드는 22개 파일이며 실제 서버·발송·예약·배포는 보류. 브라우저에서 첫 화면 및 프로젝트→상담 요약 미리보기를 확인했고 자동 테스트는 실행하지 않았다. 캡처는 상위 `review/benchmark-improved-home.png`, `review/benchmark-improved-consultation.png`에 있다. 프로젝트 상세 페이지 확장은 승인된 자료 확보 후 진행한다.

## 최신 조사 — 2026-09-29 국내 대기업·숙박·공유별장 벤치마킹

사용자의 30분 조사 요청과 추가 시간 허용에 따라 토스·현대자동차·삼성닷컴·아난티·스테이폴리오·마이세컨플레이스·소노·Pacaso의 공식 공개 화면을 살펴봤다. **BENCHMARK-20260929.md**에 관찰 근거, 사업 모델 차이, 마이롯지와의 대조, 세 가지 디자인 방향 및 구현 우선순위를 기록했다. 캡처와 비교 보드는 프로젝트 상위 `review/benchmark-20260929/`에 있으며 `index.html`에서 볼 수 있다. 자료를 전달할 때 이 폴더도 함께 포함한다.

권장 방향은 큰 공간 사진과 여백, 짧은 설명, 정적인 비용·권리 정보, 선택 내용을 이어받는 상담이다. 기존 기능을 새 기능처럼 제안하지 않고 정돈·확장·PM 결정 사항을 구분했다. 이번 작업은 조사 문서와 비교 자료 작성이며 사이트 소스 수정·서버 기능·배포·자동 테스트는 진행하지 않았다. 타사 화면의 수익·회원권 조건·해외 법적 구조를 마이롯지 정책으로 채택하지 않는다.

## 최신 화면 변경 — 2026-09-29 서비스 카드 겹침

준비 중 서비스 4개를 사용자가 그린 겹침 카드 형태로 변경했다. 좌우 버튼·카테고리·터치 스와이프로 전환하고 자동 재생은 없다. 앞 카드만 접근성 읽기·키보드 대상으로 두며 상세 펼침 높이에 맞춰 영역을 조절한다. 기존 상담 관심 서비스 연결은 유지했다. `app.js`의 serviceDeck 및 `styles.css`의 Service deck 블록이 구현이다. 변경 전 파일은 `backups/before-service-deck-20260929/`. 공개 빌드 완료, 로컬 화면에서 다음 카드 전환 미리보기 확인. 자동 테스트는 실행하지 않았다.

## 최신 화면 변경 — 2026-09-29 가로 등장 효과

사용자가 지정한 상담 안내는 왼쪽에서 오른쪽으로, 라이프스타일 사진 3장과 히어로 사진은 오른쪽에서 왼쪽으로 등장하도록 적용했다. `app.js`의 `sideEntrances`와 `styles.css`의 Horizontal entrance 블록에서 관리한다. 상담 문구는 65ms 간격, 사진은 오른쪽부터 110ms 간격이며 약 1.15초(히어로 1.4초) 동안 감속한다. 각 요소가 화면에 처음 들어올 때 한 번 재생하며 새로고침하면 다시 볼 수 있다. 모바일은 거리와 지연을 줄이고, 동작 줄이기 및 인쇄에서는 즉시 표시한다. 기존 사진의 세로 등장만 제외하고 이미지 내부 패럴랙스는 유지했다. 라이프스타일 사진의 중복 AI 배지는 앞선 요청으로 제거했고 하단 안내는 유지한다.

변경 전 `app.js`, `styles.css`는 `backups/before-directional-20260929/`에 보관했다. 공개 빌드 22개 파일 재생성 완료, 로컬 사진·상담 화면 미리보기 확인. 자동 회귀 테스트는 실행하지 않았다. 서버 기능과 배포는 계속 보류한다.

## 최신 추가 개선 — 2026-09-29 상담 연결과 탐색

20분 추가 개선 요청을 반영했다. **REFINEMENT-20260929.md**를 먼저 읽는다. 주 단위 날짜 탐색·선택 복원, 예시 기본 정보 입력, 작성 요약, 서비스/FAQ에서 상담으로 관심 내용 전달, FAQ 검색, 운영 목록 정렬·다음 행동 표시를 추가했다. 변경 전 백업은 `backups/before-refinement-20260929-1223/`이다. 공개 산출물과 실행 경로는 유지하며 실제 서버·발송·배포는 계속 보류한다.

## 최신 구현 — 2026-09-29 전체 개선 적용

사용자의 “모든 개선점 추가해서 제작해봐” 요청으로 추가 점검의 기능 A–H와 디자인 제안을 반영했다. **IMPROVEMENTS-20260929.md**에 항목별 변경, 이미지 용량, 확인 범위와 복원 절차를 기록했다. 실행은 **DEVELOPMENT.md**, 공개 범위는 **DEPLOYMENT.md**를 따른다. 아래 ‘소스 수정 없음/미해결’은 구현 전 점검 당시의 이력이다.

현재는 Git 메타데이터가 없는 로컬 복사본이다. 서버·실제 발송·인증·결제는 계속 PM 협의 전 보류. GitHub 반영과 배포 없음. 이번 구현은 JS 문법 확인·공개 빌드·화면 미리보기까지 진행했으며 기존 자동 회귀 검사 묶음은 재실행하지 않았다. 변경 전 소스는 `backups/before-all-improvements-20260929/`에 보관했다.

## 최신 점검 — 2026-09-29 기능·디자인 추가 검토

사용자의 30분 추가 점검 요청으로 로컬 상담·운영 흐름과 모바일/PC 화면을 검토했다. **docs/DEEP-AUDIT-20260929.md**에 재현 순서, 우선순위, 수정 완료 기준과 한계를 기록했다. 같은 시간 선택 재클릭 초기화, 메뉴 리사이즈/낮은 화면 높이/Escape 상태, 일부 안내 문구 대비, 관심 지역 설명, 수정 뒤 남는 오류 표시를 새로 확인했다. 기존 재연락 누락과 시간 경과 갱신 문제도 재현했다.

서비스 기능·디자인 소스는 수정하지 않았으며 위 문제들은 미해결이다. 메모리 모델 검사 기존 9개 중 8개 통과·1개 실패, 추가 26개 통과. 이는 실제 서버 검증이나 전체 서비스 합격률이 아니다. 로컬 공개 빌드 재생성은 성공했고 실제 저장·발송·GitHub 반영·배포는 계속 보류한다. 독립 검사와 증거 파일은 작업 상위 `review/`에 있으며 이 프로젝트 폴더만 전달하면 함께 전달되지 않으므로 필요시 같이 묶는다.

## 최신 작업 — 중간 저장 이후 상담 흐름 구현 재개

사용자의 ‘집에 왔으니 진행해’ 요청으로 상담 화면과 운영 시안을 이어서 구현했다. 최신 내용과 실행 방법은 **docs/CONSULTATION-WORKFLOW.md**를 먼저 읽을 것. 로컬 빌드 및 미리보기 표시까지 진행했고, 자동 테스트·전체 제출 시나리오 실행 검증은 하지 않았다. 고객 폼 간소화, 희망 시간 선택, 개별 수정, 같은 가상 문의의 운영 처리, 미저장 보호, 실패 상황 시연을 추가했다. 아래 오후 5시 10분 기록은 과거 중간 저장 이력이다. 실제 서버 기능·GitHub 반영·운영 배포는 계속 보류.

## 최신 중간 저장 — 2026-09-28 오후 5시 10분

사용자 요청으로 상담 흐름 구현 도중 저장하고 중지했다. **docs/WORKFLOW-CHECKPOINT-20260928.md를 먼저 읽을 것.** 새 상담 폼과 운영 흐름 모듈이 작성되었으나 완료·실행 검증을 마친 결과물이 아니다. 상세 계획은 docs/PM-REVIEW-20260928.md. 로컬 변경이며 GitHub 반영·배포 없음. 실제 서버 기능은 계속 보류한다.

작성일: 2026-09-28 (한국 시간). 대화의 결정 사항과 현재 구현 상태를 요약한 문서이며 대화 전문은 아니다.

## 시작할 때

1. 이 문서와 `docs/LOCAL-FRONTEND-REVIEW-2026-09-27.md`, `docs/DEVELOPMENT.md`, `docs/DEPLOYMENT.md`를 읽는다. 과거 문서와 충돌하면 최신 사용자 지시 및 이 문서의 결정 사항을 우선한다.
2. `git status`와 최신 main을 확인한다. 사용자의 미커밋 작업은 보존한다.
3. 새 작업을 사용자에게 확인한다. 아래 미완료 목록 자체가 즉시 구현 또는 배포 지시는 아니다.

## 저장소와 실행

- GitHub: https://github.com/IMT-Group-Account/MyLodge_Business (비공개, 계정 접근 권한 필요)
- 운영 사이트: https://my-lodge-business.vercel.app/
- Vercel: https://vercel.com/imtg-roup/my-lodge-business
- 기본 브랜치: main
- Node.js 20 이상. 별도 패키지 설치 없이 실행 가능한 정적 HTML/CSS/JavaScript 사이트.
- 실행: `node server.mjs` → http://127.0.0.1:4173/
- 검사: `node --check app.js`, `node --check server.mjs`
- 빌드: `node scripts/build.mjs`
- 공개 빌드에는 index.html, styles.css, app.js만 포함한다. docs 및 원본 기획 자료는 공개 빌드에 포함하지 않는다.
- .vscode/settings.json은 VS Code에서 커밋 후 push하도록 설정되어 있다. 로컬만 작업하라는 요청이 있으면 커밋도 하지 않는다. 터미널에서는 commit과 push가 별도다.
- main push가 기존 Vercel Git 연동으로 운영 배포를 시작한다. 배포 후 실제 사이트를 확인한다.
- 두 컴퓨터 간 이동: 작업 시작 전 pull, 종료 시 사용자가 승인한 변경 commit/push. 강제 push 금지.

## 결정 사항과 변경 이력

- 프로젝트는 마이롯지 홍보 플랫폼. 초기에는 한즈시티 후속 사이트 느낌과 공유 인터페이스를 요청했지만 사용자가 명시적으로 철회했다.
- 디자인 기준은 전달된 Figma 와이어프레임과 마이롯지 기획서다. Figma: https://www.figma.com/make/wG7bFGo1iXoEJBPH1fBqrV/홍보페이지-제작
- v0.2 개선안은 채택하지 않았고 기존 v0.1을 기반으로 작업한다. 별도 v0.2 폴더가 있더라도 가져오지 않는다.
- 작업은 파트별로 진행하고 애매한 내용은 사용자에게 질문한다.
- 주문진·양양 섹션을 한때 삭제했으나 사용자가 복원을 요청해 현재 둘 다 존재한다. 준비 중·콘셉트 이미지이며 확정 모집 상품으로 표현하지 않는다. 상담 관심 지역 선택과 지역 CTA 연결도 복원했다.
- 추가 혜택/금액을 포함한 회원 교환, 방문 전 청소·룸서비스, 물품 종류·수량 설명을 추가했다. 침구·베개·베개커버, 큰/작은 타월·가운, 장작·숯·그릴 등은 검토 항목이다.
- 회원 예약·교환·렌트·방문 준비·알림은 추후 기능이다. 현재 설명/화면 예시만 있다.
- 연락 희망 시간은 날짜 선택 후 시/분 드롭다운. 09~23시, 00분 고정(1시간 단위), 상관없어요 유지. 과거 날짜 제한. 당일 과거 시간 제한은 미구현.
- DB/실제 상담 저장/접수번호/직원 관리/자동 알림/회원 기능은 PM 협의 및 자료 수령 후로 보류한다. 최근 'db' 메시지는 오타라고 사용자가 확인했다.
- 상담 주제 비용·분납/공동소유/이용 방법/기타 중 하나 선택. 선택 사항이며 해제 가능. 입력 정보는 전송/저장하지 않는다.
- FAQ 8개를 전체/소유·참여/비용·납입/이용·서비스/취소·환불로 분류. 질문 수 표시와 첫 답변 펼침.
- 소개서는 추가하지 않는다. 회사 정보(회사명/대표자/사업자등록번호/주소)와 문의처(전화/이메일/상담 채널/운영시간), 개인정보 처리방침/이용약관 팝업을 추가했다. 사용자 답변에 따라 모두 준비 중이다. 임의의 연락처 또는 법적 문서를 만들지 않는다.
- 위 최근 기능은 처음에 로컬 전용으로 작업했으나 2026-09-28 사용자가 GitHub·Vercel 업데이트를 명시적으로 요청했다. 이후 새 변경의 배포 여부는 당시 사용자 지시를 따른다.

## 기획/통화 내용 요약과 미확정 사항

- 1채를 120구좌로 나누는 공동소유 소개. 1구좌 기준 검토 금액 396만 원, 첫 납입 5%=19만8천 원, 차감 잔액376만2천 원(별도 비용 제외).
- 6단계 분납 검토 중. 최초5% 포함 여부·회차 금액·일정은 미확정이다.
- 모집 완료와 이용 시작은 다르다. 연간 이용 일수, 예약 기준, 성수기, 소유권의 법적 구조, 취소/환불은 확정된 자료 없이 단정하지 않는다.
- 실제 상담 접수는 사이트 신청 → 담당자 확인 → 상담 흐름을 준비 중이라고 안내한다. 현재 폼은 데모이므로 성공 화면도 실제 접수처럼 표현하지 않는다.

## 완료 확인과 남은 작업

최근 기능은 문법 검사/빌드 및 로컬 브라우저에서 FAQ 필터(비용3개/전체8개), 상담 주제 선택·해제, 좁은 화면2열 배치, 세 안내 팝업과 닫기/Escape 동작을 확인했다.

사용자가 추후 물으면 반드시 안내할 보류 항목:

1. 모바일·PC 전체 레이아웃, 메뉴, 입력, 날짜/시간, 상태 화면 종합 점검.
2. Figma 원본과 상세 대조. 최근 검사는 새 기능에 한정했으며 전체 일치 검증은 미완료.
3. 상담 종료 시각 및 당일 지난 시간 선택 허용 여부 PM 확인.
4. 회사 정보, 정책 승인 문서, 실제 문의처/운영시간 수령 후 준비 중 문구 교체. 소개서는 사용자 제외 요청 유지.
5. PM 협의 후 서버 기능의 범위·담당·기술·실제 접수 방식 확정.

제안만 했으며 승인/구현되지 않은 사항: 상담 주제 복수 선택, 기타 문의 예시, 긴 폼 단계 구분, FAQ가 많아질 경우 검색.

## 파일 안내 및 원본 자료

- index.html: 헤더/하단 정보/안내 dialog.
- app.js: 본문 섹션, FAQ/상담/탭/팝업 동작.
- styles.css: 기존 디자인과 추가 스타일.
- server.mjs: 로컬 정적 서버. 백엔드 접수 서버가 아니다.
- docs/LOCAL-FRONTEND-REVIEW-2026-09-27.md: 최근 변경 및 점검 기록. 로컬 전용이라는 표기는 9/27 시점 기록이다.
- 기존 PC 원본 경로: C:/GPT_File/IMT. 노트북에는 이 경로가 없을 수 있으니 상대경로를 사용한다.
- 원본 기획서 `마이롯지_플랫폼_기획서_20260924_v0.1.docx`, 개발순서 보고서 `마이롯지_홍보페이지_개발순서_보고서_20260924_v0.1.docx`, 통화 전사 JSON은 기존 PC의 상위 폴더에 있으며 이 인수인계로 자동 이전되지 않는다. 원문 대조가 필요하면 사용자에게 해당 파일을 노트북으로 복사/첨부하도록 요청한다.
- 이 문서는 작업 연속성을 위한 요약이다. 대화 전문이나 모든 첨부파일을 옮겼다고 설명하지 않는다.

## 원본 자료 이전 완료 — 2026-09-28 후속 결정

사용자 요청으로 저장소 루트의 `마이롯지프로젝트 공용 문서/`에 기획서·개발순서 보고서·사업 계획 PDF·통화 전사 두 종류를 복사했다. 위의 별도 복사 필요 안내는 이 후속 작업으로 대체된다. 노트북에서 최신 저장소를 clone/pull하면 원본도 함께 받는다. 대화 전문은 포함하지 않는다.

배포 관련 후속 질문에는 공용 문서 폴더와 docs 등 내부 자료를 공개 산출물에서 제외해야 한다고 다시 안내한다. 현재 빌드는 HTML/CSS/JS 세 파일만 dist에 복사하므로 원본 문서는 웹사이트에 배포되지 않는다. 소개서 다운로드 제외 요청도 유지한다.

## 노트북에서 붙여 넣을 시작 요청

> 이 프로젝트는 기존 PC에서 작업하던 마이롯지 사이트입니다. docs/CODEX-HANDOFF.md와 그 문서가 안내하는 기록을 먼저 읽고, 현재 브랜치와 변경 상태를 확인해 지금까지 완료한 내용과 보류 중인 작업을 간단히 알려주세요. 서버 기능은 PM 협의 전까지 보류하고, 소개서는 추가하지 마세요. 새 수정이나 배포는 제가 다음 작업을 지정하면 진행해 주세요.

## 노트북 로컬 작업 — 2026-09-28

- 추가 요청 1번: 6단계 분담 조건 미정으로 표시.
- 추가 요청 2~5번: 지역 교환·일정 조회 / 알림 / 렌트·공동 모집 / 청소·룸서비스의 네 카테고리를 준비 중 안내로 구현. 카테고리 바로가기와 회원 서비스 탭에 반영.
- 지역과 혜택, 모집 구조, 알림 방식, 서비스 가격은 확정하지 않음. 실제 서버·예약·결제·알림 발송 기능은 PM 협의 전 보류.
- GitHub 앱으로 main 파일을 받아 C:/ChatGPT_ProJect/IMT/MyLodge_Business에 로컬 작업 사본을 생성. git clone한 저장소가 아님.
- 이번 변경은 로컬 사본에만 반영. GitHub 및 운영 배포 미실행.
- 확인: app.js 문법 검사와 정적 빌드 통과. 브라우저에서 네 카테고리 표시 및 마지막 회원 서비스 탭에서 오른쪽 키로 첫 탭으로 돌아오는 동작 확인.

## PM 관점 개선 적용 — 2026-09-28 로컬

- 프로젝트별 펼쳐 보는 상세 안내, 권리·추가 비용 요약, 운영 주체 공개 준비와 사이트 변경 안내 추가. 확인되지 않은 사업 정보는 미정 유지.
- 본문을 공동소유 → 프로젝트 → 비용·권리 → 참여 → 준비 중 서비스 순으로 정리. 데스크톱 카드 배치와 이미지 설명 개선.
- 회원 화면을 계약·진행 / 예약·교환 / 렌트 / 방문 준비 / 알림 설정 흐름으로 변경. FAQ와 공유용 제목·설명 보강.
- 실제 상담·예약·결제·알림 서버는 보류. 공식 문의처와 정책·사업 조건의 승인 자료 필요. GitHub 및 운영 배포 미실행.

## 미래형 디자인 시안 — 2026-09-28

- 사용자 요청으로 React Bits의 시각적 방향을 참고해 기존 HTML/CSS/JS에 오로라 배경, 유리 메뉴, 서비스 카드 spotlight, 사진 기울임, 제목 blur 등장 효과를 구현. React Bits 패키지를 설치한 것은 아님.
- 첫 화면과 준비 중 서비스는 숲색·민트, 비용·권리·상담은 밝은 바탕. 터치와 동작 줄이기 설정에서 애니메이션 제한.
- 변경 전 세 공개 파일과 인수인계 원본을 `backups/before-future-design-20260928/`에 저장. 취소 요청 시 해당 RESTORE.md에 따라 이전 PM 개선 사항을 유지한 채 이번 디자인만 복원.
- 로컬 시안이며 GitHub 반영·운영 배포·서버 기능 구현 없음.

## 숫자·스크롤 효과 — 2026-09-28

- 첫 화면 두 금액을 최초 화면 진입 시 1.7초간 카운트업. 최종 금액은 396만 원과 19만 8,000원. 보조기술에는 최종 금액만 노출.
- 기본 스크롤을 유지하며 오로라, 별장·프로젝트·생활 사진, 회원 휴대전화 예시에 제한된 패럴랙스 적용. 화면 근처 요소만 갱신하며 터치 환경에서는 강도 축소. 동작 줄이기 설정에서는 카운트·패럴랙스 생략.
- 적용 직전 app.js/styles.css를 backups/before-scroll-motion-20260928에 보관. 이번 효과만 취소하거나 미래형 디자인 전체를 취소하는 복원 기준을 구분.
- 로컬 적용만 진행. 별도 테스트는 실행하지 않음.

## 이미지 점검·교체 — 2026-09-28

- 기존 6개 사진 위치를 점검하고 내장 image_gen으로 만든 콘셉트 5종으로 교체. 첫 화면 별장 이미지는 생활 영역 독채에도 재사용.
- assets/images에 hero, interior, terrace, coastal, forest PNG를 저장. AI 생성이며 실제 사업지·확정 설계가 아님을 각 영역에 표시.
- scripts/build.mjs와 server.mjs 허용 목록에 이 5종을 추가. 이전의 공개 파일 3개만 빌드한다는 설명은 이 변경으로 대체됨. 내부 docs/backups는 계속 제외.
- 파일 전달 시 assets 폴더도 포함해야 함. 자세한 이미지 목록·생성 지시·복원 위치는 docs/IMAGE-REFRESH-20260928.md 참고.
- 이전 상태는 backups/before-photo-refresh-20260928에 보관. 로컬 빌드 완료, 첫 화면 이미지 표시 확인. GitHub/운영 배포 없음.

## 스크롤에 맞춰 끌려 나오는 콘텐츠 — 2026-09-28

- 사용자 의도에 맞춰 섹션 제목·카드·이미지·안내 블록에 scroll-linked 등장 추가. 화면 아래에서 진입하며 최대 110px(터치 52px) 끌어올려지고 선명해짐. 화면 높이 68% 지점에 도달하면 완전히 표시.
- 스크롤 위치와 연동되므로 아래로 다시 들어올 때 재현. 기본 스크롤 유지, 폼 포커스 및 동작 줄이기 설정에서는 즉시 표시.
- 적용 전 app.js/styles.css를 backups/before-scroll-reveal-20260928에 보관. 사진 변경과 기존 숫자 효과는 유지. 로컬 적용, 배포 없음.

## 상담 흐름 개선 — 2026-09-28

- 시간 선택: 가까운 7일 날짜 카드, 다른 날짜 달력, 오전/오후/저녁 분류와 시각 버튼. 날짜·시간 선택 / 언제든 괜찮아요 / 선택 해제 지원. 기존 09~23시 1시간 단위는 화면 예시로 유지하며 운영시간·당일 지난 시간 허용 정책은 PM 결정 필요. 한국 시간 기준 날짜 사용.
- 전화번호 blur 시 형식 정리, 문의 1,000자 제한 및 글자 수, 관심 서비스 복수 선택, 입력 내용 확인 dialog 후 체험 완료 추가. 실제 접수번호 생성·저장·전송 없음.
- admin-demo.html: 가상 문의 3건, 상태 필터, 상세, 담당자·처리 상태·메모, 화면 내 이력 시안. 메모리에서만 유지하며 실제 문의와 연결하지 않음. 로컬 서버에서 /admin-demo.html로 접근. 고객 사이트 메뉴에 노출하지 않으며 공개 dist 빌드에는 포함하지 않음.
- backups/before-consultation-improvements-20260928에 변경 전 파일 보관. 실제 운영자 시스템의 인증·권한·저장·개인정보 처리는 서버 협의 후 별도 구현 필요.
## 2026-10-17 Cinematic Villa Explorer

- `#villa-spaces`만 기존 탭/패널에서 6개의 투명 3D 일러스트 선택 레일과 사진 크로스페이드 갤러리로 교체했다. 원본은 `assets/brand/{villa,beachside,pool-cabanas,cafe-club,market,concierge}.webp`이며 각각 기존 시설 사진과 직접 연결된다.
- 데스크톱에서는 일러스트 위로 마우스를 옮기기만 해도 선택·사진·카운터가 즉시 전환된다. 키보드 화살표·Home·End, 이전/다음 제어, 선택 상태와 01/06 카운터도 제공한다. 모바일에서는 선택 레일만 가로 스크롤하고 본문은 넘치지 않는다. `scripts/public-assets.mjs`에 여섯 아트워크를 추가했다.
- 새 구조에서 과거 `.space-panel`을 전제하던 브랜드 후처리가 중단되지 않도록 `branding.js`의 해당 선택자를 null-safe로 좁혔다. 히어로·내비게이션·푸터 등 다른 섹션은 변경하지 않았다.
## 2026-10-17 오너 카드 비주얼 정리

- `#ownership`만 `owner-cards-refinement.css`로 덮어써서 기존 세 장의 동적 사진·문구·구조는 그대로 두고, 아이보리 바탕, 모서리 없는 full-bleed 사진 카드, 하단 프로스티드 패널, 요청된 어두운 하단 그라데이션을 적용했다.
- 데스크톱 hover는 카드 `-6px`, 사진 `1.05` 확대이며 동작 줄이기 환경에서는 전환과 이동을 비활성화한다. 파일은 `luxury-system.css`에서 import하며 공개 빌드 목록에 추가했다.
## 2026-10-17 오너 혜택 depth carousel

- `#ownership`의 기존 세 사진·카드 문구를 유지한 채 `editorial.js`에서 카드 위치 클래스만 전환하는 가벼운 carousel을 추가했다. 중앙 카드는 700px, 양쪽 카드는 580px으로 겹쳐 보이며, 클릭·키보드 화살표/Home/End·스와이프·이전/다음 버튼으로 이동한다.
- 더 세로형 비율 요청에 맞춰 데스크톱 중앙 카드는 320px x 520px, 양쪽은 245px x 430px로 조정했다. 카드 사이에는 약 20px 간격을 두고 양쪽이 거의 전부 보인다. 회전·원근·프로스티드 패널은 제거했으며, 문구는 사진 하단의 기존 어두운 그라데이션 위에 흰색으로 표시된다. 카드 위치·크기·opacity 전환은 600ms다. 모바일에는 한 카드와 양쪽 미리보기만 보이며, 동작 줄이기에서는 전환·hover 확대를 없앤다.
## 2026-10-18 Owner Benefits Stitch 레퍼런스 반영

- `assets/brand/stitch.html`을 기준으로 오너 혜택 섹션을 따뜻한 아이보리·골드 분위기, 가이드 라인, 중앙 강조 카드, 원형 이전/다음 버튼과 카운터 구성으로 재작업했다. 기존 로컬 오너 이미지와 한영 페이지 흐름을 유지했다.
- 이전/다음 버튼·키보드 화살표·스와이프가 카드 순서를 순환시키고, 좌우 카드를 누르거나 Enter/Space를 누르면 중앙으로 부드럽게 이동한다. 동작 줄이기 설정에서는 전환·부유 애니메이션을 끈다.
- 오너 혜택의 안내 문구는 실제 서비스 조건이 아닌 AI 생활 콘셉트임을 명시한다. 운영 배포는 하지 않았다.
## 2026-10-19 시설 아이콘 내비게이션과 콘텐츠 간격 정리

- `chairman.css`의 `#villa-spaces` 시설 선택기와 갤러리 사이 간격을 데스크톱 24–32px, 모바일 24px로 줄였다.
- 갤러리 이미지를 `object-fit: cover`로 바꿔 상하 레터박스와 콘텐츠 상단의 빈 공간을 제거했다. 이미지 크기·자산·탭 구조는 유지했다.
- 설명 패널의 상단 padding과 제목 위 간격을 줄여 이미지와 설명이 같은 콘텐츠 경계에서 시작하도록 정리했다. 색상·서체·아이콘·전환 동작은 변경하지 않았다.
- 커밋·업로드·운영 배포 없음.

