import BookDemo from "@/components/book-demo/BookDemo";
import CaseStudyLanding from "@/components/case-studies/CaseStudyLanding";
import ContinueReading from "@/components/case-studies/ContinueReading";
import Testimonials from "@/components/our-experts/Testimonials";
import Typography from "@/components/ui/typography";
import { loadPosts } from "@/lib/api";
import { SuccessStories } from "@/types/api/common/SuccessStories";
import {
  TestimonialWithVideo,
  TestimonialsWithVideo,
} from "@/types/api/common/Testimonial";
import { CaseStudies } from "@/types/api/pages/CaseStudies";
import { WhyVerity } from "@/types/api/pages/WhyVerity";
import Head from "next/head";
import React from "react";

const caseStudies = ({ posts }: { posts: CaseStudies }) => {
  if (posts === null)
    return <Typography>Something went wrong, unble to fetch data.</Typography>;
  return (
    <>
     <Head>
        <title> Case Studies | Immerge Therapeutics</title>
        <meta property="og:title" content="Case Studies | Immerge Therapeutics" />
        <meta name="description" content="Immerge Therapeutics" /> 
        
      </Head>
    <section
      style={{
        background: "linear-gradient(180deg, #FFFFFF 18.53%, #E6FAFF 100%)",
      }}
      className="pt-[75px] md:pt-[80px] h-full "
      >
      <CaseStudyLanding data={posts} />
      <ContinueReading  data={posts} />
      {/* <Testimonials data={posts[0].acf.testimonials} /> */}
      <section className="pb-[50px] my-10">
        <BookDemo />
      </section>
    </section>
      </>
  );
};

export default caseStudies;

export async function getStaticProps() {
  try {
    const result: CaseStudies = await loadPosts("case-studies");
    const posts = result.filter(
      (post) => post.acf.data.category === "caseStudies"
    );
    return {
      props: { posts },
    };
  } catch (error) {
    console.log(error, "error getting data from getstaticProps");
    return {
      props: { posts: null },
    };
  }
}
