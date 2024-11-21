import React, { useState } from 'react';
import { FaUtensils } from 'react-icons/fa';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-amber-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FaUtensils className="text-2xl" />
          <span className="text-xl font-bold">Tasty Bites</span>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white-200 hover:text-white-600">Home</a>
              <a href="#menu" className="text-white-200 hover:text-white-600">Menu</a>
              <a href="#contact" className="text-white-200 hover:text-white-600">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white-900 hover:text-white-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-amber">
              <a
                href="#home"
                className="block px-3 py-2 text-white-900 hover:bg-amber-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#menu"
                className="block px-3 py-2 text-white-900 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-white-900 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
    </nav>
  );
};

export default Navbar;