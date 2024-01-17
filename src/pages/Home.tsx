import { PokemonList } from '../components';
import { useAllPokemonsQuery } from '../services/queries/pokemon.query';

const Home = () => {
  const { data, isLoading, isError } = useAllPokemonsQuery();

  console.log(data);

  return (
    <PokemonList
      pokemons={data || []}
      isLoading={isLoading}
      isError={isError}
    />
  );
};

export default Home;
