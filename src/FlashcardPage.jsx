import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './FlashcardPage.css'

const flashcards = [
  {
    id: 'MC1',
    category: 'Mandarin',
    icon: '📗',
    title: '時代華語 Modern Chinese',
    kartu: 8,
    level: 'BAB 1–8 · A1',
    route: '/lessons',
  },
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
  {
    id: 4,
    category: 'TOEIC',
    icon: '📝',
    title: 'TOEIC Reading Test',
    kartu: 100,
    level: 'Part 5 · 6 · 7',
    route: '/toeic-test',
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
        <p className="card-meta">{card.kartu} {card.id === 'MC1' ? 'Lessons' : 'Cards'} &bull; {card.level}</p>
      </div>
      <button className="belajar-btn" onClick={() => navigate(card.route)}>
        Start Learning →
      </button>
    </div>
  )
}

// ── Feedback Section ──────────────────────────────────────────────────────────
function FeedbackSection() {
  const [tab, setTab] = useState('saran')
  const [name, setName] = useState('')
  const [msg, setMsg] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!msg.trim()) return
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xpwzgvqk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          type: tab === 'saran' ? '💬 Saran' : '🚨 Pengaduan',
          name: name || 'Anonim',
          message: msg,
        }),
      })
      if (res.ok) {
        setStatus('sent')
        setName('')
        setMsg('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="feedback-section">
      <div className="feedback-header">
        <span className="feedback-label">📬 Feedback</span>
        <p className="feedback-sub">Ada saran atau menemukan masalah? Sampaikan di sini.</p>
      </div>

      <div className="feedback-tabs">
        <button
          className={`feedback-tab ${tab === 'saran' ? 'active' : ''}`}
          onClick={() => { setTab('saran'); setStatus('idle') }}
        >
          💬 Saran
        </button>
        <button
          className={`feedback-tab ${tab === 'pengaduan' ? 'active' : ''}`}
          onClick={() => { setTab('pengaduan'); setStatus('idle') }}
        >
          🚨 Pengaduan
        </button>
      </div>

      {status === 'sent' ? (
        <div className="feedback-success">
          <div className="feedback-success-icon">✅</div>
          <div className="feedback-success-title">Terima kasih!</div>
          <div className="feedback-success-sub">
            {tab === 'saran' ? 'Saran kamu sudah kami terima.' : 'Pengaduan kamu sudah kami catat.'}
          </div>
          <button className="feedback-again" onClick={() => setStatus('idle')}>Kirim lagi</button>
        </div>
      ) : (
        <form className="feedback-form" onSubmit={handleSubmit}>
          <input
            className="feedback-input"
            type="text"
            placeholder="Nama (opsional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={60}
          />
          <textarea
            className="feedback-textarea"
            placeholder={
              tab === 'saran'
                ? 'Tulis saranmu di sini... (fitur baru, konten, dll.)'
                : 'Ceritakan masalah yang kamu temukan...'
            }
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            rows={4}
            maxLength={1000}
            required
          />
          {status === 'error' && (
            <p className="feedback-error">Gagal mengirim. Coba lagi.</p>
          )}
          <button
            className="feedback-submit"
            type="submit"
            disabled={status === 'sending' || !msg.trim()}
          >
            {status === 'sending' ? 'Mengirim...' : tab === 'saran' ? 'Kirim Saran →' : 'Kirim Pengaduan →'}
          </button>
        </form>
      )}
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────
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

      <FeedbackSection />
    </div>
  )
}
