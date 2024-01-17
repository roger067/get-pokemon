import { GetPokemonResponse, Pokemon } from '../../types/pokemon';

export const getPokemon = async (pokemonId?: string) => {
  const res: GetPokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId || ''}`
  ).then((res) => res.json());
  return res;
};

export const getAllPokemons = async () => {
  const pokemons = await getPokemon();

  const pokemonDetailsPromises: Promise<Pokemon>[] = pokemons.results.map(
    async (pokemon) => {
      const pokemonResponse = await fetch(pokemon.url);
      return pokemonResponse.json();
    }
  );

  const pokemonDetails = await Promise.all(pokemonDetailsPromises);

  return pokemonDetails;
};
