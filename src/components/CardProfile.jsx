import { useState, useEffect } from 'react'
import { getPokemon } from '../api/pokemon';

function CardProfile({ pokemonId }) {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonImgUrl, setPokemonImgUrl] = useState(null);

    useEffect(() => {
        getPokemon(pokemonId).then((result) => {
            setPokemonName(result.name);
            setPokemonImgUrl(result.sprites.front_default);
        })
    }, [pokemonId]);

    return (
        <div className='profile'>
            <h3>NO. {pokemonId}</h3>
            <h3>{pokemonName}</h3>
            <img src={pokemonImgUrl} alt={pokemonName} />
        </div>
    )
}

export default CardProfile;