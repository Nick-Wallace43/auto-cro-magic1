
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  buttonText, 
  buttonVariant = "default" 
}: { 
  title: string; 
  price: string; 
  description: string; 
  features: string[];
  buttonText: string;
  buttonVariant?: "default" | "outline";
}) => (
  <Card className="bg-[#1E293B] border border-[#334155]">
    <CardHeader>
      <CardTitle className="text-2xl font-bold text-[#E2E8F0]">{title}</CardTitle>
      <div className="mt-4">
        <span className="text-4xl font-bold text-[#E2E8F0]">{price}</span>
        {price !== 'Free' && <span className="text-lg text-[#94A3B8] ml-2">/month</span>}
      </div>
      <CardDescription className="text-lg text-[#CBD5E1] mt-2">{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
            <span className="text-lg text-[#E2E8F0]">{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button 
        variant={buttonVariant} 
        className={`w-full text-lg py-6 ${buttonVariant === "outline" ? "border-primary text-[#E2E8F0]" : "bg-primary text-white"}`}
      >
        {buttonText}
      </Button>
    </CardFooter>
  </Card>
);

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#111827]">
      <Navbar />
      
      <div className="flex-1 pt-28 pb-16 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-[#E2E8F0] max-w-3xl mx-auto">
              Choose the plan that works best for your Shopify store. Upgrade or downgrade anytime.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PricingCard
              title="Free"
              price="Free"
              description="Perfect for trying out AutoCRO"
              features={[
                "Basic CRO analysis",
                "5 analyses per month",
                "Standard report sections",
                "Email support"
              ]}
              buttonText="Get Started"
            />
            
            <PricingCard
              title="Pro"
              price="$49"
              description="Unlock all premium features"
              features={[
                "Everything in Free",
                "Unlimited analyses",
                "Quick Wins recommendations",
                "Deeper Improvements analysis",
                "CRO impact estimates",
                "Premium resources",
                "Priority support"
              ]}
              buttonText="Upgrade to Pro"
            />
            
            <PricingCard
              title="Enterprise"
              price="$199"
              description="For agencies and larger stores"
              features={[
                "Everything in Pro",
                "Multiple store management",
                "Team collaboration",
                "Custom reporting",
                "API access",
                "Dedicated account manager",
                "Custom integrations"
              ]}
              buttonText="Contact Sales"
              buttonVariant="outline"
            />
          </div>
          
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-[#E2E8F0] mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#1E293B] p-8 rounded-lg border border-[#334155]">
                <h3 className="text-xl font-bold text-[#E2E8F0] mb-4">Can I cancel my subscription?</h3>
                <p className="text-lg text-[#CBD5E1]">
                  Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.
                </p>
              </div>
              
              <div className="bg-[#1E293B] p-8 rounded-lg border border-[#334155]">
                <h3 className="text-xl font-bold text-[#E2E8F0] mb-4">Do you offer a free trial?</h3>
                <p className="text-lg text-[#CBD5E1]">
                  Our Free plan serves as a trial. You can use the basic features for as long as you want and upgrade when you're ready.
                </p>
              </div>
              
              <div className="bg-[#1E293B] p-8 rounded-lg border border-[#334155]">
                <h3 className="text-xl font-bold text-[#E2E8F0] mb-4">What payment methods do you accept?</h3>
                <p className="text-lg text-[#CBD5E1]">
                  We accept all major credit cards including Visa, Mastercard, and American Express.
                </p>
              </div>
              
              <div className="bg-[#1E293B] p-8 rounded-lg border border-[#334155]">
                <h3 className="text-xl font-bold text-[#E2E8F0] mb-4">Can I upgrade or downgrade my plan?</h3>
                <p className="text-lg text-[#CBD5E1]">
                  Yes, you can change your plan at any time. Changes are prorated based on your remaining subscription period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Pricing;
