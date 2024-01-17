import { useQuery } from '@tanstack/react-query';
import { getPokemon, getAllPokemons } from '../api/pokemon.api';

export const usePokemonByNameQuery = (pokemonName?: string) =>
  useQuery({
    queryKey: ['getPokemon', pokemonName],
    queryFn: () => getPokemon(pokemonName),
  });

export const useAllPokemonsQuery = () =>
  useQuery({
    queryKey: ['getAllPokemons'],
    queryFn: () => getAllPokemons(),
  });
