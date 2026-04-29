import { useState, useEffect } from 'react'
import { getPokemon } from '../api/pokemon';

function CardProfile() {
    const [pokemonId] = useState(() => Math.floor(Math.random() * 151) + 1);
    const [pokemonData, setPokemonData] = useState(null);
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonImgUrl, setPokemonImgUrl] = useState('');
    
    useEffect(() => {
        getPokemon(pokemonId).then((result) => {
            setPokemonData(result);
            setPokemonName(result.name);
            setPokemonImgUrl(result.sprites.front_default);
        })
    }, []);

    return(
    <div>
        <h3>{pokemonId}</h3>
        <h3>{pokemonName}</h3>
        <img src={pokemonImgUrl} alt={pokemonName} />
    </div>
    )
}

export default CardProfile;