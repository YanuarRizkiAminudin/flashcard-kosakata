import { useState } from 'react'

// ⚠️ GANTI PASSWORD DI BAWAH INI
// Jangan share file ini ke siapapun
const CORRECT_PASSWORD = 'tapa ijin nggak ridho'

export default function LoginPage({ onLogin }) {
  const [input, setInput] = useState('')
  const [error, setError] = useState('')
  const [shake, setShake] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (input === CORRECT_PASSWORD) {
      localStorage.setItem('fc_auth', '1')
      onLogin()
    } else {
      setError('Password salah, coba lagi.')
      setShake(true)
      setInput('')
      setTimeout(() => setShake(false), 500)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#eef2f7',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '"DM Sans", sans-serif',
      padding: '16px'
    }}>
      <div style={{
        background: '#fff',
        borderRadius: '20px',
        padding: '2.5rem 2rem',
        width: '100%',
        maxWidth: '360px',
        boxShadow: '0 8px 32px rgba(124,58,237,.12)',
        border: '1px solid #e8e4dc',
        animation: shake ? 'shake .5s' : 'none'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <div style={{ fontSize: '48px', marginBottom: '10px' }}>🔒</div>
          <div style={{ fontSize: '18px', fontWeight: 700, color: '#1a1814' }}>
            Flashcard Kosakata
          </div>
          <div style={{ fontSize: '13px', color: '#8a8478', marginTop: '4px' }}>
            Masukkan password untuk melanjutkan
          </div>
        </div>

        <div style={{
          background: '#fff1f2',
          border: '1px solid #fca5a5',
          borderRadius: '10px',
          padding: '10px 14px',
          marginBottom: '1.2rem',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#dc2626', marginBottom: '2px' }}>
            ⚠️ Tanpa Izin = Haram
          </div>
          <div style={{ fontSize: '12px', color: '#b91c1c', lineHeight: 1.5 }}>
            <strong>Flashcard Kosakata</strong> adalah milik pribadi.<br />
            Penggunaan tanpa izin pemilik tidak diperbolehkan.
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={input}
            onChange={e => { setInput(e.target.value); setError('') }}
            placeholder="Password"
            autoFocus
            style={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '12px',
              border: error ? '1.5px solid #dc2626' : '1.5px solid #e8e4dc',
              fontSize: '15px',
              fontFamily: '"DM Sans", sans-serif',
              outline: 'none',
              boxSizing: 'border-box',
              marginBottom: '8px',
              transition: 'border .2s'
            }}
          />
          {error && (
            <div style={{ fontSize: '12px', color: '#dc2626', marginBottom: '10px' }}>
              {error}
            </div>
          )}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '13px',
              borderRadius: '12px',
              border: 'none',
              background: 'linear-gradient(135deg,#7c3aed,#2563eb)',
              color: '#fff',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: '"DM Sans", sans-serif',
              boxShadow: '0 3px 10px rgba(124,58,237,.25)'
            }}
          >
            Masuk →
          </button>
        </form>
      </div>

      <style>{`
        @keyframes shake {
          0%,100%{transform:translateX(0)}
          20%,60%{transform:translateX(-8px)}
          40%,80%{transform:translateX(8px)}
        }
      `}</style>
    </div>
  )
}
