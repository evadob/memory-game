import { useParams } from "react-router-dom";
import quizQuestions from "../../../public/data/quizQuestions.json";
import {
  QuizParams,
  QuizQuestion as QuizQuestionModel,
} from "../../models/quiz";
import { AnswerResult } from "../AnswerResult/AnswerResult";
import { QuizQuestion } from "../QuizQuestion/QuizQuestion";

export const Quiz = () => {
  const { questionId } = useParams<QuizParams>();

  if (!questionId) {
    throw Error("Missing question id");
  }

  const question: QuizQuestionModel | undefined = quizQuestions.find(
    (question: QuizQuestionModel) => question.id === +questionId
  );

  return (
    <>
      <QuizQuestion question={question} />
      {/* <AnswerResult isCorrect={false} question={question} /> */}
    </>
  );
};
