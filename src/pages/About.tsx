
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#111827]">
      <Navbar />
      
      <div className="flex-1 pt-28 pb-16 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-6">
              About AutoCRO
            </h1>
            <p className="text-xl text-[#E2E8F0] max-w-3xl mx-auto">
              We're on a mission to democratize conversion expertise for Shopify merchants.
            </p>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#E2E8F0] mb-6">Our Story</h2>
            <div className="space-y-6">
              <p className="text-lg text-[#E2E8F0]">
                AutoCRO was born from a simple observation: most Shopify merchants don't have access to the conversion rate optimization expertise that large companies do.
              </p>
              <p className="text-lg text-[#E2E8F0]">
                As former ecommerce consultants, our founding team saw how small improvements to product pages could lead to dramatic increases in conversion rates and revenue. The problem was that most merchants couldn't afford the $10,000+ price tag that came with hiring a CRO agency.
              </p>
              <p className="text-lg text-[#E2E8F0]">
                With advances in AI technology, we realized we could codify our expertise and make it accessible to every Shopify store owner, regardless of budget or technical skill. That's how AutoCRO was born.
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#E2E8F0] mb-6">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#1E293B] p-6 rounded-lg border border-[#334155] text-center">
                <div className="w-24 h-24 rounded-full bg-[#334155] mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-[#E2E8F0] mb-1">Sarah Johnson</h3>
                <p className="text-lg text-[#94A3B8] mb-4">CEO & Co-Founder</p>
                <p className="text-lg text-[#E2E8F0]">Former Head of CRO at a leading ecommerce agency</p>
              </div>
              
              <div className="bg-[#1E293B] p-6 rounded-lg border border-[#334155] text-center">
                <div className="w-24 h-24 rounded-full bg-[#334155] mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-[#E2E8F0] mb-1">Michael Chen</h3>
                <p className="text-lg text-[#94A3B8] mb-4">CTO & Co-Founder</p>
                <p className="text-lg text-[#E2E8F0]">AI engineer with 10+ years of ecommerce experience</p>
              </div>
              
              <div className="bg-[#1E293B] p-6 rounded-lg border border-[#334155] text-center">
                <div className="w-24 h-24 rounded-full bg-[#334155] mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-[#E2E8F0] mb-1">Alex Rodriguez</h3>
                <p className="text-lg text-[#94A3B8] mb-4">Head of Product</p>
                <p className="text-lg text-[#E2E8F0]">Shopify expert and former product manager at Shopify</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-[#E2E8F0] mb-6">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#1E293B] p-6 rounded-lg border border-[#334155]">
                <h3 className="text-xl font-bold text-[#E2E8F0] mb-4">Democratize Expertise</h3>
                <p className="text-lg text-[#E2E8F0]">
                  We believe every merchant deserves access to world-class conversion optimization, regardless of their size or budget.
                </p>
              </div>
              
              <div className="bg-[#1E293B] p-6 rounded-lg border border-[#334155]">
                <h3 className="text-xl font-bold text-[#E2E8F0] mb-4">Actionable Over Academic</h3>
                <p className="text-lg text-[#E2E8F0]">
                  We focus on practical recommendations you can implement today, not theoretical advice with no clear path to execution.
                </p>
              </div>
              
              <div className="bg-[#1E293B] p-6 rounded-lg border border-[#334155]">
                <h3 className="text-xl font-bold text-[#E2E8F0] mb-4">Respect for Craft</h3>
                <p className="text-lg text-[#E2E8F0]">
                  We honor the craft of conversion optimization with recommendations backed by research and expertise, not generic tips.
                </p>
              </div>
              
              <div className="bg-[#1E293B] p-6 rounded-lg border border-[#334155]">
                <h3 className="text-xl font-bold text-[#E2E8F0] mb-4">Continuous Improvement</h3>
                <p className="text-lg text-[#E2E8F0]">
                  We're constantly learning and improving our AI models to provide better, more accurate recommendations.
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

export default About;
