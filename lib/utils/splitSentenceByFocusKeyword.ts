export const splitSentenceByFocusKeyword = (
    sentence: string,
    focusKeyword: string
  ) => {
    const startIndex = sentence.indexOf(focusKeyword);
    const endIndex = focusKeyword.length - 1 + startIndex;
    const firstWord = startIndex === 0 ? "" : sentence.substring(0, startIndex);
    const lastWord =
      endIndex === sentence.length - 1 ? "" : sentence.substring(endIndex + 1);
    return { firstWord, lastWord };
  };