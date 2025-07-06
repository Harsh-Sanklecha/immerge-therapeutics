import Typography from "../ui/typography";
import Image from "next/image";
import CTABtn from "../button/CTABtn";
import computer from "@/assets/icons/computer.svg";
import chain from "@/assets/icons/chain.svg";
import strangledThread from "@/assets/icons/strangledThread.svg";
import hourGlass from "@/assets/icons/hourGlass.svg";
import { Home } from "@/types/api/pages/Home";

// const RECOMMENDED_BY = [
//   "100+ Hospitals",
//   "1000+ physiotherapists",
//   "25000+ patients",
//   "2500+ doctors",
// ];

const cards = [
  {
    icon: computer.src,
    content: "Interactive patient experience",
  },
  {
    icon: chain.src,
    content: "Easy to use",
  },
  {
    icon: strangledThread.src,
    content: "Next-gen physiotherapy",
  },
  {
    icon: hourGlass.src,
    content: "24/7 customer support",
  },
];

const BookDemoDetailed = ({
  data,
}: {
  data: Home["loved_and_recommended_by"];
}) => {
  return (
    <div className="mx-2 md:mx-[120px]">
      <div className="relative mx-4 md:mx-[20px] md:min-h-[388px] min-h-72 rounded-[40px] overflow-hidden border border-[#000000]/[0.12]  items-center justify-center flex flex-col gap-y-5">
        <div className="absolute -translate-y-5 inset-0 h-full w-full bg-[#F8F8F8] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:70px_70px] md:hidden" />
        <p className="text-[16px] font-[400] md:text-lg text-[#051113]/[0.55] z-10 pt-[25px]">
          Book your product trial now
        </p>
        <Typography
          variant="h1"
          component="h1"
          className="md:text-[40px] md:leading-[50.4px] text-center mb-10 z-10 text-[28px]"
        >
          Try Immerge Therapeutics{" "}
          {/* <span className="bg-gradient-to-br from-[#0151FE] via-[#3474fe] to-[#3D3D3D] bg-clip-text text-transparent">
            For Free
          </span>{" "} */}
          Now
        </Typography>
        <CTABtn className="gap-x-3 z-10 md:mt-5" />

        <div className="z-30 grid grid-cols-2 md:flex flex-wrap pt-[64px] pb-[40px] gap-[40px] md:gap-[54px] w-full md:w-[50vw] lg:w-[58vw]  mx-0 justify-center">
          {cards.map((item, index) => (
            <div
              key={index}
              className="w-[171px] items-center flex flex-col justify-start gap-[20px]"
            >
              <div className="p-3 bg-[#e6eeff] rounded">
                <Image
                  src={item.icon}
                  alt="icon"
                  width={32}
                  height={32}
                  className=""
                />
              </div>

              <p className="text-center md:text-lg">{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="bg-brand_blue-200 rounded-b-[40px] flex flex-col items-center  mx-4 md:mx-[20px] overflow-hidden pb-[71px]">
        <div className="mt-9 mb-7">
          <Divider />
        </div>
        <Typography className="text-[#0511138C] mb-4">
          Loved and recommended by
        </Typography>
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x w-[302px] gap-1 md:w-full divide-[#05111329] text-center mx-auto items-center justify-center md:gap-[30px]">
          {Object.values(data).map((item, index) => (
            <Typography
              key={index}
              className="text-brand_black-200 text-center text-[16px]"
            >
              <span>{item.value}</span> &nbsp;
              <span>{item.label}</span>
            </Typography>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default BookDemoDetailed;
