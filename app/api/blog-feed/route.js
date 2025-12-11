import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch RSS feed from your blog
    const response = await fetch('https://blog.tonychan.com.np/feed.xml', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Portfolio Blog Feed)'
      },
      // Force no cache during development
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blog feed: ${response.status}`);
    }

    const xmlText = await response.text();
    
    // Parse RSS XML to extract blog posts
    const posts = parseRSSFeed(xmlText);
    
    return NextResponse.json({
      success: true,
      posts: posts.slice(0, 6), // Return latest 6 posts
      lastUpdated: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Blog feed error:', error);
    
    // Return fallback posts if external feed fails
    return NextResponse.json({
      success: false,
      posts: getFallbackPosts(),
      error: 'Failed to fetch latest posts',
      lastUpdated: new Date().toISOString()
    });
  }
}

function parseRSSFeed(xmlText) {
  // Simple RSS parser - extract posts from XML
  const posts = [];
  
  try {
    // Extract item elements from RSS
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    const items = xmlText.match(itemRegex) || [];
    
    items.forEach((item, index) => {
      if (index >= 10) return; // Limit to 10 posts
      
      const title = extractXMLValue(item, 'title');
      const link = extractXMLValue(item, 'link');
      const description = extractXMLValue(item, 'description');
      const pubDate = extractXMLValue(item, 'pubDate');
      const guid = extractXMLValue(item, 'guid');
      
      if (title && link) {
        // Fix incorrect domain from RSS feed
        const correctedLink = link.replace('tailwind-nextjs-starter-blog.vercel.app', 'blog.tonychan.com.np');
        
        console.log('Original link:', link);
        console.log('Corrected link:', correctedLink);
        
        posts.push({
          title: cleanHTML(title),
          link: correctedLink,
          description: cleanHTML(description) || '',
          publishedAt: pubDate ? new Date(pubDate).toISOString() : new Date().toISOString(),
          slug: extractSlugFromLink(correctedLink),
          id: guid || correctedLink
        });
      }
    });
    
  } catch (error) {
    console.error('RSS parsing error:', error);
  }
  
  return posts;
}

function extractXMLValue(xml, tag) {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
  const match = xml.match(regex);
  return match ? match[1].trim() : '';
}

function cleanHTML(str) {
  if (!str) return '';
  return str
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();
}

function extractSlugFromLink(link) {
  try {
    const url = new URL(link);
    const pathParts = url.pathname.split('/').filter(Boolean);
    return pathParts[pathParts.length - 1] || 'untitled';
  } catch {
    return 'untitled';
  }
}

function getFallbackPosts() {
  return [
    {
      title: "Next.js + AI API Integration: Complete Guide to OpenAI GPT in Web Apps",
      link: "https://blog.tonychan.com.np/blog/nextjs-ai-api-integration-openai-guide",
      description: "Step-by-step tutorial on integrating OpenAI's GPT API into your Next.js application with authentication, streaming, and error handling.",
      publishedAt: "2025-01-15T00:00:00.000Z",
      slug: "nextjs-ai-api-integration-openai-guide",
      id: "fallback-1"
    },
    {
      title: "Building AI Microservices with Python FastAPI: A Complete Workflow",
      link: "https://blog.tonychan.com.np/blog/python-fastapi-ai-microservices-guide",
      description: "Learn how to build scalable AI microservices using FastAPI, Docker, and modern deployment practices for production-ready applications.",
      publishedAt: "2025-01-10T00:00:00.000Z",
      slug: "python-fastapi-ai-microservices-guide",
      id: "fallback-2"
    },
    {
      title: "Business Process Automation: RPA vs AI Agents Comparison",
      link: "https://blog.tonychan.com.np/blog/business-automation-rpa-vs-ai-agents",
      description: "Comprehensive comparison of RPA and AI agents for business automation, including use cases, costs, and implementation strategies.",
      publishedAt: "2025-01-05T00:00:00.000Z",
      slug: "business-automation-rpa-vs-ai-agents",
      id: "fallback-3"
    },
    {
      title: "React Real-time Data Processing: WebSocket + AI Prediction System",
      link: "https://blog.tonychan.com.np/blog/react-websocket-ai-prediction-system",
      description: "Build a real-time data processing system in React using WebSockets and AI predictions for live analytics and user insights.",
      publishedAt: "2024-12-28T00:00:00.000Z",
      slug: "react-websocket-ai-prediction-system",
      id: "fallback-4"
    },
    {
      title: "Docker AI Model Deployment Automation: From Development to Production",
      link: "https://blog.tonychan.com.np/blog/docker-ai-model-deployment-automation",
      description: "Complete guide to automating AI model deployment using Docker, CI/CD pipelines, and cloud services for seamless production workflows.",
      publishedAt: "2024-12-20T00:00:00.000Z",
      slug: "docker-ai-model-deployment-automation",
      id: "fallback-5"
    },
    {
      title: "LangChain Custom AI Workflows: Building Intelligent Automation",
      link: "https://blog.tonychan.com.np/blog/langchain-custom-ai-workflows-automation",
      description: "Create powerful AI workflows using LangChain for document processing, data analysis, and automated decision-making systems.",
      publishedAt: "2024-12-15T00:00:00.000Z",
      slug: "langchain-custom-ai-workflows-automation",
      id: "fallback-6"
    }
  ];
}