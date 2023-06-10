import classes from "./AnswerResult.module.css";
import { QuizQuestion as QuizQuestionModel } from "../../models/quiz";

interface AnswerResultProps {
  isCorrect: boolean;
  question?: QuizQuestionModel;
}

export const AnswerResult = ({ isCorrect, question }: AnswerResultProps) => {
  return (
    <div className={classes.container}>
      <img
        className={
          classes.answerPhoto +
          (isCorrect ? "" : " " + classes.answerPhotoIncorrect)
        }
        src="../../../public/img/answerResultImg/thumbs-icon.png"
      />
      <div className={classes.answerContent}>
        <h2>{isCorrect ? "Správně" : "Špatně"}</h2>
        <div className={classes.answerInfo}>{question?.explanation}</div>
        <button className={classes.answerBtn}>Další otázka</button>
      </div>
    </div>
  );
};
