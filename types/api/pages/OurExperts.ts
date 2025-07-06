import { FAQ } from "../common/FAQ";
import { Hero } from "../common/Hero";
import { Testimonial, TestimonialsWithVideo } from "../common/Testimonial";
import { Partners } from "./Home";

export type OurExperts = {
  hero: Hero;
  trustedAndRec: {
    heading: string;
    partners: Partners;
  };
  faqs: {
    heading: string;
    faq: FAQ;
  };
  how_verityxr_makes_a_difference: VerityXrMakesDifference;
  success_stories: SuccessStories;
  testimonials: TestimonialsWithVideo;
  testimonials_video: any;
};

type VerityXrMakesDifference = {
  heading: string;
  focus_keyword: string;
  description: string;
  points: Record<
    string,
    {
      heading: string;
      description: string;
    }
  >;
};

export type SuccessStories = {
  heading: string;
  description: string;
  featured_case_studies: Record<string, string>;
};
