import React from "react";
import { useRouter } from "next/router";
import BookDemo from "@/components/book-demo/BookDemo";
import { loadPost, loadPosts } from "@/lib/api";
import DetailsLandingForBlogs from "@/components/detailsPage/DetailsLandingForBlogs";
import { BlogRes, BlogsPosts } from "@/types/api/pages/BlogsOrCaseStudies";

const BlogId = ({blog}: {blog: BlogRes}) => {
  const router = useRouter();
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #FFFFFF 18.53%, #E6FAFF 100%)",
      }}
      className="pt-[75px] md:pt-[80px] h-full "
    >
      <DetailsLandingForBlogs blog={blog} />

      <section className="pb-[50px]">
        <BookDemo />
      </section>
    </section>
  );
};

export default BlogId;

export const getStaticProps = async (context: any) => {
  const { params } = context;
  if (!params) {
    throw new Error("Params not defined!");
  }
  const { blogid } = params;
  const blog: BlogsPosts = await loadPost(blogid);
  return {
    props: {
      blog
    },
  };
};

export async function getStaticPaths() {
  const blogs: BlogsPosts = await loadPosts("blog");
  return {
    paths: blogs?.map((blog) => `/blogs/${blog.id}`) || [],
    fallback: false,
  };
}
