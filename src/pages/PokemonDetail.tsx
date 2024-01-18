import { Link, useParams } from '@tanstack/react-router';
import { usePokemonByNameQuery } from '../services/queries/pokemon.query';
import { PokemonDetailCard, PokemonDetailHeader } from '../components';

const PokemonDetail = () => {
  const { name } = useParams({ strict: false });

  const { data: pokemon, isLoading, isError } = usePokemonByNameQuery(name);

  if (isError)
    return (
      <div className="my-8 flex items-center flex-col text-center gap-3">
        <span className="block font-bold text-lg">
          Desculpe, ocorreu um erro ao carregar o Pokemon!{' '}
        </span>
        <Link to="/" className="text-red-500 underline">
          Clique para voltar a página inicial
        </Link>
      </div>
    );

  return (
    <>
      <PokemonDetailHeader name={name} id={pokemon?.id || 0} />
      {pokemon && <PokemonDetailCard pokemon={pokemon} />}
    </>
  );
};

export default PokemonDetail;
