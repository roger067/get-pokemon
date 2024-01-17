import { PokemonType } from '../types/pokemon';
import { mappedColorTypes } from '../utils/constants';

interface PokemonCardProps {
  name: string;
  imageUrl: string;
  types: PokemonType[];
  generation: string;
  caughted: boolean;
  onCatchPokemon: () => void;
  onDeletePokemon: () => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  name,
  imageUrl,
  types,
  generation = 'IV',
  caughted,
  onCatchPokemon,
  onDeletePokemon,
}) => {
  const color = mappedColorTypes[types[0].type.name];

  return (
    <div className={`p-4 shadow-md rounded-xl ${color.bgNormal}`}>
      <div className="flex justify-center">
        <img className="w-3/4" src={imageUrl} alt="pokemon" />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl text-white font-bold capitalize">{name}</span>
        <div className="flex mt-3 justify-between items-center">
          <div className="flex gap-2 ">
            {types.map((typeObject) => (
              <span
                key={typeObject.slot}
                className={`px-2 py-1 rounded-full ${color.bgLight} text-white font-semibold w-fit capitalize`}
              >
                {typeObject.type.name}
              </span>
            ))}
          </div>
          <span className="text-white font-semibold text-xl">{generation}</span>
        </div>
        <div className="flex gap-3 mt-6">
          <button
            className={`bg-white ${color.textMedium} border ${color.borderMedium} rounde-xl h-[42px] px-4 rounded-xl w-full ${color.bgThinHover} transition-colors`}
            onClick={() => onDeletePokemon()}
          >
            Deletar
          </button>
          <button
            className={`${color.bgMedium} rounde-xl text-white h-[42px] px-4 rounded-xl w-full ${color.bgDarkHover} transition-colors`}
            disabled={caughted}
            onClick={() => onCatchPokemon()}
          >
            {caughted ? 'Capturado' : 'Capturar'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
