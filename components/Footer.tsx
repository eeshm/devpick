// import TwitterIcon from "./icons/Twitter";
import Link from "next/link";
import { Briefcase, Github, Heart } from "lucide-react";
import { LinkedinIcon } from "lucide-react";

import TwitterIcon from "./icons/Twitter";
export default function Footer() {
    return (
        <footer className=" mt-15 px-2 text-lg mb-2 text-white">
            <div className=" container mx-auto text-center flex justify-between">
                <div className="flex items-center  justify-center space-x-1">
                    <span className="text-white">Made with</span>
                    <Heart className="fill-white"/>
                    <span>by eesh</span>
                </div>
                <div className="flex gap-3">
                <Link href="https://x.com/eeshmidha1" target="_blank" rel="noopener noreferrer">
                    <TwitterIcon/>
                </Link>
                <Link href="https://github.com/eeshm" target="_blank" rel="noopener noreferrer">
                <Github/>
                </Link>
                </div>
            </div>
        </footer >
    )
}