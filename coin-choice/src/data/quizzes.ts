// src/data/quizzes.ts
export interface Quiz {
  id: string;
  question: string;
  answer: string;
  choices?: string[]; // 選択肢がある場合は追加
  city: string;
}

export interface PrefectureQuizzes {
  [prefectureId: string]: Quiz[];
}

export const quizzes: PrefectureQuizzes = {
  tokyo: [
    {
      id: 'q1',
      question: 'quiz.q1.question', // 翻訳キーに変更
      answer: 'quiz.q1.answer',
      choices: ['quiz.q1.choices.0', 'quiz.q1.choices.1', 'quiz.q1.choices.2'], // 翻訳キーに変更
      city: 'Minato-ku',
    },
    {
      id: 'q2',
      question: 'quiz.q2.question',
      answer: 'quiz.q2.answer',
      choices: ['quiz.q2.choices.0', 'quiz.q2.choices.1', 'quiz.q2.choices.2'],
      city: 'Hachioji',
    },
    {
      id: 'q3',
      question: 'quiz.q3.question',
      answer: 'quiz.q3.answer',
      choices: ['quiz.q3.choices.0', 'quiz.q3.choices.1', 'quiz.q3.choices.2'],
      city: 'tokyo',
      // 選択肢がない場合は入力形式
    },
  ],
  gumma: [
    {
      id: 'q1',
      question: 'quiz.q1.question',
      answer: 'quiz.q1.answer',
      choices: ['quiz.q1.choices.0', 'quiz.q1.choices.1', 'quiz.q1.choices.2'],
      city: 'Nakanojo',
    },
  ],
  // 他の都道府県のクイズを追加
};
