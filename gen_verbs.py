import csv, re

verbs = []
with open('verb_data.csv', encoding='utf-8') as f:
    for line in f:
        line = line.strip()
        if not line:
            continue
        parts = line.split(',', 8)
        if len(parts) < 7:
            continue
        v1 = parts[0].strip()
        v2 = parts[1].strip()
        v3 = parts[2].strip()
        ving = parts[3].strip()
        meaning = parts[4].strip()
        cat = parts[5].strip()
        example = parts[6].strip()
        note = parts[7].strip() if len(parts) > 7 else ''
        verbs.append({'v1':v1,'v2':v2,'v3':v3,'ving':ving,'m':meaning,'cat':cat,'e':example,'n':note})

print(f'Total verbs: {len(verbs)}')

js = 'var V=[\n'
for v in verbs:
    e = v['e'].replace('"', '\\"')
    n = v['n'].replace('"', '\\"')
    js += '  {v1:"' + v['v1'] + '",v2:"' + v['v2'] + '",v3:"' + v['v3'] + '",ving:"' + v['ving'] + '",m:"' + v['m'] + '",cat:"' + v['cat'] + '",e:"' + e + '",n:"' + n + '"},\n'
js += '];\n'

with open('verb_js.txt','w',encoding='utf-8') as f:
    f.write(js)
print('Done')
