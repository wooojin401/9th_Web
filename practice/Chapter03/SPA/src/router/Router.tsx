import { Children, cloneElement, useMemo } from "react";
import type { FC } from "react";
import type { RoutesProps } from "../types/RoutesProps";
import { useCurrentPath } from "../components/useCurrentPath";
import { isRouteElement } from "../components/isRouteElement";

export const Routes: FC<RoutesProps> = ({ children }) => {
  const currentPath = useCurrentPath();
  const activeRoute = useMemo(() => {
    const routes = Children.toArray(children).filter(
      isRouteElement
    ) as React.ReactElement<{ path: string }>[];
    return routes.find((route) => route.props.path === currentPath);
  }, [children, currentPath]);

  if (!activeRoute) return null;
  return cloneElement(activeRoute);
};
