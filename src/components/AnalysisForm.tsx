
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
`;
      
      setIsLoading(false);
      onAnalysisComplete(analysisResult);
    }, 3000);
  };

  return (
    <div className="pt-28 pb-16 px-6 md:px-8 min-h-screen bg-[#0F172A]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Step 1: Paste Your Product Page URL
          </h2>
          <p className="text-[#94A3B8] text-lg">
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
                    className="h-12 text-base bg-[#0F172A] border-[#334155] text-white placeholder:text-[#64748B] focus:border-primary"
                  />
                </div>
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="h-12 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-6 transition-all"
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <div className="animate-spin h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full"></div>
                      Analyzing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Run My Free Analysis <Search className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </div>
              <div className="text-center text-sm text-[#64748B]">
                Only works with live Shopify product pages (no staging URLs)
              </div>
            </form>
            
            {isLoading && (
              <div className="mt-10 space-y-4">
                <div className="h-8 w-1/3 mx-auto shimmer rounded-md"></div>
                <div className="h-32 shimmer rounded-md"></div>
                <div className="h-4 w-full shimmer rounded-md"></div>
                <div className="h-4 w-5/6 shimmer rounded-md"></div>
                <div className="h-4 w-4/6 shimmer rounded-md"></div>
              </div>
            )}
          </CardContent>
        </Card>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">What Happens Next?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#1E293B] p-6 rounded-lg border border-[#334155]">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 14L11 16L15 12" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="text-white font-medium mb-2">10-Point CRO Analysis</h4>
              <p className="text-[#94A3B8] text-sm">We run a comprehensive audit on your product page layout, copy, and UX</p>
            </div>
            <div className="bg-[#1E293B] p-6 rounded-lg border border-[#334155]">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="text-white font-medium mb-2">Prioritized Suggestions</h4>
              <p className="text-[#94A3B8] text-sm">You'll get actionable recommendations in seconds, in order of impact</p>
            </div>
            <div className="bg-[#1E293B] p-6 rounded-lg border border-[#334155]">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="text-white font-medium mb-2">No Fluff, Just Insights</h4>
              <p className="text-[#94A3B8] text-sm">No signup, no install, no technical jargon—just clear, actionable insights</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisForm;
