import re

content = open("src/toeicData.js", encoding="utf-8").read()

# Find all Part 7 question blocks
pattern = r'\{id:(\d+),part:7,passageId:(\S+?),groupTitle:(\S.*?),passageText:(\S+?),text:(\S.*?),options:(\[.*?\]),answer:(\S.*?)\}'
matches = list(re.finditer(pattern, content, re.DOTALL))
print(f"Found {len(matches)} Part 7 questions")
for m in matches[:3]:
    print(f"  ID: {m.group(1)}, passageText var: {m.group(4)[:30]}")
