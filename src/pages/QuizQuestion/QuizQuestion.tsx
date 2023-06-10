import { QuizQuestion as QuizQuestionModel } from "../../models/quiz";
import classes from "./QuizQuestion.module.css";

interface QuizQuestionProps {
  question?: QuizQuestionModel;
}

export const QuizQuestion = ({ question }: QuizQuestionProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.quizPhoto}></div>
      <div className={classes.quizQuestion}>
        <h2>{question?.question}</h2>
        <ul className={classes.quizAnswers}>
          {question?.possibleAnswers.map((answer, index) => (
            <li key={index}>{answer}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
