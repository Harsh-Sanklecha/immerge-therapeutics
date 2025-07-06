import Divider from "@/components/divider/Divider";
import Typography from "@/components/ui/typography";
import verityIcon1 from "@/assets/why-verify/verityIcon1.png";
import verityIcon2 from "@/assets/why-verify/verityIcon2.png";
import verityIcon3 from "@/assets/why-verify/verityIcon3.png";
import verityIcon4 from "@/assets/why-verify/verityIcon4.png";
import verityIcon5 from "@/assets/why-verify/verityIcon5.png";
import verityIcon6 from "@/assets/why-verify/verityIcon6.png";
import Card from "@/components/card/Card";
import Image from "next/image";
import { Home } from "@/types/api/pages/Home";
import { splitSentenceByFocusKeyword } from "@/lib/utils/splitSentenceByFocusKeyword";

const icons = [verityIcon1, verityIcon2, verityIcon3, verityIcon4, verityIcon5, verityIcon6];

// const features = [
//   {
//     icon: verityIcon1,
//     title: "Customised treatment plan",
//     description:
//       "Leverage data-driven insights to design customised treatment plans in line with the specific condition of each patient.",
//     alt: "icon",
//   },
//   {
//     icon: verityIcon1,
//     title: "Immersive experience",
//     description:
//       "Leverage data-driven insights to design customised treatment plans in line with the specific condition of each patient.",
//     alt: "icon",
//   },
//   {
//     icon: verityIcon1,
//     title: "Pain management, reimagined",
//     description:
//       "Leverage data-driven insights to design customised treatment plans in line with the specific condition of each patient.",
//     alt: "icon",
//   },
//   {
//     icon: verityIcon1,
//     title: "Beyond boundaries",
//     description:
//       "Leverage data-driven insights to design customised treatment plans in line with the specific condition of each patient.",
//     alt: "icon",
//   },
//   {
//     icon: verityIcon1,
//     title: "Beyond boundaries",
//     description:
//       "Leverage data-driven insights to design customised treatment plans in line with the specific condition of each patient.",
//     alt: "icon",
//   },
//   {
//     icon: verityIcon1,
//     title: "Beyond boundaries",
//     description:
//       "Leverage data-driven insights to design customised treatment plans in line with the specific condition of each patient.",
//     alt: "icon",
//   },
// ];

const InnovativeFeatures = ({
  data,
}: {
  data: Home["innovative_features"];
}) => {
  const { firstWord, lastWord } = splitSentenceByFocusKeyword(
    data.heading,
    data.focus_keyword
  );

  const features = Object.values(data.features).map((item, index) => (
    {
      ...item,
      icon: icons[index],
    }
  ))
  return (
    <>
      <div className="md:max-w-[652px] md:mx-auto mb-8 mt-20 md:mt-0">
        <Typography
          variant="h1"
          component="h2"
          className="md:leading-[50px] leading-[40px] text-[32px] md:text-[40px] w-full  text-center mb-5 md:mb-3"
        >
          {firstWord} <span className="bg-gradient-to-br from-[#0151FE] via-[#3474fe] to-[#3D3D3D] bg-clip-text text-transparent">{data.focus_keyword}</span> {lastWord}
        </Typography>
        <Typography className="md:max-w-[452px] md:mx-auto md:text-xl text-center">
          {data.description}
        </Typography>
      </div>
      <div className="justify-center mb-[50px] md:mb-8 hidden md:flex">
        <Divider />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-x-[31px] gap-y-[24px]">
        {features.map((feature, index) => (
          <Card key={index}>
            <div>
              <Image
                src={feature.icon || verityIcon1}
                alt="icon"
                width={42}
                height={42}
              />
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

export default InnovativeFeatures;
