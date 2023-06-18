import classes from "./MemoryGameModal.module.css";

interface MemoryGameModalProps {
  onRestart: () => void;
}

export const MemoryGameModal: React.FC<MemoryGameModalProps> = ({
  onRestart,
}) => {
  return (
    <div className={classes.modalContainer}>
      <div className={classes.modal}>
        <div className={classes.modalContent}>
          <h2 className={classes.modalHeading}>Gratulujeme 𓀤</h2>
          <p className={classes.modalParagraph}>Jsi šikulka!</p>
          <div className={classes.buttons}>
            <button className={classes.btnNew} onClick={onRestart}>
              Hrát znovu
            </button>
            <button className={classes.btnBack}>Zpět na výběr her</button>
          </div>
        </div>
      </div>
    </div>
  );
};
