import React, { useState, useEffect } from 'react';
import { Menu, X, AirbnbIcon, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-blue-900">Piarco Guest House</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-800 hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-800 hover:text-blue-600 transition-colors">About</a>
            <a href="#rooms" className="text-gray-800 hover:text-blue-600 transition-colors">Rooms</a>
            <a href="#contact" className="text-gray-800 hover:text-blue-600 transition-colors">Contact</a>
            
            <div className="flex items-center space-x-4">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 transition-colors">
                <MessageCircle size={24} />
              </a>
              <a href="https://airbnb.com" target="_blank" rel="noopener noreferrer"
                className="text-red-500 hover:text-red-600 transition-colors">
                <AirbnbIcon size={24} />
              </a>
            </div>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-gray-800 hover:text-blue-600">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-800 hover:text-blue-600">About</a>
            <a href="#rooms" className="block px-3 py-2 text-gray-800 hover:text-blue-600">Rooms</a>
            <a href="#contact" className="block px-3 py-2 text-gray-800 hover:text-blue-600">Contact</a>
            
            <div className="flex space-x-4 px-3 py-2">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700">
                <MessageCircle size={24} />
              </a>
              <a href="https://airbnb.com" target="_blank" rel="noopener noreferrer"
                className="text-red-500 hover:text-red-600">
                <AirbnbIcon size={24} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;