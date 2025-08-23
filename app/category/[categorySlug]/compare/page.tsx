import InteractiveComparisonClient from '@/components/InteractiveCompareClient';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react'
import { notFound } from "next/navigation";

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
  params: {
    categorySlug: string;
  };
}



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




async function getComparisonData(categorySlug: string) {
    try {
        const [categoryResponse, stacksResponse] = await Promise.all([
            fetch(`http://localhost:3000/api/categories/${categorySlug}`, { cache: 'no-store' }),
            fetch(`http://localhost:3000/api/tech-stacks/comparison/${categorySlug}`, { cache: 'no-store' })
        ]);
        
        if (!categoryResponse.ok || !stacksResponse.ok) {
            throw new Error("Failed to fetch data")
        }
        
        const results = await Promise.all([
            categoryResponse.json(),
            stacksResponse.json()
        ]);
        
        const [categoryResult, stacksResult]: [ApiResponse<Category>, ApiResponse<TechStack[]>] = results;
        if(!categoryResult.success || !stacksResult.success) {
            throw new Error("Api returned error")
        }
        
        return{
            category:categoryResult.data,
            techStacks:stacksResult.data
        }
    }catch(error){
        console.error("Error fetching comparison data")
        return null;
    }
}


export default async function InteractiveComparePage({ params }: InteractiveComparePageProps) {
  const data = await getComparisonData(params.categorySlug);
  
  if (!data || !data.category || !data.techStacks || data.techStacks.length < 2) {
    notFound();
  }

  const { category, techStacks } = data;

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
        <InteractiveComparisonClient 
          techStacks={techStacks}
          category={category}
        />
      </div>
    </div>
  );
}