content = open('public/games/flashcard_lengkap_intact/flashcard_lengkap_intact.html', encoding='utf-8').read()

# Fix specific problematic English values with apostrophes
fixes = [
    ("e:'o\\'clock'", "e:'o clock'"),
    ("e:'by the way; that\\'s right'", "e:'by the way; thats right'"),
    ("e:'no problem; it doesn\\'t matter'", "e:'no problem; it does not matter'"),
    # Also fix any remaining unescaped ones
    ("e:'you are welcome'", "e:'you are welcome'"),  # already fine
]

for old, new in fixes:
    if old in content:
        content = content.replace(old, new)
        print(f'Fixed: {old[:40]}')

# More robust: replace all e:'...' values that contain apostrophes
import re

def safe_e(m):
    val = m.group(1)
    # Replace apostrophes with backtick-safe version
    val = val.replace("'", "\u2019")  # use right single quotation mark
    return f",e:'{val}'"

content = re.sub(r",e:'((?:[^'\\]|\\.)*)'", safe_e, content)

# Verify no JS-breaking apostrophes remain in e fields
problems = re.findall(r",e:'[^']*'[^,}\n]", content)
print(f"Remaining problems after fix: {len(problems)}")

open('public/games/flashcard_lengkap_intact/flashcard_lengkap_intact.html', 'w', encoding='utf-8').write(content)
print("Saved!")
