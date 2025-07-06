import Typography from "@/components/ui/typography";
import { UserRound } from "lucide-react";
import Image, { StaticImageData } from "next/image";

const Card = ({
  about,
  name,
  degree,
  designation,
  photo,
}: {
  about: string;
  name: string;
  degree: string;
  designation: string;
  photo: string | false;
}) => {
  return (
    <div
      style={{
        boxShadow: "0px 8px 25px 0px rgba(8, 85, 116, 0.12)",
      }}
      className="h-full rounded-[20px] bg-white flex md:flex-row flex-col gap-y-3 overflow-hidden relative z-20"
    >
      <div className="md:h-[266px] h-[348px] md:w-[40%] w-full relative items-center flex justify-center bg-secondary-gradient">
        {photo ? (
          <div className="rounded-full">
            <Image
              // fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              width={340}
              height={348}
              src={photo}
              alt={name}
              className="md:hidden h-[340px] rounded-full"
            />
            <Image
              style={{ objectFit: "cover", objectPosition: "center" }}
              width={223}
              height={266}
              src={photo}
              alt={name}
              className="hidden  md:flex  h-[266px] w-[293px] rounded-full"
            />
          </div>
        ) : (
          <UserRound className="text-brand_gray-200 h-full w-full" />
        )}
      </div>
      <div className="flex-1 h-full p-4">
        <Typography className="md:text-[16px] mb-6">{about}</Typography>
        <div className="flex flex-col text-start  gap-3">
          <span className="text-[#282828] text-[18px] font-bold">{name}</span>
          <p className="text-[#898989] text-sm">{designation}</p>
        </div>
        <span className="text-[#898989] text-[12px] mt-1">{degree}</span>
      </div>
    </div>
  );
};

export default Card;
