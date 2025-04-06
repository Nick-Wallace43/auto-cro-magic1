
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogPage = () => {
  const blogPosts = [
    {
      title: "10 Proven Ways to Increase Your Shopify Conversion Rate",
      excerpt: "Learn the most effective tactics for optimizing your Shopify store's conversion rate, backed by data from our analysis of 1,000+ stores.",
      date: "April 2, 2025",
      author: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040",
      category: "Conversion Rate Optimization"
    },
    {
      title: "The Ultimate Guide to Product Page Optimization",
      excerpt: "Discover how to create high-converting product pages that showcase your products effectively and drive more sales.",
      date: "March 28, 2025",
      author: "Michael Chen",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      category: "Product Pages"
    },
    {
      title: "Mobile Optimization: 5 Critical Elements for Shopify Stores",
      excerpt: "With over 70% of e-commerce traffic coming from mobile devices, these optimizations are essential for modern Shopify stores.",
      date: "March 21, 2025",
      author: "Lisa Rodriguez",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
      category: "Mobile UX"
    },
    {
      title: "How to Leverage Social Proof to Increase Conversions",
      excerpt: "Social proof is one of the most powerful psychological triggers for boosting conversion rates. Here's how to use it effectively.",
      date: "March 14, 2025",
      author: "James Wilson",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
      category: "Social Proof"
    },
    {
      title: "Performance Optimization: Speed Up Your Shopify Store",
      excerpt: "Page speed is directly correlated with conversion rates. Learn how to optimize your Shopify store for lightning-fast performance.",
      date: "March 7, 2025",
      author: "Emma Thompson",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766",
      category: "Performance"
    },
    {
      title: "SEO for Shopify: A Complete Technical Guide",
      excerpt: "Master the technical aspects of Shopify SEO to improve your store's visibility in search results and drive more organic traffic.",
      date: "February 28, 2025",
      author: "David Brown",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      category: "SEO"
    }
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen flex flex-col bg-[#111827]">
      <Navbar />
      
      <div className="flex-1">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-6">
              AutoCRO Blog
            </h1>
            <p className="text-xl text-[#E2E8F0]">
              Expert insights, tutorials, and strategies for optimizing your Shopify store.
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <Card className="bg-[#1E293B] border-[#4A5568] shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-between">
                  <div>
                    <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-lg font-medium mb-4">
                      {featuredPost.category}
                    </div>
                    <h2 className="text-3xl font-bold text-[#E2E8F0] mb-4">{featuredPost.title}</h2>
                    <p className="text-xl text-[#E2E8F0] mb-6">{featuredPost.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-[#94A3B8]">
                      <User className="h-5 w-5 mr-2" />
                      <span className="text-lg">{featuredPost.author}</span>
                      <span className="mx-2">•</span>
                      <Calendar className="h-5 w-5 mr-2" />
                      <span className="text-lg">{featuredPost.date}</span>
                    </div>
                    <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-[#2D3748] px-0">
                      Read More <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Regular Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Card key={index} className="bg-[#1E293B] border-[#4A5568] shadow-xl overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-2">
                    {post.category}
                  </div>
                  <CardTitle className="text-xl text-[#E2E8F0]">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-lg text-[#E2E8F0]">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t border-[#4A5568] pt-4">
                  <div className="flex items-center text-[#94A3B8] text-sm">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 hover:bg-[#2D3748]">
                    Read <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-20 bg-gradient-to-br from-[#2D3748] to-[#1E293B] p-8 md:p-12 rounded-xl shadow-xl">
            <div className="md:flex items-center justify-between">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold text-[#E2E8F0] mb-3">
                  Get the latest CRO insights in your inbox
                </h2>
                <p className="text-lg text-[#94A3B8]">
                  Join 10,000+ Shopify merchants receiving our weekly optimization tips.
                </p>
              </div>
              <div className="md:w-1/3 flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 py-3 px-4 bg-[#111827] border border-[#4A5568] rounded-l-md text-lg text-[#E2E8F0] placeholder:text-[#94A3B8]"
                />
                <Button className="rounded-l-none bg-primary hover:bg-primary/90 text-lg">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;
