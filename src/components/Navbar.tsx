
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Menu } from 'lucide-react';

const navItems = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

const Navbar = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onLoginSubmit = (values: z.infer<typeof loginSchema>) => {
    console.log(values);
    // Handle login logic here
    setLoginOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-5 px-6 md:px-8 bg-[#111827]/95 backdrop-blur-sm border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-[#E2E8F0] hover:text-white transition-colors text-lg font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                className="border-primary text-[#E2E8F0] hover:text-white hover:bg-primary/20 transition-colors text-lg h-12"
              >
                Login
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#1E293B] border border-[#334155] text-[#E2E8F0] sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-[#E2E8F0]">Login to AutoCRO</DialogTitle>
              </DialogHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onLoginSubmit)} className="space-y-6 mt-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg text-[#E2E8F0]">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="you@example.com" 
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
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg text-[#E2E8F0]">Password</FormLabel>
                        <FormControl>
                          <Input 
                            type="password" 
                            placeholder="••••••••" 
                            className="text-lg bg-[#111827] border-[#334155] text-[#E2E8F0] h-12" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-[#F87171]" />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white text-lg h-12"
                  >
                    Login
                  </Button>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
          
          <Button 
            className="bg-[#E2E8F0] text-[#111827] hover:bg-white transition-colors text-lg h-12"
          >
            Sign Up
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              className="md:hidden text-[#E2E8F0] hover:text-white hover:bg-[#1E293B]/50"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-[#111827] border-l border-[#1E293B] text-[#E2E8F0]">
            <div className="flex flex-col space-y-6 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-[#E2E8F0] hover:text-white transition-colors text-xl font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                variant="outline" 
                className="border-primary text-[#E2E8F0] hover:text-white hover:bg-primary/20 transition-colors text-lg mt-4 w-full"
                onClick={() => setLoginOpen(true)}
              >
                Login
              </Button>
              <Button 
                className="bg-[#E2E8F0] text-[#111827] hover:bg-white transition-colors text-lg w-full"
              >
                Sign Up
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
