# 마이롯지 작업 전달 안내

저장 기준: 2026-09-29. 현재 버전은 **프런트엔드 화면 체험**이며 실제 상담 접수·저장·발송·예약·결제는 연결되지 않았다.

## 먼저 읽을 문서

1. `docs/CODEX-HANDOFF.md` — 최신 구현과 작업 이력
2. `docs/FINAL-CHECK-20260929.md` — 이번 마무리 수정·확인 범위
3. `docs/PM-DECISIONS-20260929.md` — PM 결정이 필요한 항목
4. `docs/DEVELOPMENT.md`, `docs/DEPLOYMENT.md` — 실행·공개 범위

## Windows에서 실행

ZIP을 **먼저 압축 해제**한다. Node.js 20 이상이 설치된 PC에서 `START-LOCAL.cmd`를 더블 클릭한다. 터미널 창이 열린 상태에서 브라우저로 `http://127.0.0.1:4173/`에 접속한다. 이 주소는 실행 중인 해당 PC에서만 열린다.

터미널을 직접 사용할 경우:

```powershell
cd "압축 해제한 MyLodge-source 폴더의 실제 경로"
npm start
```

추가 npm 패키지 설치는 필요 없다. 종료는 터미널에서 Ctrl+C. `EADDRINUSE`가 보이면 이미 같은 주소에서 실행 중인지 확인한다. `index.html` 더블 클릭 대신 위 실행 방법을 사용한다.

## 파일 구성

- `app.js`, `styles.css`: 공개 페이지와 효과
- `consultation.js`, `consultation*.css`: 상담 화면·날짜/시간 선택
- `workflow*`, `admin-demo.html`: 가상 운영 시안. 실제 관리자 서비스가 아님
- `assets/images`: 웹용 이미지와 AI 이미지 원본
- `docs`: 기획·점검·인수인계 기록
- `backups`: 작업 전 소스 사본. 적용할 백업 폴더의 해당 파일만 복사하고 빌드를 다시 생성한다.
- 전달 폴더의 `reference`: 기존 기획서·개발순서 보고서 사본
- 전달 폴더의 `review`: 이번 화면 캡처·확인 기록

## 공개용 파일 생성

```powershell
npm run build
```

**`dist/`의 22개 파일만 공개 배포 대상이다.** 개발용 ZIP 전체에는 내부 기획·가상 운영·백업이 포함되어 있으므로 웹 호스팅에 그대로 업로드하지 않는다. 별도 `MyLodge-public-20260929.zip`에는 공개 파일만 포함된다. 실제 배포는 아직 하지 않았다.

## 다음 작업자에게

2026-09-29 전달 ZIP에는 Git 메타데이터가 없다. 9월 30일 이후에는 GitHub의 `codex/main-pc-handoff-20260930` 브랜치에서 시작한다. `docs/MAIN-PC-START.md`의 clone/switch 안내를 따르고, 기존 로컬 변경을 전체 덮어쓰기로 동기화하지 않는다. 저장소에서 받은 원본 기획 자료는 `마이롯지프로젝트 공용 문서/`, 최신 캡처는 `docs/review/`에도 있다.

서버 기능은 PM 협의 전까지 보류. 시간 선택은 연락 희망 예시이며 예약 가능 재고가 아니다. 동작 줄이기 설정·실제 모바일 기기·다른 브라우저·실제 서버 연동은 별도 검증이 필요하다.
