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
    name: pref.name,
    city: pref.name,
    onClick: () => navigate(`/${pref.id}`),
    count: pref.quizzes,
  }));

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <Map imageSrc='/assets/images/japan-map.png' pins={pins} />
    </div>
  );
};

export default HomePage;
