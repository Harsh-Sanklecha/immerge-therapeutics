import { cn } from "@/lib/utils/cnHelper";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={cn(
        "md:space-y-[100px] min-h-screen space-y-8 bg-gradient-to-b from-[#FFFFFF] to-[#e6faff] relative pb-20",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Container;
