import TechCard from "./ComparisonCard";
interface TechStack {
  id: string
  name: string
  slug?: string
  category_slug?: string
  logo?: string
  logo_url?: string
  short_description: string
  detailed_description?: string
  official_docs: string
  learning_curve: string
  popularity: string
  pros: string[]
  cons: string[]
  major_use_cases: string[]
  basic_prerequisites: string[]
}
export default function TechComparisonGrid({
  stack1,
  stack2
}: {
  stack1:TechStack,
  stack2:TechStack
}) {
  return (
    <div className="grid lg:grid-cols-2 gap-8 mb-12">
      <TechCard stack={stack1} />
      <TechCard stack={stack2} />
    </div>
  );
}

