import { useNavigate } from 'react-router-dom'
import './GamePage.css'

export default function GamePage({ file, title }) {
  const navigate = useNavigate()

  return (
    <div className="game-wrapper">
      <button className="back-btn" onClick={() => navigate('/')}>
        ← Back
      </button>
      <iframe
        src={`/games/${file}`}
        title={title}
        className="game-frame"
      />
    </div>
  )
}
