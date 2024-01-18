import { Route } from '@tanstack/react-router';

import { rootRoute } from './roots';
import { PokemonDetail } from '../pages';

export const pokemonDetailRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/pokemon/$name',
  component: () => <PokemonDetail />,
});
