import { createContext, useContext, useState } from "react";

type SidebarMenuCollapsibleProps = {
  children: React.ReactNode;
};

const ToggleContext = createContext({
  isOpen: false,
  handleToggle: () => {},
});

export const useToggle = () => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error(
      "SidebarMenu compound components must be rendered within the SidebarMenu component"
    );
  }
  return context; 
};

const SidebarMenuCollapsible = ({ children }: SidebarMenuCollapsibleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const contextValue = {
    isOpen,
    handleToggle,
  };

  return (
    <ToggleContext.Provider value={contextValue}>
      {children}
    </ToggleContext.Provider>
  );
};

export default SidebarMenuCollapsible;
