import { useQuery } from '@tanstack/react-query';
import { getPokemons, getPokemonByName } from '../api/pokemon.api';

export const usePokemonsQuery = () =>
  useQuery({
    queryKey: ['getPokemons'],
    queryFn: () => getPokemons(),
  });

export const usePokemonByNameQuery = (pokemonName: string, enabled = true) =>
  useQuery({
    queryKey: ['getPokemonByName', pokemonName],
    queryFn: () => getPokemonByName(pokemonName.toLowerCase()),
    enabled,
  });
