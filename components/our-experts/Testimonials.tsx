import React, { useEffect, useState } from "react";
import Typography from "../ui/typography";
import { TestimonialsWithVideo } from "@/types/api/common/Testimonial";
import { loadData } from "@/lib/api";
import { Home } from "@/types/api/pages/Home";
import { default as HomeTestimonials } from "@/components/home/testimonials/Testimonials";


const Testimonials = ({ data }: { data: TestimonialsWithVideo }) => {
  const [homePageData, setHomePageData] = useState<Home>({} as any);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await loadData("home-page");
        setHomePageData(result[0].acf);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

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
    <div className="w-[90vw] md:w-[85vw] mx-auto items-center flex flex-col justify-center pt-[48px] md:pt-[140px]">
      {/* <Typography className="text-gradient font-[800]">
        {data.heading}
      </Typography>
      <Typography
        variant="h1"
        className="text-center text-[24px] md:text-[40px] max-w-[300px]  md:max-w-[625px]"
      >
        {data.subheading}{" "}
      </Typography> */}

      <div className="mt-[49px] mb-[70px]  md:mb-[140px]">
        { homePageData?.testimonials &&
        <HomeTestimonials data={homePageData.testimonials} />
        }
      </div>
    </div>
  );
};

export default Testimonials;
