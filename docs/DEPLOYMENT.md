# 수정과 자동 배포

## 작업 폴더

VS Code에서 `MyLodge_Business` 폴더를 열어 작업합니다. 상위 `IMT` 폴더의 v0.2 시안은 별도 작업입니다.

## 매번 업데이트하는 순서

1. 파일을 수정하고 저장합니다.
2. 터미널에서 `npm run check`와 `npm run build`를 실행합니다.
3. 소스 제어에서 변경 내용을 확인하고 반영할 파일만 스테이징합니다.
4. 메시지를 적고 커밋합니다. 이 프로젝트의 `.vscode/settings.json`은 커밋 후 `push`를 실행하도록 설정되어 있습니다.
5. GitHub의 `main` 업데이트를 Vercel이 받아 빌드·배포합니다. Ready가 된 후 사이트에서 확인합니다.

저장만으로 배포되지는 않습니다. VS Code 외의 터미널에서 `git commit`을 실행하면 별도로 `git push`가 필요합니다. 인증 만료·충돌·푸시 실패 시에는 해결 후 다시 푸시해야 합니다. 다른 사람의 변경이 있으면 먼저 가져와 검토하며, 강제 푸시는 사용하지 않습니다.

## 연결 대상

- GitHub: https://github.com/IMT-Group-Account/MyLodge_Business
- Vercel: https://vercel.com/imtg-roup/my-lodge-business
- 배포 설정: `vercel.json`
- 공개 빌드 결과: `dist` 안의 HTML, CSS, JavaScript만 포함합니다.

회원 예약·교환·렌트·방문 준비는 설명과 화면 예시 단계입니다. 상담 폼은 현재 전송·저장하지 않습니다.
