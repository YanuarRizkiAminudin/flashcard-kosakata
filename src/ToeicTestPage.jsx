import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './ToeicTestPage.css'

// ── PART 5 — Incomplete Sentences (sample TOEIC-style questions)
const part5 = [
  {
    id: 101,
    sentence: 'Former Sendai Company CEO Ken Nakata spoke about _______ career experiences.',
    options: ['A) he', 'B) his', 'C) him', 'D) himself'],
    answer: 'B) his',
  },
  {
    id: 102,
    sentence: 'Passengers who will be taking a _______ domestic flight should go to Terminal A.',
    options: ['A) connectivity', 'B) connects', 'C) connect', 'D) connecting'],
    answer: 'D) connecting',
  },
  {
    id: 103,
    sentence: 'Fresh and _______ apple-cider donuts are available at the retail shop for $6 per dozen.',
    options: ['A) eaten', 'B) open', 'C) tasty', 'D) free'],
    answer: 'C) tasty',
  },
  {
    id: 104,
    sentence: 'Zahn Flooring has the widest selection of _______ in the United Kingdom.',
    options: ['A) paints', 'B) tiles', 'C) furniture', 'D) curtains'],
    answer: 'B) tiles',
  },
  {
    id: 105,
    sentence: 'One responsibility of the IT department is to ensure that the company is using _______ software.',
    options: ['A) update', 'B) updating', 'C) updates', 'D) updated'],
    answer: 'D) updated',
  },
  {
    id: 106,
    sentence: 'It is wise to check a company\'s dress code _______ visiting its head office.',
    options: ['A) so', 'B) how', 'C) like', 'D) before'],
    answer: 'D) before',
  },
  {
    id: 107,
    sentence: 'Wexler Store\'s management team expects that employees will _______ support any new hires.',
    options: ['A) enthusiastically', 'B) enthusiasm', 'C) enthusiastic', 'D) enthused'],
    answer: 'A) enthusiastically',
  },
  {
    id: 108,
    sentence: 'Wheel alignments and brake system _______ are part of our vehicle service plan.',
    options: ['A) inspects', 'B) inspector', 'C) inspected', 'D) inspections'],
    answer: 'D) inspections',
  },
  {
    id: 109,
    sentence: 'Registration for the Marketing Coalition Conference is now open _______ September 30.',
    options: ['A) until', 'B) into', 'C) yet', 'D) while'],
    answer: 'A) until',
  },
  {
    id: 110,
    sentence: 'Growth in the home entertainment industry has been _______ this quarter.',
    options: ['A) separate', 'B) limited', 'C) willing', 'D) assorted'],
    answer: 'B) limited',
  },
]

// ── PART 6 — Text Completion (passage + blanks)
const part6 = [
  {
    id: 131,
    passage: 'Come to the Maxley Heights Center for Horticulture and learn how to create a beautiful, eco-friendly garden. [131] We will teach you how to plant a rain garden, which is simply a shallow sunken garden [132] a special soil mix to filter pollutants from rainwater. These gardens can be landscaped with native plants and flowers. [133] rain gardens are always beneficial to the local environment. Among other things, [134] improve drainage and protect rivers and streams.',
    questions: [
      {
        num: 131,
        options: [
          'A) Children of all ages will enjoy the new exhibits.',
          'B) Learn about rainfall patterns across the region.',
          'C) Build a set of simple patio furniture.',
          'D) Next Saturday at 4 P.M., we are hosting a free workshop.',
        ],
        answer: 'D) Next Saturday at 4 P.M., we are hosting a free workshop.',
      },
      {
        num: 132,
        options: ['A) to use', 'B) used to', 'C) by using', 'D) that uses'],
        answer: 'D) that uses',
      },
      {
        num: 133,
        options: ['A) Best of all', 'B) For example', 'C) In any event', 'D) As a matter of fact'],
        answer: 'A) Best of all',
      },
      {
        num: 134,
        options: ['A) we', 'B) they', 'C) both', 'D) yours'],
        answer: 'B) they',
      },
    ],
  },
]

// ── PART 7 — Reading Comprehension
const part7 = [
  {
    id: 'p7-1',
    title: 'Questions 147–148',
    passage: `STOP! PLEASE READ FIRST.

Thank you for purchasing this item. As you do the unpacking, please verify that all components are included and place them in a safe area to avoid loss or damage. Assemble the item on a soft surface or on the flattened empty box.

Follow the pictures and begin the assembly by placing the main part on its side. Never overtighten any screws or bolts, or you may damage the wood or cushioning. Please visit our Web site to obtain maintenance tips and register your product for warranty coverage: www.indoordelight.com.`,
    questions: [
      {
        num: 147,
        text: 'Where is the information most likely found?',
        options: ['A) On a door', 'B) On a receipt', 'C) In a box', 'D) On a Web site'],
        answer: 'C) In a box',
      },
      {
        num: 148,
        text: 'What kind of item is most likely discussed?',
        options: ['A) A desktop computer', 'B) A piece of furniture', 'C) A household appliance', 'D) A power tool'],
        answer: 'B) A piece of furniture',
      },
    ],
  },
  {
    id: 'p7-2',
    title: 'Questions 151–152',
    passage: `The Bryant Foyer is one of the premier event spaces in our area. Set on a hill, it has expansive windows that provide sweeping views of the adjacent botanical gardens and the river. Built in 1897, it was the home of the Francona Charitable Trust until its renovation just over a year ago. Today, the space can accommodate up to 200 guests and is ideal for wedding receptions, office parties, and panel presentations.

The on-site restaurant, Andito's, caters our events and also operates as its own business. This farm-to-table restaurant, headed by chef Michaela Rymond, meets all dietary needs and has revolutionized the local food scene. Area residents know to plan far in advance to get a seat.

To reserve the event space or to make a dinner reservation, give us a call at 216-555-0157.`,
    questions: [
      {
        num: 151,
        text: 'What is indicated about the Bryant Foyer?',
        options: [
          'A) It is located on the shores of a lake.',
          'B) It has recently been renovated.',
          'C) It will build a botanical garden for guests.',
          'D) It is reserved solely for corporate events.',
        ],
        answer: 'B) It has recently been renovated.',
      },
      {
        num: 152,
        text: "What is suggested about Andito's?",
        options: [
          'A) It was started by an international chef.',
          'B) It offers limited menu options.',
          'C) It is now funded by a charitable organization.',
          'D) It is very popular with local residents.',
        ],
        answer: 'D) It is very popular with local residents.',
      },
    ],
  },
]

export default function ToeicTestPage() {
  const navigate = useNavigate()
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState('part5')

  const handleAnswer = (qid, val) => {
    if (submitted) return
    setAnswers(prev => ({ ...prev, [qid]: val }))
  }

  const allQuestions = [
    ...part5.map(q => ({ id: q.id, answer: q.answer })),
    ...part6.flatMap(p => p.questions.map(q => ({ id: q.num, answer: q.answer }))),
    ...part7.flatMap(p => p.questions.map(q => ({ id: q.num, answer: q.answer }))),
  ]

  const totalQ = allQuestions.length
  const score = submitted
    ? allQuestions.filter(q => answers[q.id] === q.answer).length
    : 0

  const getClass = (qid, opt, correctAns) => {
    if (!submitted) return answers[qid] === opt ? 'opt selected' : 'opt'
    if (opt === correctAns) return 'opt correct'
    if (answers[qid] === opt && opt !== correctAns) return 'opt wrong'
    return 'opt'
  }

  return (
    <div className="test-page">
      <div className="test-topbar">
        <button className="back-btn" onClick={() => navigate('/')}>← Back</button>
        <div className="test-title-wrap">
          <h1 className="test-title">TOEIC Reading Test</h1>
          <span className="test-sub">Part 5 · Part 6 · Part 7</span>
        </div>
        {!submitted
          ? <button className="submit-btn" onClick={() => setSubmitted(true)}>Submit Answers</button>
          : <div className="score-box">Score: {score}/{totalQ}</div>
        }
      </div>

      <div className="test-tabs">
        {['part5', 'part6', 'part7'].map(t => (
          <button
            key={t}
            className={`test-tab ${activeTab === t ? 'on' : ''}`}
            onClick={() => setActiveTab(t)}
          >
            {t === 'part5' ? 'Part 5 — Sentences' : t === 'part6' ? 'Part 6 — Text Completion' : 'Part 7 — Reading'}
          </button>
        ))}
      </div>

      <div className="test-body">

        {/* ── PART 5 ── */}
        {activeTab === 'part5' && (
          <div className="part-section">
            <div className="part-header">
              <span className="part-label">PART 5</span>
              <p className="part-desc">A word or phrase is missing in each sentence. Select the best answer.</p>
            </div>
            {part5.map(q => (
              <div key={q.id} className="question-card">
                <div className="q-num">{q.id}.</div>
                <div className="q-content">
                  <p className="q-sentence">{q.sentence}</p>
                  <div className="opts">
                    {q.options.map(opt => (
                      <button
                        key={opt}
                        className={getClass(q.id, opt, q.answer)}
                        onClick={() => handleAnswer(q.id, opt)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── PART 6 ── */}
        {activeTab === 'part6' && (
          <div className="part-section">
            <div className="part-header">
              <span className="part-label">PART 6</span>
              <p className="part-desc">A word, phrase, or sentence is missing. Select the best answer to complete the text.</p>
            </div>
            {part6.map(p => (
              <div key={p.id} className="passage-block">
                <div className="passage-text">{p.passage}</div>
                {p.questions.map(q => (
                  <div key={q.num} className="question-card">
                    <div className="q-num">{q.num}.</div>
                    <div className="q-content">
                      <div className="opts">
                        {q.options.map(opt => (
                          <button
                            key={opt}
                            className={getClass(q.num, opt, q.answer)}
                            onClick={() => handleAnswer(q.num, opt)}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* ── PART 7 ── */}
        {activeTab === 'part7' && (
          <div className="part-section">
            <div className="part-header">
              <span className="part-label">PART 7</span>
              <p className="part-desc">Read the texts and answer the questions.</p>
            </div>
            {part7.map(p => (
              <div key={p.id} className="passage-block">
                <div className="passage-title">{p.title}</div>
                <div className="passage-text">{p.passage}</div>
                {p.questions.map(q => (
                  <div key={q.num} className="question-card">
                    <div className="q-num">{q.num}.</div>
                    <div className="q-content">
                      <p className="q-sentence">{q.text}</p>
                      <div className="opts">
                        {q.options.map(opt => (
                          <button
                            key={opt}
                            className={getClass(q.num, opt, q.answer)}
                            onClick={() => handleAnswer(q.num, opt)}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {submitted && (
          <div className="result-bar">
            <span>🎉 Final Score: <strong>{score}/{totalQ}</strong> — {Math.round(score/totalQ*100)}%</span>
            <button className="retry-btn" onClick={() => { setAnswers({}); setSubmitted(false) }}>Try Again</button>
          </div>
        )}
      </div>
    </div>
  )
}
