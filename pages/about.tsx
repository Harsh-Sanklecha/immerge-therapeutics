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
      {/* <Socials data={aboutPageData.socials} /> */}
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
