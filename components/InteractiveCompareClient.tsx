'use client'
import { useState ,useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, ExternalLink, RefreshCw, Zap, ChevronRight,ChevronLeft} from 'lucide-react';
import TechComparisonGrid from './ComparisonGrid';

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
            <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
            <div className="relative">
                <select
                    value={selected?.id || ''}
                    onChange={(e) => {
                        const stack = options.find(s => s.id === e.target.value) || null;
                        onSelect(stack);
                    }}
                    disabled={disabled}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500 appearance-none cursor-pointer"
                >
                    <option value="">Select a tech stack...</option>
                    {options.map((stack) => (
                        <option key={stack.id} value={stack.id}>
                            {stack.name}
                        </option>
                    ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            {/* Selected Stack Preview */}
            {selected && (
                <div className="mt-3 flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border">

                    <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 truncate">{selected.name}</p>
                        <p className="text-sm text-gray-600 truncate">{selected.short_description}</p>
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
          fetch(`/api/categories/${categorySlug}`, { cache: 'no-store' }),
          fetch(`/api/tech-stacks/comparison/${categorySlug}`, { cache: 'no-store' }),
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
    return <div>Loading...</div>;
  }

  if (error || !category || !techStacks || techStacks.length < 2) {
    return <div>Something went wrong or there are not enough tech stacks to compare.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 py-4 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link
              href={`/category/${category.slug}`}
              className="text-gray-500 hover:text-gray-700 capitalize"
            >
              {category.name}
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900">Compare</span>
          </nav>

          {/* Page Header */}
          <div className="py-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Compare {category.name} Technologies
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {category.description} Select any two technologies below for an instant side-by-side comparison.
              </p>
              <div className="mt-4 text-sm text-gray-500">
                {techStacks.length} technologies available for comparison
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Comparison Component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <InteractiveComparisonClient techStacks={techStacks} category={category} />
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

    const handleSwap = () => {
        const temp = stack1;
        setStack1(stack2);
        setStack2(temp);
    };

    const handleRandomize = () => {
        const shuffled = [...techStacks].sort(() => 0.5 - Math.random());
        setStack1(shuffled[0]);
        setStack2(shuffled[1]);
    };

    const handleClear = () => {
        setStack1(null);
        setStack2(null);
    };

    const showComparison = stack1 && stack2;

    return (
        <div className="space-y-8">
            {/* Selection Area */}
            <div className="bg-white rounded-lg shadow-sm p-6">
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

                {/* Action Buttons */}
                {(stack1 || stack2) && (
                    <div className="flex justify-center space-x-3 mt-6 pt-6 border-t border-gray-200">
                        {stack1 && stack2 && (
                            <button
                                onClick={handleSwap}
                                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium flex items-center gap-2"
                            >
                                <RefreshCw className="w-4 h-4" />
                                Swap
                            </button>
                        )}
                        <button
                            onClick={handleRandomize}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
                        >
                            <Zap className="w-4 h-4" />
                            Random Compare
                        </button>
                        {(stack1 || stack2) && (
                            <button
                                onClick={handleClear}
                                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                            >
                                Clear All
                            </button>
                        )}
                    </div>
                )}
            </div>

            {/* Comparison Results */}
            {showComparison ? (
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    {/* Comparison Header */}
                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="font-semibold text-gray-600 text-sm uppercase tracking-wide">
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
                    </div>

                    <TechComparisonGrid stack1={stack1} stack2={stack2} />



                </div>
            ) : (
                <div className="bg-white rounded-lg shadow-sm">
                    <div className="text-center py-16">
                        <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                            <Zap className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                            Ready to Compare?
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Select two {category.name.toLowerCase()} technologies above to see an instant comparison
                        </p>
                        <p className="text-sm text-gray-500">
                            {techStacks.length} technologies available in this category
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}