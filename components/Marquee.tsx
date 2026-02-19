import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { useMemo } from "react";
import Image from "next/image";

interface LogoItem {
  src: string;
  alt: string;
}

const LogoCard = ({ src, alt }: LogoItem) => (
  <div
    className="dp-logo-wrap relative flex items-center justify-center h-14 px-7 cursor-default"
    title={alt}
  >
    <div className="relative h-8 w-24">
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: "contain" }}
        loading="lazy"
        quality={60}
        className="dp-logo-img"
      />
    </div>
  </div>
);

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
      { src: "/logos/Vuejs.png", alt: "Vue.js" },
      { src: "/logos/Phoenix.png", alt: "Phoenix" },
      { src: "/logos/Flask.png", alt: "Flask" },
      { src: "/logos/Blitz.png", alt: "Blitz.js" },
    ],
    []
  );

  return (
    <div className="dp-marquee-wrap" style={{ overflow: 'hidden' }}>
      <Marquee pauseOnHover className="[--duration:55s] [--gap:0px]">
        {logos.map((logo, i) => (
          <LogoCard key={i} {...logo} />
        ))}
      </Marquee>
    </div>
  );
}
