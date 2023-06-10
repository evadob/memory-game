import { useNavigate, useParams } from "react-router-dom";
import quizQuestions from "../../../public/data/quizQuestions.json";
import {
  QuizParams,
  QuizQuestion as QuizQuestionModel,
} from "../../models/quiz";
import { AnswerResult } from "../AnswerResult/AnswerResult";
import { QuizQuestion } from "../QuizQuestion/QuizQuestion";
import { useState } from "react";

export const Quiz = () => {
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const { questionId, questionSetId } = useParams<QuizParams>();
  const navigate = useNavigate();

  if (!questionId) {
    throw Error("Missing question id");
  }

  const question: QuizQuestionModel | undefined = quizQuestions.find(
    (question: QuizQuestionModel) => question.id === +questionId
  );

  const handleNextQuestionClick = () => {
    setIsCorrect(null);
    const nextQuestionId = +questionId + 1;
    navigate(`/quiz/${questionSetId}/${nextQuestionId}`);
  };

  const handleAnswerClick = (answerIndex: number) => {
    const result = question?.correctAnswer === answerIndex;
    setIsCorrect(result);
  };

  return isCorrect === null ? (
    <QuizQuestion question={question} handleAnswerClick={handleAnswerClick} />
  ) : (
    <AnswerResult
      isCorrect={isCorrect}
      question={question}
      handleNextQuestionClick={handleNextQuestionClick}
    />
  );
};
