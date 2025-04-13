import { NextResponse } from 'next/server';
import { scrapeShopifyPage } from '@/lib/scraper';
import { getPageSpeedData } from '@/lib/pagespeed';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json(
        { error: 'URL is required' },
        { status: 400 }
      );
    }

    // Scrape the Shopify page
    const scrapedData = await scrapeShopifyPage(url);

    // Get PageSpeed Insights data
    const pagespeedData = await getPageSpeedData(
      url,
      process.env.GOOGLE_PAGESPEED_API_KEY || ''
    );

    // Prepare the data for GPT-4
    const analysisData = {
      scrapedData,
      pagespeedData,
    };

    // Generate analysis using GPT-4
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are an expert CRO (Conversion Rate Optimization) specialist analyzing a Shopify product page. 
          Provide detailed, actionable feedback in the following sections:
          1. CRO Feedback
          2. SEO Audit
          3. Performance
          4. Copywriting
          5. Competitive
          6. Quick Wins
          7. Deeper Improvements
          8. Estimated CRO Impact
          9. Resource Links
          
          Format your response in clear sections with bullet points and specific recommendations.`
        },
        {
          role: "user",
          content: JSON.stringify(analysisData)
        }
      ],
      temperature: 0.7,
      max_tokens: 2000
    });

    const analysis = completion.choices[0].message.content;

    return NextResponse.json({
      analysis,
      rawData: analysisData
    });

  } catch (error) {
    console.error('Analysis error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to analyze the page',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 