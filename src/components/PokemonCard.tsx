import { PokemonType } from '../types/pokemon';
import { mappedColorTypes } from '../utils/constants';

interface PokemonCardProps {
  name: string;
  imageUrl: string;
  types: PokemonType[];
  generation: string;
  caught: boolean;
  onCaughtPokemon: () => void;
  onDeletePokemon: () => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  name,
  imageUrl,
  types,
  generation = 'IV',
  caught,
  onCaughtPokemon,
  onDeletePokemon,
}) => {
  const color = mappedColorTypes[types[0].type.name];

  const handleDeletePokemon = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    onDeletePokemon();
  };

  const handleCaughtPokemon = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    onCaughtPokemon();
  };

  return (
    <div
      className={`p-5 shadow-md rounded-xl duration-300 ease-in-out transition-transform hover:scale-105 ${color.bgNormal}`}
    >
      <div className="flex justify-center mb-6">
        <img className="w-3/4 h-48" src={imageUrl} alt="pokemon" />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl text-white font-bold capitalize">{name}</span>
        <div className="flex mt-3 justify-between items-center">
          <div className="flex gap-2 ">
            {types.map((typeObject, index) => (
              <span
                key={`${typeObject.type.name}-${index}`}
                className={`px-2 py-1 rounded-full ${color.bgLight} text-white font-semibold w-fit capitalize text-sm`}
              >
                {typeObject.type.name}
              </span>
            ))}
          </div>
          <span className="text-white font-semibold text-xl font-mono">
            {generation}
          </span>
        </div>
        <div className="flex gap-3 mt-6">
          <button
            className={`bg-white ${color.textMedium} border ${color.borderMedium} rounde-xl h-[42px] px-4 rounded-xl w-full ${color.bgThinHover} transition-colors`}
            onClick={handleDeletePokemon}
          >
            Deletar
          </button>
          <button
            className={`${color.bgMedium} rounde-xl text-white h-[42px] px-4 rounded-xl w-full ${color.bgDarkHover} transition-colors disabled:bg-gray-200 disabled:text-gray-400`}
            disabled={caught}
            onClick={handleCaughtPokemon}
          >
            {caught ? 'Capturado' : 'Capturar'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
