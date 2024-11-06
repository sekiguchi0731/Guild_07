
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrefecturePage from './pages/PrefecturePage';
import QuizPage from './pages/QuizPage';
import PrizePage from './pages/PrizePage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/:prefecture' element={<PrefecturePage />} />
      <Route path='/:prefecture/:quizId' element={<QuizPage />} />
      <Route path='/:prefecture/:quizId/prize' element={<PrizePage />} />
    </Routes>
  );
};

export default App;
