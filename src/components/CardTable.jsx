import { useState } from 'react'
import Card from './Card';
import '../styles/CardTable.css'

function CardTable() {
    return (
        <div className='cardTable'>
            {Array(10).fill(true).map((_, i) => <Card key={i} />)}
        </div>
    )
}

export default CardTable