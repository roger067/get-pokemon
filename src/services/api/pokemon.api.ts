import { GetPokemonResponse, Pokemon } from '../../types/pokemon';

export const getPokemons = async () => {
  const res: GetPokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=898`
  ).then((res) => res.json());
  return res;
};

export const getPokemonByName = async (pokemonName: string) => {
  const res: Pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  ).then((res) => res.json());
  return res;
};
