import Image from "next/image";
import Typography from "../ui/typography";
import arrow from "@/assets/ourExperts/arrow1.svg";
import Link from "next/link";

type CaseStudyCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  type?: string;
  id: string;
  // onClick: () => void;
};

const SucessStoryCard: React.FC<CaseStudyCardProps> = ({
  imageUrl,
  title,
  description,
  type,
  id,
}) => {
  return (
    <div className="flex flex-wrap gap-[42px] w-full">
      <div className="flex justify-center items-center">
        <Image
          src={imageUrl}
          alt="hero icon"
          width={514}
          height={279}
          className="rounded-[16px] sm:w-[514px] max-h-[279px] min-w-[342px] object-center"
        />
      </div>
      <div className="grow sm:px-4 xl:px-0 max-w-[560px] pt-[20px] xl:pt-0">
        <h4 className="text-[16px] font-[700] text-[#3FC4D5] pb-[4px]">
          {type}
        </h4>
        <h3 className="text-[24px] font-extrabold text-[#282828] pb-[20px]">
          {title}
        </h3>
        <div className="text-[16px] font-[400] text-[#6B6B6B] line-clamp-3"  dangerouslySetInnerHTML={{
              __html: description,
            }} />
        <Link
          href={`case-studies/${id}` || ""}
          className="flex py-[8px] px-[14px] mt-[24px] gap-[4px] hover:font-[900] border border-[#E3E3E3] cursor-pointer w-[188px] rounded-[40px] items-center justify-center"
        >
          <Typography className="text-[16px] md:text-[16px] font-[600] text-[#282828] hover:font-[500]">
            Read Case Study
          </Typography>
          <Image
            src={arrow}
            width={20}
            height={20}
            alt="read case study arrow"
          />
        </Link>
      </div>
    </div>
  );
};

export default SucessStoryCard;
