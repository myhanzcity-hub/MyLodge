# 2026-10-06 문구별 첫 화면 이미지 재생성

Built-in `image_gen`으로 별도의 이미지 9개를 생성했다. 원본 PNG는 `assets/images/intro-scenes-20261006/`에 저장했다. 이전 이미지·문구 버전의 영상은 보존했다. 현재 로컬 첫 화면에는 새 이미지가 들어간 PC·모바일 30초 영상과 포스터를 연결했다. 문구는 사용자 원문 순서를 유지한다.

| 시간 | 문구 | 새 이미지 / 분위기 |
|---|---|---|
| 0–3초 | 나 별장있다. | 01-villa.png / 해안 모듈형 별장, 푸른 저녁과 조명 |
| 3–6.5초 | 내 안에 완벽한 여유. | 02-serenity.png / 햇빛 드는 실내, 혼자 쉬는 사람 |
| 6.5–9.5초 | 일상을 휴가처럼. | 03-pool.png / 밝은 청록색 인피니티 풀장, 친구들 |
| 9.5–13초 | 나와 비슷한 그들이 늘 모여있는 곳. | 04-community.png / 정원 카페테리아, 자연스러운 모임 |
| 13–17초 | 365일 언제나 내가 원하는 사람들이 기다리는 곳. | 05-business-peers.png / 해질녘 테라스에서 편하게 대화하는 사업가들 |
| 17–20.5초 | 내가 찾는 파트너들과의 조우. | 06-partners.png / 밝고 세련된 라운지에서 만남 |
| 20.5–23.5초 | 신나는 밤. 춤과 음악. | 07-club.png / 보라·파랑 조명, 실내 클럽과 DJ |
| 23.5–27초 | 축제분위기 조성. 신나고 화려한 밤. | 08-festival.png / 풀장을 둘러싼 야외 축제와 불꽃 전경 |
| 27–30초 | 열기의 향연. | 09-energy.png / 붉은빛과 금빛 입자, 관객의 표정 |

## 영상

- `assets/video/mylodge-intro-scenes-20261006-30s.mp4`: 1280×720, 30fps, 30초.
- `assets/video/mylodge-intro-scenes-20261006-30s-mobile.mp4`: 720×1280, 30fps, 30초.
- 같은 이름의 `poster.webp`, `poster-mobile.webp`.
- 문구별 장면 전환: 세로 셔터, 대각선, 아래에서 올라오는 리빌. 낮 장면의 빛 이동, 밤 장면의 조명 이동, 마지막 금빛 입자와 기존 글자 모션. 이미지 전체 확대·축소는 사용하지 않는다. 인물 자체는 정지 이미지다.
- 기존 파도 음원·자동 무음 재생·음량 버튼·다시보기 유지. AI 콘셉트 및 설계·시설·이용 조건 미확정 안내 유지.
- 렌더 소스 `docs/film-build/scenes-20261006/render-scenes.py`, 출력 정보 `manifest.json`.
- 공개 69파일 빌드. 원본 PNG와 제작 자료는 공개 빌드 제외. 추가 GitHub 업로드·Vercel 배포·별도 테스트 없음.

## 최종 생성 프롬프트 세트

각 호출은 공통 앞부분 + 아래 장면 프롬프트 + 공통 뒷부분을 사용했다. 한 호출에 한 개 이미지, `transparent_background=false`, 참조 이미지 없음.

공통 앞부분:

> Use case: ads-marketing. Generate ONE standalone photorealistic cinematic landscape image, 16:9 composition, for My Lodge website opening film.

공통 뒷부분 (01–03):

> High-end Korean lifestyle campaign, realistic natural materials, plausible architecture and anatomy. Main subject center-right, quieter lower-left region for captions added later; keep subject usable in a centered vertical crop too. No writing, captions, logos, watermark, collage or UI. This is a concept visualization.

공통 뒷부분 (04–09):

> High-end Korean lifestyle campaign, realistic textures, plausible anatomy. Main subject center-right, quieter lower-left region for captions added later; keep subject usable in centered vertical crop too. No writing, captions, logos, watermark, collage or UI. Concept visualization.

07–09에서는 위 뒷부분의 `realistic textures`가 `realistic texture`로 입력되었다.

### 01-villa

Caption meaning: 'I own a villa.' A spectacular contemporary two-story modular seaside villa with sweeping glass, ivory curved aluminum shell, warm timber terraces, a tasteful unbranded car parked in front. Low wide architectural shot from garden, blue hour with luminous windows; sea horizon. Aspirational ownership, striking architectural reveal. No people.

### 02-serenity

Caption meaning: 'Perfect ease within me.' Intimate sun-drenched villa interior, a single Korean adult woman reclining comfortably on an elegant linen sofa, barefoot, soft sunlight through sheer curtains, book resting nearby, quiet ocean through large windows. Cream and warm wood, close editorial composition, restorative stillness. Clearly indoor and much brighter than a blue hour exterior.

### 03-pool

Caption meaning: 'Everyday life like a vacation.' Vibrant turquoise infinity swimming pool at the coastal modular villa resort, sunny midday, Korean adult friends swimming and lounging, relaxed holiday joy, white sun loungers, citrus accents, glistening pool water, wide elevated poolside view. Pool is dominant foreground; villas visible in background. Distinct bright aqua vacation scene.

### 04-community

Caption meaning: 'A place where people like me gather.' Bright garden cafeteria and open-air social terrace between sleek modular villas, convivial Korean adults ages 30-50 in casual refined clothes chatting in small clusters over coffee, lush landscaping and communal long tables. Overcast soft daylight, green and terracotta palette, candid eye-level documentary lifestyle. Focus on belonging and naturally gathered friends, no pool, no nightclub.

### 05-welcome

Caption meaning: '365 days, the people I want are waiting.' Warm welcoming resort lounge at sunset, three Korean adult friends at an open entrance smiling warmly toward an arriving guest viewed from behind, inviting faces and gestures, cozy amber interior and violet evening sky, contemporary modular villa architecture. Feeling of being expected and welcomed rather than a business reception. Visually distinct doorway arrival composition, not another cafe table.

### 06-partners

Caption meaning: 'Encountering the partners I am looking for.' Sophisticated modern seaside members lounge, two Korean adult professionals in elegant relaxed clothing meeting with a natural smile and handshake, other conversation in soft background, glass wall ocean view, sculptural charcoal furniture and bright crisp daylight, close candid waist-up shot, focus on meaningful connection. No stage, no pool, no cafe coffee group, no text.

### 07-club

Caption meaning: 'An exciting night. Dance and music.' A stylish high-end resort nightclub at night, Korean adult friends joyfully dancing on the dance floor, DJ stage in background, electric magenta and cobalt light beams, sculptural ceiling, subtle haze, vivid music energy and real human expressions. Immersive medium-wide shot from crowd side, dance floor the main subject. No daylight, no quiet terrace, no giant festival.

### 08-festival

Caption meaning: 'Festival atmosphere. An exciting glamorous night.' Dramatic wide aerial oblique view of an outdoor coastal resort festival at night around an illuminated swimming pool, contemporary modular villas framing the venue, colorful stage lights, joyful adult crowd, strings of warm bulbs and restrained fireworks over sea. Emerald water contrasted with golden and purple light, glamorous open-air celebration. Clearly outdoor expansive event rather than indoor nightclub.

### 09-energy

Caption meaning: 'A feast of fervor.' Immersive kinetic close-up from an outdoor night music celebration: Korean adult friends with joyful faces, raised hands catching brilliant scarlet and amber stage backlight, airborne sparkling gold confetti, crowd receding into deep background, energetic dynamic composition, cinematic shallow depth of field. A climactic emotional final image, visually warm red-gold and close up rather than blue nightclub or aerial festival. No visible flames or danger.

## 05 장면 수정 — 사업가와 사업가의 편안한 만남

사용자 피드백에 따라 13–17초 장면을 05-business-peers.png로 교체했다. 기존 05-welcome.png는 보존했다. Built-in image_gen, transparent_background=false, 참조 이미지 없음. 최종 프롬프트:

Use case: ads-marketing. Generate ONE standalone photorealistic cinematic landscape image in 16:9 for the My Lodge website opening film. Replace the concept of young friends welcoming a visitor at a home with mature business owners comfortably meeting one another. Two Korean entrepreneurs, a man approximately 48 and a woman approximately 43, sit in comfortable lounge chairs at a small round table on a sophisticated contemporary seaside modular villa's open lounge terrace. They face each other naturally, smiling in engaged easy conversation, equal peers, relaxed confident postures, understated smart casual blazers and linen shirts, no ties. A closed notebook and two cups of coffee on the table subtly suggest business connection without a formal meeting. Warm sunset side light, soft amber and muted navy palette, ocean and architecture in the background. Medium-wide candid editorial view. Show both mature faces clearly, believable hands and anatomy. Main pair center-right, lower-left quieter space for captions added later, both people stay usable in a centered vertical crop. No arriving guest, no doorway greeting, no students, no youthful college appearance, no school uniform, no exaggerated handshake, no formal boardroom, no writing, text, logos, watermark, collage or UI. Polished realistic lifestyle campaign, concept visualization.