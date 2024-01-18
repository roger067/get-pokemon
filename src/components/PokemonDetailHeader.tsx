import { formatPokemonId, getGenerationByPokemonId } from '../utils/functional';

interface PokemonDetailHeaderProps {
  name: string;
  id: number;
}

const PokemonDetailHeader: React.FC<PokemonDetailHeaderProps> = ({
  name,
  id,
}) => (
  <div className="flex justify-between items-center my-8">
    <h1 className="font-bold text-3xl capitalize">{name}</h1>
    <div className="flex gap-4">
      <div className="inline-block bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-semibold">
        {formatPokemonId(id)}
      </div>
      <div className="inline-block bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-semibold font-mono">
        {getGenerationByPokemonId(id)}
      </div>
    </div>
  </div>
);

export default PokemonDetailHeader;
