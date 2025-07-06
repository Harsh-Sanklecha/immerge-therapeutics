import { About } from "@/types/api/pages/About";
import HoverCard from "../card/HoverCard";
import Rectangle from "../ui/Rectangle";
import Typography from "../ui/typography";

const getSessions = (data: About["sessions"]) => {
  return Object.values(data);
};

const Physiotherapy = ({ data }: { data: About["sessions"] }) => {
  const sessions = getSessions(data);
  return (
    <div className="px-6 md:px-[120px] relative">
      <Rectangle className="absolute top-4 right-[20%] md:block hidden" />
      <Rectangle className="absolute top-32 right-16 bg-[#b781c2] md:block hidden" />
      <Typography
        variant="h1"
        component="h1"
        className="md:text-[40px] md:leading-[50.4px] text-center mb-10 text-[28px]"
      >
        Redefining Physiotherapy,
        <span className="bg-gradient-to-br from-[#0151FE] via-[#3474fe] to-[#3D3D3D] bg-clip-text text-transparent">
          One Session
        </span>{" "}
        at a Time
      </Typography>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
        {sessions.map((el, ind) => (
          <HoverCard key={ind}>
            <div className="w-[34px] h-[34px] rounded-[4px] border border-[#898989] grid place-content-center group-hover:bg-[#0151fe] group-hover:border-[#0151fe] group-hover:text-[#fff] transition-all duration-300">
              <span className="text-[18px] font-bold">{++ind}</span>
            </div>
            <Typography
              className="md:text-[36px] text-[24px] md:leading-10"
              variant={"h1"}
            >
              {el.title}
            </Typography>
            <Typography
              className="text-[#898989] group-hover:text-[#2F2F2F] transition-all duration-300"
              variant={"p"}
            >
              {el.description}
            </Typography>
          </HoverCard>
        ))}
      </div>
    </div>
  );
};

export default Physiotherapy;
