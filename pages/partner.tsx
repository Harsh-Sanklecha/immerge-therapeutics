import BookDemo from "@/components/book-demo/BookDemo";
import DrivenByValues from "@/components/drivenByValues/DrivenByValues";
import FAQs from "@/components/home/faqs/FAQs";
import FeaturedCaseStudies from "@/components/home/featuredCaseStudies/FeaturedCaseStudies";
import Features from "@/components/home/features/Features";
import SuccessStories from "@/components/our-experts/SuccessStories";
import Hero from "@/components/partner/Hero";
import { loadData, loadPosts } from "@/lib/api";
import type { Partner } from "@/types/api/pages/Partner";
import icon1 from "@/assets/why-verify/icon1.svg";
import { CaseStudies } from "@/types/api/pages/CaseStudies";
import Head from "next/head";

const Partner = ({ partnerData, posts }: { partnerData: Partner, posts: CaseStudies }) => {
  const drivenByValues = Object.values(partnerData.driven_by_values.values).map(
    (item) => ({
      icon: icon1,
      alter: "icon",
      title: item.heading,
      description: item.description,
    })
  );

  return (
    <>
     <Head>
        <title> Partners | Immerge Therapeutics</title>
        <meta property="og:title" content="Partners | Immerge Therapeutics" />
        <meta name="description" content="Immerge Therapeutics" /> 
        
      </Head>
      <section className="px-6 mb-[84px]  md:px-[120px] md:mb-14">
        <Hero data={partnerData.hero} />
      </section>
      <section className="mb-[84px] md:mb-[120px]">
        <Features data={partnerData.maximise_your_physiotherapy_impact} />
      </section>
      <section className="px-6 md:px-[120px] mb-12 md:mb-20">
        <DrivenByValues
          values={drivenByValues}
          heading={partnerData.driven_by_values.heading}
        />
      </section>
      <section className="mb-20 md:mb-[167px]">
        <SuccessStories caseStudies={posts} data={partnerData.success_stories} />
      </section>
      <section className="px-6 md:px-[120px] mb-[38px] md:mb-16">
        <FAQs data={partnerData.faqs} />
      </section>
      <section className="mb-[42px] md:mb-[50px]">
        <BookDemo />
      </section>
    </>
  );
};

export default Partner;

export async function getStaticProps() {
  try {
    const result = await loadData("partner");
    const partnerData: Partner = result[0].acf;

    const caseStudiesResult: CaseStudies = await loadPosts("case-studies");
    const posts = caseStudiesResult.filter(
      (post) => post.acf.data.category === "caseStudies"
    );

    return {
      props: { partnerData, posts },
    };
  } catch (error) {
    console.log(error, "error getting data from getstaticProps");
    return {
      props: { partnerData: null },
    };
  }
}
