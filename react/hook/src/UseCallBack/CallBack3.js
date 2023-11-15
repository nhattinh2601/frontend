import React, { useState, useEffect, useCallback } from 'react';


const shuffleArray = (array) => {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const generateCardPairs = (count) => {
  const pairs = [];
  for (let i = 1; i <= count; i++) {
    pairs.push({ id: i, value: i });
    pairs.push({ id: i + count, value: i });
  }
  return pairs;
};

function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);

  const handleCardClick = useCallback(
    (card) => {
      if (flippedCards.length === 2) {
        return;
      }

      if (!flippedCards.includes(card) && flippedCards.length < 2) {
        const newFlippedCards = [...flippedCards, card];
        setFlippedCards(newFlippedCards);

        if (newFlippedCards.length === 2) {
          if (newFlippedCards[0].value === newFlippedCards[1].value) {
            setMatchedPairs([...matchedPairs, newFlippedCards[0].value]);
          }

          setTimeout(() => {
            setFlippedCards([]);
          }, 1000);
        }
      }
    },
    [flippedCards, matchedPairs]
  );

  useEffect(() => {
    const totalPairs = 6; 
    const cardPairs = generateCardPairs(totalPairs);
    const shuffledCards = shuffleArray(cardPairs);
    setCards(shuffledCards);
  }, []);

  return (
    <div>
      <h1>Memory Game</h1>
      <div className="card-grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${flippedCards.includes(card) || matchedPairs.includes(card.value) ? 'flipped' : ''}`}
            onClick={() => handleCardClick(card)}
          >
            {flippedCards.includes(card) || matchedPairs.includes(card.value) ? card.value : '?'}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemoryGame;
