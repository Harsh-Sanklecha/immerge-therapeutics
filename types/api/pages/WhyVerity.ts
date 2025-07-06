import { Advantages } from "../common/Advantages";
import { Features } from "../common/Features";
import { Hero } from "../common/Hero";
import { SuccessStories } from "../common/SuccessStories";

export type WhyVerity = {
  hero: Hero;
  video: string;
  youtube_link:string;
  video_type: string;
  how_vr_is_transforming_lives: {
    heading: string;
    features: Features;
    advantages: Advantages;
  };
  driven_by_values: {
    heading: string;
    values: Values;
  };
  success_stories: {
    heading: string;
    subheading: string;
    stories: SuccessStories;
  };
  why_verity: {
    heading: string;
    description: string;
    features: Record<string, WhyVerityFeature>;
  };
};




type Values = Record<
  string,
  {
    heading: string;
    description: string;
  }
>;

type WhyVerityFeature = {
  title: string;
  description: string;
};
