import icon1 from "@/assets/why-verify/icon1.svg";
import smIcon1 from "@/assets/why-verify/count1.svg";
import hovercardbg from "@/assets/why-verify/cardbg1.svg";
import verityIcon1 from "@/assets/why-verify/verityIcon1.png";

import Image from "next/image";
import Typography from "../ui/typography";
import Video from "../video/Video";
import { useState } from "react";
import Carousel from "../ui/carousel";
import FiveCardsComponent from "../card/FiveCardsComponent";
import BookDemo from "../book-demo/BookDemo";
import { WhyVerity } from "@/types/api/pages/WhyVerity";
import { splitSentenceByFocusKeyword } from "@/lib/utils/splitSentenceByFocusKeyword";
import Pill from "../pill/Pill";
import IframeCarousel from "../ui/IframeCarousel";
import YTPlayer from "../ytPlayer/YTPlayer";

const HeroSection = ({ data }: { data: WhyVerity }) => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const { firstWord, lastWord } = splitSentenceByFocusKeyword(
    data.hero.hero_title,
    data.hero.hero_focus_keyword
  );

  const handleMouseEnter = (index: any) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  const drivenByValues = Object.values(data.driven_by_values.values).map(
    (item) => ({
      icon: icon1,
      alter: "icon",
      title: item.heading,
      description: item.description,
    })
  );

  const beyondDataFeatures = Object.values(
    data.how_vr_is_transforming_lives.features
  ).map((item) => ({ icon: smIcon1, text: item }));

  const verityXrData = Object.values(data.why_verity.features).map(
    (feature) => ({
      icon: verityIcon1,
      title: feature.title,
      description: feature.description,
      alt: "icon",
    })
  );

  // const slides = Object.values(data.success_stories.stories).map((item) => ({
  //   name: item.story_by.name,
  //   role: item.story_by.about,
  //   description: item.story,
  //   source: item.story_by.video,
  // }));

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #FFFFFF 18.53%, #E6FAFF 100%)",
      }}
    >
      <div
        className="w-full min-h-screen  bg-no-repeat "
        style={{
          backgroundPosition: "left 0 top 0 ,right 0 top 0",
        }}
      >
        <div className="pt-[144px] w-[90vw] md:w-[85vw] mx-auto items-center flex flex-col justify-center">
          <div className="flex flex-col md:flex-row w-full gap-[32px]">
            <div className="md:w-1/2">
              <h1 className="text-[40px] md:text-[48px] font-[800] ">
                {firstWord}
                <span className="text-gradient">
                  {data.hero.hero_focus_keyword}
                </span>
              </h1>
              {lastWord}
            </div>
            <div className="md:w-1/2">
              <Typography variant="subp">{data.hero.hero_desc}</Typography>
            </div>
          </div>
          {data.video_type === "file" ? (
            <Video
              autoPlay={true}
              src={data.video || ""}
              className="mt-[104px] relative bottom-[14px] md:bottom-0 md:mt-[50px] "
            />
          ) : (
            <YTPlayer
              autoplay={1}
              className="mt-[104px] relative bottom-[14px] md:bottom-0 md:mt-[50px]  w-full h-[189px] md:h-[547px] rounded-xl md:rounded-3xl object-cover"
              url={data.youtube_link || ""}
            />
          )}
        </div>

        <div
          className="w-full  bg-no-repeat pb-[60px]"
          style={{
            backgroundPosition: "  right 0 top 50%",
          }}
        >
          <div className="w-[90vw] md:w-[85vw] mx-auto items-center flex flex-col justify-center">
            <Typography
              variant="subh"
              className=" items-center mx-auto text-center pt-[82px] max-w-[850px]"
            >
              {data.driven_by_values.heading}
            </Typography>
            <FiveCardsComponent data={drivenByValues} />
          </div>
        </div>

        <div
          className=" pt-[64px] "
          // style={{ boxShadow: "0px 8px 25px 0px rgba(8, 85, 116, 0.12)"}}
        >
          <div className="w-[90vw] md:w-[85vw] mx-auto items-center flex flex-col justify-center">
            <Typography
              variant="subh"
              className="items-center  md:max-w-[600px] text-center leading-[40px] md:leading-[50px]"
            >
              {data.how_vr_is_transforming_lives.heading}
            </Typography>

            <Pill className="md:px-0 mt-10 md:mb-10 w-full md:w-screen ">
              {Object.values(data.how_vr_is_transforming_lives.advantages).map(
                (stat) => (
                  <Pill.Item key={crypto.randomUUID()}>
                    <Pill.Title>{stat.split(" ")[0]}</Pill.Title>
                    <Pill.Description>
                      {stat.substring(stat.indexOf(" ") + 1)}
                    </Pill.Description>
                  </Pill.Item>
                )
              )}
            </Pill>

            <div className="flex flex-wrap gap-[15px] mt-[42px]  w-full justify-center">
              {beyondDataFeatures.map((items, index) => (
                <div
                  key={index}
                  className={`cursor-pointer rounded-[12px] pl-[32px] pr-[4px] pt-[32px]  w-full md:w-[387px] h-[176px] shadow-xl `}
                  style={{
                    background:
                      hoveredIndex === index
                        ? `linear-gradient(to right, rgba(1, 81, 254, 0.6), rgba(153, 236, 255, 0.6))`
                        : "white",
                    //  backgroundPosition:"right 15% top 4% ",
                    transition: "background-color 0.5s ease",
                    boxShadow: "0px 8px 25px 0px rgba(8, 85, 116, 0.12)",
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image src={items.icon} alt="icon" width={32} height={32} />
                  <Typography className="text-[22px] md:text-[22px] font-extrabold text-[#282828] mt-[16px] text-wrap">
                    {items.text}
                  </Typography>
                </div>
              ))}
            </div>

            {/* <div className="pt-[108px] pb-[84px] md:pb-[170px]">
              <Typography variant="subh" className="items-center text-center ">
                {data.why_verity.heading}
              </Typography>
              <Typography className="max-w-[600px] text-center mx-auto pt-[12px] pb-[70px]">
                {data.why_verity.description}
              </Typography>

              <div className="w-full flex flex-wrap gap-x-[31px] gap-y-[24px]  justify-center">
                {verityXrData.map((data, index) => (
                  <div
                    key={index}
                    style={{
                      border: "1px solid rgba(0, 0, 0, 0.12)",
                    }}
                    className="gradient-border px-[31px] py-[38px] flex flex-wrap gap-[17px] rounded-[12px] hover:bg-white cursor-pointer"
                  >
                    <div>
                      <Image
                        src={data.icon}
                        alt={data.alt}
                        width={42}
                        height={42}
                      />
                    </div>
                    <div className="max-w-[467px]">
                      <Typography variant="h4">{data.title}</Typography>
                      <Typography>{data.description}</Typography>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            {/* <Typography className=" text-gradient font-[800] mt-[80px] md:mt-[170px]">
              {data.success_stories.heading}
            </Typography>
            <Typography
              variant="h1"
              className=" text-center text-[24px] md:text-[40px] max-w-[990px]"
            >
              {data.success_stories.subheading}
            </Typography>

            <div className=" mt-[49px] mb-[64px] ]">
              <IframeCarousel slides={slides} />
            </div> */}

            <section className="my-20 w-full pb-[50px]">
              <BookDemo />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
