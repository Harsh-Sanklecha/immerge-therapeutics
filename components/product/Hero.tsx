import hero from "@/assets/product/hero.png";
import Image from "next/image";
import Typography from "../ui/typography";
import type { Hero } from "@/types/api/common/Hero";
import { splitSentenceByFocusKeyword } from "@/lib/utils/splitSentenceByFocusKeyword";
import new8 from '@/public/new8.png'

const Hero = ({ data }: { data: Hero }) => {
  const { firstWord, lastWord } = splitSentenceByFocusKeyword(
    data.hero_title,
    data.hero_focus_keyword
  );

  return (
    <div className="md:relative md:h-[790px] w-full md:mt-20 mt-16 pt-16 md:pt-[76px]">
      <div className="md:max-w-[677px] ">
        <Typography
          variant="h1"
          component="h1"
          className="text-[32px] md:text-5xl md:leading-[60px] mb-4 md:mb-6"
        >
          {firstWord}{" "}
          <span className="text-gradient">{data.hero_focus_keyword}</span>
          {lastWord}
        </Typography>
        <Typography className="font-medium text-brand_gray-400">
          {data.hero_desc}
        </Typography>
      </div>
      {/* desktop img */}
      <Image src={new8} fill alt="hero image" className=" hidden md:block" />
      {/* mobile img */}
      <Image src={new8} alt="hero image" className="md:hidden h-[325px]" />
    </div>
  );
};

export default Hero;
