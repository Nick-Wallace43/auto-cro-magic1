import { chromium } from 'playwright';

export interface ScrapedData {
  meta: {
    title: string;
    description: string;
  };
  headings: {
    h1: string;
    h2: string[];
    h3: string[];
  };
  content: {
    bodyCopy: string;
    productDescription: string;
  };
  cta: {
    text: string[];
    styles: string[];
  };
  trustElements: {
    badges: string[];
    icons: string[];
  };
  images: {
    alts: string[];
    filenames: string[];
  };
  mobile: {
    viewport: string;
    fontSizes: string[];
  };
}

export async function scrapeShopifyPage(url: string): Promise<ScrapedData> {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  });
  
  try {
    const page = await context.newPage();
    await page.goto(url, { waitUntil: 'networkidle' });

    const scrapedData: ScrapedData = {
      meta: {
        title: await page.title(),
        description: await page.$eval('meta[name="description"]', el => el.getAttribute('content') || ''),
      },
      headings: {
        h1: await page.$eval('h1', el => el.textContent?.trim() || ''),
        h2: await page.$$eval('h2', els => els.map(el => el.textContent?.trim() || '')),
        h3: await page.$$eval('h3', els => els.map(el => el.textContent?.trim() || '')),
      },
      content: {
        bodyCopy: await page.$eval('body', el => el.textContent?.trim() || ''),
        productDescription: await page.$eval('.product-description', el => el.textContent?.trim() || ''),
      },
      cta: {
        text: await page.$$eval('button, .btn, .button', els => els.map(el => el.textContent?.trim() || '')),
        styles: await page.$$eval('button, .btn, .button', els => els.map(el => el.getAttribute('class') || '')),
      },
      trustElements: {
        badges: await page.$$eval('.trust-badge, .badge', els => els.map(el => el.textContent?.trim() || '')),
        icons: await page.$$eval('.trust-icon, .icon', els => els.map(el => el.getAttribute('src') || '')),
      },
      images: {
        alts: await page.$$eval('img', els => els.map(el => el.getAttribute('alt') || '')),
        filenames: await page.$$eval('img', els => els.map(el => el.getAttribute('src') || '')),
      },
      mobile: {
        viewport: await page.$eval('meta[name="viewport"]', el => el.getAttribute('content') || ''),
        fontSizes: await page.$$eval('*', els => els.map(el => window.getComputedStyle(el).fontSize)),
      },
    };

    return scrapedData;
  } finally {
    await browser.close();
  }
} 