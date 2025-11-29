import Link from "next/link";
import RightArrow from "./icons/RightArrow";
import { Button } from "./ui/button";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import OptimizedTechImage from "./OptimizedImages";

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
  logo?: string
  logo_url?: string
  short_description: string
  official_docs: string
  popularity?: string
  major_use_cases: string[]
}

export function TechStackCard({ id, name, short_description, slug, logo_url, major_use_cases, official_docs ,category_slug}: TechStack) {
  return (
    <CardSpotlight className="h-full w-full flex flex-col justify-between backdrop-blur-sm bg-gradient-to-b from-black/30 to-black/40 border-none">
      <div className="flex-grow p-2 pt-0">
        <div className="flex justify-between items-center text-4xl text-center gap-2">
          <p className="font-medium relative z-20 text-white text-3xl tracking-tight">
            {name}
          </p>
          <OptimizedTechImage 
            logoUrl={logo_url}
            name={name}
            size="large"
            className="w-14 h-14 flex-shrink-0 hover:scale-110 transition-transform duration-200"
          />
        </div>
        <div className="text-neutral-100 text-sm mt-6 relative z-20 line-clamp-4 leading-relaxed">
          <p>{short_description}</p>
        </div>
        <div>
          {major_use_cases && major_use_cases.length > 0 && (
            <ul className="flex flex-wrap gap-2 mt-6 overflow-y-auto max-h-28">
              {major_use_cases.map((usecases, index) => (
                <div 
                  className="inline-flex justify-center items-center text-center rounded-md 
                  border border-white/10 px-3 py-1 text-xs bg-white/5 backdrop-blur-sm
                  text-white/90 font-medium break-words max-w-full hover:bg-white/10 transition-colors" 
                  key={index}
                >
                  <li className="inline-flex">{usecases}</li>
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="mt-4 flex justify-between gap-2 font-sans tracking-tight w-full p-2">
          <Link 
              href={`/category/${category_slug}/${slug}`}
              rel="noopener noreferrer"
              className="w-1/2">
            <Button variant={'default'}
              className="inline-flex items-center w-full h-11 cursor-pointer transition-all duration-300 
              hover:-translate-y-0.5 hover:shadow-lg text-gray-800 hover:bg-white/95 focus-visible:ring-1 
              bg-white/90 font-medium relative rounded-lg group"
            >
              <span className="mx-auto font-medium">Explore</span>
              {/* <span className="absolute right-3 transition-transform duration-300 group-hover:translate-x-1">
                <RightArrow />
              </span> */}
            </Button>
          </Link>
          <Link
            href={official_docs}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2"
          >
            <Button
              className="inline-flex items-center border border-white/10 bg-white/5 w-full h-11 
              focus-visible:ring-1 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 
              cursor-pointer font-medium text-white rounded-lg group backdrop-blur-sm"
            >
              <span className="mx-auto font-medium">Documentation</span>
              {/* <span className="absolute right-3 transition-transform duration-300 group-hover:translate-x-1">
                <RightArrow/>
              </span> */}
            </Button>
          </Link>
        </div>

    </CardSpotlight>
  )
}