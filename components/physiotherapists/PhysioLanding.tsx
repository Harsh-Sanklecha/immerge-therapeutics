import React from "react";
import Typography from "../ui/typography";
import IconButton from "../button/IconButton";
import Image from "next/image";
import bgimage from "@/assets/physiotherapists/psybg2.png";
import bgimage2 from "@/assets/physiotherapists/psybg1.png";
import new7 from '@/public/new7.png'
import TrustedAndRecommended from "../home/TrustedAndRecommended";
import CTABtn from "../button/CTABtn";
import { Physiotherapist } from "@/types/api/pages/Physiotherapist";
import { splitSentenceByFocusKeyword } from "@/lib/utils/splitSentenceByFocusKeyword";
import new16 from '@/public/new16.png'

const PhysioLanding = ({ data }: { data: Physiotherapist }) => {
  const { firstWord, lastWord } = splitSentenceByFocusKeyword(
    data.beyond_just_traditional_physiotherapy.heading,
    data.beyond_just_traditional_physiotherapy.focus_keyword
  );

  const differenceData = Object.values(
    data.beyond_just_traditional_physiotherapy.points
  ).map(({ heading, description }) => ({
    title: heading,
    description,
  }));

  return (
    <div className="relative pb-[40px] lg:pb-[103px]">
      <div className="min-h-screen w-[90vw] md:w-[85vw] mx-auto items-center flex flex-col justify-center">
        <div className="flex flex-col justify-center">
          <div className="max-w-[797px] mx-auto">
            <Typography
              variant="h1"
              className="text-[32px] md:text-[48px] font-[800] mt-[62px] text-center  mx-auto"
            >
              {data.hero.hero_title}{" "}
            </Typography>
            <Typography
              variant="p"
              className="mt-[16px] lg:mt-[28px] mb-[52px] lg:mb-[58px] text-center "
            >
              {data.hero.hero_desc}
            </Typography>
            <CTABtn className=" w-full mx-auto max-w-[242px]" />
          </div>
          <div className="z-30 mx-auto  mt-[43px] md:-mt-[55px]">
            <Image
              src={new7}
              alt="bg hero"
              width={1084}
              height={528}
              className="rounded-[12px] "
            />
          </div>
        </div>

        <div className="mt-[72px] lg:mt-[91px] w-full">
          <TrustedAndRecommended data={data.trustedAndRec} />
        </div>
        {/*//////////////////////// section 2 ////////////////// */}
        <div className="pt-[67px] lg:pt-[126px] flex flex-col lg:flex-row w-full justify-between lg:gap-[40px] ">
          <div className="lg:max-w-[450px] gap-[39px] items-center flex flex-col justify-center lg:justify-start">
            <Typography variant="subh" className="text-[30px] leading-[38px]">
              {firstWord}{" "}
              <span className="text-gradient">
                {data.beyond_just_traditional_physiotherapy.focus_keyword}{" "}
              </span>
              {lastWord}
            </Typography>

            <Image src={new16} alt="banner image" width={450} />
          </div>

          <div className="lg:max-w-[609px] flex flex-col gap-[40px] mt-[24px] lg:mt-0">
            {differenceData.map((data, index) => (
              <div key={index}>
                <Typography className="font-[600] text-black">
                  {data.title}
                  {" "}
                </Typography>
                <Typography> {data.description}</Typography>
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

export default PhysioLanding;
