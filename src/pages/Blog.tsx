
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Top 5 PDP Mistakes on Shopify",
      description: "Learn the common pitfalls that are costing you conversions on your product pages.",
      date: "June 15, 2023",
      readTime: "5 min read"
    },
    {
      title: "How AI Is Changing CRO",
      description: "Discover how artificial intelligence is revolutionizing conversion rate optimization.",
      date: "July 2, 2023",
      readTime: "7 min read"
    },
    {
      title: "The Psychology of High-Converting Shopify PDPs",
      description: "Understand the psychological triggers that drive customers to purchase.",
      date: "August 10, 2023",
      readTime: "8 min read"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#111827]">
      <Navbar />
      <main className="flex-grow px-6 py-16 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-12">CRO Insights & Resources</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-[#1E293B] border-0 shadow-md hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#E2E8F0]">{post.title}</CardTitle>
                  <CardDescription className="text-lg text-[#E2E8F0]/70">{post.date} · {post.readTime}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-[#E2E8F0]">{post.description}</p>
                </CardContent>
                <CardFooter>
                  <a href="#" className="text-lg text-primary flex items-center hover:underline">
                    Read more <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
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

export default Blog;
