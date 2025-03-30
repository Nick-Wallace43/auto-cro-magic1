
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof contactFormSchema>) => {
    console.log(values);
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
    });
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#111827]">
      <Navbar />
      
      <div className="flex-1 pt-28 pb-16 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-[#E2E8F0] max-w-3xl mx-auto">
              Have questions about AutoCRO? Our team is here to help you optimize your store.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-[#1E293B] border border-[#334155]">
              <CardContent className="p-6 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-5">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-[#E2E8F0] mb-3">Email Us</h3>
                <p className="text-lg text-[#CBD5E1] mb-4">Our team will respond within 24 hours.</p>
                <a href="mailto:support@autocro.com" className="text-lg text-primary hover:text-primary/80 transition-colors">
                  support@autocro.com
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-[#1E293B] border border-[#334155]">
              <CardContent className="p-6 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-5">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-[#E2E8F0] mb-3">Call Us</h3>
                <p className="text-lg text-[#CBD5E1] mb-4">Available Monday-Friday, 9am-5pm ET.</p>
                <a href="tel:+18005551234" className="text-lg text-primary hover:text-primary/80 transition-colors">
                  +1 (800) 555-1234
                </a>
              </CardContent>
            </Card>
            
            <Card className="bg-[#1E293B] border border-[#334155]">
              <CardContent className="p-6 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-5">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-[#E2E8F0] mb-3">Visit Us</h3>
                <p className="text-lg text-[#CBD5E1] mb-4">Our headquarters location.</p>
                <address className="not-italic text-lg text-primary">
                  123 Tech Avenue<br />
                  San Francisco, CA 94107
                </address>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-[#1E293B] border border-[#334155]">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-[#E2E8F0] mb-6">Send Us a Message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg text-[#E2E8F0]">Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              className="text-lg bg-[#111827] border-[#334155] text-[#E2E8F0] h-12" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-[#F87171]" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg text-[#E2E8F0]">Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your email" 
                              className="text-lg bg-[#111827] border-[#334155] text-[#E2E8F0] h-12" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-[#F87171]" />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg text-[#E2E8F0]">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="What's this about?" 
                            className="text-lg bg-[#111827] border-[#334155] text-[#E2E8F0] h-12" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-[#F87171]" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg text-[#E2E8F0]">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can we help you?" 
                            className="text-lg bg-[#111827] border-[#334155] text-[#E2E8F0] h-32 resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-[#F87171]" />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="bg-primary hover:bg-primary/90 text-white text-lg py-6 px-8 h-auto"
                  >
                    Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
