import { useNavigate } from 'react-router-dom'
import { useState, useRef } from 'react'
import './VoicePage.css'

const tracks = [
  {
    id: 1,
    title: 'Audio 1',
    file: '/games/flashcard_lengkap_intact/download (20).wav',
  },
  {
    id: 2,
    title: 'Audio 2',
    file: '/games/flashcard_lengkap_intact/download (21).wav',
  },
  {
    id: 3,
    title: 'Audio 3',
    file: '/games/flashcard_lengkap_intact/download (22).wav',
  },
]

function TrackCard({ track }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const togglePlay = () => {
    const audio = audioRef.current
    if (playing) {
      audio.pause()
    } else {
      audio.play()
    }
    setPlaying(!playing)
  }

  const handleTimeUpdate = () => {
    const audio = audioRef.current
    setCurrentTime(audio.currentTime)
    setProgress((audio.currentTime / audio.duration) * 100 || 0)
  }

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration)
  }

  const handleEnded = () => {
    setPlaying(false)
    setProgress(0)
    setCurrentTime(0)
  }

  const handleSeek = (e) => {
    const audio = audioRef.current
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const ratio = x / rect.width
    audio.currentTime = ratio * audio.duration
  }

  const fmt = (s) => {
    if (!s || isNaN(s)) return '0:00'
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${sec.toString().padStart(2, '0')}`
  }

  return (
    <div className="track-card">
      <audio
        ref={audioRef}
        src={track.file}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />
      <div className="track-info">
        <div className="track-icon">🎙️</div>
        <div className="track-title">{track.title}</div>
      </div>

      <div className="track-controls">
        <button className={`play-btn ${playing ? 'playing' : ''}`} onClick={togglePlay}>
          {playing ? '⏸' : '▶'}
        </button>

        <div className="track-progress-wrap">
          <div className="track-bar-bg" onClick={handleSeek}>
            <div className="track-bar-fill" style={{ width: `${progress}%` }} />
          </div>
          <div className="track-times">
            <span>{fmt(currentTime)}</span>
            <span>{fmt(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function VoicePage() {
  const navigate = useNavigate()

  return (
    <div className="voice-page">
      <button className="back-btn" onClick={() => navigate('/')}>
        ← Back
      </button>
      <div className="voice-content">
        <h1 className="voice-title">🎙️ Voice Record Mandarin</h1>
        <p className="voice-sub">3 audio recordings available</p>
        <div className="tracks-list">
          {tracks.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      </div>
    </div>
  )
}
