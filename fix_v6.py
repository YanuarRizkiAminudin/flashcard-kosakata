import json, re

# Read current file to get header and engine
html = open("public/games/flashcard_lengkap_intact/toeic_test06_vocab.html", encoding="utf-8").read()
script_idx = html.index("<script>")
v_idx = html.index("var V=[", script_idx)
engine_idx = html.index("\nvar LABELS=", v_idx)
header = html[:script_idx + len("<script>") + 1]
engine = html[engine_idx:]

# Add quiz CSS
quiz_css = """
.quiz-wrap{margin-top:10px;width:100%;text-align:left;}
.quiz-label{font-size:10px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;color:#8a8478;margin-bottom:5px;}
.quiz-q{font-size:13px;color:#374151;line-height:1.7;background:#f8f9fa;border-radius:8px;padding:8px 12px;border-left:3px solid #4f46e5;}
.quiz-blank{display:inline-block;min-width:80px;border-bottom:2px solid #4f46e5;color:#4f46e5;font-weight:700;font-style:normal;}
"""
header = header.replace("</style>", quiz_css + "</style>")

# Add quiz div inside .ans
header = header.replace(
    '        <div class="wf-wrap" id="wf" style="display:none"></div>',
    '        <div class="wf-wrap" id="wf" style="display:none"></div>\n        <div class="quiz-wrap" id="quiz" style="display:none"></div>'
)

# Update showCard to render quiz
old_wf_block = 'wfEl.style.display="none";}\n  document.getElementById("ans").style.display="none";'
new_wf_block = '''wfEl.style.display="none";}
  var quizEl=document.getElementById("quiz");
  if(q.q){
    var qHtml='<div class="quiz-label">\\u2753 Fill in the blank</div><div class="quiz-q">'+q.q.replace(/___/g,'<span class="quiz-blank">'+q.w+'</span>')+'</div>';
    quizEl.innerHTML=qHtml;quizEl.style.display="block";
  }else{quizEl.style.display="none";}
  document.getElementById("ans").style.display="none";'''
engine = engine.replace(old_wf_block, new_wf_block)

# Save header
with open("public/games/flashcard_lengkap_intact/toeic_test06_vocab.html", "w", encoding="utf-8") as f:
    f.write(header)
    f.write("var V=[\n")

print("Header saved")
print("Quiz CSS added:", "quiz-wrap" in header)
print("Quiz div added:", 'id="quiz"' in header)
print("Quiz render added:", "quizEl" in engine)

# Save engine for later
with open("_engine_tmp.txt", "w", encoding="utf-8") as f:
    f.write(engine)
