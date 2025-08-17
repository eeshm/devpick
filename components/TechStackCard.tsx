import { ReactNode } from "react";
import Link from "next/link";
import RightArrow from "./icons/RightArrow";
import { Button } from "./ui/button";
export type TechStackItem = {
  name: string;
  slug: string;
  logo: string;
  short_description: string;
  major_use_cases: string[];
};
const techStack: TechStackItem[] = [
  {
    "name": "Next.js",
    "slug": "next-js",
    "logo": "dfaa",
    "short_description": "A React-based framework for building fast, SEO-friendly websites and apps. Supports server-side rendering, static site generation, and API routes A React-based framework for building fast, SEO-friendly websites and apps. Supports server-side rendering, static site generation, and API routes.",
    "major_use_cases": ["SEO websites", "Dashboards", "Full-stack React apps"]
  },
  {
    "name": "React",
    "slug": "next-js",
    "logo": "dfad",
    "short_description": "A JavaScript library for building user interfaces using reusable components. Ideal for dynamic, interactive web apps.",
    "major_use_cases": ["SPAs", "Web dashboards", "User interfaces"]
  },
]

import { CardSpotlight } from "@/components/ui/card-spotlight";
import Nextjs from "./icons/Nextjs";
import Angular from "./icons/Angular";
import Vue from "./icons/Vue";
import Nuxt from "./icons/Nuxt";
import Express from "./icons/Express";
import Nestjs from "./icons/Nestjs";
import Django from "./icons/Django";
import Flask from "./icons/Flask";
import Springboot from "./icons/Springboot";
import RubyOnRails from "./icons/Rubyonrails";
import Laravel from "./icons/Laravel";
import Flutter from "./icons/Flutter";
import ReactLogo from "./icons/React";
import SwiftUI from "./icons/SwiftUI";
import Kotlin from "./icons/Kotlin";
import BlitzJs from "./icons/BlitzJS";
import Phoenix from "./icons/Phoenix";



interface Category {
  id: string
  name: string
  slug: string
  description: string
}

interface TechStack {
  id: string
  name: string
  slug: string
  category_slug: string
  logo: string
  logo_url?: string
  short_description: string
  detailed_description: string
  official_docs: string
  learning_curve?: number
  popularity?: number
  pros: string[]
  cons: string[]
  major_use_cases: string[]
  basic_prerequisites: string[]
  created_at: string
  categories?: Category
}

 export default function TechStacks() {
  return (
    <div className="flex flex-col mt-10 items-center justify-center ">
      <h2 className="text-4xl font-light font-opensans mb-6 border-b-2 tracking-tight">Major Tech Stacks - categorie name</h2>
      {techStack && techStack.length>0 &&(
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
        {techStack.map((tech, index) => (
          <TechStackCard
            key={index}
            name={tech.name}
            short_description={tech.short_description}
            logo={tech.logo}
            major_use_cases={tech.major_use_cases || []}
            slug={tech.slug}
          />
        ))}
      </div>
      )}
    </div>
  )
}




export function TechStackCard({ name, short_description, slug, logo, major_use_cases }: TechStackItem) {
  return (
    <CardSpotlight className="h-80 w-80  overflow-hidden  hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between ">
      <div className="flex-grow">
      <div className="flex  justify-between items-center justify- text-4xl text-center">
        <p className="font-normal relative z-20 mt-2 text-white">
          {name}
        </p>
        {logo}
      </div>
      <div className="text-neutral-200 text-sm mt-4 relative z-20 line-clamp-5">
        <p>{short_description}</p>
      </div>
      <div >
        {major_use_cases && major_use_cases.length > 0 && (
          <ul className="flex flex-wrap gap-2 mt-5 overflow-y-auto max-h-28 ">
            {major_use_cases.map((major_use_cases, index) => (
              <div className="inline-flex justify-center items-center text-center rounded-xs 
             border px-2  text-xs bg-black/30
            text-white font-semibold break-words max-w-full">
                <li key={index} className="p-0.5 py-0.5 inline-flex">{major_use_cases}</li>
              </div>
            ))}
          </ul>
        )}
      </div>
      </div>
       
      <Link href={`/tech-stacks/${slug}`}>
        <div className="mt-5">
          <Button variant={"default"}
            className="w-full  cursor-pointer text-xl text-gray-800  bg-gray-100 font-normal relative"
          >
            <span className="mx-auto mb-1 ">know more</span>
            <span className="absolute right-4">
              <RightArrow />
            </span>
          </Button>
        </div>
      </Link>

    </CardSpotlight>
  )
}