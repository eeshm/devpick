import CompareIcon from "../icons/CompareIcon";
import LayerIcon from "../icons/LayerIcon";
import RocketIcon from "../icons/Rocket";
import SearchIcon from "../icons/SearchIcon";
import { Feature } from "./FeaturesSection";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "50+ Tech Stacks",
      description:
        "From React to Rust, Docker to Django—Discover what makes each tech stack tick",
        icon:<LayerIcon/>
    },
    {
      title: "Side-by-Side Comparisons",
      description:
        "React vs Vue? Mongo vs Postgres? Compare stacks fast — pick your winner.",
      icon: <CompareIcon/>,
    },
    {
      title: "Learn the Real Vibes",
      description:
        "Get the tea on every stack — pros, cons, learning curve, and what it’s actually good for. No sugarcoating.",
      icon: <SearchIcon/>,
    },
    {
      title: "Pick the Right Tools Faster",
      description: "Stop doomscrolling through Reddit threads. TechStack Hub helps you cut through the noise and pick what works for you.",
      icon:<RocketIcon/>
    },
  ];
  return (
    <div className="font-grostek relative z-10 max-w-7xl mx-auto">
          <div className="mt-5 flex justify-center">
                <h2 className=" inline-block flex-col justify-center items-center text-3xl font-thin font-opensans border-b-2 tracking-tight">
                     Features
                </h2>
            </div>
<div className="grid grid-cols-1  md:grid-cols-2 ">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
    </div>
  );
}
