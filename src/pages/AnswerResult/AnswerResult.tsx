import classes from "./AnswerResult.module.css";
import { QuizQuestion as QuizQuestionModel } from "../../models/quiz";

interface AnswerResultProps {
  isCorrect: boolean;
  question?: QuizQuestionModel;
  handleNextQuestionClick: () => void;
  isLastQuestion: boolean;
}

export const AnswerResult = ({
  isCorrect,
  question,
  handleNextQuestionClick,
  isLastQuestion,
}: AnswerResultProps) => {
  return (
    <div className={classes.container}>
      {/* 
      old code with the thumbs up icon
      <img
        className={
          classes.answerPhoto +
          (isCorrect ? "" : " " + classes.answerPhotoIncorrect)
        }
        src="../../../public/img/answerResultImg/thumbs-icon.png"
      /> */}
      <img
        className={classes.answerPhoto}
        src={
          isCorrect
            ? "../../../public/img/answerResultImg/rightAnswer.png"
            : "../../../public/img/answerResultImg/wrongAnswer.png"
        }
      />
      <div className={classes.answerContent}>
        <h2>{isCorrect ? "Správně" : "Špatně"}</h2>
        <div className={classes.answerInfo}>{question?.explanation}</div>
        <button className={classes.answerBtn} onClick={handleNextQuestionClick}>
          {isLastQuestion ? "Vyhodnotit lekci" : "Další otázka"}
        </button>
      </div>
    </div>
  );
};
