import { Pokemon } from '../types/pokemon';

interface PokemonListProps {
  pokemons: Pokemon[];
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {pokemons.map((pokemon) => (
        <div key={pokemon.name} className="bg-white p-4 shadow-md rounded-md">
          <img src={pokemon.sprites.front_default} alt="pokemon" />
          {pokemon.name}
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
