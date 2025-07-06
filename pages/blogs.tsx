import AllBlogs from "@/components/blogs/AllBlogs";
import Hero from "@/components/blogs/Hero";
import Container from "@/components/layout/Container";
import { loadPosts } from "@/lib/api";
import { BlogsPosts } from "@/types/api/pages/BlogsOrCaseStudies";
import Head from "next/head";

const BlogsPage = ({ blogsPageData }: { blogsPageData: BlogsPosts }) => {
  return (
    <>
     <Head>
        <title> Blogs | Immerge Therapeutics</title>
        <meta property="og:title" content="Blogs | Immerge Therapeutics" />
        <meta name="description" content="Immerge Therapeutics" /> 
        
      </Head>
    <Container className="space-y-[72px]">
      <Hero />
      <AllBlogs blogs={blogsPageData} />
    </Container>
    </>
  );
};

export default BlogsPage;

export async function getStaticProps() {
  try {
    const result: BlogsPosts = await loadPosts("blog");
    const blogsPageData = result.filter(
      (post) => post.acf.data.category === "blog"
    );
    return {
      props: { blogsPageData },
    };
  } catch (error) {
    console.log(error, "error getting data from getstaticProps");
    return {
      props: { blogsPageData: null },
    };
  }
}
