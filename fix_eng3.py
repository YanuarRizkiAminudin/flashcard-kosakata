import re
content = open("public/games/flashcard_lengkap_intact/flashcard_lengkap_intact.html", encoding="utf-8").read()
missing = re.findall(r"\{z:'[^']+',p:'[^']+',i:'[^']+',l:'L[2-8]'\}", content)
print(f"Cards still missing e field: {len(missing)}")
if missing:
    for m in missing[:5]:
        print(f"  {m[:80]}")
total = len(re.findall(r"l:'L\d+'", content))
print(f"Total cards: {total}")
