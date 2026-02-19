'use client';
import React, { useState, useEffect } from "react";
import BackgroundEffect from "@/components/BackgroundEffect";
import { TechStackCard } from "@/components/TechStackCard";
import Container from "@/components/Container";
import Link from "next/link";
import { Filter, SortAsc, SortDesc, ChevronRight, TrendingUp, AlertTriangle, Search } from "lucide-react";


interface Category {
    id: string
    name: string
    slug: string
    description: string
}

interface TechStack {
    id: string
    name: string
    slug: string
    category_slug: string
    logo?: string
    logo_url?: string
    short_description: string
    detailed_description: string
    official_docs: string
    learning_curve?: number
    popularity?: number
    pros: string[]
    cons: string[]
    major_use_cases: string[]
    basic_prerequisites: string[]
    created_at: string
    categories?: Category
}


interface ApiResponse<T> {
    success: boolean;
    error: string | null;
    data: T
    count?: number;
}


export default function TechStacks({ categorySlug }: { categorySlug?: string }) {
    const [techStacks, setTechStacks] = useState<TechStack[]>([]);
    const [category, setCategory] = useState<Category | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [searchItem, setSearchItem] = useState<string>('');
    const [sortBy, setSortBy] = useState<'popularity' | 'name'>('popularity')
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
    const [error, setError] = useState<string | null>(null);
    const [totalCount, setTotalCount] = useState(0);



    useEffect(() => {
        let ignore = false;
        async function fetchTechStacks() {
            setLoading(true)
            setError(null)
            try {
                const response = await fetch(`/api/tech-stacks/category/${categorySlug}`, {
                    next: { revalidate: 60 },
                })
                const stackJson: ApiResponse<TechStack[]> & { count: number } = await response.json()


                //Fetch Categories
                const categoryRes = await fetch(`/api/categories/${categorySlug}`)
                const categoryJson: ApiResponse<Category> = await categoryRes.json()


                if (!ignore) {
                    if (stackJson.success) {
                        setTechStacks(stackJson.data || [])
                        setTotalCount(stackJson.count ?? 0)
                    }
                    else {
                        setError(stackJson.error || "Sorry! Failed to load techstack. Please try later.")
                    }

                    if (categoryJson.success) {
                        setCategory(categoryJson.data);
                    } else {
                        console.warn("Failed to load category info:", categoryJson.error)
                    }
                }
            } catch (error) {
                if (!ignore) {
                    console.error("Error fetching tech stacks: ", error)
                    setError("An error occured while fetching tech stacks")
                }
            } finally {
                if (!ignore) {
                    setLoading(false)
                }
            }
        }
        fetchTechStacks();

        return () => {
            ignore = true;
        }
    }, [categorySlug])




    const getDifficultyColor = (difficulty: string) => {
        if (difficulty === 'easy') return 'text-green-500';
        if (difficulty === 'medium') return 'text-yellow-500';
        if (difficulty === 'hard') return 'text-red-500';
        return 'text-gray-500';
    }

    // const handleComparisonToggle = (slug: string) => {
    //   setSelectedForComparison(prev => {
    //     if (prev.includes(slug)) {
    //       return prev.filter(item => item !== slug);
    //     } else {
    //       return [...prev, slug];
    //     }
    //   });
    // }
    const filterStacks = techStacks.filter((stack) =>
        stack.name.toLowerCase().includes(searchItem.toLowerCase()) ||
        stack.short_description.toLowerCase().includes(searchItem.toLowerCase())
    )

    const handleSortChange = (newSortBuy: typeof sortBy) => {
        if (newSortBuy === sortBy) {
            setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(newSortBuy);
            setSortDirection('asc');
        }
    }

    const sortedStacks = [...filterStacks].sort((a, b) => {
        let aVal: any = a[sortBy]
        let bVal: any = b[sortBy]

        if (aVal == null) aVal = -Infinity;
        if (bVal == null) bVal = -Infinity;

        if (sortBy == "popularity") {
            aVal = Number(aVal)
            bVal = Number(bVal)
        }
        if (aVal < bVal) return sortDirection == 'asc' ? -1 : 1;
        if (aVal > bVal) return sortDirection == 'asc' ? 1 : -1;
        return 0;
    })


    return (
        <div className="min-h-screen">
            <Container className="max-w-4xl px-4 sm:px-6">
                <nav className="flex items-center gap-1.5 py-4 sm:py-5">
                    <Link href="/" className="dp-breadcrumb-link">
                        Home
                    </Link>
                    <ChevronRight size={12} style={{ color: 'var(--mono-700)', flexShrink: 0 }} />
                    <Link href="/category" className="dp-breadcrumb-link">
                        Categories
                    </Link>
                    <ChevronRight size={12} style={{ color: 'var(--mono-700)', flexShrink: 0 }} />
                    <span className="dp-breadcrumb-current">
                        {category?.name}
                    </span>
                </nav>
                {/* Header */}
                <div className="flex flex-col mb-2">
                    {category ? (
                        <div>
                            <h1
                                style={{
                                    fontFamily: 'var(--font-geist-sans)',
                                    fontSize: 'clamp(28px, 4vw, 42px)',
                                    fontWeight: 700,
                                    letterSpacing: '-0.03em',
                                    color: 'var(--mono-white)',
                                    lineHeight: 1.1,
                                    marginBottom: 10,
                                }}
                            >
                                {category.name}
                            </h1>
                            <p
                                style={{
                                    fontFamily: 'var(--font-geist-sans)',
                                    fontSize: 14,
                                    color: 'var(--mono-400)',
                                    lineHeight: 1.6,
                                    maxWidth: 600,
                                }}
                            >
                                {category.description}
                            </p>
                        </div>
                    ) : (
                        <div>
                            <div className="dp-skeleton h-9 w-48 mb-3" />
                            <div className="dp-skeleton h-4 w-96 mb-2" />
                            <div className="dp-skeleton h-4 w-72" />
                        </div>
                    )}
                </div>

                {/* Compare Stacks button */}
                {techStacks && !loading && (
                    <div className="mt-6 mb-8">
                        <Link href={`/category/${categorySlug}/compare`} rel="noopener noreferrer">
                            <button className="dp-btn dp-btn-solid" style={{ padding: '8px 20px' }}>
                                Compare Stacks
                            </button>
                        </Link>
                    </div>
                )}

                {/* Controls */}
                <div className="flex flex-col gap-3 mb-4">

                    {/* Search — full width on all sizes */}
                    <div className="dp-search-wrap dp-border-main">
                        <Search size={14} style={{ color: 'var(--mono-500)', flexShrink: 0 }} />
                        <input
                            type="text"
                            placeholder="Search tech stacks..."
                            onChange={(e) => setSearchItem(e.target.value)}
                            className="dp-search-input dp-border-main"
                        />
                    </div>

                    {/* Sort + count row */}
                    <div className="flex items-center gap-3">


                        <span style={{ fontFamily: 'var(--font-geist-mono)', fontSize: 11, color: 'var(--mono-500)' }}>
                            {filterStacks.length} of {techStacks.length} shown
                        </span>
                    </div>


                    {error && !loading && (
                        <div className="py-16 flex flex-col items-center gap-4">
                            <AlertTriangle size={20} style={{ color: 'var(--mono-600)' }} />
                            <p style={{ fontFamily: 'var(--font-geist-sans)', fontSize: 14, color: 'var(--mono-500)' }}>{error}</p>
                            <button onClick={() => window.location.reload()} className="dp-btn flex items-center gap-2">
                                Try Again
                            </button>
                        </div>
                    )}

                    {/* Techstacks */}
                    {loading ? (
                        <div className="flex flex-col mt-5 gap-3">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="dp-border-bottom py-5 flex items-start gap-4">
                                    <div className="dp-skeleton w-10 h-10 flex-shrink-0" />
                                    <div className="flex-1">
                                        <div className="dp-skeleton h-4 w-36 mb-3" />
                                        <div className="dp-skeleton h-3 w-full mb-2" />
                                        <div className="dp-skeleton h-3 w-4/5" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col mt-4 gap-4">
                            {filterStacks.map((stack) => (
                                <TechStackCard
                                    key={stack.id}
                                    id={stack.id}
                                    name={stack.name}
                                    short_description={stack.short_description}
                                    logo_url={stack.logo_url}
                                    major_use_cases={stack.major_use_cases}
                                    slug={stack.slug}
                                    official_docs={stack.official_docs}
                                    category_slug={category?.slug} />
                            ))}
                        </div>
                    )}
                    {!loading && !error && filterStacks.length === 0 && (
                        <div className="py-16 flex flex-col items-center gap-3">
                            <Search size={18} style={{ color: 'var(--mono-700)' }} />
                            <p style={{ fontFamily: 'var(--font-geist-mono)', fontSize: 12, color: 'var(--mono-500)' }}>
                                {techStacks.length === 0 ? 'No technologies in this category yet.' : `No results found.`}
                            </p>
                        </div>
                    )}


                </div>
            </Container>
        </div>
    );
} 