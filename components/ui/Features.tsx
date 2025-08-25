import Nextjs from "../icons/Nextjs";
import { Feature } from "./FeaturesSection";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "50+ Tech Stacks",
      description:
        "From React to Rust, Docker to Django—Discover what makes each tech stack tick",
        // icon:<Nextjs size="md"/>
    },
    {
      title: "Side-by-Side Comparisons",
      description:
        "React vs Vue? Mongo vs Postgres? Compare stacks fast — pick your winner.",
    //   icon: <IconEaseInOut />,
    },
    {
      title: "Learn the Real Vibes",
      description:
        "Get the tea on every stack — pros, cons, learning curve, and what it’s actually good for. No sugarcoating."
    //   icon: <IconCurrencyDollar />,
    },
    {
      title: "Pick the Right Tools Faster",
      description: "Stop doomscrolling through Reddit threads. TechStack Hub helps you cut through the noise and pick what works for you.",
    //   icon: <IconCloud />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 font-grostek relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}
