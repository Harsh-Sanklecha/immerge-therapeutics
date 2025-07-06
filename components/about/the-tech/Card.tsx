import { cn } from "@/lib/utils/cnHelper";
import { motion } from "framer-motion";

const Card = ({
  title,
  description,
  isActive,
}: {
  title: string;
  description: string;
  isActive: boolean;
}) => {
  return (
    <motion.div
      className={cn(
        "z-30 rounded-[12px] border-[#3FC4D5] border-[0.5px] p-[24px] text-brand_gray-400 transition-all relative"
      )}
      animate={{
        background: isActive
          ? "linear-gradient(to bottom, rgba(153, 236, 255, 0.6), rgba(1, 81, 254, 0.6))"
          : "linear-gradient(to bottom, #EAFCFF, #FFFFFF)",
      }}
      transition={{
        duration: 1.5,
      }}
    >
      <h3 className="text-[25px] leading-[31.5px] font-bold mb-3">{title}</h3>
      <p className="text-[16px] text-[#6D6D6D]">{description}</p>
    </motion.div>
  );
};

export default Card;
