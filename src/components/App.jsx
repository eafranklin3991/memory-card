import "../styles/App.css";
import CardTable from "./CardTable";
import { useState } from "react";

function App() {
  const [gameWon, setGameWon] = useState(false);
  const [revealed, setRevealed] = useState([]);
  const [matched, setMatched] = useState([]);
  function shuffle(array) {
    const shuffled = [...array];
    let currentIndex = array.length;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [shuffled[currentIndex], shuffled[randomIndex]] = [
        shuffled[randomIndex],
        shuffled[currentIndex],
      ];
    }
    return shuffled;
  }

  function initCards(numMatches) {
    let idSet = new Set();

    // Ensure there aren't duplicate pokemon ids
    while (idSet.size < numMatches) {
      const potential_id = Math.ceil(Math.random() * 151);
      idSet.add(potential_id);
    }

    const idArray = Array.from(idSet);

    return shuffle([...idArray, ...idArray]).map((pokemonId, i) => ({
      id: i,
      pokemonId,
    }));
  }
  const [numMatches] = useState(5);
  const [cards, setCards] = useState(() => initCards(numMatches));
  function restartGame() {
    setCards(() => initCards(numMatches));
    setRevealed([]);
    setMatched([]);
    setGameWon(false);
  }
  return (
    <div className="wrapper">
      <h1 className="game-title">Memory Card Matching Game</h1>
      <button className="restart-btn" onClick={restartGame}>
        Restart
      </button>
      {gameWon && <h3 className="game-message">All Cards Matched!</h3>}
      <CardTable
        cards={cards}
        numMatches={numMatches}
        setGameWon={setGameWon}
        revealed={revealed}
        setRevealed={setRevealed}
        matched={matched}
        setMatched={setMatched}
      />
    </div>
  );
}

export default App;
