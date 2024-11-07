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
      question: '東京のシンボルは何ですか？',
      answer: '東京タワー',
      choices: ['東京タワー', 'スカイツリー', '浅草寺'],
      city: '港区'
    },
    {
      id: 'q2',
      question: '東京で一番高い山は？',
      answer: '高尾山',
      choices: ['高尾山', 'スカイツリー', '浅草寺'], // 実際の選択肢を追加
      city: '八王子市'
    },
    {
      id: 'q3',
      question: '東京の人口は約何人ですか？',
      answer: '1400万人',
      choices: ['100万人', '1億人', '1400万人'],
      city: '東京'
      // 選択肢がない場合は入力形式
    },
  ],
  gumma: [
    {
      id: 'q1',
      question: '群馬県の名物は何ですか？',
      answer: '焼きまんじゅう',
      choices: ['焼きまんじゅう', '焼きそば', 'お好み焼き'],
      city: 'Nakanojo'
    },
  ],
  // 他の都道府県のクイズを追加
};
