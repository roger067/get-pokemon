import { create } from 'zustand';
import { Pokemon } from '../types/pokemon';

type PokemonStore = {
  pokemons: Pokemon[];
  addPokemon: (pokemon: Pokemon) => void;
  catchPokemon: (id: number, updatedPokemon: Partial<Pokemon>) => void;
  deletePokemon: (id: number) => void;
};

const usePokemonStore = create<PokemonStore>((set) => ({
  pokemons: [],
  addPokemon: (pokemon) =>
    set((state) => ({ pokemons: [...state.pokemons, pokemon] })),
  catchPokemon: (id) =>
    set((state) => ({
      pokemons: state.pokemons.map((pokemon) =>
        pokemon.id === id ? { ...pokemon, catched: !pokemon.catched } : pokemon
      ),
    })),
  deletePokemon: (id) =>
    set((state) => ({
      pokemons: state.pokemons.filter((pokemon) => pokemon.id !== id),
    })),
}));

export default usePokemonStore;
