// src/data/prefectures.ts
export interface Prefecture {
  id: string;
  nameKey: string; // 'name'を'nameKey'に変更
  latitude: number; // 緯度
  longitude: number; // 経度
  quizzes: number;
}

export const prefectures: Prefecture[] = [
  {
    id: 'tokyo',
    nameKey: 'prefectures.tokyo.name', // 翻訳キー
    latitude: 35.6895,
    longitude: 139.6917,
    quizzes: 3,
  },
  {
    id: 'gumma',
    nameKey: 'prefectures.gumma.name', // 翻訳キー
    latitude: 36.3911,
    longitude: 139.0608,
    quizzes: 1,
  },
  {
    id: 'nagano',
    nameKey: 'prefectures.nagano.name', // 翻訳キー, 
    latitude: 36.65966169999807,
    longitude: 138.4258149700879,
    quizzes: 2,
  },
  // 他の都道府県を追加
];
