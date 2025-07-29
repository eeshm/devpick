import Image from "next/image";
import Card from "./Card";
export default function Hero(){
return(
    <div className="items-center mt-10 flex flex-col">
        <Image
            src="/image.png"
            alt="Logo"
            width={150}
            height={150}
            className="rounded-none " />
        <h1 className="text-4xl md:text-5xl  font-medium  font-sans tracking-tight text-center">
            Playlist for every <p className="text-white leading-12">tech-stack</p>  
        </h1>
        <div className="flex flex-col items-center justify-center mt-9">
            <h1 className="text-2xl font-bold text-center">search bar</h1>
            <h1 className="text-2xl font-bold text-center">filtes</h1>
            <h1 className="text-2xl font-bold text-center">filters</h1>
            </div>
    </div>
)
}