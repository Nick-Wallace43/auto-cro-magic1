
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Free",
      price: "$0",
      description: "Basic analysis for casual users",
      features: [
        "1 product page analysis per day",
        "Basic CRO insights",
        "First Impressions analysis",
        "CTA Strategy suggestions",
        "Imagery & Visual feedback"
      ],
      cta: "Start Free Analysis",
      popular: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "per month",
      description: "Complete CRO toolkit for serious merchants",
      features: [
        "Unlimited product page analyses",
        "Quick Wins recommendations",
        "Deeper Improvements section",
        "Estimated CRO Impact metrics",
        "Resources & reference links",
        "Mobile experience analysis",
        "Priority email support"
      ],
      cta: "Upgrade to Pro",
      popular: true
    },
    {
      name: "Agency",
      price: "$99",
      period: "per month",
      description: "Multi-client solution for agencies",
      features: [
        "Everything in Pro",
        "Manage multiple client stores",
        "White-label reports",
        "Benchmark scoring",
        "Custom UX audits",
        "API access",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#111827]">
      <Navbar />
      <main className="flex-grow px-6 py-16 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-4 text-center">Simple, Transparent Pricing</h1>
          <p className="text-xl text-[#E2E8F0] mb-12 text-center max-w-3xl mx-auto">
            Choose the plan that fits your needs. No hidden fees. Cancel anytime.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`bg-[#1E293B] border-0 shadow-lg overflow-hidden ${tier.popular ? 'ring-2 ring-primary relative' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-lg font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader className={`pb-8 ${tier.popular ? 'pt-12' : 'pt-8'}`}>
                  <div className="mb-4">
                    <span className="text-lg font-medium text-[#E2E8F0]">{tier.name}</span>
                  </div>
                  <CardTitle className="flex items-baseline">
                    <span className="text-4xl font-bold text-[#E2E8F0]">{tier.price}</span>
                    {tier.period && <span className="ml-2 text-lg text-[#E2E8F0]/70">{tier.period}</span>}
                  </CardTitle>
                  <p className="text-lg text-[#E2E8F0]/70 mt-2">{tier.description}</p>
                </CardHeader>
                <CardContent className="pb-8 text-lg">
                  <ul className="space-y-4">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-6 w-6 text-primary shrink-0 mr-3" />
                        <span className="text-[#E2E8F0]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-2 pb-8">
                  <Button 
                    className={`w-full text-lg py-6 ${tier.popular ? 'bg-primary hover:bg-primary/90' : 'bg-[#2D3748] hover:bg-[#4A5568]'}`}
                  >
                    {tier.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
