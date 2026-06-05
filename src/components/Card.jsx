import { useState } from 'react'
import CardProfile from './CardProfile';
import '../styles/Card.css';

function Card({ pokemonId, isRevealed, isMatched, onClick }) {
    return (
        <div className='card' data-revealed={isRevealed} data-matched={isMatched} onClick={onClick}>
            <div className='profile-container'>
                {isRevealed | isMatched
                    ? <CardProfile pokemonId={pokemonId} />
                    : <div className='card-back'></div>}
            </div>
        </div>
    )
}

export default Card