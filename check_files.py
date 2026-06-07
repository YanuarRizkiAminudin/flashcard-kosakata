# Count cards in each file
import re

for fname, label in [
    ("public/games/flashcard_lengkap_intact/mandarin_adverbs_3lang.html", "Adverbs 3 Lang"),
    ("public/games/flashcard_lengkap_intact/mandarin_mei_vocab.html", "Mei Vocab"),
]:
    content = open(fname, encoding="utf-8").read()
    # Try different patterns
    cards1 = len(re.findall(r"\{z:", content))
    cards2 = len(re.findall(r"\{w:", content))
    cards3 = len(re.findall(r"id:\s*\d+", content))
    title_m = re.search(r"<title>(.*?)</title>", content)
    title = title_m.group(1) if title_m else "?"
    print(f"{label}: {title}")
    print(f"  {z} entries, {w} w: entries, {id} id: entries")
