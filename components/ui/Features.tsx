import CompareIcon from "../icons/CompareIcon";
import LayerIcon from "../icons/LayerIcon";
import RocketIcon from "../icons/Rocket";
import SearchIcon from "../icons/SearchIcon";
import { BlurFade } from "./blur-fade";

const features = [
  {
    title: "50+ Tech Stacks",
    description: "From React to Rust, Docker to Django — explore what makes each stack tick with honest, in-depth coverage.",
    icon: <LayerIcon />,
  },
  {
    title: "Side-by-Side Comparisons",
    description: "React vs Vue? Mongo vs Postgres? Compare stacks in seconds with structured, bias-free breakdowns.",
    icon: <CompareIcon />,
  },
  {
    title: "Real Vibes. No Sugarcoating.",
    description: "Pros, cons, learning curve, and what it's actually good for — honest takes on every tool.",
    icon: <SearchIcon />,
  },
  {
    title: "Pick the Right Tools Faster",
    description: "Stop doom-scrolling. DevPick cuts through the noise so you can ship faster with more confidence.",
    icon: <RocketIcon />,
  },
];

export function FeaturesSectionDemo() {
  return (
    <BlurFade delay={0.1}>
      <section className="px-6 py-10 max-w-5xl mx-auto w-full">
        {/* Section label */}
        <p className="dp-label mb-6">Why DevPick</p>

        {/* Feature rows — skills.sh table style */}
        <div>
          {/* Header row */}
          <div
            className="dp-row-head hidden md:grid"
            style={{ gridTemplateColumns: '44px 1fr', gap: '0 20px' }}
          >
            <div />
            <div className="grid grid-cols-2 gap-x-10">
              <span className="dp-label">FEATURE</span>
              <span className="dp-label">DESCRIPTION</span>
            </div>
          </div>

          {features.map((f, i) => (
            <div key={f.title} className="dp-feature-row">
              {/* Icon cell */}
              <div className="dp-feature-icon">
                {f.icon}
              </div>
              {/* Content */}
              <div className="md:grid md:grid-cols-2 md:gap-x-10 flex flex-col gap-1">
                <div
                  style={{
                    fontFamily: 'var(--font-geist-sans)',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--mono-white)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {f.title}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-geist-sans)',
                    fontSize: '13px',
                    color: 'var(--mono-500)',
                    lineHeight: 1.55,
                  }}
                >
                  {f.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </BlurFade>
  );
}
