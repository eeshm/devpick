'use client'
import React, { useState, useEffect } from 'react'
import Container from './Container'
import { AlertTriangle } from 'lucide-react'
import { TechStackDetailCard } from './TechStackDetailCard'


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
    logo: string
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
export default function TechStackDetailPage({ techStackSlug = 'react' }: { techStackSlug: string }) {
    const [techStack, setTechStack] = useState<TechStack | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null)


    useEffect(() => {
        let ignore = false;
        async function fetchTechStack() {
            setLoading(true);
            setTechStack(null);

            try {
                const repsonse = await fetch(`/api/tech-stacks/${techStackSlug}`)
                const json: ApiResponse<TechStack> = await repsonse.json()

                if (!ignore) {
                    if (json.success) {
                        setTechStack(json.data)
                    }
                    else {
                        setError(json.error || "Error while fetching tech stack")
                    }
                }

            } catch (error) {
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
        fetchTechStack();
        return () => {
            ignore = true;
        }
    }, [techStackSlug])



    {
        if (!techStack) {
            return (
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-white mb-4">Tech Stack Not Found</h1>
                        <p className="text-gray-400 mb-6">The requested technology could not be found.</p>
                        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg">
                            Back to Categories
                        </button>
                    </div>
                </div>
            )
        }
    }


    return (
        <div className='min-h-screen'>
            <Container className='max-w-7xl py-8 px-4'>

                {error && !loading && (
                    <div className="text-center py-16">
                        <div className="w-24 h-24 bg-black/70 rounded-full flex items-center justify-center mx-auto mb-6">
                            <AlertTriangle className="w-12 h-12 text-red-800" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Error Loading Data</h3>
                        <p className="text-gray-400 mb-4">{error}</p>
                        <button
                            onClick={() => window.location.reload}
                            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 cursor-pointer text-white rounded-lg hover:shadow-lg transition-all"
                        >
                            Try Again
                        </button>
                    </div>
                )}



                {loading ? (
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                        <div className="max-w-6xl mx-auto px-6 py-8">
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
                        <TechStackDetailCard {...techStack} />

                    </div>
                )}

                {!loading && !error && techStack == null && (
                    <div className="flex justify-center flex-col items-center gap-y-2">
                        <h3 className="text-2xl font-bold text-white mb-2">No technology found</h3>
                        <p className="text-gray-400">Look for another techstack</p>
                    </div>
                )}

            </Container>
        </div>
    )
}