import Card from "./Card";
import "../styles/CardTable.css";

function CardTable({
  setGameStarted,
  cards,
  numMatches,
  setGameWon,
  matched,
  setRevealed,
  revealed,
  setMatched,
  setRestartBtnStatus,
}) {
  const handleCardflip = (index) => {
    setGameStarted(true);
    const card = cards[index];

    // Don't allow flipping already matched cards
    if (matched.includes(card.pokemonId)) return;

    // Don't allow flipping a third card
    if (revealed.length === 2) return;

    if (revealed.length === 0) {
      setRevealed([{ id: card.id, pokemonId: card.pokemonId }]);
    } else if (revealed.some((item) => item.id === card.id)) {
      // Same card flipped - unflip it
      setRevealed(revealed.filter((item) => item.id !== card.id));
    } else if (revealed.some((item) => item.pokemonId === card.pokemonId)) {
      // Match - stay flipped
      const newMatched = [...matched, card.pokemonId];
      setRevealed([]);
      setMatched(newMatched);
      // All cards matched, game won!
      if (newMatched.length === numMatches) {
        setGameStarted(false);
        setGameWon(true);
        setRestartBtnStatus(true);
      }
    } else {
      // No matches - show second card and then hide both
      setRevealed([...revealed, { id: card.id, pokemonId: card.pokemonId }]);
      setTimeout(() => setRevealed([]), 500);
    }
  };

  return (
    <div className="cardTable">
      {cards.map((card, index) => (
        <Card
          key={card.id}
          pokemonId={card.pokemonId}
          isRevealed={revealed.some((item) => item.id === card.id)}
          isMatched={matched.includes(card.pokemonId)}
          onClick={() => handleCardflip(index)}
        ></Card>
      ))}
    </div>
  );
}

export default CardTable;
