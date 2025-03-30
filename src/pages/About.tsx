
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#111827]">
      <Navbar />
      <main className="flex-grow px-6 py-16 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-12">About AutoCRO</h1>
          
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#E2E8F0] mb-6">Our Mission</h2>
            <p className="text-lg text-[#E2E8F0] mb-6">
              AutoCRO is built by CRO experts and AI builders. Our mission is to democratize conversion strategy and make 
              professional-level optimization accessible to all Shopify store owners.
            </p>
            <p className="text-lg text-[#E2E8F0]">
              We believe that every ecommerce store deserves access to powerful conversion insights without the 
              agency price tag or technical complexity.
            </p>
          </section>
          
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#E2E8F0] mb-6">Our Approach</h2>
            <p className="text-lg text-[#E2E8F0] mb-6">
              By combining human expertise with AI technology, we're able to analyze your product pages and provide 
              actionable insights in seconds. Our recommendations are based on analysis of thousands of high-performing 
              Shopify stores.
            </p>
            <p className="text-lg text-[#E2E8F0]">
              Unlike generic CRO tools, AutoCRO is specifically built for Shopify product pages, focusing on the unique 
              elements that drive conversion in ecommerce environments.
            </p>
          </section>
          
          <section>
            <h2 className="text-3xl font-bold text-[#E2E8F0] mb-6">The Team</h2>
            <p className="text-lg text-[#E2E8F0]">
              Our team consists of experienced CRO specialists, ecommerce strategists, and AI engineers who have 
              worked with hundreds of Shopify merchants to optimize their stores and increase revenue.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
