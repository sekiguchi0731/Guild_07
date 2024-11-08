// src/components/QuizCard.tsx
import React from 'react';

const QuizCard: React.FC<{ question: string; children: React.ReactNode }> = ({
  question,
  children,
}) => {
  return (
    <div
      className='quiz-card'
      style={{
        borderRadius: '40px',
        width: '300px',
        height: '70vh',
        margin: window.innerWidth >= 450 ? '0 auto' : 'auto',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        backgroundImage: 'url(../../assets/images/quiz/quizBackground.webp)',
        position: 'relative',
      }}
    >
      <img
        src='../../assets/images/quiz/ribbon.webp'
        alt='Overlay'
        style={{
          width: '100%',
          position: 'relative',
          top: '10%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
        }}
      />
      <img
        src='../../assets/images/quiz/blossom.webp'
        alt='Overlay'
        style={{
          width: '30%',
          position: 'absolute',
          top: '10%',
          left: '85%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
        }}
      />
      <div
        className='quiz-container'
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '30vh',
          gap: '20px',
        }}
      >
        <h2
          className='quiz-question'
          style={{
            fontSize: '18px',
            marginBottom: '20px',
            color: '#333333',
          }}
        >
          {question}
        </h2>
        <div
          className='quiz-content'
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '50px',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
