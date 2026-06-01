import { useState, Fragment } from 'react'
import Card from './Card';
import '../styles/CardTable.css'

function CardTable() {
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

    const cardArray = Array(10).fill(true).map((_, i) => {
        const pokemonId = shuffledArray[i];
        return (
            <Card pokemonId={pokemonId} key={i} />
        )
    })

    return (
        <div className='cardTable'>
            {cardArray}
        </div>
    )
}

export default CardTable