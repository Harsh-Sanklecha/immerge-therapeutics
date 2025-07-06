import { useRouter } from "next/router";
import IconButton from "./IconButton";
import { useEffect } from "react";
import { cn } from "@/lib/utils/cnHelper";

const CTABtn = ({ className }: { className?: string }) => {
  const router = useRouter();

  const href = "/book-demo";
  useEffect(() => {
    // Prefetch the page
    router.prefetch(href);
  }, [router]);

  return (
    <IconButton
      onClick={() => router.push(href)}
      className={cn("mt-10 md:mt-14 z-50 mx-auto w-full max-w-[242px] ", className)}
    >
      Book a Demo
    </IconButton>
  );
};

export default CTABtn;
