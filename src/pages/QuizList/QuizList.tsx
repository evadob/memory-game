import classes from "./QuizList.module.css";
import quizList from "../../../public/data/quizList.json";
import { QuizListItem } from "../../models/quiz";
import { useNavigate } from "react-router-dom";

export const QuizList = () => {
  const navigate = useNavigate();

  const handleListItemClick = () => {
    navigate("1/1");
  };

  return (
    <ul className={classes.quizList}>
      {quizList.map((item: QuizListItem) => (
        <li key={item.id} role="button" onClick={handleListItemClick}>
          <span className={classes.listPhoto}></span>
          <div className={classes.listTitle}>
            <div>{item.name}</div>
            {item.title}
          </div>
        </li>
      ))}
    </ul>
  );
};
