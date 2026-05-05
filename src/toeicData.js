// ═══════════════════════════════════════════
// PART 5 — Incomplete Sentences (Q101–130)
// ═══════════════════════════════════════════
const part5 = [
  {
    id: 101, part: 5,
    text: 'Former Sendai Company CEO Ken Nakata spoke about _______ career experiences.',
    options: ['(A) he', '(B) his', '(C) him', '(D) himself'],
    answer: '(B) his',
  },
]

// ═══════════════════════════════════════════
// PART 6 — Text Completion (Q131–146)
// ═══════════════════════════════════════════
const part6 = [
  {
    id: 131, part: 6,
    passageId: 'p6-1',
    groupTitle: 'Questions 131–134 refer to the following announcement.',
    passageText: `Come to the Maxley Heights Center for Horticulture and learn how to create a beautiful, eco-friendly garden for your home or business. [131] We will teach you how to plant a rain garden, which is simply a shallow sunken garden [132] a special soil mix to filter pollutants from rainwater flowing from nearby roads and rooftops. These gardens can be landscaped with native plants and flowers. [133] rain gardens are always beneficial to the local environment. Among other things, [134] improve drainage and protect rivers and streams.\n\nTo register, visit www.maxley-horticulture.org.`,
    text: '131.',
    options: [
      '(A) Children of all ages will enjoy the new exhibits.',
      '(B) Learn about rainfall patterns across the region.',
      '(C) Build a set of simple patio furniture with easy-to-acquire materials.',
      '(D) Next Saturday at 4 P.M., we are hosting a free workshop for the public.',
    ],
    answer: '(D) Next Saturday at 4 P.M., we are hosting a free workshop for the public.',
  },
]

// ═══════════════════════════════════════════
// PART 7 — Reading Comprehension (Q147–200)
// ═══════════════════════════════════════════
const part7 = [
  {
    id: 147, part: 7,
    passageId: 'p7-1',
    groupTitle: 'Questions 147–148 refer to the following information.',
    passageText: `STOP! PLEASE READ FIRST.\n\nThank you for purchasing this item. As you do the unpacking, please verify that all components are included and place them in a safe area to avoid loss or damage. Assemble the item on a soft surface or on the flattened empty box.\n\nFollow the pictures and begin the assembly by placing the main part on its side. Never overtighten any screws or bolts, or you may damage the wood or cushioning. Please visit our Web site to obtain maintenance tips and register your product for warranty coverage: www.indoordelight.com.`,
    text: 'Where is the information most likely found?',
    options: ['(A) On a door', '(B) On a receipt', '(C) In a box', '(D) On a Web site'],
    answer: '(C) In a box',
  },
]

export const questions = [...part5, ...part6, ...part7]
