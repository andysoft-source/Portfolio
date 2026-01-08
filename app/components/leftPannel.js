"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeChanger } from "../utils.js/toggleTheme";
import { LinkPreviewDemoSecond } from "./ui/LinkPreviewDemo";
import { LinkPreview } from "@/app/components/Ancertenity/link-preview";
import { FaApple, FaWindows, FaLinux } from "react-icons/fa";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiDownload,
  FiCheckCircle,
  FiClock,
  FiTarget,
  FiAward,
} from "react-icons/fi";
import { PERSONAL_INFO } from "../constants/personalInfo";

import { SplineErrorFilter } from "./SplineErrorFilter"; // Import the improved filter

export default function LeftPannel() {
  const { name, email, social } = PERSONAL_INFO;
  
  return (
    <div className="bg-green300 h-full w-full flex flex-col lg:pl-10 lg:overflow-y-auto lg:no-scrollbar z-50 lg:max-h-screen">
      {/* Enhanced Spline error filter */}
      <SplineErrorFilter />

      {/* Profile Section */}
      <div className="flex flex-col items-center justify-start px-3 md:px-4 pt-3 md:pt-4 pb-5 md:pb-6 w-full">
        {/* Avatar screenshot */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 mb-2">
          <Image
            src="/robot_2.png"
            alt="Top-left robot screenshot"
            fill
            sizes="(min-width: 768px) 10rem, 8rem"
            className="object-contain"
            priority
          />
        </div>

        {/* Name - below robot image */}
        <div className="mb-3 md:mb-4">
          <Link href="/">
              <h1 className="font-bold text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent text-center">
              {name}
              </h1>
            </Link>
          </div>

        {/* Main Content Container */}
        <div className="mt-3 md:mt-4 flex flex-col items-center w-full max-w-xs">

          {/* Bio */}
          <div className="mt-2 -mb-1 md:mb-0">
            <LinkPreviewDemoSecond />
          </div>

          {/* Quick links */}
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full text-[14px] sm:text-[15px]">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition w-full text-neutral-900 dark:text-neutral-100"
            >
              <FiMail className="opacity-80 text-[16px] sm:text-[17px]" />
              <span>Email</span>
            </a>
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition w-full text-neutral-900 dark:text-neutral-100"
            >
              <FiGithub className="opacity-80 text-[16px] sm:text-[17px]" />
              <span>GitHub</span>
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition w-full text-neutral-900 dark:text-neutral-100"
            >
              <FiLinkedin className="opacity-80 text-[16px] sm:text-[17px]" />
              <span>LinkedIn</span>
            </a>
            <button
              onClick={async () => {
                try {
                  const response = await fetch(social.resume);
                  if (response.ok) {
                    alert('Resume saved to public folder!');
                  }
                } catch (error) {
                  console.error('Error:', error);
                  alert('Failed to save resume');
                }
              }}
              className="flex items-center gap-2 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition w-full text-neutral-900 dark:text-neutral-100"
            >
              <FiDownload className="opacity-80 text-[16px] sm:text-[17px]" />
              <span>Resume</span>
            </button>
          </div>

          {/* Availability Status */}
          <div className="mt-3 w-full">
            <div className="relative overflow-hidden rounded-xl border border-green-200 dark:border-green-800 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 p-4">
              {/* Status indicator */}
              <div className="flex items-center gap-2 mb-3">
                <div className="relative">
                  <FiCheckCircle className="text-green-600 dark:text-green-400 text-[16px]" />
                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <span className="text-[15px] font-semibold text-green-800 dark:text-green-200">
                  Available for Projects
                </span>
              </div>
              
              {/* Details */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[13px] text-green-700 dark:text-green-300">
                  <FiClock className="text-[12px] opacity-70" />
                  <span>Quick response within 24h</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-800/40 rounded-full text-[10px] font-medium text-green-700 dark:text-green-300">
                    💼 Freelance
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-800/40 rounded-full text-[10px] font-medium text-blue-700 dark:text-blue-300">
                    🏢 Full-time
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 dark:bg-purple-800/40 rounded-full text-[10px] font-medium text-purple-700 dark:text-purple-300">
                    🤝 Collaborations
                  </span>
                </div>
              </div>
              
              {/* Subtle background pattern */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                <div className="w-full h-full bg-green-300 dark:bg-green-600 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>

          <hr className="my-3 w-full" />

          {/* Certifications */}
          <div className="mt-2 w-full">
            <h4 className="text-xs sm:text-sm font-semibold opacity-80 mb-2 flex items-center gap-1 text-neutral-900 dark:text-neutral-100">
              <FiAward className="text-[12px]" />
              Certifications
            </h4>
            <div className="grid grid-cols-1 gap-1.5">
              <a 
                href="/FreeCodeCamp Certified.png" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <span className="text-green-500">📜</span>
                <span className="text-[12px] font-medium text-neutral-900 dark:text-neutral-100 hover:text-blue-600 dark:hover:text-blue-400">FreeCodeCamp Certified</span>
              </a>
              <a 
                href="/AWS Certified.png" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <span className="text-blue-500">☁️</span>
                <span className="text-[12px] font-medium text-neutral-900 dark:text-neutral-100 hover:text-blue-600 dark:hover:text-blue-400">AWS Certified</span>
              </a>
              <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900">
                <span className="text-red-500">🎓</span>
                <span className="text-[12px] font-medium text-neutral-900 dark:text-neutral-100">CS Degree</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
