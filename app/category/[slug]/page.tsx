'use client';
import React,{useState,useEffect} from "react";
import { Filter, SortAsc, SortDesc, TrendingDownIcon, TrendingUp } from "lucide-react";
import { filter, i } from "framer-motion/client";
import BackgroundEffect from "@/components/BackgroundEffect";
import { TechStackCard } from "@/components/TechStackCard";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
    const [category, setCategory] = useState<Category | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [searchItem, setSearchItem] = useState<string>('');
    const [sortBy, setSortBy] = useState<'popularity' | 'name' | 'created_at'>('popularity')
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
    const [showFilters, setShowFilters] = useState<boolean>(false);
    const[selectedForComparison, setSelectedForComparison] = useState<string[]>([]);


    const categorySlug = 'frontend'; // his would come from router params

    useEffect(() => {
    setLoading(true)
    // Simulate API calls
    setTimeout(() => {
      setCategory({
        id: '1',
        name: 'Frontend Development',
        slug: 'frontend',
        description: 'Data storage and management solutions including relational and NoSQL databases. These technologies handle data persistence, querying, and management for applications of all scales, from simple web apps to enterprise systems.'
      })
      
      setTechStacks([
        {
          id: '1',
          name: 'React',
          slug: 'react',
          category_slug: 'frontend',
          logo: '⚛️',
          short_description: 'A JavaScript library for building user interfaces with component-based architectureA JavaScript library for building user interfaces with component-based architectureA JavaScript library for building user interfaces with component-based architectureA JavaScript library for building user interfaces with component-based architecture',
          detailed_description: 'React is a free and open-source front-end JavaScript library...',
          official_docs: 'https://reactjs.org',
          learning_curve: 3,
          popularity: 95,
          pros: ['Virtual DOM', 'Large ecosystem', 'Strong community'],
          cons: ['Steep learning curve', 'Fast-moving ecosystem'],
          major_use_cases: ['Single Page Applications', 'Mobile apps with React Native'],
          basic_prerequisites: ['JavaScript', 'HTML', 'CSS'],
          created_at: '2024-01-01'
        },
        {
          id: '2',
          name: 'Vue.js',
          slug: 'vue',
          category_slug: 'frontend',
          logo: '🟢',
          short_description: 'Progressive JavaScript framework for building user interfaces with gentle learning curve',
          detailed_description: 'Vue.js is an open-source model–view–viewmodel front end...',
          official_docs: 'https://vuejs.org',
          learning_curve: 2,
          popularity: 88,
          pros: ['Easy to learn', 'Great documentation', 'Flexible'],
          cons: ['Smaller ecosystem than React', 'Less job opportunities'],
          major_use_cases: ['Progressive web apps', 'Single page applications'],
          basic_prerequisites: ['JavaScript', 'HTML', 'CSS'],
          created_at: '2024-01-01'
        },
        {
          id: '3',
          name: 'Angular',
          slug: 'angular',
          category_slug: 'frontend',
          logo: '🅰️',
          short_description: 'Full-featured TypeScript framework for building scalable web applications',
          detailed_description: 'Angular is a TypeScript-based free and open-source web application framework...',
          official_docs: 'https://angular.io',
          learning_curve: 4,
          popularity: 82,
          pros: ['Full framework', 'TypeScript first', 'Enterprise ready'],
          cons: ['Complex', 'Heavy', 'Steep learning curve'],
          major_use_cases: ['Enterprise applications', 'Large-scale projects'],
          basic_prerequisites: ['TypeScript', 'JavaScript', 'HTML', 'CSS'],
          created_at: '2024-01-01'
        },
        {
          id: '4',
          name: 'Svelte',
          slug: 'svelte',
          category_slug: 'frontend',
          logo: '🔥',
          short_description: 'Compile-time framework that generates vanilla JavaScript for optimal performance',
          detailed_description: 'Svelte is a free and open-source front end compiler...',
          official_docs: 'https://svelte.dev',
          learning_curve: 2,
          popularity: 75,
          pros: ['No virtual DOM', 'Small bundle size', 'Great performance'],
          cons: ['Smaller ecosystem', 'Less tooling', 'Newer framework'],
          major_use_cases: ['High-performance apps', 'Small to medium projects'],
          basic_prerequisites: ['JavaScript', 'HTML', 'CSS'],
          created_at: '2024-01-01'
        }
      ])
      setLoading(false)
    },0)
  }, [categorySlug])


  const filterStacks  = techStacks.filter((stack)=>{
    stack.name.toLowerCase().includes(searchItem.toLowerCase()) ||
    stack.short_description.toLowerCase().includes(searchItem.toLowerCase())
  })


  const getDifficultyColor = (difficulty: string) => {
    if (difficulty === 'easy') return 'text-green-500';
    if (difficulty === 'medium') return 'text-yellow-500';
    if (difficulty === 'hard') return 'text-red-500';
    return 'text-gray-500';
  }

  const handleComparisonToggle = (slug: string) => {
    setSelectedForComparison(prev => {
      if (prev.includes(slug)) {
        return prev.filter(item => item !== slug);
      } else {
        return [...prev, slug];
      }
    });
  }

  const handleSortChange = (newSortBuy: typeof sortBy) => {
    if (newSortBuy === sortBy) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(newSortBuy);
      setSortDirection('asc');
    }
  }



    return(
      <div className="min-h-screen">
        <BackgroundEffect/>
        <Container className="max-w-4xl py-8 px-4 ">
          {/* Header */}
          <div className="flex flex-col ">
            <div className="flex flex-col space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-grostek">{category ? category.name : "Loading..."}</h1>
              <p className="text-sm max-w-3xl">{category ? category.description :" " }</p>
            </div>
          </div>

          {/*Controls  */}
          <div className="flex flex-col gap-2 mb-4">

            {/* Search */}
          <div className="flex-1 relative bg-black/40 mt-5">
            <Input type="text" placeholder="Tech stacks"  className=""/>
          </div>


          {/* Sort options */}
          <div className="flex gap-2">
            <Button onClick={()=>handleSortChange('popularity')}
            className={`flex items-center px-4 py-3 rounded-sm border transition-all ${
              sortBy=="popularity"? "bg-black/40  text-white hover:bg-black/80"
                  :'bg-white/10 border-white/20 text-gray-300 hover:bg-white/20'
            }`}>
              <TrendingUp className="w-4 h-4"/>
              <span>Popularity</span>
              {sortBy == "popularity" && (
                sortDirection =='desc' ? <SortDesc className=""/> : <SortAsc className=""/> 
              )}
              </Button>
          </div>

          {/* Results */}
          <div className="flex items-center justify-between  mt-3">
            <p className="text-gray-500">Showing {filterStacks.length} of {techStacks.length} technologies </p>
          </div> 

          {/* Techstacks */}
          {loading ? (
            <div>
              Loading...
            </div>
          ):(
            <div className="flex flex-col mt-5 justify-center px-2">
            <div className="grid grid-cols-1 gap-4">
              {techStacks.map((stack,id)=>(
                <TechStackCard 
                id={stack.id}
                name={stack.name}
                short_description={stack.short_description}
                logo={stack.logo}
                major_use_cases={stack.major_use_cases}
                slug={stack.slug}
                official_docs={stack.official_docs}/>
              ))}
            </div>
            </div>
          )}

        </div>
        </Container>

        </div>
    );   
} 





        // <div className="container mx-auto px-4 py-8">
          {/* <h1 className="text-4xl font-bold mb-6">{category ? category.name : 'Loading...'}</h1> */}
          {/* <p className="text-gray-600 mb-6">{category ? category.description : ''}</p> */}
          {/* {loading ? ( */}
            // <p>Loading tech stacks...</p>
          // ) : (
            // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* {techStacks.map((stack) =>  */}
              // <TechStackCard 
              //   key={stack.id}
              //   name={stack.name}
              //   short_description={stack.short_description}
              //   logo={stack.logo}
              //   major_use_cases={stack.major_use_cases}
              //   slug={s
                


            {/* </div> */}
            // )}
            {/* </div> */}