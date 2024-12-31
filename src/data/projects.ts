// src/data/projects.ts
export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  url: string;
  context: string;
}

export const projects: Project[] = [
  {
    title: 'Modular SaaS Core',
    description: `
    Boilerplate project for multi-tenancy SaaS applications. Fork this project to have multi-tenancy authentication out of the box.    
     `,
    tags: ['NextJS', 'TypeScript'],
    image: 'https://via.placeholder.com/150',
    url: 'https://github.com/Ali-Ismail-1/modular-saas-core',
    context: `
    I made this project out of necesseity.
     I was building a SaaS platform and I needed a way to handle multi-tenancy authentication.
     Now whenever I have a new idea, I can focus on building modules for the core business logic and test ideas out quickly.    
    `,
  },
  {
    title: 'Pathfinder',
    description:
      'This is an application of recursive backtracking to solve mazes. Mazes are generated with BFS and solved with DFS.',
    tags: ['Python'],
    image: 'https://via.placeholder.com/150',
    url: 'https://github.com/Ali-Ismail-1/Pathfinder',
    context: `I was having trouble wrapping my head around recursive backtracking.
    So,I decided to implement it in a way that I could visualize it. This has helped me understand the concept better.`,
  },
  {
    title: 'MentalChai Website',
    description: `This is the source code for the MentalChai website. 
    This is a knowledge hub for growth in
    Software Engineering, Excellence, and Wellness.`,
    tags: ['NextJS', 'TypeScript'],
    image: 'https://via.placeholder.com/150',
    url: 'https://github.com/Ali-Ismail-1/mentalchai-website',
    context: `I wanted a site where I could share my thoughts and findings. 
    I wanted to create a site where I can share my insights and look them up in the future.`,
  },
];
