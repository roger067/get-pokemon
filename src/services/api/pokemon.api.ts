export const getPokemons = async (pokemonId?: string) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId || ''}`
  ).then((res) => res.json());
  return res;
};
