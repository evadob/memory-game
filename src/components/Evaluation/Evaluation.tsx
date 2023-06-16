import classes from "./Evaluation.module.css";

interface EvaluationProps {
  score: number;
  numberOfQuestions: number;
}

export const Evaluation = ({ score, numberOfQuestions }: EvaluationProps) => {
  return (
    <>
      <div className={classes.evaluationContent}>
        <h2 className={classes.evaluationScore}>{score < 4 ? "Nevadí, příště to vyjde" : "Výborně!"}</h2>
        {score !== 0 ? (
          <p>
            Správně {score} z {numberOfQuestions}
          </p>
        ) : (
          <p>Žádná odpověď správně.</p>
        )}
      </div>
    </>
  );
};
