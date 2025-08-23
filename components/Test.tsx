import TechComparisonGrid from "./ComparisonGrid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TechStack {
    id: string
    name: string
    slug?: string
    category_slug?: string
    logo?: string
    logo_url?: string
    short_description:string
    detailed_description?: string
    official_docs: string
    learning_curve: string
    popularity: string
    pros: string[]
    cons: string[]
    major_use_cases: string[]
    basic_prerequisites: string[]
}

const stack1Mock: TechStack = {
    id: '1',
    name: 'React',
    slug: 'react',
    logo_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    short_description: 'A JavaScript library for building user interfaces A JavaScript library for building user interfaces A JavaScript library for building user interfaces',
    official_docs: 'https://react.dev',
    learning_curve: 'Intermediate',
    popularity: 'Very High',
    pros: ['Large ecosystem', 'Virtual DOM', 'Component-based', 'Strong dev tools'],
    cons: ['Steep learning curve', 'Requires additional libraries', 'JSX syntax complexity'],
    major_use_cases: ['SPAs', 'PWAs', 'Mobile apps with React Native', 'Large-scale apps'],
    basic_prerequisites: ['JavaScript ES6+', 'HTML & CSS', 'DOM manipulation', 'npm/yarn']
};
const stack2Mock: TechStack = {
    id: '2',
    name: 'Vue.js',
    slug: 'vue',
    logo_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    short_description: 'A JavaScript library for building user interfaces A JavaScript library for building user interfaces A JavaScript library for building user interfaces',
    official_docs: 'https://vuejs.org',
    learning_curve: 'Beginner',
    popularity: 'High',
    pros: ['Easy to learn', 'Excellent docs', 'Small bundle size', 'Progressive adoption'],
    cons: ['Smaller ecosystem', 'Less job demand', 'Fewer libraries'],
    major_use_cases: ['Small-medium apps', 'Rapid prototyping', 'E-commerce', 'CMS'],
    basic_prerequisites: ['Basic JavaScript', 'HTML & CSS', 'Reactive programming', 'CLI basics']
};



interface TechStackSelectorProps{
      label: string;
  selected: TechStack | null;
  onSelect: (stack: TechStack | undefined) => void;
  options: TechStack[];
  disabled?: boolean;

}

function TechStackSelector({label,selected,onSelect,options,disabled}){
    <div className="relative">
        <label className="block text-sm font-medium text-gray-600 mb-2">{label}</label>
    </div>
}

export default function TechStackComparison() {


    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-foreground mb-4">Technology Stack Comparison</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Compare popular web development stacks to make informed decisions for your next project
                    </p>
                </div>

                {/* Tech Comparison Cards */}
                <TechComparisonGrid stack1={stack1Mock} stack2={stack2Mock}/>
            </div>
        </div>
    );
}
