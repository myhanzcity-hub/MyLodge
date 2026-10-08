"""Nine generated scenes, animated light/shutter transitions and kinetic captions.
Image subjects remain photographs; body animation is not simulated.
"""
from pathlib import Path
import importlib.util, math, subprocess, json
from concurrent.futures import ProcessPoolExecutor
from PIL import Image, ImageDraw, ImageFilter, ImageOps

ROOT=Path(__file__).resolve().parents[3]
OUT=Path(__file__).resolve().parent
VIDEO=ROOT/'assets/video'
ASSETS=ROOT/'assets/images/intro-scenes-20261006'
names=['01-villa','02-serenity','03-pool','04-community','05-business-peers','06-partners','07-club','08-festival','09-energy']
W,H,FPS=1280,720,30
photos=[ImageOps.fit(Image.open(ASSETS/(n+'.png')).convert('RGB'),(W,H)).convert('RGBA') for n in names]
spec=importlib.util.spec_from_file_location('copyfilm',ROOT/'docs/film-build/copy-20261006/render-copy.py')
copy=importlib.util.module_from_spec(spec);spec.loader.exec_module(copy)
starts=[0,3,6.5,9.5,13,17,20.5,23.5,27]
ends=starts[1:]+[30]

def scene_index(t):
    return max(i for i,s in enumerate(starts) if s<=t)

def atmosphere(i,age):
    frame=photos[i].copy()
    layer=Image.new('RGBA',(W,H));d=ImageDraw.Draw(layer)
    if i>=6:
        # Traveling stage beams; gentle continuous light, no flashing/strobe.
        palette=[(122,88,255),(243,71,194)] if i==6 else [(255,195,83),(237,76,102)]
        for k,color in enumerate(palette):
            x=700+k*310;tip=x+math.sin(age*.8+k)*260
            d.polygon([(x,0),(x+12,0),(tip+110,H),(tip-110,H)],fill=(*color,18))
        if i==8:
            for k in range(55):
                x=(k*197+math.sin(age+k)*18)%W;y=(k*97+age*(28+k%12))%H
                d.rectangle((x,y,x+3,y+7),fill=(255,222,147,90))
        layer=layer.filter(ImageFilter.GaussianBlur(1.5))
    elif i in (0,1,2):
        # Slow sunlight glints add life without moving or zooming the photograph.
        x=int((age*.14%1)*(W+300))-300
        d.polygon([(x,0),(x+160,0),(x+480,H),(x+290,H)],fill=(255,242,205,14 if i!=2 else 22))
        layer=layer.filter(ImageFilter.GaussianBlur(16))
    return Image.alpha_composite(frame,layer)

def visual(t):
    i=scene_index(t);age=t-starts[i]
    frame=atmosphere(i,age)
    if age<.38:
        q=copy.ease(age/.38);mask=Image.new('L',(W,H));d=ImageDraw.Draw(mask)
        if i%3==0:
            # Staggered vertical shutter reveal.
            for k in range(8):
                p=copy.ease((q-k*.025)/.82);x=k*W//8
                d.rectangle((x,0,x+int(W/8*p),H),fill=255)
        elif i%3==1:
            edge=q*(W+H);d.polygon([(0,0),(edge,0),(edge-H,H),(0,H)],fill=255)
        else:
            d.rectangle((0,int(H*(1-q)),W,H),fill=255)
        previous=atmosphere(i-1,ends[i-1]-starts[i-1]) if i else Image.new('RGBA',(W,H),(8,25,23,255))
        frame=Image.composite(frame,previous,mask.filter(ImageFilter.GaussianBlur(1)))
    return frame,i

def portrait(frame,t,i):
    bg=frame.convert('RGB').resize((720,1280)).filter(ImageFilter.GaussianBlur(24)).convert('RGBA')
    bg=Image.alpha_composite(bg,Image.new('RGBA',(720,1280),(6,20,22,165)))
    # Wider than a full-screen crop, preserving pools, villas and both partners.
    box=(280,0,1280,720) if i in (0,3,4,5) else (180,0,1180,720)
    pic=frame.crop(box).resize((720,518),Image.Resampling.LANCZOS)
    bg.alpha_composite(pic,(0,360))
    bg=copy.typography(bg,t,True)
    return bg.convert('RGB')

def composed(n):
    t=n/FPS;frame,i=visual(t)
    return copy.typography(frame,t).convert('RGB').tobytes(),portrait(frame,t,i).tobytes()

def encoder(name,w,h,crf):
    return subprocess.Popen([str(copy.FFMPEG),'-hide_banner','-loglevel','error','-y','-f','rawvideo','-pix_fmt','rgb24','-s',f'{w}x{h}','-r',str(FPS),'-i','-','-i',str(copy.BUILD/'waves-30s.wav'),'-c:v','libx264','-preset','fast','-crf',str(crf),'-pix_fmt','yuv420p','-c:a','aac','-b:a','128k','-t','30','-movflags','+faststart',str(VIDEO/name)],stdin=subprocess.PIPE)

if __name__=='__main__':
    desktop=encoder('mylodge-intro-scenes-20261006-30s.mp4',W,H,21)
    mobile=encoder('mylodge-intro-scenes-20261006-30s-mobile.mp4',720,1280,23)
    try:
        with ProcessPoolExecutor(max_workers=4) as pool:
            for n,(wide,vertical) in enumerate(pool.map(composed,range(900),chunksize=5)):
                desktop.stdin.write(wide);mobile.stdin.write(vertical)
                if n%150==0:print(f'Rendered {n//30}/30 seconds',flush=True)
        desktop.stdin.close();mobile.stdin.close()
        if desktop.wait()!=0 or mobile.wait()!=0:raise RuntimeError('Encoding failed')
    except BaseException:
        desktop.kill();mobile.kill();raise
    frame,i=visual(2.5)
    copy.typography(frame,2.5).convert('RGB').save(VIDEO/'mylodge-intro-scenes-20261006-poster.webp',quality=90)
    portrait(frame,2.5,i).save(VIDEO/'mylodge-intro-scenes-20261006-poster-mobile.webp',quality=90)
    (OUT/'manifest.json').write_text(json.dumps({'duration':30,'fps':30,'scenes':[{'asset':n+'.png','start':s,'end':e} for n,s,e in zip(names,starts,ends)],'motion':'shutter, diagonal and rising reveal; sunlight sweeps, nightclub stage beams, finale confetti; kinetic captions','wholeImageZoom':False,'audio':'existing waves-30s.wav','generation':'built-in image_gen; prompt set in docs/INTRO-SCENES-20261006.md'},ensure_ascii=False,indent=2),encoding='utf-8')
    print('Nine-scene desktop and mobile films ready.',flush=True)
