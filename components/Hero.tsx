'use client'
import React,{useState} from "react";

import Image from "next/image";
export default function Hero(){

//   const stats = [
//     { label: 'Tech Stacks', value: '50+', icon: <Code className="w-5 h-5" /> },
//     { label: 'Categories', value: '4', icon: <Database className="w-5 h-5" /> },
//     { label: 'Comparisons', value: '∞', icon: <TrendingUp className="w-5 h-5" /> },
//     { label: 'Developers', value: '1K+', icon: <Users className="w-5 h-5" /> }
//   ]

const[searchItem,setSearchItem]=useState("")

return(
    <div className="items-center mt-5 flex flex-col gap-y-3">
        <h1 className="text-5xl md:text-5xl  font-seminbold  font-opensans tracking-tight text-center">
        Find Your Perfect Tech Stack
        </h1>
        <p className="text-center max-w-md tracking-tight">
            Browse by category, explore pros & cons, and compare options before deciding
        </p>
        <div className="flex flex-col items-center justify-center mt-9">
        </div>
    </div>
)
}