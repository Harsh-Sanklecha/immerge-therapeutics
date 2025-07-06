import { Expert } from "../common/Expert";
import { Hero } from "../common/Hero";
import { SocialPlatform } from "../common/SocialPlatforms";
import { Timeline } from "../common/Timeline";
import { TitleAndDesc } from "../common/TitleAndDesc";

export type About = {
  hero: Hero;
  tech: Tech;
  our_experts: OurExperts;
  sessions: Sessions;
  timeline1: Timeline;
  timeline2: Timeline;
  timeline3: Timeline;
  socials: Socials;
};

type Tech = {
  tech_title: string;
  tech_description: string;
  focus_keyword: string;
  tech1: TitleAndDesc;
  tech2: TitleAndDesc;
  tech3: TitleAndDesc;
  tech4: TitleAndDesc;
};

type OurExperts = Record<string, Expert>;

type Sessions = Record<string, TitleAndDesc>;

type Socials = {
  heading: string;
  focus_keyword: string;
  social: Record<string, Social>;
};

type Social = { image: string | false; platform: SocialPlatform; url: string };
