import { Hero } from "../common/Hero";
import { TestimonialsWithVideo } from "../common/Testimonial";
import { Home } from "./Home";

export type ProductFeatures = {
  hero: Hero;
  innovative_features: Home["innovative_features"];
  designed_for_every_physiotherapy_use_case: DesignedForEveryUseCases;
  testimonials: TestimonialsWithVideo;  
};

type DesignedForEveryUseCases = {
  heading: string;
  subheading: string;
  use_cases: Record<
    string,
    {
      heading: string;
      description: string;
      image: string | false;
    }
  >;
};
