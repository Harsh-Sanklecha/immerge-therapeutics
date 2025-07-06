export type SuccessStories = Record<string, SuccessStory>;

export type SuccessStory = {
  story: string;
  story_by: {
    name: string;
    video: string;
    about: string;
  };
};
