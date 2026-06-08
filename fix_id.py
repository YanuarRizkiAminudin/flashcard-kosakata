import re

def fix_file(path):
    c = open(path, encoding="utf-8").read()
    
    # 1. Remove ID radio button from lang-switch
    c = re.sub(r'\s*<input type="radio" name="lang" id="lid" value="id">\s*\n\s*<label for="lid">[^<]*</label>', "", c)
    
    # 2. Remove front-id div block
    c = re.sub(r'\s*<!-- ID front -->\s*\n\s*<div id="front-id"[^>]*>.*?</div>\s*\n', "", c, flags=re.DOTALL)
    c = re.sub(r'\s*<div id="front-id"[^>]*>.*?</div>', "", c, flags=re.DOTALL)
    
    # 3. Remove Indonesian ans-block
    c = re.sub(r'\s*<div class="ans-block">\s*\n\s*<div class="ans-lang-tag">[^<]*Indonesia[^<]*</div>\s*\n\s*<div class="ans-id"[^>]*></div>\s*\n\s*</div>', "", c)
    
    # 4. Fix JS: hide front-id calls
    c = c.replace('hide("front-zh"); hide("front-id"); hide("front-en");', 'hide("front-zh"); hide("front-en");')
    
    # 5. Fix JS: remove id branch in lang check
    c = re.sub(r'\s*\} else if \(lang === "id"\) \{.*?show\("front-id"\);.*?document\.getElementById\("id-disp"\)\.textContent = q\.id;', "", c, flags=re.DOTALL)
    
    # 6. Remove ans-id assignment
    c = re.sub(r'\s*document\.getElementById\("ans-id"\)\.textContent = q\.id;', "", c)
    
    # 7. Update subtitle
    c = c.replace("30 kata · Mandarin + Indonesia + English", "30 kata · Mandarin + English")
    c = c.replace("Mandarin + Indonesia + English", "Mandarin + English")
    
    open(path, "w", encoding="utf-8").write(c)
    
    # Verify
    c2 = open(path, encoding="utf-8").read()
    remaining = c2.count("Indonesia") + c2.count("front-id") + c2.count("ans-id")
    print(f"{path}: remaining ID refs = {remaining}")

fix_file("public/games/flashcard_lengkap_intact/mandarin_adverbs_3lang.html")
fix_file("public/games/flashcard_lengkap_intact/mandarin_mei_vocab.html")
