import { useQuery } from '@tanstack/react-query';
import { GetPokemonsResponse } from '../../types/pokemon';
import { getPokemons } from '../api/pokemon.api';

export const usePokemonsQuery = (pokemonId?: string) =>
  useQuery<GetPokemonsResponse>({
    queryKey: ['getPokemons', pokemonId],
    queryFn: () => getPokemons(pokemonId),
  });
