import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
import { PERSONAL_INFO } from '../../constants/personalInfo';

export async function GET(request) {
  try {
    // Get the base URL from request headers or environment
    const protocol = request.headers.get('x-forwarded-proto') || 'http';
    const host = request.headers.get('host') || 'localhost:3000';
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || `${protocol}://${host}`;
    
    const resumeUrl = `${baseUrl}/resume`;

    // Launch browser
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--disable-gpu',
      ],
    });

    const page = await browser.newPage();
    
    // Navigate to resume page
    await page.goto(resumeUrl, {
      waitUntil: 'networkidle0',
      timeout: 30000,
    });

    // Wait for content to be fully loaded
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Hide left panel and nav, show only resume content
    await page.evaluate(() => {
      // Hide left panel
      const leftPanel = document.querySelector('div[class*="lg:w-\\[23%\\]"]');
      if (leftPanel) leftPanel.style.display = 'none';
      
      // Hide nav
      const nav = document.querySelector('nav');
      if (nav) nav.style.display = 'none';
      
      // Make resume content full width
      const resumeContent = document.querySelector('div.max-w-4xl.mx-auto');
      if (resumeContent) {
        resumeContent.style.maxWidth = '100%';
        resumeContent.style.margin = '0 auto';
      }
      
      // Adjust body and main container
      const body = document.body;
      if (body) {
        body.style.margin = '0';
        body.style.padding = '0';
      }
      
      const mainContainer = document.querySelector('div.flex.lg\\:h-screen');
      if (mainContainer) {
        mainContainer.style.display = 'block';
        mainContainer.style.height = 'auto';
      }
      
      const mainContent = document.querySelector('div.flex-1.overflow-y-scroll');
      if (mainContent) {
        mainContent.style.width = '100%';
        mainContent.style.overflow = 'visible';
      }
      
      // Force print media query styles
      const style = document.createElement('style');
      style.textContent = `
        @media print {
          header > div {
            display: flex !important;
            flex-direction: row !important;
            align-items: flex-end !important;
            justify-content: space-between !important;
          }
        }
      `;
      document.head.appendChild(style);
    });

    // Generate PDF with smaller margins for 2-page layout
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0.3in',
        right: '0.4in',
        bottom: '0.3in',
        left: '0.4in',
      },
    });

    await browser.close();

    const fileName = `${PERSONAL_INFO.name.replace(/\s+/g, '_')}_Resume.pdf`;

    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${fileName}"`,
      },
    });
  } catch (error) {
    console.error('PDF generation error:', error);
    
    // Return error response
    return NextResponse.json(
      { 
        error: 'Failed to generate PDF. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

