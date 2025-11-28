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
    <section id="home" className="relative min-h-screen flex items-center justify-between overflow-hidden">
      {/* Left Side - Image */}
      <div className="w-full sm:w-1/2 h-full">
        <img
          src="https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Custom Kitchen Cabinetry"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Side - Welcome Text and Buttons */}
      <div className="w-full sm:w-1/2 flex flex-col items-center justify-center px-8 py-12 sm:py-0 text-center sm:text-left">
        <h1 className="font-rubik font-medium text-5xl md:text-6xl lg:text-3xl mb-6 text-text">
          Welcome to Solid Edge
        </h1>
        <p className="font-poppins text-lg md:text-2xl lg:text-3xl mb-8 text-text/90">
          Your vision, our craftsmanship. We build custom pieces that bring your ideas to life and turn your house into a home.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
          <button
            onClick={scrollToPortfolio}
            className="group bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105"
          >
            View Catalogue
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
