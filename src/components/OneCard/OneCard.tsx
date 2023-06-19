import { Card } from "../../pages/MemoryGame/MemoryGame";
import "./OneCard.css";

interface OneCardProps {
  card: Card;
  handleChoice: (cardId: number) => void;
  flipped: boolean;
  disabled: boolean;
}

export const OneCard = ({
  card,
  handleChoice,
  flipped,
  disabled,
}: OneCardProps) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card.id);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          onClick={handleClick}
          src="/img/cover.png"
          alt="card back"
        />
      </div>
    </div>
  );
};
