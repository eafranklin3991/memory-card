import { useState, useRef } from 'react'
import Card from './Card';
import '../styles/CardTable.css'

function shuffle(array) {
    const shuffled = [...array];
    let currentIndex = array.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [shuffled[currentIndex], shuffled[randomIndex]] = [
            shuffled[randomIndex], shuffled[currentIndex]];
    }
    return shuffled;
}

function initCards(numMatches) {
    const ids = Array(numMatches).fill(null).map(() => Math.ceil(Math.random() * 151));
    return shuffle([...ids, ...ids]).map((pokemonId, i) => ({ id: i, pokemonId }));
}

function CardTable() {
    const cards = useRef(initCards(5));
    const [revealed, setRevealed] = useState([]);
    const [matched, setMatched] = useState([]);

    const handleCardflip = (index) => {
        const card = cards.current[index];

        // Don't allow flipping already matched cards
        if (matched.includes(card.pokemonId)) return;

        // Don't allow flipping a third card
        if (revealed.length === 2) return;

        if (revealed.length === 0) {
            setRevealed([{ id: card.id, pokemonId: card.pokemonId }]);
        } else if (revealed.some(item => item.id === card.id)) {
            // Same card flipped - unflip it
            setRevealed(revealed.filter(item => item.id !== card.id))
        } else if (revealed.some(item => item.pokemonId === card.pokemonId)) {
            // Match - stay flipped
            setRevealed([]);
            setMatched([...matched, card.pokemonId]);
        } else {
            // No matches - show second card and then hide both
            setRevealed([...revealed, { id: card.id, pokemonId: card.pokemonId }]);
            setTimeout(() => setRevealed([]), 1000);
        }
    }

    return (
        <div className='cardTable'>
            {cards.current.map((card, index) =>
                <Card
                    key={card.id}
                    pokemonId={card.pokemonId}
                    isRevealed={revealed.some(item => item.id === card.id)}
                    isMatched={matched.includes(card.pokemonId)}
                    onClick={() => handleCardflip(index)}
                ></Card>
            )
            }
        </div>
    )
}

export default CardTable