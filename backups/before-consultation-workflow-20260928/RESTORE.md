# 상담 흐름 구현 전 복원

이 폴더는 2026-09-28 새 상담 폼/운영 흐름 작업 직전 상태다.

1. 로컬 미리보기 서버를 종료한다.
2. 이 폴더의 index.html, app.js, styles.css, admin-demo.html, server.mjs, package.json을 프로젝트 루트의 같은 파일로 복사한다.
3. 이 폴더의 build.mjs를 프로젝트의 scripts/build.mjs로 복사한다.
4. 새로 추가한 consultation.js, consultation.css, workflow.html, workflow-model.js, workflow.js, workflow.css는 복원한 페이지에서 참조되지 않는다. 필요하면 별도 보관한다.
5. dist를 사용한다면 공개 산출물을 다시 만든다. 이전 추가 파일이 남지 않도록 dist 범위를 확인한 후 재생성한다.
6. npm start로 로컬 미리보기를 다시 연다.

이미지, 기존 디자인, 카운트업, 스크롤 효과는 이 복원으로 이전 작업 상태를 유지한다. docs의 새 중간 저장 기록은 이력으로 남긴다. GitHub나 운영 배포를 되돌리는 절차가 아니다.
