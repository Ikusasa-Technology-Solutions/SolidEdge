import React from 'react';
import { ChefHat, Sofa, Wrench, Truck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <ChefHat className="h-12 w-12 text-accent" />,
      title: "Custom Kitchen Cabinetry",
      description: "Transform your kitchen with handcrafted cabinets designed to maximize space and style. From traditional to contemporary, we create storage solutions that perfectly fit your lifestyle.",
      features: ["Custom measurements", "Premium wood selection", "Soft-close hardware", "Integrated lighting options"]
    },
    {
      icon: <Sofa className="h-12 w-12 text-accent" />,
      title: "Bespoke Furniture",
      description: "One-of-a-kind furniture pieces crafted to your exact specifications. From dining tables to entertainment centers, each piece is a unique work of art.",
      features: ["Dining tables & chairs", "TV stands & media centers", "Bookcases & shelving", "Custom storage solutions"]
    },
    {
      icon: <Wrench className="h-12 w-12 text-accent" />,
      title: "Design Consultation",
      description: "Work with our experienced designers to bring your vision to life. We'll help you choose materials, finishes, and configurations that suit your space and budget.",
      features: ["3D visualization", "Material selection", "Space planning", "Budget optimization"]
    },
    {
      icon: <Truck className="h-12 w-12 text-accent" />,
      title: "Delivery & Installation",
      description: "Professional delivery and installation services ensure your custom pieces are properly set up in your space. We handle everything from start to finish.",
      features: ["White-glove delivery", "Professional installation", "Final adjustments", "Care instructions"]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-b from-primary to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-rubik font-medium text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in-up">
              Our <span className="text-accent">Services</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
              From initial consultation to final installation, we provide comprehensive carpentry services 
              tailored to your unique needs and vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl border border-gray-800 hover:border-accent/50 transition-all duration-500 hover:scale-105 bg-gray-900/30 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {service.icon}
                </div>
                <h3 className="font-rubik font-medium text-2xl mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-text/80 leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-text/70">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;