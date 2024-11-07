// src/pages/HomePage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DynamicMap from '../components/DynamicMap';
import { prefectures } from '../data/prefectures';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n'; // i18nのインポート

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(e.target.value);
  };

  const pins = prefectures.map((pref) => ({
    id: pref.id,
    cityKey: `prefectures.${pref.id}.name`, // Translation key for name
    latitude: pref.latitude,
    longitude: pref.longitude,
    isCompleted: false, // HomePageでは完了状態は不要
    onClick: () => navigate(`/${pref.id}`),
  }));

  // 日本の中央付近の座標
  const japanCenter: [number, number] = [37.7749, 139.2394];

  return (
    <div
      style={{
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* 言語切り替えプルダウン */}
      <div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: '1000'}}>
        <label htmlFor='language-select'>{t('selectLanguage')}: </label>
        <select
          id='language-select'
          onChange={handleLanguageChange}
          value={i18n.language}
        >
          <option value='en'>English</option>
          <option value='jp'>日本語</option>
          {/* 他の言語を追加可能 */}
        </select>
      </div>

      {/* 地図とピンの表示 */}
      <DynamicMap
        center={japanCenter}
        zoom={5}
        quizzes={pins}
        prefectureName='' // HomePageでは都道府県名は不要
      />
    </div>
  );
};

export default HomePage;
