'use client'
import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
export default function Hero() {
    const [searchItem, setSearchItem] = useState("")
    
    return (
        <div className="items-center mt-10 flex flex-col gap-y-3 pt-10 font-grostek">
            <h1 className="text-5xl md:text-6xl tracking-tight text-center ">
                Choose your tech stack
            </h1>
            <p className="text-center max-w-md font-sans font-medium text-sm px-4 md:px-0 ">
                Check out out different categories, look at the pros and cons, and compare your options before making a choice.
            </p>

        <Link href={'/category'}       
        rel="noopener noreferrer ">
            <div className="mt-5">
            <Button className="bg-white py-6 text-black text-base rounded-sm font-medium cursor-pointer">
                <span className="px-2 flex font-medium">Compare Stacks
                {/* <ArrowRightIcon className="size-3 ml-1 mt-1"/> */}
                </span>
            </Button>
            </div>
        </Link>
        </div>
    )
}