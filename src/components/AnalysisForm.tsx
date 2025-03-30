
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';

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

## Resources
- [The Psychology of High-Converting Shopify PDPs](https://example.com)
- [Mobile UX Best Practices for Ecommerce](https://example.com)
- [Using Social Proof to Boost Conversion Rates](https://example.com)
- [Creating Urgency Without Being Pushy](https://example.com)
- [Image Optimization Guide for Ecommerce](https://example.com)
`;
      
      setIsLoading(false);
      onAnalysisComplete(analysisResult);
    }, 3000);
  };

  return (
    <div className="pt-28 pb-16 px-6 md:px-8 min-h-screen bg-[#111827]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#E2E8F0] mb-4">
            Step 1: Paste Your Product Page URL
          </h2>
          <p className="text-xl text-[#E2E8F0] max-w-2xl mx-auto">
            We'll analyze your page and give you actionable CRO recommendations
          </p>
        </div>
        
        <Card className="bg-[#1E293B] border border-[#334155] shadow-xl">
          <CardContent className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="e.g. https://yourstore.com/products/sample-product"
                    className="h-14 text-lg bg-[#111827] border-[#334155] text-[#E2E8F0] placeholder:text-[#64748B] focus:border-primary"
                  />
                </div>
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="h-14 bg-primary hover:bg-primary/90 text-white px-8 transition-all text-lg"
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <div className="animate-spin h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full"></div>
                      Analyzing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Run My Free Analysis <Search className="ml-2 h-5 w-5" />
                    </span>
                  )}
                </Button>
              </div>
              <div className="text-center text-lg text-[#94A3B8]">
                Only works with live Shopify product pages (no staging URLs)
              </div>
            </form>
            
            {isLoading && (
              <div className="mt-10 space-y-5">
                <div className="h-10 w-1/3 mx-auto shimmer rounded-md"></div>
                <div className="h-40 shimmer rounded-md"></div>
                <div className="h-5 w-full shimmer rounded-md"></div>
                <div className="h-5 w-5/6 shimmer rounded-md"></div>
                <div className="h-5 w-4/6 shimmer rounded-md"></div>
              </div>
            )}
          </CardContent>
        </Card>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-[#E2E8F0] mb-8 text-center">What to Expect Next</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#1E293B] p-6 rounded-lg border border-[#334155]">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 14L11 16L15 12" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="text-[#E2E8F0] text-lg font-medium mb-3">AutoCRO analyzes 8 key CRO dimensions</h4>
              <p className="text-[#E2E8F0] text-lg">From first impressions to mobile experience, we look at every aspect of your product page</p>
            </div>
            <div className="bg-[#1E293B] p-6 rounded-lg border border-[#334155]">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="text-[#E2E8F0] text-lg font-medium mb-3">You'll see Quick Wins, UX feedback, and estimated impact</h4>
              <p className="text-[#E2E8F0] text-lg">Get actionable recommendations in seconds, ordered by potential impact</p>
            </div>
            <div className="bg-[#1E293B] p-6 rounded-lg border border-[#334155]">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="text-[#E2E8F0] text-lg font-medium mb-3">Some results are blurred unless you upgrade</h4>
              <p className="text-[#E2E8F0] text-lg">Premium insights like Quick Wins and Deeper Improvements are available in our Pro plan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisForm;
