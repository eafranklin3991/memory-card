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
    const [revealed, setRevealed] = useState([{ id: "", pokemonId: "" }]);
    const [matched, setMatched] = useState([{ id: "", pokemonId: "" }]);

    const handleCardflip = (index) => {
        const card = cards.current[index];

        // If there are no cards flipped, stay revealed
        if (revealed.length === 0) {
            const newRevealed = [{ id: card.id, pokemonId: card.pokemonId }]
            setRevealed(newRevealed);
        }

        // If there is only one card flipped and the same card is clicked again, flip back
        if (revealed["id"].includes(card.id)) {
            const newRevealed = revealed["id"].filter(item => item !== card.id)
            setRevealed(newRevealed);
        }
        // If there are two cards flipped and a match, stay revealed
        else if (revealed["pokemonId"].includes(card.pokemonId)) {
            const newRevealed = [...revealed, { id: card.id, pokemonId: card.pokemonId }]
            setRevealed(newRevealed);
        }
        // If there are two cards flipped and no matches, flip back
        else {
            return
        };
    }

    return (
        <div className='cardTable'>
            {cards.current.map((card, index) =>
                <Card
                    key={card.id}
                    pokemonId={card.pokemonId}
                    isRevealed={revealed.includes(index)}
                    onClick={() => handleCardflip(index)}
                ></Card>
            )
            }
        </div>
    )
}

export default CardTable