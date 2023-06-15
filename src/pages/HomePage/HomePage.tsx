import { useNavigate } from "react-router-dom";
import classes from "./HomePage.module.css";

export const HomePage = () => {
  const navigate = useNavigate();

  const handleQuizButtonClick = () => {
    navigate("/quiz");
  };
  const handleMemoryGameButtonClick = () => {
    navigate("/memory-game");
  };

  return (
    <div className={classes.container}>
      <h1>
        Prozkoumej tajemný svět starověkého Egypta 
        𓀀
      </h1>
      <h3>Vyber si hru, ve které procvičíš své znalosti:</h3>
      <div className={classes.buttons}>
        <button className={classes.btn} onClick={handleQuizButtonClick}>
          Kvíz
        </button>
        <button className={classes.btn} onClick={handleMemoryGameButtonClick}>
          Pexeso
        </button>
      </div>
    </div>
  );
};
