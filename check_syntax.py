content = open("public/games/flashcard_lengkap_intact/flashcard_lengkap_intact.html", encoding="utf-8").read()

# The issue might be in the e field values containing parentheses with special chars
# Check specifically for the entries we added that might have issues
import re

# Find the problematic entry
prob = re.search(r"\{z:'穿穿看'[^}]+\}", content)
if prob:
    print("穿穿看 entry:", prob.group(0))

# Check for entries with (V V 看 pattern) - the parentheses might cause issues
vvkan = re.search(r"V V 看 pattern", content)
if vvkan:
    print("\nContext around V V 看:")
    print(repr(content[vvkan.start()-50:vvkan.end()+50]))

# Check for 快要 entry
kuaiyao = re.search(r"\{z:'快要'[^}]+\}", content)
if kuaiyao:
    print("\n快要 entry:", kuaiyao.group(0))

# Check for 一樓 entry  
yilou = re.search(r"\{z:'一樓'[^}]+\}", content)
if yilou:
    print("\n一樓 entry:", yilou.group(0))
