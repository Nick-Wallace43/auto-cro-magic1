
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = ({ onStartAnalysis }: { onStartAnalysis: () => void }) => {
  return (
    <div className="pt-28 pb-24 px-6 md:px-8 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-7">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              AI-Driven Conversion<br />Intelligence for Shopify
            </h1>
            <p className="text-lg text-[#CBD5E1] leading-relaxed">
              AutoCRO gives you instant, expert feedback on your product pages—no CRO agency required.
            </p>
            <Button 
              onClick={onStartAnalysis}
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-white px-7 py-6 h-auto text-lg font-medium rounded-md"
            >
              Start Free Analysis <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <div className="flex-1">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl"></div>
              <div className="relative bg-[#1E293B] p-4 rounded-lg border border-[#334155] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                  alt="AI-powered conversion analysis" 
                  className="rounded-md w-full object-cover h-64 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent opacity-70 rounded-lg"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="h-2.5 bg-[#334155] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-secondary w-3/4"></div>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-1.5">
                    <div className="h-2 bg-[#334155] rounded-full"></div>
                    <div className="h-2 bg-primary rounded-full"></div>
                    <div className="h-2 bg-[#334155] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
