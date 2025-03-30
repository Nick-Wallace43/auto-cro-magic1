
import React from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] border-t border-[#334155] py-16 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-[#94A3B8] mt-4 max-w-xs">
              AutoCRO is built by CRO experts and AI builders. Our mission is to democratize conversion strategy.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-[#94A3B8] hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-[#94A3B8] hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-[#94A3B8] hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#94A3B8] hover:text-white transition-colors text-sm">Our Mission</a></li>
              <li><a href="#" className="text-[#94A3B8] hover:text-white transition-colors text-sm">Team</a></li>
              <li><a href="#" className="text-[#94A3B8] hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-[#94A3B8] hover:text-white transition-colors text-sm">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Pricing</h3>
            <p className="text-[#94A3B8] text-sm mb-2">Free tier available. Pro plan unlocks priority reports, benchmark scoring, and custom UX audits.</p>
            <a href="#" className="text-primary hover:text-primary/80 text-sm font-medium transition-colors">View pricing →</a>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Blog</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="group">
                  <h4 className="text-[#CBD5E1] group-hover:text-white transition-colors text-sm font-medium">Top 5 PDP Mistakes on Shopify</h4>
                  <p className="text-[#64748B] text-xs">June 12, 2023</p>
                </a>
              </li>
              <li>
                <a href="#" className="group">
                  <h4 className="text-[#CBD5E1] group-hover:text-white transition-colors text-sm font-medium">How AI Is Changing CRO Forever</h4>
                  <p className="text-[#64748B] text-xs">May 28, 2023</p>
                </a>
              </li>
              <li>
                <a href="#" className="group">
                  <h4 className="text-[#CBD5E1] group-hover:text-white transition-colors text-sm font-medium">The Psychology of High-Converting PDPs</h4>
                  <p className="text-[#64748B] text-xs">May 15, 2023</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#334155] flex flex-col md:flex-row justify-between items-center">
          <div className="text-[#64748B] text-sm">
            © {new Date().getFullYear()} AutoCRO. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0">
            <div className="flex items-center space-x-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="h-10 bg-[#1E293B] border-[#334155] text-white placeholder:text-[#64748B] focus:border-primary w-64"
              />
              <Button className="h-10 bg-primary hover:bg-primary/90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
