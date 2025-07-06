import { FAQ } from "../common/FAQ";
import { Hero } from "../common/Hero";
import { Home } from "./Home";
import { OurExperts } from "./OurExperts";
import { WhyVerity } from "./WhyVerity";

export type Partner = {
  hero: Hero;
  faqs: {
    heading: string;
    faq: FAQ;
  };
  maximise_your_physiotherapy_impact: Home["maximise_your_physiotherapy_impact"];
  trustedAndRec: Home["trustedAndRec"];
  success_stories: OurExperts["success_stories"];
  driven_by_values: WhyVerity["driven_by_values"];
};
