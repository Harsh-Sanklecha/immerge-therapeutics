import IconButton from "@/components/button/IconButton";
import Typography from "@/components/ui/typography";
import Image from "next/image";
import dummy from "@/assets/blogs/blog-hero-bg.png";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/router";
import { CaseStudy } from "@/types/api/pages/CaseStudies";
import { CaseStudySection } from "@/types/api/common/CaseStudySection";
import hospitalImg from '@/assets/appolo.jpg'

const FeaturedCaseStudies = ({
  data,
  caseStudies,
}: {
  data: CaseStudySection;
  caseStudies: CaseStudy;
}) => {
  const router = useRouter();

  return (
    <div className="px-6 py-10 md:px-[120px] md:py-[111px] flex flex-col gap-[52px] lg:gap-0 lg:flex-row md:justify-between ">
      <div className="flex md:flex-col md:justify-between lg:w-2/5 md:gap-7 lg:gap-0">
        <div className="space-y-3">
          <Typography
            variant="h3"
            component="h3"
            className="font-extrabold text-[32px] md:text-[40px]"
          >
            {data.heading}
          </Typography>
          <Typography>{data.description}</Typography>
        </div>

        <IconButton
          onClick={() => router.push("case-studies")}
          className="md:w-full hidden md:flex"
        >
          View all Case Studies
        </IconButton>
      </div>
      <div className="flex gap-2.5 md:gap-6 lg:w-1/2 border rounded-xl  md:mb-0 overflow-hidden h-[190px] md:h-[330px] shadow-md bg-[white/41]   md:bg-white md:shadow-2xl md:border-0">
        <div className="relative min-w-[133px] h-full md:min-w-[240px]">
          <Image
            src={caseStudies.acf.data.image || hospitalImg}
            fill
            alt="image for featured case study"
            className="object-cover"
          />
        </div>
        <div className="py-[14px] md:py-6 flex flex-col justify-between">
          <div>
            <Typography
              variant="h3"
              className="font-bold leading-tight text-xl md:text-2xl mb-0.5 md:mb-5 line-clamp-2 md:line-clamp-3"
            >
              
              <span
                dangerouslySetInnerHTML={{
                  __html: caseStudies.title.rendered,
                }}
              />
            </Typography>
            <Typography className="line-clamp-2 md:line-clamp-3 text-sm md:text-base w-11/12">
             {caseStudies.acf.data.about_the_client}
            </Typography>
          </div>
          <Button
            variant="secondary"
            onClick={() => router.push(`case-studies/${caseStudies.id}`)}
            className="flex items-center justify-normal md:justify-center min-h-[20px] hover:bg-gray-100 mx-4"
          >
            Read Case Study{" "}
            <ArrowUpRight className="ml-1 w-5 h-5 text-brand_black-100" />
          </Button>
        </div>
      </div>
      <IconButton
        onClick={() => {
          router.push("/case-studies");
        }}
        className="w-full md:hidden"
      >
        View all Case Studies
      </IconButton>
    </div>
  );
};

export default FeaturedCaseStudies;
