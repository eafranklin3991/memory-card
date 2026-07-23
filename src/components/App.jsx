import '../styles/App.css'
import CardTable from './CardTable';
import ScoreBoard from './Scoreboard';
import { useState } from 'react';

function App() {
  const [gameWon, setGameWon] = useState(false);
  return (
    <div className='wrapper'>
      <h1 className='game-title'>Memory Card Matching Game</h1>
      {gameWon && <h3 className='game-message'>You win!</h3>}
      <CardTable setGameWon={setGameWon}/>
      <ScoreBoard />
    </div>
  )
}

export default App
