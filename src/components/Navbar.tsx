
import React from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Blog', href: '#blog' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-5 px-6 md:px-8 bg-[#0F172A]/95 backdrop-blur-sm border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-[#E2E8F0] hover:text-white transition-colors text-base font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>
        
        <Button 
          variant="outline" 
          className="hidden md:flex border-primary text-[#E2E8F0] hover:text-white hover:bg-primary/20 transition-colors text-base"
        >
          Login
        </Button>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          className="md:hidden text-[#E2E8F0] hover:text-white hover:bg-[#1E293B]/50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
