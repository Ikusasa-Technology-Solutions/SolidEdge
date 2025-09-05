import React, { useState } from 'react';
import { Eye, Filter } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Modern Kitchen Renovation",
      category: "Kitchens",
      image: "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Contemporary white oak cabinets with integrated appliances"
    },
    {
      id: 2,
      title: "Rustic Dining Table",
      category: "Tables",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Reclaimed wood farmhouse table with steel accents"
    },
    {
      id: 3,
      title: "Custom Entertainment Center",
      category: "TV Stands",
      image: "https://images.pexels.com/photos/6758773/pexels-photo-6758773.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Built-in media center with hidden cable management"
    },
    {
      id: 4,
      title: "Traditional Kitchen",
      category: "Kitchens",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Classic raised panel cabinets in rich mahogany"
    },
    {
      id: 5,
      title: "Live Edge Conference Table",
      category: "Tables",
      image: "https://images.pexels.com/photos/3315291/pexels-photo-3315291.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Natural edge walnut table for corporate boardroom"
    },
    {
      id: 6,
      title: "Floating TV Console",
      category: "TV Stands",
      image: "https://images.pexels.com/photos/6969831/pexels-photo-6969831.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Minimalist wall-mounted console with LED lighting"
    },
    {
      id: 7,
      title: "Luxury Kitchen Island",
      category: "Kitchens",
      image: "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Large center island with waterfall countertop"
    },
    {
      id: 8,
      title: "Custom Coffee Table",
      category: "Tables",
      image: "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Mid-century modern inspired piece with storage"
    }
  ];

  const categories = ['All', 'Kitchens', 'Tables', 'TV Stands'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-rubik font-medium text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in-up">
              Our <span className="text-accent">Portfolio</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
              Discover the artistry and precision in every piece we create. 
              Each project showcases our commitment to exceptional craftsmanship.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Filter className="h-5 w-5 text-accent mr-2 mt-1" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-accent text-white scale-105'
                    : 'border border-gray-700 hover:border-accent hover:text-accent hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl bg-gray-900 hover:scale-105 transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/80 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-6">
                    <Eye className="h-8 w-8 text-accent mx-auto mb-3" />
                    <h4 className="font-rubik font-medium text-xl mb-2">{project.title}</h4>
                    <p className="text-text/80">{project.description}</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/90 to-transparent">
                  <h4 className="font-rubik font-medium text-xl mb-1">{project.title}</h4>
                  <p className="text-accent text-sm font-medium">{project.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;