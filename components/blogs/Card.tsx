import { cn } from "@/lib/utils/cnHelper";
import Image, { StaticImageData } from "next/image";
import { ComponentProps } from "react";

const Card = ({
  image,
  title,
  description,
  className,
  ...props
}: {
  image: string | StaticImageData;
  title: string;
  description: string;
  className?: string;
} & ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className={cn(
        "md:space-y-3 space-y-2 max-w-[377px]",
        className
      )}
    >
      <div className="relative h-[252px]  rounded-[16px] overflow-hidden">
        <Image src={image} alt="#" fill />
      </div>
      <h4 className="text-[#3FC4D5] font-bold uppercase">{title}</h4>
      <p className="font-medium text-[20px] text-brand_gray-400">
        {description}
      </p>
    </div>
  );
};

export default Card;
