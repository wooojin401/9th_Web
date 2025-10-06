import type { ReactElement } from "react";
import { Route } from "../router/Route";

export const isRouteElement = (child: any): child is ReactElement => {
  return child.type === Route;
};
