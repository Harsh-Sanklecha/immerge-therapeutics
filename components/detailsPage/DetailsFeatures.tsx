import Image from "next/image";
import Card from "../card/Card";
import verityIcon1 from "@/assets/why-verify/verityIcon1.png";
import Typography from "../ui/typography";
import { Features } from "@/types/api/pages/BlogsOrCaseStudies";

const DetailsFeatures = ({ features }: { features: Features }) => {
  return (
    <>
      <Typography
        variant={"subh"}
        className=" text-[24px] md:text-[32px] mx-auto mb-[53px] text-center md:w-[70%]  "
      >
        {features.heading}
      </Typography>
      <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-x-[31px] gap-y-[24px]">
        {Object.values(features.features).map((feature, index) => (
          <Card key={index}>
            <div>
              <Image src={verityIcon1} alt="icon" width={42} height={42} />
            </div>
            <div className="max-w-[467px]">
              <Typography
                variant="h4"
                className="text-2xl md:text-[28px] mb-[17px]"
              >
                {feature.feature}
              </Typography>
              <Typography>{feature.description}</Typography>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default DetailsFeatures;
