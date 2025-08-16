'use client';
import React,{useState,useEffect} from "react";
import { Filter } from "lucide-react";

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
    data:T
    count?: number;
}


export default function TechStacks() {
    const [techStacks, setTechStacks] = useState<TechStack[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [searchItems, setSearchItems] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [filter, setFilter] = useState<string>("");
    const [filteredTechStacks, setFilteredTechStacks] = useState<TechStack[]>([]);




    return(
        <h1>
            d
        </h1>
    )
}


// export default function TechStacks() {
//   return (
//     <div className="flex flex-col mt-10 items-center justify-center ">
//       <h2 className="text-4xl font-light font-opensans mb-6 border-b-2 tracking-tight">Major Tech Stacks - categorie name</h2>
//       {techStack && techStack.length>0 &&(
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
//         {techStack.map((tech, index) => (
//           <TechStackCard
//             key={index}
//             name={tech.name}
//             short_description={tech.short_description}
//             symbol={tech.symbol}
//             major_use_cases={tech.major_use_cases || []}
//             slug={tech.slug}
//           />
//         ))}
//       </div>
//       )}
//     </div>
//   )
// }
