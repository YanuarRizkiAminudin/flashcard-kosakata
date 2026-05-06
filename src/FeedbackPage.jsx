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
        <h1 className="fb-hero-title">Sampaikan Pendapatmu</h1>
        <p className="fb-hero-sub">
          Saran dan pengaduan kamu sangat berarti untuk pengembangan aplikasi ini.
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
                <div className="fb-tab-label">Saran</div>
                <div className="fb-tab-desc">Ide fitur atau konten baru</div>
              </span>
            </button>
            <button
              className={`fb-tab ${tab === 'pengaduan' ? 'active' : ''}`}
              onClick={() => { setTab('pengaduan'); setStatus('idle') }}
            >
              <span className="fb-tab-icon">🚨</span>
              <span>
                <div className="fb-tab-label">Pengaduan</div>
                <div className="fb-tab-desc">Laporkan bug atau masalah</div>
              </span>
            </button>
          </div>

          {/* Success */}
          {status === 'sent' ? (
            <div className="fb-success">
              <div className="fb-success-icon">✅</div>
              <div className="fb-success-title">Terima kasih!</div>
              <div className="fb-success-sub">
                {tab === 'saran'
                  ? 'Saran kamu sudah kami terima dan akan kami pertimbangkan.'
                  : 'Pengaduan kamu sudah kami catat dan akan segera ditindaklanjuti.'}
              </div>
              <div className="fb-success-actions">
                <button className="fb-again" onClick={() => setStatus('idle')}>Kirim lagi</button>
                <button className="fb-home" onClick={() => navigate('/')}>Kembali ke Home</button>
              </div>
            </div>
          ) : (
            <form className="fb-form" onSubmit={handleSubmit}>
              <div className="fb-field">
                <label className="fb-label">Nama</label>
                <input
                  className="fb-input"
                  type="text"
                  placeholder="Nama kamu (opsional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={60}
                />
              </div>

              <div className="fb-field">
                <label className="fb-label">
                  {tab === 'saran' ? 'Saran' : 'Pengaduan'}
                  <span className="fb-required"> *</span>
                </label>
                <textarea
                  className="fb-textarea"
                  placeholder={
                    tab === 'saran'
                      ? 'Tulis saranmu di sini...\nContoh: "Tambahkan lesson 9", "Perbaiki tampilan quiz", dll.'
                      : 'Ceritakan masalah yang kamu temukan...\nContoh: "Tombol X tidak berfungsi di halaman Y"'
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
                  ⚠️ Gagal mengirim. Periksa koneksi internet kamu dan coba lagi.
                </div>
              )}

              <button
                className="fb-submit"
                type="submit"
                disabled={status === 'sending' || !msg.trim()}
              >
                {status === 'sending'
                  ? '⏳ Mengirim...'
                  : tab === 'saran'
                  ? '💬 Kirim Saran'
                  : '🚨 Kirim Pengaduan'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
