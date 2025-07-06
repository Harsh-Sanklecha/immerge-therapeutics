import { cn } from "@/lib/utils/cnHelper";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const FooterNavMenu = ({ children }: { children: ReactNode }) => {
  return <div className="space-y-6">{children}</div>;
};

const FooterNavMenuItem = ({
  name,
  href,
  className,
}: {
  name: string;
  href: string;
  className?: string;
}) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`block hover:font-semibold transition-all ${pathname?.startsWith(href) && "font-semibold"}`}
    >
      {name}
    </Link>
  );
};

FooterNavMenu.Item = FooterNavMenuItem;

export default FooterNavMenu;
