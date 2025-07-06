import { InnovativeFeature } from "../common/InnovativeFeature";
import { TestimonialsWithVideo } from "../common/Testimonial";

export type BlogsPosts = Array<BlogRes>;

export type CaseStudiesPosts = Array<CaseStudyRes>;

export type BlogRes = {
  id: string;
  date: Date;
  status: "publish" | "unpublish";
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  acf: {
    data: Blog;
  };
};

export type CaseStudyRes = {
  id: string;
  date: Date;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  acf: {
    data: CaseStudy;
  };
};

type Blog = {
  category: "blog";
  type: string;
  image: string | null;
  publisher: {
    name: string;
    date: Date | null;
  };
};

export type CaseStudy = {
  category: "caseStudies";
  type: string;
  image: string | null;
  publisher: {
    name: string;
    date: Date | null;
  };
  challenges: Challenges;
  about_the_client: string;
  location: string;
  key_results: KeyResults;
  testimonials: Omit<TestimonialsWithVideo, "description">;
  features: Features;
};

type Challenges = {
  heading: string;
  points: Record<string, string>;
};

type KeyResults = Record<
  string,
  {
    heading: string;
    description: string;
  }
>;

export type Features = {
  heading: string;
  features: Record<string, InnovativeFeature>;
};
