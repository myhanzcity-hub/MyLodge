"""Create responsive delivery copies. Keep the PNG originals untouched."""
from pathlib import Path
from PIL import Image, ImageOps, ImageDraw, ImageFont

root = Path(__file__).resolve().parents[1]
folder = root / 'assets' / 'images'
for name in ['hero', 'interior', 'terrace', 'coastal', 'forest']:
    with Image.open(folder / f'lodge-{name}.png') as source:
        for width in [480, 960, 1440]:
            width = min(width, source.width)
            height = round(source.height * width / source.width)
            source.convert('RGB').resize((width, height), Image.Resampling.LANCZOS).save(
                folder / f'lodge-{name}-{width}.webp', quality=82, method=6)

with Image.open(folder / 'lodge-hero.png') as source:
    card = ImageOps.fit(source.convert('RGB'), (1200, 630), method=Image.Resampling.LANCZOS)
    layer = Image.new('RGBA', card.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    draw.rectangle((0, 0, 690, 630), fill=(9, 37, 29, 232))
    font_path = 'C:/Windows/Fonts/malgun.ttf'
    def font(size): return ImageFont.truetype(font_path, size)
    draw.text((60, 65), 'MY LODGE', font=font(28), fill='#c9f2d8')
    draw.text((60, 170), '별장 하나,', font=font(58), fill='white')
    draw.text((60, 252), '내 생활에 들이는 법.', font=font(50), fill='#c9f2d8')
    draw.text((60, 405), '공유별장 프로젝트 · 사전 안내', font=font(26), fill='white')
    draw.text((60, 550), 'AI 생성 콘셉트 · 실제 현장·확정 설계가 아닙니다', font=font(18), fill='#e1eee6')
    Image.alpha_composite(card.convert('RGBA'), layer).convert('RGB').save(folder / 'lodge-share.jpg', quality=88, optimize=True)

print('Responsive WebP copies and 1200×630 sharing card created; PNG originals retained.')
