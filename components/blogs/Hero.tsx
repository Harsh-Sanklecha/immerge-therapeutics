import Image from "next/image";
import IconButton from "../button/IconButton";
import bg from "@/assets/blogs/blog-hero-bg.png";
import Rectangle from "../ui/Rectangle";
import MailchimpSubscribe, { EmailFormFields } from "react-mailchimp-subscribe";

const url = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

const Hero = () => {
  let email: HTMLInputElement | null;
  const submit = (subscribe: (data: EmailFormFields) => void) =>
    email &&
    email.value.indexOf("@") > -1 &&
    subscribe({
      EMAIL: email.value,
    });

  return (
    <div className="px-6 md:pt-28 md:px-[120px] flex md:min-h-screen md:gap-x-20 md:justify-between flex-col lg:flex-row gap-y-10">
      <div className="flex flex-col gap-y-3 lg:w-[45%] w-full pt-20 relative">
        <Rectangle className="h-[40px] w-[43px] absolute top-8 right-0 md:block hidden" />

        <h1 className="font-bold md:text-[56px] text-[40px] text-[#282828]">
          Blogs
        </h1>
        <p className="text-lg md:text-[20px] text-brand_gray-400">
          Get the latest updates on healthcare tech right in your inbox and stay
          ahead of your competitors.
        </p>

        {url && (
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    submit(subscribe);
                  }}
                  className="bg-[#F4F4F4] md:w-[504px] w-full h-[64px] rounded-[41px] mt-5 pl-8 pr-2 flex items-center justify-between"
                >
                  <input
                    className="h-12 outline-none border-none md:w-72 w-28 bg-transparent"
                    placeholder="Enter Email"
                    type="email"
                    spellCheck="false"
                    // @ts-ignore
                    ref={(node) => (email = node)}
                    required
                  />
                  <IconButton className="h-[48px] gap-x-1 md:text-base text-[15px]">
                    Subscribe
                  </IconButton>
                </form>
                {status === "sending" && (
                  <div>sending...</div>
                )}
                {status === "error" && (
                  <div
                    className="text-red-500"
                    dangerouslySetInnerHTML={{ __html: message }}
                  />
                )}
                {status === "success" && (
                  <div
                    className="text-green-800"
                    dangerouslySetInnerHTML={{ __html: message }}
                  />
                )}
              </>
            )}
          />
        )}
      </div>
      <div className="lg:w-[45%] w-full">
        <Image
          src={bg}
          alt="bg"
          className="md:w-[600px] w-[334px] md:h-[489px] h-[245px] md:ml-auto mx-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
