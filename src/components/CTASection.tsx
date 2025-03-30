
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = ({ onStartAnalysis }: { onStartAnalysis: () => void }) => {
  return (
    <div className="py-16 px-6 md:px-8 bg-[#111827] text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#E2E8F0] mb-8">
          Ready to Optimize Your Product Page?
        </h2>
        <Button
          onClick={onStartAnalysis}
          className="bg-primary hover:bg-primary/90 text-white text-lg md:text-xl font-medium px-10 py-7 h-auto rounded-full hover:shadow-lg transition-all"
        >
          Start Free Analysis <ArrowRight className="ml-2 h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default CTASection;
