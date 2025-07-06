import { TestimonialsWithVideo } from "../common/Testimonial";
import { Home } from "./Home";

export type BookDemo = {
  hero: Hero;
  trustedAndRec: Home["trustedAndRec"];
  testimonials: TestimonialsWithVideo;
  innovation: Innovation;
  rehab_reimagined_with_technology: RehabReimaginedWithTechnology;
  verityxrs_features: Features;
};

type Hero = {
  heading: string;
  description: string;
  features: Record<string, string>;
};

type Innovation = {
  heading: string;
  subheading: string;
  description: string;
}

type RehabReimaginedWithTechnology = {
  heading: string;
  points: Record<string, {
    heading: string;
    description: string;
  }>
}

type Features = {
  heading: string;
  description: string;
}
