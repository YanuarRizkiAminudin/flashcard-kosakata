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
      <Route path="/game/toeic-verb-guess" element={<GamePage file="flashcard_lengkap_intact/toeic_verb_guess.html" title="TOEIC Verb V1/V2/V3/Ving" />} />
      <Route path="/game/toeic-verb-pattern" element={<GamePage file="flashcard_lengkap_intact/toeic_verb_pattern.html" title="Pola Verb TOEIC/TOEFL" />} />
      <Route path="/game/wo-shi-zhen-de" element={<GamePage file="flashcard_lengkap_intact/wo_shi_zhen_de.html" title="我是真的真的真的很愛你" />} />
      <Route path="/game/toefl-test" element={<GamePage file="flashcard_lengkap_intact/toefl_test.html" title="TOEFL iBT Simulation" />} />
      <Route path="/game/toeic-test06-vocab" element={<GamePage file="flashcard_lengkap_intact/toeic_test06_vocab.html" title="TOEIC Test 06 Vocabulary" />} />
      <Route path="/game/mandarin-l10" element={<GamePage file="flashcard_lengkap_intact/mandarin_l10.html" title="Mandarin L10 — 看醫生" />} />
      <Route path="/game/mandarin-adverbs" element={<GamePage file="flashcard_lengkap_intact/mandarin_adverbs_3lang.html" title="Kata Keterangan Mandarin 3 Bahasa" />} />
      <Route path="/game/mandarin-mei-vocab" element={<GamePage file="flashcard_lengkap_intact/mandarin_mei_vocab.html" title="Mandarin — 沒 Phrases & Kosakata" />} />
      <Route path="/game/psychology-of-money" element={<GamePage file="flashcard_lengkap_intact/psychology_of_money.html" title="The Psychology of Money" />} />
      <Route path="/game/pom-chapter1" element={<GamePage file="flashcard_lengkap_intact/pom_chapter1.html" title="Psychology of Money — Intro + Ch.1" />} />
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
