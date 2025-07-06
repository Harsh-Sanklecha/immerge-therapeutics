import bookbg2 from "@/assets/book-demoPage/bookbggrp2.png"
import Link from "next/link"
import Typography from "../ui/typography"
import arrow from "@/assets/book-demoPage/diaarrow.png"
import linkArrow from "@/assets/icons/LinkArrow.png";
import Image from "next/image"
import { useState } from "react";

const DiveDeeper = () => {
    const [hovered, setHovered] = useState(false);
  return (
    <div
    className='bg-no-repeat w-full h-full mb-[30px]'
    style={{
        backgroundImage: ` url(${bookbg2.src})`,
        backgroundPosition: " ",
        top: '50%',
        left: '50%',
        
    }}
    >
        <div className="text-center max-w-[531px] px-[25px] items-center mx-auto py-[74px]">
            <Typography variant="subh">Dive Deeper into VerityXR&apos;s Features</Typography>
            <p className="text-[18px] font-[400] text-[rgba(107, 107, 107, 1)] mt-[18px] mb-[40px]">
                Curious about what makes VerityXR unique? Click here to 
                explore the detailed features of our AR-driven solutions 
                and how they can transform your physiotherapy sessions
            </p>
            <Link href="/product"
             onMouseEnter={() => setHovered(true)}
             onMouseLeave={() => setHovered(false)}
            style={{
                 backgroundColor: "white", 
                 transition: "backgroundColor 0.8s ease-in"
            }}
            className="gradient-div flex gap-[16px] border border-[rgba(221, 221, 221, 1)] rounded-[40px] bg-white w-[232px] items-center justify-center mx-auto p-[12px]"
            >
           <span className="text-[18px] font-[600]">Explore features</span>
            {
                hovered ? 
                <Image 
                src={linkArrow}
                alt="button icon"
                width={32}
                height={32} /> :
                <Image 
                src={arrow}
                alt="button icon"
                width={32}
                height={32} />
            }
            </Link>
        </div>
    </div>
  )
}

export default DiveDeeper