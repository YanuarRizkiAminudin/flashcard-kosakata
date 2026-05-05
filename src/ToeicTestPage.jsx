import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './ToeicTestPage.css'
import { questions } from './toeicData'

export default function ToeicTestPage() {
  const navigate = useNavigate()
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleAnswer = (qid, opt) => {
    if (submitted) return
    setAnswers(prev => ({ ...prev, [qid]: opt }))
  }

  const totalQ = questions.length
  const answered = Object.keys(answers).length
  const score = submitted
    ? questions.filter(q => answers[q.id] === q.answer).length
    : 0

  const getOptClass = (qid, opt) => {
    if (!submitted) return answers[qid] === opt ? 'opt selected' : 'opt'
    const correct = questions.find(q => q.id === qid)?.answer
    if (opt === correct) return 'opt correct'
    if (answers[qid] === opt && opt !== correct) return 'opt wrong'
    return 'opt'
  }

  // Group passages for Part 6 & 7
  const rendered = []
  let lastPassageId = null

  questions.forEach((q) => {
    // Part divider
    if (q.part === 5 && !rendered.find(r => r.type === 'divider5')) {
      rendered.push({ type: 'divider5' })
    }
    if (q.part === 6 && !rendered.find(r => r.type === 'divider6')) {
      rendered.push({ type: 'divider6' })
    }
    if (q.part === 7 && !rendered.find(r => r.type === 'divider7')) {
      rendered.push({ type: 'divider7' })
    }

    // Passage header for Part 6 & 7
    if ((q.part === 6 || q.part === 7) && q.passageId && q.passageId !== lastPassageId) {
      rendered.push({ type: 'passage', passageId: q.passageId, title: q.groupTitle, text: q.passageText })
      lastPassageId = q.passageId
    }

    rendered.push({ type: 'question', q })
  })

  return (
    <div className="test-page">
      {/* TOPBAR */}
      <div className="test-topbar">
        <button className="back-btn" onClick={() => navigate('/')}>← Back</button>
        <div className="test-title-wrap">
          <h1 className="test-title">TOEIC Reading Test</h1>
          <span className="test-sub">100 Questions · Part 5 · Part 6 · Part 7</span>
        </div>
        <div className="progress-info">{answered}/{totalQ} answered</div>
      </div>

      {/* PROGRESS BAR */}
      <div className="progress-strip">
        <div className="progress-fill" style={{ width: `${Math.round(answered / totalQ * 100)}%` }} />
      </div>

      {/* BODY */}
      <div className="test-body">
        {rendered.map((item, i) => {
          if (item.type === 'divider5') return (
            <div key="d5" className="part-header">
              <span className="part-label">PART 5 — Incomplete Sentences</span>
              <p className="part-desc">A word or phrase is missing in each sentence. Select the best answer (A), (B), (C), or (D).</p>
            </div>
          )
          if (item.type === 'divider6') return (
            <div key="d6" className="part-header">
              <span className="part-label">PART 6 — Text Completion</span>
              <p className="part-desc">A word, phrase, or sentence is missing. Select the best answer to complete the text.</p>
            </div>
          )
          if (item.type === 'divider7') return (
            <div key="d7" className="part-header">
              <span className="part-label">PART 7 — Reading Comprehension</span>
              <p className="part-desc">Read the texts and select the best answer for each question.</p>
            </div>
          )
          if (item.type === 'passage') return (
            <div key={`passage-${item.passageId}`} className="passage-block">
              {item.title && <div className="passage-title">{item.title}</div>}
              <div className="passage-text">{item.text}</div>
            </div>
          )
          if (item.type === 'question') {
            const q = item.q
            return (
              <div key={q.id} className="question-card">
                <div className="q-num">{q.id}.</div>
                <div className="q-content">
                  {q.text && <p className="q-sentence">{q.text}</p>}
                  <div className="opts">
                    {q.options.map(opt => (
                      <button
                        key={opt}
                        className={getOptClass(q.id, opt)}
                        onClick={() => handleAnswer(q.id, opt)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )
          }
          return null
        })}

        {/* SUBMIT */}
        {!submitted ? (
          <div className="submit-section">
            <div className="submit-info">{answered}/{totalQ} questions answered</div>
            <button className="submit-btn-big" onClick={() => setSubmitted(true)}>
              Submit All Answers
            </button>
          </div>
        ) : (
          <div className="result-bar">
            <div>
              <div className="result-score">🎉 {score}/{totalQ}</div>
              <div className="result-pct">{Math.round(score / totalQ * 100)}% correct</div>
            </div>
            <button className="retry-btn" onClick={() => { setAnswers({}); setSubmitted(false); window.scrollTo(0, 0) }}>
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
