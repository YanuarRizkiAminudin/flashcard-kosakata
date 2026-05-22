import { useNavigate } from 'react-router-dom'
import './FlashcardPage.css'

const flashcards = [
  {
    id: 'MC1',
    category: 'Mandarin',
    categoryColor: '#fce7f3', categoryTextColor: '#9d174d',
    icon: '📗',
    title: '時代華語 Tradisional Chinese',
    kartu: 9,
    level: 'BAB 1–9 · A1',
    route: '/lessons',
  },
  {
    id: 'MC10',
    category: 'Mandarin',
    categoryColor: '#fce7f3', categoryTextColor: '#9d174d',
    icon: '🏥',
    title: 'L10 — 看醫生 (Ke Dokter)',
    kartu: 45,
    level: '生詞 · 語法 · 句型 · Pertemuan 10',
    route: '/game/mandarin-l10',
  },
  {
    id: 1,
    category: 'Mandarin',
    categoryColor: '#fce7f3', categoryTextColor: '#9d174d',
    icon: '🀄',
    title: 'Flashcard Mandarin INTACT',
    kartu: 250,
    level: 'Intermediate',
    route: '/game/flashcard-mandarin',
  },
  {
    id: 3,
    category: 'Audio',
    categoryColor: '#f3e8ff', categoryTextColor: '#6b21a8',
    icon: '🎙️',
    title: 'Voice Record Mandarin',
    kartu: 3,
    level: 'Recording',
    route: '/voice',
  },
  {
    id: 8,
    category: 'Music',
    categoryColor: '#fdf2f8', categoryTextColor: '#a21caf',
    icon: '🎵',
    title: '我是真的真的真的很愛你',
    kartu: 32,
    level: 'Jerry Yan · 言承旭 · Lyrics + Translation',
    route: '/game/wo-shi-zhen-de',
  },
  {
    id: 2,
    category: 'English',
    categoryColor: '#dbeafe', categoryTextColor: '#1e40af',
    icon: '📖',
    title: 'Flashcard TOEIC',
    kartu: 235,
    level: 'B1–B2',
    route: '/game/toeic-vocabulary',
  },
  {
    id: 10,
    category: 'TOEIC',
    categoryColor: '#e0e7ff', categoryTextColor: '#3730a3',
    icon: '📘',
    title: 'TOEIC Test 06 Vocabulary',
    kartu: 116,
    level: 'Verbs · Nouns · Adj · Adv · Phrases',
    route: '/game/toeic-test06-vocab',
  },
  {
    id: 4,
    category: 'TOEIC',
    categoryColor: '#e0e7ff', categoryTextColor: '#3730a3',
    icon: '📝',
    title: 'TOEIC Reading Test',
    kartu: 100,
    level: 'Part 5 · 6 · 7',
    route: '/toeic-test',
  },
  {
    id: 9,
    category: 'TOEFL',
    categoryColor: '#d1fae5', categoryTextColor: '#065f46',
    icon: '🎓',
    title: 'TOEFL iBT Simulation',
    kartu: 70,
    level: 'Listening + Reading · 2 Hours',
    route: '/game/toefl-test',
  },
  {
    id: 6,
    category: 'English',
    categoryColor: '#dbeafe', categoryTextColor: '#1e40af',
    icon: '🔤',
    title: 'TOEIC Verb V1/V2/V3/Ving',
    kartu: 92,
    level: 'Guess verb forms · TOEIC 101–200',
    route: '/game/toeic-verb-guess',
  },
  {
    id: 7,
    category: 'Grammar',
    categoryColor: '#fef9c3', categoryTextColor: '#854d0e',
    icon: '📋',
    title: 'Pola Verb TOEIC/TOEFL',
    kartu: 8,
    level: 'Beginner · V1 V2 V3 Ving',
    route: '/game/toeic-verb-pattern',
  },
  {
    id: 5,
    category: 'Personal',
    categoryColor: '#f3f4f6', categoryTextColor: '#374151',
    icon: '🗂️',
    title: 'My Flashcards',
    kartu: 0,
    level: 'Custom · Self-study',
    route: '/my-flashcards',
  },
]

// ── Card ──────────────────────────────────────────────────────────────────────
function FlashcardCard({ card }) {
  const navigate = useNavigate()
  return (
    <div className="card">
      <div className="card-header">
        <span className="badge" style={{ backgroundColor: card.categoryColor, color: card.categoryTextColor }}>
          {card.category}
        </span>
        <button className="menu-btn" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div className="card-icon">{card.icon}</div>
      <div>
        <h2 className="card-title">{card.title}</h2>
        <p className="card-meta">{card.kartu} {card.id === 'MC1' ? 'Lessons' : card.id === 5 ? 'Cards saved' : card.id === 9 ? 'Questions' : 'Cards'} &bull; {card.level}</p>
      </div>
      <button className="belajar-btn" onClick={() => navigate(card.route)}>
        Start Learning →
      </button>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function FlashcardPage() {
  const navigate = useNavigate()
  return (
    <div className="page">
      <div className="watermark" aria-hidden="true">
        <span className="wm wm-1">華語文能力測驗</span>
        <span className="wm wm-2">托福</span>
        <span className="wm wm-3">TOCFL</span>
        <span className="wm wm-4">語言學習</span>
        <span className="wm wm-5">TOEFL</span>
        <span className="wm wm-6">詞彙練習</span>
        <span className="wm wm-7">華語文能力測驗</span>
        <span className="wm wm-8">托福考試</span>
        <span className="wm wm-9">TOCFL</span>
        <span className="wm wm-10">語言能力</span>
      </div>

      <div className="page-header">
        <h1 className="page-title">Flashcard Kosakata</h1>
        <p className="page-subtitle">Choose your study material for today</p>
      </div>

      <div className="grid">
        {flashcards.map((card) => (
          <FlashcardCard key={card.id} card={card} />
        ))}
      </div>

      <div className="coming-soon-section">
        <div className="coming-soon-header">
          <span className="coming-soon-label">🚀 Coming Soon</span>
        </div>
        <div className="coming-soon-grid">
          <div className="coming-soon-card">
            <div className="cs-icon">🔒</div>
            <div className="cs-info">
              <div className="cs-title">Something is coming...</div>
              <div className="cs-meta">New content is being prepared</div>
            </div>
            <span className="cs-badge">Coming Soon</span>
          </div>
          <div className="coming-soon-card">
            <div className="cs-icon">🔒</div>
            <div className="cs-info">
              <div className="cs-title">A surprise for you</div>
              <div className="cs-meta">Stay tuned for the next update</div>
            </div>
            <span className="cs-badge">Coming Soon</span>
          </div>
          <div className="coming-soon-card">
            <div className="cs-icon">🔒</div>
            <div className="cs-info">
              <div className="cs-title">Still a secret...</div>
              <div className="cs-meta">We can't tell you just yet</div>
            </div>
            <span className="cs-badge">Coming Soon</span>
          </div>
        </div>
      </div>

      <div className="feedback-footer">
        <p className="feedback-footer-text">Have suggestions or found an issue?</p>
        <button className="feedback-footer-btn" onClick={() => navigate('/feedback')}>
          📬 Send Feedback
        </button>
      </div>
    </div>
  )
}
