import { cn } from "@/lib/utils/cnHelper";
import Typography from "../ui/typography";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const SuccessStoriesCard = ({ className, children }: Props) => {
  return (
    <div
      className={cn(
        "bg-white h-[479px] md:h-auto border gap-8 border-[#FFFFFF14] rounded-xl shadow overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};

const Title = ({ children, className }: Props) => {
  return (
    <Typography
      className={cn("font-bold text-brand_black-100 leading-6 mb-4", className)}
    >
      {children}
    </Typography>
  );
};

SuccessStoriesCard.Title = Title;

const Description = ({ children, className }: Props) => {
  return (
    <Typography className={cn("md:text-base ", className)}>
      {children}
    </Typography>
  );
};

SuccessStoriesCard.Description = Description;

export default SuccessStoriesCard;
