import { Pokemon } from '../types/pokemon';
import { Progress } from './shared';

interface PokemonDetailCardProps {
  pokemon: Pokemon;
}

const PokemonDetailCard: React.FC<PokemonDetailCardProps> = ({ pokemon }) => {
  const typeNames: string[] = pokemon.types.map((type) => type.type.name);
  const abilityNames: string[] = pokemon.abilities.map(
    (ability) => ability.ability.name
  );

  return (
    <div className="flex flex-col md:flex-row w-full px-8 py-10 rounded-3xl shadow-lg border gap-8 md:gap-16 mb-8">
      <div className="flex flex-col gap-8 md:w-1/3 w-full">
        <img
          className="w-100"
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
        />
        <div className="flex flex-col gap-2">
          <span>
            Altura: <b>{pokemon.height / 10}m</b>
          </span>
          <span>
            Peso: <b>{pokemon.weight / 10}Kg</b>
          </span>
          <span>
            Tipos: <b>{typeNames.join(', ')}</b>
          </span>
          <span>
            Habilidades: <b>{abilityNames.join(', ')}</b>
          </span>
        </div>
      </div>
      <div className="md:w-2/3 w-full">
        <span className="text-gray-700 font-bold text-xl mb-6 block">
          Status
        </span>
        <div className="flex flex-col gap-5">
          {pokemon.stats.map((stat) => (
            <Progress
              key={stat.stat.name}
              label={stat.stat.name}
              value={stat.base_stat}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailCard;
