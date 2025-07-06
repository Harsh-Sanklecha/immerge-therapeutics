import { cn } from "@/lib/utils/cnHelper";
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const cardVariants = cva("", {
  variants: {
    variant: {
      outlineGradient:
        "gradient-border p-6 md:px-[31px] md:py-[38px] flex flex-wrap gap-[17px] rounded-[12px] hover:bg-white cursor-pointer",
    },
  },
  defaultVariants: {
    variant: "outlineGradient",
  },
});

type CardProps = ComponentProps<"div"> &
  VariantProps<typeof cardVariants> & {
    children: React.ReactNode;
    className?: string;
  };

const Card = ({ children, className, variant, ...props }: CardProps) => {
  return (
    <div className={cn(cardVariants({ variant, className }))} {...props}>
      {children}
    </div>
  );
};

export default Card;
