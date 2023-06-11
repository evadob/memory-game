import { useNavigate } from "react-router-dom";
import { useQuizListQuery } from "../../api/useQuizListQuery";
import { QuizListItem } from "../../models/quiz";
import classes from "./QuizList.module.css";

export const QuizList = () => {
  const { data: quizList } = useQuizListQuery();
  const navigate = useNavigate();

  const handleListItemClick = () => {
    navigate("1/1");
  };

  return (
    <ul className={classes.quizList}>
      {quizList?.map((item) => (
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
