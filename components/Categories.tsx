'use client'
import React, { useMemo, useEffect, useState } from "react"
import CategoryCard from "./CategoryCard"
import { Search, AlertTriangle, RefreshCw, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { BlurFade } from "./ui/blur-fade"

interface Category {
    id?: string
    name: string
    description: string
    slug: string
    logo?: string
    created_at?: string
}

interface ApiResponse<T> {
    success: boolean
    error: string | null
    data: T
    count?: number
}

export default function Categories() {
    const [categories, setCategories] = useState<Category[]>([])
    const [loading, setLoading] = useState(true)
    const [searchItem, setSearchItem] = useState("")
    const [error, setError] = useState<string | null>(null)
    const pathname = usePathname()

    const fetchCategories = async () => {
        setLoading(true)
        try {
            const response = await fetch(`api/categories`, { next: { revalidate: 60 } })
            const json: ApiResponse<Category[]> = await response.json()
            if (json.success) {
                setCategories(json.data)
                setError(null)
            } else {
                setError(json.error || "Failed to load categories")
            }
        } catch {
            setError("An error occurred while fetching categories.")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCategories()
        const onVisibility = () => { if (document.visibilityState === 'visible') fetchCategories() }
        document.addEventListener('visibilitychange', onVisibility)
        return () => document.removeEventListener('visibilitychange', onVisibility)
    }, [pathname])

    const filteredCategories = useMemo(() => {
        const lower = searchItem.toLowerCase()
        return categories.filter(c =>
            c.name.toLowerCase().includes(lower) ||
            c.description.toLowerCase().includes(lower)
        )
    }, [categories, searchItem])

    return (
        <section className="px-4 sm:px-6 py-8 sm:py-10 max-w-5xl mx-auto w-full">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div>
                    <p className="dp-label mb-1">Categories</p>
                    {!loading && !error && (
                        <p style={{ fontFamily: 'var(--font-geist-mono)', fontSize: 12, color: 'var(--mono-500)' }}>
                            {filteredCategories.length} of {categories.length} shown
                        </p>
                    )}
                </div>

                {/* Search bar — full width on mobile */}
                <div className="dp-search-wrap w-full sm:w-auto" style={{ flex: '0 0 auto', minWidth: 0 }}>
                    <Search size={14} style={{ color: 'var(--mono-500)', flexShrink: 0 }} />
                    <input
                        id="category-search"
                        type="text"
                        placeholder="Search categories..."
                        value={searchItem}
                        onChange={(e) => setSearchItem(e.target.value)}
                        className="dp-search-input"
                    />
                    {searchItem && (
                        <button
                            onClick={() => setSearchItem('')}
                            style={{ background: 'none', border: 'none', color: 'var(--mono-500)', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}
                            aria-label="Clear search"
                        >
                            <X size={13} />
                        </button>
                    )}
                    <span className="dp-search-kbd hidden sm:inline">/</span>
                </div>
            </div>

            {/* States */}
            {loading ? (
                <div>
                    {/* Table head — sm+ only */}
                    <div className="hidden sm:flex items-center gap-3 pb-2" style={{ paddingLeft: 0 }}>
                        <span className="dp-label" style={{ minWidth: 28 }}>#</span>
                        <div style={{ width: 36, flexShrink: 0 }} />
                        <span className="dp-label" style={{ flex: 1 }}>CATEGORY</span>
                        <span className="dp-label">ACTIONS</span>
                    </div>
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="" style={{ padding: '16px 0' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                                <div className="dp-skeleton h-3 w-5 hidden sm:block" style={{ borderRadius: 0, minWidth: 28, marginTop: 2 }} />
                                <div className="dp-skeleton flex-shrink-0" style={{ width: 36, height: 36, borderRadius: 0 }} />
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <div className="dp-skeleton h-3 w-32 mb-2" style={{ borderRadius: 0 }} />
                                    <div className="dp-skeleton h-2.5 w-48 max-w-full" style={{ borderRadius: 0 }} />
                                </div>
                                <div className="hidden sm:flex flex-col gap-1.5" style={{ flexShrink: 0 }}>
                                    <div className="dp-skeleton h-6 w-14" style={{ borderRadius: 0 }} />
                                    <div className="dp-skeleton h-6 w-14" style={{ borderRadius: 0 }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : error ? (
                <div className="py-16 flex flex-col items-center gap-4">
                    <AlertTriangle size={20} style={{ color: 'var(--mono-500)' }} />
                    <p style={{ fontFamily: 'var(--font-geist-sans)', fontSize: 14, color: 'var(--mono-500)' }}>
                        {error}
                    </p>
                    <button onClick={fetchCategories} className="dp-btn flex items-center gap-2">
                        <RefreshCw size={13} /> Retry
                    </button>
                </div>
            ) : filteredCategories.length === 0 ? (
                <div className="py-16 flex flex-col items-center gap-3">
                    <Search size={18} style={{ color: 'var(--mono-600)' }} />
                    <p style={{ fontFamily: 'var(--font-geist-mono)', fontSize: 12, color: 'var(--mono-500)' }}>
                        No results for &ldquo;{searchItem}&rdquo;
                    </p>
                </div>
            ) : (
                <BlurFade delay={0.05}>
                    {/* Table head — sm+ only */}
                    <div className="dp-border-main hidden sm:flex items-center gap-3 pb-2">
                        <span className="dp-label" style={{ minWidth: 28 }}>#</span>
                        <div style={{ width: 36, flexShrink: 0 }} />
                        <span className="dp-label" style={{ flex: 1 }}>CATEGORY</span>
                        <span className="dp-label">ACTIONS</span>
                    </div>

                    {/* Rows */}
                    {filteredCategories.map((category, idx) => (
                        <CategoryCard
                            key={category.id}
                            index={idx + 1}
                            name={category.name}
                            description={category.description}
                            slug={category.slug}
                            logo={category.logo}
                            created_at={category.created_at}
                        />
                    ))}
                </BlurFade>
            )}
        </section>
    )
}
