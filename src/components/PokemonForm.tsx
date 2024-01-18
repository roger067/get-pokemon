import { useEffect, useState } from 'react';

import { toast } from 'react-toastify';

import {
  usePokemonsQuery,
  usePokemonByNameQuery,
} from '../services/queries/pokemon.query';
import { AutoComplete, ToggleButton } from './shared';
import usePokemonStore from '../store/usePokemonStore';
import { getGenerationByPokemonId } from '../utils/functional';

const PokemonForm = () => {
  const pokemons = usePokemonStore((state) => state.pokemons);
  const pokemonName = usePokemonStore((state) => state.pokemonName);
  const setPokemonName = usePokemonStore((state) => state.setPokemonName);
  const addPokemon = usePokemonStore((state) => state.addPokemon);

  const [caughtPokemon, setcaughtPokemon] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

  const { data, isLoading, isError } = usePokemonsQuery();
  const { isFetching: isPokemonLoading, refetch } = usePokemonByNameQuery(
    pokemonName,
    false
  );

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const pokemonIsDuplicated = pokemons.some(
      (existingPokemon) =>
        existingPokemon.name.toLowerCase() === pokemonName.toLocaleLowerCase()
    );

    if (pokemonIsDuplicated) return toast.info('Pokemon já existe no to-do!');

    refetch({ throwOnError: true })
      .then((res) => {
        if (res.data && !isPokemonLoading) {
          addPokemon({
            ...res.data,
            generation: getGenerationByPokemonId(res.data.id),
            caught: caughtPokemon,
          });
          setPokemonName('');
          setcaughtPokemon(false);
        }
      })
      .catch(() => {
        toast.error('Erro ao adicionar Pokemon!');
      });
  };

  useEffect(() => {
    const options = data?.results.map((pokemon) => pokemon.name) || [];
    setFilteredOptions(options);
  }, [data]);

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
          <label htmlFor="name">Digite o nome do pokemon:</label>
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
          checked={caughtPokemon}
          onChange={(e) => setcaughtPokemon(e.value)}
        />
      </div>
      <button
        type="submit"
        disabled={isPokemonLoading || !pokemonName}
        className="bg-purple-500 rounde-xl text-white h-[42px] px-4 rounded-xl hover:bg-purple-600 focus:bg-purple-600 transition-colors font-bold disabled:bg-purple-200"
      >
        {isPokemonLoading ? 'Carregando...' : 'Adicionar'}
      </button>
    </form>
  );
};

export default PokemonForm;
