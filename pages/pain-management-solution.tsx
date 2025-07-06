import BookDemo from "@/components/book-demo/BookDemo";
import FAQs from "@/components/home/faqs/FAQs";
import LandingSection from "@/components/our-experts/LandingSection";
import SuccessStories from "@/components/our-experts/SuccessStories";
import Testimonials from "@/components/our-experts/Testimonials";
import VideoCarouselCaseStudy from "@/components/ui/VideoCarouselCaseStudy";
import Typography from "@/components/ui/typography";
import { loadData, loadPosts } from "@/lib/api";
import { useAppContext } from "@/lib/context";
import { CaseStudies } from "@/types/api/pages/CaseStudies";
import { OurExperts as OurExpertsType } from "@/types/api/pages/OurExperts";
import Head from "next/head";
import React, { useEffect } from "react";

const OurExperts = ({
  ourExpertsData,
  posts,
}: {
  ourExpertsData: OurExpertsType;
  posts: CaseStudies;
}) => {
  // console.log("DATA", ourExpertsData)
  // const { expertsData, setExpertsData } = useAppContext();

  // useEffect(() => {
  //   if (ourExpertsData && ourExpertsData.length > 0) {
  //     setExpertsData(ourExpertsData[0]);
  //   }
  // }, []);

  // console.log(ourExpertsData, "DATA");

  return (
    <>
      <Head>
        <title>Pain Management Solutions | Immerge Therapeutics</title>
        <meta property="og:title" content="Our Experts | Immerge Therapeutics" />
        <meta name="description" content="Immerge Therapeutics" />
      </Head>
      <section
        style={{
          background: "linear-gradient(180deg, #FFFFFF 18.53%, #E6FAFF 100%)",
        }}
        className="pt-[75px] md:pt-[80px] h-full "
      >
        <LandingSection data={ourExpertsData} />
        <SuccessStories
          data={ourExpertsData.success_stories}
          caseStudies={posts}
        />
        <section className="px-[20px] md:px-[120px] md:pt-[180px] pt-[90px]">
          <FAQs data={ourExpertsData.faqs} />
        </section>
        {/* <Testimonials data={ourExpertsData.testimonials} /> */}
        <section className="w-[90vw] md:w-[85vw] mx-auto items-center flex flex-col justify-center pt-[48px] md:pt-[140px]">
          <Typography
            variant="h1"
            className="text-center text-[24px] md:text-[40px] max-w-[300px]  md:max-w-[625px]"
          >
            {ourExpertsData.testimonials_video.subheading}{" "}
          </Typography>
          <div className="mt-[49px] mb-[70px]  md:mb-[140px]">
            <VideoCarouselCaseStudy
              slides={Object.values(
                ourExpertsData.testimonials_video.testimonial
              ).map((testimonial: any) => ({
                name: testimonial.testimonial_by.name,
                role: testimonial.testimonial_by.about,
                description: testimonial.content,
                source:
                  testimonial.video_type === "youtube"
                    ? testimonial.youtube_link
                    : testimonial.video,
                video_type: testimonial.video_type,
              }))}
            />
          </div>
        </section>
        <section className="pb-[50px]">
          <BookDemo />
        </section>
      </section>
    </>
  );
};

export default OurExperts;

export async function getStaticProps() {
  try {
    const result = await loadData("our-experts");
    const ourExpertsData: OurExpertsType = result[0].acf;

    const caseStudiesResult: CaseStudies = await loadPosts("case-studies");
    const posts = caseStudiesResult.filter(
      (post) => post.acf.data.category === "caseStudies"
    );

    return {
      props: { ourExpertsData, posts },
    };
  } catch (error) {
    console.log(error, "error getting data from getstaticProps");
    return {
      props: { OurExpertsData: null },
    };
  }
}
