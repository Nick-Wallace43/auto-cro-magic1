
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSignup: () => void;
}

const LoginModal = ({ isOpen, onClose, onOpenSignup }: LoginModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Successful",
      description: "Welcome back to AutoCRO!",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#1E293B] text-[#E2E8F0] border-[#4A5568] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-[#E2E8F0]">Login to AutoCRO</DialogTitle>
          <DialogDescription className="text-lg text-[#E2E8F0]/70">
            Enter your credentials to access your account
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 py-4">
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
              placeholder="name@example.com"
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="password" className="text-lg text-[#E2E8F0]">Password</Label>
              <a href="#" className="text-primary hover:underline text-lg">Forgot?</a>
            </div>
            <Input 
              id="password" 
              name="password" 
              type="password" 
              value={formData.password} 
              onChange={handleChange} 
              required 
              className="text-lg bg-[#2D3748] border-[#4A5568] text-[#E2E8F0]" 
            />
          </div>
          
          <Button type="submit" className="w-full text-lg py-6 bg-primary hover:bg-primary/90">
            Login
          </Button>
        </form>
        
        <DialogFooter className="flex-col sm:flex-col gap-2">
          <div className="text-center w-full text-lg text-[#E2E8F0]">
            Don't have an account?{" "}
            <Button variant="link" onClick={() => { onClose(); onOpenSignup(); }} className="text-primary p-0 text-lg">
              Sign up
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
