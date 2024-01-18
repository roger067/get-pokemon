import {
  Outlet,
  RootRoute,
  Router,
  routerContext,
} from '@tanstack/react-router';
import { ReactNode } from 'react';

export const Root = () => {
  return <Outlet />;
};

const rootRoute = new RootRoute({
  component: Root,
});

const routeTree = rootRoute.addChildren([]);
const router = new Router({ routeTree });

type RenderWrapperProps = {
  children: ReactNode;
};

export const RenderWrapper = ({ children }: RenderWrapperProps) => {
  return (
    <routerContext.Provider value={router}>{children}</routerContext.Provider>
  );
};
