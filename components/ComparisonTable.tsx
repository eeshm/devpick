import { ExternalLink, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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


interface TechStack {
    id: string
    name: string
    slug?: string
    category_slug?: string
    logo: string
    logo_url?: string
    short_description?: string
    detailed_description?: string
    official_docs?: string
    learning_curve?: string
    popularity?: string
    pros?: string[]
    cons?: string[]
    major_use_cases?: string[]
    basic_prerequisites?: string[]
}

export default function InteractiveComparisonPage() {
    return (
        <div className="max-w-7xl mx-auto p-6">
            <InteractiveComparison stack1={stack1Mock} stack2={stack2Mock} />
        </div>
    )
}


export function InteractiveComparison({ stack1, stack2 }: { stack1: TechStack, stack2: TechStack }) {

    const showComparison = stack1 && stack2

    if (!showComparison) {
        return (
            <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <Zap className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-muted-foreground mb-2">
                    Ready to Compare?
                </h3>
                <p className="text-gray-600">
                    Select two technologies above to see an instant comparison
                </p>
            </div>
        )
    }
    return (
        <div className="max-w-5xl mx-auto p-6 bg-black/30 rounded-md">
            {/* compairson */}
            <div className="rounded-lg p-6">
                <div className="grid grid-cols-12 gap-4 mb-6 pb-4 border-b border-gray-200">
                    <div className=" col-span-2 font-semibold text-gray-300 text-lg uppercase  tracking-wider flex justify-center">Feature</div>
                        <div className="flex items-center justify-center space-x-2 mb-2 col-span-5">
                            {/* Change this img to Image */}
                            <img
                                src={stack1.logo}
                                alt={stack1.name}
                                className="w-6 h-6 object-contain" />
                            <span className="font-semibold text-xl">{stack1.name}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2 mb-2 col-span-5">
                            {/* Change this img to Image */}
                            <img
                                src={stack2.logo}
                                alt={stack2.name}
                                className="w-6 h-6 object-contain" />
                            <span className="font-semibold text-xl">{stack2.name}</span>
                        </div>
                </div>

                <div className="space-y-0">
                    <ComparisonRow
                        label="Learning Curve"
                        value1={stack1.learning_curve}
                        value2={stack2.learning_curve}
                        type="badge"
                    />
                    <ComparisonRow
                        label="Popularity"
                        value1={stack1.popularity}
                        value2={stack2.popularity}
                        type="badge"
                    />
                    <ComparisonRow
                        label="Description"
                        value1={stack1.short_description}
                        value2={stack2.short_description}
                        type="text"
                    />
                    <ComparisonRow
                        label="Pros"
                        value1={stack1.pros}
                        value2={stack2.pros}
                        type="list"
                    />
                    <ComparisonRow
                        label="Cons"
                        value1={stack1.cons}
                        value2={stack2.cons}
                        type="list"
                    />
                    <ComparisonRow
                        label="Use Cases"
                        value1={stack1.major_use_cases}
                        value2={stack2.major_use_cases}
                        type='list'
                    />
                    <ComparisonRow
                        label="Prerequisites"
                        value1={stack1.basic_prerequisites}
                        value2={stack2.basic_prerequisites}
                        type='list'
                    />
                    <ComparisonRow
                        label="Documentation"
                        value1={stack1.official_docs}
                        value2={stack2.official_docs}
                        type="link"
                    />
                </div>
            </div>



        </div>
    )
}


interface ComparisonRowProps {
    label: string,
    value1: string | string[] | null | undefined;
    value2: string | string[] | null | undefined;
    type?: 'text' | 'list' | 'badge' | 'link';
}


function ComparisonRow({ label, value1, value2, type = 'text' }: ComparisonRowProps) {
    const renderValue = (value: string | string[] | null | undefined) => {
        if (!value) {
            return (
                <div className="flex justify-center items-center h-full">
                    <span className="text-gray-400">Not specified</span>
                </div>
            );
        }

        const getBadgeClasses = (value: string) => {
            switch (value.toLowerCase()) {
                case 'beginner': return 'bg-green-100 text-green-700';
                case 'intermediate': return 'bg-yellow-100 text-yellow-700';
                case 'advanced': return 'bg-red-100 text-red-700';
                case 'very high': return 'bg-purple-100 text-purple-700';
                case 'high': return 'bg-blue-100 text-blue-700';
                case 'medium': return 'bg-emerald-100 text-emerald-700';
                default: return 'bg-gray-100 text-gray-700';
            }
        }

        switch (type) {
            case 'list':
                return (
                <div className="flex justify-center items-center h-full">
                    <ul className="space-y-1 text-center">
                        {Array.isArray(value) &&
                            value.map((item, index) => (
                                <li key={index} className="text-muted-foreground text-xs md:text-base">{item}</li>
                            ))}
                    </ul>
                </div>
                );
            case 'badge':
                return (
                <div className="flex justify-center items-center h-full">
                    <span
                        className={`px-2 py-1 rounded-md font-medium ${getBadgeClasses(
                            value.toString()
                        )}`}
                    >
                        {value}
                    </span>
                </div>
                )
            case 'link':
                return (
                <div className="flex justify-center items-center h-full">
                    <a
                        href={value.toString()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 text-md"
                    >
                        View Docs
                        <ExternalLink className="w-3 h-3" />
                    </a>
                </div>
                )
            default:
                return (
                       <div className="flex justify-center items-center h-full">
                    <span className="text-muted-foreground text-xs md:text-base text-center">{value}</span>
                </div>
                )
    }

}
    return (
        <div className="grid grid-cols-12 gap-4 py-4 border-b border-gray-100 last:border-b-0">
            <div className="font-medium col-span-2 text-gray-200 flex items-center  text-xs  md:text-base justify-center">{label}</div>
            <div className="col-span-5">{renderValue(value1)}</div>
            <div className="col-span-5">{renderValue(value2)}</div>
        </div>
    )
}



