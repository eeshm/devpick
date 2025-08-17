"use client"
import { Button } from "./ui/button";
import { CardSpotlight } from "./ui/card-spotlight";
import RightArrow from "./icons/RightArrow";
import Link from "next/link";


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
            <div >
            <div className="flex items-center text-2xl">
                <p className="font-semibold relative z-20 mt-2 text-white">{name}</p>
                {logo}
            </div>
            <div className="text-neutral-200 mt-4 relative z-20 line-clamp-7 text-sm">
                <p>{description}</p>
            </div>
            </div>
            <Link href={`/category/${slug}`}>

            <div className="mt-5">
             <Button variant={"default"}
             className="w-full  cursor-pointer text-xl text-gray-800  bg-gray-100 font-normal relative"
                >
                        <span className="mx-auto mb-1">explore</span>
                        <span className="absolute right-4">
                            <RightArrow />
                        </span>
                    </Button>
                </div>
            </Link>
        </CardSpotlight>
    );
}
