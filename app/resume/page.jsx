'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  FiMail,
  FiMapPin,
} from 'react-icons/fi';
import { PERSONAL_INFO } from '../constants/personalInfo';

export default function ResumePage() {
  const router = useRouter();
  const { name, title, location, email, social } = PERSONAL_INFO;

  // Redirect to skills page if not in development mode
  React.useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      router.push('/skills');
    }
  }, [router]);

  // Don't render content if not in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }


  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 px-4 sm:px-6 py-6 sm:py-10 print:bg-white print:px-0 print:py-2">

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-950 print:bg-white">
        {/* Header */}
        <header className="mb-8 print:mb-3 print:pb-2">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-4 print:flex-row print:items-end print:justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 print:text-3xl print:mb-1 text-neutral-900 dark:text-neutral-100">
                {name}
              </h1>
              <p className="text-lg md:text-xl text-neutral-900 dark:text-neutral-100 font-medium mb-2 print:text-base print:mb-1">
                {title}
              </p>
              <div className="flex items-center gap-2 text-sm print:text-xs text-neutral-600 dark:text-neutral-400">
                <FiMapPin className="text-xs" />
                <span>{location}</span>
              </div>
            </div>
            <div className="flex flex-col items-end text-sm print:text-xs text-neutral-700 dark:text-neutral-300 space-y-1 print:space-y-0.5">
              <div className="flex items-center gap-2">
                <FiMail className="text-xs opacity-70" />
                <a href={`mailto:${email}`} className="hover:underline">{email}</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs opacity-70">LinkedIn:</span>
                <a href={social.linkedin} target="_blank" rel="noreferrer" className="hover:underline">{social.linkedin.replace('https://', '')}</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs opacity-70">GitHub:</span>
                <a href={social.github} target="_blank" rel="noreferrer" className="hover:underline">{social.github.replace('https://', '')}</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs opacity-70">Portfolio:</span>
                <a href={social.portfolio} target="_blank" rel="noreferrer" className="hover:underline">{social.portfolio.replace('https://', '')}</a>
              </div>
            </div>
          </div>
          <div className="h-px bg-neutral-200 dark:bg-neutral-800"></div>
        </header>

        {/* Professional Summary */}
        <section className="mb-8 print:mb-3 print:pb-1">
          <h2 className="text-lg font-bold uppercase tracking-wide mb-3 print:text-base print:mb-1.5 print:pb-0.5 text-neutral-900 dark:text-neutral-100 border-b-2 border-neutral-900 dark:border-neutral-100 pb-1">
            Professional Summary
          </h2>
          <p className="text-sm leading-relaxed print:text-xs print:leading-snug text-neutral-700 dark:text-neutral-300">
            Full-stack developer with 5+ years of professional experience building scalable web applications and AI-powered solutions.
            KAIST Computer Science graduate specializing in Next.js, React, TypeScript, and OpenAI API integration. Successfully delivered
            12+ production applications with 95+ average Lighthouse scores, reduced client operational costs by 35% through automation,
            and maintained 95%+ client satisfaction rate. Expert in modern JavaScript frameworks, cloud deployment, performance optimization,
            and full-stack development with proven track record in both startup and enterprise environments.
          </p>
        </section>

        {/* Education & Certifications */}
        <section className="mb-8 print:mb-3 print:pb-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 print:gap-4">
            <div>
              <h2 className="text-lg font-bold uppercase tracking-wide mb-4 print:text-base print:mb-2 print:pb-0.5 text-neutral-900 dark:text-neutral-100 border-b-2 border-neutral-900 dark:border-neutral-100 pb-1">
                Education
              </h2>
              <div>
                <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100">KAIST (Korea Advanced Institute of Science and Technology)</h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  Bachelor of Science, Computer Science
                  <br />
                  Concentration: Software Engineering & AI
                  <br />
                  GPA: 3.8 / 4.0
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">2015 – 2019</p>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold uppercase tracking-wide mb-4 print:text-base print:mb-2 print:pb-0.5 text-neutral-900 dark:text-neutral-100 border-b-2 border-neutral-900 dark:border-neutral-100 pb-1">
                Certifications
              </h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">
                    <a 
                      href="/FreeCodeCamp Certified.png" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors"
                    >
                      FreeCodeCamp Certified
                    </a>
                  </h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    JavaScript Algorithms and Data Structures
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">
                    <a 
                      href="/AWS Certified.png" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors"
                    >
                      AWS Certified
                    </a>
                  </h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">Cloud Practitioner</p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">CS Degree</h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">Computer Science Bachelor's</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold uppercase tracking-wide mb-4 print:text-base print:mb-2 print:pb-0.5 text-neutral-900 dark:text-neutral-100 border-b-2 border-neutral-900 dark:border-neutral-100 pb-1">
                Language Skills
              </h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">Korean</h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">Native</p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">English</h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">Fluent (Professional)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">Chinese</h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">Conversational</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-8 print:mb-3 print:pb-1">
          <h2 className="text-lg font-bold uppercase tracking-wide mb-3 print:text-base print:mb-1.5 print:pb-0.5 text-neutral-900 dark:text-neutral-100 border-b-2 border-neutral-900 dark:border-neutral-100 pb-1">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:gap-2 text-sm print:text-xs">
            <div>
              <h3 className="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">Frontend & UI</h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                React 18, Next.js 14 (App Router), TypeScript, JavaScript (ES2023), Tailwind CSS, Framer Motion, HTML5, CSS3, Responsive Design
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">Backend & APIs</h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                Node.js, Next.js API Routes, REST APIs, GraphQL, Express.js, FastAPI, Python, PostgreSQL, MongoDB, Prisma ORM
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">AI & Automation</h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                OpenAI API (GPT-4), LangChain, Prompt Engineering, AI Workflows, Vector Databases, RAG Implementation, Automation Scripts
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">DevOps & Cloud</h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                Vercel, Netlify, AWS, Docker, Git/GitHub, CI/CD, Performance Optimization, SEO, Web Vitals, Lighthouse
              </p>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-8 print:mb-3 print:pb-1">
          <h2 className="text-lg font-bold uppercase tracking-wide mb-4 print:text-base print:mb-2 print:pb-0.5 text-neutral-900 dark:text-neutral-100 border-b-2 border-neutral-900 dark:border-neutral-100 pb-1">
            Professional Experience
          </h2>

          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
              <div>
                <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100">
                  Senior Full-Stack Developer
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 italic">Freelance & Contract Work</p>
              </div>
              <div className="text-sm font-medium text-neutral-700 dark:text-neutral-300">2019 – Present</div>
            </div>
            <ul className="space-y-1.5 print:space-y-1 text-sm print:text-xs text-neutral-700 dark:text-neutral-300 ml-4 print:ml-3 list-disc">
              <li>
                Delivered 12+ production web applications for clients including startups and SMEs, achieving 95+ average Lighthouse performance scores
              </li>
              <li>
                Implemented AI-powered features using OpenAI API and LangChain, resulting in 50% improvement in user engagement and 35% reduction in operational costs
              </li>
              <li>
                Built e-commerce platforms and business applications processing 50K+ monthly transactions with 99.5% uptime
              </li>
              <li>
                Developed mobile applications published on App Store and Google Play with 4.2+ star ratings and 5K+ downloads
              </li>
              <li>
                Optimized legacy applications reducing load times by 55% and server costs by 25% through modern architecture and caching strategies
              </li>
              <li>
                Maintained 95%+ client satisfaction rate with consistent on-time delivery and exceeded project requirements in 85% of engagements
              </li>
            </ul>
          </div>
        </section>

        {/* Key Projects */}
        <section className="mb-8 print:mb-3 print:pb-1">
          <h2 className="text-lg font-bold uppercase tracking-wide mb-4 print:text-base print:mb-2 print:pb-0.5 text-neutral-900 dark:text-neutral-100 border-b-2 border-neutral-900 dark:border-neutral-100 pb-1">
            Key Projects
          </h2>

          <div className="space-y-6 print:space-y-3">
            {/* Project 1 - AI Chat Assistant */}
            <div className="mb-5">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100">
                    AI Chat Assistant
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    OpenAI API · Next.js · LangChain · TypeScript · Vercel AI SDK
                  </p>
                </div>
              </div>
              <ul className="space-y-1.5 print:space-y-1 text-sm print:text-xs text-neutral-700 dark:text-neutral-300 ml-4 print:ml-3 list-disc">
                <li>
                  Built intelligent chatbot with OpenAI GPT models and LangChain for context-aware conversations
                </li>
                <li>
                  Implemented multi-turn conversations, custom knowledge base integration, and streaming responses
                </li>
                <li>
                  Created conversation history management and export functionality for enhanced user experience
                </li>
              </ul>
            </div>

            {/* Project 2 - RealWorld Full-Stack App */}
            <div className="mb-5">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100">
                    RealWorld Full-Stack Application
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Next.js · Node.js · PostgreSQL · TypeScript · Prisma · JWT
                  </p>
                </div>
              </div>
              <ul className="space-y-1.5 print:space-y-1 text-sm print:text-xs text-neutral-700 dark:text-neutral-300 ml-4 print:ml-3 list-disc">
                <li>
                  Developed production-ready full-stack application following RealWorld specification and best practices
                </li>
                <li>
                  Implemented user authentication, CRUD operations, real-time updates, and comprehensive error handling
                </li>
                <li>
                  Built responsive design with pagination and optimized database queries using Prisma ORM
                </li>
              </ul>
            </div>

            {/* Project 3 - E-Commerce Platform */}
            <div className="mb-5">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100">
                    E-Commerce Platform
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Next.js · Node.js · PostgreSQL · Stripe · TypeScript · Tailwind CSS
                  </p>
                </div>
              </div>
              <ul className="space-y-1.5 print:space-y-1 text-sm print:text-xs text-neutral-700 dark:text-neutral-300 ml-4 print:ml-3 list-disc">
                <li>
                  Built comprehensive e-commerce solution with shopping cart, payment processing, and inventory management
                </li>
                <li>
                  Integrated Stripe payment gateway with secure transaction handling and order tracking system
                </li>
                <li>
                  Developed admin dashboard for product management, sales analytics, and customer relationship management
                </li>
              </ul>
            </div>

            {/* Project 4 - React Native Weather App */}
            <div className="mb-5">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100">
                    Cross-Platform Weather Application
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    React Native · Expo · TypeScript · Location Services · AsyncStorage
                  </p>
                </div>
              </div>
              <ul className="space-y-1.5 print:space-y-1 text-sm print:text-xs text-neutral-700 dark:text-neutral-300 ml-4 print:ml-3 list-disc">
                <li>
                  Developed feature-rich weather app with location-based data, 7-day forecasts, and weather maps
                </li>
                <li>
                  Implemented push notifications, offline support, and smooth animations for enhanced user experience
                </li>
                <li>
                  Published on both iOS App Store and Google Play Store with 4.2+ star ratings
                </li>
              </ul>
            </div>

            {/* Project 5 - Modern Dashboard UI */}
            <div className="mb-5">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <div>
                  <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100">
                    Modern Dashboard UI
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    React · TypeScript · Tailwind CSS · Recharts · Framer Motion
                  </p>
                </div>
              </div>
              <ul className="space-y-1.5 print:space-y-1 text-sm print:text-xs text-neutral-700 dark:text-neutral-300 ml-4 print:ml-3 list-disc">
                <li>
                  Built responsive dashboard with real-time data visualization, interactive charts, and dark mode support
                </li>
                <li>
                  Implemented advanced filtering, search functionality, and smooth animations using Framer Motion
                </li>
                <li>
                  Achieved 92+ Lighthouse performance score through code optimization and efficient state management
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Core Competencies & Keywords for ATS */}
        <section className="print:mb-2 print:pb-1">
          <h2 className="text-lg font-bold uppercase tracking-wide mb-3 print:text-base print:mb-1.5 print:pb-0.5 text-neutral-900 dark:text-neutral-100 border-b-2 border-neutral-900 dark:border-neutral-100 pb-1">
            Core Competencies
          </h2>
          <div className="flex flex-wrap gap-2 print:gap-1.5 text-xs print:text-[10px]">
            {[
              'Agile Methodologies',
              'RESTful API Design',
              'Database Design',
              'Performance Optimization',
              'SEO & Web Vitals',
              'Responsive Design',
              'Version Control (Git)',
              'CI/CD Pipelines',
              'Code Review',
              'Technical Documentation',
              'Problem Solving',
              'Cross-Platform Development',
            ].map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
