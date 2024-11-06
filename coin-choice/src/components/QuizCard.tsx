// src/components/QuizCard.tsx
import React from 'react';
import './QuizCard.scss'; // スタイルシートをインポート

interface QuizCardProps {
  question: string;
  children: React.ReactNode;
}

const QuizCard: React.FC<QuizCardProps> = ({ question, children }) => {
  return (
    <div
      className='quiz-card'
      style={{ backgroundImage: `url(/assets/images/card-background.svg)` }}
    >
      <div className='quiz-container'>
        <h2 className='quiz-question'>{question}</h2>
        <div className='quiz-content'>{children}</div>
      </div>
    </div>
  );
};

export default QuizCard;
