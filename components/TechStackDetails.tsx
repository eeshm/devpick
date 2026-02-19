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
                const response = await fetch(`/api/tech-stacks/${techStackSlug}`, {
                    next: { revalidate: 60 },
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
            <Container className='max-w-5xl px-4 sm:px-6'>
                <nav className="flex items-center gap-1.5 py-4 sm:py-5">
                    <Link href="/" className="dp-breadcrumb-link">
                        Home
                    </Link>
                    <ChevronRight size={12} style={{ color: 'var(--mono-700)', flexShrink: 0 }} />
                    <Link
                        href={`/category/${categorySlug}`}
                        className="dp-breadcrumb-link"
                        style={{ textTransform: 'capitalize' }}
                    >
                        {categorySlug}
                    </Link>
                    <ChevronRight size={12} style={{ color: 'var(--mono-700)', flexShrink: 0 }} />
                    <span className="dp-breadcrumb-current">
                        {techStack?.name}
                    </span>
                </nav>

                {error && !loading && (
                    <div className="py-20 flex flex-col items-center gap-4">
                        <AlertTriangle size={20} style={{ color: 'var(--mono-600)' }} />
                        <p style={{ fontFamily: 'var(--font-geist-sans)', fontSize: 14, color: 'var(--mono-500)' }}>{error}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="dp-btn"
                        >
                            Try Again
                        </button>
                    </div>
                )}



                {loading ? (
                    <div className="py-8">
                        {/* Header skeleton */}
                        <div className="flex items-start justify-between gap-4 pb-8 dp-border-bottom mb-8">
                            <div style={{ flex: 1 }}>
                                <div className="dp-skeleton h-3 w-20 mb-4" />
                                <div className="dp-skeleton h-10 w-56 mb-3" />
                                <div className="dp-skeleton h-4 w-full max-w-sm mb-2" />
                                <div className="dp-skeleton h-4 w-3/4 max-w-xs mb-5" />
                                <div className="flex gap-2">
                                    <div className="dp-skeleton h-6 w-24" />
                                    <div className="dp-skeleton h-6 w-20" />
                                </div>
                            </div>
                            <div className="dp-skeleton w-16 h-16 flex-shrink-0" />
                        </div>
                        {/* Body skeleton */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="md:col-span-2 flex flex-col gap-6">
                                <div className="dp-skeleton h-3 w-16 mb-2" />
                                <div className="dp-skeleton h-4 w-full mb-2" />
                                <div className="dp-skeleton h-4 w-full mb-2" />
                                <div className="dp-skeleton h-4 w-4/5" />
                                <div className="dp-skeleton h-3 w-16 mt-4 mb-2" />
                                <div className="grid grid-cols-2 gap-4">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="dp-skeleton h-4 w-full" />
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="dp-skeleton h-3 w-20 mb-2" />
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="dp-skeleton h-5 w-16" />
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="py-4">
                        {techStack && <TechStackDetailCard {...techStack} />}
                    </div>
                )}
                {!loading && !error && (
                    <>
                        {techStack === null ? (
                            <div className="py-20 flex flex-col items-center gap-3">
                                <p style={{ fontFamily: 'var(--font-geist-mono)', fontSize: 12, color: 'var(--mono-500)' }}>No technology found.</p>
                                <Link href="/category" className="dp-btn">Browse Categories</Link>
                            </div>
                        ) : techStack.category_slug !== categorySlug ? (
                            <div className="py-20 flex flex-col items-center gap-3">
                                <p style={{ fontFamily: 'var(--font-geist-mono)', fontSize: 12, color: 'var(--mono-500)' }}>This technology isn&apos;t in this category.</p>
                                <Link href={`/category/${categorySlug}`} className="dp-btn">Go Back</Link>
                            </div>
                        ) : null}
                    </>
                )}


            </Container>
        </div>
    )
}