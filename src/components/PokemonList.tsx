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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {pokemons.map((pokemon) => (
        <div
          key={pokemon.name}
          className="p-4 shadow-md rounded-xl bg-emerald-300"
        >
          <div className="flex justify-center">
            <img
              className="w-3/4"
              src={pokemon.sprites.front_default}
              alt="pokemon"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl text-white font-bold capitalize">
              {pokemon.name}
            </span>
            <div className="flex mt-3 justify-between items-center">
              <div className="flex gap-2 ">
                <span className="px-2 py-1 rounded-full bg-emerald-200 text-white font-semibold w-fit">
                  Grass
                </span>
                <span className="px-2 py-1 rounded-full bg-emerald-200 text-white font-semibold w-fit">
                  Poison
                </span>
              </div>
              <span className="text-white font-semibold text-xl">IV</span>
            </div>
            <div className="flex gap-3 mt-6">
              <button className="bg-white text-emerald-700 border border-emerald-700 rounde-xl h-[42px] px-4 rounded-xl w-full hover:bg-emerald-100 transition-colors">
                Deletar
              </button>
              <button className="bg-emerald-700 rounde-xl text-white h-[42px] px-4 rounded-xl w-full hover:bg-emerald-800 transition-colors">
                Capturar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
