import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
export default function Hero() {
    
    return (
        <div className="items-center mt-15 flex flex-col gap-y-4 pt-10 px-2">
            <h1 className="text-4xl md:text-5xl tracking-tight font-medium text-center w-full">
               The Smart Way to Explore Tech Stacks
            </h1>
            <p className="text-center max-w-md md:max-w-2xl leading-6 font-medium  px-4 md:px-0 ">
              Explore tools across frontend, backend, databases, DevOps, AI, styling, and more — browse categories, weigh pros and cons, and compare stacks to find what fits your next build.
              </p>

        <Link href={'/category'}       
        rel="noopener noreferrer">
            <div className="mt-5">
            <Button className="bg-gray-100 font-medium text-base py-6 text-black rounded-lg cursor-pointer">
                <span className="px-2 flex ">Compare Stacks
                <ArrowRightIcon className="size-3 ml-1 mt-1.5"/>
                </span>
            </Button>
            </div>
        </Link>
        </div>
    )
}