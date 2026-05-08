import re

content = open('public/games/flashcard_lengkap_intact/wo_shi_zhen_de.html', encoding='utf-8').read()

# Gemini timing starts at 23s but actual vocal starts at 37.5s
# Offset = 37.5 - 23 = 14.5 seconds
OFFSET = 14.5

def shift(m):
    t = float(m.group(1))
    return f'[{t + OFFSET:.1f},'

new_content = re.sub(r'\[(\d+(?:\.\d+)?),', shift, content)

open('public/games/flashcard_lengkap_intact/wo_shi_zhen_de.html', 'w', encoding='utf-8').write(new_content)

# Verify first few
times = re.findall(r'\[(\d+(?:\.\d+)?),', new_content)[:5]
print('First 5 timestamps after shift:', times)
print('Done!')
