import {
  usePokemonsQuery,
  usePokemonByNameQuery,
} from '../services/queries/pokemon.query';
import { useEffect, useState } from 'react';
import { AutoComplete, ToggleButton } from './shared';
import usePokemonStore from '../store/usePokemonStore';

const PokemonForm = () => {
  const pokemonName = usePokemonStore((state) => state.pokemonName);
  const setPokemonName = usePokemonStore((state) => state.setPokemonName);
  const addPokemon = usePokemonStore((state) => state.addPokemon);

  const [caughtedPokemon, setCaughtedPokemon] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

  const { data, isLoading, isError } = usePokemonsQuery();
  const {
    data: pokemon,
    isFetching: isPokemonLoading,
    refetch,
  } = usePokemonByNameQuery(pokemonName, false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    refetch();
  };

  useEffect(() => {
    const options = data?.results.map((pokemon) => pokemon.name) || [];
    setFilteredOptions(options);
  }, [data]);

  useEffect(() => {
    if (pokemon && !isPokemonLoading)
      addPokemon({ ...pokemon, generation: 'IV', caughted: caughtedPokemon });
  }, [pokemon, isPokemonLoading, caughtedPokemon, addPokemon]);

  const searchPokemons = (value: string) => {
    const filteredPokemons = data?.results.filter((pokemon) => {
      return pokemon.name.toLowerCase().startsWith(value.toLowerCase());
    });

    setFilteredOptions(
      filteredPokemons?.map((filteredPokemon) => filteredPokemon.name) || []
    );
  };

  return (
    <form
      className="flex gap-4 mb-8 md:items-end md:flex-row flex-col"
      onSubmit={onSubmit}
    >
      <div className="flex flex-1 gap-4 items-end">
        <div className="flex flex-col gap-2 w-full max-w-screen-sm">
          <label htmlFor="name">Digite o nome do pokemon: </label>
          <AutoComplete
            name="name"
            value={pokemonName}
            placeholder="Exemplo: Squirtle"
            suggestions={filteredOptions}
            completeMethod={searchPokemons}
            onChange={(value) => setPokemonName(value)}
            disabled={isLoading || isError}
          />
        </div>
        <ToggleButton
          className="min-w-[112px]"
          onLabel="Capturado"
          offLabel="Capturar"
          checked={caughtedPokemon}
          onChange={(e) => setCaughtedPokemon(e.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-red-500 rounde-xl text-white h-[42px] px-4 rounded-xl hover:bg-red-600 focus:bg-red-600 transition-colors"
      >
        Adicionar
      </button>
    </form>
  );
};

export default PokemonForm;
