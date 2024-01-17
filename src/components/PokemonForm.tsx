import { usePokemonsQuery } from '../services/queries/pokemon.query';
import { useEffect, useState } from 'react';
import { AutoComplete, ToggleButton } from './shared';

const PokemonForm = () => {
  const { data, isLoading, isError } = usePokemonsQuery();
  const [pokemonName, setPokemonName] = useState('');
  const [caughtedPokemon, setCaughtedPokemon] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

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
    <form className="flex gap-4 mb-8 md:items-end md:flex-row flex-col">
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
