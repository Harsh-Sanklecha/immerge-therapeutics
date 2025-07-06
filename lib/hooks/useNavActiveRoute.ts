import { usePathname } from "next/navigation";
import type { navRoutesType } from "../utils/navRoutes";

export const useNavActiveRoute = () => {
  const pathname = usePathname();

  const isActiveRoute = (route: string) => {
    return pathname?.startsWith(route);
  };

  // check if the current active route is in a specified nav category
  const isActiveRouteIncluded = (routes: navRoutesType["company"]) => {
    return routes.some((route) => isActiveRoute(route.href));
  };
  return { isActiveRoute, isActiveRouteIncluded };
};
