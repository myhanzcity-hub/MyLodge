# 이미지 교체 기록

내장 image_gen으로 새 콘셉트 사진 5종을 생성해 기존 6개 위치를 교체했다. 외부 사진의 색감·건축 스타일이 서로 달라 목재, 석재, 소나무, 따뜻한 빛을 공통 방향으로 정했다. 실제 부지나 승인 설계로 사용하면 안 된다.

## 적용 파일

- assets/images/lodge-hero.png: 첫 화면과 생활 영역의 독채 이미지에 재사용.
- assets/images/lodge-interior.png: 소나무가 보이는 거실.
- assets/images/lodge-terrace.png: 목재 데크와 휴식 공간.
- assets/images/lodge-coastal.png: 주문진 카드의 해안 분위기 콘셉트.
- assets/images/lodge-forest.png: 양양 카드의 숲 분위기 콘셉트.

생성 원본 PNG를 그대로 포함한다. 파일 전달 시 assets 폴더를 반드시 포함한다. 정적 빌드와 서버는 이 5개 파일만 명시적으로 허용하며 docs, backups는 공개하지 않는다. 공개용 이미지 최적화는 별도 후속 작업으로 가능하다.

## 최종 생성 프롬프트 기록

공통: photorealistic architectural editorial photograph for MY LODGE, fictional small contemporary Korean vacation cottage, muted forest green and sage, warm cedar and pale limestone, realistic textures and scale, no people, text, watermark, pool or palm trees. Not a real project or confirmed design.

- Hero: Portrait 4:5, three-quarter view of a modest single-story pitched-roof lodge among coastal pines, warm windows at blue hour, timber deck and grasses. Building centered with generous foliage and ground margins for an arch-shaped crop.
- Interior: Landscape 4:3, warm oak living room, ivory linen sofa, wooden coffee table with a ceramic mug, large window to Korean pine woods, soft morning light, central seating and safe crop margins.
- Terrace: Small timber terrace beside cedar cottage, two restrained lounge chairs and round table, pine woodland, native grasses, late afternoon dappled light, intimate eye-level portrait-compatible composition.
- Coastal: Landscape 4:3, modest pitched-roof cedar and limestone lodge, small deck, coastal pines and a distant sea glimpse, soft morning light, full building centered with margins, realistic geometry.
- Forest: Landscape 4:3, single-story horizontal cedar lodge, low charcoal pitched roof, pale stone entrance on right, broad glazed living area and deck, grassy inland pine clearing with no water view, warm afternoon light.

## 복원

backups/before-photo-refresh-20260928에 app.js, styles.css, server.mjs, build.mjs를 보관했다. 이후 변경과 비교한 뒤 복원할 것. build.mjs의 원래 위치는 scripts/build.mjs. 이미지 파일은 남아 있어도 이전 app.js에서는 참조하지 않는다. 서버 재시작과 빌드 갱신 필요.
