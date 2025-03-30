
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Paste your product page URL",
      description: "Simply enter the URL of any live Shopify product page you want to analyze"
    },
    {
      number: "02",
      title: "Our AI analyzes everything",
      description: "We scan layout, copy, UX, images, and structure against best practices"
    },
    {
      number: "03",
      title: "Get prioritized suggestions",
      description: "Receive detailed, actionable CRO recommendations in seconds"
    }
  ];

  return (
    <section className="py-20 px-6 md:px-8 bg-[#0F172A]" id="features">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto">
            Get expert-level conversion rate optimization insights without the agency price tag
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <Card key={step.number} className="bg-[#1E293B] border border-[#334155] shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary/50 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-[#94A3B8]">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyAutoCRO = () => {
  const features = [
    {
      title: "Built for Shopify",
      description: "Specifically designed to work with Shopify product pages and their unique elements"
    },
    {
      title: "AI-Powered Analysis",
      description: "Trained on thousands of high-converting product pages across multiple niches"
    },
    {
      title: "No Sign-Up Needed",
      description: "Free to try without creating an account or installing anything on your store"
    },
    {
      title: "CRO Without The Price Tag",
      description: "Get expert-level insights at a fraction of what agencies charge for manual audits"
    }
  ];

  return (
    <section className="py-20 px-6 md:px-8 bg-[#1E293B]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Why AutoCRO?</h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto">
            We're changing how Shopify merchants optimize their product pages
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4 items-start p-6 rounded-lg bg-[#0F172A] border border-[#334155]">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                <p className="text-[#94A3B8]">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SampleOutput = () => {
  const samples = [
    "Improve CTA contrast to make 'Add to Cart' more visually prominent",
    "Reorder product images to lead with lifestyle shots before detailed views",
    "Add social proof elements (reviews count, ratings) above the fold",
    "Simplify product description with bullet points for key features",
    "Use urgency signals for limited stock or special offers"
  ];

  return (
    <section className="py-20 px-6 md:px-8 bg-[#0F172A]" id="examples">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Sample Output Teaser</h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto">
            Here's a preview of the actionable insights AutoCRO provides
          </p>
        </div>
        
        <div className="bg-[#1E293B] border border-[#334155] rounded-xl p-6 md:p-8 shadow-xl">
          <div className="space-y-4">
            {samples.map((sample, index) => (
              <div key={index} className="flex items-start gap-3 p-3 hover:bg-[#0F172A]/50 rounded-lg transition-colors">
                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-[#CBD5E1]">{sample}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-[#94A3B8] mb-4">This is just a preview. Get your full analysis by trying AutoCRO now.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomeFeatures = () => {
  return (
    <>
      <HowItWorks />
      <WhyAutoCRO />
      <SampleOutput />
    </>
  );
};

export default HomeFeatures;
