import json, re

def extract_quoted(s, start):
    q = s[start]
    if q not in ('"', "'"): return None, start
    i, result = start + 1, []
    while i < len(s):
        c = s[i]
        if c == '\\\\':
            i += 1
            if i < len(s):
                nc = s[i]
                if nc == 'n': result.append('\n')
                elif nc == "'": result.append("'")
                elif nc == '"': result.append('"')
                elif nc == '\\\\': result.append('\\\\')
                else: result.append(nc)
        elif c == q: return ''.join(result), i + 1
        else: result.append(c)
        i += 1
    return ''.join(result), i

js = open('src/toeicData.js', encoding='utf-8').read()
reading_qs = json.load(open('reading_qs.json', encoding='utf-8'))
html = open('public/games/flashcard_lengkap_intact/toefl_test.html', encoding='utf-8').read()

# Get header (up to and including <script>)
script_start = html.index('<script>') + len('<script>')
header = html[:script_start]

# Get engine (from // STATE to end)
state_start = html.index('// STATE')
engine = html[state_start:]

# Build LISTENING data from reading_qs.json companion file
# (we already have it from previous extraction)
# For LISTENING, read from the current file but re-serialize cleanly
listen_start = html.index('var LISTENING = [') + len('var LISTENING = [')
listen_end = html.index('];', listen_start)
listen_raw = html[listen_start:listen_end]

# Parse each listening question object
listening_qs = []
for m in re.finditer(r'\{id:\'(L\d+)\'.*?ans:\'(.*?)\'\}', listen_raw, re.DOTALL):
    pass  # We'll rebuild from scratch

print('Header ends:', header[-30:])
print('Engine starts:', engine[:50])
print('Reading qs:', len(reading_qs))
