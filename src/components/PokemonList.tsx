import { PokemonCard } from '.';
import { AddedPokemon } from '../types/pokemon';

interface PokemonListProps {
  pokemons: AddedPokemon[];
  isLoading: boolean;
  isError: boolean;
}

const PokemonList: React.FC<PokemonListProps> = ({
  pokemons,
  isLoading,
  isError,
}) => {
  if (isLoading) return <div>to carregando</div>;
  if (isError) return <div>to com erro</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          name={pokemon.name}
          imageUrl={pokemon.sprites.front_default}
          types={pokemon.types}
          catched={pokemon.catched}
          generation={pokemon.generation}
          onCatchPokemon={() => {}}
          onDeletePokemon={() => {}}
        />
      ))}
    </div>
  );
};

export default PokemonList;
