import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { quizzes } from '../data/quizzes';

const QuizPage: React.FC = () => {
  const { prefecture, quizId } = useParams<{
    prefecture: string;
    quizId: string;
  }>();
  const navigate = useNavigate();
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  if (!prefecture) {
    return <div>クイズが見つかりません</div>
  }

  // クイズデータを取得
  const quizData = quizzes[prefecture]?.find((quiz) => quiz.id === quizId);

  if (!quizData) {
    return <div>クイズが見つかりません。</div>;
  }

  const handleSubmit = () => {
    if (answer === quizData.answer) {
      setIsCorrect(true);

      // クイズ完了状態を保存
      const completedQuizzes = JSON.parse(
        localStorage.getItem('completedQuizzes') || '[]',
      );
      const quizKey = `${prefecture}-${quizId}`;
      if (!completedQuizzes.includes(quizKey)) {
        completedQuizzes.push(quizKey);
        localStorage.setItem(
          'completedQuizzes',
          JSON.stringify(completedQuizzes),
        );
      }
    } else {
      alert('不正解です。もう一度お試しください。');
    }
  };

  if (isCorrect) {
    return (
      <div>
        <h2>正解です！</h2>
        <img
          src={`/assets/images/${prefecture}-${quizId}-image.png`}
          alt='Prize'
        />
        <button onClick={() => navigate(`/${prefecture}`)}>戻る</button>
      </div>
    );
  }

  return (
    <div>
      <h2>クイズ {quizId}</h2>
      <p>{quizData.question}</p>
      <input
        type='text'
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder='回答を入力'
      />
      <button onClick={handleSubmit}>回答する</button>
    </div>
  );
};

export default QuizPage;
