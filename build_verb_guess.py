import csv, re

# Read verb data
verbs = []
with open('verb_data.csv', encoding='utf-8') as f:
    for line in f:
        line = line.strip().lstrip('\ufeff')
        if not line: continue
        p = line.split(',', 8)
        if len(p) < 7: continue
        v1 = p[0].strip()
        v2 = p[1].strip()
        v3 = p[2].strip()
        ving = p[3].strip()
        meaning = p[4].strip()
        cat = p[5].strip()
        example = p[6].strip()
        note = p[7].strip() if len(p) > 7 else ''
        translation = p[8].strip() if len(p) > 8 else ''
        verbs.append({
            'v1': v1, 'v2': v2, 'v3': v3, 'ving': ving,
            'meaning': meaning, 'cat': cat, 'example': example, 'note': note,
            'translation': translation
        })

# For each verb, create a card where the verb form is blanked in the sentence
# Detect which form appears in the sentence
def make_card(v):
    ex = v['example']
    forms = [
        (v['ving'], 'V-ing'),
        (v['v3'], 'V3'),
        (v['v2'], 'V2'),
        (v['v1'], 'V1'),
    ]
    # Try to find which form appears (case-insensitive)
    found_form = None
    found_label = None
    found_word = None
    for form, label in forms:
        # handle multiple forms like "proved/proven"
        for f in form.split('/'):
            f = f.strip()
            pattern = r'\b' + re.escape(f) + r'\b'
            if re.search(pattern, ex, re.IGNORECASE):
                found_form = f
                found_label = label
                found_word = f
                break
        if found_form:
            break

    if not found_form:
        # fallback: blank the v1
        found_form = v['v1']
        found_label = 'V1'
        found_word = v['v1']

    # Create blanked sentence
    pattern = r'\b' + re.escape(found_word) + r'\b'
    blanked = re.sub(pattern, '___', ex, count=1, flags=re.IGNORECASE)

    # Auto-generate reason based on answer_form and context
    reason = make_reason(found_label, blanked, v['v1'])

    return {
        'v1': v['v1'], 'v2': v['v2'], 'v3': v['v3'], 'ving': v['ving'],
        'meaning': v['meaning'], 'cat': v['cat'],
        'example': ex, 'blanked': blanked,
        'answer_form': found_label, 'answer_word': found_word,
        'note': v['note'], 'translation': v['translation'],
        'reason': reason
    }

def make_reason(label, blanked, v1):
    b = blanked.lower()
    if label == 'V3':
        if re.search(r'\b(have|has|had)\b', b):
            kw = re.search(r'\b(have|has|had)\b', b).group()
            return f'Ada <b>{kw}</b> sebelum blank → have/has/had + V3'
        elif re.search(r'\b(is|am|are|was|were|be|been)\b', b):
            kw = re.search(r'\b(is|am|are|was|were|be|been)\b', b).group()
            return f'Ada <b>{kw}</b> sebelum blank → kalimat pasif (be + V3)'
        else:
            return 'Bentuk V3 digunakan di sini (perfect atau passive)'
    elif label == 'V2':
        if re.search(r'\b(yesterday|last|ago|previously|formerly|once)\b', b):
            kw = re.search(r'\b(yesterday|last|ago|previously|formerly|once)\b', b).group()
            return f'Ada kata waktu lampau <b>{kw}</b> → kejadian sudah selesai → V2'
        else:
            return 'Kalimat menceritakan kejadian di masa lalu → V2'
    elif label == 'V-ing':
        if re.search(r'\b(is|am|are|was|were)\b', b):
            kw = re.search(r'\b(is|am|are|was|were)\b', b).group()
            return f'Ada <b>{kw}</b> sebelum blank → sedang berlangsung (be + V-ing)'
        elif re.search(r'\b(from|enjoy|keep|avoid|finish|consider|by|of)\b', b):
            kw = re.search(r'\b(from|enjoy|keep|avoid|finish|consider|by|of)\b', b).group()
            return f'Setelah preposisi <b>{kw}</b> → harus pakai V-ing'
        else:
            return 'Bentuk V-ing digunakan di sini (sedang berlangsung atau gerund)'
    elif label == 'V1':
        if re.search(r'\b(will|would|can|could|should|must|may|might|shall)\b', b):
            kw = re.search(r'\b(will|would|can|could|should|must|may|might|shall)\b', b).group()
            return f'Ada modal <b>{kw}</b> sebelum blank → modal + V1 (bentuk dasar)'
        elif re.search(r'\bto\s+___', b):
            return 'Ada <b>to</b> sebelum blank → to + V1 (infinitive)'
        elif re.search(r'\b(to)\b', b):
            return 'Ada <b>to</b> sebelum blank → to + V1 (infinitive)'
        else:
            return f'Subjek jamak / present tense → V1 (bentuk dasar tanpa -s/-ed)'
    else:
        return ''

cards = [make_card(v) for v in verbs]

# Build JS array
js_lines = []
for c in cards:
    def esc(s): return s.replace('\\', '\\\\').replace('"', '\\"')
    js_lines.append(
        f'  {{v1:"{esc(c["v1"])}",v2:"{esc(c["v2"])}",v3:"{esc(c["v3"])}",ving:"{esc(c["ving"])}",m:"{esc(c["meaning"])}",cat:"{c["cat"]}",e:"{esc(c["example"])}",b:"{esc(c["blanked"])}",af:"{c["answer_form"]}",aw:"{esc(c["answer_word"])}",n:"{esc(c["note"])}",t:"{esc(c["translation"])}",r:"{esc(c["reason"])}"}}'
    )

js_array = 'var V=[\n' + ',\n'.join(js_lines) + '\n];'

total = len(cards)
reg = sum(1 for c in cards if c['cat'] == 'REG')
irr = sum(1 for c in cards if c['cat'] == 'IRR')

html = f'''<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TOEIC Verb Guess V1/V2/V3/Ving</title>
<link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<style>
*{{box-sizing:border-box;margin:0;padding:0}}
body{{background:#eef2f7;font-family:"DM Sans",sans-serif;min-height:100vh;display:flex;flex-direction:column;align-items:center;padding:16px 12px 40px}}
#app{{width:100%;max-width:500px}}
h1{{font-family:"Lora",serif;font-size:16px;color:#1a1814;text-align:center;margin-bottom:3px}}
.sub{{font-size:12px;color:#8a8478;text-align:center;margin-bottom:12px}}
.filters{{display:flex;gap:5px;flex-wrap:wrap;justify-content:center;margin-bottom:12px}}
.fb{{padding:5px 11px;border-radius:99px;border:1px solid #e8e4dc;background:#fff;color:#8a8478;font-size:11px;font-weight:600;cursor:pointer;transition:all .15s}}
.fb:hover{{border-color:#e67700;color:#e67700}}
.fb.on{{background:#e67700;color:#fff;border-color:#e67700}}
.fb.all-btn.on{{background:#1a1814;border-color:#1a1814}}
.topbar{{display:flex;justify-content:space-between;align-items:center;margin-bottom:.6rem}}
.badge{{font-size:11px;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;padding:3px 10px;border-radius:99px;background:#e8e4dc;color:#8a8478}}
.ctr{{font-size:13px;color:#8a8478}}
.pbar-bg{{height:4px;background:#e8e4dc;border-radius:99px;margin-bottom:.4rem}}
.pbar{{height:4px;background:linear-gradient(90deg,#e67700,#ffa94d);border-radius:99px;transition:width .4s}}
.plabels{{display:flex;justify-content:space-between;font-size:11px;color:#8a8478;margin-bottom:.8rem}}
.pills{{display:flex;gap:6px;margin-bottom:.9rem}}
.pill{{flex:1;display:flex;align-items:center;justify-content:center;gap:4px;padding:6px 4px;border-radius:99px;border:1px solid;font-size:12px;font-weight:500}}
.pl-p{{background:#edf7f1;border-color:#a8d9bc;color:#2d7a4f}}
.pl-h{{background:#fef3e2;border-color:#f5c97a;color:#a05c00}}
.pl-b{{background:#fdf0f0;border-color:#f5a8a8;color:#b83232}}
.dot{{width:6px;height:6px;border-radius:50%;display:inline-block}}
.dp{{background:#2d7a4f}}.dh{{background:#a05c00}}.db{{background:#b83232}}
.card{{background:#fff;border:1px solid #e8e4dc;border-radius:20px;box-shadow:0 2px 14px rgba(0,0,0,.07);min-height:300px;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1.5rem 1.2rem;margin-bottom:.8rem;cursor:pointer;position:relative;overflow:hidden;transition:transform .15s,box-shadow .15s}}
.card::before{{content:"";position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#ffa94d,#e67700,#ff6b6b);opacity:.8}}
.card:hover:not(.done){{transform:translateY(-2px);box-shadow:0 6px 22px rgba(0,0,0,.1)}}
.ctag{{font-size:10px;font-weight:600;letter-spacing:.8px;padding:3px 9px;border-radius:99px;background:#fff3e0;color:#e67700;margin-bottom:.6rem}}
.qlabel{{font-size:11px;color:#8a8478;margin-bottom:.5rem;font-weight:600;text-align:center}}
.meaning-tag{{font-size:13px;color:#e67700;font-weight:700;margin-bottom:.8rem;text-align:center}}
.sentence{{font-family:"Lora",serif;font-size:17px;font-weight:400;color:#1a1814;line-height:1.7;text-align:center;padding:0 .5rem}}
.blank{{font-family:"DM Sans",sans-serif;font-size:18px;font-weight:700;color:#e67700;letter-spacing:2px;border-bottom:2px solid #e67700;padding:0 4px}}
.hint{{font-size:13px;color:#8a8478;margin-top:1rem;display:flex;align-items:center;gap:6px}}
.hint-ico{{width:26px;height:26px;border-radius:50%;border:1px solid #e8e4dc;display:flex;align-items:center;justify-content:center;font-size:12px}}
.ans{{margin-top:.9rem;width:100%;animation:fup .25s ease}}
@keyframes fup{{from{{opacity:0;transform:translateY(7px)}}to{{opacity:1;transform:translateY(0)}}}}
.divline{{width:36px;height:1px;background:#e8e4dc;margin:0 auto .7rem}}
.ans-label{{font-size:11px;color:#8a8478;text-align:center;margin-bottom:.3rem;font-weight:600}}
.ans-word{{font-family:"Lora",serif;font-size:28px;font-weight:700;color:#e67700;text-align:center;margin-bottom:.4rem}}
.ans-form{{font-size:12px;color:#8a8478;text-align:center;margin-bottom:.7rem}}
.vtable{{width:100%;border-collapse:collapse;border-radius:12px;overflow:hidden;border:1px solid #ffe0b2}}
.vtable th{{background:#fff3e0;color:#e67700;font-size:11px;font-weight:700;padding:7px 4px;text-align:center;letter-spacing:.5px}}
.vtable td{{padding:9px 4px;text-align:center;border-top:1px solid #ffe0b2;font-family:"Lora",serif;font-weight:700;font-size:14px}}
.vtable tr:nth-child(even) td{{background:#fffbf5}}
.v1{{color:#3b5bdb}}.v2{{color:#e67700}}.v3{{color:#2d7a4f}}.ving{{color:#9775fa}}
.notebox{{margin-top:.5rem;background:#fff8e1;border:1px solid #ffe08a;border-radius:10px;padding:.5rem .8rem;text-align:left}}
.notelabel{{font-size:10px;font-weight:700;color:#a05c00;letter-spacing:.5px;margin-bottom:2px}}
.notetext{{font-size:11px;color:#7a4800;line-height:1.5}}
.transbox{{margin-top:.5rem;background:#f0f7ff;border:1px solid #bdd7f5;border-radius:10px;padding:.5rem .8rem;text-align:left}}
.translabel{{font-size:10px;font-weight:700;color:#1971c2;letter-spacing:.5px;margin-bottom:2px}}
.transtext{{font-size:12px;color:#1864ab;line-height:1.5;font-style:italic}}
.reasonbox{{margin-top:.5rem;background:#f3f0ff;border:1px solid #c5b4f5;border-radius:10px;padding:.5rem .8rem;text-align:left}}
.reasonlabel{{font-size:10px;font-weight:700;color:#6741d9;letter-spacing:.5px;margin-bottom:2px}}
.reasontext{{font-size:12px;color:#4c2d9c;line-height:1.5}}
.btnrow{{display:flex;gap:7px;margin-bottom:.7rem}}
.cb{{flex:1;padding:10px 5px;border-radius:13px;border:1.5px solid;font-size:11px;font-weight:600;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;transition:all .14s}}
.cb-ico{{font-size:16px}}.cb-sub{{font-size:9px;font-weight:500;opacity:.7}}
.cb-p{{background:#edf7f1;border-color:#a8d9bc;color:#2d7a4f}}.cb-p:hover{{background:#d5f0e2}}
.cb-h{{background:#fef3e2;border-color:#f5c97a;color:#a05c00}}.cb-h:hover{{background:#fde8c2}}
.cb-b{{background:#fdf0f0;border-color:#f5a8a8;color:#b83232}}.cb-b:hover{{background:#f9d8d8}}
.res{{text-align:center;padding:.8rem 0}}
.res-ico{{font-size:50px;margin-bottom:.7rem}}
.res-title{{font-family:"Lora",serif;font-size:18px;font-weight:700;color:#1a1814;margin-bottom:.3rem}}
.res-sub{{font-size:13px;color:#8a8478;margin-bottom:1rem;line-height:1.6}}
.srow{{display:flex;gap:7px;margin-bottom:1rem}}
.sbox{{flex:1;padding:10px 5px;border-radius:13px;border:1px solid;text-align:center}}
.sbox .sn{{font-size:21px;font-weight:700}}.sbox .sl{{font-size:10px;margin-top:2px}}
.sbp{{background:#edf7f1;border-color:#a8d9bc;color:#2d7a4f}}
.sbh{{background:#fef3e2;border-color:#f5c97a;color:#a05c00}}
.sbb{{background:#fdf0f0;border-color:#f5a8a8;color:#b83232}}
.rlist-wrap{{text-align:left;margin-bottom:1rem}}
.rlist-ttl{{font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:#8a8478;margin-bottom:6px}}
.rlist{{border:1px solid #e8e4dc;border-radius:13px;overflow:hidden;max-height:200px;overflow-y:auto}}
.ri{{display:flex;align-items:center;gap:8px;padding:7px 12px;border-bottom:1px solid #e8e4dc;background:#fff}}
.ri:last-child{{border-bottom:none}}
.ri-word{{font-family:"Lora",serif;font-size:13px;font-weight:700;color:#1a1814;min-width:80px}}
.ri-forms{{font-size:11px;color:#e67700;margin-left:auto}}
.btnbig{{width:100%;padding:13px;border-radius:13px;font-size:14px;font-weight:600;cursor:pointer;transition:opacity .2s;margin-bottom:8px;border:none}}
.btn-orange{{background:linear-gradient(135deg,#e67700,#ff922b);color:#fff;box-shadow:0 3px 10px rgba(230,119,0,.25)}}
.btn-orange:hover{{opacity:.9}}
.btn-ghost{{background:transparent;border:1.5px solid #e8e4dc!important;color:#8a8478}}
.btn-ghost:hover{{background:#e8e4dc}}
.final{{text-align:center;padding:2rem 0}}
</style>
</head>
<body>
<div id="app">
<h1>&#128218; TOEIC Verb: Tebak Bentuknya!</h1>
<div class="sub" id="tsub">Semua — {total} kata kerja dari TOEIC 101-200</div>
<div class="filters">
  <button class="fb all-btn on" onclick="setCat('ALL')">Semua ({total})</button>
  <button class="fb" onclick="setCat('REG')">Regular &#10003; ({reg})</button>
  <button class="fb" onclick="setCat('IRR')">Irregular &#9889; ({irr})</button>
</div>
<div id="qv">
  <div class="topbar"><span class="badge" id="rb">Ronde 1</span><span class="ctr" id="ctr">1/--</span></div>
  <div class="pbar-bg"><div class="pbar" id="pb" style="width:0%"></div></div>
  <div class="plabels"><span id="pl">0 selesai</span><span id="pr">-- kartu</span></div>
  <div class="pills">
    <div class="pill pl-p"><span class="dot dp"></span>&nbsp;<span id="sp">0</span>&nbsp;Tahu</div>
    <div class="pill pl-h"><span class="dot dh"></span>&nbsp;<span id="sh">0</span>&nbsp;Hampir</div>
    <div class="pill pl-b"><span class="dot db"></span>&nbsp;<span id="sb">0</span>&nbsp;Belum</div>
  </div>
  <div class="card" id="card" onclick="reveal()">
    <div class="ctag" id="ctag"></div>
    <div class="qlabel">Isi ___ dengan bentuk verb yang tepat:</div>
    <div class="meaning-tag" id="mtag"></div>
    <div class="sentence" id="sentence"></div>
    <div class="hint" id="hint"><div class="hint-ico">&#128070;</div>Ketuk untuk lihat jawaban</div>
    <div class="ans" id="ans" style="display:none">
      <div class="divline"></div>
      <div class="ans-label">Jawaban:</div>
      <div class="ans-word" id="ans-word"></div>
      <div class="ans-form" id="ans-form"></div>
      <table class="vtable">
        <thead><tr><th>V1</th><th>V2</th><th>V3</th><th>V-ing</th></tr></thead>
        <tbody><tr>
          <td class="v1" id="av1"></td>
          <td class="v2" id="av2"></td>
          <td class="v3" id="av3"></td>
          <td class="ving" id="aving"></td>
        </tr></tbody>
      </table>
      <div class="notebox" id="notebox" style="display:none">
        <div class="notelabel">&#9888; CATATAN</div>
        <div class="notetext" id="notetext"></div>
      </div>
      <div class="transbox" id="transbox" style="display:none">
        <div class="translabel">&#127760; TERJEMAHAN</div>
        <div class="transtext" id="transtext"></div>
      </div>
      <div class="reasonbox" id="reasonbox" style="display:none">
        <div class="reasonlabel">&#128161; KENAPA?</div>
        <div class="reasontext" id="reasontext"></div>
      </div>
    </div>
  </div>
  <div class="btnrow" id="ba" style="display:none">
    <button class="cb cb-b" onclick="rate('b')"><span class="cb-ico">&#128533;</span><span>Belum</span><span class="cb-sub">Muncul lagi</span></button>
    <button class="cb cb-h" onclick="rate('h')"><span class="cb-ico">&#129300;</span><span>Hampir</span><span class="cb-sub">Muncul lagi</span></button>
    <button class="cb cb-p" onclick="rate('p')"><span class="cb-ico">&#10003;</span><span>Tahu!</span><span class="cb-sub">Tidak lagi</span></button>
  </div>
</div>
<div id="rv" style="display:none">
  <div class="res">
    <div class="res-ico" id="ri"></div>
    <div class="res-title" id="rt"></div>
    <div class="res-sub" id="rs"></div>
    <div class="srow">
      <div class="sbox sbp"><div class="sn" id="rp">0</div><div class="sl">Tahu</div></div>
      <div class="sbox sbh"><div class="sn" id="rh">0</div><div class="sl">Hampir</div></div>
      <div class="sbox sbb"><div class="sn" id="rbb">0</div><div class="sl">Belum</div></div>
    </div>
    <div id="rlw" style="display:none">
      <div class="rlist-wrap">
        <div class="rlist-ttl">Kartu untuk ronde berikutnya</div>
        <div class="rlist" id="rl"></div>
      </div>
    </div>
    <button class="btnbig btn-orange" id="nb" onclick="nextRonde()"></button>
    <button class="btnbig btn-ghost" onclick="fullRestart()">Mulai dari awal</button>
  </div>
</div>
<div id="fv" style="display:none">
  <div class="final">
    <div style="font-size:60px;margin-bottom:.8rem">&#127942;</div>
    <div class="res-title">Semua verb dikuasai!</div>
    <div style="font-size:13px;color:#8a8478;margin:.5rem 0 1.3rem">V1/V2/V3/V-ing kamu sudah kuat!</div>
    <button class="btnbig btn-orange" onclick="fullRestart()">Ulangi dari awal</button>
  </div>
</div>
</div>
<script>
{js_array}

var LABELS={{REG:"Regular",IRR:"Irregular",ALL:"Semua"}};
function sh(a){{return a.slice().sort(function(){{return Math.random()-.5}})}}
var deck,idx,ronde=1,cp,ch,cbv,rev,toRev,curCat="ALL";

function setCat(c){{
  curCat=c;
  document.querySelectorAll(".fb").forEach(function(b){{b.classList.remove("on")}});
  document.querySelectorAll(".fb").forEach(function(b){{if(b.getAttribute("onclick")==="setCat('"+c+"')") b.classList.add("on")}});
  ronde=1;fullRestart();
}}

function fullRestart(){{
  var src=curCat==="ALL"?V:V.filter(function(v){{return v.cat===curCat}});
  deck=sh(src);
  document.getElementById("tsub").textContent=(curCat==="ALL"?"Semua — "+deck.length+" kata kerja":LABELS[curCat]+" — "+deck.length+" kata");
  go();
}}

function go(){{
  idx=0;cp=0;ch=0;cbv=0;rev=false;toRev=[];
  show("qv");hide("rv");hide("fv");
  document.getElementById("rb").textContent="Ronde "+ronde;
  upStats();showCard();
}}

function nextRonde(){{ronde++;deck=sh(toRev);go()}}

function showCard(){{
  rev=false;
  var q=deck[idx];
  document.getElementById("ctag").textContent=q.cat==="IRR"?"Irregular ⚡":"Regular ✓";
  document.getElementById("mtag").textContent=q.v1+" = "+q.m;
  // Render sentence with blank highlighted
  var s=q.b;
  document.getElementById("sentence").innerHTML=s.replace("___","<span class=\\"blank\\">___</span>");
  document.getElementById("ans-word").textContent=q.aw;
  document.getElementById("ans-form").textContent="Bentuk: "+q.af+" dari "+q.v1;
  document.getElementById("av1").textContent=q.v1;
  document.getElementById("av2").textContent=q.v2;
  document.getElementById("av3").textContent=q.v3;
  document.getElementById("aving").textContent=q.ving;
  var nb=document.getElementById("notebox");
  if(q.n){{document.getElementById("notetext").textContent=q.n;nb.style.display=""}}
  else nb.style.display="none";
  var tb=document.getElementById("transbox");
  if(q.t){{document.getElementById("transtext").textContent=q.t;tb.style.display=""}}
  else tb.style.display="none";
  var rb=document.getElementById("reasonbox");
  if(q.r){{document.getElementById("reasontext").innerHTML=q.r;rb.style.display=""}}
  else rb.style.display="none";
  document.getElementById("ans").style.display="none";
  document.getElementById("hint").style.display="flex";
  document.getElementById("ba").style.display="none";
  document.getElementById("card").className="card";
  document.getElementById("ctr").textContent=(idx+1)+"/"+deck.length;
  document.getElementById("pb").style.width=Math.round(idx/deck.length*100)+"%";
  document.getElementById("pl").textContent=idx+" selesai";
  document.getElementById("pr").textContent=deck.length+" kartu";
}}

function reveal(){{
  if(rev)return;rev=true;
  document.getElementById("ans").style.display="block";
  document.getElementById("hint").style.display="none";
  document.getElementById("ba").style.display="flex";
  document.getElementById("card").className="card done";
}}

function rate(r){{
  if(r==="p") cp++;
  else if(r==="h"){{ch++;toRev.push(deck[idx]);}}
  else{{cbv++;toRev.push(deck[idx]);}}
  upStats();idx++;
  if(idx>=deck.length){{showResult();return;}}
  showCard();
}}

function upStats(){{
  document.getElementById("sp").textContent=cp;
  document.getElementById("sh").textContent=ch;
  document.getElementById("sb").textContent=cbv;
}}

function showResult(){{
  document.getElementById("pb").style.width="100%";
  hide("qv");
  if(toRev.length===0){{show("fv");return;}}
  show("rv");
  document.getElementById("rp").textContent=cp;
  document.getElementById("rh").textContent=ch;
  document.getElementById("rbb").textContent=cbv;
  var pct=Math.round(cp/deck.length*100);
  document.getElementById("ri").textContent=pct>=90?"🌟":pct>=70?"😊":pct>=50?"💪":"😤";
  document.getElementById("rt").textContent="Ronde "+ronde+" selesai!";
  document.getElementById("rs").textContent=pct>=90?"Hampir sempurna! "+toRev.length+" kartu tersisa.":pct>=70?"Bagus! "+toRev.length+" kartu perlu diulang.":pct>=50?"Lumayan! Ulangi "+toRev.length+" kartu.":"Semangat! "+toRev.length+" kartu menunggumu.";
  document.getElementById("nb").textContent="Lanjut Ronde "+(ronde+1)+" → "+toRev.length+" kartu";
  var rl=document.getElementById("rl");rl.innerHTML="";
  toRev.forEach(function(v){{
    var d=document.createElement("div");d.className="ri";
    d.innerHTML="<span class=\\"ri-word\\">"+v.v1+"</span><span class=\\"ri-forms\\">"+v.v2+" / "+v.v3+" / "+v.ving+"</span>";
    rl.appendChild(d);
  }});
  document.getElementById("rlw").style.display="";
}}

function show(id){{document.getElementById(id).style.display=""}}
function hide(id){{document.getElementById(id).style.display="none"}}

setCat("ALL");
</script>
</body>
</html>'''

with open('public/games/flashcard_lengkap_intact/toeic_verb_guess.html', 'w', encoding='utf-8') as f:
    f.write(html)

print(f"DONE! {total} cards ({reg} regular, {irr} irregular)")
