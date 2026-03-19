import { Difficulty } from "./common.model";

export type QuestionType = 'mcq' | 'boolean' | 'multi-answer';
export type Question = {
  id: any;
  question : string;
  options ?: string[];
  correctIndex?: number[];
  hint: string;
  code ?: any;
  category: string;
  difficulty: string;
  question_type: QuestionType;
  explanation: string;
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

export type SelectedSetup = {category: string, difficulty: Difficulty, noOfQuestions: any}

export type StatCardKeys = 'totalQuestions' | 'score' | 'category' | 'status' | 'hint'

export type QuizResult = {
  score: number;
  category: string;
  status: string;
  hint: number;
  totalQuestions: number;
};