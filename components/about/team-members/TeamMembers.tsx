import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/slider";
import Typography from "../../ui/typography";
import Card from "./Card";
import dummy from "@/assets/dummy-team-member.png";
import { About } from "@/types/api/pages/About";

const TeamMembers = ({ data }: { data: About["our_experts"] }) => {
  const experts = Object.values(data);
  return (
    <div className="px-6 md:px-[120px]">
      <Typography
        variant="h1"
        component="h1"
        className="md:text-[40px] md:leading-[50.4px] text-center mb-10 text-[28px]"
      >
        Helmed by experts, driven by <br className="hidden lg:block" />
        <span className="bg-gradient-to-br from-[#0151FE] via-[#3474fe] to-[#3D3D3D] bg-clip-text text-transparent">
          technology
        </span>
      </Typography>

      <div className="md:grid lg:grid-cols-2 grid-cols-1 hidden gap-5 relative">
        {experts.map((el, ind) => (
          <Card
            key={ind}
            about={el.about}
            name={el.name}
            degree={el.qualifications}
            designation={el.roles}
            photo={el.image}
          />
        ))}
        <div className="h-[500px] w-[500px] rounded-full bg-gradient-radial blur-[100px] absolute -top-16 -left-[26rem] lg:block hidden" />

        <div className="h-[845px] w-[845px] rounded-full bg-gradient-radial blur-[200px] absolute top-28 -right-[40rem] lg:block hidden" />
      </div>
      <Carousel className="md:hidden">
        <CarouselContent>
          {experts.map((el, ind) => (
            <CarouselItem className="bg-[hsla(188, 67%, 54%, 0.5)]" key={ind}>
              <Card
                key={ind}
                about={el.about}
                name={el.name} 
                degree={el.qualifications}
                designation={el.roles}
                photo={el.image}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden" />
        <CarouselNext className="hidden" />
      </Carousel>
    </div>
  );
};

export default TeamMembers;
