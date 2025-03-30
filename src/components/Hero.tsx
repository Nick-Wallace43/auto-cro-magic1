
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = ({ onStartAnalysis }: { onStartAnalysis: () => void }) => {
  return (
    <div className="bg-hero-pattern py-16 md:py-24 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-800 leading-tight">
              Unlock More Sales From Your Shopify Store With AI
            </h1>
            <p className="text-lg text-slate-600">
              AutoCRO analyzes your product pages and gives you high-impact optimization tips in seconds — backed by conversion expertise and AI intelligence.
            </p>
            <Button 
              onClick={onStartAnalysis}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-6 py-6 h-auto text-lg font-medium rounded-md"
            >
              Start Free Analysis <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="flex-1">
            <div className="bg-white p-4 rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Product page analysis" 
                className="rounded-md w-full"
              />
              <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-secondary w-3/4 animate-pulse-light"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
