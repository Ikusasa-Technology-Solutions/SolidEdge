import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "20+ Years Experience",
      description: "Decades of craftsmanship and attention to detail"
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Custom Solutions",
      description: "Every piece designed to your unique specifications"
    },
    {
      icon: <Clock className="h-8 w-8 text-accent" />,
      title: "Timely Delivery",
      description: "Professional project management and on-time completion"
    },
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: "Passion for Quality",
      description: "Each project is a testament to our commitment to excellence"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-rubik font-medium text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in-up">
              About <span className="text-accent">Solid Edge</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-fade-in-up">
              <h3 className="font-rubik font-medium text-2xl md:text-3xl mb-6">
                Where Tradition Meets Innovation
              </h3>
              <p className="text-lg leading-relaxed mb-6 text-text/90">
                Founded on the principles of exceptional craftsmanship and unwavering attention to detail, 
                Solid Edge has been transforming homes with custom woodwork for over two decades. Our passion 
                for creating beautiful, functional pieces drives everything we do.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-text/90">
                From concept to completion, we work closely with our clients to bring their vision to life. 
                Every project is unique, and we take pride in delivering solutions that exceed expectations 
                while standing the test of time.
              </p>
              <p className="text-lg leading-relaxed text-text/90">
                Our workshop combines traditional woodworking techniques with modern precision tools, 
                ensuring each piece meets our exacting standards of quality and durability.
              </p>
            </div>

            <div className="animate-fade-in">
              <img
                src="/tv20 solid.jpg"
                alt="Craftsman at work"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg border border-gray-800 hover:border-accent/50 transition-all duration-300 hover:scale-105 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="font-rubik font-medium text-xl mb-3">{feature.title}</h4>
                <p className="text-text/80 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;