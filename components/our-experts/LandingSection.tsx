import React from "react";
import Typography from "../ui/typography";
import IconButton from "../button/IconButton";
import Image from "next/image";
import bgimage from "@/assets/ourExperts/exbg.png";
import bgimage2 from "@/assets/ourExperts/exbg2.png";
import bg3 from '@/assets/ourExperts/new5.png';
import bg4 from '@/assets/ourExperts/new6.png'
import TrustedAndRecommended from "../home/TrustedAndRecommended";
import { useAppContext } from "@/lib/context";
import "animate.css";
import SlideAnimationWrapper from "../framer-motion/RevealonScrollWrapper";
import { OurExperts } from "@/types/api/pages/OurExperts";
import { splitSentenceByFocusKeyword } from "@/lib/utils/splitSentenceByFocusKeyword";
import CTABtn from "../button/CTABtn";

const LandingSection = ({ data }: { data: OurExperts }) => {
  // const { expertsData, setExpertsData } = useAppContext();

  // const { hero_title, hero_description } = expertsData?.acf;

  // console.log("exp:",expertsData);
  // test

  const { firstWord, lastWord } = splitSentenceByFocusKeyword(
    data.hero.hero_title,
    data.hero.hero_focus_keyword
  );

  const { firstWord: firstWordForDiff, lastWord: lastWordForDiff } =
    splitSentenceByFocusKeyword(
      data.how_verityxr_makes_a_difference.heading,
      data.how_verityxr_makes_a_difference.focus_keyword
    );

  const differenceData = Object.values(
    data.how_verityxr_makes_a_difference.points
  );

  return (
    <div className="relative pb-[40px] lg:pb-[103px]">
      <div className="min-h-screen  lg:pt-[60px] w-[90vw] md:w-[85vw] mx-auto items-center flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row justify-between gap-[52px] lg:gap-0 overflow-x-auto hide-scrollbar">
          <div className="w-full mx-auto lg:mx-0 lg:w-1/2  animate__animated animate__fadeInUp">
            <Typography
              variant="h1"
              className="text-[38px] md:text-[48px] font-[800] mt-[62px] text-center lg:text-start"
            >
              {firstWord}{" "}
              <span className="text-gradient">
                {data.hero.hero_focus_keyword}
              </span>
            </Typography>
            {lastWord}
            <Typography
              variant="p"
              className="mt-[16px] lg:mt-[28px] mb-[52px] lg:mb-[58px] text-center lg:text-start"
            >
              {data.hero.hero_desc}
            </Typography>
            {/* <IconButton className=" w-full mx-auto lg:mx-0 max-w-[242px]">
              Book a Demo
            </IconButton> */}
            <CTABtn className=" w-full mx-auto lg:mx-0 max-w-[242px]" />
          </div>

          <div className="z-30 mx-auto lg:mx-0 animate__animated animate__fadeInRight">
            <Image
              src={bg3}
              alt="bg hero"
              width={471}
              height={431}
              className="rounded-[12px] "
            />
          </div>
        </div>

        <div className="mt-[91px] w-full animate__animated animate__fadeInUp">
          <TrustedAndRecommended data={data.trustedAndRec} />
        </div>
        {/*//////////////////////// section 2 ////////////////// */}
        <div className="pt-[70px] md:pt-[126px] flex flex-col lg:flex-row w-full justify-between lg:gap-[40px] ">
          <SlideAnimationWrapper
            direction="down"
            className=" lg:max-w-[450px] items-center flex flex-col justify-center lg:justify-start"
          >
            <Typography variant="subh" className="text-center lg:text-start">
              {firstWordForDiff}
              <span className="text-gradient">
                {data.how_verityxr_makes_a_difference.focus_keyword}
              </span>
              {lastWordForDiff}
            </Typography>
            <Typography className="mt-[16px] mb-[48px] text-center lg:text-start">
              {data.how_verityxr_makes_a_difference.description}
            </Typography>

            <Image src={bg4} alt="banner image" width={450} />
          </SlideAnimationWrapper>

          <div className="lg:max-w-[609px] flex flex-col gap-[40px] mt-[24px] lg:mt-0">
            {differenceData.map((data, index) => (
              <div key={index}>
                <Typography className="font-[600] text-black">
                  {data.heading}:
                </Typography>
                <Typography>
                  {" "}
                  <span>{data.description}</span>
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:h-[792px] lg:w-[792px] rounded-full bg-gradient-radial blur-[100px] absolute top-[116px] -left-[617px] z-10 " />
      <div className="lg:h-[792px] lg:w-[792px] rounded-full bg-gradient-radial blur-[150px] absolute top-[50px] left-[1202px] z-10" />
    </div>
  );
};

export default LandingSection;
