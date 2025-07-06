import { UserRound } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IconContext, IconType } from "react-icons";

const Card = ({
  image,
  icon,
  link,
}: {
  image: string | false;
  icon: React.ReactNode;
  link: string;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // to avoid hydration error
  if (!mounted) return null;
  return (
    <Link href={link}>
      <div
        style={{
          boxShadow: "0px 8px 25px 0px rgba(8, 85, 116, 0.12)",
        }}
        className="rounded-[20px] p-[8px] bg-white"
      >
        <div className="md:h-[279px] h-[160px] mb-3 relative rounded-[12px] overflow-hidden">
          {image === false ? (
            <UserRound className="text-brand_gray-200 h-full w-full" />
          ) : (
            <Image src={image} alt="" fill />
          )}
        </div>
        <div className="flex items-center md:gap-2 gap-1 justify-center">
          <p className="bg-gradient-to-br from-[#A4E780] to-[#0151FE] bg-clip-text text-transparent md:text-[20px] text-[15px] font-bold">
            Visit
          </p>
          <svg width="23" height="23">
            <defs>
              <linearGradient id="myGradient" gradientTransform="rotate(90)">
                <stop offset="5%" stopColor="#A4E780" />
                <stop offset="95%" stopColor="#0151FE" />
              </linearGradient>
            </defs>

            <IconContext.Provider
              value={{ attr: { fill: "url('#myGradient')" } }}
            >
              {icon}
            </IconContext.Provider>
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default Card;
