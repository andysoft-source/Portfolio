import { NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
import { writeFileSync } from 'fs';
import { join } from 'path';
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

    // Inject CSS to hide layout elements and adjust resume content
    await page.addStyleTag({
      content: `
        /* Force light mode */
        * {
          color-scheme: light !important;
        }
        
        html {
          color-scheme: light !important;
        }
        
        body {
          background-color: white !important;
          color: black !important;
        }
        
        /* Override all dark mode styles */
        .dark {
          color-scheme: light !important;
        }
        
        .dark * {
          background-color: white !important;
          color: black !important;
          border-color: #e5e5e5 !important;
        }
        
        /* Hide left panel */
        body > div.flex.lg\\:h-screen > div:first-child {
          display: none !important;
        }
        
        /* Hide nav */
        nav {
          display: none !important;
        }
        
        /* Adjust main container */
        body > div.flex.lg\\:h-screen {
          display: block !important;
          height: auto !important;
          background-color: white !important;
        }
        
        /* Make main content full width */
        body > div.flex.lg\\:h-screen > div.flex-1 {
          overflow: visible !important;
          width: 100% !important;
          background-color: white !important;
        }
        
        /* Resume content full width */
        div.max-w-4xl.mx-auto {
          max-width: 100% !important;
          margin: 0 auto !important;
          padding: 0 !important;
          background-color: white !important;
          color: black !important;
        }
        
        /* Ensure header layout - align contact info to bottom */
        header > div.flex {
          display: flex !important;
          flex-direction: row !important;
          align-items: flex-end !important;
          justify-content: space-between !important;
        }
        
        header > div.flex > div:last-child {
          display: flex !important;
          flex-direction: column !important;
          align-items: flex-end !important;
          justify-content: flex-end !important;
          align-self: flex-end !important;
        }
        
        @media print {
          * {
            background-color: white !important;
            color: black !important;
          }
          
          header > div.flex {
            display: flex !important;
            flex-direction: row !important;
            align-items: flex-end !important;
            justify-content: space-between !important;
          }
          
          header > div.flex > div:last-child {
            display: flex !important;
            flex-direction: column !important;
            align-items: flex-end !important;
            justify-content: flex-end !important;
            align-self: flex-end !important;
          }
        }
      `,
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

    // Save to public folder in development mode
    if (process.env.NODE_ENV === 'development') {
      const publicPath = join(process.cwd(), 'public', fileName);
      writeFileSync(publicPath, pdfBuffer);
      console.log(`Resume saved to public folder: ${fileName}`);
      
      return NextResponse.json({ 
        success: true, 
        message: `Resume saved to public folder: ${fileName}` 
      });
    }

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

