import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuizQuestionsQuery } from "../../api/useQuizQuestionsQuery";
import { QuizParams } from "../../models/quiz";
import { AnswerResult } from "../AnswerResult/AnswerResult";
import { QuizQuestion } from "../QuizQuestion/QuizQuestion";

export const Quiz = () => {
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const { questionNumber, quizId } = useParams<QuizParams>();
  const navigate = useNavigate();

  const parsedQuizId = quizId ? +quizId : 0;
  const parsedQuestionNumber = questionNumber ? +questionNumber : 0;

  const { data: question } = useQuizQuestionsQuery(
    parsedQuizId,
    parsedQuestionNumber
  );

  if (!questionNumber) {
    throw Error("Missing question id");
  }


  const handleNextQuestionClick = () => {
    setIsCorrect(null);
    const nextQuestionNumber = +questionNumber + 1;
    navigate(`/quiz/${quizId}/${nextQuestionNumber}`);
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
