import { useWindowSize } from "@/lib/hooks/useWindowSize";
import IconButton from "../button/IconButton";
import PartnerHero from "../svg/PartnerHero";
import Typography from "../ui/typography";
import type { Hero } from "@/types/api/common/Hero";
import { splitSentenceByFocusKeyword } from "@/lib/utils/splitSentenceByFocusKeyword";
import CTABtn from "../button/CTABtn";

const Hero = ({ data }: { data: Hero }) => {
  const { width } = useWindowSize();
  const isMobile = width && width < 768;

  const { firstWord, lastWord } = splitSentenceByFocusKeyword(
    data.hero_title,
    data.hero_focus_keyword
  );

  return (
    <div className="mt-16 md:mt-20 flex flex-col md:flex-row md:justify-between">
      <div className="md:pb-20">
        <div className="md:max-w-[604px] pt-[60px] mb-[54px] md:mb-16">
          <Typography
            variant="h1"
            component="h1"
            className="text-[32px] md:text-[46px] leading-[40px] md:leading-[57px] mb-4 md:mb-1"
          >
            {firstWord}{" "}
            <span className="text-gradient"> {data.hero_focus_keyword}</span>
            {lastWord}
          </Typography>
          <Typography className="font-medium md:text-xl text-brand_gray-400">
            {data.hero_desc}
          </Typography>
        </div>
        {/* <IconButton className="w-full md:max-w-[242px]">Book a Demo</IconButton> */}
        <CTABtn className="w-full md:max-w-[242px] mx-0" />
      </div>
      <div className="pt-[54px] md:pt-5">
        <PartnerHero
          width={isMobile ? "100%" : "536"}
          height={isMobile ? "auto" : "507"}
        />
      </div>
    </div>
  );
};

export default Hero;
