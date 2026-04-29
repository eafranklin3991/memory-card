import Pokedex from 'pokeapi-js-wrapper';

const P = new Pokedex();

export const getPokemon = (nameOrId) => P.getPokemonByName(nameOrId);