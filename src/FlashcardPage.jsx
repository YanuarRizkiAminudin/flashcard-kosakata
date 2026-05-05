import { useNavigate } from 'react-router-dom'
import './FlashcardPage.css'

const flashcards = [
  {
    id: 1,
    category: 'Mandarin',
    icon: '🀄',
    title: 'Flashcard Mandarin INTACT',
    kartu: 250,
    level: 'Intermediate',
    route: '/game/flashcard-mandarin',
  },
  {
    id: 3,
    category: 'Audio',
    icon: '🎙️',
    title: 'Voice Record Mandarin',
    kartu: 3,
    level: 'Recording',
    route: '/voice',
  },
  {
    id: 2,
    category: 'English',
    icon: '📖',
    title: 'Flashcard TOEIC',
    kartu: 30,
    level: 'B1–B2',
    route: '/game/toeic-vocabulary',
  },
]

function FlashcardCard({ card }) {
  const navigate = useNavigate()

  return (
    <div className="card">
      <div className="card-header">
        <span
          className="badge"
          style={{
            backgroundColor: card.categoryColor,
            color: card.categoryTextColor,
          }}
        >
          {card.category}
        </span>
        <button className="menu-btn" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className="card-icon">{card.icon}</div>

      <div>
        <h2 className="card-title">{card.title}</h2>
        <p className="card-meta">{card.kartu} Cards &bull; {card.level}</p>
      </div>

      <button className="belajar-btn" onClick={() => navigate(card.route)}>
        Belajar Sekarang →
      </button>
    </div>
  )
}

export default function FlashcardPage() {
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
    </div>
  )
}
