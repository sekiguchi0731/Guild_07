// src/data/quizzes.ts
export interface Quiz {
  id: string;
  city: string;
}

export interface PrefectureQuizzes {
  [prefectureId: string]: Quiz[];
}

export const quizzes: PrefectureQuizzes = {
  tokyo: [
    { id: 'q1', city: 'Minato-ku' },
    { id: 'q2', city: 'Hachioji' },
    { id: 'q3', city: 'Tokyo' },
  ],
  gumma: [{ id: 'q1', city: 'Nakanojo' }],
  // 他の都道府県のクイズを追加
};
