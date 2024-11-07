// src/pages/PrefecturePage.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Map from '../components/Map';
import { prefectures } from '../data/prefectures';
import { quizzes } from '../data/quizzes';
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

  // Get the selected prefecture's data
  const selectedPref = prefectures.find((pref) => pref.id === prefecture);

  if (!selectedPref) {
    return <div>都道府県が見つかりません。</div>;
  }

  // Retrieve quizzes for the selected prefecture
  const prefectureQuizzes = quizzes[prefecture || ''] || [];

  // Generate pins based on the quizzes for the prefecture
  const pins = prefectureQuizzes.map((quiz, index) => {
    const quizId = `q${index + 1}`;
    const quizKey = `${prefecture}-${quizId}`;
    const isCompleted = completedQuizzes.includes(quizKey);

    return {
      id: quiz.id,
      city: quiz.city, // Add city information for each pin
      name: quiz.city,
      top: 30 + index * 10, // Adjust position as needed
      left: 50, // Adjust position as needed
      disabled: isCompleted,
      isCompleted,
      onClick: () => {
        if (isCompleted) {
          navigate(`/${prefecture}/${quizId}/prize`);
        } else {
          navigate(`/${prefecture}/${quizId}`);
        }
      },
    };
  });

  return (
    <>
      <button onClick={() => navigate(-1)}>
        <ArrowBackIcon /> 戻る
      </button>
      <Map imageSrc={`/assets/images/${prefecture}-map.svg`} pins={pins} />
    </>
  );
};

export default PrefecturePage;