import React from "react";
import BookDemo from "@/components/book-demo/BookDemo";
import DetailsLanding from "@/components/detailsPage/DetailsLandingForCaseStudies";
import { loadPost, loadPosts } from "@/lib/api";
import DetailsTestimonial from "@/components/detailsPage/DetailsTestimonial";
import DetailsFeatures from "@/components/detailsPage/DetailsFeatures";
import { CaseStudiesPosts, CaseStudyRes } from "@/types/api/pages/BlogsOrCaseStudies";
import Head from "next/head";

const CaseId = ({ post }: { post: CaseStudyRes }) => {
  return (
    <>
     <Head>
        <title> Case Study | Immerge Therapeutics</title>
        <meta property="og:title" content="Case Study | Immerge Therapeutics" />
        <meta name="description" content="Immerge Therapeutics" /> 
        
      </Head>
    <div
      style={{
        background: "linear-gradient(180deg, #FFFFFF 18.53%, #E6FAFF 100%)",
      }}
      className="pt-[75px] md:pt-[80px] h-full"
      >
      <section className=" md:px-[120px] px-6">
        {" "}
        <DetailsLanding blog={post} />
      </section>

      <section className="mb-[97px] md:px-[120px] px-6">
        <DetailsTestimonial testimonials={post.acf.data.testimonials} />
      </section>

      <section className="mb-[60px] md:px-[120px] px-6">
        <DetailsFeatures features={post.acf.data.features} />
      </section>

      <section className="pb-[50px]">
        <BookDemo />
      </section>
    </div>
      </>
  );
};

export default CaseId;

export const getStaticProps = async (context: any) => {
  const { params } = context;
  if (!params) {
    throw new Error("Params not defined!");
  }
  const { caseid } = params;
  const post: CaseStudyRes = await loadPost(caseid);
  return {
    props: {
      post,
    },
  };
};

export async function getStaticPaths() {
  const result: CaseStudiesPosts = await loadPosts("case-studies");
  const posts = result.filter(
    (item) => item.acf.data.category === "caseStudies"
  );
  
  return {
    paths: posts?.map((post) => `/case-studies/${post.id}`) || [],
    fallback: false,
  };
}
