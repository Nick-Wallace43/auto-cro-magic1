
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon.",
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#111827]">
      <Navbar />
      <main className="flex-grow px-6 py-16 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-12">Contact Us</h1>
          
          <div className="mb-12">
            <p className="text-lg text-[#E2E8F0] mb-4">
              Have questions about AutoCRO? Need help with your account? Reach out to our team and we'll get back to you as soon as possible.
            </p>
            <p className="text-lg text-[#E2E8F0]">
              For immediate assistance, email us directly at <a href="mailto:support@autocro.com" className="text-primary hover:underline">support@autocro.com</a>
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 bg-[#1E293B] p-8 rounded-lg">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-lg text-[#E2E8F0]">Name</Label>
              <Input 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="text-lg bg-[#2D3748] border-[#4A5568] text-[#E2E8F0]" 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-lg text-[#E2E8F0]">Email</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="text-lg bg-[#2D3748] border-[#4A5568] text-[#E2E8F0]" 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-lg text-[#E2E8F0]">Subject</Label>
              <Input 
                id="subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                required 
                className="text-lg bg-[#2D3748] border-[#4A5568] text-[#E2E8F0]" 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="text-lg text-[#E2E8F0]">Message</Label>
              <Textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                className="text-lg bg-[#2D3748] border-[#4A5568] text-[#E2E8F0] min-h-[150px]" 
              />
            </div>
            
            <Button type="submit" className="w-full text-lg py-6 bg-primary hover:bg-primary/90 text-white">
              Send Message
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
