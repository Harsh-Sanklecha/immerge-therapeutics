import SucessStoryCard from "../card/SucessStoryCard";
import TrustedAndRecommended from "../home/TrustedAndRecommended";
import Image from "next/image";
import plus from "@/assets/book-demoPage/plusicon.png";
import dummy from "@/assets/blogs/blog-hero-bg.png";
import Chain from "../icons/Chain";
import Console from "../icons/Console";
import bookbg from "@/assets/book-demoPage/bookgrp.png";
import { BookDemo } from "@/types/api/pages/BookDemo";
import { CaseStudies } from "@/types/api/pages/CaseStudies";
import { useForm } from "react-hook-form";
import validator from "validator";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";

const FEATURES_ICONS = [
  {
    icon: Chain,
    iconBorder: "#CABE57",
  },
  {
    icon: Chain,
    iconBorder: "#4BD469",
  },
  {
    icon: Chain,
    iconBorder: "#9FB4FF",
  },
  {
    icon: Console,
    iconBorder: "#FF9F9F",
  },
];

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required!" }),
  email: z.string().min(1, { message: "Email is required!" }).email(),
  phone: z
    .string()
    .min(1, { message: "Phone number is required!" })
    .refine(validator.isMobilePhone),
  institute: z.string(),
});

const BookDemoLanding = ({
  data,
  caseStudies,
}: {
  data: BookDemo;
  caseStudies: CaseStudies;
}) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      institute: "",
    },
  });

  const features = Object.values(
    data.rehab_reimagined_with_technology.points
  ).map(({ heading, description }, index) => ({
    title: heading,
    description,
    ...FEATURES_ICONS[index],
  }));

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { name, email, phone, institute } = values;
    console.log(values);
    const payload = {
      name,
      email,
      phone,
      "Institute Name": institute,
    };
    const url = process.env.NEXT_PUBLIC_APPSCRIPT_URL;

    if (!url) return;
    try {
      setLoading(true);
      await axios.post(url, payload, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative bg-no-repeat"
      //   style={{
      //     backgroundImage: ` url(${bgimg.src})`,
      //     backgroundPosition: "top 0  left 50% ",
      //   }}
    >
      <div className="h-full w-[90vw] md:w-[85vw] mx-auto items-center flex flex-col">
        <section className="min-h-screen w-full pt-[32px] md:pt-[69px] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-[40px]">
          <div className="w-full lg:w-1/2 max-w-[542px]">
            <h1 className="text-[24px] md:text-[40px] text-[#282828] font-extrabold">
              {data.hero.heading}{" "}
            </h1>
            <p className="text-[#6B6B6B] text-[16px] md:text-[20px] font-[400] mt-[24px] mb-[40px]">
              {data.hero.description}{" "}
            </p>
            <div className="flex flex-col gap-[16px] pb-[32px] lg:pb-0">
              {Object.values(data.hero.features).map((feature, index) => (
                <div key={index} className="flex gap-[8px]">
                  <Image src={plus} width={24} height={24} alt="plus icon" />
                  <p className="text-[16px] md:text-[20px] text-[#6B6B6B] font-[400]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 max-w-[551px] border border-[rgba(0, 0, 0, 0.13)] rounded-[12px] px-[24px] pt-[22px] bg-[#FFFFFF] z-30 h-full items-center">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-[24px] p-[10px]"
            >
              <div className="flex flex-col gap-[6px]">
                <label className="font-[400] text-[16px] md:text-[18px] text-[rgba(79, 79, 79, 1)]">
                  Name
                </label>
                <input
                  {...form.register("name")}
                  className="max-w-[458px] px-2 border border-[rgba(0, 0, 0, 0.13)] rounded-[12px] py-[7px] px=[16px]"
                />
                <p className="text-[0.8rem] font-medium text-destructive">
                  {form.formState.errors.name &&
                    form.formState.errors.name.message}
                </p>
              </div>

              <div className="flex flex-col gap-[6px]">
                <label>Physiotherapy Institute/ Hospital Name</label>
                <input
                  {...form.register("institute")}
                  className="max-w-[458px] px-2 border rounded-[12px] py-[7px] px=[16px]"
                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.13)",
                  }}
                />
                <p className="text-[0.8rem] font-medium text-destructive">
                  {form.formState.errors.institute &&
                    form.formState.errors.institute.message}
                </p>
              </div>

              <div className="flex flex-col gap-[6px]">
                <label>Email</label>
                <input
                  {...form.register("email")}
                  className="max-w-[458px] px-2 border rounded-[12px] py-[7px] px=[16px]"
                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.13)",
                  }}
                />
                <p className="text-[0.8rem] font-medium text-destructive">
                  {form.formState.errors.email &&
                    form.formState.errors.email.message}
                </p>
              </div>

              <div className="flex flex-col gap-[6px]">
                <label>Phone</label>
                <input
                  {...form.register("phone")}
                  className="max-w-[458px] p-1 border rounded-[12px] py-[7px] px=[16px]"
                  style={{
                    border: "1px solid rgba(0, 0, 0, 0.13)",
                  }}
                />
                <p className="text-[0.8rem] font-medium text-destructive">
                  {form.formState.errors.phone &&
                    form.formState.errors.phone.message}
                </p>
              </div>
              <button
                className="text-[20px] font-extrabold p-[12px] rounded-[40px] mt-[24px] mb-[32px]"
                style={{
                  background:
                    "linear-gradient(90deg, #0151FE 0%, #A6E77D 100%)",
                  boxShadow: "0px 4px 24px 0px rgba(84, 203, 194, 0.44)",
                }}
                disabled={loading || submitted}
              >
                {loading ? "Submitting..." : "Book My Demo"}
              </button>
              <p className="text-center text-green-800">
                {submitted && "Thank you! We will get back to you shortly."}
                {error && "Something went wrong! Try again later."}
              </p>
            </form>
          </div>
        </section>

        <div className="mt-[60px] md:mt-[115px] w-full">
          <TrustedAndRecommended data={data.trustedAndRec} />
        </div>

        <section className="pt-[72px] lg:pt-[130px]  lg:pb-[50px]">
          <h1 className="xl:hidden text-[32px] md:text-[40px] font-extrabold text-center pb-[25px]">
            {data.rehab_reimagined_with_technology.heading}{" "}
          </h1>
          <div className="relative grid lg:grid-cols-2 lg:gap-[100px] xl:gap-x-[470px] xl:gap-y-[95px] place-items-center">
            {features.map((feature) => (
              <div key={crypto.randomUUID()} className="max-w-[371px] ">
                <feature.icon borderColor={feature.iconBorder} />
                <h3 className="text-[18px] font-[600]">{feature.title}</h3>
                <p className="text-[18px] font-[400]">{feature.description}</p>
              </div>
            ))}

            <div
              className="hidden xl:flex absolute z-50 bg-no-repeat  center w-[576px] h-[576px] items-center justify-center mx-auto"
              style={{
                backgroundImage: ` url(${bookbg.src})`,
                backgroundPosition: " ",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <span className="text-[40px] font-extrabold w-[420px] text-center">
                {data.rehab_reimagined_with_technology.heading}{" "}
              </span>
              {/* <Image src={bookbg} alt="banner icon" />  */}
            </div>
          </div>
        </section>

        <section className="mt-[69px] md:mt-[92px] w-full flex flex-col gap-[64px]">
          <SucessStoryCard
            imageUrl={caseStudies[0].acf.data.image || dummy.src}
            title={caseStudies[0].title.rendered}
            description={caseStudies[0].acf.data.about_the_client}
            id={caseStudies[0].id}
          />
        </section>
      </div>

      <div className="h-[309px] w-[79px] lg:h-[792px] lg:w-[792px] rounded-full bg-gradient-radial blur-[100px] absolute -top-[64px] left-[239px] lg:top-[116px] lg:-left-[617px] z-10 " />
      <div className="h-[309px] w-[79px] lg:h-[792px] lg:w-[792px] rounded-full bg-gradient-radial blur-[150px] absolute top-[414px] lg:top-[50px] lg:left-[1202px] z-10" />
    </div>
  );
};

export default BookDemoLanding;
