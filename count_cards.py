import re
content = open('public/games/flashcard_lengkap_intact/flashcard_lengkap_intact.html', encoding='utf-8').read()
total = len(re.findall(r"l:'L\d+'", content))
print('Total cards:', total)
for i in range(1,10):
    n = len(re.findall(f"l:'L{i}'", content))
    if n: print(f'  L{i}: {n}')
en_count = len(re.findall(r",e:'", content))
print(f'Cards with English: {en_count}')
