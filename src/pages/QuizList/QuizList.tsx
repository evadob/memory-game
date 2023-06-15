import { useNavigate } from "react-router-dom";
import { useQuizListQuery } from "../../api/useQuizListQuery";
import classes from "./QuizList.module.css";

export const QuizList = () => {
  const { data: quizList } = useQuizListQuery();
  const navigate = useNavigate();

  const handleListItemClick = (quizId: number) => {
    navigate(`${quizId}/1`);
  };

  // const funkceCoBudeSklonovat if/else

  return (
    <ul className={classes.quizList}>
      {quizList?.map((item) => (
        <li
          key={item.id}
          role="button"
          onClick={() => handleListItemClick(item.id)}
        >
          <img className={classes.listPhoto} src={item.imageUrl} />
          <div className={classes.listTitle}>
            <div>{item.name}</div>
            {item.title}
          </div>
          <span className={classes.quizListNumber}>{item.numberOfQuestions}</span>
        </li>
      ))}
    </ul>
  );
};
