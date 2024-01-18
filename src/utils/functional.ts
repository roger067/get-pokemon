import { generations } from './constants';

export function getGenerationByPokemonId(pokemonId: number) {
  for (const maxId in generations) {
    if (pokemonId <= parseInt(maxId)) {
      return generations[maxId];
    }
  }

  return 'None';
}
