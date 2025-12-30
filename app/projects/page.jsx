'use client';

import { ExpandableCardDemo } from '@/app/components/Ancertenity/ExpandableCard';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 px-4 sm:px-6 py-6 sm:py-10">
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            My Projects
            <span className="block h-[3px] w-32 mx-auto mt-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A collection of projects I've built, showcasing my skills in full-stack development, AI integration, and automation.
          </p>
        </header>

        {/* Projects Grid */}
        <div className="mt-8">
          <ExpandableCardDemo />
        </div>
      </div>
    </div>
  );
}

