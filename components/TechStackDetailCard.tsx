import React, { useState, useEffect, ReactNode } from "react"
import Categories from "./Categories"
import { cn } from "@/lib/utils"
import Link from "next/link"
import ReactLogo from "./icons/React"

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
const techStack = [
    {
        "name": "React",
        "slug": "react",
        "logo_url": "https://cdn.example.com/logos/react.svg",
        "short_description": "React is a powerful JavaScript library for building interactive UIs, known for its component-based architecture, strong ecosystem, and widespread industry adoption.",
        "detailed_description": "React is a declarative, component-driven JavaScript library developed by Meta (Facebook) for building user interfaces, especially single-page applications. Its core feature—component-based architecture—enables reusable and modular code. JSX syntax makes templating seamless and intuitive for developers familiar with HTML and JavaScript. React is backed by a vast ecosystem: React Router for routing, Redux and Context API for state management, and tools like Next.js for server-side rendering. Its unidirectional data flow simplifies debugging and makes apps more predictable. React’s popularity stems from its extensive documentation, large community, and job demand. While beginners can grasp the basics quickly, mastering advanced concepts like hooks, context, and performance optimization requires time. React is ideal for dynamic, scalable frontend apps and is widely used by startups and tech giants alike.",
        "official_docs": "https://reactjs.org/docs/getting-started.html",
        "pros": [
            "Massive community support and job demand",
            "Flexible and highly modular architecture",
            "Backed by Meta with continuous updates"
        ],
        "cons": [
            "JSX can be confusing for new developers",
            "Requires understanding of build tools and transpilation",
            "Steeper learning curve for state management and advanced hooks"
        ],
        "learning_curve": "Intermediate",
        "major_use_cases": [
            "Single-page applications (SPA)",
            "Dynamic UIs",
            "Large-scale web apps"
        ],
        "basic_prerequisites": ["JavaScript", "HTML", "CSS"],
        "popularity": "high",
        "logo": <ReactLogo size="lg" />,
        "category_slug": "frontend-development"

    }
]


export default function Page() {
    return (
        <TechStackDetailCard {...techStack[0]} />
    )
}
export function TechStackDetailCard(props: TechStack) {
    return (
        <div className="max-w-7xl  mx-auto px-4 text-sm">
            <div className="grid grid-cols-12 gap-6">
                {/* //Left column */}
                <div className="md:col-span-3 col-span-12">
                    <Side1 name={props.name} logo={props.logo} />
                </div>

                {/* Main */}
                <div className="max-w-3xl col-span-12 md:col-span-6">
                    <Main detailed_description={props.detailed_description} pros={props.pros} cons={props.cons} />
                </div>

                {/* Right Column */}
                <div className="md:col-span-3 col-span-12">
                    <Side2 name={props.name} official_docs={props.official_docs} />
                </div>
            </div>
        </div>
    )
}







function Main(props: TechStack) {
    return (
        <div className="flex flex-col gap-y-4 ">
            <h1 className="text-3xl font-semibold font-mono">
                Overview
            </h1>
            <div className="">
                {props.detailed_description}
            </div>
            <div className="flex md:flex-row flex-col mt-4">
                <div>
                    <div className="font-semibold text-sm text-muted-foreground">Pros:</div>
                    <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground font-semibold">
                        {props.pros?.map((pro, index) => (
                            <li key={index} className="break-words">
                                {pro}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <div className="font-semibold text-sm text-muted-foreground">Cons:</div>
                    <ul className="list-disc pl-5 space-y-1 text-xs text-muted-foreground font-semibold">
                        {props.cons?.map((con, index) => (
                            <li key={index} className="break-words">
                                {con}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    )
}

function Side1({ name, logo }: TechStack) {
    return (
        <nav
            aria-label="Tech Details"
            className="text-sm sticky top-20 flex justify-end overflow-auto pr-4 "
        >
            <ul className="space-y-1 flex  text-4xl">
                <li className="">
                    {logo}
                </li>
                <li>
                    {name}
                </li>

            </ul>
        </nav>
    )
}

function Side2(props: TechStack) {
    return (
        <nav
            aria-label="Tech Details"
            className="text-sm sticky top-20 overflow-clip pr-4 text-gray-400 font-medium"
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