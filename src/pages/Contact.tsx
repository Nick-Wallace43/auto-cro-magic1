
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon.",
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#111827]">
      <Navbar />
      
      <div className="flex-1">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-[#E2E8F0]">
              Have questions about AutoCRO? Get in touch with our team and we'll be happy to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-[#1E293B] rounded-xl p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-[#E2E8F0] mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-lg font-medium text-[#E2E8F0]">Name</label>
                    <Input 
                      id="name"
                      type="text" 
                      placeholder="Your name" 
                      className="bg-[#111827] border-[#4A5568] text-lg text-[#E2E8F0] placeholder:text-[#94A3B8]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-lg font-medium text-[#E2E8F0]">Email</label>
                    <Input 
                      id="email"
                      type="email" 
                      placeholder="Your email" 
                      className="bg-[#111827] border-[#4A5568] text-lg text-[#E2E8F0] placeholder:text-[#94A3B8]"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-lg font-medium text-[#E2E8F0]">Subject</label>
                  <Input 
                    id="subject"
                    type="text" 
                    placeholder="How can we help?" 
                    className="bg-[#111827] border-[#4A5568] text-lg text-[#E2E8F0] placeholder:text-[#94A3B8]"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-lg font-medium text-[#E2E8F0]">Message</label>
                  <Textarea 
                    id="message"
                    placeholder="Your message" 
                    rows={5}
                    className="bg-[#111827] border-[#4A5568] text-lg text-[#E2E8F0] placeholder:text-[#94A3B8]"
                  />
                </div>
                
                <Button type="submit" className="w-full py-6 text-lg bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#E2E8F0] mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="bg-[#1E293B] p-6 rounded-lg shadow-md flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[#E2E8F0] mb-2">Email Us</h3>
                    <p className="text-lg text-[#94A3B8]">For general inquiries:</p>
                    <a href="mailto:hello@autocro.com" className="text-lg text-primary hover:underline">hello@autocro.com</a>
                    <p className="text-lg text-[#94A3B8] mt-1">For support:</p>
                    <a href="mailto:support@autocro.com" className="text-lg text-primary hover:underline">support@autocro.com</a>
                  </div>
                </div>
                
                <div className="bg-[#1E293B] p-6 rounded-lg shadow-md flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[#E2E8F0] mb-2">Call Us</h3>
                    <p className="text-lg text-[#94A3B8]">Mon-Fri, 9am-5pm EST</p>
                    <a href="tel:+1-555-123-4567" className="text-lg text-primary hover:underline">+1 (555) 123-4567</a>
                  </div>
                </div>
                
                <div className="bg-[#1E293B] p-6 rounded-lg shadow-md flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[#E2E8F0] mb-2">Live Chat</h3>
                    <p className="text-lg text-[#94A3B8]">Available 24/7 for Pro customers</p>
                    <a href="#" className="text-lg text-primary hover:underline">Start a chat</a>
                  </div>
                </div>
                
                <div className="bg-[#1E293B] p-6 rounded-lg shadow-md flex">
                  <div className="mr-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[#E2E8F0] mb-2">Office</h3>
                    <p className="text-lg text-[#94A3B8]">
                      123 E-Commerce Avenue<br />
                      Suite 200<br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
