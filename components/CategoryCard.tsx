"use client"
import { Button } from "./ui/button";
import { CardSpotlight } from "./ui/card-spotlight";
import RightArrow from "./icons/RightArrow";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";


interface Categories {
    id?: string;
    name: string;
    description: string;
    slug: string;
    logo?:string;
    created_at?: string;
}

export default function CategoryCard({ name, description, slug, logo }: Categories) {
    return (
        <CardSpotlight className="h-80 w-80 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
            <div className="flex-grow">
            <div className="flex items-center text-2xl">
                <p className="font-semibold relative z-20 mt-2 text-white">{name}</p>
                {logo}
            </div>
            <div className="text-neutral-200 mt-4 relative z-20 line-clamp-7 text-sm">
                <p>{description}</p>
            </div>
            </div>


            <div className="mt-5 flex text-sm justify-between gap-2 font-sans tracking-tight w-full">
                <Link href={`/category/${slug}`}
                 rel="noopener noreferrer"
                 className="w-1/2">
                    <Button variant={"default"}
                        className="w-full  cursor-pointer text-gray-800  bg-gray-100 font-normal relative"
                >
                        <span className="flex pl-4">explore
                            <ArrowUpRight className="size-4 mt-1 ml-1"/>
                        </span>
                    </Button>
                </Link>
                <Link href={`/category/${slug}/compare`}
                 rel="noopener noreferrer"
                 className="w-1/2">
                    <Button variant={"default"}
                        className="w-full cursor-pointer text-white bg-black/80 font-normal relative"
                >
                        <span className="flex pl-4">compare
                            <ArrowUpRight className="size-4 mt-1 ml-1"/>
                        </span>
                    </Button>
                </Link>
            </div>
        </CardSpotlight>
    ); 
}
