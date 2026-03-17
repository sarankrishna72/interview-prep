export type Question = {
  question: string;
  options: string[];
  answer: string;
  hint: string;
};

export type Category = {
  id: string;
  name: string;
  group: string;
  icon: string;
  description: string;
  questions: Question[];
};

export type ScreenMode = 'home' | 'quiz' | 'result';

