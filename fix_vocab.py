import json

html = open("public/games/flashcard_lengkap_intact/toeic_test06_vocab.html", encoding="utf-8").read()
script_idx = html.index("<script>")
engine_idx = html.index("\nvar LABELS=", script_idx)
header = html[:script_idx + len("<script>") + 1]
engine = html[engine_idx:]

new_css = """
.tr-txt{font-size:15px;font-weight:700;color:#1a5276;margin-bottom:3px;}
.ety-txt{font-size:11px;color:#7d6608;background:#fef9e7;border:1px solid #f9e79f;border-radius:8px;padding:6px 10px;margin-top:7px;line-height:1.5;text-align:left;width:100%;}
.wf-wrap{margin-top:8px;width:100%;text-align:left;}
.wf-label{font-size:10px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;color:#8a8478;margin-bottom:5px;}
.wf-grid{display:flex;flex-wrap:wrap;gap:5px;}
.wf-item{font-size:11px;background:#eaf4fb;border:1px solid #aed6f1;color:#1a5276;border-radius:8px;padding:3px 9px;font-weight:500;}
.wf-item span{color:#8a8478;font-weight:400;margin-left:3px;}
"""
header = header.replace("</style>", new_css + "</style>")
header = header.replace(
    '        <div class="divline"></div>\n        <div class="pos" id="pos"></div>\n        <div class="meaning" id="meaning"></div>\n        <div class="id-txt" id="idt"></div>\n        <div class="ex-txt" id="ext" style="display:none"></div>\n        <div class="syns" id="syns"></div>',
    '        <div class="divline"></div>\n        <div class="pos" id="pos"></div>\n        <div class="tr-txt" id="tr" style="display:none"></div>\n        <div class="meaning" id="meaning"></div>\n        <div class="id-txt" id="idt"></div>\n        <div class="ex-txt" id="ext" style="display:none"></div>\n        <div class="syns" id="syns"></div>\n        <div class="ety-txt" id="ety" style="display:none"></div>\n        <div class="wf-wrap" id="wf" style="display:none"></div>'
)

old_block = '  document.getElementById("ans").style.display="none";\n  document.getElementById("hint").style.display="flex";\n  document.getElementById("ba").style.display="none";'
new_block = '  var trEl=document.getElementById("tr");\n  if(q.tr){trEl.textContent="\U0001f1ee\U0001f1e9 "+q.tr;trEl.style.display="block";}else{trEl.style.display="none";}\n  var etyEl=document.getElementById("ety");\n  if(q.ety){etyEl.textContent="\U0001f4dc "+q.ety;etyEl.style.display="block";}else{etyEl.style.display="none";}\n  var wfEl=document.getElementById("wf");\n  if(q.wf&&q.wf.length){\n    var wfHtml=\'<div class="wf-label">Word Family</div><div class="wf-grid">\';\n    q.wf.forEach(function(f){wfHtml+=\'<div class="wf-item">\'+f.w+\'<span>(\'+f.p+\')</span></div>\';});\n    wfHtml+=\'</div>\';\n    wfEl.innerHTML=wfHtml;wfEl.style.display="block";\n  }else{wfEl.style.display="none";}\n  document.getElementById("ans").style.display="none";\n  document.getElementById("hint").style.display="flex";\n  document.getElementById("ba").style.display="none";'
engine = engine.replace(old_block, new_block)

# Save header + engine (data will be added separately)
with open("public/games/flashcard_lengkap_intact/toeic_test06_vocab.html", "w", encoding="utf-8") as f:
    f.write(header)
    f.write("var V=[\n")

print("Base written")
