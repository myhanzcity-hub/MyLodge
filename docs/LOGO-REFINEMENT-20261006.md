# 상단 로고 배치 정리

사용자 피드백: 상단 심볼·글자 배치의 흰 사각형, 크기와 간격을 세밀하게 조정.

원본은 assets/brand/mylodge-logo-original.png에 보존한다. Built-in image_gen 투명화 결과 두 개는 번짐과 형태 변형으로 채택하지 않았다. 최종 적용은 기존 assets/brand/mylodge-logo.webp 원본을 유지한다. 헤더와 로고의 배경색을 #f7f5ef로 통일하고 isolate 배경 위에서 이미지 multiply 합성해 흰 사각형 경계를 없앴다. CSS 프레임과 크기를 조정해 정확한 원본 심볼·글자를 유지한다. 신규 투명 PNG를 사이트에 연결하지 않았다.

## 최종 편집 프롬프트

Use case: background-extraction. Edit target: the attached original MyLodge logo. Remove ONLY the white paper/background to genuine alpha transparency, including empty negative spaces within and between the symbol and letters. Preserve the exact original logo design, infinity-like teal and silver house mark with gold roof, exact dark navy 'MyLodge' and Korean '마이롯지' typography, all existing colors, gradients, edges, sizes, layout and relative positions. Do not redesign, redraw, retype, change letter spacing, crop, rescale or add anything. Preserve the original full 1536 by 1024 canvas and the logo's placement. Clean professional background removal, no white rectangle, no fringe or drop shadow. Output a transparent PNG.

Input: assets/brand/mylodge-logo-original.png. transparent_background=true.

첫 결과의 번짐을 제외하기 위해 다음 프롬프트로 다시 요청했으나, 두 번째 결과도 채택하지 않았다. 아래는 시도 기록이다.

Create a clean precise CUTOUT of this exact supplied MyLodge brand logo on a fully transparent background. Keep every part of the existing silver/teal/gold symbol and the navy English MyLodge and Korean 마이롯지 lettering intact, legible and FULLY OPAQUE. Remove the white background and only the white background. Crisp edges with minimal normal antialiasing. Absolutely NO glow, blur, halo, haze, shadow, vignette, bloom, fading, glass transparency or translucent colored background. The interior white negative spaces must also become fully transparent. Do not redesign the logo or alter the lettering. Keep original stacked arrangement and original 1536x1024 canvas. This is a flat brand asset for a cream-colored website header, not a scene or a glowing illustration. Solid opaque logo artwork, transparent empty space.

## 배치 값

헤더 심볼 72×40px, 이름 128×40px, 사이 간격12px. 모바일 심볼58×34px, 이름110×34px, 간격10px. 전체 링크의 세로 터치 영역은 최소44px. 원본을 이용한 프레임 위치를 적용하고 이전 임의 scale을 제거하고 배경 합성이 헤더에 영향을 받지 않도록 별도 격리한다.
