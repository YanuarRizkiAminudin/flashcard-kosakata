import re

content = open("public/games/flashcard_lengkap_intact/flashcard_lengkap_intact.html", encoding="utf-8").read()

# Find all cards missing e field - pattern: {z:'...',p:'...',i:'...',l:'Lx'} with NO ,e:
# These end with l:'Lx'} without ,e:'...'
missing_pattern = re.compile(r"\{z:'([^']+)',p:'([^']+)',i:'([^']+)',l:'(L[2-8])'\}")
matches = list(missing_pattern.finditer(content))
print(f"Cards missing e field: {len(matches)}")
for m in matches[:5]:
    print(f"  {m.group(4)}: {m.group(1)} = {m.group(3)}")
