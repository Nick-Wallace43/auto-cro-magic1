
import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-10 px-6 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <Logo />
          <p className="text-sm text-gray-500 mt-2">
            AI-powered conversion optimization for Shopify stores
          </p>
        </div>
        <div className="flex gap-8 text-sm text-gray-600">
          <a href="#" className="hover:text-primary">About</a>
          <a href="#" className="hover:text-primary">Pricing</a>
          <a href="#" className="hover:text-primary">Blog</a>
          <a href="#" className="hover:text-primary">Contact</a>
        </div>
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} AutoCRO. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
