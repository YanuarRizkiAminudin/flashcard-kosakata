import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './LessonPage.css'
import { lessons } from './lessonData'

// ─── helpers ────────────────────────────────────────────────────────────────
const TABS = [
  { id: 'dialogue', label: 'Dialogue', icon: '💬' },
  { id: 'vocabulary', label: 'Vocabulary', icon: '📚' },
  { id: 'grammar', label: 'Grammar', icon: '📐' },
  { id: 'reading', label: 'Reading', icon: '📖' },
  { id: 'quiz', label: 'Quiz', icon: '✏️' },
]

const OPTION_LETTERS = ['A', 'B', 'C', 'D']

// ─── Dialogue Tab ────────────────────────────────────────────────────────────
function DialogueTab({ lesson }) {
  const [show, setShow] = useState({ zh: true, pinyin: true, en: true })

  const toggle = (key) => setShow((s) => ({ ...s, [key]: !s[key] }))

  return (
    <div>
      <div className="display-toggle">
        <button
          className={`toggle-btn ${show.zh ? 'active' : ''}`}
          onClick={() => toggle('zh')}
        >
          漢字
        </button>
        <button
          className={`toggle-btn ${show.pinyin ? 'active' : ''}`}
          onClick={() => toggle('pinyin')}
        >
          Pinyin
        </button>
        <button
          className={`toggle-btn ${show.en ? 'active' : ''}`}
          onClick={() => toggle('en')}
        >
          English
        </button>
      </div>

      {lesson.dialogues.map((dlg) => (
        <div key={dlg.id} className="dialogue-block">
          <div className="dialogue-header">
            <div className="dialogue-header-title">{dlg.title}</div>
            <div className="dialogue-header-setting">{dlg.setting}</div>
          </div>
          <div className="dialogue-lines">
            {dlg.lines.map((line, i) => (
              <div key={i} className="dialogue-line">
                <div className="dialogue-speaker">
                  <span className="dialogue-speaker-name">{line.speaker}</span>
                  <span className="dialogue-speaker-pinyin">{line.pinyin}</span>
                </div>
                <div className="dialogue-bubble">
                  {show.zh && <div className="dialogue-zh">{line.text}</div>}
                  {show.pinyin && (
                    <div className="dialogue-pinyin">{line.textPinyin}</div>
                  )}
                  {show.en && (
                    <div className="dialogue-en">{line.textEn}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── Vocabulary Tab ──────────────────────────────────────────────────────────
function VocabularyTab({ lesson }) {
  const [flipped, setFlipped] = useState({})
  const [filter, setFilter] = useState('all')

  const posTypes = ['all', ...new Set(lesson.vocabulary.map((v) => v.pos))]

  const filtered =
    filter === 'all'
      ? lesson.vocabulary
      : lesson.vocabulary.filter((v) => v.pos === filter)

  const toggleFlip = (id) =>
    setFlipped((f) => ({ ...f, [id]: !f[id] }))

  return (
    <div>
      {/* POS filter */}
      <div className="display-toggle" style={{ marginBottom: 20 }}>
        {posTypes.map((p) => (
          <button
            key={p}
            className={`toggle-btn ${filter === p ? 'active' : ''}`}
            onClick={() => setFilter(p)}
          >
            {p === 'all' ? 'All' : p}
          </button>
        ))}
      </div>

      <div className="vocab-grid">
        {filtered.map((v) => (
          <div
            key={v.id}
            className={`vocab-card ${flipped[v.id] ? 'flipped' : ''}`}
            onClick={() => toggleFlip(v.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && toggleFlip(v.id)}
            aria-label={`Vocabulary card: ${v.char}`}
          >
            <span className="vocab-num">#{v.id}</span>
            <span className="vocab-pos">{v.pos}</span>
            <div className="vocab-char">{v.char}</div>
            <div className="vocab-pinyin">{v.pinyin}</div>
            <div className="vocab-en">{v.en}</div>
            <div className="vocab-id">{v.id_}</div>

            {flipped[v.id] && v.example && (
              <div className="vocab-example">
                <div className="vocab-example-zh">{v.example}</div>
                <div className="vocab-example-pinyin">{v.examplePinyin}</div>
                <div className="vocab-example-en">{v.exampleEn}</div>
              </div>
            )}

            {v.example && (
              <div className="vocab-flip-hint">
                {flipped[v.id] ? '▲ hide example' : '▼ tap for example'}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Phrases section */}
      {lesson.phrases && lesson.phrases.length > 0 && (
        <div style={{ marginTop: 36 }}>
          <div className="section-title">💬 Phrases & Expressions</div>
          <div className="vocab-grid">
            {lesson.phrases.map((p, i) => (
              <div key={i} className="vocab-card">
                <span className="vocab-pos">Phr</span>
                <div className="vocab-char">{p.zh}</div>
                <div className="vocab-pinyin">{p.pinyin}</div>
                <div className="vocab-en">{p.en}</div>
                <div className="vocab-id">{p.id_}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Countries reference — only lesson 1 */}
      {lesson.id === 1 && (
        <div style={{ marginTop: 36 }}>
          <div className="section-title">🌏 Countries Reference</div>
          <div className="countries-grid">
            {[
              { zh: '日本', pinyin: 'Rìběn', en: 'Japan' },
              { zh: '臺灣', pinyin: 'Táiwān', en: 'Taiwan' },
              { zh: '中國', pinyin: 'Zhōngguó', en: 'China' },
              { zh: '美國', pinyin: 'Měiguó', en: 'USA' },
              { zh: '英國', pinyin: 'Yīngguó', en: 'UK' },
              { zh: '印尼', pinyin: 'Yìnní', en: 'Indonesia' },
              { zh: '韓國', pinyin: 'Hánguó', en: 'Korea' },
            ].map((c) => (
              <div key={c.zh} className="country-chip">
                <div className="country-chip-zh">{c.zh}</div>
                <div className="country-chip-pinyin">{c.pinyin}</div>
                <div className="country-chip-en">{c.en}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Grammar Tab ─────────────────────────────────────────────────────────────
function GrammarTab({ lesson }) {
  return (
    <div>
      {lesson.grammar.map((g) => (
        <div key={g.id} className="grammar-block">
          <div className="grammar-title">{g.title}</div>
          <div className="grammar-explanation">{g.explanation}</div>
          <div className="grammar-pattern">{g.pattern}</div>
          <div className="grammar-examples">
            {g.examples.map((ex, i) => (
              <div key={i} className="grammar-example">
                <div className="grammar-example-zh">{ex.zh}</div>
                <div className="grammar-example-pinyin">{ex.pinyin}</div>
                <div className="grammar-example-en">{ex.en}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── Reading Tab ─────────────────────────────────────────────────────────────
function ReadingTab({ lesson }) {
  const [show, setShow] = useState({ zh: true, pinyin: false, en: false })
  const toggle = (key) => setShow((s) => ({ ...s, [key]: !s[key] }))
  const r = lesson.reading

  return (
    <div>
      <div className="display-toggle" style={{ marginBottom: 20 }}>
        <button
          className={`toggle-btn ${show.zh ? 'active' : ''}`}
          onClick={() => toggle('zh')}
        >
          漢字
        </button>
        <button
          className={`toggle-btn ${show.pinyin ? 'active' : ''}`}
          onClick={() => toggle('pinyin')}
        >
          Pinyin
        </button>
        <button
          className={`toggle-btn ${show.en ? 'active' : ''}`}
          onClick={() => toggle('en')}
        >
          English
        </button>
      </div>

      <div className="reading-block">
        <div className="reading-header">
          <div className="reading-header-title">{r.title}</div>
          <div className="reading-header-pinyin">{r.titlePinyin}</div>
          <div className="reading-header-en">{r.titleEn}</div>
        </div>
        <div className="reading-body">
          {show.zh && <div className="reading-zh">{r.zh}</div>}
          {show.pinyin && <div className="reading-pinyin">{r.pinyin}</div>}
          {show.en && <div className="reading-en">{r.en}</div>}
        </div>
      </div>
    </div>
  )
}

// ─── Quiz Tab ────────────────────────────────────────────────────────────────
function QuizTab({ lesson }) {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const [answers, setAnswers] = useState([]) // track per-question result

  const questions = lesson.quiz
  const q = questions[current]
  const isAnswered = selected !== null

  const handleSelect = (idx) => {
    if (isAnswered) return
    setSelected(idx)
    const correct = idx === q.answer
    if (correct) setScore((s) => s + 1)
    setAnswers((a) => [...a, { correct }])
  }

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1)
      setSelected(null)
    } else {
      setDone(true)
    }
  }

  const handleRestart = () => {
    setCurrent(0)
    setSelected(null)
    setScore(0)
    setDone(false)
    setAnswers([])
  }

  const pct = Math.round((score / questions.length) * 100)
  const stars =
    pct === 100 ? '⭐⭐⭐' : pct >= 75 ? '⭐⭐' : pct >= 50 ? '⭐' : ''
  const emoji =
    pct === 100 ? '🎉' : pct >= 75 ? '😊' : pct >= 50 ? '🙂' : '📚'

  if (done) {
    return (
      <div className="quiz-result">
        <div className="quiz-result-emoji">{emoji}</div>
        <div className="quiz-result-title">Quiz Complete!</div>
        <div className="quiz-result-score">{score}/{questions.length}</div>
        <div className="quiz-result-sub">{pct}% correct</div>
        {stars && <div className="quiz-result-stars">{stars}</div>}
        <button className="quiz-btn quiz-btn-primary" onClick={handleRestart}>
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div>
      {/* Progress */}
      <div className="quiz-progress">
        <div className="quiz-progress-bar">
          <div
            className="quiz-progress-fill"
            style={{ width: `${((current) / questions.length) * 100}%` }}
          />
        </div>
        <span className="quiz-progress-text">
          {current + 1} / {questions.length}
        </span>
      </div>

      {/* Question card */}
      <div className="quiz-card">
        <div className="quiz-question-num">Question {current + 1}</div>
        <div className="quiz-question-zh">{q.question}</div>
        <div className="quiz-question-en">{q.questionEn}</div>

        <div className="quiz-options">
          {q.options.map((opt, idx) => {
            let cls = ''
            if (isAnswered) {
              if (idx === q.answer) cls = 'correct'
              else if (idx === selected) cls = 'wrong'
            }
            return (
              <button
                key={idx}
                className={`quiz-option ${cls}`}
                onClick={() => handleSelect(idx)}
                disabled={isAnswered}
              >
                <span className="quiz-option-letter">
                  {OPTION_LETTERS[idx]}
                </span>
                {opt}
              </button>
            )
          })}
        </div>

        {isAnswered && (
          <div
            className={`quiz-feedback ${
              selected === q.answer ? 'correct' : 'wrong'
            }`}
          >
            {selected === q.answer
              ? '✅ Correct! 很好！'
              : `❌ The correct answer is: ${q.options[q.answer]}`}
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="quiz-nav">
        <button
          className="quiz-btn quiz-btn-secondary"
          onClick={handleRestart}
        >
          ↺ Restart
        </button>
        <button
          className="quiz-btn quiz-btn-primary"
          onClick={handleNext}
          disabled={!isAnswered}
        >
          {current + 1 < questions.length ? 'Next →' : 'Finish'}
        </button>
      </div>
    </div>
  )
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function LessonPage() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('dialogue')

  const lesson = lessons.find((l) => l.id === Number(id)) || lessons[0]

  const renderTab = () => {
    switch (activeTab) {
      case 'dialogue':
        return <DialogueTab lesson={lesson} />
      case 'vocabulary':
        return <VocabularyTab lesson={lesson} />
      case 'grammar':
        return <GrammarTab lesson={lesson} />
      case 'reading':
        return <ReadingTab lesson={lesson} />
      case 'quiz':
        return <QuizTab lesson={lesson} />
      default:
        return null
    }
  }

  return (
    <div className="lesson-page">
      {/* Nav */}
      <nav className="lesson-nav">
        <button className="lesson-nav-back" onClick={() => navigate('/')}>
          ← Back
        </button>
        <span className="lesson-nav-title">
          第{lesson.id}課 · {lesson.title}
        </span>
        <span className="lesson-nav-sub">{lesson.level}</span>
      </nav>

      {/* Hero */}
      <div className="lesson-hero">
        <div className="lesson-hero-badge">{lesson.level} · Lesson {lesson.id}</div>
        <div className="lesson-hero-title">{lesson.title}</div>
        <div className="lesson-hero-pinyin">{lesson.titlePinyin}</div>
        <div className="lesson-hero-en">{lesson.titleEn}</div>
        <div className="lesson-hero-id">{lesson.titleId}</div>
      </div>

      {/* Tabs */}
      <div className="lesson-tabs" role="tablist">
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={activeTab === t.id}
            className={`lesson-tab ${activeTab === t.id ? 'active' : ''}`}
            onClick={() => setActiveTab(t.id)}
          >
            <span>{t.icon}</span>
            {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="lesson-content">{renderTab()}</div>
    </div>
  )
}
