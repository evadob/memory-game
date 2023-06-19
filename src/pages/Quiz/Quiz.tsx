import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuizQuestionQuery } from "../../api/useQuizQuestionsQuery";
import { QuizParams } from "../../models/quiz";
import { AnswerResult } from "../../components/AnswerResult/AnswerResult";
import { QuizQuestion } from "../../components/QuizQuestion/QuizQuestion";
import { useQuizListQuery } from "../../api/useQuizListQuery";
import { Evaluation } from "../../components/Evaluation/Evaluation";
import classes from "./Quiz.module.css";

enum QuizState {
  Question,
  Correct,
  Incorrect,
  Finished,
}

export const Quiz = () => {
  const [quizState, setQuizState] = useState<QuizState>(QuizState.Question);
  const [score, setScore] = useState<number>(0);
  const { questionNumber, quizId } = useParams<QuizParams>();
  const navigate = useNavigate();

  const parsedQuizId = quizId ? +quizId : 0;
  const parsedQuestionNumber = questionNumber ? +questionNumber : 0;

  const { data: question, isLoading: quizQuestionIsLoading } =
    useQuizQuestionQuery(parsedQuizId, parsedQuestionNumber);

  const { data: quizList, isLoading: quizListIsLoading } = useQuizListQuery();

  const numberOfQuestions = quizList?.find(
    (x) => x.id === parsedQuizId
  )?.numberOfQuestions;

  const isLastQuestion = parsedQuestionNumber === numberOfQuestions;

  if (!questionNumber) {
    throw Error("Missing question id");
  }

  const handleNextQuestionClick = () => {
    if (isLastQuestion) {
      setQuizState(QuizState.Finished);
      return;
    }

    setQuizState(QuizState.Question);
    const nextQuestionNumber = +questionNumber + 1;
    navigate(`/quiz/${quizId}/${nextQuestionNumber}`);
  };

  const handleAnswerClick = (answerIndex: number) => {
    const result = question?.correctAnswerIndex === answerIndex;
    setQuizState(result ? QuizState.Correct : QuizState.Incorrect);
    if (result) {
      setScore((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setQuizState(QuizState.Question);
  }, [questionNumber]);

  const isLoading = quizQuestionIsLoading || quizListIsLoading;

  if (isLoading) {
    return <div className={classes.loading}>Načítání...</div>;
  }

  if (quizState === QuizState.Question) {
    return (
      <QuizQuestion question={question} handleAnswerClick={handleAnswerClick} />
    );
  }

  if (quizState === QuizState.Correct || quizState === QuizState.Incorrect) {
    return (
      <AnswerResult
        isCorrect={quizState === QuizState.Correct}
        question={question}
        handleNextQuestionClick={handleNextQuestionClick}
        isLastQuestion={isLastQuestion}
      />
    );
  }

  return (
    <Evaluation score={score} numberOfQuestions={numberOfQuestions ?? 0} />
  );
};
