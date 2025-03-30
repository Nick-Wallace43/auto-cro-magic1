
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Search } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface AnalysisFormProps {
  onAnalysisComplete: (results: string) => void;
}

const AnalysisForm = ({ onAnalysisComplete }: AnalysisFormProps) => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const validateShopifyUrl = (url: string): boolean => {
    // Simple validation for demonstration - would be more robust in production
    return url.includes('.myshopify.com') || 
           url.includes('shopify.com') || 
           url.includes('shop.app') ||
           // Allow other URLs for demo purposes
           url.startsWith('http');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url.trim()) {
      toast({
        title: "URL Required",
        description: "Please enter a product page URL to analyze",
        variant: "destructive"
      });
      return;
    }

    if (!validateShopifyUrl(url)) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid Shopify product page URL",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock analysis result
      const analysisResult = `
# Your AI-Powered CRO Report

## First Impressions (Above the Fold)
✅ **Strong product imagery** takes center stage
⚠️ Add social proof (reviews count, ratings) above the fold
⚠️ Main product benefits should be visible without scrolling

## Call-to-Action (CTA) Strategy
✅ "Add to Cart" button stands out with good color contrast
⚠️ Consider adding a secondary "Learn More" CTA for hesitant shoppers
⚠️ Add to cart button could be larger on mobile devices

## Imagery & Visual Hierarchy
✅ Product images are high quality and show detail
⚠️ Add more lifestyle images showing product in use
⚠️ Consider adding a short product video for engagement

## Copywriting & Value Proposition
✅ Product description is descriptive and thorough
⚠️ Bullet points would improve scannability 
⚠️ Add specific problem-solution statements
⚠️ Urgency elements missing (limited stock, special offer timing)

## Mobile Experience
✅ Page is responsive and loads quickly
⚠️ Mobile CTAs should be full-width for better tap targets
⚠️ Text is too small on mobile - increase font size

## Quick Wins
1. Add customer review count and star rating above the fold
2. Create bulleted lists for product features for better readability
3. Add a "Free Shipping" badge near the price if applicable
4. Implement a simple countdown timer if running promotions
5. Add "In Stock" status with quantity for scarcity

## Deeper Improvements
- Implement product comparison table for similar items
- Add FAQ section addressing common purchase hesitations
- Create size/fit guide with clear measurements
- Showcase user-generated content from happy customers
- Enhance cross-sell recommendations with better product matches

## Estimated CRO Impact
**Medium-High** potential for conversion lift. The foundation is good, but several important psychological triggers for purchase are missing.
`;
      
      setIsLoading(false);
      onAnalysisComplete(analysisResult);
    }, 3000);
  };

  return (
    <div className="max-w-3xl mx-auto py-16 px-6 md:px-8">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Step 1: Paste Your Product Page URL
        </h2>
        <p className="text-slate-600">
          We'll analyze your page and give you actionable CRO recommendations
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste any live product detail page (PDP) URL here"
              className="h-12 text-base"
            />
          </div>
          <Button 
            type="submit"
            disabled={isLoading}
            className="h-12 bg-primary hover:bg-primary/90 text-white px-6"
          >
            {isLoading ? (
              <span className="flex items-center">
                <div className="animate-spin h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full"></div>
                Analyzing...
              </span>
            ) : (
              <span className="flex items-center">
                Run My Free CRO Analysis <Search className="ml-2 h-4 w-4" />
              </span>
            )}
          </Button>
        </div>
        <div className="text-center text-sm text-slate-500">
          Only works with Shopify product pages right now
        </div>
      </form>
    </div>
  );
};

export default AnalysisForm;
