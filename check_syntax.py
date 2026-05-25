content = open("public/games/flashcard_lengkap_intact/flashcard_lengkap_intact.html", encoding="utf-8").read()

# The backslash itself might be the issue in the count - verify the actual fix
import re
m = re.search(r"不要.*?e:'[^']*'", content, re.DOTALL)
if m:
    print("不要 entry:", m.group(0)[:100])

# Count quotes properly - escaped quotes should not count
v_start = content.index("var V=[")
v_end = content.index("];", v_start) + 2
v_section = content[v_start:v_end]

# Better check: use a proper JS string parser approach
# Find any e: or i: value that contains an unescaped single quote
bad = re.findall(r"(?:,e:|,i:)'((?:[^'\\]|\\.)*(?:[^\\])'[^,}\n])", v_section)
print(f"Bad entries: {len(bad)}")
for b in bad[:5]:
    print(f"  {b[:80]}")
