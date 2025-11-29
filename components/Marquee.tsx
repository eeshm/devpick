import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { useMemo } from "react";
import Image from "next/image";
import LazyLogo from "./LazyLogo";


interface LogoItem {
  src: string;
  alt: string;
}
const ReviewCard = ({ src, alt }: LogoItem) => {
  return (
    <div className="relative h-full cursor-pointer overflow-hidden px-6 py-4">
      <div className="relative h-12 w-24">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="contain"
          loading="lazy"
          quality={50}
          // height={40}
          // width={40}
        />
      </div>
    </div>
  );
};
export default function MarqueeDemo() {
  const logos: LogoItem[] = useMemo(
    () => [
      { src: "/logos/React.png", alt: "React" },
      { src: "/logos/Nextjs.png", alt: "Next.js" },
      { src: "/logos/Nestjs.png", alt: "Nest.js" },
      { src: "/logos/Nuxt.png", alt: "Nuxt.js" },
      { src: "/logos/Express.png", alt: "Express" },
      { src: "/logos/Angular.png", alt: "Angular" },
      { src: "/logos/SwiftUI.png", alt: "SwiftUI" },
      { src: "/logos/Kotlin.png", alt: "Kotlin" },
      { src: "/logos/Flutter.png", alt: "Flutter" },
      { src: "/logos/Django.png", alt: "Django" },
      { src: "/logos/Ruby.png", alt: "Ruby on Rails" },
      { src: "/logos/Laravel.png", alt: "Laravel" },
      { src: "/logos/Vuejs.png", alt: "Vuejs" },
      { src: "/logos/Phoenix.png", alt: "Phoenix" },
      { src: "/logos/Flask.png", alt: "Flask" },
      { src: "/logos/Blitz.png", alt: "Blitz.js" },
    ],
    []
  );

  return (
    <div className={cn("mt-5 relative flex w-full flex-col items-center justify-center overflow-hidden"
    ,"mask-radial-from-10%"
)}>
      <Marquee className="[--duration:15s]">
        {logos.map((logo, index) => (
          <ReviewCard key={index} {...logo} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 " />
      <div className="pointer-events-none absolute inset-y-0 right-0" />
    </div>
  );
}

