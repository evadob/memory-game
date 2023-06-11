export interface QuizQuestion {
  id: number;
  questionNumber: number;
  question: string;
  possibleAnswers: string[];
  correctAnswer: number;
  explanation: string;
  imageUrl: string;
}

export interface QuizListItem {
  id: number;
  name: string;
  title: string;
  numberOfQuestions: number;
  imageUrl: string;
}

export type QuizParams = {
  quizId: string;
  questionNumber: string;
};
