import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { dialogue, vocabulary, reading, grammar } from './lesson8Data'
import './Lesson8Page.css'

// ── Tab Navigation ──────────────────────────────────────────────
const TABS = [
  { id: 'dialogue', label: '對話', sublabel: 'Dialogue' },
  { id: 'vocab', label: '生詞', sublabel: 'Vocabulary' },
  { id: 'reading', label: '短文', sublabel: 'Reading' },
  { id: 'grammar', label: '語法', sublabel: 'Grammar' },
]

// ── Dialogue Tab ────────────────────────────────────────────────
function DialogueTab() {
  const [showTranslation, setShowTranslation] = useState(false)

  return (
    <div className="tab-content">
      <div className="section-header">
        <div>
          <h2 className="section-title">{dialogue.title}</h2>
          <p className="section-sub">{dialogue.setting}</p>
        </div>
        <button
          className={`toggle-btn ${showTranslation ? 'active' : ''}`}
          onClick={() => setShowTranslation(!showTranslation)}
        >
          {showTranslation ? '隱藏翻譯 Hide' : '顯示翻譯 Show'}
        </button>
      </div>

      <div className="dialogue-list">
        {dialogue.lines.map((line, i) => {
          if (!line.speaker) {
            return (
              <div key={i} className="dialogue-divider">
                <span>{line.text}</span>
              </div>
            )
          }
          const isA = line.speaker === '宜文'
          return (
            <div key={i} className={`dialogue-line ${isA ? 'line-a' : 'line-b'}`}>
              <div className="speaker-badge">{line.speaker}</div>
              <div className="bubble">
                <p className="bubble-zh">{line.text}</p>
                {showTranslation && line.translation && (
                  <p className="bubble-en">{line.translation}</p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ── Vocabulary Tab ──────────────────────────────────────────────
function VocabTab() {
  const [flipped, setFlipped] = useState({})

  const toggle = (i) => setFlipped(prev => ({ ...prev, [i]: !prev[i] }))

  return (
    <div className="tab-content">
      <div className="section-header">
        <div>
          <h2 className="section-title">生詞 Vocabulary</h2>
          <p className="section-sub">Click a card to reveal the example sentence</p>
        </div>
      </div>

      <div className="vocab-grid">
        {vocabulary.map((v, i) => (
          <div
            key={i}
            className={`vocab-card ${flipped[i] ? 'flipped' : ''}`}
            onClick={() => toggle(i)}
          >
            <div className="vocab-front">
              <div className="vocab-word">{v.word}</div>
              <div className="vocab-pinyin">{v.pinyin}</div>
              <div className="vocab-pos-row">
                <span className="vocab-pos">{v.pos}</span>
                <span className="vocab-meaning">{v.meaning}</span>
              </div>
              {v.example && <div className="vocab-hint">Tap for example →</div>}
            </div>
            {flipped[i] && v.example && (
              <div className="vocab-back">
                <p className="vocab-example-zh">{v.example}</p>
                <p className="vocab-example-en">{v.exampleTranslation}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Reading Tab ─────────────────────────────────────────────────
function ReadingTab() {
  const [showTranslation, setShowTranslation] = useState(false)

  return (
    <div className="tab-content">
      <div className="section-header">
        <div>
          <h2 className="section-title">{reading.title}</h2>
          <p className="section-sub">{reading.titleTranslation}</p>
        </div>
        <button
          className={`toggle-btn ${showTranslation ? 'active' : ''}`}
          onClick={() => setShowTranslation(!showTranslation)}
        >
          {showTranslation ? '隱藏翻譯 Hide' : '顯示翻譯 Show'}
        </button>
      </div>

      <div className="reading-card">
        <p className="reading-zh">{reading.text}</p>
        {showTranslation && (
          <p className="reading-en">{reading.translation}</p>
        )}
      </div>
    </div>
  )
}

// ── Grammar Tab ─────────────────────────────────────────────────
function GrammarTab() {
  const [open, setOpen] = useState({ g1: true, g2: false, g3: false })

  const toggle = (id) => setOpen(prev => ({ ...prev, [id]: !prev[id] }))

  return (
    <div className="tab-content">
      <div className="section-header">
        <div>
          <h2 className="section-title">語法 Grammar</h2>
          <p className="section-sub">Three key patterns from Lesson 8</p>
        </div>
      </div>

      <div className="grammar-list">
        {grammar.map((g, idx) => (
          <div key={g.id} className={`grammar-block ${open[g.id] ? 'open' : ''}`}>
            <button className="grammar-header" onClick={() => toggle(g.id)}>
              <div className="grammar-num">{idx + 1}</div>
              <div className="grammar-pattern">{g.pattern}</div>
              <div className="grammar-chevron">{open[g.id] ? '▲' : '▼'}</div>
            </button>

            {open[g.id] && (
              <div className="grammar-body">
                <p className="grammar-explanation">{g.explanation}</p>
                <div className="grammar-examples">
                  {g.examples.map((ex, j) => (
                    <div key={j} className="grammar-example">
                      <p className="ex-zh">{ex.zh}</p>
                      <p className="ex-en">{ex.en}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Main Page ───────────────────────────────────────────────────
export default function Lesson8Page() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('dialogue')

  return (
    <div className="lesson-page">
      <button className="back-btn" onClick={() => navigate('/')}>
        ← Back
      </button>

      <div className="lesson-container">
        {/* Header */}
        <div className="lesson-header">
          <div className="lesson-badge">第八課 · Lesson 8</div>
          <h1 className="lesson-title">在百貨公司</h1>
          <p className="lesson-subtitle">At the Department Store</p>
        </div>

        {/* Tabs */}
        <div className="tabs">
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-zh">{tab.label}</span>
              <span className="tab-en">{tab.sublabel}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'dialogue' && <DialogueTab />}
        {activeTab === 'vocab' && <VocabTab />}
        {activeTab === 'reading' && <ReadingTab />}
        {activeTab === 'grammar' && <GrammarTab />}
      </div>
    </div>
  )
}
