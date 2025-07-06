import { cn } from "@/lib/utils/cnHelper";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { ComponentProps } from "react";

type LogoProps = ComponentProps<"image"> & {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <Image
      className={cn("h-[60px] w-[180px] object-contain", className)}
      src={logo}
      alt="Logo"
    />
  );
};

export default Logo;
