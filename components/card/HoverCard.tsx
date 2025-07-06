import { cn } from "@/lib/utils/cnHelper";
import { motion } from "framer-motion";
import { useState } from "react";
import Rectangle from "../ui/Rectangle";

const HoverCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      style={{
        boxShadow: "0px 8px 25px 0px rgba(8, 85, 116, 0.12)",
      }}
      className={cn(
        "rounded-[12px] p-8 space-y-3 bg-white overflow-hidden relative group",
        className
      )}
      animate={{
        background: hovered
          ? "linear-gradient(to right, rgba(153, 236, 255, 0.6), rgba(1, 81, 254, 0.6))"
          : "linear-gradient(to right, #FFFFFF, #FFFFFF)",
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <Rectangle className="absolute bg-[#3FC4D5]/20 top-2 right-8 h-[38px] w-[41px] opacity-0 group-hover:opacity-100 transition-all duration-300" />
      <Rectangle className="absolute bg-[#3FC4D5]/20 top-4 -right-5 h-[38px] w-[41px] opacity-0 group-hover:opacity-100 transition-all duration-300" />
      {children}
    </motion.div>
  );
};

export default HoverCard;
