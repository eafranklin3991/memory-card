import { useState, Fragment } from 'react'
import Card from './Card';
import '../styles/CardTable.css'

function CardTable() {
    const [revealedIndex, setRevealedIndex] = useState(null);
    const [matchedIndex, setMatchedIndex] = useState(null);

    const pokemonArray = Array(5).fill(null).map(() => Math.ceil(Math.random() * 151));
    const doubleArray = [...pokemonArray, ...pokemonArray];

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

    const shuffledArray = shuffle(doubleArray);

    const handleCardFlip = () => {
        revealedIndex.push(pairId);
        if (new Set(revealedIndex).size !== revealedIndex.length):
            matchedIndex.push(pairId);

        setRevealedIndex(pairId);
    };

    const cardArray = Array(10).fill(true).map((_, i) => {
        const pokemonId = shuffledArray[i];
        const pairId = doubleArray[i];
        return (
            <Card pokemonId={pokemonId} key={i} pairId={pairId} isMatched={matchedIndex === pairId} onClick={handleCardFlip} isRevealed={revealedIndex === pairId} />
        )
    })

    return (
        <div className='cardTable'>
            {cardArray}
        </div>
    )
}

export default CardTable