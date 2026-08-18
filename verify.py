content = open('public/games/flashcard_lengkap_intact/waimai_video.html', encoding='utf-8').read()
print('File size:', len(content), 'chars')
# Check for Chinese title
has_waimai = '\u5916\u8ce3\u54e1' in content
print('Title check (外賣員):', has_waimai)
print('Orange color check:', '#d97706' in content)
print('Amber color check:', '#f59e0b' in content)
print('Vocab count:', content.count('{t:"VOCAB"'))
print('Sent count:', content.count('{t:"SENT"'))
# show first vocab entry
idx = content.find('{t:"VOCAB"')
print('First vocab entry:', content[idx:idx+100])
