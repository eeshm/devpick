'use client'
import React, { useState, useEffect } from 'react'
import Container from './Container'
import { AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { TechStackDetailCard } from './TechStackDetailCard'
import { LoaderOne } from './ui/loader'

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
    learning_curve?: string
    popularity?: string
    pros: string[]
    cons: string[]
    major_use_cases: string[]
    basic_prerequisites: string[]
    created_at: string
    categories?: Category
}
interface ApiResponse<T> {
    success: boolean
    error: string | null
    data: T
}
export default function TechStackDetailPage({ techStackSlug, categorySlug }: { techStackSlug: string, categorySlug: string }) {
    const [techStack, setTechStack] = useState<TechStack | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null)


    useEffect(() => {
        let ignore = false;
        async function fetchTechStack() {
            setLoading(true);
            setError(null)

            try {
                const response = await fetch(`/api/tech-stacks/${techStackSlug}` ,{
                    next:{revalidate:60},
                })
                const json: ApiResponse<TechStack> = await response.json()

                if (!ignore) {
                    if (json.success) {
                        setTechStack(json.data)
                    }
                    else {
                        setError(json.error || "Error while fetching tech stack")
                    }
                }
            }catch (error) {
                if (!ignore) {
                    console.error("Error fetching tech stack", error)
                    setError("An error occured while fetching tech stack");
                    setTechStack(null)
                }
            } finally {
                if (!ignore) {
                    setLoading(false);
                }
            }
        }
        fetchTechStack()
        return () => {
            ignore = true
        }
    }, [techStackSlug, categorySlug])



    
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <LoaderOne />
            </div>
        );
    }

    return (
        <div className='min-h-screen'>
            <Container className='max-w-7xl py-8 px-4'>
                <nav className="flex items-center space-x-2 py-4 md:pb-10 text-sm">
                    <Link href="/" className="text-gray-500 hover:text-gray-700">
                        Home
                    </Link>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    
                    <Link href={`/category/${categorySlug}`}
                        className="text-gray-500 hover:text-gray-700 capitalize"
                    >
                        {categorySlug}
                    </Link>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <span className='text-gray-500'> {techStack?.name}</span>
                </nav>

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



                {loading ? (
                    <div className="min-h-screen ">
                        <div className="max-w-6xl mx-auto px-4">
                            <div className="animate-pulse">
                                {/* Header skeleton */}
                                <div className="flex items-center space-x-4 mb-8">
                                    <div className="w-24 h-24 bg-gray-600 rounded-2xl"></div>
                                    <div className="flex-1">
                                        <div className="h-8 bg-gray-600 rounded mb-3 w-1/3"></div>
                                        <div className="h-4 bg-gray-700 rounded mb-2 w-2/3"></div>
                                        <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    <div className="lg:col-span-2 space-y-6">
                                        <div className="h-64 bg-gray-600 rounded-2xl"></div>
                                        <div className="h-32 bg-gray-600 rounded-2xl"></div>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="h-48 bg-gray-600 rounded-2xl"></div>
                                        <div className="h-32 bg-gray-600 rounded-2xl"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        {techStack && <TechStackDetailCard {...techStack} />}

                    </div>
                )}
                {!loading && !error && (
                    <>
                        {techStack === null ? (
                            <div className="flex justify-center flex-col items-center gap-y-2">
                                <h3 className="text-2xl font-bold text-white mb-2">No technology found</h3>
                                <p className="text-gray-400">Look for another tech stack</p>
                            </div>
                        ) : techStack.category_slug !== categorySlug ? (
                            <div className="flex justify-center flex-col items-center gap-y-2">
                                <h3 className="text-2xl font-bold text-white mb-2">This technology can't be found in this category</h3>
                                <p className="text-gray-400">Look for another tech stack or category</p>
                            </div>
                        ) : null}
                    </>
                )}


            </Container>
        </div>
    )
}