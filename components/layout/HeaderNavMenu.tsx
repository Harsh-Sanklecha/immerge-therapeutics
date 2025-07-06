import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { cn } from "@/lib/utils/cnHelper";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { navRoutes } from "@/lib/utils/navRoutes";
import { useNavActiveRoute } from "@/lib/hooks/useNavActiveRoute";
import { useEffect } from "react";
import { BlogsPosts } from "@/types/api/pages/BlogsOrCaseStudies";
import { loadPosts } from "@/lib/api";

const chevronStyle = "h-5 w-5 shrink-0 transition-transform duration-200";
const fontBold = "font-bold";

const HeaderNavMenu = () => {
  const { isActiveRoute, isActiveRouteIncluded } = useNavActiveRoute();

  // Only show the blogs menu if there are any posts
  // let isBlogsEmpty = true;

  // useEffect(() => {


  //   const checkIsBlogsIsEmpty = async () => {
  //     const result: BlogsPosts = await loadPosts("blog");
  //     const blogsPageData = result.filter(
  //       (post) => post.acf.data.category === "blog"
  //     );
  //     console.log(blogsPageData);

  //     if (blogsPageData.length > 0) {
  //       isBlogsEmpty = false;
  //       return
  //     }
  //     isBlogsEmpty = true;
  //     return
  //   }
  //   checkIsBlogsIsEmpty();

  // }, [])


  return (
    <Menubar className="hidden lg:flex">
      <MenubarMenu>
        <MenubarTrigger
          className={cn(
            `[&[data-state=open]>svg]:rotate-180 gap-2`,
            isActiveRouteIncluded(navRoutes["company"]) && fontBold
          )}
        >
          Company <ChevronDown className={chevronStyle} />
        </MenubarTrigger>
        <MenubarContent>
          {navRoutes["company"].map(({ name, href }, index) => (
            <Link key={index} href={href}>
              {" "}
              <MenubarItem className={`${isActiveRoute(href) && fontBold}`}>
                {name}
              </MenubarItem>
            </Link>
          ))}
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        {navRoutes["product"].map(({ name, href }, index) => (
          <Link
            key={index}
            href={href}
            className={`${isActiveRoute(href) ? fontBold : "font-medium"
              } text-brand_gray-400  hover:text-brand_blue-300`}
          >
            {name}
          </Link>
        ))}
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger
          className={cn(
            "[&[data-state=open]>svg]:rotate-180 gap-2",
            isActiveRouteIncluded(navRoutes["company"]) && fontBold
          )}
        >
          Solutions for <ChevronDown className={chevronStyle} />
        </MenubarTrigger>
        <MenubarContent>
          {navRoutes["solutionsFor"].map(({ name, href }, index) => (
            <Link key={index} href={href}>
              {" "}
              <MenubarItem className={`${isActiveRoute(href) && fontBold}`}>
                {name}
              </MenubarItem>
            </Link>
          ))}{" "}
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        {navRoutes["partnerWithUs"].map(({ name, href }, index) => (
          <Link
            key={index}
            href={href}
            className={`${isActiveRoute(href) ? fontBold : "font-medium"
              } text-brand_gray-400  hover:text-brand_blue-300`}
          >
            {name}
          </Link>
        ))}
      </MenubarMenu>
    </Menubar>
  );
};

export default HeaderNavMenu;
