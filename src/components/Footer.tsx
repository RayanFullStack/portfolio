import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">Rayan</h3>
            <p className="text-gray-400">Full-Stack Web Developer</p>
          </div>
          
          <div className="flex items-center justify-center text-gray-400 text-sm">
            <span>&copy; 2024 Rayan. Made with</span>
            <Heart className="mx-2 text-red-500" size={16} fill="currentColor" />
            <span>and lots of coffee ☕</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
