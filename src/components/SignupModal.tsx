
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Checkbox } from '@/components/ui/checkbox';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLogin: () => void;
}

const SignupModal = ({ isOpen, onClose, onOpenLogin }: SignupModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Account Created",
      description: "Welcome to AutoCRO! Your account has been set up successfully.",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#1E293B] text-[#E2E8F0] border-[#4A5568] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-[#E2E8F0]">Create an Account</DialogTitle>
          <DialogDescription className="text-lg text-[#E2E8F0]/70">
            Sign up for AutoCRO and start optimizing your Shopify store
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-lg text-[#E2E8F0]">Full Name</Label>
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
            <Label htmlFor="password" className="text-lg text-[#E2E8F0]">Password</Label>
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
          
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-lg text-[#E2E8F0]">Confirm Password</Label>
            <Input 
              id="confirmPassword" 
              name="confirmPassword" 
              type="password" 
              value={formData.confirmPassword} 
              onChange={handleChange} 
              required 
              className="text-lg bg-[#2D3748] border-[#4A5568] text-[#E2E8F0]" 
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={agreedToTerms}
              onCheckedChange={(checked) => setAgreedToTerms(checked === true)}
              className="h-5 w-5 border-[#4A5568]"
            />
            <Label htmlFor="terms" className="text-lg text-[#E2E8F0]">
              I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
            </Label>
          </div>
          
          <Button 
            type="submit" 
            className="w-full text-lg py-6 bg-primary hover:bg-primary/90"
            disabled={!agreedToTerms}
          >
            Create Account
          </Button>
        </form>
        
        <DialogFooter className="flex-col sm:flex-col gap-2">
          <div className="text-center w-full text-lg text-[#E2E8F0]">
            Already have an account?{" "}
            <Button variant="link" onClick={() => { onClose(); onOpenLogin(); }} className="text-primary p-0 text-lg">
              Log in
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SignupModal;
