
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight } from 'lucide-react';

const PricingPage = () => {
  const tiers = [
    {
      name: "Free",
      price: "$0",
      description: "Basic analysis for occasional use",
      features: [
        "Basic CRO feedback",
        "SEO technical audit",
        "Performance insights",
        "Limited to 5 analyses per month",
        "Single page analysis"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline" as const,
      popular: false
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "Complete analysis suite for serious merchants",
      features: [
        "Complete CRO feedback & recommendations",
        "Advanced SEO technical audit",
        "Detailed performance optimization",
        "AI-powered copywriting optimization",
        "Competitive benchmark insights",
        "Unlimited analyses",
        "Email reports & summaries",
        "Access to pro resources library",
        "Priority support"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "default" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "Custom solutions for large stores",
      features: [
        "Everything in Pro",
        "Custom API access",
        "White-label reports",
        "Dedicated account manager",
        "Custom integrations",
        "Team collaboration tools",
        "Advanced analytics"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#111827]">
      <Navbar />
      
      <div className="flex-1">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core analytics features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <Card key={tier.name} className={`bg-[#1E293B] border-[#4A5568] shadow-xl ${tier.popular ? 'ring-2 ring-primary' : ''}`}>
                {tier.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-2 text-lg font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl text-[#E2E8F0]">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-[#E2E8F0]">{tier.price}</span>
                    {tier.period && <span className="text-xl text-[#94A3B8]">{tier.period}</span>}
                  </div>
                  <CardDescription className="text-lg text-[#94A3B8] mt-2">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-lg text-[#E2E8F0]">{feature}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button 
                    variant={tier.buttonVariant} 
                    className={`w-full text-lg py-6 ${tier.buttonVariant === "outline" ? "border-[#4A5568] text-[#E2E8F0] hover:bg-[#2D3748]" : ""}`}
                  >
                    {tier.buttonText}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-24">
            <h2 className="text-3xl font-bold text-[#E2E8F0] mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-[#1E293B] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#E2E8F0] mb-3">Can I change plans later?</h3>
                <p className="text-lg text-[#E2E8F0]">Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of the next billing cycle.</p>
              </div>
              <div className="bg-[#1E293B] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#E2E8F0] mb-3">Is there a free trial?</h3>
                <p className="text-lg text-[#E2E8F0]">Yes, Pro plans include a 14-day free trial so you can experience all premium features before being charged.</p>
              </div>
              <div className="bg-[#1E293B] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#E2E8F0] mb-3">Do you offer refunds?</h3>
                <p className="text-lg text-[#E2E8F0]">We offer a 30-day money-back guarantee if you're not satisfied with our premium services.</p>
              </div>
              <div className="bg-[#1E293B] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#E2E8F0] mb-3">What payment methods do you accept?</h3>
                <p className="text-lg text-[#E2E8F0]">We accept all major credit cards, PayPal, and offer invoicing for Enterprise customers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PricingPage;
