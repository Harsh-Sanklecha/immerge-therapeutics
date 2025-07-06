import { Search } from "lucide-react";
import Card from "./Card";
import dummy from "@/assets/blogs/blog-hero-bg.png";
import { useRouter } from "next/router";
import { BlogsPosts } from "@/types/api/pages/BlogsOrCaseStudies";
import { useCallback, useEffect, useState } from "react";

const AllBlogs = ({ blogs }: { blogs: BlogsPosts }) => {
  const router = useRouter();

  const [searchInput, setSearchInput] = useState("");

  const [filteredBlogs, setFilteredBlogs] = useState<BlogsPosts>(blogs);

  const filterBlogs = useCallback(() => {
    const result = blogs.filter((blog) =>
      blog.title.rendered
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes(searchInput.toLowerCase().replace(/\s+/g, ""))
    );
    setFilteredBlogs(result);
  }, [blogs, searchInput]);

  useEffect(() => {
    if (searchInput === "") {
      filterBlogs();
    }
  }, [filterBlogs, searchInput]);

  return (
    <div className="space-y-10 px-4 md:px-[120px]">
      <div className="flex lg:items-center lg:justify-between lg:flex-row flex-col gap-y-3">
        <h1 className="font-bold md:text-[32px] text-[24px] text-[#282828]">
          All Blogs
        </h1>
        <div className="bg-[#F4F4F4] md:w-96 h-12 rounded-[41px] mt-5 pl-8 pr-2 flex items-center justify-between">
          <input
            className="h-12 outline-none border-none md:w-72 w-56 bg-transparent"
            placeholder="Search"
            type="text"
            spellCheck="false"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            onClick={filterBlogs}
            className="h-9 w-9 rounded-full bg-gradient-to-r from-[#0151FE] to-[#A6E77D] grid place-content-center"
          >
            <Search className="text-white h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 md:gap-y-12 gap-y-6">
        {filteredBlogs.map((blog) => (
          <Card
            key={blog.id}
            title={blog.acf.data.type}
            description={blog.title.rendered}
            image={blog.acf.data.image || dummy}
            onClick={() => {
              router.push(`/blogs/${blog.id}`);
            }}
            className=" cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
