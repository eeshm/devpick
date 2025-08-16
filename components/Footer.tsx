import TwitterIcon from "./icons/Twitter";
import Link from "next/link";



export default function Footer() {
    return (
        <footer className=" mt-10 pt-10 px-3 pb-1 text-white">
            <div className=" text-center flex justify-between">
                <div className="flex items-center justify-center space-x-2">
                    <span className="text-xl font-bold text-white">Made with Love</span>
                </div>
                <Link href="https://x.com/eeshmidha1" target="_blank" rel="noopener noreferrer">
                    <TwitterIcon />
                </Link>
            </div>
        </footer >
    )
}