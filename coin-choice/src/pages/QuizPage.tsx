import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const QuizPage: React.FC = () => {
  const { prefecture, quizId } = useParams<{
    prefecture: string;
    quizId: string;
  }>();
  const navigate = useNavigate();
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    // ここで回答の判定を行います（仮に "correct" が正解とします）
    if (answer === 'correct') {
      setIsCorrect(true);
      // クイズ完了状態を保存する処理を追加（例：ローカルストレージやコンテキストAPI）
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
      <p>ここにクイズの問題を表示します。</p>
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
