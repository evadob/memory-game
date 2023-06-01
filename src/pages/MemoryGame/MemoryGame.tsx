import React, { useEffect, useState } from "react";
import "./MemoryGame.css";
import { OneCard } from "../../components/OneCard/OneCard";

export interface Card {
  id: number;
  src: string;
  matched: boolean;
}

// array of card images (each image is an object with id, src and matched properties)
const cards: Card[] = [
  { id: 1, src: "img/card-1.png", matched: false },
  { id: 2, src: "img/card-2.png", matched: false },
  { id: 3, src: "img/card-3.png", matched: false },
  { id: 4, src: "img/card-4.png", matched: false },
  { id: 5, src: "img/card-5.png", matched: false },
  { id: 6, src: "img/card-6.png", matched: false },
];

export const MemoryGame = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [turns, setTurns] = useState(0);
  const [score, setScore] = useState(0);
  const [choiceOne, setChoiceOne] = useState<Card | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);
  const [disabled, setDisabled] = useState(false);

  // function for shuffling the cards
  const shuffleCards = () => {
    const shuffledCards = [...cards, ...cards].sort(() => Math.random() - 0.5);

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
    setScore(0);
  };

  // handle a choice
  const handleChoice = (card: Card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // check if the choices are a match
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetChoices();
        increaseScore();
      } else {
        setTimeout(() => resetChoices(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // reset the choices and increase the turns
  const resetChoices = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  const increaseScore = () => {
    setScore((prevScore) => prevScore + 1);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="game-component">
      <h1>Pexeso</h1>

      <button className="btn-new" onClick={shuffleCards}>
        Nová hra
      </button>

      <div className="card-grid">
        {cards.map((card) => (
          <OneCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>

      <div className="game-info">
        <p className="p-turns">Počet tahů: {turns}</p>
        <p className="p-matches">Skóre: {score}</p>
      </div>
    </div>
  );
};
