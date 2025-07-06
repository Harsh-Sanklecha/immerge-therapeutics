import { cn } from "@/lib/utils/cnHelper";
import { useToggle } from "./SidebarMenuCollapsible";

type SidebarMenuTriggerProps = {
  children: React.ReactNode;
  className?: string;
};

const SidebarMenuTrigger = ({
  children,
  className,
}: SidebarMenuTriggerProps) => {
  const { isOpen, handleToggle } = useToggle();
  return (
    <div
      data-state={isOpen ? "open" : "closed"}
      onClick={handleToggle}
      className={cn("flex gap-2 items-center justify-center", className)}
    >
      {children}
    </div>
  );
};

export default SidebarMenuTrigger;
