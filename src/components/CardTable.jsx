import { useState, Fragment } from 'react'
import Card from './Card';
import '../styles/CardTable.css'

function CardTable() {
    const pokemonArray = Array(5).fill(true).map(() => Math.ceil(Math.random() * 151));

    const cardArray = Array(5).fill(true).map((_, i) => {
        const pokemonId = pokemonArray[i];
        return (
            <Fragment key={i}>
                <Card pairId={"A"} pokemonId={pokemonId} />
                <Card pairId={"B"} pokemonId={pokemonId} />
            </Fragment>
        )
    })

    return (
        <div className='cardTable'>
            {cardArray}
        </div>
    )
}

export default CardTable