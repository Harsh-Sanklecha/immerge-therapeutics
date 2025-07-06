import { cn } from "@/lib/utils/cnHelper";
import Typography from "../ui/typography";
import { ReactNode } from "react";

type CommonProps = {
  className?: string;
  gridClassName?: string;
  children: ReactNode;
  lineClassName?: string;
};

const Pill = ({
  gridClassName,
  lineClassName,
  className,
  children,
}: CommonProps) => {
  return (
    <div className={cn("flex items-center", className)}>
      <div
        className={cn("md:w-[95px] h-[1px] bg-primary-gradient", lineClassName)}
      ></div>
      <div className="grow border-gradient  rounded-[88px] lg:rounded-full p-1.5 lg:px-[27px] lg:py-[22px]">
        <div
          className={cn(
            "px-[30px] lg:px-[90px] min-h-[397px] lg:min-h-0 md:py-10 grid grid-cols-2 lg:flex justify-items-center  items-center lg:items-start lg:flex-nowrap basis-1/2  flex-row  lg:justify-evenly rounded-[88px]  lg:rounded-full border-gradient shadow-gradient",
            gridClassName
          )}
        >
          {children}
        </div>
      </div>
      <div
        className={cn("md:w-[95px] h-[1px] bg-primary-gradient", lineClassName)}
      ></div>
    </div>
  );
};

const PillItem = ({ children, className }: CommonProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-1.5 max-w-[135px] md:max-w-[186px] text-center",
        className
      )}
    >
      {children}
    </div>
  );
};
Pill.Item = PillItem;

const Title = ({ children, className }: CommonProps) => {
  return (
    <Typography variant="h3" component="h4" className={cn(className)}>
      {children}
    </Typography>
  );
};
Pill.Title = Title;

const Description = ({ children, className }: CommonProps) => {
  return (
    <Typography className={cn("text-brand_gray-200 text-[15px]", className)}>
      {children}
    </Typography>
  );
};
Pill.Description = Description;

export default Pill;
