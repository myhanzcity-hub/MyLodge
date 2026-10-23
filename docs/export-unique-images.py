import json
import shutil
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parent.parent
manifest = json.loads((root / 'docs/unique-images-20261007.json').read_text(encoding='utf-8'))
originals = root / 'docs/unique-image-originals-20261007'
originals.mkdir(exist_ok=True)
for scene in manifest['scenes']:
    name = scene['name']
    source = Path(scene['source'])
    shutil.copy2(source, originals / (name + '.png'))
    with Image.open(source) as image:
        image = image.convert('RGB')
        for width in (480, 960, 1680):
            height = round(image.height * width / image.width)
            image.resize((width, height), Image.Resampling.LANCZOS).save(
                root / f'assets/images/{name}-20261007-{width}.webp',
                'WEBP', quality=87, method=6)
print('Exported 12 originals and 36 responsive WebP files')
