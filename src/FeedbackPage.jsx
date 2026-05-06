import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './FeedbackPage.css'

const STORAGE_KEY = 'flashcard_feedback'

function loadFeedbacks() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  } catch {
    return []
  }
}

function saveFeedback(entry) {
  const list = loadFeedbacks()
  list.unshift(entry) // newest first
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
}

// ── Form Tab ──────────────────────────────────────────────────────────────────
function FormTab() {
  const [tab, setTab] = useState('suggestion')
  const [name, setName] = useState('')
  const [msg, setMsg] = useState('')
  const [status, setStatus] = useState('idle') // idle | sent

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!msg.trim()) return
    saveFeedback({
      id: Date.now(),
      type: tab,
      name: name.trim() || 'Anonymous',
      message: msg.trim(),
      date: new Date().toLocaleString(),
    })
    setStatus('sent')
    setName('')
    setMsg('')
  }

  return (
    <div className="fb-card">
      {/* Type tabs */}
      <div className="fb-tabs">
        <button
          className={`fb-tab ${tab === 'suggestion' ? 'active' : ''}`}
          onClick={() => { setTab('suggestion'); setStatus('idle') }}
        >
          <span className="fb-tab-icon">💬</span>
          <span>
            <div className="fb-tab-label">Suggestion</div>
            <div className="fb-tab-desc">Ideas for new features or content</div>
          </span>
        </button>
        <button
          className={`fb-tab ${tab === 'report' ? 'active' : ''}`}
          onClick={() => { setTab('report'); setStatus('idle') }}
        >
          <span className="fb-tab-icon">🚨</span>
          <span>
            <div className="fb-tab-label">Report</div>
            <div className="fb-tab-desc">Report a bug or issue</div>
          </span>
        </button>
      </div>

      {status === 'sent' ? (
        <div className="fb-success">
          <div className="fb-success-icon">✅</div>
          <div className="fb-success-title">Thank you!</div>
          <div className="fb-success-sub">
            {tab === 'suggestion'
              ? 'Your suggestion has been saved.'
              : 'Your report has been saved.'}
          </div>
          <button className="fb-again" onClick={() => setStatus('idle')}>Send another</button>
        </div>
      ) : (
        <form className="fb-form" onSubmit={handleSubmit}>
          <div className="fb-field">
            <label className="fb-label">Name</label>
            <input
              className="fb-input"
              type="text"
              placeholder="Your name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={60}
            />
          </div>
          <div className="fb-field">
            <label className="fb-label">
              {tab === 'suggestion' ? 'Suggestion' : 'Report'}
              <span className="fb-required"> *</span>
            </label>
            <textarea
              className="fb-textarea"
              placeholder={
                tab === 'suggestion'
                  ? 'Write your suggestion here...\nE.g. "Add lesson 9", "Improve quiz layout", etc.'
                  : 'Describe the issue you found...\nE.g. "Button X doesn\'t work on page Y"'
              }
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              rows={5}
              maxLength={1000}
              required
            />
            <div className="fb-char">{msg.length}/1000</div>
          </div>
          <button
            className="fb-submit"
            type="submit"
            disabled={!msg.trim()}
          >
            {tab === 'suggestion' ? '💬 Send Suggestion' : '🚨 Send Report'}
          </button>
        </form>
      )}
    </div>
  )
}

// ── Inbox Tab ─────────────────────────────────────────────────────────────────
function InboxTab() {
  const [feedbacks, setFeedbacks] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    setFeedbacks(loadFeedbacks())
  }, [])

  const filtered = filter === 'all'
    ? feedbacks
    : feedbacks.filter((f) => f.type === filter)

  const handleDelete = (id) => {
    const updated = feedbacks.filter((f) => f.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    setFeedbacks(updated)
  }

  const handleClearAll = () => {
    if (window.confirm('Delete all feedback? This cannot be undone.')) {
      localStorage.removeItem(STORAGE_KEY)
      setFeedbacks([])
    }
  }

  return (
    <div className="fb-inbox">
      {/* Filter + clear */}
      <div className="fb-inbox-toolbar">
        <div className="fb-inbox-filters">
          {['all', 'suggestion', 'report'].map((f) => (
            <button
              key={f}
              className={`fb-filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? 'All' : f === 'suggestion' ? '💬 Suggestions' : '🚨 Reports'}
              <span className="fb-filter-count">
                {f === 'all' ? feedbacks.length : feedbacks.filter((x) => x.type === f).length}
              </span>
            </button>
          ))}
        </div>
        {feedbacks.length > 0 && (
          <button className="fb-clear-btn" onClick={handleClearAll}>
            🗑 Clear all
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="fb-empty">
          <div className="fb-empty-icon">📭</div>
          <div className="fb-empty-text">No feedback yet</div>
        </div>
      ) : (
        <div className="fb-list">
          {filtered.map((f) => (
            <div key={f.id} className={`fb-item fb-item-${f.type}`}>
              <div className="fb-item-header">
                <span className="fb-item-type">
                  {f.type === 'suggestion' ? '💬 Suggestion' : '🚨 Report'}
                </span>
                <span className="fb-item-date">{f.date}</span>
                <button
                  className="fb-item-delete"
                  onClick={() => handleDelete(f.id)}
                  aria-label="Delete"
                >
                  ×
                </button>
              </div>
              <div className="fb-item-name">👤 {f.name}</div>
              <div className="fb-item-msg">{f.message}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function FeedbackPage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('form')
  const count = loadFeedbacks().length

  return (
    <div className="fb-page">
      {/* Nav */}
      <nav className="fb-nav">
        <button className="fb-back" onClick={() => navigate('/')}>← Back</button>
        <span className="fb-nav-title">Feedback</span>
      </nav>

      {/* Hero */}
      <div className="fb-hero">
        <div className="fb-hero-icon">📬</div>
        <h1 className="fb-hero-title">Share Your Thoughts</h1>
        <p className="fb-hero-sub">
          Your suggestions and reports help us improve this app.
        </p>
      </div>

      {/* Page tabs */}
      <div className="fb-page-tabs">
        <button
          className={`fb-page-tab ${activeTab === 'form' ? 'active' : ''}`}
          onClick={() => setActiveTab('form')}
        >
          ✏️ Send Feedback
        </button>
        <button
          className={`fb-page-tab ${activeTab === 'inbox' ? 'active' : ''}`}
          onClick={() => setActiveTab('inbox')}
        >
          📥 Inbox
          {count > 0 && <span className="fb-inbox-badge">{count}</span>}
        </button>
      </div>

      {/* Content */}
      <div className="fb-content">
        {activeTab === 'form' ? <FormTab /> : <InboxTab />}
      </div>
    </div>
  )
}
