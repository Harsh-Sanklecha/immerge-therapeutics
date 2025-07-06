import clsx from "clsx";
import React from "react";
import Iframe from "react-iframe";

type Props = { url: string; className?: string, autoplay?: number };

const YTPlayer = ({ url, className, autoplay }: Props) => {
  function getVideoId(url: string) {
    // Regular expression pattern to match YouTube video ID
    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(shorts\/)|(watch\?))\??v?=?([^#&?]*).*/;
    if (url) {
      const match = url.match(regExp);
      return match && match[7].length === 11 ? match[7] : false;
    }
    return;
  }

  const videoId = getVideoId(url);
  const finalURL = `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay}&mute=1`

  return (
    <Iframe
      url={finalURL}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      display="block"
      position="relative"
      className={clsx("h-full w-full", className)}
    />
  );
};

export default YTPlayer;
