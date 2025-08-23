'use client'
import React, { useState } from "react";
import { Button } from "./ui/button";
import MarqueeDemo from "./Marquee";
import Link from "next/link";
import { ArrowBigRightDash, ArrowRightFromLine, ArrowRightIcon } from "lucide-react";
export default function Hero() {
    const [searchItem, setSearchItem] = useState("")
    
    return (
        <div className="items-center mt-10 flex flex-col gap-y-3 font-grostek">
            <h1 className="text-5xl md:text-6xl tracking-tight text-center font-extralight">
                Choose your tech stack
            </h1>
            <p className="text-center max-w-md font-sans text-sm px-4 md:px-0 ">
                Check out out different categories, look at the pros and cons, and compare your options before making a choice.
            </p>

        <Link href={'/category'}       
        rel="noopener noreferrer mt-5">
            <Button className="bg-white text-black  text-xs py-6">
                Compare Stacks
                <ArrowRightIcon className="size-3"/>
            </Button>
        </Link>
        <MarqueeDemo />
        </div>
    )
}