import React,{useState} from "react"



const mockTechStacks = [
  {
    id: '1',
    name: 'React',
    slug: 'react',
    logo_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    short_description: 'A JavaScript library for building user interfaces',
    detailed_description: 'React is a free and open-source front-end JavaScript library for building user interfaces based on components.',
    official_docs: 'https://react.dev',
    learning_curve: 'Intermediate',
    popularity: 'Very High',
    pros: ['Large ecosystem', 'Virtual DOM', 'Component-based', 'Strong dev tools'],
    cons: ['Steep learning curve', 'Requires additional libraries', 'JSX syntax complexity'],
    major_use_cases: ['SPAs', 'PWAs', 'Mobile apps with React Native', 'Large-scale apps'],
    basic_prerequisites: ['JavaScript ES6+', 'HTML & CSS', 'DOM manipulation', 'npm/yarn']
  },
  {
    id: '2',
    name: 'Vue.js',
    slug: 'vue',
    logo_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    short_description: 'The Progressive JavaScript Framework',
    detailed_description: 'Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces.',
    official_docs: 'https://vuejs.org',
    learning_curve: 'Beginner',
    popularity: 'High',
    pros: ['Easy to learn', 'Excellent docs', 'Small bundle size', 'Progressive adoption'],
    cons: ['Smaller ecosystem', 'Less job demand', 'Fewer libraries'],
    major_use_cases: ['Small-medium apps', 'Rapid prototyping', 'E-commerce', 'CMS'],
    basic_prerequisites: ['Basic JavaScript', 'HTML & CSS', 'Reactive programming', 'CLI basics']
  },
  {
    id: '3',
    name: 'Angular',
    slug: 'angular',
    logo_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    short_description: 'Platform for building mobile and desktop web applications',
    detailed_description: 'Angular is a TypeScript-based free and open-source web application framework.',
    official_docs: 'https://angular.io',
    learning_curve: 'Advanced',
    popularity: 'High',
    pros: ['Full framework', 'TypeScript built-in', 'Powerful CLI', 'Enterprise ready'],
    cons: ['Steep learning curve', 'Complex architecture', 'Heavy bundle size'],
    major_use_cases: ['Enterprise apps', 'Complex dashboards', 'Admin panels', 'Large teams'],
    basic_prerequisites: ['TypeScript', 'HTML & CSS', 'RxJS', 'Angular CLI']
  },
  {
    id: '4',
    name: 'Svelte',
    slug: 'svelte',
    logo_url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
    short_description: 'Cybernetically enhanced web apps',
    detailed_description: 'Svelte is a radical new approach to building user interfaces with compile-time optimizations.',
    official_docs: 'https://svelte.dev',
    learning_curve: 'Beginner',
    popularity: 'Growing',
    pros: ['No virtual DOM', 'Tiny bundle size', 'Great performance', 'Simple syntax'],
    cons: ['Smaller ecosystem', 'Limited tooling', 'Newer technology'],
    major_use_cases: ['Performance-critical apps', 'Small projects', 'Static sites', 'Widgets'],
    basic_prerequisites: ['Basic JavaScript', 'HTML & CSS', 'Component concepts']
  }
];


