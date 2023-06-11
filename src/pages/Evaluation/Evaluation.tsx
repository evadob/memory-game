interface EvaluationProps {
  score: number;
  numberOfQuestions: number;
}

export const Evaluation = ({ score, numberOfQuestions }: EvaluationProps) => {
  return (
    <div>
      Vyhodnocení: {score}/{numberOfQuestions}
    </div>
  );
};
