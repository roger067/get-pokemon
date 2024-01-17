import { create } from 'zustand';
import { AddedPokemon } from '../types/pokemon';

type PokemonStore = {
  pokemons: AddedPokemon[];
  pokemonName: string;
  setPokemonName: (name: string) => void;
  addPokemon: (pokemon: AddedPokemon) => void;
  catchPokemon: (id: number, updatedPokemon: Partial<AddedPokemon>) => void;
  deletePokemon: (id: number) => void;
};

const usePokemonStore = create<PokemonStore>((set) => ({
  pokemons: [],
  pokemonName: '',
  setPokemonName: (name: string) => set(() => ({ pokemonName: name })),
  addPokemon: (pokemon) =>
    set((state) => ({ pokemons: [...state.pokemons, pokemon] })),
  catchPokemon: (id) =>
    set((state) => ({
      pokemons: state.pokemons.map((pokemon) =>
        pokemon.id === id
          ? { ...pokemon, caughted: !pokemon.caughted }
          : pokemon
      ),
    })),
  deletePokemon: (id) =>
    set((state) => ({
      pokemons: state.pokemons.filter((pokemon) => pokemon.id !== id),
    })),
}));

export default usePokemonStore;
