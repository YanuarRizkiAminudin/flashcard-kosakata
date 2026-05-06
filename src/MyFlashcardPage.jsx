import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './MyFlashcardPage.css'

const STORAGE_KEY = 'my_flashcards'

function loadCards() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') }
  catch { return [] }
}
function saveCards(cards) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cards))
}

// ── Add Form ──────────────────────────────────────────────────────────────────
function AddForm({ onAdded }) {
  const [front, setFront] = useState('')
  const [back, setBack] = useState('')
  const [tag, setTag] = useState('TOEIC')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!front.trim() || !back.trim()) return
    const cards = loadCards()
    cards.unshift({
      id: Date.now(),
      front: front.trim(),
      back: back.trim(),
      tag,
      date: new Date().toLocaleDateString(),
      mastered: false,
    })
    saveCards(cards)
    setFront('')
    setBack('')
    onAdded()
  }

  return (
    <form className="mf-add-form" onSubmit={handleSubmit}>
      <div className="mf-add-title">➕ Add New Flashcard</div>

      <div className="mf-field">
        <label className="mf-label">Sentence / Word <span className="mf-req">*</span></label>
        <textarea
          className="mf-input mf-textarea"
          placeholder="e.g. The project required the collaboration of several teams."
          value={front}
          onChange={(e) => setFront(e.target.value)}
          rows={3}
          required
        />
      </div>

      <div className="mf-field">
        <label className="mf-label">Meaning / Translation <span className="mf-req">*</span></label>
        <textarea
          className="mf-input mf-textarea"
          placeholder="e.g. Proyek itu membutuhkan kolaborasi beberapa tim."
          value={back}
          onChange={(e) => setBack(e.target.value)}
          rows={3}
          required
        />
      </div>

      <div className="mf-field">
        <label className="mf-label">Tag</label>
        <div className="mf-tag-row">
          {['TOEIC', 'Mandarin', 'Grammar', 'Vocab', 'Other'].map((t) => (
            <button
              key={t}
              type="button"
              className={`mf-tag-btn ${tag === t ? 'active' : ''}`}
              onClick={() => setTag(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <button className="mf-submit" type="submit" disabled={!front.trim() || !back.trim()}>
        Save Flashcard
      </button>
    </form>
  )
}

// ── Review Mode ───────────────────────────────────────────────────────────────
function ReviewMode({ cards, onExit, onMastered }) {
  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [done, setDone] = useState(false)

  const active = cards[idx]

  const handleNext = () => {
    setFlipped(false)
    if (idx + 1 >= cards.length) setDone(true)
    else setIdx(idx + 1)
  }

  const handleMastered = () => {
    onMastered(active.id)
    handleNext()
  }

  if (done) {
    return (
      <div className="mf-done">
        <div className="mf-done-icon">🎉</div>
        <div className="mf-done-title">Review Complete!</div>
        <div className="mf-done-sub">You reviewed {cards.length} card{cards.length > 1 ? 's' : ''}.</div>
        <button className="mf-btn-primary" onClick={onExit}>Back to List</button>
      </div>
    )
  }

  return (
    <div className="mf-review">
      <div className="mf-review-progress">
        <div className="mf-review-bar">
          <div className="mf-review-fill" style={{ width: `${(idx / cards.length) * 100}%` }} />
        </div>
        <span className="mf-review-count">{idx + 1} / {cards.length}</span>
      </div>

      <div className="mf-review-tag">{active.tag}</div>

      {/* Flip card */}
      <div
        className={`mf-card-flip ${flipped ? 'flipped' : ''}`}
        onClick={() => setFlipped(!flipped)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setFlipped(!flipped)}
        aria-label="Flip card"
      >
        <div className="mf-card-inner">
          <div className="mf-card-front">
            <div className="mf-card-hint">Tap to reveal meaning</div>
            <div className="mf-card-text">{active.front}</div>
          </div>
          <div className="mf-card-back">
            <div className="mf-card-hint">Meaning</div>
            <div className="mf-card-text">{active.back}</div>
          </div>
        </div>
      </div>

      {flipped && (
        <div className="mf-review-actions">
          <button className="mf-btn-mastered" onClick={handleMastered}>
            ✅ Got it!
          </button>
          <button className="mf-btn-next" onClick={handleNext}>
            🔁 Review again →
          </button>
        </div>
      )}

      <button className="mf-btn-exit" onClick={onExit}>✕ Exit review</button>
    </div>
  )
}

// ── Card List ─────────────────────────────────────────────────────────────────
function CardList({ cards, onDelete, onToggleMastered, onReview }) {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')

  const tags = ['all', ...new Set(cards.map((c) => c.tag))]

  const filtered = cards.filter((c) => {
    const matchTag = filter === 'all' || c.tag === filter
    const matchSearch = !search || c.front.toLowerCase().includes(search.toLowerCase()) || c.back.toLowerCase().includes(search.toLowerCase())
    return matchTag && matchSearch
  })

  const unmastered = filtered.filter((c) => !c.mastered)

  return (
    <div>
      {/* Toolbar */}
      <div className="mf-toolbar">
        <input
          className="mf-search"
          type="text"
          placeholder="🔍 Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {unmastered.length > 0 && (
          <button className="mf-btn-review" onClick={() => onReview(unmastered)}>
            ▶ Review {unmastered.length} card{unmastered.length > 1 ? 's' : ''}
          </button>
        )}
      </div>

      {/* Tag filter */}
      <div className="mf-tag-filter">
        {tags.map((t) => (
          <button
            key={t}
            className={`mf-tag-btn ${filter === t ? 'active' : ''}`}
            onClick={() => setFilter(t)}
          >
            {t === 'all' ? 'All' : t}
            <span className="mf-tag-count">
              {t === 'all' ? cards.length : cards.filter((c) => c.tag === t).length}
            </span>
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="mf-empty">
          <div className="mf-empty-icon">📭</div>
          <div className="mf-empty-text">No flashcards yet. Add one above!</div>
        </div>
      ) : (
        <div className="mf-list">
          {filtered.map((c) => (
            <div key={c.id} className={`mf-item ${c.mastered ? 'mastered' : ''}`}>
              <div className="mf-item-header">
                <span className="mf-item-tag">{c.tag}</span>
                {c.mastered && <span className="mf-item-mastered-badge">✅ Mastered</span>}
                <span className="mf-item-date">{c.date}</span>
                <button className="mf-item-delete" onClick={() => onDelete(c.id)}>×</button>
              </div>
              <div className="mf-item-front">{c.front}</div>
              <div className="mf-item-divider">↓</div>
              <div className="mf-item-back">{c.back}</div>
              <button
                className={`mf-item-toggle ${c.mastered ? 'undo' : ''}`}
                onClick={() => onToggleMastered(c.id)}
              >
                {c.mastered ? '↩ Mark as unlearned' : '✅ Mark as mastered'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function MyFlashcardPage() {
  const navigate = useNavigate()
  const [cards, setCards] = useState(loadCards)
  const [tab, setTab] = useState('add')
  const [reviewCards, setReviewCards] = useState(null)

  const refresh = () => setCards(loadCards())

  const handleDelete = (id) => {
    const updated = cards.filter((c) => c.id !== id)
    saveCards(updated)
    setCards(updated)
  }

  const handleToggleMastered = (id) => {
    const updated = cards.map((c) => c.id === id ? { ...c, mastered: !c.mastered } : c)
    saveCards(updated)
    setCards(updated)
  }

  const handleMastered = (id) => {
    const updated = cards.map((c) => c.id === id ? { ...c, mastered: true } : c)
    saveCards(updated)
    setCards(updated)
  }

  const unmastered = cards.filter((c) => !c.mastered)

  if (reviewCards) {
    return (
      <div className="mf-page">
        <nav className="mf-nav">
          <button className="mf-back" onClick={() => setReviewCards(null)}>← Back</button>
          <span className="mf-nav-title">Review Mode</span>
        </nav>
        <div className="mf-content">
          <ReviewMode
            cards={reviewCards}
            onExit={() => setReviewCards(null)}
            onMastered={handleMastered}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="mf-page">
      {/* Nav */}
      <nav className="mf-nav">
        <button className="mf-back" onClick={() => navigate('/')}>← Back</button>
        <span className="mf-nav-title">My Flashcards</span>
        {unmastered.length > 0 && (
          <button className="mf-nav-review" onClick={() => setReviewCards(unmastered)}>
            ▶ Review ({unmastered.length})
          </button>
        )}
      </nav>

      {/* Hero */}
      <div className="mf-hero">
        <div className="mf-hero-icon">🗂️</div>
        <h1 className="mf-hero-title">My Flashcards</h1>
        <p className="mf-hero-sub">Save sentences you want to memorize and review them anytime.</p>
        <div className="mf-hero-stats">
          <div className="mf-stat"><span className="mf-stat-num">{cards.length}</span><span className="mf-stat-label">Total</span></div>
          <div className="mf-stat"><span className="mf-stat-num">{unmastered.length}</span><span className="mf-stat-label">To Review</span></div>
          <div className="mf-stat"><span className="mf-stat-num">{cards.filter(c => c.mastered).length}</span><span className="mf-stat-label">Mastered</span></div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mf-tabs">
        <button className={`mf-tab ${tab === 'add' ? 'active' : ''}`} onClick={() => setTab('add')}>➕ Add</button>
        <button className={`mf-tab ${tab === 'list' ? 'active' : ''}`} onClick={() => setTab('list')}>
          📋 My Cards
          {cards.length > 0 && <span className="mf-tab-badge">{cards.length}</span>}
        </button>
      </div>

      {/* Content */}
      <div className="mf-content">
        {tab === 'add'
          ? <AddForm onAdded={() => { refresh(); setTab('list') }} />
          : <CardList
              cards={cards}
              onDelete={handleDelete}
              onToggleMastered={handleToggleMastered}
              onReview={setReviewCards}
            />
        }
      </div>
    </div>
  )
}
