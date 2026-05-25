content = open("public/games/flashcard_lengkap_intact/flashcard_lengkap_intact.html", encoding="utf-8").read()

new_cards = """
{z:'打電話',p:'dǎ diànhuà',i:'menelepon / membuat panggilan',l:'L10',e:'to make a phone call'},
{z:'接電話',p:'jiē diànhuà',i:'menjawab telepon',l:'L10',e:'to answer the phone'},
{z:'電話',p:'diànhuà',i:'telepon',l:'L10',e:'telephone; phone call'},
{z:'號碼',p:'hàomǎ',i:'nomor',l:'L10',e:'number; phone number'},
{z:'擔心',p:'dānxīn',i:'khawatir',l:'L10',e:'to worry; to be worried'},
{z:'告訴',p:'gàosù',i:'memberi tahu',l:'L10',e:'to tell; to inform'},
{z:'忘記',p:'wàngjì',i:'lupa',l:'L10',e:'to forget'},
{z:'好了',p:'hǎo le',i:'sudah sembuh / menjadi baik',l:'L10',e:'to be better; to have recovered'},
{z:'嘴（巴）',p:'zuǐ (ba)',i:'mulut',l:'L10',e:'mouth'},
{z:'臉',p:'liǎn',i:'wajah',l:'L10',e:'face'},
{z:'耳朵',p:'ěrduo',i:'telinga',l:'L10',e:'ear'},
{z:'眼睛',p:'yǎnjīng',i:'mata',l:'L10',e:'eye'},
{z:'眼鏡',p:'yǎnjìng',i:'kacamata',l:'L10',e:'glasses; spectacles'},
{z:'肚子',p:'dùzi',i:'perut',l:'L10',e:'stomach; belly'},
{z:'對',p:'duì',i:'benar / betul',l:'L10',e:'correct; right'},
{z:'香蕉',p:'xiāngjiāo',i:'pisang',l:'L10',e:'banana'},
{z:'頭',p:'tóu',i:'kepala',l:'L10',e:'head'},
{z:'頭髮',p:'tóufǎ',i:'rambut',l:'L10',e:'hair (on head)'},
{z:'痛',p:'tòng',i:'sakit / nyeri',l:'L10',e:'pain; to hurt; painful'},
{z:'洗',p:'xǐ',i:'mencuci',l:'L10',e:'to wash'},
{z:'手',p:'shǒu',i:'tangan',l:'L10',e:'hand'},
{z:'手指',p:'shǒuzhǐ',i:'jari tangan',l:'L10',e:'finger'},
"""

# Find the last L10 entry and insert after it
import re
# Find position of last l:'L10' entry closing
last_pos = content.rfind("l:'L10'")
close_pos = content.index("},", last_pos) + 2
# Insert new cards right after
content = content[:close_pos] + "\n" + new_cards.strip() + "\n" + content[close_pos:]

# Verify
count = len(re.findall(r"l:'L10'", content))
print(f"L10 cards now: {count}")

with open("public/games/flashcard_lengkap_intact/flashcard_lengkap_intact.html", "w", encoding="utf-8") as f:
    f.write(content)
print("Saved OK")
