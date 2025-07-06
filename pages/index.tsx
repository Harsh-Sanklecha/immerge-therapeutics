import BookDemoDetailed from "@/components/book-demo/BookDemoDetailed";
import FAQs from "@/components/home/faqs/FAQs";
import FeaturedCaseStudies from "@/components/home/featuredCaseStudies/FeaturedCaseStudies";
import Features from "@/components/home/features/Features";
import Hero from "@/components/home/Hero";
import InnovativeFeatures from "@/components/home/innovativeFeatures/InnovativeFeatures";
import SetUp from "@/components/home/setUp/SetUp";
import Testimonials from "@/components/home/testimonials/Testimonials";
import TrustedAndRecommended from "@/components/home/TrustedAndRecommended";
import Typography from "@/components/ui/typography";
import { loadData, loadPosts } from "@/lib/api";
import { CaseStudies, CaseStudy } from "@/types/api/pages/CaseStudies";
import { Home as HomeType } from "@/types/api/pages/Home";
import Head from "next/head";
import VideoCarouselCaseStudy from "@/components/ui/VideoCarouselCaseStudy";

export default function Home({
  homePageData,
  post,
}: {
  homePageData: HomeType | null;
  post: CaseStudy;
}) {
  if (homePageData === null)
    return <Typography>Something went wrong, unble to fetch data.</Typography>;
  return (
    <>
      <Head>
        <title> Homepage | Immerge Therapeutics</title>
        <meta property="og:title" content="Homepage | Immerge Therapeutics" />
        <meta name="description" content="Immerge Therapeutics" />

      </Head>
      <section className="mt-16 lg:mt-20">
        <Hero data={homePageData} />
        {/* <div className="absolute bottom-0  left-0 w-full h-3/4 md:shadow-[inset_0px_-25px_32px_-1px_rgba(255,255,255,255.73)]"></div> */}
      </section>
      <section className="mt-[40px] md:mt-[100px] px-[26px]">
        <TrustedAndRecommended
          data={homePageData.trustedAndRec}
          gradient={true}
          gradientColor="white"
        />
      </section>
      <section className=" mt-[90px] md:mt-[85px] ">
        <Features data={homePageData.maximise_your_physiotherapy_impact} />
      </section>
      <section className="mt-[76px] mb-20 md:mt-16 md:mb-[70px]">
        <SetUp data={homePageData.setting_up} />
      </section>
      <section className="px-6 pb-[67px] md:px-[120px] md:py-9">
        <InnovativeFeatures data={homePageData.innovative_features} />
      </section>
      {/* previous section in design */}
      {/* <section className="md:bg-white bg-[url('/grid-2.png')] "> */}
      {/* <FeaturedCaseStudies
          data={homePageData.case_studies}
          caseStudies={post}
        /> */}
      <section className="w-[90vw] md:w-[85vw] mx-auto items-center flex flex-col justify-center pt-[48px] md:pt-[140px]">
        <Typography
          variant="h1"
          className="text-center text-[24px] md:text-[40px] max-w-[300px]  md:max-w-[625px]"
        >
          {homePageData.testimonials_video.subheading}{" "}
        </Typography>
        <div className="mt-[49px] mb-[70px]  md:mb-[140px]">
          <VideoCarouselCaseStudy slides={Object.values(homePageData.testimonials_video.testimonial).map((testimonial: any) => (
            {
              name: testimonial.testimonial_by.name,
              role: testimonial.testimonial_by.about,
              description: testimonial.content,
              source: testimonial.video_type === "youtube" ? testimonial.youtube_link : testimonial.video,
              video_type: testimonial.video_type
            }
          ))} />
        </div>
      </section>
      <section className="px-6 md:px-[120px] pt-20 md:pt-[116px] mb-[64px] md:mb-[160px]">
        <FAQs data={homePageData.faqs} />
      </section>
      <section className="px-6 mb-20 md:px-[120px] md:mb-[140px]">
        <Testimonials data={homePageData.testimonials} />
      </section>
      <section className="mb-[42px] md:mb-[60px]">
        <BookDemoDetailed data={homePageData.loved_and_recommended_by} />
      </section>
    </>
  );
}

export async function getStaticProps() {
  try {
    const result = await loadData("home-page");
    const homePageData: HomeType = result[0].acf;

    const posts: CaseStudies = await loadPosts("case-studies");
    const post = posts.filter(
      (post) => post.acf.data.category === "caseStudies"
    )[0];
    return {
      props: { homePageData, post },
    };
  } catch (error) {
    console.log(error, "error getting data from getstaticProps");
    return {
      props: { homePageData: null, post: null },
    };
  }
}
