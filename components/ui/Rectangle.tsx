import { cn } from "@/lib/utils/cnHelper";

const Rectangle = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn("w-[98px] h-[91px] bg-[#00D0FE] opacity-[13%]", className)}
    />
  );
};

export default Rectangle;
