// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 翻訳ファイルをインポート
import translationEN from '../public/locales/en/translation.json';
import translationJP from '../public/locales/ja/translation.json';

// リソースの定義
const resources = {
  en: {
    translation: translationEN,
  },
  jp: {
    translation: translationJP,
  },
};

i18n
  .use(initReactI18next) // React用のi18nextプラグインを使用
  .init({
    resources,
    lng: 'en', // 初期言語を英語に設定
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // ReactはXSS保護を提供するため、エスケープは不要
    },
    react: {
      useSuspense: false, // 必要に応じて変更
    },
  });

export default i18n;
