import { useState } from 'react'
import CardProfile from './CardProfile';
import '../styles/Card.css';

function Card({ pairId, pokemonId }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isRevealed, setIsRevealed] = useState(false);

    const handleCardFlip = () => {
        setIsFlipped(prev => !prev);
    };

    const handleTransitionEnd = () => {
        isFlipped ? setIsRevealed(true) : setIsRevealed(false);
    }

    return (
        <div className='card' onClick={handleCardFlip} onTransitionEnd={handleTransitionEnd} data-flipped={isFlipped} pair-id={pairId}>
            <div className="profile-container">
                {isRevealed && <CardProfile pokemonId={pokemonId} />}
            </div>
        </div>
    )
}

export default Card