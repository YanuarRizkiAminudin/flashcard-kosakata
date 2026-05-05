import { useNavigate } from 'react-router-dom'
import { useState, useMemo } from 'react'
import './ToeicTestPage.css'
import { questions } from './toeicData'

// Shuffle array (Fisher-Yates)
function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function ToeicTestPage() {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const totalQ = questions.length
  // Shuffle once on mount, stays consistent for the whole session
  const shuffled = useMemo(() => shuffle(questions), [])
  const q = shuffled[current]
  const isLast = current === totalQ - 1
  const score = submitted
    ? shuffled.filter(q => answers[q.id] === q.answer).length
    : 0

  const handleAnswer = (opt) => {
    if (submitted) return
    setAnswers(prev => ({ ...prev, [q.id]: opt }))
  }

  const handleNext = () => {
    if (isLast) return
    setCurrent(prev => prev + 1)
  }

  const handlePrev = () => {
    if (current === 0) return
    setCurrent(prev => prev - 1)
  }

  const getOptClass = (opt) => {
    if (!submitted) return answers[q.id] === opt ? 'opt selected' : 'opt'
    if (opt === q.answer) return 'opt correct'
    if (answers[q.id] === opt && opt !== q.answer) return 'opt wrong'
    return 'opt'
  }

  const partLabel = q?.part === 5
    ? 'Part 5 — Incomplete Sentences'
    : q?.part === 6
    ? 'Part 6 — Text Completion'
    : 'Part 7 — Reading Comprehension'

  const pct = Math.round((current + 1) / totalQ * 100)

  if (submitted) {
    return (
      <div className="test-page">
        <div className="test-topbar">
          <button className="back-btn" onClick={() => navigate('/')}>← Back</button>
          <div className="test-title-wrap">
            <h1 className="test-title">TOEIC Reading Test</h1>
          </div>
        </div>
        <div className="result-page">
          <div className="result-emoji">🎉</div>
          <div className="result-score">{score}/{totalQ}</div>
          <div className="result-pct">{Math.round(score / totalQ * 100)}% correct</div>
          <div className="result-review">
            {shuffled.map((qq) => (
              <div key={qq.id} className={`review-item ${answers[qq.id] === qq.answer ? 'r-correct' : 'r-wrong'}`}>
                <span className="r-num">{qq.id}.</span>
                <span className="r-your">Your answer: {answers[qq.id] || '—'}</span>
                <span className="r-correct-ans">Correct: {qq.answer}</span>
              </div>
            ))}
          </div>
          <button className="submit-btn-big" onClick={() => { setAnswers({}); setCurrent(0); setSubmitted(false) }}>
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="test-page">
      {/* BODY */}
      <div className="test-body single">

        {/* Header row */}
        <div className="test-header-row">
          <button className="toeic-back-btn" onClick={() => navigate('/')}>← Back</button>
          <div className="test-counter">{current + 1} / {totalQ}</div>
          <div className="progress-info-inline">{Object.keys(answers).length}/{totalQ} answered</div>
        </div>

        <div className="progress-strip">
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>

        {/* Part label */}
        <div className="part-chip">{partLabel}</div>

        {/* Source banner */}
        <a
          href="https://drive.google.com/drive/folders/1V5Lh4mVPpP9cAhMT-KQGLZo38AQB4T0g"
          target="_blank"
          rel="noopener noreferrer"
          className="source-banner"
        >
          📂 Materi latihan — Lihat di Google Drive →
        </a>

        {/* Passage for Part 6 & 7 */}
        {q.passageText && (
          <div className="passage-block">
            {q.groupTitle && <div className="passage-title">{q.groupTitle}</div>}
            <div className="passage-text">{q.passageText}</div>
          </div>
        )}

        {/* Question */}
        <div className="question-card single-card">
          <div className="q-num">{q.id}.</div>
          <div className="q-content">
            {q.text && <p className="q-sentence">{q.text}</p>}
            <div className="opts">
              {q.options.map(opt => (
                <button
                  key={opt}
                  className={getOptClass(opt)}
                  onClick={() => handleAnswer(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* NAV BUTTONS */}
        <div className="nav-row">
          <button className="nav-btn prev" onClick={handlePrev} disabled={current === 0}>
            ← Prev
          </button>

          {isLast ? (
            <>
              <div className="source-info">
                📄 Soal bersumber dari materi latihan pribadi.{' '}
                <a href="https://drive.google.com/drive/folders/1V5Lh4mVPpP9cAhMT-KQGLZo38AQB4T0g" target="_blank" rel="noopener noreferrer" className="source-link">
                  Lihat sumber →
                </a>
              </div>
              <button className="submit-btn-big nav-submit" onClick={() => setSubmitted(true)}>
                Submit All Answers
              </button>
            </>
          ) : (
            <button
              className="nav-btn next"
              onClick={handleNext}
              disabled={!answers[q.id]}
            >
              Next →
            </button>
          )}
        </div>

        {/* Question dots navigator */}
        <div className="dots-nav">
          {shuffled.map((qq, i) => (
            <button
              key={qq.id}
              className={`dot-btn ${i === current ? 'dot-active' : ''} ${answers[qq.id] ? 'dot-answered' : ''}`}
              onClick={() => setCurrent(i)}
              title={`Q${qq.id}`}
            />
          ))}
        </div>

      </div>
    </div>
  )
}
