import React from 'react';
import { useNavigate } from 'react-router-dom';
import Map from '../components/Map';
import { prefectures } from '../data/prefectures';
import { useTranslation } from 'react-i18next';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const pins = prefectures.map((pref) => ({
    id: pref.id,
    top: pref.top,
    left: pref.left,
    disabled: false,
    name: pref.name,
    city: pref.name,
    onClick: () => navigate(`/${pref.id}`),
    count: pref.quizzes, // クイズ数を追加
  }));

  return (
    <div style={{ display: 'flex' }}>
      {/* 言語切り替えプルダウン */}
      <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 1000 }}>
        <label htmlFor='language-select'>{t('selectLanguage')}: </label>
        <select
          id='language-select'
          onChange={(e) => changeLanguage(e.target.value)}
          value={i18n.language}
        >
          <option value='en'>English</option>
          <option value='jp'>日本語</option>
          {/* 他の言語を追加可能 */}
        </select>
      </div>

      {/* 地図とピンの表示 */}
      <Map imageSrc='/assets/images/japan-map.png' pins={pins} />
    </div>
  );
};

export default HomePage;
