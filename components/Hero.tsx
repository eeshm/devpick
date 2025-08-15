import Image from "next/image";
export default function Hero(){
return(
    <div className="items-center mt-5 flex flex-col gap-y-3">
        <h1 className="text-5xl md:text-5xl  font-seminbold  font-opensans tracking-tight text-center">
        Find Your Perfect Tech Stack
        </h1>
        <p className="text-center max-w-md tracking-tight">
            Browse by category, explore pros & cons, and compare options before deciding
        </p>
        <div className="flex flex-col items-center justify-center mt-9">
        </div>
    </div>
)
}