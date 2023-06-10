export interface QuizQuestion {
  id: number;
  question: string;
  possibleAnswers: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizListItem {
  id: number;
  name: string;
  title: string;
  numberOfQuestions: number;
}

export type QuizParams = {
  questionSetId: string;
  questionId: string;
};
