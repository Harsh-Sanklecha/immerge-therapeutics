import BookDemo from "@/components/book-demo/BookDemo";
import FAQs from "@/components/home/faqs/FAQs";
import SuccessStories from "@/components/our-experts/SuccessStories";
import Testimonials from "@/components/our-experts/Testimonials";
import PhysioLanding from "@/components/physiotherapists/PhysioLanding";
import { loadData, loadPosts } from "@/lib/api";
import { CaseStudies } from "@/types/api/pages/CaseStudies";
import { Physiotherapist } from "@/types/api/pages/Physiotherapist";
import Head from "next/head";

const physiotherapists = ({physiotherapistData, posts}: {physiotherapistData: Physiotherapist, posts: CaseStudies}) => {
  return (
    <>
     <Head>
        <title> Physiotherapists | Immerge Therapeutics</title>
        <meta property="og:title" content="Physiotherapists | Immerge Therapeutics" />
        <meta name="description" content="Immerge Therapeutics" /> 
        
      </Head>
    <section
      style={{
        background: "linear-gradient(180deg, #FFFFFF 18.53%, #E6FAFF 100%)",
      }}
      className="pt-[75px] md:pt-[80px] h-full "
      >
      <PhysioLanding data={physiotherapistData} />
      <SuccessStories caseStudies={posts} data={physiotherapistData.success_stories} />
      <section className="px-[20px] md:px-[120px] md:pt-[180px] pt-[90px]">
        <FAQs data={physiotherapistData.faqs} />
      </section>
      <Testimonials data={physiotherapistData.testimonials} />
      <section className="pb-[50px]">
        <BookDemo />
      </section>
    </section>
      </>
  );
};

export default physiotherapists;

export async function getStaticProps() {
  try {
    const result = await loadData("physiotherapists");
    const physiotherapistData: Physiotherapist = result[0].acf;


    const caseStudiesResult: CaseStudies = await loadPosts("case-studies");
    const posts = caseStudiesResult.filter(
      (post) => post.acf.data.category === "caseStudies"
    );

    return {
      props: { physiotherapistData, posts },
    };
  } catch (error) {
    console.log(error, "error getting data from getstaticProps");
    return {
      props: { physiotherapistData: null },
    };
  }
}
