'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, ExternalLink, RefreshCw, Zap, ChevronRight, ChevronLeft } from 'lucide-react';
import TechComparisonGrid from './ComparisonGrid';
import { LoaderOne } from './ui/loader';

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

interface ApiResponse<T> {
    success: boolean;
    error: string | null;
    data: T
    count?: number;
}

interface Category {
    id: string
    name: string
    slug: string
    description: string
}

interface InteractiveComparePageProps {
    categorySlug: string;

}
interface InteractiveComparisonClientProps {
    techStacks: TechStack[];
    category: Category;
}

function TechStackSelector({
    label,
    selected,
    onSelect,
    options,
    disabled
}: {
    label: string;
    selected: TechStack | null;
    onSelect: (stack: TechStack | null) => void;
    options: TechStack[];
    disabled: boolean;
}) {
    return (
        <div className="relative">
            <label className="block text-sm font-medium text-neutral-200 mb-3">{label}</label>
            <div className="relative group">
                <select
                    value={selected?.id || ''}
                    onChange={(e) => {
                        const stack = options.find(s => s.id === e.target.value) || null;
                        onSelect(stack);
                    }}
                    disabled={disabled}
                    className="w-full rounded-xl px-4 py-3.5 pr-10 text-white
                        focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 
                        disabled:opacity-50 text-sm appearance-none cursor-pointer backdrop-blur-sm
                        hover:bg-white/10 transition-colors duration-200"
                >
                    <option className="text-gray-900 bg-white" value="">Select a tech stack...</option>
                    {options.map((stack) => (
                        <option className="text-gray-900 bg-white" key={stack.id} value={stack.id}>
                            {stack.name}
                        </option>
                    ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 
                    text-neutral-400 group-hover:text-white transition-colors duration-200 pointer-events-none" />
            </div>

            {/* Selected Stack Preview */}
            {selected && (
                <div className="mt-3 p-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm
                    hover:bg-white/10 transition-all duration-200">
                    <div className="flex-1 min-w-0">
                        <p className="font-medium text-white text-center">{selected.name}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function InteractiveComparePage({ categorySlug }: InteractiveComparePageProps) {

    const [category, setCategory] = useState<Category | null>(null);
    const [techStacks, setTechStacks] = useState<TechStack[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        if (!categorySlug) return;

        const getComparisonData = async () => {
            try {
                const [categoryResponse, stacksResponse] = await Promise.all([
                    fetch(`/api/categories/${categorySlug}`, {
                        next: { revalidate: 60 },
                    }),
                    fetch(`/api/tech-stacks/comparison/${categorySlug}`, {
                        next: { revalidate: 60 },
                    }),
                ]);

                if (!categoryResponse.ok || !stacksResponse.ok) {
                    throw new Error('Failed to fetch data');
                }

                const results = await Promise.all([
                    categoryResponse.json(),
                    stacksResponse.json(),
                ]);

                const [categoryResult, stacksResult]: [ApiResponse<Category>, ApiResponse<TechStack[]>] = results;

                if (!categoryResult.success || !stacksResult.success) {
                    throw new Error('API returned error');
                }

                setCategory(categoryResult.data);
                setTechStacks(stacksResult.data);
            } catch (error) {
                setError('Error fetching comparison data');
            } finally {
                setLoading(false);
            }
        };

        getComparisonData();
    }, [categorySlug]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <LoaderOne />
            </div>
        );
    }


    if (error || !category || !techStacks || techStacks.length < 2) {
        return <div>Something went wrong or there are not enough tech stacks to compare.</div>;
    }

    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="flex items-center space-x-2 py-4 text-sm">
                        <Link href="/" className="text-neutral-400 hover:text-white transition-colors duration-200">
                            Home
                        </Link>
                        <ChevronRight className="w-4 h-4 text-neutral-600" />
                        <Link
                            href={`/category/${category.slug}`}
                            className="text-neutral-400 hover:text-white transition-colors duration-200 capitalize"
                        >
                            {category.name}
                        </Link>
                        <ChevronRight className="w-4 h-4 text-neutral-600" />
                        <span className="text-neutral-400">Compare</span>
                    </nav>

                    {/* Page Header */}
                    <div className="py-12">
                        <div className="text-center w-full">
                            <h1 className="text-4xl md:text-5xl font-semibold ">
                                Compare {category.name} Technologies
                            </h1>
                            <div className="mt-4 text-neutral-400">
                                {techStacks.length} technologies available for comparison
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Interactive Comparison Component */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {techStacks && <InteractiveComparisonClient techStacks={techStacks} category={category} />}
            </div>
        </div>
    );
}


export function InteractiveComparisonClient({
    techStacks,
    category
}: InteractiveComparisonClientProps) {
    const [stack1, setStack1] = useState<TechStack | null>(null);
    const [stack2, setStack2] = useState<TechStack | null>(null);
    const [isLoading] = useState(false);

    const availableStacks1 = techStacks.filter(s => s.id !== stack2?.id);
    const availableStacks2 = techStacks.filter(s => s.id !== stack1?.id);
    const showComparison = stack1 && stack2;

    return (
        <div className="space-y-8">
            {/* Selection Area */}
            <div className="rounded-2xl bg-black/20 backdrop-blur-sm border border-white/10 p-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <TechStackSelector
                        label="First Technology"
                        selected={stack1}
                        onSelect={setStack1}
                        options={availableStacks1}
                        disabled={isLoading}
                    />

                    <TechStackSelector
                        label="Second Technology"
                        selected={stack2}
                        onSelect={setStack2}
                        options={availableStacks2}
                        disabled={isLoading}
                    />
                </div>
            </div>

            {/* Comparison Results */}
            {showComparison ? (
                <div className=" rounded-lg shadow-sm overflow-hidden">
                    {/* Comparison Header */}
                    {/* <div className="px-6 py-4 border-b text-muted-foreground border-gray-200">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="font-semibold text-sm uppercase tracking-wide">
                                Feature
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center space-x-2">
                                    <div className="w-6 h-6 relative">
                                        {stack1.logo_url || stack1.logo &&
                                            <Image
                                                src={stack1.logo_url || stack1.logo}
                                                alt={stack1.name}
                                                width={24}
                                                height={24}
                                                className="object-contain"
                                            />}
                                    </div>
                                    <span className="font-semibold text-gray-900">{stack1.name}</span>
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center space-x-2">
                                    <div className="w-6 h-6 relative">
                                        {stack2.logo_url || stack2.logo &&
                                            <Image
                                                src={stack2.logo_url || stack2.logo}
                                                alt={stack2.name}
                                                width={24}
                                                height={24}
                                                className="object-contain"
                                            />}
                                    </div>
                                    <span className="font-semibold text-gray-900">{stack2.name}</span>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <TechComparisonGrid stack1={stack1} stack2={stack2} />



                </div>
            ) : (
                <div className="p-12">
                    <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <Zap className="w-8 h-8 text-white/80" />
                            </div>
                        </div>
                        <h3 className="text-xl font-medium text-white mb-3">
                            Ready to Compare?
                        </h3>
                        <p className="mb-4 text-neutral-300 max-w-md mx-auto">
                            Select two {category.name} technologies above to see an instant comparison
                        </p>
                        <p className="text-sm text-neutral-400">
                            {techStacks.length} technologies available in this category
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}