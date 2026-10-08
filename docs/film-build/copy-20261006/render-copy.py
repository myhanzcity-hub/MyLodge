"""Thirty-second layered motion composition. No whole-image zoom/pan.
Original photographs are separated with video mattes; generated clean plates sit
behind them. Motion is graphic assembly/reveal, not new live human footage.
"""
from pathlib import Path
import math, json, subprocess, sys
from concurrent.futures import ProcessPoolExecutor
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT=Path(__file__).resolve().parents[3]
BUILD=ROOT/'docs/film-build/impact';VIDEO=ROOT/'assets/video'
OUTPUT=ROOT/'docs/film-build/copy-20261006'
MOBILE_ONLY='--mobile-only' in sys.argv
FFMPEG=ROOT/'.local-media-tools/imageio_ffmpeg/binaries/ffmpeg-win-x86_64-v7.1.exe'
W,H,FPS=1280,720,30
names=['vacation-arrival-1680.webp','intro-interior-1680.webp','intro-friends-1680.webp']
photos=[Image.open(ROOT/'assets/images'/n).convert('RGB').resize((W,H),Image.Resampling.LANCZOS) for n in names]
clean=[Image.open(BUILD/n).convert('RGB').resize((W,H),Image.Resampling.LANCZOS) for n in ['exterior-empty.png','interior-empty.png','friends-empty.png']]
fontpath='C:/Windows/Fonts/malgunbd.ttf';regular='C:/Windows/Fonts/malgun.ttf'
fonts={n:ImageFont.truetype(fontpath,n) for n in [44,52,56,60,64,72,86,96,128]}
small=ImageFont.truetype(regular,18)
WHITE=(255,251,238);GOLD=(236,209,155)

def ease(x):
    x=min(1.,max(0.,x));return 1-(1-x)**3
def smooth(x):
    x=min(1.,max(0.,x));return x*x*(3-2*x)
def matte(points,soft=1.2):
    im=Image.new('L',(W,H));ImageDraw.Draw(im).polygon(points,fill=255)
    return im.filter(ImageFilter.GaussianBlur(soft))
def cut(index,points):
    im=photos[index].convert('RGBA');im.putalpha(matte(points));return im
def moved(layer,p,dx=0,dy=0):
    if p<=0:return Image.new('RGBA',(W,H))
    if p>=1:return layer
    im=layer.transform((W,H),Image.Transform.AFFINE,(1,0,-dx*(1-p),0,1,-dy*(1-p)),Image.Resampling.BICUBIC)
    if p<1:im.putalpha(im.getchannel('A').point(lambda a:int(a*min(1,p*1.6))))
    return im

upper=cut(0,[(635,151),(1042,67),(1110,64),(1169,81),(1212,101),(1214,154),(1205,292),(1116,318),(799,350),(671,367),(626,341)])
lower=cut(0,[(431,321),(686,288),(802,289),(1207,292),(1189,332),(1190,433),(1178,482),(955,503),(850,515),(644,525),(476,488),(427,408)])
stairs=cut(0,[(410,249),(597,226),(655,239),(642,260),(500,300),(469,348),(512,453),(496,479),(452,459),(417,381)])
car=cut(0,[(1018,407),(1092,385),(1177,383),(1280,392),(1280,558),(1170,568),(1079,550),(1009,536),(975,496),(980,449)])
interior_layers=[
 (cut(1,[(350,521),(537,503),(782,507),(1171,649),(901,686),(438,614)]),0.02,0,76),
 (cut(1,[(649,405),(708,378),(830,356),(919,362),(972,390),(988,415),(1048,436),(1085,482),(1084,588),(858,599),(814,579),(722,507),(651,500)]),.20,105,12),
 (cut(1,[(504,462),(635,447),(732,477),(726,499),(697,520),(700,558),(650,581),(610,577),(571,551),(565,512),(505,491)]),.40,-48,36),
 (cut(1,[(553,255),(636,272),(657,333),(656,447),(604,477),(553,454),(550,358)]),.58,0,-55),
 (cut(1,[(1128,402),(1280,389),(1280,669),(1200,658),(1177,515),(1118,458)]),.72,85,0)
]
party_layers=[
 (cut(2,[(582,489),(699,486),(809,494),(922,518),(969,544),(959,561),(923,556),(906,709),(880,710),(881,558),(727,546),(711,689),(686,684),(695,544),(597,532)]),0,0,45),
 (cut(2,[(477,451),(511,403),(555,398),(581,426),(601,456),(640,502),(655,571),(636,620),(693,646),(701,672),(627,676),(578,661),(549,694),(493,670),(495,614),(452,593),(450,510)]),.16,-65,16),
 (cut(2,[(608,398),(636,353),(675,345),(708,366),(725,410),(727,468),(703,479),(704,519),(664,535),(631,515),(616,456)]),.34,0,45),
 (cut(2,[(774,426),(804,408),(851,414),(872,448),(889,473),(899,519),(881,546),(817,545),(788,521),(772,478)]),.48,0,35),
 (cut(2,[(892,435),(931,396),(973,408),(990,449),(1029,478),(1044,540),(1078,570),(1069,668),(1030,716),(961,720),(902,700),(875,683),(825,675),(757,678),(729,665),(739,648),(840,587),(902,549),(884,494)]),.62,65,16)
]

# Architectural light paths follow the house's illuminated curves.
paths=[[(790,170),(795,150),(821,135),(932,110),(1047,87),(1134,83),(1176,98)],
       [(790,173),(790,255),(797,280),(815,295),(929,292),(1064,289),(1167,277)],
       [(616,322),(635,309),(725,310),(859,315),(884,325),(888,441),(875,459),(723,473),(624,479),(608,456),(608,343),(616,322)]]
def resample(points,count):
    pts=np.array(points,dtype=float);dist=np.linalg.norm(np.diff(pts,axis=0),axis=1);cum=np.r_[0,np.cumsum(dist)]
    ss=np.linspace(0,cum[-1],count);return np.c_[np.interp(ss,cum,pts[:,0]),np.interp(ss,cum,pts[:,1])]
targets=np.concatenate([resample(p,200) for p in paths]);rng=np.random.default_rng(1047)
origins=targets+rng.uniform([-770,-430],[700,420],targets.shape)
delays=rng.uniform(0,.38,len(targets));sizes=rng.choice([1,1,1,2,2,3],len(targets))

def lights(t,assembling=False):
    layer=Image.new('RGBA',(W,H));d=ImageDraw.Draw(layer)
    if assembling:
        for k,(target,origin) in enumerate(zip(targets,origins)):
            p=ease((t-delays[k])/.95);xy=origin*(1-p)+target*p
            a=int(210*(1-smooth((t-1.5)/.8)))
            if a>0:
                r=int(sizes[k]);x,y=xy;d.ellipse((x-r,y-r,x+r,y+r),fill=(*GOLD,a))
                if p<.93:d.line((x-(target[0]-origin[0])*.016*(1-p),y-(target[1]-origin[1])*.016*(1-p),x,y),fill=(*WHITE,a//3),width=1)
    elif 0<=t<=3.3:
        for j,path in enumerate(paths):
            points=resample(path,120);head=int(((t*.9+j*.31)%1)*len(points))
            for k in range(16):
                q=points[(head-k)%len(points)];a=int(180*(1-k/16));r=2 if k<3 else 1
                d.ellipse((q[0]-r,q[1]-r,q[0]+r,q[1]+r),fill=(*WHITE,a))
    glow=layer.filter(ImageFilter.GaussianBlur(4))
    return Image.alpha_composite(glow,layer)

def water(frame,index,t):
    bounds=[(27,302,423,454),(58,309,345,407),(32,294,424,440)][index]
    x0,y0,x1,y1=bounds;array=np.asarray(frame.crop(bounds).convert('RGB'));hh,ww=array.shape[:2]
    yy,xx=np.mgrid[:hh,:ww]
    sx=np.clip(np.round(xx+2.8*np.sin(yy*.16-t*3.2)),0,ww-1).astype(int)
    sy=np.clip(np.round(yy+1.5*np.sin(xx*.05-t*1.7)),0,hh-1).astype(int)
    changed=frame.copy();changed.paste(Image.fromarray(array[sy,sx]),(x0,y0))
    mask=matte([(x0+10,y0+8),(x1-8,y0+16),(x1-10,y1-44),(x0+120,y1-7),(x0+15,y1-35)],7)
    return Image.composite(changed,frame,mask)

def exterior(t):
    frame=photos[0].convert('RGBA') if t>=2.55 else clean[0].convert('RGBA')
    if t<2.55:
        for im,start,dx,dy,dur in [(lower,.03,-65,45,.85),(upper,.24,78,-60,1.05),(stairs,.50,-40,0,.75),(car,1.15,130,0,1.1)]:
            frame=Image.alpha_composite(frame,moved(im,ease((t-start)/dur),dx,dy))
        frame=Image.blend(frame,photos[0].convert('RGBA'),smooth((t-2.15)/.40))
    frame=water(frame,0,t)
    frame=Image.alpha_composite(frame,lights(t,True) if t<2.4 else lights(t-2.4))
    return frame

def interior(t):
    frame=photos[1].convert('RGBA') if t>=1.9 else clean[1].convert('RGBA')
    if t<1.9:
        for im,start,dx,dy in interior_layers:frame=Image.alpha_composite(frame,moved(im,ease((t-start)/.85),dx,dy))
        frame=Image.blend(frame,photos[1].convert('RGBA'),smooth((t-1.55)/.35))
    frame=water(frame,1,t)
    curtain=frame.transform((W,H),Image.Transform.AFFINE,(1,0,3*math.sin(t*2.0),0,1,0),Image.Resampling.BICUBIC)
    frame=Image.composite(curtain,frame,matte([(0,0),(36,0),(59,614),(10,620),(0,610)],4))
    fx=Image.new('RGBA',(W,H));d=ImageDraw.Draw(fx)
    # A traveling light follows the ceiling, then emphasis moves to the material.
    ceiling=resample([(340,0),(521,93),(562,126),(599,144),(631,151),(833,144),(973,140),(1088,0)],200)
    if t<3.0:
        head=int(min(1,t/2.4)*(len(ceiling)-1));pts=ceiling[max(0,head-34):head+1]
        if len(pts)>1:d.line([tuple(p) for p in pts],fill=(255,248,215,190),width=3)
    x=80+t*40
    d.polygon([(x,240),(x+35,240),(x+360,720),(x+185,720)],fill=(255,231,172,9))
    return Image.alpha_composite(frame,Image.alpha_composite(fx.filter(ImageFilter.GaussianBlur(9)),fx))

def party(t):
    frame=photos[2].convert('RGBA') if t>=1.7 else clean[2].convert('RGBA')
    if t<1.7:
        for im,start,dx,dy in party_layers:frame=Image.alpha_composite(frame,moved(im,ease((t-start)/.75),dx,dy))
        frame=Image.blend(frame,photos[2].convert('RGBA'),smooth((t-1.4)/.3))
    frame=water(frame,2,t)
    steam=Image.new('RGBA',(W,H));d=ImageDraw.Draw(steam)
    for j,(x,y) in enumerate([(683,444),(599,478),(798,520)]):
        for k in range(3):
            q=(t*.52+k*.33+j*.13)%1
            pts=[(x+3*math.sin(n*.3+t*1.5+j),y-n*1.1-q*20) for n in range(24)]
            d.line(pts,fill=(255,249,228,int(53*math.sin(math.pi*q))),width=2)
    frame=Image.alpha_composite(frame,steam.filter(ImageFilter.GaussianBlur(1.6)))
    if t>6:frame=Image.alpha_composite(frame,lights((t-6)%3.2))
    return frame

def visual(t):
    if t<7.25:return exterior(t),0
    if t<8.0:
        q=ease((t-7.25)/.75);mask=Image.new('L',(W,H));d=ImageDraw.Draw(mask)
        cx,cy=750,412;hw=90+(W+220)*q;hh=68+(H+180)*q
        d.rounded_rectangle((cx-hw,cy-hh,cx+hw,cy+hh),radius=max(4,int(22*(1-q))),fill=255)
        return Image.composite(interior(0),exterior(t),mask),1
    if t<17.35:return interior(t-8),1
    if t<18:
        q=ease((t-17.35)/.65);mask=Image.new('L',(W,H));d=ImageDraw.Draw(mask)
        edge=-H+q*(W+H)
        d.polygon([(0,0),(edge+H,0),(edge,H),(0,H)],fill=255)
        return Image.composite(party(0),interior(t-8),mask.filter(ImageFilter.GaussianBlur(2))),2
    return party(t-18),2

def text_spec(t,portrait=False):
    if t<3:return [('나',128,0,.10),('별장있다.',96,152,.23)],.10,2.7
    if t<6.5:return [('내 안에',60,0,0),('완벽한 여유.',64,80,.08)],3.05,6.25
    if t<9.5:return [('일상을',60,0,0),('휴가처럼.',72,80,.08)],6.55,9.25
    if t<13:return [('나와 비슷한 그들이',52,0,0),('늘 모여있는 곳.',52,76,.08)],9.55,12.75
    if t<17:return [('365일 언제나',52,0,0),('내가 원하는 사람들이',44,72,.08),('기다리는 곳.',52,140,.16)],13.05,16.75
    if t<20.5:return [('내가 찾는',52,0,0),('파트너들과의 조우.',52,76,.08)],17.05,20.25
    if t<23.5:return [('신나는 밤.',60,0,0),('춤과 음악.',60,80,.08)],20.55,23.25
    if t<27:return [('축제분위기 조성.',52,0,0),('신나고 화려한 밤.',52,76,.08)],23.55,26.75
    return [('열기의',60,0,0),('향연.',72,80,.08)],27.05,30.8

def typography(frame,t,portrait=False):
    rows,start,end=text_spec(t,portrait);fading=1-smooth((t-end)/.23)
    if fading<=0 or t<start:return frame
    size=frame.size;shade=Image.new('RGBA',size);ds=ImageDraw.Draw(shade)
    if portrait:
        left=40;top=750
    else:
        left=64;top=400
        for x in range(650):ds.line((x,0,x,H),fill=(8,27,23,int(108*(1-x/650)**1.7*fading)))
    frame=Image.alpha_composite(frame,shade)
    layer=Image.new('RGBA',size);d=ImageDraw.Draw(layer)
    for row,fs,dy,delay in rows:
        font=fonts[fs];x=left
        for j,ch in enumerate(row):
            p=ease((t-start-delay-j*.065)/.28)
            if p>0:
                color=GOLD if (t<3 and dy>0) else WHITE
                a=int(255*p*fading);tx=x-35*(1-p);ty=top+dy+18*(1-p)
                d.text((tx+1,ty+2),ch,font=font,fill=(8,26,21,int(a*.48)),stroke_width=1)
                d.text((tx,ty),ch,font=font,fill=(*color,a))
            x+=font.getlength(ch)
    return Image.alpha_composite(frame,layer)

def portrait(frame,t,index):
    # Subject-aware vertical composition keeps the whole house and foreground group.
    bg=frame.convert('RGB').resize((720,1280),Image.Resampling.BICUBIC).filter(ImageFilter.GaussianBlur(25)).convert('RGBA')
    dark=Image.new('RGBA',(720,1280),(9,29,24,165));bg=Image.alpha_composite(bg,dark)
    box=(390,32,1280,720) if index!=1 else (245,25,1280,720)
    pic=frame.crop(box);height=round(pic.height*720/pic.width)
    pic=pic.resize((720,height),Image.Resampling.LANCZOS)
    bg.alpha_composite(pic,(0,390))
    bg=typography(bg,t,True)
    d=ImageDraw.Draw(bg);d.text((42,1118),'MY LODGE',font=small,fill=(*GOLD,245))
    d.text((42,1154),'바다 곁, 나의 별장',font=small,fill=(*WHITE,210))
    return bg.convert('RGB')

def process(out,width,height,crf):
    return subprocess.Popen([str(FFMPEG),'-hide_banner','-loglevel','error','-y','-f','rawvideo','-pix_fmt','rgb24',
      '-s',f'{width}x{height}','-r',str(FPS),'-i','-','-i',str(BUILD/'waves-30s.wav'),'-c:v','libx264',
      '-preset','fast','-crf',str(crf),'-pix_fmt','yuv420p','-c:a','aac','-b:a','128k','-t','30',
      '-movflags','+faststart',str(VIDEO/out)],stdin=subprocess.PIPE)

def composed(n):
    t=n/FPS;base,index=visual(t)
    return (None if MOBILE_ONLY else typography(base,t).convert('RGB').tobytes()),portrait(base,t,index).tobytes()

if __name__=='__main__':
    desktop=None if MOBILE_ONLY else process('mylodge-intro-copy-20261006-30s.mp4',W,H,21)
    mobile=process('mylodge-intro-copy-20261006-30s-mobile.mp4',720,1280,24)
    try:
        with ProcessPoolExecutor(max_workers=4) as pool:
            for n,(wide,vertical) in enumerate(pool.map(composed,range(900),chunksize=5)):
                if desktop:desktop.stdin.write(wide)
                mobile.stdin.write(vertical)
                if wide and n in [12,30,60,90,264,288,363,558,750]:
                    Image.frombytes('RGB',(W,H),wide).save(OUTPUT/f'frame-{n:03}.jpg',quality=94)
                if n in [30,288,750]:Image.frombytes('RGB',(720,1280),vertical).save(OUTPUT/f'mobile-{n:03}.jpg',quality=93)
                if n%120==0:print(f'Impact composition: {n//30}/30 seconds',flush=True)
        if desktop:desktop.stdin.close()
        mobile.stdin.close()
        if (desktop and desktop.wait()!=0) or mobile.wait()!=0:raise RuntimeError('Video encoder failed')
    except BaseException:
        if desktop:desktop.kill()
        mobile.kill();raise
    base,index=visual(2.7)
    typography(base,2.5).convert('RGB').save(VIDEO/'mylodge-intro-copy-20261006-poster.webp',quality=88)
    portrait(base,2.5,index).save(VIDEO/'mylodge-intro-copy-20261006-poster-mobile.webp',quality=88)
    (OUTPUT/'manifest.json').write_text(json.dumps({'duration':30,'fps':30,'desktop':[1280,720],'mobile':[720,1280],
      'opening':'particle light assembly, independent floor/stair/car layer motion, kinetic typography',
      'interior':'independent furniture arrival and traveling ceiling light',
      'humanMotion':'whole-layer graphic reveal only, no generated live body motion',
      'noWholeImageZoom':True,'sound':'Waves.ogg, Dsw4, public domain, 20–50s excerpt, no music',
      'soundSource':'https://commons.wikimedia.org/wiki/File:Waves.ogg'},ensure_ascii=False,indent=2),encoding='utf-8')
    print('Impact movie and vertical version ready.',flush=True)
