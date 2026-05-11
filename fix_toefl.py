import json

# Define all 100 listening questions cleanly
LISTENING = [
  # Conversation 1 (Q1-5)
  {"id":"L1","sec":"L","audio":"Test_01.mp3","grp":"Conversation 1 (Q1-5)","passage":"[Listen to a conversation between a student and a professor about a research paper deadline.]","text":"1. Why does the student visit the professor?","opts":["(A) To submit a completed paper","(B) To request an extension on her assignment","(C) To ask about the grading criteria","(D) To get feedback on her draft"],"ans":"(B) To request an extension on her assignment"},
  {"id":"L2","sec":"L","audio":"Test_01.mp3","grp":"Conversation 1 (Q1-5)","passage":"[Listen to a conversation between a student and a professor about a research paper deadline.]","text":"2. What does the professor say about the deadline?","opts":["(A) It cannot be changed under any circumstances","(B) A one-week extension is possible","(C) The deadline was already extended once","(D) Students must submit by midnight"],"ans":"(B) A one-week extension is possible"},
  {"id":"L3","sec":"L","audio":"Test_01.mp3","grp":"Conversation 1 (Q1-5)","passage":"[Listen to a conversation between a student and a professor about a research paper deadline.]","text":"3. What problem does the student mention?","opts":["(A) She lost her notes","(B) Her computer broke down","(C) She has been ill for several days","(D) She misunderstood the assignment"],"ans":"(C) She has been ill for several days"},
  {"id":"L4","sec":"L","audio":"Test_01.mp3","grp":"Conversation 1 (Q1-5)","passage":"[Listen to a conversation between a student and a professor about a research paper deadline.]","text":"4. What does the professor ask the student to provide?","opts":["(A) A doctor's note","(B) A partial draft","(C) An email confirmation","(D) A revised outline"],"ans":"(A) A doctor's note"},
  {"id":"L5","sec":"L","audio":"Test_01.mp3","grp":"Conversation 1 (Q1-5)","passage":"[Listen to a conversation between a student and a professor about a research paper deadline.]","text":"5. What will the student most likely do next?","opts":["(A) Drop the course","(B) Submit the paper immediately","(C) Get documentation from the health center","(D) Ask another professor for help"],"ans":"(C) Get documentation from the health center"},
]

print(json.dumps(LISTENING[3], ensure_ascii=False))
print("OK - apostrophes in double-quoted JSON strings are safe")
