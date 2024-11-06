// src/pages/QuizPage.tsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { quizzes } from '../data/quizzes';
import QuizCard from '../components/QuizCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const QuizPage: React.FC = () => {
  const { prefecture, quizId } = useParams<{
    prefecture: string;
    quizId: string;
  }>();
  const navigate = useNavigate();
  const [isCorrect, setIsCorrect] = useState(false);
  const [userAnswer, setUserAnswer] = useState<string | null>(null);

  // prefectureとquizIdが定義されていることを確認
  if (!prefecture || !quizId) {
    return <div>クイズが見つかりません。</div>;
  }

  // クイズデータを取得
  const quizData = quizzes[prefecture]?.find((quiz) => quiz.id === quizId);

  if (!quizData) {
    return <div>クイズが見つかりません。</div>;
  }

  // 回答の評価
  const handleSubmit = (selectedAnswer: string) => {
    setUserAnswer(selectedAnswer); // ユーザーの回答をセット

    if (selectedAnswer === quizData.answer) {
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

      // 正解したら賞品ページに遷移
      navigate(`/${prefecture}/${quizId}/prize`);
    } else {
      alert('不正解です。もう一度お試しください。');
    }
  };

  return (
    <>
      <button onClick={() => navigate(-1)}>
        <ArrowBackIcon /> 戻る
      </button>
      <QuizCard question={quizData.question}>
        {quizData.choices ? (
          <div className='choices'>
            {quizData.choices.map((choice) => (
              <button
                key={choice}
                onClick={() => handleSubmit(choice)}
                className='choice-button'
              >
                {choice}
              </button>
            ))}
          </div>
        ) : (
          <div className='text-input-section'>
            <input
              type='text'
              value={userAnswer || ''}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder='回答を入力'
              className='answer-input'
            />
            <button
              onClick={() => {
                if (userAnswer && userAnswer.trim() !== '') {
                  handleSubmit(userAnswer.trim());
                } else {
                  alert('回答を入力してください。');
                }
              }}
              className='submit-button'
            >
              回答する
            </button>
          </div>
        )}
      </QuizCard>
    </>
  );
};

export default QuizPage;
