'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FiGithub, FiExternalLink, FiCode, FiSmartphone, FiGlobe, FiCpu, FiServer, FiLayers } from 'react-icons/fi';

const projects = [
  // AI & Machine Learning (3개)
  {
    id: 1,
    title: 'AI Chat Assistant',
    description: 'Intelligent chatbot built with OpenAI API, Next.js, and LangChain for context-aware conversations',
    longDescription: 'An advanced AI chatbot application that leverages OpenAI GPT models with LangChain for enhanced context management. Features include multi-turn conversations, custom knowledge base integration, streaming responses, conversation history, and export functionality.',
    image: '/ai-chatbot.png',
    category: 'ai',
    technologies: ['OpenAI API', 'Next.js', 'LangChain', 'TypeScript', 'Tailwind CSS', 'Vercel AI SDK'],
    github: 'https://github.com/vercel/ai-chatbot',
    demo: null,
    featured: true,
  },
  {
    id: 2,
    title: 'AI Image Recognition',
    description: 'Deep learning image classification system using TensorFlow and modern web technologies',
    longDescription: 'An AI-powered image recognition system that uses deep learning models for accurate image classification. Features include real-time image processing, batch upload, confidence scoring, and model fine-tuning capabilities.',
    image: '/ai-image-recognition.png',
    category: 'ai',
    technologies: ['Python', 'TensorFlow', 'Next.js', 'FastAPI', 'OpenCV', 'NumPy', 'Pillow'],
    github: 'https://github.com/ageitgey/face_recognition',
    demo: null,
    featured: false,
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description: 'Advanced content generation platform with OpenAI GPT models, prompt engineering, and workflow automation',
    longDescription: 'A sophisticated AI-powered content generation platform that creates high-quality articles, blog posts, and marketing copy. Features include advanced prompt engineering, customizable templates, batch processing, and intelligent content optimization.',
    image: '/ai-content-generator.png',
    category: 'ai',
    technologies: ['OpenAI API', 'Next.js', 'FastAPI', 'Python', 'LLM Integration', 'Prompt Engineering'],
    github: 'https://github.com/vercel/ai',
    demo: null,
    featured: true,
  },
  // Full-Stack Development (3개)
  {
    id: 4,
    title: 'RealWorld Full-Stack App',
    description: 'Production-ready full-stack application demonstrating best practices with Next.js and Node.js',
    longDescription: 'A full-stack application following the RealWorld specification, showcasing best practices in modern web development. Features include user authentication, CRUD operations, real-time updates, pagination, and comprehensive error handling.',
    image: '/realworld-app.png',
    category: 'fullstack',
    technologies: ['Next.js', 'Node.js', 'Express.js', 'PostgreSQL', 'TypeScript', 'Prisma', 'JWT'],
    github: 'https://github.com/gothinkster/realworld',
    demo: 'https://demo.realworld.io',
    featured: true,
  },
  {
    id: 5,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard',
    longDescription: 'A comprehensive full-stack e-commerce platform built with Next.js, Node.js, and PostgreSQL. Features include user authentication, shopping cart, payment integration with Stripe, real-time inventory management, order tracking, and admin dashboard.',
    image: '/ecommerce-platform.png',
    category: 'fullstack',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'TypeScript', 'Express.js', 'Tailwind CSS', 'Prisma'],
    github: 'https://github.com/vercel/commerce',
    demo: null,
    featured: true,
  },
  {
    id: 6,
    title: 'Social Media Platform',
    description: 'Full-stack social media application with real-time messaging, posts, and user interactions',
    longDescription: 'A complete social media platform built with Next.js and Node.js. Features include user profiles, posts, comments, likes, real-time messaging, notifications, and content moderation. Demonstrates full-stack development with modern technologies.',
    image: '/social-media-platform.png',
    category: 'fullstack',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Socket.io', 'TypeScript', 'Express.js', 'JWT'],
    github: 'https://github.com/gothinkster/realworld',
    demo: null,
    featured: false,
  },
  // Frontend Technologies (3개)
  {
    id: 7,
    title: 'Modern Dashboard UI',
    description: 'Beautiful React dashboard with TypeScript, Tailwind CSS, and advanced data visualization',
    longDescription: 'A modern, responsive dashboard application built with React and TypeScript. Features include real-time data visualization, interactive charts, dark mode support, advanced filtering, and smooth animations.',
    image: '/dashboard-ui.png',
    category: 'frontend',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Zustand', 'React Query', 'Framer Motion'],
    github: 'https://github.com/bchiang7/v4',
    demo: null,
    featured: true,
  },
  {
    id: 8,
    title: 'Task Management Dashboard',
    description: 'Modern task management application with real-time collaboration, drag-and-drop, and filtering',
    longDescription: 'A feature-rich task management application built with React and TypeScript. Features include drag-and-drop task organization, real-time collaboration using WebSockets, advanced filtering and search, calendar integration, and beautiful UI.',
    image: '/task-manager.png',
    category: 'frontend',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Zustand', 'React Query', 'WebSockets'],
    github: 'https://github.com/vercel/next.js',
    demo: null,
    featured: true,
  },
  {
    id: 9,
    title: 'Portfolio Website',
    description: 'Modern portfolio website with animations, dark mode, and responsive design',
    longDescription: 'A stunning portfolio website built with Next.js and Framer Motion. Features include smooth page transitions, interactive animations, dark mode support, responsive design, and optimized performance.',
    image: '/portfolio-website.png',
    category: 'frontend',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    github: 'https://github.com/bchiang7/v4',
    demo: null,
    featured: false,
  },
  // Backend & APIs (3개)
  {
    id: 10,
    title: 'Node.js REST API Boilerplate',
    description: 'Production-ready Express.js API with authentication, validation, error handling, and testing',
    longDescription: 'A comprehensive Node.js RESTful API boilerplate built with Express.js. Features include JWT authentication, request validation, error handling middleware, rate limiting, API documentation with Swagger, database migrations, and comprehensive test coverage.',
    image: '/api-boilerplate.png',
    category: 'backend',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Jest', 'Swagger', 'Docker', 'ESLint'],
    github: 'https://github.com/hagopj13/node-express-boilerplate',
    demo: null,
    featured: true,
  },
  {
    id: 11,
    title: 'GraphQL API Server',
    description: 'Scalable GraphQL API with Apollo Server, authentication, and real-time subscriptions',
    longDescription: 'A production-ready GraphQL API server built with Apollo Server and Node.js. Features include type-safe schema, authentication and authorization, real-time subscriptions, data loaders for optimization, and comprehensive error handling.',
    image: '/graphql-api.png',
    category: 'backend',
    technologies: ['Node.js', 'Apollo Server', 'GraphQL', 'PostgreSQL', 'TypeScript', 'JWT', 'WebSockets'],
    github: 'https://github.com/apollographql/apollo-server',
    demo: null,
    featured: false,
  },
  {
    id: 12,
    title: 'Microservices API Gateway',
    description: 'API Gateway for microservices architecture with load balancing and service discovery',
    longDescription: 'An API Gateway solution for microservices architecture built with Node.js. Features include request routing, load balancing, service discovery, rate limiting, authentication, request/response transformation, and monitoring.',
    image: '/api-gateway.png',
    category: 'backend',
    technologies: ['Node.js', 'Express.js', 'Redis', 'Docker', 'Kubernetes', 'Nginx', 'Prometheus'],
    github: 'https://github.com/expressjs/express',
    demo: null,
    featured: false,
  },
  // Mobile Development (3개)
  {
    id: 13,
    title: 'React Native Weather App',
    description: 'Cross-platform weather application with location services and beautiful UI animations',
    longDescription: 'A feature-rich weather application built with React Native and Expo. Features include location-based weather data, 7-day forecasts, weather maps, push notifications, offline support, and smooth animations.',
    image: '/weather-app.png',
    category: 'mobile',
    technologies: ['React Native', 'Expo', 'TypeScript', 'React Navigation', 'AsyncStorage', 'Location Services'],
    github: 'https://github.com/ajayns/react-weather-app',
    demo: null,
    featured: true,
  },
  {
    id: 14,
    title: 'Fitness Tracking App',
    description: 'Cross-platform mobile app for workout tracking, progress analytics, and social features',
    longDescription: 'A comprehensive fitness tracking mobile application built with React Native and Expo. Features include workout logging, progress tracking with charts and analytics, social features for sharing achievements, workout plans, and offline mode support.',
    image: '/fitness-app.png',
    category: 'mobile',
    technologies: ['React Native', 'Expo', 'Firebase', 'Reanimated', 'AsyncStorage', 'Charts'],
    github: 'https://github.com/expo/expo',
    demo: null,
    featured: true,
  },
  {
    id: 15,
    title: 'Task Manager Mobile',
    description: 'Productive task management app with offline sync, notifications, and team collaboration',
    longDescription: 'A feature-rich task management mobile application built with React Native. Features include task organization, offline synchronization, push notifications, team collaboration, calendar integration, and beautiful UI with smooth animations.',
    image: '/task-manager-mobile.png',
    category: 'mobile',
    technologies: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'React Navigation', 'AsyncStorage'],
    github: 'https://github.com/react-native-community',
    demo: null,
    featured: false,
  },
];

const categories = [
  { id: 'all', name: 'All', icon: FiCode },
  { id: 'ai', name: 'AI', icon: FiCpu },
  { id: 'fullstack', name: 'Full-Stack', icon: FiLayers },
  { id: 'frontend', name: 'Frontend', icon: FiGlobe },
  { id: 'backend', name: 'Backend', icon: FiServer },
  { id: 'mobile', name: 'Mobile', icon: FiSmartphone },
];

const getCategoryIcon = (category) => {
  const categoryObj = categories.find(cat => cat.id === category);
  return categoryObj ? categoryObj.icon : FiCode;
};


export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 px-4 sm:px-6 py-6 sm:py-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Projects
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in full-stack development, AI integration, and automation.
          </p>
        </header>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm md:text-base
                  transition-all duration-300
                  ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800'
                  }
                `}
              >
                <Icon className="text-base" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => {
            const CategoryIcon = getCategoryIcon(project.category);
            
            return (
              <div
                key={project.id}
                className="group relative bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Content */}
                <div className="p-4">
                  {/* Category Icon & Featured Badge */}
                  <div className="flex items-center justify-between mb-2">
                    <CategoryIcon className="text-base text-blue-600 dark:text-blue-400" />
                    {project.featured && (
                      <div className="px-1.5 py-0.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[10px] font-semibold">
                        Featured
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-3 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-300 text-[10px] font-medium border border-blue-200 dark:border-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-[10px] font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-2 pt-3 border-t border-neutral-200 dark:border-neutral-800">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors text-xs font-medium"
                      >
                        <FiGithub className="text-sm" />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 transition-all text-xs font-semibold shadow-md hover:shadow-lg flex-1 justify-center"
                      >
                        <FiExternalLink className="text-sm" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-500 dark:text-neutral-400">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
