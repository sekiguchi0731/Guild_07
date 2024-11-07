export interface Prefecture {
  id: string;
  name: string;
  top: number;
  left: number;
  quizzes: number;
}

export const prefectures: Prefecture[] = [
  {
    id: 'tokyo',
    name: '東京',
    top: 48,
    left: 57,
    quizzes: 3,
  },
  {
    id: 'gumma',
    name: '群馬',
    top: 44,
    left: 54,
    quizzes: 1,
  },
  // 他の都道府県を追加
];
