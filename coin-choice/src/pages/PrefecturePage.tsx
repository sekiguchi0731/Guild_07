import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Map from '../components/Map';

const PrefecturePage: React.FC = () => {
  const { prefecture } = useParams<{ prefecture: string }>();
  const navigate = useNavigate();

  const [completedQuizzes, setCompletedQuizzes] = useState<string[]>([]);

  const pins = [
    {
      id: 'q1',
      top: 30,
      left: 50,
      disabled: completedQuizzes.includes('q1'),
      onClick: () => navigate(`/${prefecture}/q1`),
    },
    // 他のクイズのピンを追加
  ];

  return <Map imageSrc={`/assets/images/${prefecture}-map.png`} pins={pins} />;
};

export default PrefecturePage;
