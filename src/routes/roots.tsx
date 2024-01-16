import { Outlet, RootRoute } from '@tanstack/react-router';
import { Header } from '../components/shared';

export const rootRoute = new RootRoute({
  component: () => (
    <>
      <Header />
      <Outlet />
    </>
  ),
});
