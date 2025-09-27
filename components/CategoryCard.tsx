"use client"
import { Button } from "./ui/button";
import { CardSpotlight } from "./ui/card-spotlight";
import RightArrow from "./icons/RightArrow";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import OptimizedTechImage from "./OptimizedImages";


interface Categories {
    id?: string;
    name: string;
    description: string;
    slug: string;
    logo?: string;
    created_at?: string;
}

export default function CategoryCard({ name, description, slug, logo }: Categories) {
    return (
        <CardSpotlight className="h-[340px] w-80 overflow-hidden hover:shadow-xl  flex flex-col justify-between group backdrop-blur-sm bg-gradient-to-b from-black/70 to-black/50">
            <div className="flex-grow p-1">
                <div className="flex items-center justify-between gap-2">
                    <h3 className="font-medium relative z-20 text-2xl text-white tracking-tight group-hover:text-white/90 transition-all duration-300">{name}</h3>
                    <OptimizedTechImage
                        logoUrl={logo}
                        name={name}
                        size="large"
                        className="w-16 h-16 flex-shrink-0 rounded-xl p-2.5 bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10"
                    />
                </div>
                <div className="text-neutral-200/90 mt-7 relative z-20 line-clamp-6 text-sm leading-relaxed">
                    <p className="group-hover:text-white transition-colors duration-300">{description}</p>
                </div>
            </div>

            <div className="flex text-sm justify-between gap-2 font-sans w-full">
                <Link href={`/category/${slug}`}
                    rel="noopener noreferrer"
                    className="w-1/2 transition-transform duration-300 hover:scale-[1.02]">
                    <Button variant={"default"}
                        className="w-full cursor-pointer text-gray-800 bg-white/90 hover:bg-white font-medium relative backdrop-blur-sm"
                    >
                        <span className="flex items-center justify-center">
                            Explore
                        </span>
                    </Button>
                </Link>
                <Link href={`/category/${slug}/compare`}
                    rel="noopener noreferrer"
                    className="w-1/2 transition-transform duration-300 hover:scale-[1.02]">
                    <Button variant={"default"}
                        className="w-full cursor-pointer text-white bg-black/50 hover:bg-black font-medium relative backdrop-blur-sm"
                    >
                        <span className="flex items-center justify-center gap-1">
                            Compare
                        </span>
                    </Button>
                </Link>
            </div>
        </CardSpotlight>
    );
}
