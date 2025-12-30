'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import clsx from 'clsx';

// Filter nav items based on environment
const getNavItems = () => {
  const items = [
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];
  
  // Only show Resume in development mode
  if (process.env.NODE_ENV === 'development') {
    items.unshift({ name: 'Resume', path: '/resume' });
  }
  
  return items;
};

const navItems = getNavItems();

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [hovered, setHovered] = useState(null);

  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur-lg bg-white/90 dark:bg-neutral-950/90 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center py-4">
          <div className="relative inline-flex items-center gap-1 bg-neutral-100 dark:bg-neutral-900 p-1.5 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-inner">
            {navItems.map((item, index) => {
              const isActive = pathname === item.path;

              return (
                <button
                  key={item.name}
                  onClick={() => router.push(item.path)}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  className={clsx(
                    'relative px-5 py-2.5 rounded-xl text-sm md:text-base font-semibold transition-all duration-300',
                    'min-w-[80px] md:min-w-[100px]',
                    isActive
                      ? 'text-white'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
                  )}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-lg shadow-purple-500/30" />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}