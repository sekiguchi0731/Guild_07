interface Quiz {
  id: string;
  question: string;
  answer: string;
}

interface PrefectureQuizzes {
  [prefectureId: string]: Quiz[];
}

export const quizzes: PrefectureQuizzes = {
  tokyo: [
    {
      id: 'q1',
      question: '東京のシンボルは何ですか？',
      answer: '東京タワー',
    },
    {
      id: 'q2',
      question: '東京で一番高い山は？',
      answer: '高尾山',
    },
    {
      id: 'q3',
      question: '東京の人口は約何人ですか？',
      answer: '1400万人',
    },
  ],
  gumma: [
    {
      id: 'q1',
      question: '群馬県の名物は何ですか？',
      answer: '焼きまんじゅう',
    },
  ],
  // 他の都道府県のクイズを追加
};
