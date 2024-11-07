// src/pages/PrizePage.tsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PrizePage.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PrizePage: React.FC = () => {
  const { prefecture, quizId } = useParams<{
    prefecture: string;
    quizId: string;
  }>();
  const navigate = useNavigate();

  // undefinedチェック
  if (!prefecture || !quizId) {
    return <div>賞品ページが見つかりません。</div>;
  }

  return (
    <>
      <button onClick={() => navigate(-1)}>
        <ArrowBackIcon /> 戻る
      </button>
      <div className='prize-container'>
        <h2>Congrats!</h2>
        <h3>You got the prize of {quizId} in {prefecture}!</h3>
        <img
          src={`/assets/images/prizes/${prefecture}-${quizId}-prize.png`}
          alt='Prize'
          className='prize-image'
        />
      </div>
    </>
  );
};

export default PrizePage;
