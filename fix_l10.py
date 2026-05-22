content = open("public/games/flashcard_lengkap_intact/flashcard_lengkap_intact.html", encoding="utf-8").read()

# Check if L10 button exists
has_btn = "setL('L10')" in content
print(f"Has L10 button: {has_btn}")

# Check LABELS
import re
labels_m = re.search(r"var LABELS=\{(.*?)\}", content, re.DOTALL)
if labels_m:
    print(f"LABELS: {labels_m.group(0)[:200]}")

# Check filter buttons
btn_m = re.findall(r"onclick=\"setL\('L\d+'\)\"", content)
print(f"Filter buttons: {btn_m}")
