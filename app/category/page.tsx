import Categories from "@/components/Categories";
import Link from "next/link";
import { ChevronRight } from 'lucide-react'

export default async function CategoriesRedirect() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col mx-auto max-w-5xl px-4 sm:px-6">
        <nav className="flex items-center gap-1.5 py-5">
          <Link
            href="/"
            className="dp-breadcrumb-link"
          >
            Home
          </Link>
          <ChevronRight size={12} style={{ color: 'var(--mono-700)', flexShrink: 0 }} />
          <span className="dp-breadcrumb-current">
            Categories
          </span>
        </nav>

        <div className="mt-2">
          <Categories />
        </div>
      </div>
    </div>
  );
}
