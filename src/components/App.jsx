import "../styles/App.css";
import CardTable from "./CardTable";
import Timer from "./Timer";
import { useState } from "react";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
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
    setGameStarted(false);
    setCounter(0);
    setCards(() => initCards(numMatches));
    setRevealed([]);
    setMatched([]);
    setGameWon(false);
    setRestartBtnStatus(false);
  }
  const [restartBtnStatus, setRestartBtnStatus] = useState(false);
  const [counter, setCounter] = useState(0);
  return (
    <div className="wrapper">
      <h1 className="game-title">Memory Card Matching Game</h1>
      <Timer
        gameStarted={gameStarted}
        counter={counter}
        setCounter={setCounter}
      />
      {gameWon && <h3 className="game-message">All Cards Matched!</h3>}
      {restartBtnStatus && (
        <button
          className="restart-btn"
          onClick={restartGame}
          data-display={restartBtnStatus}
        >
          Restart
        </button>
      )}
      <CardTable
        setGameStarted={setGameStarted}
        cards={cards}
        numMatches={numMatches}
        setGameWon={setGameWon}
        revealed={revealed}
        setRevealed={setRevealed}
        matched={matched}
        setMatched={setMatched}
        setRestartBtnStatus={setRestartBtnStatus}
      />
    </div>
  );
}

export default App;
