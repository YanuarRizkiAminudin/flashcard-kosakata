import re

content = open('public/games/flashcard_lengkap_intact/flashcard_lengkap_intact.html', encoding='utf-8').read()

# The problem: English translations contain apostrophes (') which break JS single-quoted strings
# e.g. e:'you're welcome' or e:'it doesn't matter'
# Fix: escape apostrophes in e:'' values

def fix_e_field(m):
    full = m.group(0)
    # Get the e value
    e_match = re.search(r",e:'(.*?)'(?=\})", full)
    if not e_match:
        return full
    e_val = e_match.group(1)
    # Check if it has unescaped apostrophes (not already escaped)
    if "'" in e_val:
        fixed_val = e_val.replace("\\'", "'").replace("'", "\\'")  # normalize then escape
        full = full[:e_match.start()] + ",e:'" + fixed_val + "'" + full[e_match.end():]
    return full

# Fix all cards
new_content = re.sub(r"\{z:'[^']+',p:'[^']+',i:'[^']+',l:'L\d+',e:'[^}]*'\}", fix_e_field, content)

# Also check for cards where e value has apostrophe breaking the pattern
# Find problematic patterns like e:'it doesn't matter'}
problems = re.findall(r",e:'[^']*'[^,}]", new_content)
print(f"Remaining problems: {len(problems)}")
for p in problems[:10]:
    print(' ', repr(p))

open('public/games/flashcard_lengkap_intact/flashcard_lengkap_intact.html', 'w', encoding='utf-8').write(new_content)
print("Done!")
