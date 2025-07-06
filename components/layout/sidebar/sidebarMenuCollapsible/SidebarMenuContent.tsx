import { cn } from "@/lib/utils/cnHelper";
import { useToggle } from "./SidebarMenuCollapsible";

type SidebarMenuContentProps = {
  children: React.ReactNode;
};

const SidebarMenuContent = ({ children }: SidebarMenuContentProps) => {
  const { isOpen } = useToggle();
  return (
    <div
      className={cn(
        "flex flex-col gap-5 items-center -mt-2",
        !isOpen && "hidden"
      )}
    >
      {children}
    </div>
  );
};

export default SidebarMenuContent;
