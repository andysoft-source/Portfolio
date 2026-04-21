'use client';

import React from 'react';
import { PERSONAL_INFO } from '../constants/personalInfo';
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiBriefcase, FiCalendar } from 'react-icons/fi';

export default function AboutPage() {
  const { name, title, location, email, social } = PERSONAL_INFO;
  const hasLinkedIn = Boolean(social.linkedin);

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
          {location && (
            <div className="flex items-center justify-center gap-2 text-neutral-600 dark:text-neutral-400">
              <FiMapPin className="text-sm" />
              <span>{location}</span>
            </div>
          )}
        </header>

        {/* Main Content */}
        <div className="space-y-8">
          {/* About Section */}
          <section className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">About Me</h2>
            <div className="text-neutral-700 dark:text-neutral-300 leading-relaxed space-y-4">
              <p>
                I'm a passionate full-stack developer with 5+ years of professional experience specializing in AI integration and automation. 
                I graduated from KAIST (Korea Advanced Institute of Science and Technology) with a Bachelor's degree in Computer Science, 
                focusing on Software Engineering & AI.
              </p>
              <p>
                Since 2019, I've been working as a freelance full-stack developer, successfully delivering 12+ production applications 
                for startups and SMEs. My expertise spans modern web technologies including React 18, Next.js 14, TypeScript, and 
                AI integration with OpenAI API and LangChain.
              </p>
              <p>
                I've achieved significant results for my clients: reducing operational costs by 35% through automation, 
                maintaining a 95%+ client satisfaction rate, and building applications that consistently achieve 95+ Lighthouse performance scores. 
                My projects range from e-commerce platforms processing 50K+ monthly transactions to mobile applications with 4.2+ star ratings.
              </p>
              <p>
                I'm passionate about leveraging cutting-edge technologies to solve real-world problems and create meaningful impact. 
                Whether it's building AI-powered chatbots, optimizing application performance, or developing cross-platform solutions, 
                I bring both technical expertise and business acumen to every project.
              </p>
            </div>
          </section>

          {/* Key Achievements */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">Key Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
                <div className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1">Years Experience</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Building production-ready applications</div>
              </div>
              <div className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/20">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">12+</div>
                <div className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1">Projects Completed</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Across web, mobile, and AI domains</div>
              </div>
              <div className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/30 dark:to-pink-900/20">
                <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">95%+</div>
                <div className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-1">Client Satisfaction</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">Delivering on time and exceeding expectations</div>
              </div>
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
                <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100">SaaS Development</h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  Building scalable Software-as-a-Service platforms with subscription management, multi-tenancy, 
                  and cloud infrastructure. Delivering enterprise-grade solutions.
                </p>
              </div>
            </div>
          </section>

          {/* Career Timeline */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">Career Timeline</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>
              
              <div className="space-y-8">
                {/* Timeline Item 1 - Current */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 border-4 border-white dark:border-neutral-950 flex items-center justify-center">
                    <FiBriefcase className="text-white text-sm" />
                  </div>
                  <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 shadow-sm">
                    <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                      <FiCalendar className="text-xs" />
                      <span>2023 – Present</span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">AI Integration Specialist</h3>
                    <p className="text-neutral-700 dark:text-neutral-300 mb-3">
                      Leading AI-powered solutions development with OpenAI API, LLM integration, and advanced prompt engineering. 
                      Building intelligent automation systems, AI-enhanced web applications, and scalable SaaS platforms with subscription management and multi-tenant architecture.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-300 text-xs font-medium">
                        OpenAI API
                      </span>
                      <span className="px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/20 text-purple-700 dark:text-purple-300 text-xs font-medium">
                        LLM Integration
                      </span>
                      <span className="px-3 py-1 rounded-full bg-pink-50 dark:bg-pink-950/20 text-pink-700 dark:text-pink-300 text-xs font-medium">
                        SaaS Development
                      </span>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 border-4 border-white dark:border-neutral-950 flex items-center justify-center">
                    <FiBriefcase className="text-white text-sm" />
                  </div>
                  <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 shadow-sm">
                    <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                      <FiCalendar className="text-xs" />
                      <span>2021 – 2023</span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">Senior Full-Stack Developer</h3>
                    <p className="text-neutral-700 dark:text-neutral-300 mb-3">
                      Advanced to senior level, specializing in Next.js and React ecosystem. Led multiple production projects, 
                      implemented complex state management, and optimized application performance.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-300 text-xs font-medium">
                        Next.js
                      </span>
                      <span className="px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/20 text-purple-700 dark:text-purple-300 text-xs font-medium">
                        TypeScript
                      </span>
                      <span className="px-3 py-1 rounded-full bg-pink-50 dark:bg-pink-950/20 text-pink-700 dark:text-pink-300 text-xs font-medium">
                        Performance Optimization
                      </span>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 border-4 border-white dark:border-neutral-950 flex items-center justify-center">
                    <FiBriefcase className="text-white text-sm" />
                  </div>
                  <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 shadow-sm">
                    <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                      <FiCalendar className="text-xs" />
                      <span>2019 – 2021</span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">Full-Stack Developer</h3>
                    <p className="text-neutral-700 dark:text-neutral-300 mb-3">
                      Expanded expertise to full-stack development. Built RESTful APIs, worked with databases, 
                      and developed mobile applications using React Native. Gained experience in cloud deployment and DevOps.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-300 text-xs font-medium">
                        Node.js
                      </span>
                      <span className="px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/20 text-purple-700 dark:text-purple-300 text-xs font-medium">
                        React Native
                      </span>
                      <span className="px-3 py-1 rounded-full bg-pink-50 dark:bg-pink-950/20 text-pink-700 dark:text-pink-300 text-xs font-medium">
                        REST APIs
                      </span>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 4 */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-green-600 border-4 border-white dark:border-neutral-950 flex items-center justify-center">
                    <FiBriefcase className="text-white text-sm" />
                  </div>
                  <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 shadow-sm">
                    <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                      <FiCalendar className="text-xs" />
                      <span>2017 – 2019</span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">Frontend Developer</h3>
                    <p className="text-neutral-700 dark:text-neutral-300 mb-3">
                      Started career focusing on frontend development. Mastered React, JavaScript, HTML/CSS, and responsive design. 
                      Built multiple client websites and learned modern web development practices.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-300 text-xs font-medium">
                        React
                      </span>
                      <span className="px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/20 text-purple-700 dark:text-purple-300 text-xs font-medium">
                        JavaScript
                      </span>
                      <span className="px-3 py-1 rounded-full bg-pink-50 dark:bg-pink-950/20 text-pink-700 dark:text-pink-300 text-xs font-medium">
                        Responsive Design
                      </span>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 5 - Education */}
                <div className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 border-4 border-white dark:border-neutral-950 flex items-center justify-center">
                    <FiBriefcase className="text-white text-sm" />
                  </div>
                  <div className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-6 shadow-sm">
                    <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                      <FiCalendar className="text-xs" />
                      <span>2015 – 2019</span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">Computer Science Student</h3>
                    <p className="text-neutral-700 dark:text-neutral-300 mb-3">
                      Graduated from KAIST (Korea Advanced Institute of Science and Technology) with Bachelor's degree in Computer Science. 
                      Specialized in Software Engineering & AI with 3.8/4.0 GPA.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-300 text-xs font-medium">
                        Software Engineering
                      </span>
                      <span className="px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/20 text-purple-700 dark:text-purple-300 text-xs font-medium">
                        Artificial Intelligence
                      </span>
                      <span className="px-3 py-1 rounded-full bg-pink-50 dark:bg-pink-950/20 text-pink-700 dark:text-pink-300 text-xs font-medium">
                        Computer Science
                      </span>
                    </div>
                  </div>
                </div>
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
              {hasLinkedIn && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium transition"
                >
                  <FiLinkedin className="text-base" />
                  Connect on LinkedIn
                </a>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

