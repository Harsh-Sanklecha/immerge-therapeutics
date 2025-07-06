import React, { useRef, useState } from 'react'
import Typography from '../ui/typography';
import { cn } from '@/lib/utils/cnHelper';


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
const TextCarousels: React.FC<CarouselProps> = ({ slides, className }) => {

      const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
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
            className={cn(
              ` slide-container w-[95vw] md:w-[85vw]  px-[4vw]  flex gap-[16px]  overflow-x-scroll overflow-y-hidden `,
              
            )}
          >
            
    
    {slides.map((slide, index) => (
              <div
                key={index}
                className={` slide mb-2 shadow-lg hover:shadow-2xl flex flex-col  md:flex-row h-full  xl:h-[380px] w-[312px]  md:w-[700px] cursor-pointer rounded-[12px]`}
              >
               
                <div className="bg-white px-[24px] py-[24px]  w-[312px] md:w-full h-full flex rounded-b-[20px] md:rounded-r-[12px] flex-col justify-evenly">
                  <span className="hidden xl:flex text-[#6B6B6B] text-[40px] w-[10px] h-[36px]">
                    {"“"}
                  </span>
                  <Typography
                    variant="subp"
                    className="relative text-[16px] md:text-[18px] font-[400] "
                  >
                    {slide.description}
                    <span className="hidden xl:flex text-[#6B6B6B] text-[40px] absolute bottom-0 right-5  h-[36px]">
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


export default TextCarousels