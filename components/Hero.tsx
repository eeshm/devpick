'use client'
import React, { useState } from "react";

import Image from "next/image";
export default function Hero() {

    //   const stats = [
    //     { label: 'Tech Stacks', value: '50+', icon: <Code className="w-5 h-5" /> },
    //     { label: 'Categories', value: '4', icon: <Database className="w-5 h-5" /> },
    //     { label: 'Comparisons', value: '∞', icon: <TrendingUp className="w-5 h-5" /> },
    //     { label: 'Developers', value: '1K+', icon: <Users className="w-5 h-5" /> }
    //   ]

    const [searchItem, setSearchItem] = useState("")

    return (
        <div className="items-center mt-10 flex flex-col gap-y-3 font-grostek">
            <h1 className="text-4xl md:text-5xl font-medium  tracking-tight text-center">
                Find Your Perfect Tech Stack
            </h1>
            <p className="text-center max-w-md font-sans px-4 md:px-0 text-lg">
                Check out out different categories, look at the pros and cons, and compare your options before making a choice.</p>
        </div>
    )
}