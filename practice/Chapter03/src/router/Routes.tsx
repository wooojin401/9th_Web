import React from 'react';
import { useCurrentPath } from '../hooks/useCurrentPath';

type RouteConfig = {
  path: string;
  component: React.ComponentType;
};

export function Routes({ routes }: { routes: RouteConfig[] }) {
  const path = useCurrentPath();
  const active = routes.find((r) => r.path === path);
  if (!active) return <h1 style={{ padding: 24 }}>404 Not Found</h1>;
  const Component = active.component;
  return <Component />;
}
