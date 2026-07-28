import { useEffect } from "react";

function Scoreboard({
  counter,
  gameWon,
  scores,
  setScores,
  bestTime,
  setBestTime,
}) {
  useEffect(() => {
    if (gameWon) {
      const updatedScores = [...scores, counter];
      setScores(updatedScores);
      setBestTime(Math.min(...updatedScores));
    }
  }, [gameWon, setScores, counter, scores, bestTime, setBestTime]);

  return <p>Best Time: {bestTime} seconds</p>;
}

export default Scoreboard;
