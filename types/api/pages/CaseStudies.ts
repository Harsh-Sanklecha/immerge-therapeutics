import { Hero } from "../common/Hero";
import { TestimonialsWithVideo } from "../common/Testimonial";
import { Home } from "./Home";
import { CaseStudy  as Data} from "../pages/BlogsOrCaseStudies";

export type CaseStudies = Array<CaseStudy>;

export type CaseStudy = {
  id: string;
  date: Date;
  title: {
    rendered: string;
  };
  // content: {
  //   rendered: string;
  //   protected: boolean;
  // };
  // excerpt: {
  //   rendered: string;
  //   protected: boolean;
  // };
  acf: {
    data: Data;
    hero: Hero;
    trustedAndRec: Home["trustedAndRec"];
    testimonials: TestimonialsWithVideo;
  };
};
