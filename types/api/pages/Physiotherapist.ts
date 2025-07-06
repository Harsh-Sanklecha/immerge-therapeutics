import { FAQ } from "../common/FAQ";
import { Hero } from "../common/Hero";
import { TestimonialsWithVideo } from "../common/Testimonial";
import { Partners } from "./Home";
import { SuccessStories } from "./OurExperts";

export type Physiotherapist = {
  hero: Hero;
  faqs: {
    heading: string;
    faq: FAQ;
  };
  beyond_just_traditional_physiotherapy: BeyondJustTraditionalPhysiotherapy;
  testimonials: TestimonialsWithVideo;
  trustedAndRec: {
    heading: string;
    partners: Partners;
  };
  success_stories: SuccessStories;

};

type BeyondJustTraditionalPhysiotherapy = {
  heading: string;
  focus_keyword: string;
  points: Points;
};

type Points = Record<
  string,
  {
    heading: string;
    description: string;
  }
>;
