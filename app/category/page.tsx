import Categories from "@/components/Categories";
import Link from "next/link";
import { ChevronRight } from 'lucide-react'
import Header from "@/components/Header";

export default async function CategoriesRedirect() {
  return (
    <div className="min-h-screen">
      {/* <Header/> */}
      <div className="flex flex-col mx-auto  max-w-4xl px-4 ">
        <nav className="flex items-center space-x-2 py-4 text-sm">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span
            className="text-gray-500 hover:text-gray-700 capitalize"
          >
            Categories
          </span>
        </nav>
        <h1 className="text-4xl text-center md:text-5xl font-light tracking-tight mb-4">
          Choose a Category to Dive In
        </h1>
        <p className="text-center">
          Select a category below to explore and compare the best tech stacks
          available in that space.
        </p>

        <div className="mt-10 w-full max-w-4xl">
          <Categories />
        </div>
      </div>
    </div>
  );
}
