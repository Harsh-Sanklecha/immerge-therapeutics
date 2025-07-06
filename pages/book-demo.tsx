import BookDemo from "@/components/book-demo/BookDemo";
import BookDemoLanding from "@/components/bookDemoPage/BookDemoLanding";
import DiveDeeper from "@/components/bookDemoPage/DiveDeeper";
import Testimonials from "@/components/our-experts/Testimonials";
import { loadData, loadPosts } from "@/lib/api";
import { BookDemo as BookDemoType } from "@/types/api/pages/BookDemo";
import { CaseStudies } from "@/types/api/pages/CaseStudies";
import Head from "next/head";

const BookDemoPage = ({
  bookDemoPageData,
  posts
}: {
  bookDemoPageData: BookDemoType;
  posts: CaseStudies
}) => {
  return (
    <>
     <Head>
        <title> Book a Demo | Immerge Therapeutics</title>
        <meta property="og:title" content="Book a Demo | Immerge Therapeutics" />
        <meta name="description" content="Immerge Therapeutics" /> 
        
      </Head>
    <section
      style={{
        background: "linear-gradient(180deg, #FFFFFF 18.53%, #E6FAFF 100%)",
      }}
      className="pt-[75px] md:pt-[80px] h-full "
      >
      <BookDemoLanding caseStudies={posts} data={bookDemoPageData} />
      <Testimonials data={bookDemoPageData.testimonials} />
      <DiveDeeper />
      <section className="pb-[50px]">
        <BookDemo />
      </section>
    </section>
      </>
  );
};

export default BookDemoPage;

export async function getStaticProps() {
  try {
    const result = await loadData("book-demo");
    const bookDemoPageData: BookDemoType = result[0].acf;


    const caseStudiesResult: CaseStudies = await loadPosts("case-studies");
    const posts = caseStudiesResult.filter(
      (post) => post.acf.data.category === "caseStudies"
    );


    return {
      props: { bookDemoPageData, posts },
    };
  } catch (error) {
    console.log(error, "error getting data from getstaticProps");
    return {
      props: { bookDemoPageData: null },
    };
  }
}
