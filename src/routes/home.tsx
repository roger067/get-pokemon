import { Route } from '@tanstack/react-router';

import { rootRoute } from './roots';
import { Home } from '../pages';

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <Home />,
});
