import React, { useEffect, useRef, useState } from "react";
import Typography from "./typography";
import imgCarousel from "@/assets/ourExperts/imgCarousel.png";
import Image from "next/image";
import arrow from "@/assets/ourExperts/arrow1.svg";
import Link from "next/link";

type Slide = {
  // image:string;
  description: string;

  source: string;
  title: string;
  id:string;
};

type CarouselProps = {
  slides: Slide[];
  className?: string;
};

const ImageCarousel: React.FC<CarouselProps> = ({ slides, className }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState<number | null>(null);
  const [scrollLeft, setScrollLeft] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);

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
        className={` ${className} slide-container lg:w-  flex gap-[16px]  overflow-x-scroll overflow-y-hidden `}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide flex flex-col  lg:flex-row h-full lg:h-[331px] w-[312px] lg:w-[720px] cursor-pointer rounded-[12px]`}
          >
            <div className="w-[312px] h-[231px]  lg:w-[240px] lg:h-[331px] relative rounded-t-[12px]">
              <Image
              unoptimized
              quality={100}
                src={slide.source}
                style={{objectFit:"cover"}}
                width={240}
                height={331}
                alt="carousel image"
                className="rounded-t-[12px] lg:rounded-l-[12px] w-[312px] h-[231px]  lg:w-[240px] lg:h-[331px]"
              />
            </div>
            <div className="bg-white p-[24px] w-[312px] lg:w-[480px] h-full flex flex-col justify-evenly ">
              <Typography className="text-[24px] md:font-[700] md:text-[20px] font-[800] text-black line-clamp-4">
                {slide.title}
              </Typography>
              <div
                dangerouslySetInnerHTML={{
                  __html: slide.description,
                }}
                className="relative text-[16px] md:text-[18px] font-[400] line-clamp-4"
              />

              <Link href={`case-studies/${slide.id}` || ""} 
               className="flex py-[8px] px-[14px] mt-[24px] gap-[4px] hover:font-[900] border border-[#E3E3E3] cursor-pointer w-[188px] rounded-[40px] items-center justify-center">
                <Typography className="text-[16px] md:text-[16px] font-[600] text-[#282828] hover:font-[500]">
                  Read Case Study
                </Typography>
                <Image
                  src={arrow}
                  width={20}
                  height={20}
                  alt="read case study arrow"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
