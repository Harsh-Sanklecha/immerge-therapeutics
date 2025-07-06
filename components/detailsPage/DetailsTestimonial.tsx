import { TestimonialsWithVideo } from "@/types/api/common/Testimonial";
import Carousel from "../ui/carousel";
import Typography from "../ui/typography";
import VideoCarouselCaseStudy from "../ui/VideoCarouselCaseStudy";

const DetailsTestimonial = ({
  testimonials,
}: {
  testimonials: Omit<TestimonialsWithVideo, "description">;
}) => {
  const slides = Object.values(testimonials.testimonial).map(testimonial => ({
    name: testimonial.testimonial_by.name,
    role: testimonial.testimonial_by.about,
    description: testimonial.content,
    source: testimonial.video_type === "file" ? testimonial.video : testimonial.youtube_link,
    video_type: testimonial.video_type
  }))
  // const slidesq = [
  //   {
  //     name: "Dr. Emily",
  //     role: "Orthopedist",
  //     description:
  //       "Since incorporating VerityXR into our clinic, I've seen a remarkable change. Patients are more engaged, and their recovery times have improved significantly. It's truly enhanced the way we approach rehabilitation.",
  //     source:
  //       "https://file-examples.com/storage/fe0e2ce82f660c1579f31b4/2017/04/file_example_MP4_480_1_5MG.mp4",
  //     // source:""
  //   },
  //   {
  //     name: "Dr. Emily",
  //     role: "Orthopedist",
  //     description:
  //       "Since incorporating VerityXR into our clinic, I've seen a remarkable change. Patients are more engaged, and their recovery times have improved significantly. It's truly enhanced the way we approach rehabilitation.",
  //     source:
  //       "https://file-examples.com/storage/fe0e2ce82f660c1579f31b4/2017/04/file_example_MP4_480_1_5MG.mp4",
  //   },
  //   {
  //     name: "Dr. Emily",
  //     role: "Orthopedist",
  //     description:
  //       "Since incorporatin VerityXR into our clinic, I've seen a remarkable change.",
  //     source:
  //       "https://file-examples.com/storage/fe0e2ce82f660c1579f31b4/2017/04/file_example_MP4_480_1_5MG.mp4",
  //   },
  //   {
  //     name: "Dr. Emily",
  //     role: "Orthopedist",
  //     description:
  //       "Since incorporating VerityXR into our clinic, I've seen a remarkable change.",
  //     source:
  //       "https://file-examples.com/storage/fe0e2ce82f660c1579f31b4/2017/04/file_example_MP4_480_1_5MG.mp4",
  //   },
  //   {
  //     name: "Dr. Emily",
  //     role: "Orthopedist",
  //     description:
  //       "Since incorporating VerityXR into our clinic, I've seen a remarkable change.",
  //     source:
  //       "https://file-examples.com/storage/fe0e2ce82f660c1579f31b4/2017/04/file_example_MP4_480_1_5MG.mp4",
  //   },
  // ];
  return (
    <div className="flex flex-col md:flex-row justify-between md:justify-between">
      <Typography
        variant={"subh"}
        className="text-[24px] mb-8 md:mb-0 md:text-[32px]"
      >
        {testimonials.heading}{" "}
      </Typography>
      <div className="grow">
        {/* <Carousel slides={slides} className="md:w-[calc(720px+4vw)]" /> */}
        <VideoCarouselCaseStudy slides={slides} className="md:w-[calc(720px+12vw)]" />
      </div>
      <div></div>
    </div>
  );
};

export default DetailsTestimonial;
