// src/pages/PrefecturePage.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { prefectures } from '../data/prefectures';
import { quizzes } from '../data/quizzes';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DynamicMap from '../components/DynamicMap';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';

const PrefecturePage: React.FC = () => {
  const { prefecture } = useParams<{ prefecture: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
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
    return <div>{t('prefectureNotFound')}</div>;
  }

  // Retrieve quizzes for the selected prefecture
  const prefectureQuizzes = quizzes[prefecture || ''] || [];

  // Generate quiz data for the map
  const mapQuizzes = prefectureQuizzes.map((quiz) => {
    const quizId = quiz.id;
    const quizKey = `${prefecture}-${quizId}`;
    const isCompleted = completedQuizzes.includes(quizKey);

    return {
      id: quizId,
      cityKey: quiz.cityKey,
      latitude: quiz.latitude,
      longitude: quiz.longitude,
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
      <Button onClick={() => navigate(-1)} style={{ margin: '20px' }}>
        <ArrowBackIcon /> {t('back')}
      </Button>
      <DynamicMap
        center={[selectedPref.latitude, selectedPref.longitude]}
        zoom={12}
        quizzes={mapQuizzes}
        prefectureName={t(`prefectures.${prefecture}.name`)}
      />
    </>
  );
};

export default PrefecturePage;
