import re

content = open("public/games/flashcard_lengkap_intact/flashcard_lengkap_intact.html", encoding="utf-8").read()

remaining = {
    "沒問題": "no problem; no worries",
    "明天見": "see you tomorrow",
    "再見": "goodbye; see you",
    "看": "to read; to look; to watch",
    "玩": "to play; to have fun",
    "那些": "those (plural)",
    "點心": "snack; dim sum",
    "甜點": "dessert; sweets",
    "甜": "sweet",
    "開心": "happy; joyful",
    "給": "to give; for",
    "一共": "in total; altogether",
    "百": "hundred",
    "千": "thousand",
    "萬": "ten thousand",
    "零": "zero",
    "您": "you (polite form)",
    "多": "many; more; much",
    "音樂": "music",
    "幫": "to help",
    "可以": "can; may; to be allowed",
    "聽說": "I heard that; they say",
    "會": "can; to know how to",
    "海邊": "seaside; beach",
    "上車": "to get on a vehicle",
    "走": "to walk; to go; to leave",
    "錶": "watch (timepiece)",
    "手錶": "wristwatch",
    "怎麼": "how; why",
    "旅館": "hotel; inn",
    "等": "to wait; to wait for",
    "地鐵": "subway; underground train",
    "公共汽車": "public bus",
    "車": "car; vehicle",
    "車站": "station; bus stop",
    "架": "measure word for aircraft",
    "飛": "to fly",
    "起飛": "to take off (aircraft)",
    "馬路": "road; street",
    "街": "street; road",
    "地方": "place; location",
    "郵局": "post office",
    "寄": "to mail; to send",
    "信": "letter (mail)",
    "封": "measure word for letters",
    "信封": "envelope",
    "穿穿看": "try wearing it (V V 看 pattern)",
    "一樓": "first floor; ground floor",
    "快要": "about to; almost (快要…了)",
}

missing_pattern = re.compile(r"(\{z:'([^']+)',p:'([^']+)',i:'([^']+)',l:'(L[2-8])'\})")
matches = list(missing_pattern.finditer(content))
print(f"Remaining missing: {len(matches)}")

fixed = 0
still_missing = []
new_content = content

for m in matches:
    full_match = m.group(1)
    zh = m.group(2)
    lesson = m.group(5)
    
    if zh in remaining:
        eng = remaining[zh]
        replacement = full_match.replace(
            f",l:'{lesson}'}}",
            f",l:'{lesson}',e:'{eng}'}}"
        )
        new_content = new_content.replace(full_match, replacement, 1)
        fixed += 1
    else:
        still_missing.append(f"{lesson}: {zh}")

print(f"Fixed: {fixed}, Still missing: {len(still_missing)}")
for s in still_missing:
    print(f"  {s}")

with open("public/games/flashcard_lengkap_intact/flashcard_lengkap_intact.html", "w", encoding="utf-8") as f:
    f.write(new_content)
print("Saved")
