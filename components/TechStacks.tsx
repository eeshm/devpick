import { ReactNode } from "react";
export type TechStackItem = {
  name: string;
  type: string;
  symbol: ReactNode;
  description: string;
  useCases: string[];
};
const techStack :TechStackItem [] = [
  {
    "name": "Next.js",
    "type": "Full-Stack Framework",
    "symbol": <Nextjs size="lg"/>,
    "description": "A React-based framework for building fast, SEO-friendly websites and apps. Supports server-side rendering, static site generation, and API routes.",
    "useCases": ["SEO websites", "Dashboards", "Full-stack React apps"]
  },
  {
    "name": "React",
    "type": "Frontend Framework",
    "symbol": "⚛️",
    "description": "A JavaScript library for building user interfaces using reusable components. Ideal for dynamic, interactive web apps.",
    "useCases": ["SPAs", "Web dashboards", "User interfaces"]
  },
  {
    "name": "Angular",
    "type": "Frontend Framework",
    "symbol": "🅰️",
    "description": "A full-featured frontend framework by Google. Includes built-in routing, forms, and state management using TypeScript.",
    "useCases": ["Enterprise apps", "Dashboards", "Complex SPAs"]
  },
  {
    "name": "Vue.js",
    "type": "Frontend Framework",
    "symbol": "🟩",
    "description": "A progressive JavaScript framework known for its simplicity and reactivity. Easy to integrate and scale with components.",
    "useCases": ["SPAs", "Web UIs", "Dashboards"]
  },
  {
    "name": "Nuxt.js",
    "type": "Full-Stack Framework",
    "symbol": "🌀",
    "description": "A Vue-based framework for building SSR and static websites. Handles routing, rendering, and structure out of the box.",
    "useCases": ["SEO web apps", "Vue full-stack projects", "Static sites"]
  },
  {
    "name": "Express.js",
    "type": "Backend Framework",
    "symbol": "🚂",
    "description": "A minimalist web framework for Node.js. Used to build APIs and web servers with flexibility and control.",
    "useCases": ["REST APIs", "Microservices", "Web servers"]
  },
  {
    "name": "NestJS",
    "type": "Backend Framework",
    "symbol": "📦",
    "description": "A structured Node.js framework built with TypeScript. Ideal for scalable and maintainable server-side applications.",
    "useCases": ["APIs", "Enterprise backends", "Modular systems"]
  },
  {
    "name": "Django",
    "type": "Backend Framework",
    "symbol": "🌐",
    "description": "A high-level Python framework that includes everything to build secure and scalable web apps quickly.",
    "useCases": ["Web apps", "APIs", "Admin panels"]
  },
  {
    "name": "Flask",
    "type": "Backend Framework",
    "symbol": "🧪",
    "description": "A lightweight Python framework for simple web apps and APIs. Flexible and easy to extend.",
    "useCases": ["Microservices", "REST APIs", "Small web apps"]
  },
  {
    "name": "Spring Boot",
    "type": "Backend Framework",
    "symbol": "☕",
    "description": "A powerful Java framework for building standalone and production-ready backend services with minimal setup.",
    "useCases": ["Enterprise systems", "REST APIs", "Banking apps"]
  },
  {
    "name": "Ruby on Rails",
    "type": "Backend Framework",
    "symbol": "💎",
    "description": "A Ruby-based framework that emphasizes convention over configuration. Great for rapid development.",
    "useCases": ["Startups", "CRUD apps", "Web platforms"]
  },
  {
    "name": "Laravel",
    "type": "Backend Framework",
    "symbol": "🛠️",
    "description": "A PHP framework with expressive syntax, built-in routing, ORM, and tools for rapid backend development.",
    "useCases": ["Web portals", "APIs", "E-commerce platforms"]
  },
  {
    "name": "Flutter",
    "type": "Mobile Framework",
    "symbol": "💙",
    "description": "A UI toolkit from Google for building native-like mobile, web, and desktop apps from a single codebase using Dart.",
    "useCases": ["Cross-platform apps", "Mobile UIs", "Prototypes"]
  },
  {
    "name": "React Native",
    "type": "Mobile Framework",
    "symbol": "📱",
    "description": "A framework for building native iOS and Android apps using React. Allows code reuse across platforms.",
    "useCases": ["Mobile apps", "Cross-platform UIs", "Startups"]
  },
  {
    "name": "SwiftUI",
    "type": "Mobile Framework",
    "symbol": "🍎",
    "description": "Apple's declarative UI framework for building modern apps on iOS, macOS, and watchOS using Swift.",
    "useCases": ["iOS apps", "macOS tools", "Apple ecosystem"]
  },
  {
    "name": "Kotlin Multiplatform",
    "type": "Mobile Framework",
    "symbol": "🤖",
    "description": "A framework for sharing code across Android, iOS, and other platforms using Kotlin. Ideal for native-like cross-platform apps.",
    "useCases": ["Mobile SDKs", "Cross-platform logic", "Enterprise apps"]
  },
  {
    "name": "Phoenix",
    "type": "Backend Framework",
    "symbol": "🔥",
    "description": "A fast, fault-tolerant Elixir framework built for high-concurrency web apps and real-time features.",
    "useCases": ["Chat apps", "Live updates", "Scalable systems"]
  },
  {
    "name": "Blitz.js",
    "type": "Full-Stack Framework",
    "symbol": "⚡",
    "description": "A full-stack React framework built on Next.js with everything included for monolithic app development.",
    "useCases": ["Full-stack apps", "Internal tools", "Startups"]
  },
  {
    "name": "RedwoodJS",
    "type": "Full-Stack Framework",
    "symbol": "🌲",
    "description": "A full-stack JS framework with React, GraphQL, and Prisma. Designed for building modern startups and JAMstack apps.",
    "useCases": ["JAMstack", "Startups", "Full-stack apps"]
  }
]

import { CardSpotlight } from "@/components/ui/card-spotlight";
import Nextjs from "./icons/Nextjs";



interface TechStack {
    name: string;
    description: string;
    symbol?: ReactNode ;
    useCases?: string[];
}
export default function TechStacks(){
    return(
        <div className="flex flex-col mt-10 items-center justify-center h-full">
            <h2 className="text-3xl font-bold mb-6">Major Tech Stacks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl">
                {techStack.map((tech, index) => (
                    <TechStackCard 
                        key={index} 
                        name={tech.name} 
                        description={tech.description} 
                        symbol={tech.symbol} 
                        useCases={tech.useCases || []}
                    />
                ))}
            </div>
           </div> 
    )
}


function TechStackCard({name,description,symbol,useCases} :TechStack ) {
    return(
    <CardSpotlight className="h-80 w-80  overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
    <div className="flex flex-col items-center justify- text-4xl text-center">
      {symbol} 
    <p className="font-bold relative z-20 mt-2 text-white">
      {name}
    </p>
      </div>
      <div className="text-neutral-200 mt-4 relative z-20">
        <ul className="list-none  mt-2">
        <Step title={description} />   
        </ul>
      </div>
      <div >
        {useCases && useCases.length > 0 && (
        <ul className="flex flex-wrap gap-2 mt-5 overflow-y-auto max-h-28 ">
          {useCases.map((useCase, index) => (
            <div className="inline-flex justify-center items-center text-center rounded-xs 
             border px-2  text-xs bg-black/30
            text-white font-semibold break-words max-w-full">
            <li key={index} className="p-0.5 py-">{useCase}</li>
            </div>
          ))}
        </ul>
        )}
      </div>
  
    </CardSpotlight>
    )
}

// function TechStackCard({ name, description, symbol, useCases }: TechStack) {
//   return (
    
//     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col h-full">
//       <div className="flex items-center mb-4">
//         <h3 className="text-2xl font-semibold text-gray-900 dark:text-white flex-grow">
//           {name} {symbol && <span className="ml-2 text-xl">{symbol}</span>}
//         </h3>
//       </div>
//       <p className="text-gray-700 dark:text-gray-300 mb-2">{description}</p>
//       {useCases && useCases.length > 0 && (
//         <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
//           {useCases.map((useCase, index) => (
//             <li key={index} className="mb-1">{useCase}</li>
//           ))}
//         </ul>
//       )}    
//     </div>
//     )
// }

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <p className="text-white">{title}</p>
    </li>
  );
};
