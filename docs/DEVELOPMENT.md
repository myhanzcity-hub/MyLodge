# 로컬 실행

현재 작업 폴더: 메인 PC에서 `codex/main-pc-handoff-20260930` 브랜치를 받은 저장소 루트. PC별 절대 경로는 `docs/MAIN-PC-START.md`를 따라 선택한다.
Node.js 20 이상. 외부 npm 패키지 설치 없이 실행하는 HTML/CSS/JavaScript 프로젝트다.

```powershell
cd C:\ChatGPT_ProJect\IMT\MyLodge_Business
npm start
```

- 공개 화면: http://127.0.0.1:4173/
- 가상 운영 화면: http://127.0.0.1:4173/workflow.html
- 소스 저장 후 새로고침. `server.mjs` 또는 공개 파일 목록을 바꿨다면 서버 재시작.
- `EADDRINUSE`는 같은 포트에 기존 서버가 실행 중이라는 뜻이다. 기존 실행 터미널에서 Ctrl+C 후 다시 실행한다. 다른 프로젝트의 프로세스를 일괄 종료하지 않는다.
- `npm run build`는 생성용 `dist/`만 지우고 공개 파일 목록대로 새로 만든다. `dist`를 직접 편집하지 않는다.
- `npm start`는 소스를 제공한다. 빌드 결과물은 정적 호스팅용이며 `index.html`을 더블 클릭하는 방법보다 HTTP 서버로 여는 방식을 권장한다.
- 가격과 구좌 수: `app.js`의 `offer`. 이미지 편집 원본: `assets/images/*.png`. 최적화 사본 재생성: Pillow가 설치된 Python으로 `scripts/optimize-images.py` 실행. 공유 카드 한글 폰트 경로는 Windows 맑은 고딕을 사용한다.

2026-09-30 인계 브랜치는 Git 저장소에서 관리한다. 이전 로컬 ZIP/작업 사본에는 Git 메타데이터가 없을 수 있으므로 원격 브랜치와 비교한다.
최신 반영 범위와 복원: `IMPROVEMENTS-20260929.md`.
