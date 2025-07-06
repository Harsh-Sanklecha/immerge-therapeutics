import Typography from "@/components/ui/typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserRound } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/slider";
import { Home } from "@/types/api/pages/Home";
import { splitSentenceByFocusKeyword } from "@/lib/utils/splitSentenceByFocusKeyword";

const Testimonials = ({ data }: { data: Home["testimonials"] }) => {
  const { firstWord, lastWord } = splitSentenceByFocusKeyword(
    data.heading,
    data.focus_keyword
  );

  const testimonials = Object.values(data.testimonial);

  return (
    <div className="flex flex-col  gap-[60px] md:gap-0 md:flex-row md:justify-between">
      <Typography
        component="h3"
        variant="h3"
        className="md:max-w-[386px] w-full font-extrabold text-[32px] md:text-5xl  leading-[40px] md:leading-[60px]"
      >
        {firstWord} <span className="bg-gradient-to-br from-[#0151FE] via-[#3474fe] to-[#3D3D3D] bg-clip-text text-transparent">{data.focus_keyword}</span>
        {lastWord}
      </Typography>
      <div className="md:w-1/2">
        <Carousel>
          <CarouselContent>
            {testimonials.map((testimonial, ind) => (
              <CarouselItem key={ind}>
                <Typography
                  variant="quote"
                  component="h3"
                  className=" mb-2 md:mb-6"
                >
                  <q>{testimonial.focus_keyword}</q>
                </Typography>
                <Typography className="text-lg mb-[30px] md:mb-[75px]">
                  {testimonial.content}
                </Typography>
                <div className="md:max-w-[289px] flex gap-[18px]">
                  {/* <Avatar>
                    <AvatarImage
                      src={testimonial.testimonial_by.image || undefined}
                      alt={`image of ${testimonial.testimonial_by.name}`}
                    />
                    <AvatarFallback>
                      <UserRound className="text-brand_gray-200" />
                    </AvatarFallback>
                  </Avatar> */}
                  <div className="space-y-[1px] w-[205px]">
                    <Typography variant="h4" className="font-bold">
                      {testimonial.testimonial_by.name}
                    </Typography>
                    <Typography className="md:text-base">
                    {testimonial.testimonial_by.about}                    </Typography>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex md:block justify-center mt-[30px] md:mt-0">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
