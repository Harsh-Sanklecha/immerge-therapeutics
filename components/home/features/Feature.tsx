import Chain from "@/components/icons/Chain";
import Typography from "@/components/ui/typography";
import { cn } from "@/lib/utils/cnHelper";
import { Children, ComponentType, ReactNode } from "react";

type FeaturePorps = {
  className?: string;
  children: ReactNode;
};

const Feature = ({ className, children }: FeaturePorps) => {
  return (
    <div className={cn("flex md:flex-col gap-4 md:gap-5", className)}>
      {children}
    </div>
  );
};

const Description = ({ children }: { children: ReactNode }) => {
  return (
    <div className="py-[5px] md:py-0">
      <Typography className="text-lg md:text-xl text-brand_gray-200">
        {children}
      </Typography>
    </div>
  );
};

Feature.Description = Description;

export default Feature;
