import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Map from '../components/Map';
import { prefectures } from '../data/prefectures';

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

  const selectedPref = prefectures.find((pref) => pref.id === prefecture);

  if (!selectedPref) {
    return <div>都道府県が見つかりません。</div>;
  }

  const pins = Array.from({ length: selectedPref.quizzes }, (_, index) => {
    const quizId = `q${index + 1}`;
    return {
      id: quizId,
      top: 30 + index * 10,
      left: 50,
      disabled: completedQuizzes.includes(`${prefecture}-${quizId}`),
      onClick: () => navigate(`/${prefecture}/${quizId}`),
    };
  });

  return <Map imageSrc={`/assets/images/${prefecture}-map.png`} pins={pins} />;
};

export default PrefecturePage;
