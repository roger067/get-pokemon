import usePokemonStore from '../store/usePokemonStore';
import { Select } from './shared';

const PokemonFilter = () => {
  const caughtSelectValue = usePokemonStore((state) => state.caughtSelectValue);
  const setCaughtSelectValue = usePokemonStore(
    (state) => state.setCaughtSelectValue
  );

  return (
    <div className="flex justify-between items-center mt-10 mb-8">
      <h1 className="font-bold text-2xl">To-do</h1>
      <Select
        value={caughtSelectValue}
        placeholder="Filtrar Pokemon"
        items={[
          { id: 'caught', value: 'Capturado' },
          { id: 'uncaught', value: 'Não Capturado' },
        ]}
        onChange={(value) => setCaughtSelectValue(value)}
      />
    </div>
  );
};

export default PokemonFilter;
