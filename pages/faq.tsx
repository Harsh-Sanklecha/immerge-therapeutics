import BookDemo from "@/components/book-demo/BookDemo";
import FAQs from "@/components/home/faqs/FAQs";
import Typography from "@/components/ui/typography";
import { loadData } from "@/lib/api";
import { Home } from "@/types/api/pages/Home";
import Head from "next/head";

const faq = ({ faqPageData }: { faqPageData: Home["faqs"] | null }) => {
  if (faqPageData === null)
    return <Typography>Something went wrong, unble to fetch data.</Typography>;

  return (
    <>
     <Head>
        <title> FAQ | Immerge Therapeutics</title>
        <meta property="og:title" content="FAQ | Immerge Therapeutics" />
        <meta name="description" content="Immerge Therapeutics" /> 
        
      </Head>
    <section
      style={{
        background: "linear-gradient(180deg, #FFFFFF 18.53%, #E6FAFF 100%)",
      }}
      className="relative pt-[75px] md:pt-[80px] h-full  "
      >
      <section className="px-[20px] md:px-[120px] md:pt-[52px] pt-[45px] z-30">
        <FAQs data={faqPageData} />
      </section>

      <section className="pb-[50px] pt-[35px] md:pt-[80px]">
        <BookDemo />
      </section>

      <div className="lg:h-[792px] lg:w-[792px] rounded-full bg-gradient-radial blur-[100px] absolute top-[116px] -left-[657px]  " />
      <div className="lg:h-[792px] lg:w-[792px] rounded-full bg-gradient-radial blur-[150px] absolute top-[50px] left-[1402px]  " />
    </section>
      </>
  );
};

export default faq;

export async function getStaticProps() {
  try {
    const result = await loadData("faq");
    const faqPageData: Home["faqs"] = result[0].acf.faqs;
    return {
      props: { faqPageData },
    };
  } catch (error) {
    console.log(error, "error getting data from getstaticProps");
    return {
      props: { faqPageData: null },
    };
  }
}
