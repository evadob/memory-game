import React, { useEffect, useState } from "react";
import "./MemoryGame.css";
import { OneCard } from "../../components/OneCard/OneCard";

export interface Card {
  id: number;
  src: string;
  matched: boolean;
}

const initialCards: Card[] = [
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
  const [choiceOne, setChoiceOne] = useState<number>(0);
  const [choiceTwo, setChoiceTwo] = useState<number>(0);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    // create a copy of the initial cards and add an id to them
    const copyInitialCards = initialCards.map((card, index) => ({
      ...card,
      id: index + initialCards.length + 1,
    }));

    const shuffledCards = [...initialCards, ...copyInitialCards].sort(
      () => Math.random() - 0.5
    );

    // reset the game
    setChoiceOne(0);
    setChoiceTwo(0);
    setCards(shuffledCards);
    setTurns(0);
    setScore(0);
  };

  // handle a choice
  const handleChoice = (cardId: number) => {
    choiceOne ? setChoiceTwo(cardId) : setChoiceOne(cardId);
  };

  // check if the choices are a match
  useEffect(() => {
    // check if both choices are not zero
    if (choiceOne !== 0 && choiceTwo !== 0) {
      setDisabled(true);
      // get the choice cards
      const cardOne = cards.find((card) => card.id === choiceOne);
      const cardTwo = cards.find((card) => card.id === choiceTwo);
      // check if the choices are a match
      if (cardOne?.src === cardTwo?.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            // if the card is the same as the choice, set matched to true
            if (card.id === choiceOne || card.id === choiceTwo) {
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
    setChoiceOne(0);
    setChoiceTwo(0);
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
            flipped={
              card.id === choiceOne || card.id === choiceTwo || card.matched
            }
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
