import Hero from "@/components/about/Hero";
import Physiotherapy from "@/components/about/Physiotherapy";
import TeamMembers from "@/components/about/team-members/TeamMembers";
import TheTech from "@/components/about/the-tech/TheTech";
import BookDemo from "@/components/book-demo/BookDemo";
import Container from "@/components/layout/Container";
import Typography from "@/components/ui/typography";
import { loadData } from "@/lib/api";
import { About } from "@/types/api/pages/About";
import Head from "next/head";
import Image from "next/image";
import StartupIndiaCertificate from "@/public/startup-india-certificate.png";

const AboutPage = ({ aboutPageData }: { aboutPageData: About | null }) => {
  if (aboutPageData === null)
    return <Typography>Something went wrong, unble to fetch data.</Typography>;

  return (
    <>
     <Head>
        <title> About Us | Immerge Therapeutics</title>
        <meta property="og:title" content="About Us | Immerge Therapeutics" />
        <meta name="description" content="Immerge Therapeutics" /> 
        
      </Head>
    <Container>
      <Hero data={aboutPageData} />
      <TheTech data={aboutPageData} />
      <Physiotherapy data={aboutPageData.sessions} />
      <TeamMembers data={aboutPageData.our_experts} />
      <div className="p-3 md:p-8">
      <Typography
        variant="h1"
        component="h1"
        className="md:text-[40px] md:leading-[50.4px] text-center mb-10 text-[28px]"
      >
        Recognized by
        <br className="hidden lg:block" />
        <span className="bg-gradient-to-br from-[#0151FE] via-[#3474fe] to-[#3D3D3D] bg-clip-text text-transparent">
          Startup India
        </span>
      </Typography>
      <Image
        src={StartupIndiaCertificate}
        alt={"Startup India Certificate"}
        className="h-auto max-h-[800px] w-full object-contain mx-auto"
        />
        </div>
      <BookDemo />
    </Container>
    </>
  );
};

export default AboutPage;

export async function getStaticProps() {
  try {
    const result = await loadData("about");
    const aboutPageData: About = result[0].acf;
    return {
      props: { aboutPageData },
    };
  } catch (error) {
    console.log(error, "error getting data from getstaticProps");
    return {
      props: { aboutPageData: null },
    };
  }
}
