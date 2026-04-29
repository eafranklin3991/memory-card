import { Pokedex } from 'pokeapi-js-wrapper';

const P = await Pokedex.init();

export const getPokemon = (nameOrId) => P.getPokemonByName(nameOrId);