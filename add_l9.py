import re

content = open('public/games/flashcard_lengkap_intact/flashcard_lengkap_intact.html', encoding='utf-8').read()

# Check current
for i in range(1, 10):
    n = len(re.findall(f"l:'L{i}'", content))
    print(f'L{i}: {n}')

# L9 cards from lessonData.js lesson9 vocabulary
new_cards = """
// ═══════════════════════════════════════════
// LESSON 9 — 我的中文課
// ═══════════════════════════════════════════
{z:'句子',p:'jùzi',i:'kalimat (M: 個)',l:'L9'},
{z:'意思',p:'yìsi',i:'arti; makna',l:'L9'},
{z:'懂',p:'dǒng',i:'mengerti; paham',l:'L9'},
{z:'教',p:'jiāo',i:'mengajar; mengajari',l:'L9'},
{z:'覺得',p:'juéde',i:'merasa; berpikir',l:'L9'},
{z:'有點兒',p:'yǒudiǎnr',i:'sedikit; agak',l:'L9'},
{z:'難',p:'nán',i:'sulit; susah',l:'L9'},
{z:'這些',p:'zhèxiē',i:'ini (jamak)',l:'L9'},
{z:'真的',p:'zhēn de',i:'sungguh; benar-benar',l:'L9'},
{z:'好學',p:'hǎo xué',i:'mudah dipelajari',l:'L9'},
{z:'問',p:'wèn',i:'bertanya',l:'L9'},
{z:'非常',p:'fēicháng',i:'sangat; luar biasa',l:'L9'},
{z:'聰明',p:'cōngmíng',i:'pintar; cerdas',l:'L9'},
{z:'想',p:'xiǎng',i:'berpikir; ingin',l:'L9'},
{z:'那麼',p:'nàme',i:'kalau begitu; maka',l:'L9'},
{z:'找',p:'zhǎo',i:'mencari; menemui',l:'L9'},
{z:'書法',p:'shūfǎ',i:'kaligrafi',l:'L9'},
{z:'可是',p:'kěshì',i:'tapi; namun',l:'L9'},
{z:'從',p:'cóng',i:'dari',l:'L9'},
{z:'到',p:'dào',i:'ke; sampai',l:'L9'},
{z:'半',p:'bàn',i:'setengah',l:'L9'},
{z:'英文',p:'Yīngwén',i:'bahasa Inggris',l:'L9'},
{z:'怎麼樣',p:'zěnmeyàng',i:'bagaimana? apa pendapatmu?',l:'L9'},
{z:'先',p:'xiān',i:'dulu; pertama-tama',l:'L9'},
{z:'宿舍',p:'sùshè',i:'asrama; kos (M: 棟)',l:'L9'},
{z:'功課',p:'gōngkè',i:'pekerjaan rumah; PR',l:'L9'},
{z:'再',p:'zài',i:'lalu; kemudian; lagi',l:'L9'},
{z:'一起',p:'yīqǐ',i:'bersama-sama',l:'L9'},
{z:'擺脫',p:'bǎituō',i:'terbebas dari; melepaskan diri',l:'L9'},
"""

# Also update the filter button and title
# Find the anchor: last L8 card before ];
# Insert before the closing ]; of V array
anchor = "];\n\nvar LABELS"
if anchor in content:
    content = content.replace(anchor, new_cards.rstrip() + "\n" + anchor)
    print("Inserted L9 cards!")
else:
    print("ERROR: anchor not found")

# Update filter buttons - add L9 button after L8
old_btn = "<button class=\"fb\" onclick=\"setCat('L8')\">L8 百貨公司</button>"
new_btn = old_btn + "\n  <button class=\"fb\" onclick=\"setCat('L9')\">L9 中文課</button>"
if old_btn in content:
    content = content.replace(old_btn, new_btn)
    print("Added L9 filter button!")

# Update total count in subtitle
old_sub = "450 kosakata"
cards_total = len(re.findall(r"l:'L\d+'", content))
new_sub = f"{cards_total} kosakata"
content = content.replace(old_sub, new_sub)
print(f"Updated total: {cards_total}")

open('public/games/flashcard_lengkap_intact/flashcard_lengkap_intact.html', 'w', encoding='utf-8').write(content)

# Verify
for i in range(1, 10):
    n = len(re.findall(f"l:'L{i}'", content))
    print(f'L{i}: {n}')
