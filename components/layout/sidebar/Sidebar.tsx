import { Sheet, SheetContent } from "@/components/ui/sheet";
import Link from "next/link";
import Logo from "../Logo";
import Typography from "../../ui/typography";
import { ChevronDown } from "lucide-react";
import { navRoutes } from "@/lib/utils/navRoutes";
import SidebarMenuCollapsible from "./sidebarMenuCollapsible/SidebarMenuCollapsible";
import SidebarMenuContent from "./sidebarMenuCollapsible/SidebarMenuContent";
import SidebarMenuTrigger from "./sidebarMenuCollapsible/SidebarMenuTrigger";
import { useNavActiveRoute } from "@/lib/hooks/useNavActiveRoute";
import { cn } from "@/lib/utils/cnHelper";
import { useEffect } from "react";
import { useRouter } from "next/router";

const chevronStyle = "h-5 w-5 shrink-0 transition-transform duration-200";
const fontBold = "font-bold";
const navItemStyle =
  "font-medium text-xl text-brand_gray-400  hover:text-brand_blue-300";

type SidebarProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const Sidebar = ({ isOpen, handleClose }: SidebarProps) => {
  const { isActiveRoute, isActiveRouteIncluded } = useNavActiveRoute();

  const router = useRouter();

  // close the sidebar after selecting a route
  useEffect(() => {
    router.events.on("routeChangeStart", handleClose);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleClose);
    };
  }, [handleClose, router]);

  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      <SheetContent side="left" className="w-full flex flex-col">
        <Link href="/">
          <Logo />
        </Link>
        <div className="mt-16 gap-y-10 flex grow flex-col items-center overflow-y-auto text-center">
          <SidebarMenuCollapsible>
            <SidebarMenuTrigger className="[&[data-state=open]>svg]:rotate-180">
              <Typography
                className={cn(
                  navItemStyle,
                  isActiveRouteIncluded(navRoutes["company"]) && fontBold
                )}
              >
                Company
              </Typography>{" "}
              <ChevronDown className={chevronStyle} />
            </SidebarMenuTrigger>
            <SidebarMenuContent>
              {navRoutes["company"].map(({ name, href }, index) => (
                <Link key={index} href={href}>
                  <Typography
                    className={cn(
                      navItemStyle,
                      isActiveRoute(href) && fontBold
                    )}
                  >
                    {name}
                  </Typography>
                </Link>
              ))}
            </SidebarMenuContent>
          </SidebarMenuCollapsible>
          <Link href={navRoutes["product"][0].href}>
            <Typography className={navItemStyle}>{navRoutes["product"][0].name}</Typography>{" "}
          </Link>
          <SidebarMenuCollapsible>
            <SidebarMenuTrigger className="[&[data-state=open]>svg]:rotate-180">
              <Typography
                className={cn(
                  navItemStyle,
                  isActiveRouteIncluded(navRoutes["solutionsFor"]) && fontBold
                )}
              >
                Solutions for
              </Typography>
              <ChevronDown className={chevronStyle} />
            </SidebarMenuTrigger>
            <SidebarMenuContent>
              {navRoutes["solutionsFor"].map(({ href, name }, index) => (
                <Link key={index} href={href}>
                  <Typography
                    className={cn(
                      navItemStyle,
                      isActiveRoute(href) && fontBold
                    )}
                  >
                    {name}
                  </Typography>
                </Link>
              ))}
            </SidebarMenuContent>
          </SidebarMenuCollapsible>
          <Link href={navRoutes["partnerWithUs"][0].href}>
            <Typography className={navItemStyle}>{navRoutes["partnerWithUs"][0].name}</Typography>{" "}
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
