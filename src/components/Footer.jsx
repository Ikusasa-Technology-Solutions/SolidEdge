import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand Column */}
            <div className="md:col-span-2">
              <h3 className="font-rubik font-medium text-3xl mb-4">Solid Edge</h3>
              <p className="text-text/80 leading-relaxed mb-6">
                Crafting exceptional custom cabinetry and bespoke furniture with precision, 
                passion, and unwavering attention to detail for over two decades.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-rubik font-medium text-xl mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-text/80 hover:text-accent transition-colors duration-300"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-rubik font-medium text-xl mb-6">Services</h4>
              <ul className="space-y-3 text-text/80">
                <li>Custom Kitchen Cabinets</li>
                <li>Dining Tables</li>
                <li>TV Stands</li>
                <li>Bespoke Furniture</li>
                <li>Design Consultation</li>
                <li>Installation & Delivery</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-text/60 text-sm mb-4 md:mb-0">
              © 2025 Solid Edge Carpentry. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-text/60">
              <a href="#" className="hover:text-accent transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;