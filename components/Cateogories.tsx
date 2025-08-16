'use client'
import React, { ReactNode, useEffect, useState } from "react"
import CategoryCard from "./CategoryCard"
// const categories = [
//     {
//         "id":"dadfdfad",
//         "name": "Backend Development",
//         "slug": "backend-development",
//         "description": "Server-side technologies and frameworks that handle business logic, data processing, and API development. These technologies power the behind-the-scenes functionality that enables web applications to process requests and manage data.These technologies power the behind-the-scenes functionality that enables web applications to process requests and manage data.",
//         "logo": "server icon",
//         "created_at":"2323"
//     },
//     {
//         "id":"dfafda",
//         "name": "Backend Development",
//         "slug": "backend-development",
//         "description": "Server-side technologies and frameworks that handle business logic, data processing, and API development. These technologies power the behind-the-scenes functionality that enables web applications to process requests and manage data.These technologies power the behind-the-scenes functionality that enables web applications to process requests and manage data.",
//         "logo": "server icon",
//         "created_at":"2323"
//     }
// ]

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
                    setError(json.error || "Failed to load categories");
                }
            } catch (error) {
                if (isMounted)
                    setError("An error occurred while fetching categories.")
            } finally {
                if (isMounted)
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
            <div className="mt-10 flex justify-center">
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
                <div className="flex flex-col gap-4 items-center justify-center mt-10">
                    <div className="text-red-500 text-2xl font-medium">
                        {error}
                    </div>
                </div>
            ) : (
                <div className="flex flex-col gap-4 items-center justify-center mt-10">
                        {categories.filter((category => category.name.toLowerCase().includes(searchItem.toLowerCase())
                            || category.description.toLowerCase().includes(searchItem.toLowerCase()))).length === 0 && (
                                <div className="flex justify-center  items-center">
                                    <div className="text-black text-2xl  font-medium text-center">
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

