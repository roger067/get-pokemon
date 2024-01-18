import { Link } from '@tanstack/react-router';
import { PokemonCard } from '.';
import usePokemonStore from '../store/usePokemonStore';

const PokemonList = () => {
  const pokemons = usePokemonStore((state) => state.pokemons);
  const caugthPokemon = usePokemonStore((state) => state.caugthPokemon);
  const deletePokemon = usePokemonStore((state) => state.deletePokemon);
  const caughtSelectValue = usePokemonStore((state) => state.caughtSelectValue);
  const isCaught = caughtSelectValue === 'Capturado';

  const filteredPokemons = pokemons.filter((pokemon) =>
    !caughtSelectValue ? pokemon : pokemon.caught === isCaught
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-8">
      {filteredPokemons.map((pokemon) => (
        <Link
          key={pokemon.id}
          to="/pokemon/$name"
          params={{
            name: pokemon.name,
          }}
        >
          <PokemonCard
            name={pokemon.name}
            imageUrl={
              pokemon.sprites.other.dream_world.front_default ||
              pokemon.sprites.front_default
            }
            types={pokemon.types}
            caught={pokemon.caught}
            generation={pokemon.generation}
            onCaughtPokemon={() => caugthPokemon(pokemon.id)}
            onDeletePokemon={() => deletePokemon(pokemon.id)}
          />
        </Link>
      ))}
    </div>
  );
};

export default PokemonList;
