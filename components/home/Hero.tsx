import { Home } from "@/types/api/pages/Home";
import CTABtn from "../button/CTABtn";
import Typography from "../ui/typography";
import Video from "../video/Video";
import { splitSentenceByFocusKeyword } from "@/lib/utils/splitSentenceByFocusKeyword";
import YTPlayer from "../ytPlayer/YTPlayer";

const Hero = ({ data }: { data: Home }) => {
  const { firstWord, lastWord } = splitSentenceByFocusKeyword(
    data.hero.hero_title,
    data.hero.hero_focus_keyword
  );

  return (
    <div className="md:mx-[120px] mx-6 ">
      <div className="text-center pt-[114px] lg:pt-[55px] md:max-w-[819px] md:mx-auto">
        <Typography
          variant="h1"
          component="h1"
          className="max-[370px]:text-3xl leading-[50.4px] md:leading-[80.64px] tracking-tight"
        >
          {firstWord}{" "}
          <span className="bg-gradient-to-br from-[#0151FE] via-[#3474fe] to-[#3D3D3D] bg-clip-text text-transparent">
            {data.hero.hero_focus_keyword}{" "}
          </span>{" "}
          {lastWord}
        </Typography>
        <Typography className="text-brand_gray-200 text-lg mt-4 md:mx-[20px] md:mt-6 leading-[27px]">
          {data.hero.hero_desc}
        </Typography>
        <CTABtn />
      </div>
      <div
        className={`${
          data.video ? "shadow-gradient-video" : ""
        } w-full lg:max-w-[1400px] mx-auto`}
      >
        {data.video_type === "file" ? (
          <Video
            autoPlay={true}
            loop={true}
            muted={true}
            controls={false}
            src={data.video || ""}
            className="mt-[104px] relative bottom-[14px] md:bottom-0 md:mt-[50px] "
          />
        ) : (
          <YTPlayer autoplay={1} className="mt-[104px] relative bottom-[14px] md:bottom-0 md:mt-[50px]  w-full h-[189px] md:h-[547px] rounded-xl md:rounded-3xl object-cover" url={data.youtube_link || ""} />
        )}
      </div>
    </div>
  );
};

export default Hero;
