import Link from "next/link";
import Logo from "./Logo";
import Facebook from "../icons/social/Facebook";
import Instagram from "../icons/social/Instagram";
import FooterNavMenu from "./FooterNavMenu";
import Typography from "../ui/typography";
import { cn } from "@/lib/utils/cnHelper";
import { LinkedinIcon } from "lucide-react";

const Socials = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex md:gap-6 justify-center md:justify-normal gap-[30px] items-center",
        className
      )}
    >
      <Link target="_blank" href="https://www.facebook.com/verityhealxr">
        <Facebook />
      </Link>
      <Link target="_blank" href="https://www.instagram.com/verityhealxr/">
        <Instagram />
      </Link>
      <Link target="_blank" href="https://www.linkedin.com/company/verityxrheal/">
        <LinkedinIcon color="#051113A1" />
      </Link>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="px-6 py-9 md:py-[64px] md:px-[120px] md:pb-[30px] shadow-gradient bg-white">
      <div className="flex flex-col md:flex-row md:justify-between border-b pb-7 mb-6 border-[#05111324] md:mb-7 md:pb-[44px]">
        <div className="flex md:flex-col md:justify-between">
          <Link href="/">
            <Logo className="md:w-[203px] md:h-[64px] mb-[42px] md:mb-0" />
          </Link>
          <Socials className="hidden md:flex" />
        </div>
        <div className="grid gap-6 md:gap-0 grid-cols-2 md:grid-cols-3 ">
          <FooterNavMenu>
            <FooterNavMenu.Item href="/about" name="About" />
            <FooterNavMenu.Item href="/why-verity" name="Why Verity" />
            <FooterNavMenu.Item href="/case-studies/1" name="Case Study" />
            {/* <FooterNavMenu.Item href="/blogs" name="Blog" /> */}
            <FooterNavMenu.Item href="/faq" name="FAQ" />
          </FooterNavMenu>
          <FooterNavMenu>
            <FooterNavMenu.Item href="/product" name="Product" />
            <FooterNavMenu.Item href="/pain-management-solution" name="Pain Management" />
            <FooterNavMenu.Item
              href="/physiotherapists"
              name="Physiotherapy"
            />
            <FooterNavMenu.Item
              href="/partner"
              name="Partner with Us"
            />
          </FooterNavMenu>
          <FooterNavMenu>
            <FooterNavMenu.Item href="/privacy-policy" name="Privacy Policy" />
            <FooterNavMenu.Item
              href="/terms-and-conditions"
              name=" Terms & Conditions"
            />
          </FooterNavMenu>
        </div>
        <Socials className="md:hidden mt-20 md:mt-0" />
      </div>
      <Typography className="text-[#051113]/50 text-center">
        Copyright©{new Date().getFullYear()}
      </Typography>
    </footer>
  );
};

export default Footer;
