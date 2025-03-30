
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'Top 5 PDP Mistakes on Shopify',
    excerpt: 'Discover the most common product page mistakes that are costing you sales and learn how to fix them.',
    author: 'Sarah Johnson',
    date: 'June 12, 2023',
    category: 'Product Pages',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
  },
  {
    id: 2,
    title: 'How AI Is Changing CRO Forever',
    excerpt: 'Artificial intelligence is revolutionizing how merchants optimize their stores. Here's what you need to know.',
    author: 'Michael Chen',
    date: 'May 28, 2023',
    category: 'AI & Technology',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
  },
  {
    id: 3,
    title: 'The Psychology of High-Converting PDPs',
    excerpt: 'Understanding customer psychology is the key to designing product pages that convert. Learn the principles that drive purchases.',
    author: 'Alex Rodriguez',
    date: 'May 15, 2023',
    category: 'Psychology',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
  },
  {
    id: 4,
    title: 'Mobile Optimization for Shopify Stores',
    excerpt: 'With over 70% of traffic coming from mobile devices, optimizing your mobile experience is no longer optional.',
    author: 'Emma Wilson',
    date: 'April 30, 2023',
    category: 'Mobile',
    imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
  },
  {
    id: 5,
    title: 'A/B Testing 101: A Guide for Shopify Merchants',
    excerpt: 'Learn how to set up, run and analyze A/B tests that lead to meaningful insights for your Shopify store.',
    author: 'James Smith',
    date: 'April 18, 2023',
    category: 'Testing',
    imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
  },
];

const FeaturedPost = ({ post }: { post: typeof blogPosts[0] }) => (
  <div className="grid md:grid-cols-2 gap-8 bg-[#1E293B] rounded-xl overflow-hidden border border-[#334155]">
    <div className="h-64 md:h-auto">
      <img 
        src={post.imageUrl} 
        alt={post.title} 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex flex-col justify-center p-8">
      <span className="text-primary text-lg font-medium mb-2">{post.category}</span>
      <h2 className="text-3xl font-bold text-[#E2E8F0] mb-4">{post.title}</h2>
      <p className="text-lg text-[#CBD5E1] mb-6">{post.excerpt}</p>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg text-[#E2E8F0]">{post.author}</p>
          <p className="text-lg text-[#94A3B8]">{post.date}</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white text-lg">Read More</Button>
      </div>
    </div>
  </div>
);

const BlogPostCard = ({ post }: { post: typeof blogPosts[0] }) => (
  <div className="bg-[#1E293B] rounded-xl overflow-hidden border border-[#334155] flex flex-col">
    <div className="h-52">
      <img 
        src={post.imageUrl} 
        alt={post.title} 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex-1 p-6 flex flex-col">
      <span className="text-primary text-lg font-medium mb-2">{post.category}</span>
      <h3 className="text-xl font-bold text-[#E2E8F0] mb-3">{post.title}</h3>
      <p className="text-lg text-[#CBD5E1] mb-6 flex-1">{post.excerpt}</p>
      <div className="flex items-center justify-between mt-auto">
        <div>
          <p className="text-[#E2E8F0]">{post.author}</p>
          <p className="text-[#94A3B8]">{post.date}</p>
        </div>
        <Button variant="outline" className="border-primary text-[#E2E8F0] hover:text-white">Read</Button>
      </div>
    </div>
  </div>
);

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#111827]">
      <Navbar />
      
      <div className="flex-1 pt-28 pb-16 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-6">
              CRO Insights Blog
            </h1>
            <p className="text-xl text-[#E2E8F0] max-w-3xl mx-auto">
              Expert advice on conversion optimization for Shopify stores.
            </p>
          </div>
          
          <div className="mb-16">
            <FeaturedPost post={blogPosts[0]} />
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#E2E8F0] mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map(post => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white text-lg py-6 px-10 h-auto"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;
