
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div 
      className="flex items-center gap-1.5 font-bold text-xl cursor-pointer" 
      onClick={handleLogoClick}
    >
      <div className="bg-gradient-to-r from-primary to-secondary rounded-md p-1.5 text-white">
        Auto
      </div>
      <div className="text-white">
        CRO
      </div>
    </div>
  );
};

export default Logo;
