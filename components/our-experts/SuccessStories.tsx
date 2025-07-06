import React from "react";
import groupbg from "@/assets/ourExperts/Groupbg.png";
import Typography from "../ui/typography";
import imgCarousel from "@/assets/ourExperts/imgCarousel.png";
import ImageCarousel from "../ui/ImageCarousel";
import { SuccessStories as SuccessStoriesType } from "@/types/api/pages/OurExperts";
import { CaseStudies } from "@/types/api/pages/CaseStudies";

const SuccessStories = ({
  data,
  caseStudies,
}: {
  data: SuccessStoriesType;
  caseStudies: CaseStudies;
}) => {
  const slides = caseStudies?.map((caseStudy) => ({
    description: caseStudy.acf.data.about_the_client,
    source: caseStudy.acf.data.image || imgCarousel.src,
    title: caseStudy.title.rendered,
    id:caseStudy.id
  }));

  // Delete later
  // const slides1 = [
  //   {
  //     description:
  //       "Discover how a sports medicine clinic revamped their approach to athlete recovery using VerityXR. See the full case study for insights into how VR technology accelerated rehabilitation from sports injuries, reduced recovery time, and improved patient compliance.",
  //     source: imgCarousel.src,
  //     title: "Rapid Recovery in Sports Medicine",
  //     // source:""
  //   },
  //   {
  //     description:
  //       "Discover how a sports medicine clinic revamped their approach to athlete recovery using VerityXR. See the full case study for insights into how VR technology accelerated rehabilitation from sports injuries, reduced recovery time, and improved patient compliance.",
  //     source: imgCarousel.src,
  //     title: "Rapid Recovery in Sports Medicine",
  //   },
  //   {
  //     description:
  //       "Discover how a sports medicine clinic revamped their approach to athlete recovery using VerityXR. See the full case study for insights into how VR technology accelerated rehabilitation from sports injuries, reduced recovery time, and improved patient compliance.",
  //     source: imgCarousel.src,
  //     title: "Rapid Recovery in Sports Medicine",
  //   },
  //   {
  //     description:
  //       "Discover how a sports medicine clinic revamped their approach to athlete recovery using VerityXR. See the full case study for insights into how VR technology accelerated rehabilitation from sports injuries, reduced recovery time, and improved patient compliance.",
  //     source: imgCarousel.src,
  //     title: "Rapid Recovery in Sports Medicine",
  //   },
  //   {
  //     description:
  //       "Discover how a sports medicine clinic revamped their approach to athlete recovery using VerityXR. See the full case study for insights into how VR technology accelerated rehabilitation from sports injuries, reduced recovery time, and improved patient compliance.",
  //     source: imgCarousel.src,
  //     title: "Rapid Recovery in Sports Medicine",
  //   },
  // ];

  return (
    <div
      className="relative bg-no-repeat"
      style={{
        backgroundImage: ` url(${groupbg.src})`,
      }}
    >
      <div className="  lg:pt-[60px] w-[90vw] md:w-[85vw] mx-auto items-center ">
        <div className="flex flex-col lg:flex-row justify-between pt-[49px] ">
          <div className="md:w-[431px]">
            <Typography variant="subh" className="pb-[12px]">
              {data.heading}{" "}
            </Typography>
            <Typography className="">{data.description}</Typography>
          </div>

          <div className="z-30 pt-[44px] lg:pt-0 ">
            <ImageCarousel slides={slides}  />
          </div>
        </div>
      </div>

      <div className="lg:h-[792px] lg:w-[792px] rounded-full bg-gradient-radial blur-[100px] absolute top-[256px] -left-[617px] z-10 " />
      <div className="lg:h-[792px] lg:w-[792px] rounded-full bg-gradient-radial blur-[150px] absolute -top-[100px] left-[1320px] z-10" />
    </div>
  );
};

export default SuccessStories;
