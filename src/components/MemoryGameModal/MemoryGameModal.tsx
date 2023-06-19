import classes from "./MemoryGameModal.module.css";
import { useNavigate } from "react-router-dom";

interface MemoryGameModalProps {
  onRestart: () => void;
}

export const MemoryGameModal: React.FC<MemoryGameModalProps> = ({
  onRestart,
}) => {
  const navigate = useNavigate();
  
  const handleClickBackButton = () => {
    navigate("/");
  };

  {
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
              <button
                className={classes.btnBack}
                onClick={handleClickBackButton}
              >
                Zpět na výběr her
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
