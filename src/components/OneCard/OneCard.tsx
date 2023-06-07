import React from "react";
import "./OneCard.css";
import { Card } from "../../pages/MemoryGame/MemoryGame";

// defines the interface for the OneCard component props
interface OneCardProps {
  card: Card;
  handleChoice: (card: Card) => void;
  flipped: boolean;
  disabled: boolean;
}

// defines the OneCard component
export const OneCard = ({
  card,
  handleChoice,
  flipped,
  disabled,
}: OneCardProps) => {
  // handles the click on the card
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  // returns the JSX that makes up the OneCard component
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
