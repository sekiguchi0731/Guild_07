// src/components/QuizCard.tsx
import React from 'react';

interface QuizCardProps {
  question: string;
  correctAnswer: string;
  children: React.ReactNode;
  city: string;
  onSubmit: (selectedAnswer: string) => void;
}

const QuizCard: React.FC<QuizCardProps> = ({
  question,
  children,
  city,
  onSubmit,
}) => {
  const handleOptionClick = (option: string) => {
    onSubmit(option);
  };

  return (
    <div
      className='quiz-card'
      style={{
        borderRadius: '40px',
        maxWidth: '500px',
        height: '80vh',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
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
      <img
        src='../../assets/images/quiz/Asakusa.webp'
        alt='Overlay'
        style={{
          position: 'absolute',
          width: '90%',
          top: '33%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
        }}
      />
      <div
        className='title'
        style={{
          textAlign: 'center',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          position: 'absolute',
          top: '5%',
          fontSize: '24px',
        }}
      >
        {city}
      </div>
      <div
        className='quiz-container'
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '35vh',
          gap: '20px',
        }}
      >
        <h2
          className='quiz-question'
          style={{
            width: '90%',
            display: 'relative',
            fontSize: '20px',
            color: '#333333',
          }}
        >
          {question}
        </h2>

        <div
          className='quiz-content'
          style={{
            fontSize: '14px',
            width: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'left',
            gap: '50px',
          }}
        >
          {children}
        </div>

        <div
          className='choices'
          style={{
            width: '100%',
            display: 'flex',
            gap: '20px',
          }}
        >
          <button
            className='choice-button'
            onClick={() => handleOptionClick('A')}
            style={{
              padding: '12px 24px',
              width: '33%',
              fontSize: '20px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              backgroundColor: 'aqua',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = '#0056b3')
            }
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'aqua')}
          >
            A
          </button>
          <button
            className='choice-button'
            onClick={() => handleOptionClick('B')}
            style={{
              padding: '12px 24px',
              width: '33%',
              fontSize: '20px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              backgroundColor: 'aqua',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = '#0056b3')
            }
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'aqua')}
          >
            B
          </button>
          <button
            className='choice-button'
            onClick={() => handleOptionClick('C')}
            style={{
              padding: '12px 24px',
              width: '33%',
              fontSize: '20px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              backgroundColor: 'aqua',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = '#0056b3')
            }
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'aqua')}
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
