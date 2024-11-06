import React from 'react';
import { useNavigate } from 'react-router-dom';
import Map from '../components/Map';
import { prefectures } from '../data/prefectures';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const pins = prefectures.map((pref) => ({
    id: pref.id,
    top: pref.top,
    left: pref.left,
    disabled: false,
    onClick: () => navigate(`/${pref.id}`),
    count: pref.quizzes, // クイズ数を追加
  }));

  return <Map imageSrc='/assets/images/japan-map.png' pins={pins} />;
};

export default HomePage;
