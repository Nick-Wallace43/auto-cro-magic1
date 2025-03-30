
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import LoginModal from '@/components/LoginModal';
import SignupModal from '@/components/SignupModal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navItems = [
    { label: 'Features', path: '/' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Blog', path: '/blog' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-[#111827] w-full px-6 md:px-8 py-4 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`px-4 py-2 rounded-md text-lg font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-primary'
                    : 'text-[#E2E8F0] hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="outline"
            className="text-lg py-6 border-primary text-primary hover:bg-primary/10"
            onClick={() => setIsLoginOpen(true)}
          >
            Login
          </Button>
          <Button 
            className="text-lg py-6 bg-primary hover:bg-primary/90 text-white"
            onClick={() => setIsSignupOpen(true)}
          >
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md text-[#E2E8F0] hover:text-primary focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#111827] border-b border-gray-800 z-50">
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`block px-3 py-3 rounded-md text-lg font-medium ${
                  isActive(item.path)
                    ? 'text-primary'
                    : 'text-[#E2E8F0] hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <Button 
                variant="outline"
                className="w-full justify-center text-lg py-6 border-primary text-primary hover:bg-primary/10"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsLoginOpen(true);
                }}
              >
                Login
              </Button>
              <Button 
                className="w-full justify-center text-lg py-6 bg-primary hover:bg-primary/90 text-white"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsSignupOpen(true);
                }}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Auth Modals */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onOpenSignup={() => setIsSignupOpen(true)} 
      />
      
      <SignupModal 
        isOpen={isSignupOpen} 
        onClose={() => setIsSignupOpen(false)} 
        onOpenLogin={() => setIsLoginOpen(true)} 
      />
    </nav>
  );
};

export default Navbar;
