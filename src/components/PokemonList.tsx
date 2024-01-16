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
    <div>
      {pokemons.map((pokemon) => (
        <div>{pokemon.name}</div>
      ))}
    </div>
  );
};

export default PokemonList;
