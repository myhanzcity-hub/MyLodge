## 2026-10-07 GitHub·Vercel 운영 업데이트 완료

사용자 요청으로 현재 홍보 사이트 공개106파일 반영. 소스 커밋89119f7을 기존 codex/main-pc-handoff-20260930 브랜치에 push. 새 지역/시설 이미지, 치앙마이 연결, 영어 번역·영상, 네온 아이콘9곳, 하단 인생의 휴식처. / 마이롯지. 포함. Vercel CLI61.1.0 기존 IMTGroup 인증으로 prebuilt Preview dpl_D8Ls8EsjPBNiGXrzcNFVz3hNHxBL READY 후 promote. 최종 dpl_6bQcVdpVPr55i51y5LADocFLsGyY production READY, https://my-lodge-business.vercel.app 연결 확인. 운영 브라우저 네온9개·변경 제목 확인, docs/review/release-20261007/production.png 저장. 공개 빌드만 배포, 원본·백업·내부 문서 미배포. main 병합 없음.

# 공개 빌드와 배포 범위

2026-10-04 18:08 KST: 사용자 재승인으로 새30초 영상·모바일 세로 영상·파도 음원·자동 재생·음량 버튼·마이롯지 띠 문구를 운영 반영했다. GitHub 작업 브랜치 `69e2e0524a631fb2877557ebaa309186441407c8` 원격 일치. 공개68파일, Preview `dpl_5PbBw9xpswfdikp8BN9SivaCyPuY` READY 후 promote, 최종 운영 `dpl_AkfyxuBKLVXcgx3XiD7zsY2aSFnf` production READY. 운영 주소 https://my-lodge-business.vercel.app/. CLI61.1.0 기존 로그인 사용. 내부 문서·원음·제작 코드·PNG·백업은 공개 산출물에 포함하지 않았다.

2026-10-03 17:05 KST 모바일 개선: GitHub 인계 브랜치 `fd15455b7f01907fed40b4b2b680101781f5d3d5`, 운영 `dpl_AGHruv1jR8RGxy6jq4mJMnZoRFb8` production READY. 공개 62파일. mobile.css/js를 메인·Business Valley에 추가. 내부 모바일 검토 자료는 공개 빌드에서 제외.

2026-10-03 16:52 KST 공간 이미지 배경·모션: GitHub 인계 브랜치 `e1f789511ec0768728618b7726629e9610633301`, 운영 `dpl_8J2M7cqn9QBu3XSrZzsNVUmHhPp2` production READY. 공개 60파일. 생성 이미지 3종의 WebP 9개·scenery.js/css 포함. 원본 PNG·프롬프트·내부 문서는 로컬 보존.

2026-10-03 16:32 KST 공유 방식 스크롤 개선: GitHub 인계 브랜치 `d47a8b99d704b01b7b13412d435df67f1a4ef91c`, 운영 `dpl_2abbgBS2wx6rnuK7TqTy73N1UrTN` production READY. 공개 49파일 SHA256 일치. 9가지 로컬 화면 크기와 운영 데스크톱/모바일 화면 확인. 아래 배포 ID는 이전 버전 기록이다.

2026-10-03 업데이트: GitHub 인계 브랜치 e6957c51fe5cec70cc9b0894f280fb358e0e8abb, 운영 dpl_5w7MSadrxJSQJUUGn4HxdNmD69rM READY. 공개 49파일. 메인과 business-valley.html 포함. 이후 기록의 42파일과 10월1일 배포는 이전 상태다.

2026-10-01 사용자 지시로 IMTGroup 운영 배포 완료. 운영 주소: https://my-lodge-business.vercel.app/ . 최신 기록은 `CODEX-HANDOFF.md`, `IMPROVEMENTS-20261001.md`를 확인한다.

1. 프로젝트 루트에서 `npm run build`.
2. `dist/`만 정적 사이트 배포 대상으로 사용한다.
3. `workflow.html`, 가상 운영 모듈, docs, backups, 기획 자료, review, 로그를 업로드하지 않는다.
4. 추후 배포 승인 시 실제 도메인과 `index.html`의 OG 이미지 절대 주소를 일치시킨다.

`scripts/public-assets.mjs`에 공개 파일이 명시되어 있다. 빌드는 이전 산출물을 비우므로 누락된 사적 파일이 남지 않는다.

공개 페이지에서 상담·FAQ 화면은 삭제했다. 공개 산출물은 42파일이며 consultation 모듈을 포함하지 않는다. 실제 서버 저장·연락·푸시·카카오·SMS·예약·결제는 연결하지 않았다. 서버 기능은 PM 협의 후 별도 구현한다. 회사 정보·개인정보 문서·운영시간·권리·납입·환불 조건도 승인된 내용만 반영한다.

현재 인증 계정은 `officeysh03-4828`, 소유 팀은 `imtg-roup`(IMTGroup), 프로젝트는 `my-lodge-business`다. Vercel CLI 61.1.0으로 공개 Build Output API 산출물을 Preview 업로드한 뒤 같은 팀의 `promote`로 운영에 반영했다. CLI 62.0.0 업로드는 인증 오류가 발생했으므로 인계 시 정상 인증을 이유 없이 로그아웃하지 않는다. main push와 별도의 CLI 배포를 혼동하지 않는다.
