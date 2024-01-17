import { PokemonForm, PokemonList } from '../components';
import { useAllPokemonsDetailedQuery } from '../services/queries/pokemon.query';

const Home = () => {
  const { data, isLoading, isError } = useAllPokemonsDetailedQuery();

  console.log(data);

  return (
    <>
      <PokemonForm />
      <PokemonList
        pokemons={data || []}
        isLoading={isLoading}
        isError={isError}
      />
    </>
  );
};

export default Home;
