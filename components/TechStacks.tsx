const techStack:[
  {
    "name": "React",
    "description": "A JavaScript library for building user interfaces, maintained by Meta.",
    "type": "Frontend Framework",
    "symbol": "⚛️",
    "useCases": ["Web development", "Single Page Applications (SPA)"]
  },
  {
    "name": "Angular",
    "description": "A TypeScript-based open-source web application framework maintained by Google.",
    "type": "Frontend Framework",
    "symbol": "🅰️",
    "useCases": ["Enterprise web apps", "SPAs", "Dashboards"]
  },
  {
    "name": "Vue.js",
    "description": "A progressive JavaScript framework for building user interfaces.",
    "type": "Frontend Framework",
    "symbol": "🟩",
    "useCases": ["Frontend web apps", "SPAs", "Lightweight UIs"]
  },
  {
    "name": "Next.js",
    "description": "A full-stack React framework with server-side rendering and static site generation.",
    "type": "Full-Stack Framework",
    "symbol": "➡️",
    "useCases": ["SSR web apps", "Static websites", "React full-stack"]
  },
  {
    "name": "Nuxt.js",
    "description": "A Vue.js framework for building server-side rendered or statically generated applications.",
    "type": "Full-Stack Framework",
    "symbol": "🌀",
    "useCases": ["Vue full-stack apps", "Static websites", "SEO-friendly apps"]
  },
  {
    "name": "Express.js",
    "description": "A minimal and flexible Node.js web application framework.",
    "type": "Backend Framework",
    "symbol": "",
    "useCases": ["REST APIs", "Backend services", "Web apps"]
  },
  {
    "name": "NestJS",
    "description": "A progressive Node.js framework for building scalable and efficient server-side applications.",
    "type": "Backend Framework",
    "symbol": "",
    "useCases": ["Enterprise APIs", "Modular backends", "Microservices"]
  },
  {
    "name": "Django",
    "description": "A high-level Python framework that encourages rapid development and clean design.",
    "type": "Backend Framework",
    "symbol": "",
    "useCases": ["Web apps", "APIs", "Admin panels"]
  },
  {
    "name": "Flask",
    "description": "A micro web framework written in Python.",
    "type": "Backend Framework",
    "symbol": "",
    "useCases": ["Lightweight APIs", "Microservices", "Prototypes"]
  },
  {
    "name": "Spring Boot",
    "description": "A Java-based framework that simplifies creating production-ready Spring applications.",
    "type": "Backend Framework",
    "symbol": "",
    "useCases": ["Enterprise backends", "APIs", "Monolithic systems"]
  },
  {
    "name": "Ruby on Rails",
    "description": "A web application framework written in Ruby that follows the MVC pattern.",
    "type": "Backend Framework",
    "symbol": "💎",
    "useCases": ["Web apps", "Startups", "Rapid development"]
  },
  {
    "name": "Laravel",
    "description": "A PHP framework for building web applications with elegant syntax.",
    "type": "Backend Framework",
    "symbol": "",
    "useCases": ["Web development", "REST APIs", "E-commerce"]
  },
  {
    "name": "Flutter",
    "description": "A UI toolkit by Google for building natively compiled apps from a single codebase.",
    "type": "Mobile Framework",
    "symbol": "💙",
    "useCases": ["Cross-platform apps", "Mobile and web apps", "UI-heavy applications"]
  },
  {
    "name": "React Native",
    "description": "A framework for building native mobile apps using React.",
    "type": "Mobile Framework",
    "symbol": "📱",
    "useCases": ["iOS and Android apps", "Cross-platform mobile apps"]
  },
  {
    "name": "SwiftUI",
    "description": "A modern UI framework by Apple for building iOS, macOS, and watchOS apps.",
    "type": "Mobile Framework",
    "symbol": "🍎",
    "useCases": ["iOS apps", "macOS apps", "Watch apps"]
  },
  {
    "name": "Kotlin Multiplatform",
    "description": "A Kotlin-based framework for sharing code across Android, iOS, and other platforms.",
    "type": "Mobile Framework",
    "symbol": "🤖",
    "useCases": ["Mobile apps", "Cross-platform mobile development"]
  },
  {
    "name": "Phoenix",
    "description": "A high-performance backend web framework written in Elixir.",
    "type": "Backend Framework",
    "symbol": "🔥",
    "useCases": ["Real-time apps", "High concurrency backends"]
  },
  {
    "name": "Blitz.js",
    "description": "A fullstack React framework built on Next.js, with everything included out of the box.",
    "type": "Full-Stack Framework",
    "symbol": "",
    "useCases": ["Monolithic React apps", "Full-stack JS applications"]
  },
  {
    "name": "RedwoodJS",
    "description": "A full-stack framework built with React, GraphQL, and Prisma for modern web apps.",
    "type": "Full-Stack Framework",
    "symbol": "",
    "useCases": ["JAMstack apps", "Full-stack startups"]
  }
]



interface TechStack {
    name: string;
    description: string;
    type: string;
    symbol?: string;
    useCases?: string[];
}
export default function TechStacks(){
    return(
        <div className="flex flex-col items-center justify-center h-full">

           </div> 
    )
}


function TechStackCard({name,description,} :  TechStack ) {
    return(

    )
}