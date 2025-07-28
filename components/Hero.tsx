import Image from "next/image";
export default function Hero(){
return(
    <div className="mt-20 flex flex-col items-center min-h-screen">
        <Image
            src="/image.png"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full mb-6" />
        <h1 className="text-3xl text-gray-300 font-bold text-center mt-10 font-sans">curated playlist for every tech stack  
        </h1>
    </div>
)
}