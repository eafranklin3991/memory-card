import { useState } from 'react'
import CardProfile from './CardProfile';
import '../styles/Card.css';

function Card({ pokemonId, isRevealed, isMatched, onClick }) {
    return (
        <div className='card' onClick={onClick} data-revealed={isRevealed} data-matched={isMatched}>
            <div className="profile-container">
                {isRevealed && <CardProfile pokemonId={pokemonId} />}
            </div>
        </div>
    )
}

export default Card