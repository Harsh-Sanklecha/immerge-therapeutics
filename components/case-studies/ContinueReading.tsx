import { useCallback, useState ,KeyboardEvent } from "react";
import Card from "../blogs/Card";
import dummy from "@/assets/blogs/blog-hero-bg.png";
import React from "react";
import { Search } from "lucide-react";
import { CaseStudies } from "@/types/api/pages/CaseStudies";
import Link from "next/link";

type BlogData = {
  //   id?: number;
  title: string;
  content: string;
  image: string;
};

// const data = [
//   {
//     title: "Innovation",
//     content: "Immersive Healing: How VR Transforms Physiotherapy",
//     image: dummy.src,
//   },
//   {
//     title: "Innovation",
//     content: "Immersive Healing: How VR Transforms Physiotherapy",
//     image: dummy.src,
//   },
//   {
//     title: "Innovation",
//     content: "Immersive Healing: How VR Transforms Physiotherapy",
//     image: dummy.src,
//   },
//   {
//     title: "Innovation",
//     content: "Immersive Healing: How VR Transforms Physiotherapy",
//     image: dummy.src,
//   },
//   {
//     title: "Innovation",
//     content: "Immersive Healing: How VR Transforms Physiotherapy",
//     image: dummy.src,
//   },
//   {
//     title: "Innovation",
//     content: "Immersive Healing: How VR Transforms Physiotherapy",
//     image: dummy.src,
//   },
//   {
//     title: "Innovation",
//     content: "Immersive Healing: How VR Transforms Physiotherapy",
//     image: dummy.src,
//   },
//   {
//     title: "Innovation",
//     content: "Immersive Healing: How VR Transforms Physiotherapy",
//     image: dummy.src,
//   },
// ];

const ContinueReading = ({ data }: { data: CaseStudies }) => {
  const [visibleData, setVisibleData] = useState<CaseStudies>([]);
  const cardsPerPage: number = 6; // Number of cards per page view

  const [searchInput, setSearchInput] = useState("");

  const [filteredBlogs, setFilteredBlogs] = useState<CaseStudies>(data);

  const filterBlogs = useCallback(() => {
    const result = data.filter((blog) =>
      blog.title.rendered
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes(searchInput.toLowerCase().replace(/\s+/g, ""))
    );
    setFilteredBlogs(result);
  }, [data, searchInput]);

  const loadInitialData = () => {
    const initialData = filteredBlogs.slice(0, cardsPerPage);
    setVisibleData(initialData);
  };

  const loadMoreData = () => {
    const nextPageStartIndex: number = visibleData.length;
    const nextPageEndIndex: number = nextPageStartIndex + cardsPerPage;
    const nextPageData = filteredBlogs.slice(nextPageStartIndex, nextPageEndIndex);
    setVisibleData((prevData) => [...prevData, ...nextPageData]);
  };

  React.useEffect(() => {
    loadInitialData();
  }, []);

  React.useEffect(() => {
    if (searchInput === "") {
      filterBlogs();
    }
  }, [filterBlogs, searchInput]);

  const handleKeyDown = (e:KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      filterBlogs();
    }
  }

  return (
    <div className="h-full w-[90vw] md:w-[85vw] mx-auto items-center flex flex-col z-50 mt-[70px] md:mt-[100px]">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 w-full">
        <h1 className="font-bold text-[24px] md:text-[32px] text-[#282828] text-start w-full">
          Continue Reading
        </h1>
        <div className="z-30 bg-[#F4F4F4] w-full md:max-w-[385px] h-[48px] rounded-[41px] mt-5 pl-7 pr-2 flex items-center justify-between ">
          <input
            className="h-[48px] outline-none border-none  bg-transparent"
            placeholder="Search"
            type="text"
            spellCheck="false"
            value={searchInput}
            onKeyDown={handleKeyDown}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            onClick={filterBlogs}
            className="h-[32px] w-[32px] rounded-full bg-gradient-to-r from-[#0151FE] to-[#A6E77D] grid place-content-center"
          >
            <Search className="text-white " />
          </button>
        </div>
      </div>

      <div className="flex w-full flex-wrap gap-x-[35px] gap-y-[52px] items-center ">
        {visibleData.map((el, index) => (
          <Link key={index} href={`/case-studies/${el.id}`}>
            <Card
              title={el.acf.data.type}
              description={el.title.rendered}
              image={el.acf.data.image || dummy}
            />
          </Link>
        ))}
      </div>

      {visibleData.length < (filteredBlogs ? filteredBlogs.length : 0) && (
        <button
          onClick={loadMoreData}
          className="rounded-[40px] bg-white border border-[#E3E3E3] text-[20px] font-[600] px-[24px] py-[8px] mt-[44px]"
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default ContinueReading;
