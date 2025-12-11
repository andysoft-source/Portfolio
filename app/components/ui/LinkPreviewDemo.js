"use client";
import React from "react";
import { LinkPreview } from "@/app/components/Ancertenity/link-preview";

/** Reusable inline preview for single words/phrases */
export function InlinePreview({
  url,
  imageSrc,
  children,
  className = "",
  isStatic = true,
}) {
  return (
    <LinkPreview
      url={url}
      imageSrc={imageSrc}
      isStatic={isStatic}
      className={`inline-block align-baseline font-semibold bg-clip-text text-transparent ${className}`}
    >
      {children}
    </LinkPreview>
  );
}

export function LinkPreviewDemoSecond() {
  return (
    <div className="flex flex-col text-clip">
      {/* Use a div (not <p>) so the inline preview (a block element) is valid HTML */}
      <div
        role="paragraph"
        className="
          text-neutral-400
          text-[13px] sm:text-sm md:text-md
          md:text-justify text-left
          leading-[1.35] md:leading-relaxed
          tracking-[0.005em]
          max-w-[20.5rem] md:max-w-3xl
          w-full mx-auto md:mx-0
          break-words
        "
      >
        <span>I am a </span>

        <InlinePreview
          url="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=1200&auto=format&fit=crop"
          imageSrc="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=1200&auto=format&fit=crop"
          className="font-bold bg-gradient-to-br from-purple-500 to-pink-500 ml-1"
        >
          hybrid engineer
        </InlinePreview>

        <span> specializing in </span>

        <InlinePreview
          url="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop"
          imageSrc="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop"
          className="font-bold bg-gradient-to-br from-cyan-500 to-pink-500 ml-1"
        >
          Full-Stack development
        </InlinePreview>

        <span>, </span>

        <InlinePreview
          url="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
          imageSrc="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
          className="font-bold bg-gradient-to-br from-pink-500 to-yellow-500 ml-1"
        >
          AI integration
        </InlinePreview>

        <span>, and </span>

        <InlinePreview
          url="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
          imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
          className="font-bold bg-gradient-to-br from-purple-500 to-pink-500 ml-1"
        >
          automation
        </InlinePreview>

        <span>. I build scalable web applications, design AI-powered workflows, and automate complex business processes end-to-end. My strength is combining engineering, AI reasoning, and system design to solve real business problems with speed and precision. If you need a developer who can ship fast and automate intelligently, I can deliver.</span>
      </div>
    </div>
  );
}