export type Testimonial = Record<
  string,
  { content: string; focus_keyword: string; testimonial_by: TestimonialBy }
>;

type TestimonialBy = {
  name: string;
  about: string;
  image: string | false;
};

export type TestimonialsWithVideo = {
  heading: string;
  subheading: string;
  testimonial: TestimonialWithVideo;
};

export type TestimonialWithVideo = Record<
  string,
  {
    testimonial_by: {
      name: string;
      about: string;
    };
    content: string;
    video: string;
    video_type: "youtube" | "file";
    youtube_link: string;
  }
>;
