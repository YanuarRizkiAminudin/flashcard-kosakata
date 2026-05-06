import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './FeedbackPage.css'

export default function FeedbackPage() {
  const navigate = useNavigate()
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

      {/* Card */}
      <div className="fb-content">
        <div className="fb-card">

          {/* Tabs */}
          <div className="fb-tabs">
            <button
              className={`fb-tab ${tab === 'saran' ? 'active' : ''}`}
              onClick={() => { setTab('saran'); setStatus('idle') }}
            >
              <span className="fb-tab-icon">💬</span>
              <span>
                <div className="fb-tab-label">Suggestion</div>
                <div className="fb-tab-desc">Ideas for new features or content</div>
              </span>
            </button>
            <button
              className={`fb-tab ${tab === 'pengaduan' ? 'active' : ''}`}
              onClick={() => { setTab('pengaduan'); setStatus('idle') }}
            >
              <span className="fb-tab-icon">🚨</span>
              <span>
                <div className="fb-tab-label">Report</div>
                <div className="fb-tab-desc">Report a bug or issue</div>
              </span>
            </button>
          </div>

          {/* Success */}
          {status === 'sent' ? (
            <div className="fb-success">
              <div className="fb-success-icon">✅</div>
              <div className="fb-success-title">Thank you!</div>
              <div className="fb-success-sub">
                {tab === 'saran'
                  ? 'Your suggestion has been received. We will take it into consideration.'
                  : 'Your report has been noted and will be addressed soon.'}
              </div>
              <div className="fb-success-actions">
                <button className="fb-again" onClick={() => setStatus('idle')}>Send another</button>
                <button className="fb-home" onClick={() => navigate('/')}>Back to Home</button>
              </div>
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
                  {tab === 'saran' ? 'Suggestion' : 'Report'}
                  <span className="fb-required"> *</span>
                </label>
                <textarea
                  className="fb-textarea"
                  placeholder={
                    tab === 'saran'
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

              {status === 'error' && (
                <div className="fb-error">
                  ⚠️ Failed to send. Check your internet connection and try again.
                </div>
              )}

              <button
                className="fb-submit"
                type="submit"
                disabled={status === 'sending' || !msg.trim()}
              >
                {status === 'sending'
                  ? '⏳ Sending...'
                  : tab === 'saran'
                  ? '💬 Send Suggestion'
                  : '🚨 Send Report'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
