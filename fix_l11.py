import re

content = open("public/games/flashcard_lengkap_intact/mandarin_l11.html", encoding="utf-8").read()

# Fix 1: Remove py-disp from card front
content = content.replace(
    '<div class="py-sub" id="py-disp"></div>',
    ""
)

# Fix 2: Add py-disp inside the answer section
old_dl = '<div class="dl"></div>\n        <div id="ab-id">'
new_dl = '<div class="dl"></div>\n        <div class="atag" style="margin-bottom:2px">PINYIN</div><div class="ans-py" id="py-disp" style="margin-bottom:8px;font-size:18px;font-weight:700;color:#7c3aed;text-align:center"></div>\n        <div id="ab-id">'
content = content.replace(old_dl, new_dl)

# Fix 3: Fix all py values with proper tones
fixes = {
    '"huida"': '"huídá"',
    '"liuyan"': '"liúyán"',
    '"ranhou"': '"rán hòu"',
    '"wenzhang"': '"wénzhāng"',
    '"kan dao"': '"kàn dào"',
    '"kapian"': '"kǎpiàn"',
    '"yijing"': '"yǐjīng"',
    '"renshi"': '"rènshi"',
    '"liao tian er"': '"liáo tiānr"',
    '"cha bu duo"': '"chà bu duō"',
    '"jianmian"': '"jiànmiàn"',
    '"hai mei"': '"hái méi"',
    '"youmo"': '"yōumò"',
    '"huifu"': '"huífù"',
    '"yiqian"': '"yǐqián"',
    '"jingyAn"': '"jīngyàn"',
    '"zhEyang"': '"zhèyàng"',
    '"qiguai"': '"qíguài"',
    '"banfa"': '"bànfǎ"',
    '"bangmang"': '"bāngmáng"',
    '"dasuan"': '"dǎsuàn"',
    '"zhEzhong"': '"zhèzhǒng"',
    '"pian"': '"piān"',
    '"duan"': '"duàn"',
    '"renshi"': '"rènshi"',
    '"youmo"': '"yōumò"',
}

for old, new in fixes.items():
    search = "py:" + old
    replace = "py:" + new
    n = content.count(search)
    if n > 0:
        content = content.replace(search, replace)
        print(f"Fixed {n}x: py:{old}")

with open("public/games/flashcard_lengkap_intact/mandarin_l11.html", "w", encoding="utf-8") as f:
    f.write(content)

print("Done. Verifying py-disp removal from front...")
if "py-sub" not in content:
    print("OK: py-sub removed from front")
else:
    print("WARNING: py-sub still in file")