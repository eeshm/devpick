import Image from "next/image";
export default function Hero(){
return(
    <div className="items-center mt-10 flex flex-col gap-y-2">
        <h1 className="text-4xl md:text-5xl  font-seminbold font-sans tracking-tight text-center">
        Find Your Perfect Tech Stack
        </h1>
        <p className="font-mono text-center max-w-md">
            Browse by category, explore pros & cons, and compare options before deciding
        </p>
        <div className="flex flex-col items-center justify-center mt-9">
        </div>
    </div>
)
}