import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, AirbnbIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Piarco Guest House</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <MapPin size={20} />
                123 Airport Road, Piarco, Trinidad
              </p>
              <p className="flex items-center gap-2">
                <Phone size={20} />
                <a href="tel:+18681234567">+1 (868) 123-4567</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={20} />
                <a href="mailto:info@piarcoguesthouse.com">
                  info@piarcoguesthouse.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-blue-400 transition-colors">
                  Rooms
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://airbnb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-400 transition-colors"
              >
                <AirbnbIcon size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Piarco Guest House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;