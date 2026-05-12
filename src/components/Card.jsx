import { useState } from 'react'
import CardProfile from './CardProfile';
import '../styles/Card.css';

function Card() {
    const [pokemonId] = useState(() => Math.ceil(Math.random() * 151));
    const [isFlipped, setIsFlipped] = useState(false);
    const [isRevealed, setIsRevealed] = useState(false);

    const handleCardClick = (element) => {
        isFlipped ? setIsFlipped(false) : setIsFlipped(true);
    };

    const handleTransitionEnd = () => {
        isRevealed ? setIsFlipped(false) : setIsFlipped(true);
    }

    return (
        <div className='card' onClick={handleCardClick} onTransitionEnd={handleCardFlip} data-status={cardStatus}>
            <div className="profile-container">
                {cardStatus === "revealed" && <CardProfile pokemonId={pokemonId} />}
            </div>
        </div>
    )
}

export default Card