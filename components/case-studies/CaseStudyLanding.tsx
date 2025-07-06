import React from "react";
import bgimg from "@/assets/case-study/casegrp1.png";
import Typography from "../ui/typography";
import TrustedAndRecommended from "../home/TrustedAndRecommended";
import SucessStoryCard from "../card/SucessStoryCard";
import dummy from "@/assets/blogs/blog-hero-bg.png";
import { splitSentenceByFocusKeyword } from "@/lib/utils/splitSentenceByFocusKeyword";
import { CaseStudies } from "@/types/api/pages/CaseStudies";

const CaseStudyLanding = ({ data }: { data: CaseStudies }) => {
  const { firstWord, lastWord } = splitSentenceByFocusKeyword(
    data[0].acf.hero.hero_title,
    data[0].acf.hero.hero_focus_keyword
  );
  
  return (
    <div
      className="relative bg-no-repeat"
      style={{
        backgroundImage: ` url(${bgimg.src})`,
        backgroundPosition: "top 0  left 50% ",
      }}
    >
      <div className="h-full w-[90vw] md:w-[85vw] mx-auto items-center flex flex-col z-30">
        <div className="max-w-[260px] md:max-w-[686px] pt-[82px]">
          <Typography
            variant="subh"
            className="md:text-[48px] text-center pb-[10px]"
          >
            {firstWord}{" "}
            <span className="text-gradient">
              {data[0].acf.hero.hero_focus_keyword}
            </span>
            {lastWord}
          </Typography>
          <p className="text-[16px] font-[500] text-[#4F4F4F] text-center max-w-[541px] mx-auto">
            {data[0].acf.hero.hero_desc}
          </p>
        </div>

        <div className="mt-[60px] md:mt-[115px] w-full">
          <TrustedAndRecommended
            data={data[0].acf.trustedAndRec}
            gradient={true}
            gradientColor="white"
          />
        </div>

        {/* <section className="mt-[69px] md:mt-[92px] w-full pb-[80px] md:pb-[88px] flex flex-col gap-[64px]">
          { data.slice(0, 2).map((item, index) => (
            <SucessStoryCard
              key={index}
              imageUrl={item.acf.data.image || dummy.src}
              title={item.title.rendered}
              description={item.acf.data.about_the_client}
              type={item.acf.data.type}
              id={item.id}
            />
          ))}
        </section> */}
      </div>

      <div className="lg:h-[792px] lg:w-[792px] rounded-full bg-gradient-radial blur-[100px] absolute top-[116px] -left-[617px] z-10 " />
      <div className="lg:h-[792px] lg:w-[792px] rounded-full bg-gradient-radial blur-[150px] absolute top-[50px] left-[1202px] z-10" />
    </div>
  );
};

export default CaseStudyLanding;
