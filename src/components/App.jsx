import '../styles/App.css'
import CardTable from './CardTable';
import ScoreBoard from './Scoreboard';

function App() {
  return (
    <div className='wrapper'>
      <h1 className='game-title'>Memory Card Matching Game</h1>
      <CardTable />
      <ScoreBoard />
    </div>
  )
}

export default App
