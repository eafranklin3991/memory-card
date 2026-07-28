import { useEffect } from "react";
import "../styles/Timer.css";

function Timer({ counter, setCounter, gameStarted }) {
  useEffect(() => {
    let timer = null;
    if (gameStarted) {
      timer = setInterval(() => {
        setCounter((count) => count + 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [setCounter, gameStarted]);

  return <p className="timer">{counter} seconds have passed.</p>;
}

export default Timer;
