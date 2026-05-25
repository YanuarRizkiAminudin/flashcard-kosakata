import re
content = open("public/games/flashcard_lengkap_intact/flashcard_lengkap_intact.html", encoding="utf-8").read()

# Find all cards and check which ones are missing the e field
cards = re.findall(r"\{z:'[^']+',p:'[^']+',i:'[^']+',l:'(L\d+)'(?:,e:'([^']*)')?\}", content)
missing = [(l, z) for l, e in cards if not e 
           for z in re.findall(r"\{z:'([^']+)',p:'[^']+',i:'[^']+',l:'" + l + r"'(?!,e:)", content)]

# Count by lesson
from collections import Counter
by_lesson = Counter()
total_by_lesson = Counter()
for l, e in cards:
    total_by_lesson[l] += 1
    if not e:
        by_lesson[l] += 1

print("Cards missing 'e' field by lesson:")
for lesson in sorted(total_by_lesson.keys()):
    missing_count = by_lesson.get(lesson, 0)
    total = total_by_lesson[lesson]
    print(f"  {lesson}: {missing_count}/{total} missing")
