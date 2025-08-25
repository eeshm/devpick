// import TwitterIcon from "./icons/Twitter";
import Link from "next/link";
import { Heart } from "lucide-react";

import TwitterIcon from "./icons/Twitter";
export default function Footer() {
    return (
        <footer className=" px-4 mb-4 text-white">
            <div className=" container mx-auto text-center flex justify-between">
                <div className="flex items-center  justify-center space-x-1">
                    <span className="text-white">Made with</span>
                    <Heart className="fill-white"/>
                </div>
                <Link href="https://x.com/eeshmidha1" target="_blank" rel="noopener noreferrer">
                    <TwitterIcon/>
                </Link>
            </div>
        </footer >
    )
}