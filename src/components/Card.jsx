import { useState } from 'react'
import CardProfile from './CardProfile';
import '../styles/Card.css';

function Card() {
    const [pokemonId] = useState(() => Math.ceil(Math.random() * 151));

    const [cardStatus, setCardStatus] = useState("active");

    const handleCardClick = () => {
        cardStatus === "active" ? setCardStatus("inactive") : setCardStatus("active");
    };

    return (
        <div className='card' onClick={handleCardClick} data-status={cardStatus}>
            <h3>{cardStatus}</h3>
            <div className="profile-container">
                {cardStatus === "active" && <CardProfile pokemonId={pokemonId} />}
            </div>
        </div>
    )
}

export default Card