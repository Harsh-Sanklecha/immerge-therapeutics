import Typography from "@/components/ui/typography";
import dummy from "@/assets/dummy-team-member.png";
import Card from "./Card";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { About } from "@/types/api/pages/About";
import { SocialPlatform } from "@/types/api/common/SocialPlatforms";
import { splitSentenceByFocusKeyword } from "@/lib/utils/splitSentenceByFocusKeyword";



const Socials = ({ data }: { data: About["socials"] }) => {
  const { heading, focus_keyword } = data;
  const { firstWord, lastWord } = splitSentenceByFocusKeyword(
    heading,
    focus_keyword
  );

  const socialMedias = Object.values(data.social);

  const getSocialIcon = (platform: SocialPlatform) => {
    switch (platform) {
      case "facebook":
        return <AiFillFacebook className="text-2xl mt-3" />;
      case "instagram":
        return <AiFillInstagram className="text-2xl mt-3" />;
      case "linkedIn":
        return <AiFillLinkedin className="text-2xl mt-3" />;

      default:
        throw new Error(`Invalid platform: ${platform}`);
    }
  };

  return (
    <div className="px-6 md:px-[120px]">
      <Typography
        variant="h1"
        component="h1"
        className="md:text-[40px] md:leading-[50.4px] mb-10 text-[28px]"
      >
        {firstWord}
        <span className="bg-gradient-to-br from-[#0151FE] via-[#3474fe] to-[#3D3D3D] bg-clip-text text-transparent">
          {focus_keyword}
        </span>
        {lastWord}
      </Typography>

      <div className="grid lg:grid-cols-4 grid-cols-2 md:gap-5 gap-3">
        {socialMedias.map((el, ind) => (
          <Card
            key={ind}
            image={el.image}
            link={el.url}
            icon={getSocialIcon(el.platform)}
          />
        ))}
      </div>
    </div>
  );
};

export default Socials;
