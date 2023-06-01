import React from "react";
import "./OneCard.css";
import { Card } from "../../pages/MemoryGame/MemoryGame";

interface OneCardProps {
  card: Card;
  handleChoice: (card: Card) => void;
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
      handleChoice(card);
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
