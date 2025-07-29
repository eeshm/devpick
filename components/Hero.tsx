import Image from "next/image";
import Card from "./Card";
export default function Hero(){
return(
    <div className="items-center mt-10 flex flex-col h-screen">
        <Image
            src="/image.png"
            alt="Logo"
            width={150}
            height={150}
            className="rounded-none " />
        <h1 className="lg:w-full mt-5  max-w-xl mx-auto -z-10 text-black tracking-tighter font-display text-center text-5xl font-bold  drop-shadow-sm md:text-6xl md:leading-[5rem]">
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