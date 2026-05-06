import { Routes, Route } from 'react-router-dom'
import FlashcardPage from './FlashcardPage'
import GamePage from './GamePage'
import VoicePage from './VoicePage'
import ToeicTestPage from './ToeicTestPage'
import LessonPage from './LessonPage'
import LessonListPage from './LessonListPage'
import FeedbackPage from './FeedbackPage'
import MyFlashcardPage from './MyFlashcardPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<FlashcardPage />} />
      <Route path="/game/flashcard-mandarin" element={<GamePage file="flashcard_lengkap_intact/flashcard_lengkap_intact.html" title="Flashcard Mandarin INTACT" />} />
      <Route path="/game/toeic-vocabulary" element={<GamePage file="flashcard_lengkap_intact/toeic_vocabulary_flashcard.html" title="TOEIC Vocabulary" />} />
      <Route path="/voice" element={<VoicePage />} />
      <Route path="/toeic-test" element={<ToeicTestPage />} />
      <Route path="/lessons" element={<LessonListPage />} />
      <Route path="/lesson/:id" element={<LessonPage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
      <Route path="/my-flashcards" element={<MyFlashcardPage />} />
    </Routes>
  )
}

export default App
