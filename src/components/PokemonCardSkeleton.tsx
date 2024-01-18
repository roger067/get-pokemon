const PokemonCardSkeleton = () => (
  <div className="flex flex-col gap-8 md:flex-row w-full px-8 py-10 rounded-3xl shadow-lg border animate-pulse">
    <div className="flex flex-col md:w-1/3 w-full">
      <div className="bg-gray-300 h-64 w-full rounded-md mb-8"></div>
      <div className="flex flex-col gap-2">
        <div className="bg-gray-400 h-4 w-1/2 rounded-md"></div>
        <div className="bg-gray-400 h-4 w-3/4 rounded-md"></div>
        <div className="bg-gray-400 h-4 w-1/4 rounded-md"></div>
      </div>
    </div>
    <div className="md:w-2/3 w-full">
      <div className="bg-gray-400 w-1/2 h-6 rounded-md mb-6"></div>
      <div className="flex flex-col gap-5">
        <div className="bg-gray-400 h-4 w-1/2 rounded-md"></div>
        <div className="bg-gray-400 h-4 w-3/4 rounded-md"></div>
        <div className="bg-gray-400 h-4 w-1/4 rounded-md"></div>
      </div>
    </div>
  </div>
);

export default PokemonCardSkeleton;
