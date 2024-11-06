// src/pages/PrefecturePage.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Map from '../components/Map';
import { prefectures } from '../data/prefectures';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PrefecturePage: React.FC = () => {
  const { prefecture } = useParams<{ prefecture: string }>();
  const navigate = useNavigate();
  const [completedQuizzes, setCompletedQuizzes] = useState<string[]>([]);

  useEffect(() => {
    const storedCompletedQuizzes = JSON.parse(
      localStorage.getItem('completedQuizzes') || '[]',
    );
    setCompletedQuizzes(storedCompletedQuizzes);
  }, []);

  // 選択された都道府県の情報を取得
  const selectedPref = prefectures.find((pref) => pref.id === prefecture);

  if (!selectedPref) {
    return <div>都道府県が見つかりません。</div>;
  }

  // クイズ数に応じてピンを生成
  const pins = Array.from({ length: selectedPref.quizzes }, (_, index) => {
    const quizId = `q${index + 1}`;
    return {
      id: quizId,
      top: 30 + index * 10, // ピンの位置は例として上下にずらす
      left: 50,
      disabled: completedQuizzes.includes(`${prefecture}-${quizId}`),
      onClick: () => navigate(`/${prefecture}/${quizId}`),
    };
  });

  return (
    <>
      <button onClick={() => navigate(-1)}>
        <ArrowBackIcon /> 戻る
      </button>
      <Map imageSrc={`/assets/images/${prefecture}-map.png`} pins={pins} />
    </>
  );
};

export default PrefecturePage;
