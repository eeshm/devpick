'use client'
import React, { ReactNode, useEffect, useState } from "react"
import CategoryCard from "./CategoryCard"
import { Search } from "lucide-react";

import { AlertTriangle } from "lucide-react";
interface Category {
    id?: string,
    name: string,
    description: string,
    slug: string,
    logo?: string,
    created_at?: string
}

interface Apiresponse<T> {
    success: boolean;
    error: string | null;
    data: T;
    count?: number;
}

export default function Categories() {
    const [categories, setCategories] = useState<Category[]>([])
    const [loading, setLoading] = useState(true)
    const [searchItem, setSearchItem] = useState("")
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true; // To avoid setting state on unmounted component
        async function fetchCategories() {
            try {
                const response = await fetch("api/categories"); //backend
                const json: Apiresponse<Category[]> = await response.json()

                if (json.success && isMounted) {
                    setCategories(json.data)
                } else {
                    setError(json.error || "Sorry! Failed to load categories");
                }
            } catch (error: any) {
                if (error.name === "AbortError") {
                    return;
                }
                setError("An error occurred while fetching categories.")

            } finally {
                setLoading(false)
            }
        }
        fetchCategories();
        return () => {
            isMounted = false; // Cleanup function
        };
    }, [])
    const filteredCategories = categories.filter(
        (category) =>
            category.name.toLowerCase().includes(searchItem.toLowerCase()) ||
            category.description.toLowerCase().includes(searchItem.toLowerCase())
    );
    return (
        <div>
            <div className="mt-5 flex justify-center">
                <h2 className=" inline-block flex-col justify-center items-center text-4xl font-thin font-opensans border-b-2 tracking-tight">
                    Major categories
                </h2>
            </div>

            <div className="mt-5 flex justify-center">
                <input
                    type="text"
                    placeholder="Search categories..."
                    value={searchItem}
                    onChange={(e) => setSearchItem(e.target.value)}
                    className="w-80 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            {loading ? (
                <div className="flex flex-col gap-4 items-center justify-center mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="h-80 w-80 p-8 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 animate-pulse">
                                <div className="w-16 h-16 bg-gray-600 rounded-2xl mb-6 "></div>
                                <div className="h-6 bg-gray-600 rounded mb-3"></div>
                                <div className="h-4 bg-gray-700 rounded mb-2"></div>
                                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : error ? (
                    <div className="text-center py-16">
                        <div className="w-24 h-24 bg-black/70 rounded-full flex items-center justify-center mx-auto mb-6">
                            <AlertTriangle className="w-12 h-12 text-red-800" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Error Loading Data</h3>
                        <p className="text-gray-400 mb-4">{error}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-3 bg-gradient-to-r cursor-pointer from-blue-500 to-purple-600 text-white rounded hover:shadow-lg transition-all"
                        >
                            Try Again
                        </button>
                    </div>
                    ) : (
                    <div className="flex flex-col gap-4 items-center justify-center mt-10">
                        {categories.filter((category => category.name.toLowerCase().includes(searchItem.toLowerCase())
                            || category.description.toLowerCase().includes(searchItem.toLowerCase()))).length === 0 && (
                                <div className="flex justify-center flex-col items-center gap-y-2">
                                    <div>
                                        <Search size={"34px"} />
                                    </div>
                                    <div className="text-gray-500 w-56 font-medium text-center">
                                        Sorry! Couldn't find any matching categories.
                                    </div>
                                </div>
                            )}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 ">
                            {filteredCategories.map((category) => (
                                <CategoryCard
                                    key={category.id}
                                    name={category.name}
                                    description={category.description}
                                    slug={category.slug}
                                    logo={category.logo}
                                    created_at={category.created_at} />
                            ))}
                        </div>
                    </div >
                    )
            }
                </div >
            );
}

