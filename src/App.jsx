import { useEffect, useState } from "react";
import "./App.css";
import OneCard from "./components/OneCard/OneCard";

const cardImages = [
  { src: "img/card-1.png", matched: false },
  { src: "img/card-2.png", matched: false },
  { src: "img/card-3.png", matched: false },
  { src: "img/card-4.png", matched: false },
  { src: "img/card-5.png", matched: false },
  { src: "img/card-6.png", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  // handle a choice
  const handleChoice = (card) => {
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
      } else {
        setTimeout(() => resetChoices(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // console.log(cards);

  // reset the choices and increase the turns
  const resetChoices = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="App">
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

      <p className="p-turns">Počet tahů: {turns}</p>
    </div>
  );
}

export default App;
