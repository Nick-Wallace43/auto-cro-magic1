
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, CheckSquare, Search } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface AnalysisFormProps {
  onAnalysisComplete: (results: string) => void;
}

const AnalysisForm: React.FC<AnalysisFormProps> = ({ onAnalysisComplete }) => {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url.trim()) {
      toast({
        title: "URL Required",
        description: "Please enter a Shopify product page URL to analyze.",
        variant: "destructive",
      });
      return;
    }
    
    // Fix the URL validation to be more flexible with Shopify stores
    // Accept URLs containing shopify.com, myshopify.com, or any domain with /products/ path
    if (!url.includes('shopify.com') && !url.includes('myshopify.com') && !url.includes('/products/')) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid Shopify product page URL.",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      onAnalysisComplete("Analysis results would be shown here...");
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:px-8">
      <h1 className="text-3xl md:text-4xl font-bold text-[#E2E8F0] mb-6">
        Step 1: Paste Your Product Page URL
      </h1>
      
      <form onSubmit={handleSubmit} className="mb-16">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <Input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="e.g. https://yourstore.com/products/sample-product"
            className="flex-grow text-lg py-6 px-4 bg-[#1E293B] border-[#4A5568] text-[#E2E8F0] placeholder:text-[#94A3B8]"
            disabled={isAnalyzing}
          />
          <Button 
            type="submit" 
            className="md:w-auto text-lg py-6 px-8 bg-primary hover:bg-primary/90 text-white"
            disabled={isAnalyzing}
          >
            {isAnalyzing ? (
              <>Analyzing <Search className="ml-2 h-5 w-5 animate-spin" /></>
            ) : (
              <>Run My Free Analysis <ArrowRight className="ml-2 h-5 w-5" /></>
            )}
          </Button>
        </div>
        <p className="text-lg text-[#94A3B8]">Only works with live Shopify product pages (no staging URLs)</p>
      </form>

      <div className="space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#E2E8F0] mb-6">
          What to Expect Next
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#1E293B] border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-xl text-[#E2E8F0]">Complete Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-[#E2E8F0]">
                AutoCRO analyzes 8 key CRO dimensions of your product page
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#1E293B] border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-xl text-[#E2E8F0]">Actionable Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-[#E2E8F0]">
                You'll see UX feedback, conversion insights, and suggested improvements
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#1E293B] border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-xl text-[#E2E8F0]">Pro Features</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-[#E2E8F0]">
                Some premium insights are blurred unless you upgrade to the Pro plan
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Card className="bg-[#1E293B] border-0 shadow-md mt-8">
          <CardHeader>
            <CardTitle className="text-xl text-[#E2E8F0]">Analysis Process</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start">
              <CheckSquare className="h-6 w-6 text-primary shrink-0 mr-3 mt-1" />
              <p className="text-lg text-[#E2E8F0]">
                We extract your PDP content, layout, images, and structure
              </p>
            </div>
            <div className="flex items-start">
              <CheckSquare className="h-6 w-6 text-primary shrink-0 mr-3 mt-1" />
              <p className="text-lg text-[#E2E8F0]">
                Our AI compares your page against thousands of high-converting Shopify stores
              </p>
            </div>
            <div className="flex items-start">
              <CheckSquare className="h-6 w-6 text-primary shrink-0 mr-3 mt-1" />
              <p className="text-lg text-[#E2E8F0]">
                Get prioritized, actionable recommendations in seconds
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalysisForm;
