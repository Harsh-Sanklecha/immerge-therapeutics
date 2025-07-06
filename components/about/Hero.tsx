import Image from "next/image";
import Typography from "../ui/typography";
import hero from "@/assets/about/hero.png";
import Rectangle from "../ui/Rectangle";
import bg from "@/assets/hexagon-bg.svg";
import { Separator } from "../ui/separator";
import { About } from "@/types/api/pages/About";
import { Timeline } from "@/types/api/common/Timeline";
import Pill from "../pill/Pill";

const contents = [
  {
    year: 2021,
    description: "Immerge Therapeutics was founded",
  },
  {
    year: 2022,
    description: "Product released to rave user reviews",
  },
  {
    year: 2023,
    description: "Completed 10,000+ customers",
  },
];

const getTimelines = (data: About) => {
  let timeLines = [];
  let property: keyof typeof data;
  for (property in data) {
    if (property.startsWith("timeline")) {
      timeLines.push(data[property]);
    }
  }
  return timeLines as Timeline[];
};

const Hero = ({ data }: { data: About }) => {
  const timeLines = getTimelines(data);
  return (
    <div className="px-6 md:pt-28 pt-20 md:px-[120px] bg-gradient-to-b to-white from-[#EAF0F0]">
      <div className="mx-auto flex lg:flex-row flex-col gap-y-4">
        <div className="lg:w-[50%] w-full flex flex-col justify-center lg:h-[70vh] relative">
          <Rectangle className="absolute -top-12 left-96 md:block hidden" />
          <Typography
            variant="h1"
            component="h1"
            className="md:text-[48px] md:leading-[60.48px] text-[28px] relative"
          >
            <Rectangle className="absolute -top-11 -left-11 md:block hidden" />
            {data.hero.hero_title}
            <span className="bg-gradient-to-br from-[#0151FE] via-[#3474fe] to-[#3D3D3D] bg-clip-text text-transparent">
              &nbsp; {data.hero.hero_focus_keyword}
            </span>
          </Typography>
          <Typography className="text-brand_gray-400 md:text-[16px] mt-4 md:leading-[24px] hidden lg:block lg:w-[40vw]">
            {data.hero.hero_desc}
          </Typography>
        </div>
        <div className="flex-1 relative">
          <Rectangle className="absolute top-0 right-20 md:block hidden" />
          <Image
            className="relative z-20 h-[293px] w-[288px] md:h-[520px] md:w-[592px] mx-auto"
            src={hero}
            alt="#"
          />
          <Rectangle className="absolute bottom-0 left-0 md:block hidden" />
        </div>
        <Typography className="text-brand_gray-400 mt-4 text-base lg:hidden">
          {data.hero.hero_desc}
        </Typography>
      </div>

      <div className="h-[234px] relative mt-10 lg:grid place-content-center hidden">
        <Image src={bg} alt="bg" fill className="absolute top-0 left-0" />
        <div className="flex items-start justify-between z-10 gap-x-20">
          {timeLines.map((content, ind) => (
            <div key={ind}>
              <div className="space-y-2 text-center" key={ind}>
                <h4 className="text-brand_gray-400 font-bold text-[39px]">
                  {new Date(content.year).getFullYear() || "N/P"}
                </h4>
                <p className="text-[20px] text-[#898989] w-52">
                  {content.description}
                </p>
              </div>
              <Separator className="last:hidden" orientation="vertical" />
            </div>
          ))}
        </div>
      </div>
      <div className="lg:hidden">
        <Pill className="mt-[52px] px-2.5 md:px-0 md:mt-[130px]" gridClassName="grid-cols-1 text-center" lineClassName="md:w-0 lg:w-[95px]">
          {timeLines.map((stat) => (
            <Pill.Item key={crypto.randomUUID()} className="w-full max-w-none">
              <Pill.Title>{new Date(stat.year).getFullYear()}</Pill.Title>
              <Pill.Description>{stat.description}</Pill.Description>
            </Pill.Item>
          ))}
        </Pill>
      </div>
    </div>
  );
};

export default Hero;
