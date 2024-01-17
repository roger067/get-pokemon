import { useQuery } from '@tanstack/react-query';
import { getPokemon, getAllPokemons } from '../api/pokemon.api';

export const usePokemonsQuery = (pokemonName?: string) =>
  useQuery({
    queryKey: ['getPokemon', pokemonName],
    queryFn: () => getPokemon(pokemonName),
  });

export const useAllPokemonsDetailedQuery = () =>
  useQuery({
    queryKey: ['getAllPokemons'],
    queryFn: () => getAllPokemons(),
  });
