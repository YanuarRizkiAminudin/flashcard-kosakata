import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './ToeicTestPage.css'
import { questions } from './toeicData'

export default function ToeicTestPage() {
  const navigate = useNavigate()
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState('part5')

  const handleAnswer = (qid, opt) => {
    if (submitted) return
    setAnswers(prev => ({ ...prev, [qid]: opt }))
  }

  const part5Qs = questions.filter(q => q.part === 5)
  const part6Qs = questions.filter(q => q.part === 6)
  const part7Qs = questions.filter(q => q.part === 7)

  const totalQ = questions.length
  const answered = Object.keys(answers).length
  const score = submitted
    ? questions.filter(q => answers[q.id] === q.answer).length
    : 0

  const getOptClass = (qid, opt) => {
    if (!submitted) {
      return answers[qid] === opt ? 'opt selected' : 'opt'
    }
    const correct = questions.find(q => q.id === qid)?.answer
    if (opt === correct) return 'opt correct'
    if (answers[qid] === opt && opt !== correct) return 'opt wrong'
    return 'opt'
  }

  const renderQuestion = (q) => (
    <div key={q.id} className="question-card">
      <div className="q-num">{q.id}.</div>
      <div className="q-content">
        {q.passage && <div className="q-passage">{q.passage}</div>}
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

  // Group Part 6 by passage
  const part6Groups = part6Qs.reduce((acc, q) => {
    const key = q.passageId || q.id
    if (!acc[key]) acc[key] = { passageText: q.passageText, title: q.groupTitle, questions: [] }
    acc[key].questions.push(q)
    return acc
  }, {})

  // Group Part 7 by passage
  const part7Groups = part7Qs.reduce((acc, q) => {
    const key = q.passageId || q.id
    if (!acc[key]) acc[key] = { passageText: q.passageText, title: q.groupTitle, questions: [] }
    acc[key].questions.push(q)
    return acc
  }, {})

  const pct = Math.round(answered / totalQ * 100)

  return (
    <div className="test-page">
      {/* ── TOPBAR ── */}
      <div className="test-topbar">
        <button className="back-btn" onClick={() => navigate('/')}>← Back</button>
        <div className="test-title-wrap">
          <h1 className="test-title">TOEIC Reading Test</h1>
          <span className="test-sub">100 Questions · Part 5 · Part 6 · Part 7</span>
        </div>
        <div className="topbar-right">
          <div className="progress-info">{answered}/{totalQ} answered</div>
        </div>
      </div>

      {/* ── PROGRESS BAR ── */}
      <div className="progress-strip">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>

      {/* ── TABS ── */}
      <div className="test-tabs">
        <button className={`test-tab ${activeTab === 'part5' ? 'on' : ''}`} onClick={() => setActiveTab('part5')}>
          Part 5 <span className="tab-count">Q101–130</span>
        </button>
        <button className={`test-tab ${activeTab === 'part6' ? 'on' : ''}`} onClick={() => setActiveTab('part6')}>
          Part 6 <span className="tab-count">Q131–146</span>
        </button>
        <button className={`test-tab ${activeTab === 'part7' ? 'on' : ''}`} onClick={() => setActiveTab('part7')}>
          Part 7 <span className="tab-count">Q147–200</span>
        </button>
      </div>

      {/* ── BODY ── */}
      <div className="test-body">

        {/* PART 5 */}
        {activeTab === 'part5' && (
          <div className="part-section">
            <div className="part-header">
              <span className="part-label">PART 5 — Incomplete Sentences</span>
              <p className="part-desc">A word or phrase is missing in each sentence. Select the best answer (A), (B), (C), or (D).</p>
            </div>
            {part5Qs.map(renderQuestion)}
          </div>
        )}

        {/* PART 6 */}
        {activeTab === 'part6' && (
          <div className="part-section">
            <div className="part-header">
              <span className="part-label">PART 6 — Text Completion</span>
              <p className="part-desc">A word, phrase, or sentence is missing. Select the best answer to complete the text.</p>
            </div>
            {Object.values(part6Groups).map((group, i) => (
              <div key={i} className="passage-block">
                {group.title && <div className="passage-title">{group.title}</div>}
                <div className="passage-text">{group.passageText}</div>
                {group.questions.map(renderQuestion)}
              </div>
            ))}
          </div>
        )}

        {/* PART 7 */}
        {activeTab === 'part7' && (
          <div className="part-section">
            <div className="part-header">
              <span className="part-label">PART 7 — Reading Comprehension</span>
              <p className="part-desc">Read the texts and select the best answer for each question.</p>
            </div>
            {Object.values(part7Groups).map((group, i) => (
              <div key={i} className="passage-block">
                {group.title && <div className="passage-title">{group.title}</div>}
                <div className="passage-text">{group.passageText}</div>
                {group.questions.map(renderQuestion)}
              </div>
            ))}
            {!submitted && (
              <div className="submit-section">
                <div className="submit-info">{answered}/{totalQ} questions answered</div>
                <button className="submit-btn-big" onClick={() => setSubmitted(true)}>
                  Submit All Answers
                </button>
              </div>
            )}
          </div>
        )}

        {/* RESULT */}
        {submitted && (
          <div className="result-bar">
            <div>
              <div className="result-score">🎉 {score}/{totalQ}</div>
              <div className="result-pct">{Math.round(score/totalQ*100)}% correct</div>
            </div>
            <button className="retry-btn" onClick={() => { setAnswers({}); setSubmitted(false); setActiveTab('part5') }}>
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
