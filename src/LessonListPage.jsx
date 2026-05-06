import { useNavigate } from 'react-router-dom'
import { lessons } from './lessonData'
import './LessonListPage.css'

export default function LessonListPage() {
  const navigate = useNavigate()

  return (
    <div className="ll-page">
      {/* Nav */}
      <nav className="ll-nav">
        <button className="ll-back" onClick={() => navigate('/')}>
          ← Back
        </button>
        <span className="ll-nav-title">時代華語 Modern Chinese</span>
      </nav>

      {/* Hero */}
      <div className="ll-hero">
        <div className="ll-hero-badge">A1 · TOCFL · HSK 1–2</div>
        <div className="ll-hero-title">時代華語</div>
        <div className="ll-hero-sub">Modern Chinese</div>
        <div className="ll-hero-desc">
          8 lessons · {lessons.reduce((s, l) => s + l.vocabulary.length, 0)} vocabulary words · dialogues, grammar, reading &amp; quiz
        </div>
      </div>

      {/* Lesson list */}
      <div className="ll-content">
        <div className="ll-list">
          {lessons.map((lesson, idx) => (
            <button
              key={lesson.id}
              className="ll-item"
              onClick={() => navigate(`/lesson/${lesson.id}`)}
            >
              <div className="ll-item-num">{String(idx + 1).padStart(2, '0')}</div>
              <div className="ll-item-icon">{lesson.icon}</div>
              <div className="ll-item-body">
                <div className="ll-item-title">
                  第{lesson.id}課 &nbsp;{lesson.title}
                </div>
                <div className="ll-item-meta">
                  {lesson.vocabulary.length} vocab &bull; {lesson.grammar.length} grammar &bull; {lesson.quiz.length} quiz
                </div>
              </div>
              <div className="ll-item-level">{lesson.level}</div>
              <div className="ll-item-arrow">→</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
