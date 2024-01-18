import { Router, RouterProvider } from '@tanstack/react-router';
import { rootRoute } from './roots';
import { indexRoute } from './home';
import { pokemonDetailRoute } from './pokemonDetail';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const routeTree = rootRoute.addChildren([indexRoute, pokemonDetailRoute]);

const router = new Router({ routeTree });

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
