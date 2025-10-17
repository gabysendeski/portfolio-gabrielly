import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Landing Page - Especialista Certificada em Cílios e Sobrancelhas ',
    description: 'Landing page profissional para Beauty Academy- Ketlyn Carvalho - Especialista Certificada em Cílios e Sobrancelhas',
    detailedDescription: 'Uma plataforma de e-commerce completa desenvolvida com Next.js 13+ App Router, TypeScript, Tailwind CSS e integração com Stripe para pagamentos. Inclui sistema de autenticação, carrinho de compras, painel administrativo e muito mais.',
    image: './images/projects/image-ketlyn.png',
    technologies: ['Next.js 13', 'TypeScript', 'Tailwind CSS', 'React'],
    githubUrl: 'https://github.com/gabysendeski/studio-ketlyn-carvalho-landin',
    liveUrl: 'https://gabysendeski.github.io/studio-ketlyn-carvalho-landin/',
    category: 'web',
    featured: true,
    createdAt: '2025-10-08'
  },
  {
    id: '2',
    title: 'Dashboard Analytics',
    description: 'Dashboard interativo para análise de dados',
    detailedDescription: 'Dashboard responsivo para visualização e análise de dados em tempo real. Desenvolvido com Next.js 13 App Router, TypeScript e Chart.js, oferece gráficos interativos, filtros avançados e exportação de relatórios.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    technologies: ['Next.js 13', 'TypeScript', 'Chart.js', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/gabysendeski/dashboard-analytics',
    liveUrl: 'https://dashboard-demo.vercel.app',
    category: 'web',
    featured: true,
    createdAt: '2024-03-10'
  },
  {
    id: '3',
    title: 'Landing Page Responsiva',
    description: 'Landing page moderna e otimizada para conversões',
    detailedDescription: 'Landing page desenvolvida com foco em performance e conversões. Utiliza Next.js, TypeScript e Tailwind CSS para criar uma experiência rápida e responsiva. Inclui formulários otimizados, animações suaves e integração com analytics.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Hook Form'],
    githubUrl: 'https://github.com/gabysendeski/landing-page',
    liveUrl: 'https://landing-demo.vercel.app',
    category: 'web',
    createdAt: '2024-02-20'
  },
  {
    id: '4',
    title: 'Portfolio Pessoal',
    description: 'Site portfolio com design moderno e interativo',
    detailedDescription: 'Portfolio pessoal desenvolvido com Next.js 13+, apresentando projetos e habilidades de forma interativa. Inclui animações suaves, design responsivo e otimizações de performance.',
    image: './images/projects/image-portfolio.png',
    technologies: ['Next.js 13', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/gabysendeski/portfolio-gabrielly',
    liveUrl: 'https://gabysendeski.github.io/portfolio-gabrielly/',
    category: 'web',
    createdAt: '2025-10-10'
  },
  {
    id: '5',
    title: 'Gestão Escolar',
    description: 'Este projeto é um sistema de gestão escolar desenvolvido com Vue.js no frontend e Node.js com Express no backend, utilizando um banco de dados relacional.',
    detailedDescription: 'Sistema de gestão escolar desenvolvido com Vue, Node.js Node.js com Express no backend, utilizando um banco de dados relacional.',
    image: './images/projects/image-gestao-escolar.png',
    technologies: ['Vue', 'Node.js', 'Express', 'PostgreSQL'],
    githubUrl: 'https://github.com/gabysendeski/akyama',
    liveUrl: 'https://gestao-demo.vercel.app',
    category: 'web',
    createdAt: '2023-11-20'
  },
  {
    id: '6',
    title: 'API REST Completa',
    description: 'API robusta para aplicações web',
    detailedDescription: 'API REST desenvolvida com Node.js, Express e MongoDB. Inclui autenticação JWT, validação de dados, documentação com Swagger, testes automatizados e deploy em cloud.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger', 'Jest'],
    githubUrl: 'https://github.com/gabysendeski/api-rest',
    liveUrl: 'https://api-demo.herokuapp.com/docs',
    category: 'other',
    createdAt: '2023-09-15'
  }
];

export const featuredProjects = projects.filter(project => project.featured);