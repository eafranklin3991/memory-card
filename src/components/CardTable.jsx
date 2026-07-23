import { useState } from 'react'
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
    let idSet = new Set();

    // Ensure there aren't duplicate pokemon ids
    while (idSet.size < numMatches) {
        const potential_id = Math.ceil(Math.random() * 151);
        idSet.add(potential_id);
    }

    const idArray = Array.from(idSet);
    
    return shuffle([...idArray, ...idArray]).map((pokemonId, i) => ({ id: i, pokemonId }));
}

function CardTable( {setGameWon} ) {
    const [numMatches] = useState(5);
    const [cards] = useState(() => initCards(numMatches));
    const [revealed, setRevealed] = useState([]);
    const [matched, setMatched] = useState([]);

    const handleCardflip = (index) => {
        const card = cards[index];

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
            const newMatched = [...matched, card.pokemonId];
            setRevealed([]);
            setMatched(newMatched);
            // All cards matched, game won!
            if (newMatched.length === numMatches) {
                setGameWon(true);
            }
        } else {
            // No matches - show second card and then hide both
            setRevealed([...revealed, { id: card.id, pokemonId: card.pokemonId }]);
            setTimeout(() => setRevealed([]), 500);
        }
    }

    return (
        <div className='cardTable'>
            {cards.map((card, index) =>
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