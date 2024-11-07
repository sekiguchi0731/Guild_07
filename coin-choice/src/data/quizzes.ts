// src/data/quizzes.ts
export interface Quiz {
  id: string;
  questionKey: string; // 翻訳キー
  answerKey: string; // 翻訳キー
  choicesKeys?: string[]; // 翻訳キー
  cityKey: string; // 翻訳キー
  latitude: number; // 緯度
  longitude: number; // 経度
}

export interface PrefectureQuizzes {
  [prefectureId: string]: Quiz[];
}

export const quizzes: PrefectureQuizzes = {
  tokyo: [
    {
      id: 'q1',
      questionKey: 'quiz.tokyo.q1.question',
      answerKey: 'quiz.tokyo.q1.answer',
      choicesKeys: [
        'quiz.tokyo.q1.choices.0',
        'quiz.tokyo.q1.choices.1',
        'quiz.tokyo.q1.choices.2',
      ],
      cityKey: 'quiz.tokyo.q1.city',
      latitude: 35.6586, // Minato-ku
      longitude: 139.7454,
    },
    {
      id: 'q2',
      questionKey: 'quiz.tokyo.q2.question',
      answerKey: 'quiz.tokyo.q2.answer',
      choicesKeys: [
        'quiz.tokyo.q2.choices.0',
        'quiz.tokyo.q2.choices.1',
        'quiz.tokyo.q2.choices.2',
      ],
      cityKey: 'quiz.tokyo.q2.city',
      latitude: 35.655, // Hachioji
      longitude: 139.325,
    },
    {
      id: 'q3',
      questionKey: 'quiz.tokyo.q3.question',
      answerKey: 'quiz.tokyo.q3.answer',
      choicesKeys: [
        'quiz.tokyo.q3.choices.0',
        'quiz.tokyo.q3.choices.1',
        'quiz.tokyo.q3.choices.2',
      ],
      cityKey: 'quiz.tokyo.q3.city',
      latitude: 35.6895, // Tokyo
      longitude: 139.6917,
      // 選択肢がない場合は入力形式にすることも可能
    },
  ],
  gumma: [
    {
      id: 'q1',
      questionKey: 'quiz.gumma.q1.question',
      answerKey: 'quiz.gumma.q1.answer',
      choicesKeys: [
        'quiz.gumma.q1.choices.0',
        'quiz.gumma.q1.choices.1',
        'quiz.gumma.q1.choices.2',
      ],
      cityKey: 'quiz.gumma.q1.city',
      latitude: 36.2953, // Nakanojo
      longitude: 138.8841,
    },
  ],
  // 他の都道府県のクイズを追加
};
