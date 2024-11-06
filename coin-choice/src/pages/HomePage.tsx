import React from 'react';
import { useNavigate } from 'react-router-dom';
import Map from '../components/Map';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const pins = [
    {
      id: 'tokyo',
      top: 50,
      left: 60,
      disabled: false,
      onClick: () => navigate('/tokyo'),
    },
    // 他の都道府県のピンを追加
  ];

  return <Map imageSrc='assets/images/japan-map.png' pins={pins} />;
};

export default HomePage;
