import { ComponentProps, ReactElement, ReactNode } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils/cnHelper";
import LinkArrow from "../icons/LinkArrow";

type IconButtonProps = ComponentProps<typeof Button> & {
  children: ReactNode;
  className?: string;
  //   icon?: () =>  JSX.Element;
};

const IconButton = ({ children, className, ...props }: IconButtonProps) => {
  return (
    <Button
      className={cn(
        "group hover:shadow shadow-gradient-cta transition-all flex justify-between items-center px-5 py-3",
        className
      )}
      {...props}
    >
      {children}
      <LinkArrow className="group-hover:scale-110 group-hover:shadow-md rounded-full ease-in-out transition-all md:w-7 md:h-7 w-6 h-6" />
    </Button>
  );
};

export default IconButton;
