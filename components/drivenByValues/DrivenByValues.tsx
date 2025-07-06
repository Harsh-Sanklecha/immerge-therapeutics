import FiveCardsComponent from "../card/FiveCardsComponent";
import Typography from "../ui/typography";


// const data = [
//   {
//     icon: icon1,
//     alter: "innovation icon",
//     title: "Innovation",
//     description:
//       "We push the boundaries of virtual reality and extended reality, crafting immersive physiotherapy experiences that redefine and accelerate rehabilitation.",
//   },
//   {
//     icon: icon1,
//     alter: "innovation icon",
//     title: "Innovation",
//     description:
//       "We push the boundaries of virtual reality and extended reality, crafting immersive physiotherapy experiences that redefine and accelerate rehabilitation.",
//   },
//   {
//     icon: icon1,
//     alter: "innovation icon",
//     title: "Innovation",
//     description:
//       "We push the boundaries of virtual reality and extended reality, crafting immersive physiotherapy experiences that redefine and accelerate rehabilitation.",
//   },
//   {
//     icon: icon1,
//     alter: "innovation icon",
//     title: "Innovation",
//     description:
//       "We push the boundaries of virtual reality and extended reality, crafting immersive physiotherapy experiences that redefine and accelerate rehabilitation.",
//   },
//   {
//     icon: icon1,
//     alter: "innovation icon",
//     title: "Innovation",
//     description:
//       "We push the boundaries of virtual reality and extended reality, crafting immersive physiotherapy experiences that redefine and accelerate rehabilitation.",
//   },
// ];

type DrivenByValuesProps = {
  heading: string;
  values: {
    icon: any;
    alter: string;
    title: string;
    description: string;
  }[];
};

const DrivenByValues = ({ heading, values }: DrivenByValuesProps) => {
  return (
    <div className="w-full pb-[60px] items-center flex flex-col justify-center">
      <Typography
        variant="subh"
        className=" items-center mx-auto text-center pt-[82px] max-w-[850px]"
      >
        {heading}
      </Typography>

      <FiveCardsComponent data={values} />
    </div>
  );
};

export default DrivenByValues;
