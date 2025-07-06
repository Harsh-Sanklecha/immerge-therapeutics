import React, { useRef, useState } from "react";
import Typography from "./typography";
import play from "@/assets/case-study/svgplay.svg";
import pause from "@/assets/case-study/svgpause.svg";
import Image from "next/image";
import { cn } from "@/lib/utils/cnHelper";
import videotest from "@/public/videotest.png";

type Slide = {
  description: string;
  name: string;
  role: string;
  source: string;
  //   y: string; // Add youtubeUrl to Slide type
};

type CarouselProps = {
  slides: Slide[];
  className?: string;
};

const Carousel: React.FC<CarouselProps> = ({ slides, className }) => {
  const [isPlaying, setIsPlaying] = useState<boolean[]>(
    slides.map(() => false)
  );
  const sliderRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLIFrameElement | null)[]>([]);

  const togglePlay = (index: number) => {
    const newIsPlaying = [...isPlaying];
    newIsPlaying[index] = !newIsPlaying[index];

    if (newIsPlaying[index]) {
      videoRefs.current.forEach((ref, idx) => {
        if (ref && idx !== index) {
          ref.contentWindow?.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
          );
        }
      });
    }

    setIsPlaying(newIsPlaying);
  };

  return (
    <div className="">
      <div
        className={cn(
          `slide-container w-[95vw] md:w-[85vw] px-[4vw] flex gap-[16px] overflow-x-scroll overflow-y-hidden `,
          className
        )}
        ref={sliderRef}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide mb-2 shadow-lg md:shadow-none flex flex-col md:flex-row h-full md:h-[420px] w-[312px] md:w-[760px] cursor-pointer rounded-[12px]`}
          >
            <div className="w-[312px] md:w-[270px] md:h-[420px] relative bg-gray-100">
              {/* {!isPlaying[index] ? (
                <button
                  onClick={() => togglePlay(index)}
                  className="absolute playButton text-white bottom-0 md:bottom-4 right-10 md:right-4 z-30 hover:scale-125  ease-in-out transition-all"
                >
                  <Image src={play} alt="play button" />
                </button>
              ) : (
                <button
                  className="absolute md:bottom-4 bottom-0 right-10 md:right-4 z-30 text-red-500 hover:scale-125  ease-in-out transition-all"
                  onClick={() => togglePlay(index)}
                >
                  <Image src={pause} alt="pause button" />
                </button>
              )} */}

              {!isPlaying[index] && (
                <iframe
                  width="100%"
                  height="100%"
                  // src="https://www.youtube.com/embed/N5h8PeOwc4o?si=3HnEimm1o98Or75T&amp;controls=0&amp;start=8"
                  src="https://youtube.com/embed/4T5ifM8-mnU?si=mnMKDQdpp2FRKSPF&amp;controls=0&amp;start=8"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  ref={(element) => {
                    videoRefs.current[index] = element;
                  }}
                  className="rounded-l-[12px]"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    objectPosition: " center",
                  }}
                ></iframe>
                // <iframe
                //   width="100%"
                //   height="100%"
                // //   src={`${slide.source}?autoplay=0&controls=0`}
                //   src="https://youtu.be/N5h8PeOwc4o?si=K4SBbZcvBkfxnVuU&amp;controls=0&amp;start=5"
                //   title="YouTube video player"

                //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                //   referrerPolicy="strict-origin-when-cross-origin"
                //   allowFullScreen
                //   ref={(element) => {
                //     videoRefs.current[index] = element;
                //   }}
                //  style={{ objectFit: "cover", width: "100%", height: "100%",objectPosition:" center" }}
                // ></iframe>
              )}
            </div>
            {slide.name && slide.description && (
              <div className="bg-white p-[24px] w-[312px] md:w-[480px] h-full flex rounded-b-[20px] md:rounded-r-[12px] flex-col justify-evenly">
                <span className="hidden md:flex text-[#6B6B6B] text-[40px] w-[10px] h-[34px]">
                  {"“"}
                </span>
                <Typography
                  variant="subp"
                  className="relative text-[16px] md:text-[18px] font-[400]"
                >
                  {slide.description}
                  <span className="hidden md:flex text-[#6B6B6B] text-[40px] absolute bottom-0 right-5  h-[10px]">
                    {"”"}
                  </span>
                </Typography>

                <div className="flex flex-col pt-[10px] ">
                  <Typography className="font-[700] text-[#282828]">
                    {slide.name}
                  </Typography>
                  <Typography className="text-[14px] md:text-[14px]">
                    {slide.role}
                  </Typography>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
