import re

engine = """
];

var LABELS={VERB:"Verb",NOUN:"Noun",ADJ:"Adjective",ADV:"Adverb",PHRASE:"Phrase",ALL:"All"};
function sh(a){return a.slice().sort(function(){return Math.random()-.5;});}
var deck,idx,ronde,cp,ch,cbv,rev,toRev,curCat="ALL";

function setCat(c){
  curCat=c;
  document.querySelectorAll(".fb").forEach(function(b){b.classList.remove("on");});
  document.querySelectorAll(".fb").forEach(function(b){
    if(b.getAttribute("onclick")==="setCat('"+c+"')") b.classList.add("on");
  });
  ronde=1; fullRestart();
}

function fullRestart(){
  var src=curCat==="ALL"?V:V.filter(function(v){return v.cat===curCat;});
  deck=sh(src);
  var total=deck.length;
  document.getElementById("tsub").textContent=
    (curCat==="ALL"?"All categories \u2014 "+total+" words":LABELS[curCat]+" \u2014 "+total+" words");
  go();
}

function go(){
  idx=0;cp=0;ch=0;cbv=0;rev=false;toRev=[];
  show("qv");hide("rv");hide("fv");
  document.getElementById("rb").textContent="Round "+ronde;
  upStats();showCard();
}

function nextRonde(){ronde++;deck=sh(toRev);go();}

function showCard(){
  rev=false;
  var q=deck[idx];
  var el=document.getElementById("word");
  el.textContent=q.w;
  var l=q.w.length;
  el.className="word "+(l<=6?"big":l<=10?"med":l<=16?"sm":l<=24?"xs":"xxs");
  document.getElementById("ctag").textContent=LABELS[q.cat]||q.cat;
  document.getElementById("pos").textContent=q.pos;
  var trEl=document.getElementById("tr");
  if(q.tr){trEl.textContent="\U0001f1ee\U0001f1e9 "+q.tr;trEl.style.display="block";}else{trEl.style.display="none";}
  document.getElementById("meaning").textContent=q.m;
  document.getElementById("idt").textContent=q.i;
  var extEl=document.getElementById("ext");
  if(q.e){extEl.textContent='"'+q.e+'"';extEl.style.display="block";}
  else{extEl.style.display="none";}
  var synsEl=document.getElementById("syns");
  synsEl.innerHTML="";
  if(q.s){q.s.forEach(function(s){
    var span=document.createElement("span");
    span.className="syn";span.textContent=s;
    synsEl.appendChild(span);
  });}
  var etyEl=document.getElementById("ety");
  if(q.ety){etyEl.textContent="\U0001f4dc "+q.ety;etyEl.style.display="block";}else{etyEl.style.display="none";}
  var wfEl=document.getElementById("wf");
  if(q.wf&&q.wf.length){
    var wfHtml='<div class="wf-label">Word Family</div><div class="wf-grid">';
    q.wf.forEach(function(f){wfHtml+='<div class="wf-item">'+f.w+'<span>('+f.p+')</span></div>';});
    wfHtml+='</div>';
    wfEl.innerHTML=wfHtml;wfEl.style.display="block";
  }else{wfEl.style.display="none";}
  document.getElementById("ans").style.display="none";
  document.getElementById("hint").style.display="flex";
  document.getElementById("ba").style.display="none";
  document.getElementById("card").className="card";
  document.getElementById("ctr").textContent=(idx+1)+"/"+deck.length;
  var pct=Math.round(idx/deck.length*100);
  document.getElementById("pb").style.width=pct+"%";
  document.getElementById("pl").textContent=idx+" done";
  document.getElementById("pr").textContent=deck.length+" cards";
}

function reveal(){
  if(rev)return;rev=true;
  document.getElementById("ans").style.display="block";
  document.getElementById("hint").style.display="none";
  document.getElementById("ba").style.display="flex";
  document.getElementById("card").className="card done";
}

function rate(r){
  var q=deck[idx];
  if(r==="p") cp++;
  else if(r==="h"){ch++;toRev.push(q);}
  else{cbv++;toRev.push(q);}
  upStats();idx++;
  if(idx>=deck.length){showResult();return;}
  showCard();
}

function upStats(){
  document.getElementById("sp").textContent=cp;
  document.getElementById("sh").textContent=ch;
  document.getElementById("sb").textContent=cbv;
}

function showResult(){
  document.getElementById("pb").style.width="100%";
  hide("qv");
  if(toRev.length===0){show("fv");return;}
  show("rv");
  document.getElementById("rp").textContent=cp;
  document.getElementById("rh").textContent=ch;
  document.getElementById("rbb").textContent=cbv;
  var pct=Math.round(cp/deck.length*100);
  document.getElementById("ri").textContent=pct>=90?"&#127775;":pct>=70?"&#128522;":pct>=50?"&#128170;":"&#128548;";
  document.getElementById("rt").textContent="Round "+ronde+" complete!";
  document.getElementById("rs").textContent=
    pct>=90?"Almost perfect! "+toRev.length+" cards left.":
    pct>=70?"Great job! "+toRev.length+" cards to review.":
    pct>=50?"Good effort! Review "+toRev.length+" cards.":
    "Keep going! "+toRev.length+" cards waiting.";
  document.getElementById("nb").textContent="Round "+(ronde+1)+" \u2192 "+toRev.length+" cards";
  var rl=document.getElementById("rl");
  rl.innerHTML="";
  toRev.forEach(function(v){
    var d=document.createElement("div");d.className="ri";
    d.innerHTML="<span class='ri-word'>"+v.w+"</span><div><div class='ri-pos'>"+v.pos+"</div></div><span class='ri-id'>"+v.m+"</span>";
    rl.appendChild(d);
  });
  document.getElementById("rlw").style.display="";
}

function show(id){document.getElementById(id).style.display="";}
function hide(id){document.getElementById(id).style.display="none";}

setCat("ALL");
</script>
</body>
</html>"""

with open("public/games/flashcard_lengkap_intact/toeic_test06_vocab.html", "a", encoding="utf-8") as f:
    f.write(engine)

final = open("public/games/flashcard_lengkap_intact/toeic_test06_vocab.html", encoding="utf-8").read()
wc = len(re.findall(r'"w":', final))
has_tr = '"tr"' in final
has_ety = '"ety"' in final
has_wf = '"wf"' in final
has_close = '</html>' in final
kb = len(final)//1024
print(f"Words={wc} tr={has_tr} ety={has_ety} wf={has_wf} close={has_close} size={kb}KB")
