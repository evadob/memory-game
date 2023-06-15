import { useEffect, useState } from "react";
import { OneCard } from "../../components/OneCard/OneCard";
import classes from "./MemoryGame.module.css";

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
  // state for the game finished
  const [gameFinished, setGameFinished] = useState(false);

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
    // finish the game
    setGameFinished(false);
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

  // increase the score
  const increaseScore = () => {
    setScore((prevScore) => prevScore + 1);
    // finished game
    if (score + 1 === initialCards.length) {
      setGameFinished(true); // nastavit stav dokončení hry na true
    }
  };

  // shuffle the cards on the first render
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className={classes.gameComponent}>
      <div className={classes.leftSidebar}>
        <h1>Pexeso</h1>

        <button className={classes.btnNew} onClick={shuffleCards}>
          Nová hra
        </button>
      </div>
      <div className={classes.cardGrid}>
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

      <div className={classes.gameInfo}>
        <p className={classes.pTurns}>Počet tahů: {turns}</p>
        <p className={classes.pMatches}>Skóre: {score}</p>
      </div>

      {/* modal window if the game is finished */}
      {gameFinished && (
        <div className={classes.modalContainer}>
          <div className={classes.modal}>
            <div className={classes.modalContent}>
              <h2 className={classes.modalHeading}>Gratulujeme!</h2>
              <p className={classes.modalParagraph}>Vyhrál jsi</p>
              <button className={classes.btnNew} onClick={shuffleCards}>
                Hrát znovu
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
