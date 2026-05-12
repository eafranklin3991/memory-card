import { useState } from 'react'
import CardProfile from '../components/CardProfile';
import '../styles/Card.css';

function Card() {
    return (
        <div className='card'>
            <CardProfile />
        </div>
    )
}

export default Card