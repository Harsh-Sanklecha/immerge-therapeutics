import { useEffect, useRef, useState } from "react";
import Typography from "../../ui/typography";
import Card from "./Card";
import { useInView } from "framer-motion";
import { About } from "@/types/api/pages/About";

// const cardContents = [
//   {
//     title: "Extended Reality (XR)",
//     description:
//       "At the heart of VerityXR lies Extended Reality, a fusion of the real and virtual worlds. This blend of physical and digital realms opens up new avenues for pain management and rehabilitation, making each session not just a treatment but an experience.",
//   },
//   {
//     title: "Virtual Reality (VR)",
//     description:
//       " VerityXR transports patients to a world where healing feels less like a chore and more like an adventure. Our VR technology uses engaging, interactive scenarios that help in distraction therapy, reducing the perception of pain and enhancing the overall effectiveness of treatments.",
//   },
//   {
//     title: "Real-time data analytics",
//     description:
//       "Precision is key in physiotherapy, and VerityXR delivers just that with its real-time data analytics, capturing every movement, and offering insights into patient progress.",
//   },
//   {
//     title: "Customizable therapy modules",
//     description:
//       "VerityXR's technology includes customizable therapy modules, enabling physiotherapists to adapt exercises to fit individual needs. This flexibility helps each patient receive personalised care in line with their specific rehabilitation goals.",
//   },
// ];

const TheTech = ({ data }: { data: About }) => {
  const [index, setIndex] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);
  const inView = useInView(divRef);

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % 4);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <div ref={divRef} className="md:px-[120px] px-6">
      <div className="md:max-w-[550px] md:mx-auto">
        <Typography
          variant="h1"
          component="h1"
          className="md:text-[40px] md:leading-[50.4px] text-center text-[28px]"
        >
          {data.tech.tech_title}
          {/* How we make it VerityXR <br /> possible -{" "} */}
          <span className="bg-gradient-to-br from-[#0151FE] via-[#3474fe] to-[#3D3D3D] bg-clip-text text-transparent">
            The Tech
          </span>
        </Typography>
        <Typography className="text-brand_gray-400 md:text-base text-base mt-2 mb-10 md:leading-[24px] text-center">
          {data.tech.tech_description}{" "}
        </Typography>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 relative">
        <Card
          title={data.tech.tech1.title}
          description={data.tech.tech1.description}
          isActive={0 === index}
        />
        <Card
         title={data.tech.tech2.title}
         description={data.tech.tech2.description}
          isActive={1 === index}
        />
        <Card
           title={data.tech.tech3.title}
           description={data.tech.tech3.description}
          isActive={2 === index}
        />
        <Card
           title={data.tech.tech4.title}
           description={data.tech.tech4.description}
          isActive={3 === index}
        />

        <div className="h-[500px] w-[500px] rounded-full bg-gradient-radial blur-[100px] absolute -top-16 -left-[26rem] lg:block hidden" />

        <div className="h-[845px] w-[845px] rounded-full bg-gradient-radial blur-[200px] absolute top-28 -right-[40rem] lg:block hidden" />
      </div>
    </div>
  );
};

export default TheTech;
