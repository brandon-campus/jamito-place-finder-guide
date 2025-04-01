
import React from 'react';
import { MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-jamito-purple to-jamito-teal text-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <MapPin className="h-8 w-8 mr-2 text-jamito-coral" />
            <h1 className="text-2xl md:text-3xl font-bold">Jamito Place Finder</h1>
          </div>
          <div className="text-center md:text-right">
            <p className="text-lg italic">Encuentra el lugar perfecto para cualquier momento</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
