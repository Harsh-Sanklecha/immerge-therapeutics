import React, { useRef, useState } from "react";
import Typography from "./typography";
import play from "@/assets/case-study/svgplay.svg";
import pause from "@/assets/case-study/svgpause.svg";
import Image from "next/image";
import { cn } from "@/lib/utils/cnHelper";
import videotest from '@/public/videotest.png'

type Slide = {
  description: string;
  name: string;
  role: string;
  source: string;
};

type CarouselProps = {
  slides: Slide[];
  className?: string;
};

const Carousel: React.FC<CarouselProps> = ({ slides, className }) => {
  const [isPlaying, setIsPlaying] = useState<boolean[]>(
    slides.map(() => false)
  );
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState<number | null>(null);
  const [scrollLeft, setScrollLeft] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);

  const togglePlay = (index: number) => {
    const newIsPlaying = [...isPlaying];
    newIsPlaying[index] = !newIsPlaying[index];
    setIsPlaying(newIsPlaying);

    if (videoRefs?.current[index]) {
      if (videoRefs?.current[index]?.paused) {
        videoRefs?.current[index]?.play().catch((error) => {
          console.log(error, "Video play error");
        });
      } else {
        videoRefs?.current[index]?.pause();
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(sliderRef.current!.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !startX || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX!) * 1.5; // Adjust the multiplier for smoother drag
    sliderRef.current.scrollLeft = scrollLeft! - walk;
  };

  return (
    <div className="">
      <div
        style={{
          scrollBehavior: isDragging ? "auto" : "smooth",
          userSelect: "none",
        }}
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={cn(
          ` slide-container w-[95vw] md:w-[85vw]  px-[4vw]  flex gap-[16px]  overflow-x-scroll overflow-y-hidden `,
          className
        )}
      >
        

{slides.map((slide, index) => (
          <div
            key={index}
            className={`slide mb-2 shadow-lg md:shadow-none flex flex-col  md:flex-row h-full md:h-[420px] w-[312px] md:w-[760px] cursor-pointer rounded-[12px]`}
          >
            <div className="w-[312px]  md:w-[270px] md:h-[420px] relative bg-gray-100">
              {!isPlaying[index] ? (
                <button
                  onClick={() => togglePlay(index)}
                  className="absolute playButton  text-white bottom-0 md:bottom-4 right-10 md:right-4 z-30  hover:scale-125 hover:shadow-md ease-in-out transition-all"
                >
                  <Image src={play} alt="play button" />
                </button>
              ) : (
                <button
                  className="absolute md:bottom-4 bottom-0 right-10 md:right-4 z-30 text-red-500  hover:scale-125 hover:shadow-md ease-in-out transition-all"
                  onClick={() => togglePlay(index)}
                >
                  <Image src={pause} alt="pause button" />
                </button>
              )}
              <video
                poster={videotest.src}
                style={{ objectFit: "cover", width: "100%", height: "100%",objectPosition:" center" }}
                onError={(e) => console.error("Error loading video:", e)}
                ref={(element) => {
                  videoRefs.current[index] = element;
                }}
                className={" h-full w-full md:rounded-l-[12px]"}
              >
                <source src={slide.source} type="video/mp4" />
                Your browser does not support HTML video.
              </video>
            </div>
            <div className="bg-white p-[24px] w-[312px] md:w-[480px] h-full flex rounded-b-[20px] md:rounded-r-[12px] flex-col justify-evenly">
              <span className="hidden md:flex text-[#6B6B6B] text-[40px] w-[10px] h-[34px]">
                {"“"}
              </span>
              <Typography
                variant="subp"
                className="relative text-[16px] md:text-[18px] font-[400] "
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
          </div>
        ))}

      </div>
    </div>
  );
};

export default Carousel;
