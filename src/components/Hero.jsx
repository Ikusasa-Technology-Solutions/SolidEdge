import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Custom Kitchen Cabinetry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in-up">
        <h1 className="font-rubik font-medium text-5xl md:text-7xl lg:text-8xl mb-6 text-text">
          Solid Edge
        </h1>
        <p className="font-poppins text-xl md:text-2xl lg:text-3xl mb-8 text-text/90">
          Crafting Excellence in Every Cut
        </p>
        <p className="font-poppins text-lg md:text-xl mb-12 text-text/80 max-w-2xl mx-auto leading-relaxed">
          Custom kitchen cabinetry and bespoke furniture designed to perfection. 
          Where traditional craftsmanship meets modern precision.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToPortfolio}
            className="group bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105"
          >
            View Our Work
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button
            onClick={scrollToContact}
            className="border-2 border-text hover:border-accent hover:text-accent px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Get A Quote
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 bg-gradient-to-b from-accent to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;