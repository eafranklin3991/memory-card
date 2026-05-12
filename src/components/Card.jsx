import { useState } from 'react'
import CardProfile from './CardProfile';
import '../styles/Card.css';

function Card() {
    const [cardState, setCardState] = useState("active");

    const handleCardClick = () => {
        cardState === "active" ? setCardState("inactive") : setCardState("active");
    };

    return (
        <div className='card' onClick={handleCardClick} data-status={cardState}>
            <h3>{cardState}</h3>
            <div className="profile-container">
                {cardState === "active" && <CardProfile />}
            </div>
        </div>
    )
}

export default Card