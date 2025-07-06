import { loadPosts } from "@/lib/api";
import { BlogsPosts } from "@/types/api/pages/BlogsOrCaseStudies";
import { Feed } from "feed";

// To remove html tags coming on the response
function removeHTMLTags(html: string) {
  return html.replace(/<[^>]*>/g, "");
}

const generateRssFeed = async (posts: BlogsPosts) => {
  const feed = new Feed({
    title: "Immerge Therapeutics",
    description:
      "Immerge Therapeutics offers extended reality solutions that make physiotherapy sessions easier and more effective through interactive VR-driven tools.",
    id: process.env.NEXT_PUBLIC_WEB_URL || "http://localhost:4200",
    link: process.env.NEXT_PUBLIC_WEB_URL,
    language: "en",
    image: `${process.env.NEXT_PUBLIC_WEB_URL}/favicon.ico`,
    favicon: `${process.env.NEXT_PUBLIC_WEB_URL}/favicon.ico`,
    author: {
      name: "Immerge Therapeutics",
      email: "john@example.com",
      link: `${process.env.NEXT_PUBLIC_WEB_URL}/about`,
    },
    copyright: "Immerge Therapeutics",
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.title.rendered,
      id: post.id,
      link: `${process.env.NEXT_PUBLIC_WEB_URL}/blogs/${post.id}`,
      description: removeHTMLTags(post.excerpt.rendered),
      date: new Date(post.date),
    });
  });

  return feed.rss2();
};

const Rss = () => {};

export async function getServerSideProps({ res }: { res: any }) {
  const result: BlogsPosts = await loadPosts("blog");
  const posts = result.filter(
    (post) => post.acf.data.category === "blog" && post.status === "publish"
  );
  //   const posts = [
  //     {
  //       title: "Post One",
  //       description: "This is the first post",
  //       url: "http://localhost:3000/posts/1",
  //       date: new Date(),
  //     },
  //     {
  //       title: "Post Two",
  //       description: "This is the second post",
  //       url: "http://localhost:3000/posts/2",
  //       date: new Date(),
  //     },
  //     {
  //       title: "Post Three",
  //       description: "This is the third post",
  //       url: "http://localhost:3000/posts/3",
  //       date: new Date(),
  //     },
  //   ];

  const rss = await generateRssFeed(posts);

  res.setHeader("Content-Type", "text/xml");
  res.write(rss);
  res.end();

  return { props: {} };
}

export default Rss;
