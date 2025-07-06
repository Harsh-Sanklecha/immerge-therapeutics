import { cn } from "@/lib/utils/cnHelper";
import vtest from '@/public/vtest2.png'

type VideoProps = React.ComponentProps<"video"> & {
  src: string;
  className?: string;
};

const Video = ({ src, className, ...props }: VideoProps) => {
  return (
    <video 
    autoPlay
    poster={vtest.src}
    controls className={cn("w-full h-[189px] md:h-[547px] rounded-xl md:rounded-3xl object-cover", className)} {...props}>
      <source src={src} type="video/mp4" />
      Your browser does not support HTML video.
    </video>
  );
};

export default Video;
