import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import {
    ReactLogo,
    Nextjs,
    Express,
    Angular,
    SwiftUI,
    Kotlin,
    Flutter,
    Django,
    RubyOnRails,
    Springboot,
    Laravel
} from "@/components/icons/Index2";
import LazyLogo from "./LazyLogo";


const reviews = [
    {
        Logo: <ReactLogo size="lg" />
    },
    {
        Logo: <Nextjs size="lg" />
    },
    {
        Logo: <Express size="lg" />
    },
    {
        Logo: <Angular size="lg" />
    },
    {
        Logo: <SwiftUI size="lg" />
    },
    {
        Logo: <Kotlin size="lg" />
    },
    {
        Logo: <Flutter size="lg" />
    },
    {
        Logo: <Django size="lg" />
    },
    {
        Logo: <RubyOnRails size="lg" />
    },
    {
        Logo: <Springboot size="lg" />
    },
    {
        Logo: <Laravel size="lg" />
    },
];

interface Logo{
    Logo:React.ReactNode
}
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({
    Logo
}: Logo) => {
    return (
        <div 
            className={cn(
                "relative h-full  cursor-pointer overflow-hidden ",
            )}
        >
            <LazyLogo Logo={Logo} index={0} />
        </div>
    );
};

export default function MarqueeDemo() {
    return (
        <div className="mt-5 relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:15s]">
                {firstRow.map((logo,index) => (
                    <ReviewCard key={index} {...logo} />
                ))}
            </Marquee>




            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r "></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l "></div>
        </div>
    );
}
