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
  const [, setUserAnswer] = useState<string | null>(null);

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
  const cityKey = quizData.cityKey;
  const imageSrc = `../../public/assets/images/card-photos/${prefecture}-${quizId}.webp`;

  // 質問と選択肢を取得
  const question = t(questionKey);
  const choices: string[] = t(choicesKey, { returnObjects: true }) as string[];
  const correctAnswer = t(answerKey);
  const correctAnswerIndex = choices.findIndex(
    (choice) => choice === correctAnswer,
  );
  const correctAnswerOption = ['A', 'B', 'C'][correctAnswerIndex];
  const city = t(cityKey);

  // 回答の評価
  const handleSubmit = (selectedAnswer: string) => {
    console.log(correctAnswerOption);
    setUserAnswer(selectedAnswer);

    if (selectedAnswer === correctAnswerOption) {
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
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div style={{ alignSelf: 'flex-start', margin: '10px' }}>
        <Button onClick={() => navigate(-1)}>
          <ArrowBackIcon /> {t('back')}
        </Button>
      </div>
      <QuizCard
        question={question}
        city={city}
        correctAnswer={correctAnswerOption}
        onSubmit={handleSubmit}
        imageSrc={imageSrc}
      >
        <div className='choices'>
          {choices.map((choice, index) => (
            <div
              key={index}
              onClick={() => handleSubmit(choice)}
              className='choice-item'
            >
              {String.fromCharCode(65 + index)}. {choice}
            </div>
          ))}
        </div>
      </QuizCard>
    </div>
  );
};

export default QuizPage;
