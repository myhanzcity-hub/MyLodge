# 메인 PC에서 바로 이어가기

## 받아야 할 버전

- 저장소: `https://github.com/IMT-Group-Account/MyLodge_Business`
- 인계 브랜치: `codex/main-pc-handoff-20260930`
- 기반 main: `6d7491e2a66d4b2dc5bf1ab4e033675522c0bfb4`
- 이번 인계에는 9월 28–29일 로컬 작업과 9월 30일 시작 지침이 포함된다. main에 병합하지 않아 운영 사이트와 화면이 다를 수 있다.

## 기존 작업 폴더가 있는 경우

먼저 폴더에서 `git status --short --branch`를 실행한다. 미커밋 변경이나 아직 올리지 않은 커밋이 있다면 그 작업을 보존하고 비교한다. 임의의 reset/clean/stash로 정리하지 않는다.

깨끗한 기존 저장소에서는:

```powershell
git fetch origin
git switch --track origin/codex/main-pc-handoff-20260930
```

이미 같은 로컬 브랜치가 있으면 `git switch codex/main-pc-handoff-20260930` 후 `git pull --ff-only`를 사용한다. 이력이 갈라져 있다면 강제 동기화하지 않고 차이를 먼저 확인한다.

## 기존 폴더와 따로 받아야 할 경우

아직 없는 새 폴더 이름으로 실행한다.

```powershell
git clone --branch codex/main-pc-handoff-20260930 --single-branch https://github.com/IMT-Group-Account/MyLodge_Business.git MyLodge-main-pc
cd MyLodge-main-pc
```

비공개 저장소 접근이 가능한 GitHub 계정으로 로그인되어 있어야 한다. 인증 정보는 문서나 대화에 붙여 넣지 않는다.

## Codex에 전달할 시작 문장

> 마이롯지 작업을 이어가자. IMT-Group-Account/MyLodge_Business의 codex/main-pc-handoff-20260930 브랜치가 최신 인계본이다. 기존 로컬 변경을 보존하면서 이 브랜치를 받고 AGENTS.md, docs/CODEX-HANDOFF.md, docs/MAIN-PC-START.md를 먼저 읽어. 로컬 미리보기를 실행할 준비를 마친 뒤 현재 완료 사항과 다음 작업을 짧게 알려줘. 서버 기능은 PM 협의 전까지 보류하고, main 병합·운영 배포는 하지 마. 새 기능은 내가 지정하는 작업부터 진행해.

## 실행

Node.js 20 이상. `node --version`으로 확인한다. 환경 파일이나 DB 계정은 필요 없다.

```powershell
npm start
```

브라우저: `http://127.0.0.1:4173/`. 이 주소는 **메인 PC에서 서버를 실행한 뒤** 열린다. 소스 저장 후 새로고침한다. `EADDRINUSE`라면 기존 4173 서버의 프로젝트를 먼저 확인한다. 다른 프로세스를 일괄 종료하지 않는다.

가상 운영 시안: `http://127.0.0.1:4173/workflow.html`.

확인을 요청받았을 때 사용할 명령:

```powershell
npm run check
npm run check:workflow
npm run build
```

## 어디까지 됐나

- AI 콘셉트 이미지·반응형 화면·가격 숫자 등장·패럴랙스·사진/서비스 겹침 덱.
- 참여 절차 PC 4열 / 중간 2열 / 모바일 타임라인, 후반 제목 등장·FAQ 애니메이션.
- 상담의 주간 날짜 탐색·시간대/구체 시각·선택 복원·선택 요약·개별 수정·체험 완료.
- 프로젝트/FAQ/서비스 관심 내용을 상담으로 전달.
- 마지막 수정: 320px에서 희망 시간 수정 포커스가 가려지던 문제와 날짜 입력 폭.
- 확인 기록: `FINAL-CHECK-20260929.md`, `MOTION-AUDIT-20260929.md`. 가상 운영 검사 9개 통과는 **9월 29일 결과**다. 이번 GitHub 인계에서 재실행하지 않았다.

## 다음 작업과 보류

다음 구체 구현은 사용자 지시를 기다린다. 선택 가능한 다음 점검은 실제 휴대전화의 터치·키보드·Safari, PM 승인 내용 반영이다. 현재 모든 미정 조건은 `PM-DECISIONS-20260929.md`에 있다. 시간 선택의 09–23시는 예시이고 실제 영업시간 승인이 아니다.

main 병합·운영 배포·서버 구현은 이번 인계 범위에 포함하지 않는다. 인계 브랜치의 자동 Vercel 배포만 비활성화했다. [Vercel 공식 설정](https://vercel.com/docs/project-configuration/git-configuration#gitdeploymentenabled).
