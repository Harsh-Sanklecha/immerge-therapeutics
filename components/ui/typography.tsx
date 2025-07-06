import { cn } from "@/lib/utils/cnHelper";
import { cva, type VariantProps } from "class-variance-authority";

export const typographyVariants = cva("", {
  variants: {
    variant: {
      p: "text-base md:text-lg text-brand_gray-300",
      subp:"text-[18px] font-normal text-[#6B6B6B]",
      h1: "text-[40px] text-brand_black-100 md:text-[64px] font-extrabold",
      h4: "text-[18px] font-extrabold text-brand_black-100",
      h3: "text-brand_black-100 font-semibold text-[26px] md:text-4xl",
      subh: "text-[32px] md:text-[40px] font-extrabold text-[#282828]",
      quote: "text-brand_black-100 leading-[36px] font-bold text-2xl",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

export type TypographyProps = VariantProps<typeof typographyVariants> &
  React.ComponentProps<"div"> & {
    children: React.ReactNode;
    className?: string;
    component?: JSX.ElementType;
  };

const Typography = ({
  children,
  className,
  variant,
  component,
  ...props
}: TypographyProps) => {
  const Comp = component || "p";
  return (
    <Comp className={cn(typographyVariants({ variant, className }))} {...props}>
      {children}
    </Comp>
  );
};

export default Typography;
