
import React from 'react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 md:px-8 bg-white border-b border-gray-100 flex items-center justify-between">
      <Logo />
      <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">
        Login
      </Button>
    </nav>
  );
};

export default Navbar;
