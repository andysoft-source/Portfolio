'use client';

import React from 'react';
import { PERSONAL_INFO } from '../constants/personalInfo';
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiDownload } from 'react-icons/fi';

export default function AboutPage() {
  const { name, title, location, email, social } = PERSONAL_INFO;

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 px-4 sm:px-6 py-6 sm:py-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {name}
          </h1>
          <p className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 font-medium mb-6">
            {title}
          </p>
          <div className="flex items-center justify-center gap-2 text-neutral-600 dark:text-neutral-400">
            <FiMapPin className="text-sm" />
            <span>{location}</span>
          </div>
        </header>

        {/* Main Content */}
        <div className="space-y-8">
          {/* About Section */}
          <section className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">About Me</h2>
            <div className="text-neutral-700 dark:text-neutral-300 leading-relaxed space-y-4">
              <p>
                I'm a passionate full-stack developer with a strong focus on AI integration and automation. 
                With over 3 years of experience building scalable web applications, I specialize in creating 
                innovative solutions that combine cutting-edge technology with practical business needs.
              </p>
              <p>
                My expertise lies in modern JavaScript frameworks like Next.js and React, and I'm particularly 
                interested in leveraging AI to enhance user experiences and automate complex workflows. I believe 
                in writing clean, maintainable code and following best practices to deliver production-ready solutions.
              </p>
              <p>
                Currently pursuing a Bachelor's degree in Computer Science at SUNY Brockport, I'm constantly 
                learning and exploring new technologies. When I'm not coding, I enjoy working on side projects, 
                contributing to open source, and staying up-to-date with the latest industry trends.
              </p>
            </div>
          </section>

          {/* What I Do */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">What I Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
                <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100">Full-Stack Development</h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Building end-to-end web applications using modern frameworks and best practices. 
                  From frontend UI/UX to backend APIs and database design.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
                <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100">AI Integration</h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Implementing AI-powered features using OpenAI API, LLM integration, and prompt engineering 
                  to create intelligent and automated solutions.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
                <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100">Automation</h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Creating automated workflows and systems that reduce manual tasks, improve efficiency, 
                  and streamline business processes.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
                <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100">Performance Optimization</h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Optimizing applications for speed, scalability, and user experience. Achieving high 
                  Lighthouse scores and ensuring fast load times.
                </p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center py-12 border-t border-neutral-200 dark:border-neutral-800">
            <h2 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">Let's Work Together</h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition"
              >
                <FiMail className="text-base" />
                Get In Touch
              </a>
              <a
                href={social.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium transition"
              >
                <FiGithub className="text-base" />
                View GitHub
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium transition"
              >
                <FiLinkedin className="text-base" />
                Connect on LinkedIn
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

