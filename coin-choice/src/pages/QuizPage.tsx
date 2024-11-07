// src/pages/QuizPage.tsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { quizzes } from '../data/quizzes';
import QuizCard from '../components/QuizCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTranslation } from 'react-i18next';

const QuizPage: React.FC = () => {
  const { prefecture, quizId } = useParams<{
    prefecture: string;
    quizId: string;
  }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [userAnswer, setUserAnswer] = useState<string | null>(null);

  // prefectureとquizIdが定義されていることを確認
  if (!prefecture || !quizId) {
    return <div>{t('quizNotFound')}</div>;
  }

  // クイズデータを取得
  const quizData = quizzes[prefecture]?.find((quiz) => quiz.id === quizId);

  if (!quizData) {
    return <div>{t('quizNotFound')}</div>;
  }

  // 翻訳キーを生成
  const questionKey = `quiz.${prefecture}.${quizId}.question`;
  const choicesKey = `quiz.${prefecture}.${quizId}.choices`;
  const answerKey = `quiz.${prefecture}.${quizId}.answer`;

  // 質問と選択肢を取得
  const question = t(questionKey);
  const choices: string[] = t(choicesKey, { returnObjects: true }) as string[];
  const correctAnswer = t(answerKey);

  // 回答の評価
  const handleSubmit = (selectedAnswer: string) => {
    setUserAnswer(selectedAnswer);

    if (selectedAnswer === correctAnswer) {
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
      alert(t('incorrectAnswer'));
    }
  };

  return (
    <>
      <button onClick={() => navigate(-1)} style={{ margin: '20px' }}>
        <ArrowBackIcon /> {t('back')}
      </button>
      <QuizCard question={question}>
        {choices.length > 0 ? (
          <div className='choices'>
            {choices.map((choice, index) => (
              <button
                key={index}
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
              placeholder={t('enterAnswer')}
              className='answer-input'
            />
            <button
              onClick={() => {
                if (userAnswer && userAnswer.trim() !== '') {
                  handleSubmit(userAnswer.trim());
                } else {
                  alert(t('pleaseEnterAnswer'));
                }
              }}
              className='submit-button'
            >
              {t('submit')}
            </button>
          </div>
        )}
      </QuizCard>
    </>
  );
};

export default QuizPage;
