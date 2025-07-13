import Marquee from "react-fast-marquee";
import Typography from "../ui/typography";
import Image from "next/image";
import { Home } from "@/types/api/pages/Home";

type TrustedProps = {
  data: Home["trustedAndRec"];
  gradient?: boolean;
  gradientColor?: string;
};
const TrustedAndRecommended: React.FC<TrustedProps> = ({
  data,
  gradient,
  gradientColor,
}) => {
  const partners = Object.values(data.partners);
  return (
    <>
      <Typography className="text-brand_gray-100 md:text-lg mb-[40px] text-center md:mb-[55px]">
        {data.heading}{" "}
      </Typography>
      <Marquee
        gradient={gradient}
        gradientColor={gradientColor}
        gradientWidth={100}
        autoFill={true}
        direction="right"
        pauseOnHover
      >
        {partners.map(
          ({ image }, index) =>
            image && (
              <div key={index} className="flex h-full items-center mr-[50px]">
                {
                  <Image
                    src={image}
                    alt="company logo"
                    // objectFit="cover"
                    // style={{objectFit:"cover"}}
                    width={170}
                    height={35}
                    className=" max-h-[70px] max-w-[248px] items-center object-contain"
                  />
                }
              </div>
            )
        )}
      </Marquee>
    </>
  );
};

export default TrustedAndRecommended;
