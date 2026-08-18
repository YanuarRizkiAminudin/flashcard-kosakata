import re
content = open('gen_waimai.py', 'r', encoding='utf-8', errors='replace').read()

# Find all \uXXXX patterns where XXXX contains non-hex chars
# In a raw string context, look for \u followed by chars
for m in re.finditer(r'\\u([0-9a-fA-F]{0,3})(?![0-9a-fA-F])', content):
    pos = m.start()
    line_no = content[:pos].count('\n') + 1
    ctx = content[max(0,pos-30):pos+30]
    print(f"Line {line_no}, pos {pos}: {repr(ctx)}")
