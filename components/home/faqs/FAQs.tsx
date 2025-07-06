import Typography from "@/components/ui/typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Home } from "@/types/api/pages/Home";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils/cnHelper";
import { Minus, Plus } from "lucide-react";

const FAQ = ({
  index,
  question,
  answer,
}: {
  index: number;
  question: string;
  answer: string;
}) => {
  const ref = useRef<HTMLButtonElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  const toggleIcon = (prevDataState: string) => {
    if (prevDataState === "closed") {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const prevDataState = e.currentTarget.getAttribute("data-state");
    if (prevDataState) {
      toggleIcon(prevDataState);
    }
  };

  // useEffect(() => {
  //   if (ref.current) {
  //     const prevDataState = ref.current.getAttribute("data-state");
  //     console.log(prevDataState)
  //     if (prevDataState) {
  //       toggleIcon(prevDataState);
  //     }
  //   }
  // }, [ref]);
  return (
    <AccordionItem value={index.toString()}>
      <AccordionTrigger
        ref={ref}
        onClick={handleClick}
        className={cn(
          "text-[18px] md:text-[20px]",
          isOpen ? "md:font-bold" : "font-normal  md:font-medium"
        )}
      >
        {question}{" "}
        {isOpen ? (
          <Minus className="h-6 w-6 shrink-0 transition-transform duration-200" />
        ) : (
          <Plus className="h-6 w-6 shrink-0 transition-transform duration-200" />
        )}
      </AccordionTrigger>
      <AccordionContent className="text-[16px] font-[400] text-[#6B6B6B]">
        {answer}{" "}
      </AccordionContent>
    </AccordionItem>
  );
};

const FAQs = ({ data }: { data: Home["faqs"] }) => {
  const FAQs = Object.values(data.faq);

  return (
    <>
      <Typography
        variant="h3"
        component="h3"
        className="font-extrabold text-[32px] md:text-[40px] mb-10 text-left md:text-center"
      >
        {data.heading}
      </Typography>
      <Accordion type="multiple"  className="space-y-2">
        {FAQs.map(({ question, answer }, index) => (
          <FAQ key={index} index={index} question={question} answer={answer} />
        ))}
      </Accordion>
    </>
  );
};

export default FAQs;
