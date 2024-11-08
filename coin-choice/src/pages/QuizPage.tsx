// src/pages/QuizPage.tsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { quizzes } from '../data/quizzes';
import QuizCard from '../components/QuizCard';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';

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
  const cityKey = `quiz.${prefecture}.${quizId}.city`;

  // 質問と選択肢を取得
  const question = t(questionKey);
  const choices: string[] = t(choicesKey, { returnObjects: true }) as string[];
  const correctAnswer = t(answerKey);
  const city = t(cityKey);

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
      <Button onClick={() => navigate(-1)} style={{ margin: '20px' }}>
        <ArrowBackIcon /> {t('back')}
      </Button>
      <QuizCard question={question}>
        {/* <p>
          <strong>{t('quiz')}:</strong> {t(`prefectures.${prefecture}.name`)}
        </p>
        <p>
          <strong>{t('city')}:</strong> {city}
        </p> */}
        {choices.length > 0 ? (
          <div className='choices'>
            {choices.map((choice, index) => (
              <Button
                key={index}
                onClick={() => handleSubmit(choice)}
                className='choice-button'
                variant='contained'
              >
                {choice}
              </Button>
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
            <Button
              onClick={() => {
                if (userAnswer && userAnswer.trim() !== '') {
                  handleSubmit(userAnswer.trim());
                } else {
                  alert(t('pleaseEnterAnswer'));
                }
              }}
              className='submit-button'
              variant='contained'
            >
              {t('submit')}
            </Button>
          </div>
        )}
      </QuizCard>
    </>
  );
};

export default QuizPage;
