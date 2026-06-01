import { useState, Fragment } from 'react'
import Card from './Card';
import '../styles/CardTable.css'

function CardTable() {
    const pokemonArray = Array(5).fill(true).map(() => Math.ceil(Math.random() * 151));
    const doubleArray = [...pokemonArray, ...pokemonArray];

    function shuffle(array) {
        let currentIndex = array.length;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
    }

    const shuffledArray = shuffle(doubleArray);

    const cardArray = Array(10).fill(true).map((_, i) => {
        const pokemonId = doubleArray[i];
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