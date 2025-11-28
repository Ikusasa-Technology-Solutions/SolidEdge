import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../Img/SE_LOGO.jpg';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary/95 backdrop-blur-sm border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">

          {/* Logo + Name */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-3 focus:outline-none"
          >
            <img 
              src={logo}
              alt="Solid Edge Logo"
              className="h-20 w-20 object-contain"
            />
        <span className="font-rubik font-medium text-2xl transition-colors duration-300">
  Solid <span className="text-red-500">Edge</span>
</span>

          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-accent transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-accent" />
            ) : (
              <Menu className="h-6 w-6 text-accent" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-primary/95 backdrop-blur-sm border-b border-gray-800">
            <ul className="py-4 px-4 space-y-4">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left py-2 hover:text-accent transition-colors duration-300 font-medium"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
