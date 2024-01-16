import { Outlet, RootRoute } from '@tanstack/react-router';
import { Header } from '../components/shared';

export const rootRoute = new RootRoute({
  component: () => (
    <>
      <Header />
      <div className="container mx-auto px-4">
        <Outlet />
      </div>
    </>
  ),
});
