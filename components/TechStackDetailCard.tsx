import React, { useState, useEffect, ReactNode } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import ReactLogo from "./icons/React"
import { Clock } from "lucide-react"

interface TechStack {
    id?: string
    name?: string
    slug?: string
    category_slug?: string
    logo?: string | ReactNode
    logo_url?: string
    short_description?: string
    detailed_description?: string
    official_docs?: string
    learning_curve?: string
    popularity?: string
    pros?: string[]
    cons?: string[]
    major_use_cases?: string[]
    basic_prerequisites?: string[]
}

export function TechStackDetailCard(props: TechStack) {
    return (
        <div className="max-w-7xl  mx-auto px-4">
            <div className="grid grid-cols-12 gap-6">
                {/* //Left column */}
                <div className="md:col-span-3 col-span-6">
                    <Side1 name={props.name} logo={props.logo} basic_prerequisites={props.basic_prerequisites}  learning_curve={props.learning_curve} popularity={props.popularity}/>
                </div>

                {/* Main */}
                <div className="max-w-3xl col-span-12 md:col-span-6">
                    <Main detailed_description={props.detailed_description} pros={props.pros} cons={props.cons} major_use_cases={props.major_use_cases} />
                </div>

                {/* Right Column */}
                <div className="md:col-span-3 col-span-6">
                    <Side2 name={props.name} official_docs={props.official_docs} />
                </div>
            </div>
        </div>
    )
}





function Main(props: TechStack) {
    return (
        <div className="flex flex-col gap-y-4 ">
            <h1 className="text-3xl font-semibold font-mono underline">
                Overview
            </h1>
            <div className="text-sm">
                {props.detailed_description}
            </div>

            {/* Pros and cons */}
            {/* Pros and cons */}
            <div className="flex flex-col mt-5">
            <h1 className="text-3xl font-semibold font-mono underline mb-2 tracking-tighter">Pros & Cons</h1>
            <div className="flex md:flex-row flex-col gap-4">
                {/* Pros Section */}
                <div className="flex-1 rounded-lg shadow-md">
                    <div className="font-semibold mb-1">Pros:</div>
                    <ul className="list-disc pl-5 text-sm font-medium">
                        {props.pros?.map((pro, index) => (
                            <li key={index} className="hover:bg-black/40 transition-colors py-1 px-1 text-muted-foreground">
                                {pro}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Cons Section */}
                <div className="flex-1 rounded-lg shadow-md">
                    <div className="font-semibold mb-1">Cons:</div>
                    <ul className="list-disc pl-5  text-sm font-medium">
                        {props.cons?.map((con, index) => (
                            <li key={index} className="hover:bg-black/40 transition-colors py-1 px-1 text-muted-foreground">
                                {con}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            </div>


            {/* Major Use Cases */}
            <div className="flex flex-col mt-5 ">
                <h1 className="text-3xl font-semibold font-mono underline mb-2">Major Use Cases</h1>
                {props.major_use_cases?.map((useCase, index) => (
                    <ul key={index} className="flex-1 shadow-md rounded-lg list-disc pl-7">
                        <li className="font-semibold text-sm py-3 text-muted-foreground">{useCase}</li>
                    </ul>
                ))}
            </div>


        </div>
    )
}

function Side1({ name, logo, basic_prerequisites,learning_curve,popularity }: TechStack) {
    const getDifficultyColor = (level?: string) => {
    if (!level) return 'text-gray-400'
    if (level == "Intermediate") return 'text-yellow-600'
    if (level == "Hard") return 'text-red-600'
    return 'text-green-500'
  }
    return (
        <nav
            aria-label="Tech Details"
            className="sticky top-0 flex flex-col md:items-end px-4 space-y-3 text-sm"
        >
            {/* Header Section */}
            <div className="flex items-center gap-2 text-4xl">
                <span>{logo}</span>
                <span className="font-mono font-medium">{name}</span>
            </div>

            {/* Prerequisites Section */}
            <div className="">
                <h2 className="uppercase underline md:text-right tracking-wide px-2.5">
                    Prerequisites
                </h2>
                <div className="flex flex-wrap md:justify-end gap-1">
                    {basic_prerequisites?.map((prerequisite, index) => (
                        <span
                            key={index}
                            className="bg-white bg-gradient-to-r from-indigo-700 to-red-700 bg-clip-text text-transparent py-0.5 px-2.5 shadow-lg rounded-sm text-xs font-semibold transition-colors"
                        >
                            {prerequisite}
                        </span>
                    ))}
                </div>
            </div>

            <div className={`px-2.5 flex gap-1 text-gray-200 font-bold`}>
                <span>Popularity: </span>
                <span className="capitalize">{popularity}</span>
            </div>

            <div className={`px-2.5 flex ${getDifficultyColor(learning_curve)}`}>
                <Clock className="size-4 pt-1"/>
                {learning_curve}
            </div>


        </nav>
    );
}


function Side2(props: TechStack) {
    return (
        <nav
            aria-label="Quick Links"
            className="text-sm sticky top-0 overflow-clip gap-2 px-4 py-3  text-gray-400 font-medium"
        >
            <div className="space-y-1 flex max-w-max flex-col">
                <div className="pb-2" >
                    Quick Links
                </div>
                <div className="inline-flex  hover:text-white border-b">
                    {props.official_docs !== undefined && props.official_docs !== "" && (
                        <Link href={props.official_docs}>
                            Offical docs
                        </Link>
                    )}
                </div>

                <div className="inline-flex hover:text-white border-b">
                    Github
                </div>
            </div>
        </nav>
    )
}