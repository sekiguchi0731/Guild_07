import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrefecturePage from './pages/PrefecturePage';
import QuizPage from './pages/QuizPage';
import PrizePage from './pages/PrizePage';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div style={{ marginTop: '10vh' }}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:prefecture' element={<PrefecturePage />} />
          <Route path='/:prefecture/:quizId' element={<QuizPage />} />
          <Route path='/:prefecture/:quizId/prize' element={<PrizePage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
