import Typography from "../ui/typography";
import CTABtn from "../button/CTABtn";

type BookDemoProps = {
  className?: string;
  showDetailed?: boolean;
};

const BookDemo = ({ className }: BookDemoProps) => {
  return (
    <div className="relative mx-4 md:mx-[120px] md:h-[388px] h-72 rounded-[40px] overflow-hidden border border-[#000000]/[0.12] flex flex-col items-center justify-center space-y-5">
      <div className="absolute -translate-y-5 inset-0 h-full w-full bg-[#F8F8F8] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:70px_70px] md:hidden" />
      <p className="text-[16px] font-[400] md:text-lg text-[#051113]/[0.55] z-10">
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
      <CTABtn className="gap-x-3 z-10" />
    </div>
  );
};

export default BookDemo;
