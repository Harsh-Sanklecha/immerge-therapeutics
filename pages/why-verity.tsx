import Typography from "@/components/ui/typography";
import HeroSection from "@/components/why-verify/HeroSection";
import { loadData } from "@/lib/api";
import { WhyVerity } from "@/types/api/pages/WhyVerity";
import Head from "next/head";

const WhyVerify = ({
  whyVerityPageData,
}: {
  whyVerityPageData: WhyVerity | null;
}) => {
  if (whyVerityPageData === null)
    return <Typography>Something went wrong, unable to fetch data.</Typography>;

  return (
    <>
     <Head>
        <title> Why Immerge Therapeutics</title>
        <meta property="og:title" content="Why Immerge Therapeutics" />
        <meta name="description" content="Immerge Therapeutics" /> 
        
      </Head>
    <div>
      <HeroSection data={whyVerityPageData} />
    </div>
    </>
  );
};

export default WhyVerify;

export async function getStaticProps() {
  try {
    const result = await loadData("why-verity");
    const whyVerityPageData: WhyVerity = result[0].acf;
    return {
      props: { whyVerityPageData },
    };
  } catch (error) {
    console.log(error, "error getting data from getstaticProps");
    return {
      props: { whyVerityPageData: null },
    };
  }
}
