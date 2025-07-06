import Image from "next/image";
import Typography from "../ui/typography";
import SuccessStoriesCard from "./SuccessStoriesCard";
import new9 from '@/public/new9.png'
import { ProductFeatures } from "@/types/api/pages/ProductFeatures";
import new131 from '@/public/new131.png'
import new14 from '@/public/new14.png'
import new15 from '@/public/new15.png'

const SuccessStories = ({
  data,
}: {
  data: ProductFeatures["designed_for_every_physiotherapy_use_case"];
}) => {
  return (
    <div className="space-y-5">
      <div className="flex flex-col md:flex-row md:gap-5">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Typography className="text-gradient text-xl font-extrabold mb-4">
            {data.heading}{" "}
          </Typography>
          <Typography variant="subh">{data.subheading} </Typography>
        </div>
        <SuccessStoriesCard className="md:w-1/2 flex flex-col md:flex-row gap-8 md:gap-[60px]">
          <div className="p-6 md:w-3/4">
            <SuccessStoriesCard.Title>
              {data.use_cases["1"].heading}{" "}
            </SuccessStoriesCard.Title>
            <SuccessStoriesCard.Description>
              {data.use_cases["1"].description}
            </SuccessStoriesCard.Description>
          </div>
          <div className="relative md:w-1/2 h-3/5 md:h-auto">
            <Image objectFit="cover" src={data.use_cases["1"].image || new9} alt="img" fill unoptimized quality={100} />
          </div>
        </SuccessStoriesCard>
      </div>
      <div className="flex flex-col md:flex-row gap-5 md:h-[650px]">
        <SuccessStoriesCard className="md:w-1/2 flex flex-col md:gap-2.5 md:h-full">
          <div className="p-6 md:pb-0">
            <SuccessStoriesCard.Title>
              {data.use_cases["2"].heading}
            </SuccessStoriesCard.Title>
            <SuccessStoriesCard.Description className="md:w-3/4">
              {data.use_cases["2"].description}
            </SuccessStoriesCard.Description>
          </div>
          <div className="relative h-3/5 md:h-1/2 md:grow w-full">
            <Image objectPosition="top" objectFit="cover" src={data.use_cases["2"].image || new131} alt="img" fill unoptimized quality={100} />
          </div>
        </SuccessStoriesCard>
        <div className="flex flex-col md:flex-row gap-5 md:w-1/2">
          {" "}
          <SuccessStoriesCard className="md:w-1/2 flex flex-col gap-2.5 md:h-full">
            <div className="p-6 md:pb-0">
              <SuccessStoriesCard.Title>
                {data.use_cases["3"].heading}{" "}
              </SuccessStoriesCard.Title>
              <SuccessStoriesCard.Description className="md:w-3/4">
                {data.use_cases["3"].description}{" "}
              </SuccessStoriesCard.Description>
            </div>
            <div className="mt-auto relative h-3/5 md:h-[230px] 2xl:h-[300px] w-full">
              <Image src={data.use_cases["3"].image || new14} alt="img" fill objectFit="cover"/>
            </div>
          </SuccessStoriesCard>{" "}
          <SuccessStoriesCard className="md:w-1/2 flex flex-col gap-2.5 md:h-full">
            <div className="p-6 md:pb-0">
              <SuccessStoriesCard.Title>
                {data.use_cases["4"].heading}{" "}
              </SuccessStoriesCard.Title>
              <SuccessStoriesCard.Description className="md:w-3/4">
                {data.use_cases["4"].description}{" "}
              </SuccessStoriesCard.Description>
            </div>
            <div className="mt-auto relative h-1/2 md:h-[230px] 2xl:h-[300px] w-full">
              <Image src={data.use_cases["4"].image || new15} alt="img" fill />
            </div>
          </SuccessStoriesCard>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
