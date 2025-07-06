import { Advantages } from "../common/Advantages";
import { CaseStudySection } from "../common/CaseStudySection";
import { FAQ } from "../common/FAQ";
import { Features } from "../common/Features";
import { Hero } from "../common/Hero";
import { InnovativeFeature } from "../common/InnovativeFeature";
import { Partner } from "../common/Partners";
import { Testimonial } from "../common/Testimonial";

export type Home = {
  hero: Hero;
  video_type: "youtube" | "file";
  video?: string;
  youtube_link?: string;
  trustedAndRec: {
    heading: string;
    partners: Partners;
  };
  maximise_your_physiotherapy_impact: {
    heading: string;
    features: Record<string, {
      description: string;
      focus_keyword: string;
    }>;
    advantages: Advantages;
    image: string | false;
  };
  setting_up: {
    heading: string;
    focus_keyword: string;
    steps: Steps;
  };
  innovative_features: {
    heading: string;
    focus_keyword: string;
    description: string;
    features: InnovativeFeatures;
  };
  case_studies: CaseStudySection;
  testimonials_video: any;
  faqs: {
    heading: string;
    faq: FAQ;
  };
  testimonials: {
    heading: string;
    focus_keyword: string;
    testimonial: Testimonial;
  };
  loved_and_recommended_by: LovedAndRecommendedBy;
};

export type Partners = Record<string, Partner>;

type Steps = Record<string, Step>;

type Step = {
  step: string;
  description: string;
};

type InnovativeFeatures = Record<string, InnovativeFeature>;

type LovedAndRecommendedBy = Record<
  string,
  {
    label: string;
    value: string;
  }
>;
