import React from 'react';
import cover from '../assets/backAbout.jpg';

const Header = () => {
 
    
  return (
    
    <div 
      className="relative flex justify-center items-center h-[80vh] bg-fixed   bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>      
    </div>
  );
};

export default Header;