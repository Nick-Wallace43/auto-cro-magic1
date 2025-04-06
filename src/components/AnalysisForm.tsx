
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, CheckSquare, Search, BarChart4, Home, LayoutGrid } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { analysisTypes } from '@/lib/analysis-types';

interface AnalysisFormProps {
  onAnalysisComplete: (results: string, analysisType: string) => void;
}

const AnalysisForm: React.FC<AnalysisFormProps> = ({ onAnalysisComplete }) => {
  const [url, setUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisType, setAnalysisType] = useState('product');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url.trim()) {
      toast({
        title: "URL Required",
        description: "Please enter a Shopify page URL to analyze.",
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
    
    // Simulate analysis with different results based on analysis type
    setTimeout(() => {
      setIsAnalyzing(false);
      
      // Get the correct type name for display
      const typeLabel = analysisTypes.find(type => type.id === analysisType)?.label || "Product Page";
      
      onAnalysisComplete(`Analysis results for ${typeLabel}...`, analysisType);
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 md:px-8">
      <h1 className="text-3xl md:text-4xl font-bold text-[#E2E8F0] mb-6">
        Analyze Your Shopify Store
      </h1>
      
      <Tabs defaultValue="product" value={analysisType} onValueChange={setAnalysisType} className="mb-8">
        <TabsList className="grid grid-cols-3 h-auto p-1 bg-[#1E293B] mb-6">
          {analysisTypes.map(type => (
            <TabsTrigger 
              key={type.id} 
              value={type.id}
              className="py-4 text-lg data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              {type.icon === 'product' && <BarChart4 className="mr-2 h-5 w-5" />}
              {type.icon === 'homepage' && <Home className="mr-2 h-5 w-5" />}
              {type.icon === 'collection' && <LayoutGrid className="mr-2 h-5 w-5" />}
              {type.label}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {analysisTypes.map(type => (
          <TabsContent key={type.id} value={type.id} className="mt-0">
            <Card className="bg-[#1E293B] border-[#4A5568] shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-[#E2E8F0]">{type.label} Analysis</CardTitle>
                <CardDescription className="text-lg text-[#94A3B8]">
                  {type.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-4 mb-4">
                    <Input
                      type="url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder={type.urlPlaceholder}
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
                        <>Run {type.buttonText} <ArrowRight className="ml-2 h-5 w-5" /></>
                      )}
                    </Button>
                  </div>
                  <p className="text-lg text-[#94A3B8]">Only works with live Shopify {type.id} pages</p>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

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
                AutoCRO analyzes 9 key dimensions of your Shopify store pages
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#1E293B] border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-xl text-[#E2E8F0]">Actionable Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-[#E2E8F0]">
                You'll get CRO insights, SEO feedback, and performance recommendations
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
                We extract your page content, layout, images, and structure
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
