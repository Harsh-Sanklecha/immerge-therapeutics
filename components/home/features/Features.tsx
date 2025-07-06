import Chain from "@/components/icons/Chain";
import Typography from "../../ui/typography";
import Feature from "./Feature";
import Console from "@/components/icons/Console";
import featureImg from "@/assets/features.png";
import Image from "next/image";
import Pill from "@/components/pill/Pill";
import { Home } from "@/types/api/pages/Home";
import Settings from "@/components/icons/Settings";
import Controller from "@/components/icons/Controller";
import new12 from "@/public/new12.png";
import { splitSentenceByFocusKeyword } from "@/lib/utils/splitSentenceByFocusKeyword";

const Features = ({
  data,
}: {
  data: Home["maximise_your_physiotherapy_impact"];
}) => {
  const modifiedData = Object.values(data.features).map((item) => {
    const { firstWord, lastWord } = splitSentenceByFocusKeyword(
      item.description,
      item.focus_keyword
    );
    return {
      firstWord,
      focus_keyword: item.focus_keyword,
      lastWord,
    };
  });
  return (
    <>
      <div className="flex flex-col md:gap-10 md:flex-row md:pl-[120px] md:pr-0 px-6">
        <div className="md:w-1/2">
          <Typography
            variant="h1"
            component="h2"
            className="leading-[40px] md:leading-[50px]  md:pt-5 md:mb-20 mb-6 text-[32px] md:text-[40px]"
          >
            Why Recommend <span className="text-gradient">Immerge Therapeutics </span>
          </Typography>
          <div className="md:hidden relative mb-[38px] md:mb-0">
            <div className="bg-[url('/grid-1.png')] h-[258px] w-full absolute top-0 bg-contain"></div>
            <div className="relative h-[287px] w-full ">
              <Image
                src={featureImg}
                fill
                alt="image representing the feature section"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/4 shadow-[inset_0px_-30px_32px_-1px_rgba(255,255,255,255.73)]"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-y-[46px] md:gap-x-[60px] md:gap-y-[47px]">
            <Feature>
              <Console />
              <Feature.Description>
                {modifiedData[0].firstWord}
                <span className="font-bold">
                  {modifiedData[0].focus_keyword}
                </span>
                {modifiedData[0].lastWord}
              </Feature.Description>
            </Feature>
            <Feature>
              <Chain />
              <Feature.Description>
                {modifiedData[1].firstWord}
                <span className="font-bold">
                  {modifiedData[1].focus_keyword}
                </span>
                {modifiedData[1].lastWord}
              </Feature.Description>
            </Feature>
            <Feature>
              <Settings />
              <Feature.Description>
                {modifiedData[2].firstWord}
                <span className="font-bold">
                  {modifiedData[2].focus_keyword}
                </span>
                {modifiedData[2].lastWord}
              </Feature.Description>
            </Feature>
            <Feature>
              <Controller />
              <Feature.Description>
                {modifiedData[3].firstWord}
                <span className="font-bold">
                  {modifiedData[3].focus_keyword}
                </span>
                {modifiedData[3].lastWord}
              </Feature.Description>
            </Feature>
          </div>
        </div>
        <div className="hidden  md:w-1/2 relative md:flex items-end">
          <div className="bg-[url('/grid-1.png')] md:h-[80%] md:max-h-[463px] absolute top-0 md:w-full bg-contain"></div>
          <div className="relative h-[608px] w-full ">
            <Image
              src={data.image || new12}
              fill
              unoptimized
              quality={100}
              alt="image representing the feature section"
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-1/4 md:shadow-[inset_0px_-25px_32px_-1px_rgba(255,255,255,255.73)]"></div>
          </div>
        </div>
      </div>
      <Pill className="mt-[52px] px-2.5 md:px-0 md:mt-[130px]">
        {Object.values(data.advantages).map((stat) => (
          <Pill.Item key={crypto.randomUUID()}>
            <Pill.Title>{stat.split(" ")[0]}</Pill.Title>
            <Pill.Description>
              {stat.substring(stat.indexOf(" ") + 1)}
            </Pill.Description>
          </Pill.Item>
        ))}
      </Pill>
    </>
  );
};

export default Features;
