import { PokemonList } from '../components';
import { usePokemonsQuery } from '../services/queries/pokemon.query';

const Home = () => {
  const { data } = usePokemonsQuery();

  console.log(data);

  return <PokemonList />;
};

export default Home;
