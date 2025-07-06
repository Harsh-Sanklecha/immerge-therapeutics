import linkArrow from "@/assets/icons/LinkArrow.png";
import Image from "next/image";

const LinkArrow = ({ className }: { className?: string }) => {
  return <Image src={linkArrow} alt="link icon" className={className} />;
};

export default LinkArrow;
