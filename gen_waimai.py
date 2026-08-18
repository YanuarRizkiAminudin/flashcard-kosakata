# -*- coding: utf-8 -*-
# Generate waimai_video.html
import pathlib

OUT = 'public/games/flashcard_lengkap_intact/waimai_video.html'


HEAD = """\
<!DOCTYPE html>
<html lang="zh">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>\u5916\u8ce3\u54e1 \u00b7 Video Sosial Mandarin</title>
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;700&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0;}
body{background:#fef3e2;font-family:"DM Sans",sans-serif;min-height:100vh;display:flex;flex-direction:column;align-items:center;padding:16px 12px 40px;}
#app{width:100%;max-width:500px;}
h1{font-family:"Noto Serif TC",serif;font-size:16px;color:#1a1814;text-align:center;margin-bottom:3px;}
.sub{font-size:12px;color:#8a8478;text-align:center;margin-bottom:10px;}
.filters{display:flex;gap:5px;flex-wrap:wrap;justify-content:center;margin-bottom:8px;}
.fb{padding:5px 12px;border-radius:99px;border:1px solid #e8e4dc;background:#fff;color:#8a8478;font-size:11px;font-weight:600;cursor:pointer;transition:all .15s;}
.fb:hover{border-color:#d97706;color:#d97706;}
.fb.on{background:#d97706;color:#fff;border-color:#d97706;}
.fb.c-vocab.on{background:#b45309;border-color:#b45309;}
.fb.c-sent.on{background:#f59e0b;border-color:#f59e0b;}
.ls-lbl{font-size:10px;color:#8a8478;text-align:center;margin-bottom:5px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;}
.lang-sw{display:flex;background:#fff;border:1px solid #e8e4dc;border-radius:99px;padding:3px;gap:2px;margin-bottom:10px;}
.lang-sw label{flex:1;text-align:center;font-size:11px;font-weight:600;cursor:pointer;padding:6px 8px;border-radius:99px;color:#8a8478;transition:all .2s;user-select:none;}
.lang-sw input[type=radio]{display:none;}
.lang-sw input[type=radio]:checked+label{background:linear-gradient(135deg,#d97706,#f59e0b);color:#fff;box-shadow:0 2px 8px rgba(217,119,6,.3);}
.topbar{display:flex;justify-content:space-between;align-items:center;margin-bottom:.5rem;}
.badge{font-size:11px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;padding:3px 11px;border-radius:99px;background:#fef3c7;color:#d97706;}
.ctr{font-size:13px;color:#8a8478;}
.pbar-bg{height:4px;background:#e8e4dc;border-radius:99px;margin-bottom:.4rem;}
.pbar{height:4px;background:linear-gradient(90deg,#d97706,#f59e0b);border-radius:99px;transition:width .4s;}
.plabels{display:flex;justify-content:space-between;font-size:11px;color:#8a8478;margin-bottom:.7rem;}
.pills{display:flex;gap:6px;margin-bottom:.8rem;}
.pill{flex:1;display:flex;align-items:center;justify-content:center;gap:4px;padding:6px 4px;border-radius:99px;border:1px solid;font-size:12px;font-weight:500;}
.pl-p{background:#f0fdf4;border-color:#86efac;color:#15803d;}
.pl-h{background:#fef3e2;border-color:#f5c97a;color:#a05c00;}
.pl-b{background:#fff7ed;border-color:#fdba74;color:#d97706;}
.dot{width:6px;height:6px;border-radius:50%;display:inline-block;}
.dp{background:#15803d;}.dh{background:#a05c00;}.db{background:#d97706;}
.card{background:#fff;border:1px solid #e8e4dc;border-radius:20px;box-shadow:0 4px 20px rgba(217,119,6,.08);min-height:200px;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1.8rem 1.4rem;margin-bottom:.8rem;cursor:pointer;position:relative;overflow:hidden;transition:transform .15s,box-shadow .15s;}
.card::before{content:"";position:absolute;top:0;left:0;right:0;height:3px;background:var(--acc,linear-gradient(90deg,#d97706,#f59e0b));}
.card:hover:not(.done){transform:translateY(-2px);box-shadow:0 8px 28px rgba(217,119,6,.15);}
.card-badges{display:flex;gap:6px;margin-bottom:.6rem;flex-wrap:wrap;justify-content:center;}
.card-num{font-size:10px;font-weight:600;color:#a0aec0;background:#f7f8fa;border:1px solid #e8e4dc;border-radius:99px;padding:2px 8px;}
.cat-badge{font-size:10px;font-weight:700;border-radius:99px;padding:2px 10px;}
.zh-main{font-family:"Noto Serif TC",serif;font-weight:700;color:#1a1814;line-height:1.2;text-align:center;}
.zh-main.big{font-size:64px;}.zh-main.med{font-size:44px;}.zh-main.sm{font-size:28px;}.zh-main.xs{font-size:20px;}.zh-main.xxs{font-size:16px;}
.sent-front{font-family:"Noto Serif TC",serif;font-size:18px;color:#1a1814;line-height:1.6;text-align:center;font-weight:600;}
.tap{font-size:12px;color:#b0a8c4;margin-top:1rem;display:flex;align-items:center;gap:5px;}
.ans{margin-top:.8rem;text-align:center;animation:fup .25s ease;width:100%;}
@keyframes fup{from{opacity:0;transform:translateY(6px);}to{opacity:1;transform:translateY(0);}}
.dl{width:36px;height:1px;background:#e8e4dc;margin:0 auto .7rem;}
.atag{font-size:9px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:#b0a8c4;margin-bottom:3px;}
.ans-py{font-size:16px;font-weight:700;color:#d97706;margin-bottom:4px;}
.ans-id{font-size:16px;font-weight:700;color:#1a1814;line-height:1.5;}
.ans-en{font-size:14px;color:#f59e0b;font-weight:500;line-height:1.5;}
.ans-note{font-size:11px;color:#92400e;background:#fef3c7;border-radius:8px;padding:5px 10px;margin-top:6px;font-style:italic;}
.hint-btn{display:flex;align-items:center;justify-content:center;gap:6px;width:100%;padding:10px;border:1.5px dashed #fdba74;border-radius:12px;background:transparent;color:#d97706;font-size:12px;font-weight:600;cursor:pointer;transition:all .2s;font-family:"DM Sans",sans-serif;margin-bottom:.5rem;}
.hint-btn:hover{background:#fff7ed;border-style:solid;}
.hint-pop{background:linear-gradient(135deg,#fff7ed,#fef3c7);border:1.5px solid #fdba74;border-radius:14px;padding:12px 16px;text-align:center;margin-bottom:.5rem;animation:fup .2s ease;}
.hint-pop-t{font-size:16px;font-weight:700;color:#1a1814;line-height:1.5;}
.hint-pop-s{font-size:11px;color:#d97706;font-weight:500;margin-top:2px;}
.btnrow{display:flex;gap:7px;margin-bottom:.7rem;}
.cb{flex:1;padding:10px 5px;border-radius:13px;border:1.5px solid;font-family:"DM Sans",sans-serif;font-size:11px;font-weight:600;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;transition:all .14s;}
.cb-ico{font-size:17px;}.cb-sub{font-size:9px;font-weight:500;opacity:.7;}
.cb-p{background:#f0fdf4;border-color:#86efac;color:#15803d;}.cb-p:hover{background:#dcfce7;}
.cb-h{background:#fef3e2;border-color:#f5c97a;color:#a05c00;}.cb-h:hover{background:#fde8c2;}
.cb-b{background:#fff7ed;border-color:#fdba74;color:#d97706;}.cb-b:hover{background:#ffedd5;}
.res{text-align:center;padding:.8rem 0;}
.res-ico{font-size:52px;margin-bottom:.7rem;}
.res-title{font-family:"Noto Serif TC",serif;font-size:20px;font-weight:700;color:#1a1814;margin-bottom:.3rem;}
.res-sub{font-size:13px;color:#8a8478;margin-bottom:1.2rem;line-height:1.6;}
.srow{display:flex;gap:7px;margin-bottom:1.2rem;}
.sbox{flex:1;padding:10px 5px;border-radius:13px;border:1px solid;text-align:center;}
.sn{font-size:22px;font-weight:700;}.sl{font-size:10px;margin-top:2px;font-weight:500;}
.sbp{background:#f0fdf4;border-color:#86efac;color:#15803d;}
.sbh{background:#fef3e2;border-color:#f5c97a;color:#a05c00;}
.sbb{background:#fff7ed;border-color:#fdba74;color:#d97706;}
.rlist-wrap{text-align:left;margin-bottom:1rem;}
.rlist-ttl{font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#8a8478;margin-bottom:6px;}
.rlist{border:1px solid #e8e4dc;border-radius:13px;overflow:hidden;max-height:200px;overflow-y:auto;}
.ri{display:flex;align-items:center;gap:8px;padding:8px 12px;border-bottom:1px solid #f0f0f0;background:#fff;}
.ri:last-child{border-bottom:none;}
.ri-zh{font-family:"Noto Serif TC",serif;font-size:15px;color:#1a1814;min-width:60px;}
.ri-id{font-size:11px;color:#d97706;margin-left:auto;text-align:right;max-width:180px;}
.ri-score{font-size:10px;font-weight:700;border-radius:99px;padding:2px 7px;margin-left:6px;flex-shrink:0;background:#fff7ed;color:#d97706;}
.btnbig{width:100%;padding:13px;border-radius:13px;font-family:"DM Sans",sans-serif;font-size:14px;font-weight:600;cursor:pointer;transition:opacity .2s;margin-bottom:8px;border:none;}
.btn-purple{background:linear-gradient(135deg,#d97706,#f59e0b);color:#fff;box-shadow:0 3px 10px rgba(217,119,6,.25);}
.btn-purple:hover{opacity:.9;}
.btn-ghost{background:transparent;border:1.5px solid #e8e4dc!important;color:#8a8478;}
.btn-ghost:hover{background:#fff7ed;}
.final{text-align:center;padding:2.5rem 0;}
</style>
</head><body>
<div id="app">
  <h1>\U0001f6f5 \u5916\u8ce3\u54e1 \u00b7 Video Sosial</h1>
  <div class="sub" id="sub-lbl">Video sosial \u5916\u8ce3\u54e1 \u00b7 25 Vocab + 25 Kalimat</div>
  <div class="filters">
    <button class="fb on" onclick="setCat('ALL')">\U0001f504 Semua</button>
    <button class="fb c-vocab" onclick="setCat('VOCAB')">\U0001f4da Vocab</button>
    <button class="fb c-sent" onclick="setCat('SENT')">\U0001f4dd Kalimat</button>
  </div>
  <div class="ls-lbl">Tampilan Jawaban</div>
  <div class="lang-sw">
    <input type="radio" name="al" id="aid" value="id" checked>
    <label for="aid">&#127470;&#127465; Indonesia</label>
    <input type="radio" name="al" id="aen" value="en">
    <label for="aen">&#127468;&#127463; English</label>
  </div>
  <div id="qv">
    <div class="topbar"><span class="badge" id="rb">Ronde 1</span><span class="ctr" id="ctr">1/--</span></div>
    <div class="pbar-bg"><div class="pbar" id="pb" style="width:0%"></div></div>
    <div class="plabels"><span id="pl">0 selesai</span><span id="pr">-- kartu</span></div>
    <div class="pills">
      <div class="pill pl-p"><span class="dot dp"></span>&nbsp;<span id="sp">0</span>&nbsp;Paham</div>
      <div class="pill pl-h"><span class="dot dh"></span>&nbsp;<span id="sh">0</span>&nbsp;Hampir</div>
      <div class="pill pl-b"><span class="dot db"></span>&nbsp;<span id="sb">0</span>&nbsp;Belum</div>
    </div>
    <div class="card" id="card" onclick="reveal()">
      <div class="card-badges">
        <span class="card-num" id="cn">#1</span>
        <span class="cat-badge" id="ctb"></span>
      </div>
      <div id="fv-vocab" style="display:none;text-align:center">
        <div class="zh-main" id="zh-disp"></div>
      </div>
      <div id="fv-sent" style="display:none;width:100%">
        <div class="sent-front" id="sent-disp"></div>
      </div>
      <div class="tap" id="tap"><span>\U0001f446</span>Ketuk untuk jawaban</div>
      <div class="ans" id="ans" style="display:none">
        <div class="dl"></div>
        <div class="atag" style="margin-bottom:2px">PINYIN</div>
        <div class="ans-py" id="py-disp" style="margin-bottom:8px;font-size:18px;font-weight:700;color:#d97706;text-align:center"></div>
        <div id="ab-id"><div class="atag">&#127470;&#127465; Indonesia</div><div class="ans-id" id="ans-id-txt"></div></div>
        <div id="ab-en" style="display:none"><div class="atag">&#127468;&#127463; English</div><div class="ans-en" id="ans-en-txt"></div></div>
        <div class="ans-note" id="ans-note" style="display:none"></div>
      </div>
    </div>
    <div id="hp" class="hint-pop" style="display:none"><div class="hint-pop-t" id="hpt"></div><div class="hint-pop-s" id="hps"></div></div>
    <button class="hint-btn" id="hb" onclick="doHint(event)">\U0001f4a1 Hint</button>
    <div class="btnrow" id="ba" style="display:none">
      <button class="cb cb-b" onclick="rate(0)"><span class="cb-ico">\U0001f5a4</span><span>Belum</span><span class="cb-sub">Ulang</span></button>
      <button class="cb cb-h" onclick="rate(1)"><span class="cb-ico">\U0001f914</span><span>Hampir</span><span class="cb-sub">Ulang</span></button>
      <button class="cb cb-p" onclick="rate(2)"><span class="cb-ico">\u2705</span><span>Paham</span><span class="cb-sub">Selesai</span></button>
    </div>
  </div>
  <div id="rv" style="display:none">
    <div class="res">
      <div class="res-ico" id="ri2"></div>
      <div class="res-title" id="rt"></div>
      <div class="res-sub" id="rs"></div>
      <div class="srow">
        <div class="sbox sbp"><div class="sn" id="rp">0</div><div class="sl">Paham</div></div>
        <div class="sbox sbh"><div class="sn" id="rh">0</div><div class="sl">Hampir</div></div>
        <div class="sbox sbb"><div class="sn" id="rbb">0</div><div class="sl">Belum</div></div>
      </div>
      <div id="rlw" style="display:none">
        <div class="rlist-wrap">
          <div class="rlist-ttl">Yang perlu diperkuat \U0001f525</div>
          <div class="rlist" id="rl"></div>
        </div>
      </div>
      <button class="btnbig btn-purple" id="nb" onclick="nextRonde()"></button>
      <button class="btnbig btn-ghost" onclick="fullRestart()">\U0001f501 Mulai dari awal</button>
    </div>
  </div>
  <div id="fv3" style="display:none">
    <div class="final">
      <div style="font-size:64px;margin-bottom:.8rem">\U0001f389</div>
      <div class="res-title">\U0001f389 Selesai!</div>
      <div style="font-size:13px;color:#8a8478;margin:.5rem 0 1.4rem">Semua kartu \u5916\u8ce3\u54e1 dikuasai!</div>
      <button class="btnbig btn-purple" onclick="fullRestart()">\U0001f501 Ulangi dari awal</button>
    </div>
  </div>
</div>"""


SCRIPT = """<script>
var V=[
{t:"VOCAB",zh:"\u5916\u8ce3",py:"w\u00e0im\u00e0i",id:"pesan antar / delivery makanan",en:"food delivery / takeout"},
{t:"VOCAB",zh:"\u5916\u8ce3\u54e1",py:"w\u00e0im\u00e0i yu\u00e1n",id:"kurir pesan antar / ojol makanan",en:"delivery rider / food delivery person"},
{t:"VOCAB",zh:"\u6295\u8a34",py:"t\u00f3us\u00f9",id:"mengadukan / melaporkan / komplain",en:"to complain / to file a complaint"},
{t:"VOCAB",zh:"\u8fb1\u7f75",py:"r\u01d4m\u00e0",id:"memaki / mencerca / menghina",en:"to insult / to verbally abuse"},
{t:"VOCAB",zh:"\u9ad4\u8ad2",py:"t\u01d0li\u00e0ng",id:"memahami / berempati / maklum",en:"to understand / to show empathy / to be considerate"},
{t:"VOCAB",zh:"\u9053\u6b49",py:"d\u00e0oqi\u00e0n",id:"meminta maaf / minta maaf",en:"to apologize"},
{t:"VOCAB",zh:"\u6307\u624b\u756b\u811a",py:"zh\u01d0 sh\u01d2u hu\u00e0 ji\u01ceo",id:"main perintah / bertindak sewenang-wenang",en:"to boss people around / to point fingers and give orders"},
{t:"VOCAB",zh:"\u4f4e\u4e09\u4e0b\u56db",py:"d\u012b s\u0101n xi\u00e0 s\u00ec",id:"merendahkan diri / hina diri",en:"to be servile / to humble oneself excessively"},
{t:"VOCAB",zh:"\u9000\u9322",py:"tu\u00ec qi\u00e1n",id:"mengembalikan uang / refund",en:"to refund money"},
{t:"VOCAB",zh:"\u71b1\u98ef",py:"r\u00e8 f\u00e0n",id:"memanaskan makanan",en:"to heat up food"},
{t:"VOCAB",zh:"\u5fae\u6ce2\u7210",py:"w\u0113ib\u014dl\u00fa",id:"microwave",en:"microwave oven"},
{t:"VOCAB",zh:"\u5c0a\u91cd",py:"z\u016bnzh\u00f2ng",id:"menghormati / menghargai",en:"to respect / to show respect"},
{t:"VOCAB",zh:"\u7406\u89e3",py:"l\u01d0ji\u011b",id:"memahami / pengertian",en:"to understand / understanding"},
{t:"VOCAB",zh:"\u4e0d\u5bb9\u6613",py:"b\u00f9 r\u00f3ngy\u00ec",id:"tidak mudah / susah payah",en:"not easy / difficult"},
{t:"VOCAB",zh:"\u64d4\u5f85",py:"d\u0101nd\u00e0i",id:"memaklumi / mengampuni",en:"to be understanding / to excuse"},
{t:"VOCAB",zh:"\u8def\u4eba",py:"l\u00f9r\u00e9n",id:"orang yang lewat / orang asing di jalan",en:"passerby / bystander"},
{t:"VOCAB",zh:"\u5e79\u6d3b",py:"g\u00e0n hu\u00f3",id:"bekerja / melakukan pekerjaan",en:"to work / to do a job"},
{t:"VOCAB",zh:"\u767c\u706b",py:"f\u0101 hu\u01d2",id:"marah-marah / naik pitam",en:"to lose one's temper / to get angry"},
{t:"VOCAB",zh:"\u670d\u52d9\u884c\u696d",py:"f\u00faw\u00f9 h\u00e1ngy\u00e8",id:"industri jasa / sektor pelayanan",en:"service industry"},
{t:"VOCAB",zh:"\u5927\u51ac\u5929",py:"d\u00e0 d\u014bngt\u012b\u0101n",id:"musim dingin yang keras / hari-hari dingin",en:"deep winter / harsh winter days"},
{t:"VOCAB",zh:"\u4e0b\u5927\u96ea",py:"xi\u00e0 d\u00e0 xu\u011b",id:"turun salju lebat",en:"heavy snowfall / snowing heavily"},
{t:"VOCAB",zh:"\u6309\u6642",py:"\u00e0n sh\u00ed",id:"tepat waktu / sesuai jadwal",en:"on time / punctually"},
{t:"VOCAB",zh:"\u8def\u4e0d\u597d\u8d70",py:"l\u00f9 b\u00f9 h\u01ceo z\u01d2u",id:"jalannya sulit dilalui",en:"the road is hard to travel / difficult road conditions"},
{t:"VOCAB",zh:"\u7b97\u4e86",py:"su\u00e0n le",id:"sudahlah / lupakan saja",en:"forget it / let it go / never mind"},
{t:"VOCAB",zh:"\u539f\u8ad2",py:"yu\u00e1nli\u00e0ng",id:"memaafkan",en:"to forgive"},
];
"""

SCRIPT2 = """
var SENT_DATA = [
{t:"SENT",zh:"\u7576\u5916\u8ce3\u9001\u9910\u54e1\u56e0\u70ba\u6668\u5230\u800c\u88ab\u4eba\u7576\u8857\u8fb1\u7f75\uff0c\u770b\u5230\u9019\u5e55\u7684\u8def\u4eba\u6703\u600e\u9ebc\u505a\u5462\uff1f",py:"D\u0101ng w\u00e0im\u00e0i s\u00f2ng c\u0101n yu\u00e1n y\u012bnw\u00e8i w\u01cen d\u00e0o \u00e9r b\u00e8i r\u00e9n d\u0101ng ji\u0113 r\u01d4m\u00e0, k\u00e0n d\u00e0o zh\u00e8 m\u00f9 de l\u00f9r\u00e9n hu\u00ec z\u011bnme zu\u00f2 ne?",id:"Ketika kurir makanan dimarahi di jalan karena terlambat, apa yang akan dilakukan orang yang melihatnya?",en:"When a food delivery rider is publicly scolded for being late, what will bystanders do?"},
{t:"SENT",zh:"\u4eca\u5929\u4e0b\u8457\u5927\u96ea\uff0c\u8def\u4e0d\u597d\u8d70\u3002",py:"J\u012bnt\u012b\u0101n xi\u00e0 zhe d\u00e0 xu\u011b, l\u00f9 b\u00f9 h\u01ceo z\u01d2u.",id:"Hari ini turun salju lebat, jalannya sulit dilalui.",en:"It is snowing heavily today and the road conditions are difficult."},
{t:"SENT",zh:"\u5e79\u4e0d\u597d\u5c31\u5225\u5e79\u4e86\u597d\u4e0d\u597d\u3002",py:"G\u00e0n b\u00f9 h\u01ceo ji\u00f9 bi\u00e9 g\u00e0n le h\u01ceo bu h\u01ceo.",id:"Kalau tidak bisa kerja dengan baik, jangan kerja saja.",en:"If you cannot do it well, just stop doing it."},
{t:"SENT",zh:"\u4f60\u9019\u6a23\u9084\u53eb\u9001\u5916\u8ce3\u7684\u3002",py:"N\u01d0 zh\u00e8y\u00e0ng h\u00e1i ji\u00e0o s\u00f2ng w\u00e0im\u00e0i de.",id:"Dengan begini kamu masih menyebut dirimu kurir makanan?",en:"You still call yourself a food delivery person acting like this."},
{t:"SENT",zh:"\u4f60\u4e0d\u7528\u8aaa\u9019\u4e9b\u6c92\u7528\u7684\u3002",py:"N\u01d0 b\u00f9 y\u00f2ng shu\u014d zh\u00e8xi\u0113 m\u00e9i y\u00f2ng de.",id:"Kamu tidak perlu bicara hal-hal yang tidak berguna itu.",en:"You do not need to say such useless things."},
{t:"SENT",zh:"\u4eba\u5bb6\u9001\u500b\u5916\u8ce3\uff0c\u4f60\u767c\u9019\u9ebc\u5927\u706b\u5e79\u4ec0\u9ebc\uff1f",py:"R\u00e9n ji\u0101 s\u00f2ng ge w\u00e0im\u00e0i, n\u01d0 f\u0101 zh\u00e8me d\u00e0 hu\u01d2 g\u00e0n sh\u00e9nme?",id:"Orang hanya mengantarkan makanan, kenapa kamu marah sampai seperti itu?",en:"He is just delivering food, why are you getting so angry?"},
{t:"SENT",zh:"\u8ab0\u5e79\u6d3b\u5bb9\u6613\uff1f",py:"Sh\u00e9i g\u00e0n hu\u00f3 r\u00f3ngy\u00ec?",id:"Siapa yang kerjanya mudah?",en:"Whose work is easy?"},
{t:"SENT",zh:"\u4e0d\u662f\u8aaa\u4f60\u82b1\u4e86\u9322\u5c31\u53ef\u4ee5\u6307\u624b\u756b\u811a\u4e86\u3002",py:"B\u00f9 sh\u00ec shu\u014d n\u01d0 hu\u0101 le qi\u00e1n ji\u00f9 k\u011by\u01d0 zh\u01d0 sh\u01d2u hu\u00e0 ji\u01ceo le.",id:"Bukan berarti karena kamu bayar kamu bisa main perintah sesuka hati.",en:"Just because you paid does not mean you can boss people around."},
{t:"SENT",zh:"\u4e0b\u96ea\u5929\u4f60\u4e5f\u9ad4\u8ad2\u4e00\u4e0b\u3002",py:"Xi\u00e0 xu\u011b ti\u0101n n\u01d0 y\u011b t\u01d0li\u00e0ng y\u012bxi\u00e0.",id:"Di hari salju ini tolong juga sedikit berempati.",en:"On a snowy day like this, please show a little understanding."},
{t:"SENT",zh:"\u4ed6\u5011\u9001\u5916\u8ce3\u4e5f\u4e0d\u5bb9\u6613\u3002",py:"T\u0101men s\u00f2ng w\u00e0im\u00e0i y\u011b b\u00f9 r\u00f3ngy\u00ec.",id:"Mereka bekerja sebagai kurir makanan juga tidak mudah.",en:"It is also not easy for them to do food delivery."},
{t:"SENT",zh:"\u4eba\u5bb6\u8ddf\u4f60\u9053\u6b49\u4e86\uff0c\u4f60\u9084\u6307\u8457\u4eba\u5bb6\u9f3b\u5b50\u5728\u9019\u5152\u7f75\u3002",py:"R\u00e9n ji\u0101 g\u0113n n\u01d0 d\u00e0oqi\u00e0n le, n\u01d0 h\u00e1i zh\u01d0 zhe r\u00e9n ji\u0101 b\u00edzi z\u00e0i zh\u00e8r m\u00e0.",id:"Orang sudah minta maaf, tapi kamu masih menunjuk hidungnya dan memaki.",en:"He already apologized to you, yet you are still pointing at him and scolding."},
{t:"SENT",zh:"\u4f60\u4e0d\u7528\u9019\u9ebc\u4f4e\u4e09\u4e0b\u56db\u7684\u3002",py:"N\u01d0 b\u00f9 y\u00f2ng zh\u00e8me d\u012b s\u0101n xi\u00e0 s\u00ec de.",id:"Kamu tidak perlu merendahkan diri seperti itu.",en:"You do not need to humble yourself so much."},
{t:"SENT",zh:"\u65e9\u6668\u9ede\u7684\uff0c\u5169\u500b\u534a\u5c0f\u6642\u9001\u5230\uff0c\u4f60\u4e00\u500b\u96fb\u8a71\u53ef\u80fd\u4ed6\u7684\u5de5\u4f5c\u5c31\u6c92\u4e86\u3002",py:"Z\u01ceoch\u00e9n di\u01cen de, li\u01cengg ge b\u00e0n xi\u01ceos\u00ed s\u00f2ng d\u00e0o, n\u01d0 y\u012b ge di\u00e0nhu\u00e0 k\u011bn\u00e9ng t\u0101 de g\u014dngzu\u00f2 ji\u00f9 m\u00e9i le.",id:"Pesan dari pagi, dua setengah jam baru sampai. Satu telepon darimu mungkin dia langsung kehilangan pekerjaan.",en:"Ordered in the morning, took two and a half hours. One call from you and he might lose his job."},
{t:"SENT",zh:"\u90fd\u4e0d\u5bb9\u6613\u662f\u5427\uff0c\u5927\u51ac\u5929\u7684\u3002",py:"D\u014du b\u00f9 r\u00f3ngy\u00ec sh\u00ec ba, d\u00e0 d\u014bngt\u012b\u0101n de.",id:"Semuanya tidak mudah ya, di musim dingin seperti ini.",en:"It is not easy for anyone, especially in deep winter like this."},
{t:"SENT",zh:"\u591a\u4e00\u4efd\u7406\u89e3\uff0c\u591a\u4e00\u4efd\u5c0a\u91cd\u3002",py:"Du\u014d y\u012b f\u00e8n l\u01d0ji\u011b, du\u014d y\u012b f\u00e8n z\u016bnzh\u00f2ng.",id:"Lebih banyak pengertian, lebih banyak penghormatan.",en:"One more share of understanding, one more share of respect.",note:"Pesan moral dari video ini"},
{t:"SENT",zh:"\u4f60\u9019\u500b\u4eba\u4e00\u770b\u9577\u5f97\u633a\u597d\u7684\uff0c\u5fc3\u4e5f\u633a\u5584\u826f\u3002",py:"N\u01d0 zh\u00e8ge r\u00e9n y\u012b k\u00e0n zh\u01ceng de t\u01d0ng h\u01ceo de, x\u012bn y\u011b t\u01d0ng sh\u00e0nli\u00e1ng.",id:"Melihatmu sekejap kamu terlihat tampan, hatimu juga baik.",en:"Looking at you, you appear to be a good-looking person with a kind heart."},
{t:"SENT",zh:"\u4f60\u5148\u5403\u6211\u9019\u500b\uff0c\u5225\u6295\u8a34\u4ed6\u3002",py:"N\u01d0 xi\u0101n ch\u012b w\u01d2 zh\u00e8ge, bi\u00e9 t\u00f3us\u00f9 t\u0101.",id:"Makan punyaku dulu, jangan melaporkannya.",en:"Eat mine first, do not file a complaint against him."},
{t:"SENT",zh:"\u505a\u670d\u52d9\u884c\u696d\u90fd\u4e0d\u5bb9\u6613\u3002",py:"Zu\u00f2 f\u00faw\u00f9 h\u00e1ngy\u00e8 d\u014du b\u00f9 r\u00f3ngy\u00ec.",id:"Bekerja di industri jasa semuanya tidak mudah.",en:"Working in the service industry is not easy for anyone."},
{t:"SENT",zh:"\u6211\u627e\u500b\u5730\u65b9\u7d66\u4f60\u71b1\u71b1\u3002",py:"W\u01d2 zh\u01ceo ge d\u00ecf\u0101ng g\u011bi n\u01d0 r\u00e8 re.",id:"Saya carikan tempat untuk memanaskan makananmu.",en:"I will find a place to heat it up for you."},
{t:"SENT",zh:"\u6211\u9818\u4f60\u5230\u88e1\u9762\u5403\u4e00\u9813\u5427\u3002",py:"W\u01d2 l\u01d0ng n\u01d0 d\u00e0o l\u01d0mi\u00e0n ch\u012b y\u012b d\u00f9n ba.",id:"Saya ajak kamu masuk ke dalam untuk makan ya.",en:"Let me take you inside for a meal."},
{t:"SENT",zh:"\u4f60\u6709\u8001\u6709\u5c0f\u600e\u9ebc\u4e86\uff0c\u6211\u7ba1\u4f60\u55ce\uff1f\u8ddf\u6211\u6709\u4ec0\u9ebc\u95dc\u4fc2\uff1f",py:"N\u01d0 y\u01d2u l\u01ceo y\u01d2u xi\u01ceo z\u011bnme le, w\u01d2 gu\u01cen n\u01d0 ma? G\u0113n w\u01d2 y\u01d2u sh\u00e9nme gu\u0101nxi?",id:"Kamu punya orang tua dan anak kecil, memangnya kenapa? Apa urusanku? Apa hubungannya denganku?",en:"You have old and young to support, so what? Is that my business? What does that have to do with me?"},
{t:"SENT",zh:"\u7b97\u4e86\u7b97\u4e86\uff0c\u4f60\u5225\u6295\u8a34\u5c31\u884c\u4e86\u3002",py:"Su\u00e0n le su\u00e0n le, n\u01d0 bi\u00e9 t\u00f3us\u00f9 ji\u00f9 x\u00edng le.",id:"Sudahlah, asal kamu tidak melapor saja.",en:"Forget it, as long as you do not file a complaint."},
{t:"SENT",zh:"\u64d4\u5f85\u9ede\uff0c\u5927\u51ac\u5929\u90fd\u4e0d\u5bb9\u6613\u3002",py:"D\u0101nd\u00e0i di\u01cen, d\u00e0 d\u014bngt\u012b\u0101n d\u014du b\u00f9 r\u00f3ngy\u00ec.",id:"Maklumi sedikit, di musim dingin seperti ini semua orang susah.",en:"Be a little understanding, it is tough for everyone in deep winter."},
{t:"SENT",zh:"\u9019\u98ef\u591a\u5c11\u9322\uff0c\u6211\u7d66\u4f60\u8cb7\u3002",py:"Zh\u00e8 f\u00e0n du\u014dsh\u01ceo qi\u00e1n, w\u01d2 g\u011bi n\u01d0 m\u01cei.",id:"Makanan ini berapa harganya, saya belikan untukmu.",en:"How much is this food? I will buy it for you."},
{t:"SENT",zh:"\u6211\u5c31\u7ba1\u4e86\uff0c\u600e\u9ebc\u8457\uff1f",py:"W\u01d2 ji\u00f9 gu\u01cen le, z\u011bnme zhe?",id:"Saya memang ikut campur, memangnya kenapa?",en:"I am getting involved, so what?"}
];
</script>"""

JS_LOGIC = """
var CAT_CFG={
  VOCAB:{label:"Vocab",bg:"#fef3c7",fg:"#b45309",acc:"linear-gradient(90deg,#d97706,#f59e0b)"},
  SENT:{label:"Kalimat",bg:"#ffedd5",fg:"#c2410c",acc:"linear-gradient(90deg,#f59e0b,#d97706)"}
};

var curCat="ALL",deck=[],idx=0,ronde=1,cp=0,ch=0,cbv=0,rev=false,toRev=[];
function getAL(){return document.querySelector('input[name="al"]:checked').value;}
function shuffle(a){var b=a.slice();for(var i=b.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var x=b[i];b[i]=b[j];b[j]=x;}return b;}
function setCat(c){
  curCat=c;
  document.querySelectorAll(".fb").forEach(function(b){b.classList.remove("on");});
  document.querySelectorAll(".fb").forEach(function(b){if(b.getAttribute("onclick")==="setCat('"+c+"')")b.classList.add("on");});
  ronde=1;fullRestart();
}
function getFiltered(){return curCat==="ALL"?V.slice():V.filter(function(c){return c.t===curCat;});}
function fullRestart(){
  var src=getFiltered();deck=shuffle(src);
  cp=0;ch=0;cbv=0;idx=0;rev=false;toRev=[];
  document.getElementById("sub-lbl").textContent=(curCat==="ALL"?"Semua":CAT_CFG[curCat]?CAT_CFG[curCat].label:curCat)+"  "+deck.length+" kartu";
  document.getElementById("qv").style.display="";document.getElementById("rv").style.display="none";document.getElementById("fv3").style.display="none";
  document.getElementById("rb").textContent="Ronde "+ronde;
  upStats();showCard();
}
function nextRonde(){ronde++;deck=shuffle(toRev);cp=0;ch=0;cbv=0;idx=0;rev=false;toRev=[];document.getElementById("qv").style.display="";document.getElementById("rv").style.display="none";document.getElementById("rb").textContent="Ronde "+ronde;upStats();showCard();}
function showCard(){
  rev=false;var c=deck[idx];
  var cfg=CAT_CFG[c.t]||CAT_CFG.VOCAB;
  document.getElementById("card").style.setProperty("--acc",cfg.acc);
  document.getElementById("cn").textContent="#"+(idx+1);
  var ctb=document.getElementById("ctb");ctb.textContent=cfg.label;ctb.style.background=cfg.bg;ctb.style.color=cfg.fg;
  if(c.t==="VOCAB"){
    document.getElementById("fv-vocab").style.display="";
    document.getElementById("fv-sent").style.display="none";
    var wl=c.zh.length;
    var wEl=document.getElementById("zh-disp");
    wEl.textContent=c.zh;
    wEl.className="zh-main"+(wl<=2?" big":wl<=4?" med":wl<=6?" sm":wl<=10?" xs":" xxs");
  } else {
    document.getElementById("fv-vocab").style.display="none";
    document.getElementById("fv-sent").style.display="";
    document.getElementById("sent-disp").textContent=c.zh;
  }
  document.getElementById("py-disp").textContent=c.py||"";
  document.getElementById("ans-id-txt").textContent=c.id;
  document.getElementById("ans-en-txt").textContent=c.en;
  var note=document.getElementById("ans-note");
  if(c.note){note.textContent=c.note;note.style.display="";}else{note.style.display="none";}
  var al=getAL();
  document.getElementById("ab-id").style.display=al==="id"?"":"none";
  document.getElementById("ab-en").style.display=al==="en"?"":"none";
  document.getElementById("ans").style.display="none";
  document.getElementById("tap").style.display="";
  document.getElementById("ba").style.display="none";
  document.getElementById("card").className="card";
  document.getElementById("hp").style.display="none";
  document.getElementById("hb").style.display="";
  document.getElementById("ctr").textContent=(idx+1)+"/"+deck.length;
  var pct=Math.round(idx/deck.length*100);
  document.getElementById("pb").style.width=pct+"%";
  document.getElementById("pl").textContent=idx+" selesai";
  document.getElementById("pr").textContent=deck.length+" kartu";
}
function reveal(){
  if(rev)return;rev=true;
  var al=getAL();
  document.getElementById("ab-id").style.display=al==="id"?"":"none";
  document.getElementById("ab-en").style.display=al==="en"?"":"none";
  document.getElementById("ans").style.display="";
  document.getElementById("tap").style.display="none";
  document.getElementById("ba").style.display="";
  document.getElementById("card").className="card done";
  document.getElementById("hp").style.display="none";
  document.getElementById("hb").style.display="none";
}
document.querySelectorAll('input[name="al"]').forEach(function(r){
  r.addEventListener("change",function(){
    var al=getAL();
    document.getElementById("ab-id").style.display=al==="id"?"":"none";
    document.getElementById("ab-en").style.display=al==="en"?"":"none";
  });
});
function doHint(e){
  e.stopPropagation();if(rev)return;
  var c=deck[idx];var hp=document.getElementById("hp");
  if(hp.style.display==="none"){
    var al=getAL();
    document.getElementById("hpt").textContent=al==="id"?c.id:c.en;
    document.getElementById("hps").textContent=c.zh;
    hp.style.display="";
  } else {hp.style.display="none";}
}
function rate(r){
  var c=deck[idx];
  if(r===2)cp++;
  else if(r===1){ch++;c._h=(c._h||0)+1;toRev.push(c);}
  else{cbv++;c._b=(c._b||0)+1;toRev.push(c);}
  upStats();idx++;
  if(idx>=deck.length){showResult();return;}
  showCard();
}
function upStats(){document.getElementById("sp").textContent=cp;document.getElementById("sh").textContent=ch;document.getElementById("sb").textContent=cbv;}
function showResult(){
  document.getElementById("pb").style.width="100%";
  document.getElementById("qv").style.display="none";
  if(toRev.length===0){document.getElementById("fv3").style.display="";return;}
  document.getElementById("rv").style.display="";
  document.getElementById("rp").textContent=cp;document.getElementById("rh").textContent=ch;document.getElementById("rbb").textContent=cbv;
  var pct=Math.round(cp/deck.length*100);
  var icons=["&#11088;","&#128522;","&#128528;","&#128170;"];
  document.getElementById("ri2").textContent=pct>=90?"⭐":pct>=70?"😊":pct>=50?"😐":"💪";
  document.getElementById("rt").textContent="Ronde "+ronde+" selesai!";
  document.getElementById("rs").textContent=pct>=90?"Hampir sempurna! "+toRev.length+" kartu tersisa.":pct>=70?"Bagus! "+toRev.length+" kartu perlu diulang.":pct>=50?"Lumayan! Ulangi "+toRev.length+" kartu.":"Semangat! "+toRev.length+" kartu menunggumu.";
  document.getElementById("nb").textContent="Lanjut Ronde "+(ronde+1)+" \u25b6 "+toRev.length+" kartu";
  var rl=document.getElementById("rl");rl.innerHTML="";
  var belumList=toRev.filter(function(v){return (v._b||0)>0;});
  belumList.sort(function(a,b){return (b._b||0)-(a._b||0);});
  if(belumList.length===0){
    rl.innerHTML='<div style="padding:10px 12px;font-size:12px;color:#8a8478;text-align:center">Tidak ada yang benar-benar sulit 😊</div>';
  } else {
    belumList.forEach(function(v){
      var d=document.createElement("div");d.className="ri";
      var score='<span class="ri-score">\xd7'+(v._b||0)+"</span>";
      d.innerHTML='<span class="ri-zh">'+v.zh+'</span><div style="flex:1"><div style="font-size:11px;font-weight:600;color:#d97706">'+v.py+'</div></div><span class="ri-id">'+v.id.substring(0,35)+'</span>'+score;
      rl.appendChild(d);
    });
  }
  document.getElementById("rlw").style.display="";
}
function show(id){document.getElementById(id).style.display="";}
function hide(id){document.getElementById(id).style.display="none";}
ronde=1;fullRestart();
"""

# Build the full V array by merging vocab + sent data
import re

vocab_items = re.findall(r'\{t:"VOCAB".*?\}', SCRIPT, re.DOTALL)
sent_items = re.findall(r'\{t:"SENT".*?\}', SCRIPT2, re.DOTALL)

all_items = vocab_items + sent_items
V_DATA = 'var V=[\n' + ',\n'.join(all_items) + '\n];\n'

FINAL_SCRIPT = '<script>\n' + V_DATA + JS_LOGIC.strip() + '\n</script>\n</body>\n</html>'

FULL = HEAD + FINAL_SCRIPT

pathlib.Path(OUT).write_text(FULL, encoding='utf-8')
print(f'Written: {OUT}')
print(f'File size: {len(FULL)} bytes')
print(f'Vocab cards: {len(vocab_items)}, Sent cards: {len(sent_items)}, Total: {len(all_items)}')
