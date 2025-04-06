
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpRight, CheckCircle2, LineChart, Users, Zap } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#111827]">
      <Navbar />
      
      <div className="flex-1">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-6">
              About AutoCRO
            </h1>
            <p className="text-xl text-[#E2E8F0] mb-8">
              We're building the future of e-commerce optimization, helping Shopify merchants increase 
              conversions and revenue through AI-powered insights.
            </p>
            <div className="flex justify-center">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full">
                <LineChart className="h-10 w-10 text-white" />
              </div>
            </div>
          </div>

          <div className="space-y-24">
            <section>
              <h2 className="text-3xl font-bold text-[#E2E8F0] mb-8">Our Mission</h2>
              <div className="bg-[#1E293B] p-8 rounded-xl">
                <p className="text-xl text-[#E2E8F0] leading-relaxed">
                  AutoCRO was founded with a simple mission: democratize conversion rate optimization for 
                  Shopify merchants of all sizes. We believe that advanced CRO techniques, SEO best practices, 
                  and performance optimization shouldn't be exclusive to enterprise brands with massive budgets.
                </p>
                <p className="text-xl text-[#E2E8F0] leading-relaxed mt-6">
                  By leveraging the power of AI and data analysis, we provide actionable insights that would 
                  traditionally require hiring expensive agencies or consultants. Our platform analyzes your 
                  Shopify store pages and delivers expert-level recommendations in seconds, not weeks.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-[#E2E8F0] mb-8">What Sets Us Apart</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-[#1E293B] border-[#4A5568] shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Zap className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#E2E8F0]">Built for Shopify</h3>
                    </div>
                    <p className="text-lg text-[#E2E8F0]">
                      Unlike generic analysis tools, AutoCRO is specifically designed for Shopify stores,
                      understanding the unique elements of product pages, homepages, and collection pages.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-[#1E293B] border-[#4A5568] shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <LineChart className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#E2E8F0]">Data-Driven Insights</h3>
                    </div>
                    <p className="text-lg text-[#E2E8F0]">
                      Our recommendations are based on analysis of thousands of high-performing Shopify stores,
                      so you get proven strategies that work specifically for your industry.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-[#1E293B] border-[#4A5568] shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <CheckCircle2 className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#E2E8F0]">Actionable Results</h3>
                    </div>
                    <p className="text-lg text-[#E2E8F0]">
                      We don't just identify problems – we provide clear, actionable steps to fix them,
                      organized by effort level and potential impact on your conversion rates.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-[#1E293B] border-[#4A5568] shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#E2E8F0]">Built By E-commerce Experts</h3>
                    </div>
                    <p className="text-lg text-[#E2E8F0]">
                      Our team combines decades of experience in e-commerce optimization, SEO, and
                      Shopify development to deliver insights you can trust.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="bg-[#1E293B] p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-[#E2E8F0] mb-8">Our Story</h2>
              <p className="text-lg text-[#E2E8F0] leading-relaxed">
                AutoCRO began when our founders, a team of e-commerce consultants and developers, noticed a 
                common pattern: small to mid-sized Shopify merchants were struggling with the same CRO and 
                performance issues, but couldn't afford dedicated optimization services.
              </p>
              <p className="text-lg text-[#E2E8F0] leading-relaxed mt-6">
                After helping dozens of merchants improve their conversion rates through manual audits and 
                optimizations, we decided to build a platform that could automate this process and make it 
                accessible to all Shopify store owners, regardless of their budget or technical expertise.
              </p>
              <p className="text-lg text-[#E2E8F0] leading-relaxed mt-6">
                Today, AutoCRO has analyzed thousands of Shopify pages and helped merchants across multiple 
                niches improve their conversion rates, SEO performance, and page speed.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
