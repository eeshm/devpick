import { ReactNode } from "react";
import Link from "next/link";
import RightArrow from "./icons/RightArrow";
import { Button } from "./ui/button";

import { CardSpotlight } from "@/components/ui/card-spotlight";


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
  category_slug?: string
  logo: string
  logo_url?: string
  short_description: string
  official_docs: string
  popularity?: number
  major_use_cases: string[]
}

export function TechStackCard({ id, name, short_description, slug, logo, major_use_cases, official_docs }: TechStack) {
  return (
    <CardSpotlight className="h-full w-full  overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between ">
      <div className="flex-grow">
        <div className="flex  justify-between items-center text-4xl text-center">
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
              {major_use_cases.map((usecases, index) => (
                <div className="inline-flex justify-center items-center text-center rounded-xs 
             border px-2  text-xs bg-black/30
            text-white font-semibold break-words max-w-full">
                  <li key={index} className="p-0.5 py-0.5 inline-flex">{usecases}</li>
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="mt-5 flex justify-between gap-2 font-sans tracking-tight">
          <Button variant={'default'}
            className="inline-flex items-center w-1/2 h-10 cursor-pointer transition hover:-translate-y-0.5 hover:brightness-110 text-gray-800 hover:bg-white focus-visible:ring-1 bg-gray-200 font-medium relative"
          >
        <Link href={`/tech-stacks/${slug}`}>
            <span className="mx-auto mb-1 ">Know more</span>
            <span className="absolute right-2">
              <RightArrow />
            </span>
        </Link>
          </Button>
          <Button
            className="inline-flex items- border-black border-1 bg-black/60 w-1/2 h-10 focus-visible:ring-1 transition hover:-translate-y-0.5 hover:brightness-110 cursor-pointer font-medium  text-white  hover:bg-gray-500  relative"
          >
        <Link href={official_docs}>
            <span className="mx-auto mb-1 ">Docs</span>
            <span className="absolute right-2">
              <RightArrow />
            </span>
        </Link>
          </Button>
      </div>

    </CardSpotlight>
  )
}