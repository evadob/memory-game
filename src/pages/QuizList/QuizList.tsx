import { useNavigate } from "react-router-dom";
import { useQuizListQuery } from "../../api/useQuizListQuery";
import classes from "./QuizList.module.css";

export const QuizList = () => {
  const { data: quizList, isLoading } = useQuizListQuery();
  const navigate = useNavigate();

  const handleListItemClick = (quizId: number) => {
    navigate(`${quizId}/1`);
  };

  if (isLoading) {
    return <div className={classes.loading}>Načítání...</div>;
  }

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
          <span className={classes.quizListNumber}>
            {item.numberOfQuestions}
          </span>
        </li>
      ))}
    </ul>
  );
};
