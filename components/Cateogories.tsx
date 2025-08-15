"use client"
import { Button } from "./ui/button";
import { CardSpotlight } from "./ui/card-spotlight";
import RightArrow from "./icons/RightArrow";
import Link from "next/link";
const categories = [
    {
        "name": "Backend Development",
        "slug": "backend-development",
        "description": "Server-side technologies and frameworks that handle business logic, data processing, and API development. These technologies power the behind-the-scenes functionality that enables web applications to process requests and manage data.These technologies power the behind-the-scenes functionality that enables web applications to process requests and manage data.",
        "logo": "server icon"
    },
    {
        "name": "Backend Development",
        "slug": "backend-development",
        "description": "Server-side technologies and frameworks that handle business logic, data processing, and API development. These technologies power the behind-the-scenes functionality that enables web applications to process requests and manage data.",
        "logo": "server icon"
    },
    {
        "name": "Backend Development",
        "slug": "backend-development",
        "description": "Server-side technologies and frameworks that handle business logic, data processing, and API development. These technologies power the behind-the-scenes functionality that enables web applications to process requests and manage data.",
        "logo": "server icon"
    }
]

interface Categories {
    name: string,
    description: string,
    slug: string,
    logo?: string,
}

export default function Categories() {
    return (
        <div className="flex flex-col gap-4 items-center justify-center mt-10">
            <h2 className="text-4xl mb-6 font-thin font-sans border-b-2 tracking-tight">
                Major categories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 ">
            {categories.map((category, index) => (
                <CategoryCard
                    key={index}
                    name={category.name}
                    description={category.description}
                    slug={category.slug}
                    logo={category.logo} />
            ))}
        </div>
        </div>
    )
}

function CategoryCard({ name, description, slug, logo }: Categories) {
    return (
        <CardSpotlight className="h-80 w-80 overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="flex  items-center text-2xl ">
                <p className="font-semibold relative z-20 mt-2 text-white">
                    {name}
                </p>
                {logo}
            </div>
            <div className="text-neutral-200 mt-4 relative z-20 line-clamp-7 text-sm ">
                <p> {description}</p>
            </div>
            <Link href={`/categories/${slug}`}>
            <div className="mt-5">
                <Button variant={"default"} 
                className="w-full text-gray-800 cursor-pointer text-xl  bg-gray-100 font-normal relative"
                >
                    <span className="mx-auto mb-1 ">explore</span>
                    <span className="absolute right-4">
                        <RightArrow />
                    </span>
                </Button>
            </div>
            </Link>
        </CardSpotlight>
    )
}
