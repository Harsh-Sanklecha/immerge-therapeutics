import { Menu } from "lucide-react";
import Logo from "./Logo";
import { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import HeaderNavMenu from "./HeaderNavMenu";
import Link from "next/link";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-40 h-16 md:h-20 pl-[13px] md:px-[120px] pr-5 w-full flex justify-between  items-center bg-white shadow">
      <Link href="/">
        <Logo />
      </Link>

      <HeaderNavMenu />
      <button
        onClick={() => {
          setIsSidebarOpen(true);
        }}
        className="lg:hidden"
      >
        <Menu />
      </button>
      <Sidebar
        isOpen={isSidebarOpen}
        handleClose={() => setIsSidebarOpen(false)}
      />
    </header>
  );
};

export default Header;
