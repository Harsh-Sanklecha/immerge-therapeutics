import React from "react";
import Image from "next/image";
import dummy from "@/assets/blogs/blog-hero-bg.png";
import backarrow from "@/assets/case-study/backarr.png";
import { useRouter } from "next/router";
import { CaseStudyRes } from "../../types/api/pages/BlogsOrCaseStudies";
import Typography from "../ui/typography";
import icon1 from "@/assets/why-verify/icon1.svg";
import new17 from '@/public/new17.png'

const DetailsLanding = ({ blog }: { blog: CaseStudyRes }) => {
  const router = useRouter();

  // const sanitizeContent = (content: string) => DOMPurify.sanitize(content);

  return (
    <div className="relative pb-[40px] lg:pb-[103px]">
      <div className="min-h-screen  mx-auto items-center flex flex-col z-30">
        <div className="pt-6 z-30">
          <button
            onClick={() => router.back()}
            className="hidden md:flex cursor-pointer pb-6"
          >
            <Image src={backarrow} alt="arrow icon" width={30} height={30} />
          </button>
          <div className="relative  max-w-[1500px] z-30">
            <Image
              src={blog.acf.data.image || new17}
              alt="details hero image"
              style={{objectFit:"cover", objectPosition:""}}
              width={1500}
              height={500}
              className="rounded-[16px] max-h-[500px]"
              quality={100}
              unoptimized
            />
          </div>

          <h3 className="text-[#3FC4D5] text-[16px] font-[700] pt-[40px] z-30">
            {blog.acf.data.type}
          </h3>
          <h1 className="text-[24px]  text-[#282828] font-extrabold z-30">
            {blog.title.rendered}
          </h1>

          <div className="pt-6 space-y-4 z-30">
            <Typography className="text-black text-lg z-30">
              {blog.acf.data.challenges.heading}
            </Typography>
            <div className="grid gap-4 md:grid-cols-3 text-lg leading-[27px] z-30">
              {Object.values(blog.acf.data.challenges.points).map(
                (challenge, ind) => (
                  <div key={ind} className="flex gap-[13px] z-30">
                    <div className="size-8 rounded-full font-extrabold bg-[#061012] flex items-center justify-center text-white z-30">
                      {++ind}
                    </div>
                    <p>{challenge}</p>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="pt-10 md:pt-[82px] md:flex justify-between md:gap-20 z-30">
            <div className="w-full mb-8 z-30">
              <div className="space-y-4 mb-8 md:mb-[74px] z-30">
                <Typography variant={"h4"}>BACKGROUND</Typography>
                <Typography>{blog.acf.data.about_the_client}</Typography>
              </div>
              <div className="space-y-4">
                <Typography variant={"h4"}>LOCATION</Typography>
                <Typography>{blog.acf.data.location}</Typography>
              </div>
            </div>
            <div className="w-full">
              <div className="space-y-6">
                <Typography variant={"h4"}>KEY RESULTS</Typography>
                <div className="space-y-4">
                  {Object.values(blog.acf.data.key_results).map(
                    (result, ind) => (
                      <div key={ind} className="flex gap-[13px] items-start">
                        <Image src={icon1} alt="icon" width={32} height={32} />
                        <div>
                          <Typography variant={"h4"} className="font-medium">
                            {result.heading}
                          </Typography>
                          <Typography>{result.description}</Typography>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden xl:h-[792px] lg:w-[792px] rounded-full bg-gradient-radial blur-[100px] absolute top-[116px] -left-[617px] z-10 " />
      <div className="hidden xl:h-[792px] lg:w-[792px] rounded-full bg-gradient-radial blur-[150px] absolute top-[50px] left-[1202px] z-10" />
    </div>
  );
};

export default DetailsLanding;
