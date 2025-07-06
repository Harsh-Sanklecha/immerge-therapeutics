import React from "react";
import Image from "next/image";
import dummy from "@/assets/blogs/blog-hero-bg.png";
import backarrow from "@/assets/case-study/backarr.png";
import { useRouter } from "next/router";
import { BlogRes } from "@/types/api/pages/BlogsOrCaseStudies";

const DetailsLandingForBlogs = ({ blog }: { blog: BlogRes }) => {
  const router = useRouter();

  // const sanitizeContent = (content: string) => DOMPurify.sanitize(content);
  return (
    <div className="relative pb-[40px] lg:pb-[103px]">
      <div className="min-h-screen w-[90vw] md:w-[85vw] mx-auto items-center flex flex-col ">
        <div className="max-w-[800px] pt-[24px] relative">
          <button
            onClick={() => router.back()}
            className="hidden md:flex absolute top-8  -left-8 lg:-left-16 cursor-pointer"
          >
            <Image src={backarrow} alt="arrow icon" width={30} height={30} />
          </button>
          <Image
            src={  blog.acf.data.image || dummy}
            alt="details hero image"
            width={800}
            height={400}
            className="rounded-[16px]"
          />
          <h3 className="text-[#3FC4D5] text-[16px] font-[700] pt-[40px]">
            {blog.acf.data.type}
          </h3>
          <h1 className="text-[24px]  text-[#282828] font-extrabold">
            {blog.title.rendered}
          </h1>
          <p className="flex mt-[16px] text-[18px] font-[400] items-center">
            <span>{blog.acf.data.publisher.name}</span>
            <span className="w-[4px] items-center flex justify-center h-[4px] rounded-full bg-black mx-[12px]"></span>
            <span>
              Published on{" "}
              {blog.acf.data.publisher.date
                ? new Date(blog.acf.data.publisher.date)?.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  })
                : ""}
            </span>
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: blog.content.rendered,
            }}
            className="text-[18px] md:text-[20px] font-[300] pt-[40px]"
          />
          {/* Lorem ipsum dolor sit amet consectetur. Faucibus faucibus ipsum
            turpis platea orci. Amet montes morbi nulla placerat amet ut
            molestie. Tincidunt ullamcorper cum orci luctus. Pellentesque
            placerat pellentesque nisl purus at. Viverra est morbi elementum
            habitant urna morbi posuere. Enim urna etiam elit a semper.
            Consequat ipsum imperdiet tempor vitae in ut. Vestibulum hac leo
            lorem quis id feugiat cras blandit viverra. Purus eget id amet nunc
            viverra dolor lectus. Gravida tellus venenatis enim quisque lectus.
            Vulputate tincidunt eget in in risus. Nascetur proin risus et magna
            maecenas at sed odio. Non ipsum semper dolor adipiscing habitasse
            ullamcorper diam egestas.Lorem ipsum dolor sit amet consectetur.
            Faucibus faucibus ipsum turpis platea orci. Amet montes morbi nulla
            placerat amet ut molestie. Tincidunt ullamcorper cum orci luctus.
            Pellentesque placerat pellentesque nisl purus at. Viverra est morbi
            elementum habitant urna morbi posuere. Enim urna etiam elit a
            semper. Consequat ipsum imperdiet tempor vitae in ut. Vestibulum hac
            leo lorem quis id feugiat cras blandit viverra. Purus eget id amet
            nunc viverra dolor lectus. Gravida tellus venenatis enim quisque
            lectus. Vulputate tincidunt eget in in risus. Nascetur proin risus
            et magna maecenas at sed odio. Non ipsum semper dolor adipiscing
            habitasse ullamcorper diam egestas.Lorem ipsum dolor sit amet
            consectetur. Faucibus faucibus ipsum turpis platea orci. Amet montes
            morbi nulla placerat amet ut molestie. Tincidunt ullamcorper cum
            orci luctus. Pellentesque placerat pellentesque nisl purus at.
            Viverra est morbi elementum habitant urna morbi posuere. Enim urna
            etiam elit a semper. Consequat ipsum imperdiet tempor vitae in ut.
            Vestibulum hac leo lorem quis id feugiat cras blandit viverra. Purus
            eget id amet nunc viverra dolor lectus. Gravida tellus venenatis
            enim quisque lectus. Vulputate tincidunt eget in in risus. Nascetur
            proin risus et magna maecenas at sed odio. Non ipsum semper dolor
            adipiscing habitasse ullamcorper diam egestas.
          </p> */}
        </div>
      </div>

      <div className="lg:h-[792px] lg:w-[792px] rounded-full bg-gradient-radial blur-[100px] absolute top-[116px] -left-[617px] z-10 " />
      <div className="lg:h-[792px] lg:w-[792px] rounded-full bg-gradient-radial blur-[150px] absolute top-[50px] left-[1202px] z-10" />
    </div>
  );
};

export default DetailsLandingForBlogs;
