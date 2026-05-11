html = open("public/games/flashcard_lengkap_intact/toefl_test.html", encoding="utf-8").read()
state_idx = html.index("// STATE")
engine = html[state_idx:]
# Find opts rendering
opts_idx = engine.find("q.opts")
if opts_idx >= 0:
    print("Found q.opts at:", opts_idx)
    print(engine[opts_idx-50:opts_idx+100])
else:
    print("q.opts NOT found")
    # Find where options are rendered
    map_idx = engine.find(".map(function(opt)")
    print("map at:", map_idx)
    if map_idx >= 0:
        print(engine[map_idx-100:map_idx+200])
