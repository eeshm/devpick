'use client'
import React, { useState } from "react";
import Image from "next/image";
export default function Hero() {
    const [searchItem, setSearchItem] = useState("")
    
    return (
        <div className="items-center mt-10 flex flex-col gap-y-3 font-grostek">
            <h1 className="text-4xl md:text-5xl font-medium  tracking-tight text-center">
                Choose your tech stack
            </h1>
            <p className="text-center max-w-md font-sans text-sm px-4 md:px-0 ">
                Check out out different categories, look at the pros and cons, and compare your options before making a choice.</p>
        </div>
    )
}