import React from "react";
import Typography from "../ui/typography";
import Carousel from "../ui/carousel";
import { TestimonialsWithVideo } from "@/types/api/common/Testimonial";
import TextCarousels from "./TextCarousels";
import VideoCarouselCaseStudy from "../ui/VideoCarouselCaseStudy";

const Testimonials = ({ data }: { data: TestimonialsWithVideo }) => {
  const slides = Object.values(data.testimonial).map(testimonial => (
    {
      name: testimonial.testimonial_by.name,
      role: testimonial.testimonial_by.about,
      description: testimonial.content,
      source: testimonial.youtube_link,
      video_type: testimonial.video_type
    }
  ));
  return (
    <></>
    // <div className="w-[90vw] md:w-[85vw] mx-auto items-center flex flex-col justify-center pt-[48px] md:pt-[140px]">
    //   <Typography className="text-gradient font-[800]">
    //     {data.heading}
    //   </Typography>
    //   <Typography
    //     variant="h1"
    //     className="text-center text-[24px] md:text-[40px] max-w-[300px]  md:max-w-[625px]"
    //   >
    //     {data.subheading}{" "}
    //   </Typography>

    //   <div className="mt-[49px] mb-[70px]  md:mb-[140px]">
    //     {/* <Carousel slides={slides} /> */}
    //     {/* <TextCarousels slides={slides} /> */}
    //     <VideoCarouselCaseStudy slides={slides} className="" />
    //   </div>
    // </div>
  );
};

export default Testimonials;
