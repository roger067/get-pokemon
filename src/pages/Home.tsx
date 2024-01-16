import { PokemonList } from '../components';
import { usePokemonsQuery } from '../services/queries/pokemon.query';

const Home = () => {
  const { data, isLoading, isError } = usePokemonsQuery();

  console.log(data);

  return (
    <PokemonList
      pokemons={data?.results || []}
      isLoading={isLoading}
      isError={isError}
    />
  );
};

export default Home;
