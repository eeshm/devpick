'use client';
import React, { useState, useEffect } from "react";
import BackgroundEffect from "@/components/BackgroundEffect";
import { TechStackCard } from "@/components/TechStackCard";
import Container from "@/components/Container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
                const response = await fetch(`/api/tech-stacks/category/${categorySlug}`)
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
            <Container className="max-w-4xl py-8 px-4 ">
                <nav className="flex items-center space-x-2 py-4 text-sm">
                    <Link href="/" className="text-gray-500 hover:text-gray-700">
                        Home
                    </Link>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <span
                        className="text-gray-500 hover:text-gray-700 capitalize"
                    >
                        {category?.name}
                    </span>
                </nav>
                {/* Header */}
                <div className="flex flex-col ">
                    <div className="flex flex-col space-y-2">
                        {category ? (
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-grostek">
                                {category.name}
                                <p className="text-sm max-w-3xl">{category.description}</p>
                            </h1>
                        ) : (
                            <div>
                            <div className="h-10 w-1/3 bg-white/10 animate-pulse rounded-md" />
                            <div className="h-20 w-2/3 mt-2 bg-white/10 animate-pulse rounded-md" />
                            </div>
                        )}
                    </div>
                </div>

                {/* Compare Stacks button */}
                {techStacks && !loading &&(
                <div className="mt-6 mb-10 ">
                    <Link href={`/category/${categorySlug}/compare`}
                        rel="noopener noreferrer ">
                        <Button className="bg-white py-6 text-black text-sm cursor-pointer">
                            <span className="px-2 flex font-medium tracking-wide">Compare Stacks
                                {/* <ArrowRightIcon className="size-3 ml-1 mt-1" /> */}
                            </span>
                        </Button>
                    </Link>
                </div>
                )}

                {/*Controls  */}
                <div className="flex flex-col gap-2 mb-4">

                    {/* Search */}
                    <div className="flex-1 relative bg-black/40 mt-5">
                        <Input type="text" placeholder="Tech stacks" className="" onChange={(e) => setSearchItem(e.target.value)} />
                    </div>


                    {/* Sort options */}
                    <div className="flex gap-2">
                        <Button onClick={() => handleSortChange('popularity')}
                            className={`flex items-center px-4 py-3 rounded-sm border transition-all ${sortBy == "popularity" ? "bg-black/40  text-white hover:bg-black/80"
                                : 'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
                                }`}>
                            <TrendingUp className="w-4 h-4" />
                            <span>Popularity</span>
                            {sortBy == "popularity" && (
                                sortDirection == 'desc' ? <SortDesc className="" /> : <SortAsc className="" />
                            )}
                        </Button>
                    </div>

                    {/* Results */}
                    <div className="flex items-center justify-between  mt-3">
                        <p className="text-gray-500">Showing {filterStacks.length} of {techStacks.length} technologies </p>
                    </div>


                    {error && !loading && (
                        <div className="text-center py-16">
                            <div className="w-24 h-24 bg-black/70 rounded-full flex items-center justify-center mx-auto mb-6">
                                <AlertTriangle className="w-12 h-12 text-red-800" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Error Loading Data</h3>
                            <p className="text-gray-400 mb-4">{error}</p>
                            <button
                                onClick={() => window.location.reload()}
                                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 cursor-pointer text-white rounded-lg hover:shadow-lg transition-all"
                            >
                                Try Again
                            </button>
                        </div>
                    )}

                    {/* Techstacks */}
                    {loading ? (
                        <div className="flex flex-col mt-5 justify-between px-2">
                            <div className="grid grid-cols-1 gap-6">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="p-6 h-full w-full bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 animate-pulse">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-16 h-16 bg-gray-600 rounded-xl"></div>
                                            <div className="flex-1">
                                                <div className="h-6 bg-gray-600 rounded mb-2"></div>
                                                <div className="h-4 bg-gray-700 rounded mb-4"></div>
                                                <div className="flex gap-2">
                                                    <div className="h-8 w-20 bg-gray-600 rounded"></div>
                                                    <div className="h-8 w-24 bg-gray-600 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col mt-5 justify-center px-2">
                            <div className="grid grid-cols-1 gap-4">
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
                        </div>
                    )}
                    {!loading && !error && filterStacks.length === 0 && (
                        <div className="flex justify-center flex-col items-center gap-y-2">
                            <Search className="w-12 h-12 text-gray-400" />
                            <h3 className="text-2xl font-bold text-white mb-2">
                                {techStacks.length === 0 ? "No technologies found" : "No matches found"}
                            </h3>
                            <p className="text-gray-400">
                                {techStacks.length === 0
                                    ? "This category doesn't have any technologies yet."
                                    : "Sorry! Couldn't find any tech stacks matching your search"}
                            </p>
                        </div>
                    )}


                </div>
            </Container>
        </div>
    );
} 