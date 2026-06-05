import { useState } from 'react'
import CardProfile from './CardProfile';
import '../styles/Card.css';

function Card({ pokemonId, isRevealed, onClick }) {
    return (
        <div className='card'>
            <div className='profile-container'>
                {isRevealed
                    ? <CardProfile pokemonId={pokemonId} />
                    : <div className='card-back'></div>}
            </div>
        </div>
    )
}

export default Card