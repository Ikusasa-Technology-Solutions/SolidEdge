import React, { useState } from 'react';
import { Eye, Filter } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "Modern Kitchen Renovation",
      category: "Kitchens",
      image: "/kic-6 solid.jpg",
      description: "Contemporary white oak cabinets with integrated appliances"
    },
    {
      id: 2,
      title: "Rustic Dining Table",
      category: "Tables",
      image: "/T-1 solid.jpg",
      description: "Reclaimed wood farmhouse table with steel accents"
    },
    {
      id: 3,
      title: "Custom Entertainment Center",
      category: "TV Stands",
      image: "/tv1 solid.jpg",
      description: "Built-in media center with hidden cable management"
    },
    {
      id: 4,
      title: "Traditional Kitchen",
      category: "Kitchens",
      image: "/kic2 solid.jpg",
      description: "Classic raised panel cabinets in rich mahogany"
    },
    {
      id: 5,
      title: "Live Edge Conference Table",
      category: "Tables",
      image: "/t-2 solid.jpg",
      description: "Natural edge walnut table for corporate boardroom"
    },
    {
      id: 6,
      title: "Floating TV Console",
      category: "TV Stands",
      image: "/t-3 solid.jpg",
      description: "Minimalist wall-mounted console with LED lighting"
    },
    {
      id: 7,
      title: "Luxury Kitchen Island",
      category: "Kitchens",
      image: "/kic4 solid.jpg",
      description: "Large center island with waterfall countertop"
    },
    {
      id: 8,
      title: "Custom Coffee Table",
      category: "Tables",
      image: "/t-4 solid.jpg",
      description: "Mid-century modern inspired piece with storage"
    },
     {
      id: 9,
      title: "Luxury Kitchen Island",
      category: "Kitchens",
      image: "/kic-7 solid.jpg",
      description: "Large center island with waterfall countertop"
    },
    {
      id: 10,
      title: "Custom Coffee Table",
      category: "Tables",
      image: "/t-6 solid .jpg",
      description: "tables "
    },
     {
      id: 11,
      title: "Luxury Kitchen Island",
      category: "Kitchens",
      image: "/solid t-5.jpg",
      description: "Large center island with waterfall countertop"
    },
    {
      id: 12,
      title: "TV Stands",
      category: "TV Stands",
      image: "/tv6 solid.jpg",
      description: "Mid-century modern inspired piece "
    },
     {
      id: 13,
      title: "TV stands",
      category: "TV Stands",
      image: "/tv7 solid.jpg",
      description: "Modern inspired piece"
    },
    {
      id: 14,
      title: "TV stands ",
      category: "TV Stands",
      image: "/tv8 solid.jpg",
      description: "Modern inspired piece"
    },
    {
      id: 14,
      title: "Coffee Table",
      category: "Tables",
      image: "/t-3 solid.jpg",
      description: "Modern inspired piece"
    },
     {
      id: 15,
      title: "Luxury Kitchen Island",
      category: "Kitchens",
      image: "/kic3 solid.jpg",
      description: "Large center island with waterfall countertop"
    },
    {
      id: 16,
      title: " Coffee Table",
      category: "Tables",
      image: "/t-15 solid.jpg",
      description: "Modern inspired piece"
    },
    {
      id: 17,
      title: "TV Stand",
      category: "TV Stands",
      image: "/tv9 solid.jpg",
      description: "Mid-century modern inspired piece "
    },
     {
      id: 18,
      title: "Luxury Kitchen Island",
      category: "Kitchens",
      image: "/kic2 solid.jpg",
      description: "Large center island with waterfall countertop"
    },
    {
      id: 19,
      title: "Custom Coffee Table",
      category: "Tables",
      image: "/t-10 solid.jpg",
      description: "Mid-century modern inspired piece "
    },
    {
      id: 20,
      title: "TV Stands",
      category: "TV Stands",
      image: "/t-11 solid .jpg",
      description: "Mid-century modern inspired piece"
    },
    {
      id: 21,
      title: "Luxury Kitchen Island",
      category: "Kitchens",
      image: "/kic4 solid.jpg",
      description: "Large center island with waterfall countertop"
    },
    {
      id: 22,
      title: "Coffee Table",
      category: "Tables",
      image: "/t-12 solid.jpg",
      description: "Mid-century modern inspired piece"
    },
    {
      id: 23,
      title: "TV Stands ",
      category: "TV Stands",
      image: "/tv13 solid .jpg",
      description: "Mid-century modern inspired piece "
    }
    ,
    {
      id: 23,
      title: "TV Stand",
      category: "TV Stands",
      image: "/tv14 solid.jpg",
      description: "Mid-century modern inspired piece"
    }
    ,
    {
      id: 24,
      title: "TV Stands",
      category: "TV Stands",
      image: "/tv15 solid.jpg",
      description: "Mid-century modern inspired piece "
    },
    {
      id: 25,
      title: "TV Stand",
      category: "TV Stands",
      image: "/tv16 solid.jpg",
      description: "Mid-century modern inspired piece "
    }
    ,
    {
      id: 26,
      title: "TV Stands",
      category: "TV Stands",
      image: "/t-17 solid .jpg",
      description: "Mid-century modern inspired piece "
    }
    ,
    {
      id: 27,
      title: "TV Stands ",
      category: "TV Stands",
      image: "/t-18 solid.jpg",
      description: "Mid-century modern inspired piece with storage"
    }
    ,
    {
      id: 28,
      title: "Kitchen",
      category: "Kitchens",
      image: "/kic-5 solid.jpg",
      description: "Mid-century modern inspired piece"
    }
    ,
    {
      id: 29,
      title: "TV Stands",
      category: "TV Stands",
      image: "/t-18 solid.jpg",
      description: "Mid-century modern inspired piece "
    }
     ,
    {
      id: 30,
      title: "TV Stand",
      category: "TV Stands",
      image: "/solid t-5.jpg",
      description: "Mid-century modern inspired piece "
    }
     ,
    {
      id: 31,
      title: "Custom Coffee Table",
      category: "Kitchens",
      image: "/solid1.jpg",
      description: "Mid-century modern inspired piece "
    }
     ,
    {
      id: 32,
      title: "Custom Kitchen",
      category: "Kitchens",
      image: "/solid2.jpg",
      description: "Mid-century modern inspired piece "
    }
    ,
    {
      id: 33,
      title: "Kitchen",
      category: "Kitchens",
      image: "/solid3.jpg",
      description: "Mid-century modern inspired piece "
    }
    ,
    {
      id: 34,
      title: "Kitchens",
      category: "Kitchens",
      image: "/Solid4.jpg",
      description: "Mid-century modern inspired piece "
    }
    ,
    {
      id: 35,
      title: "Custom Coffee Table",
      category: "Tables",
      image: "/t-15 solid.jpg",
      description: "Mid-century modern inspired piece "
    }
    ,
    {
      id: 36,
      title: "Custom Coffee Table",
      category: "Tables",
      image: "/t-16 solid.jpg",
      description: "Mid-century modern inspired piece"
    }
    ,
    {
      id: 37,
      title: "Custom Coffee Table",
      category: "Tables",
      image: "/t-17 solid .jpg",
      description: "Mid-century modern inspired piece "
    }
    ,
    {
      id: 38,
      title: "Custom Coffee Table",
      category: "Tables",
      image: "/t-18 solid.jpg",
      description: "Mid-century modern inspired piece "
    },
    {
      id: 39,
      title: "Custom Coffee Table",
      category: "Tables",
      image: "/t-7 solid.jpg",
      description: "Mid-century modern inspired piece "
    },
    {
      id: 40,
      title: "Custom Coffee Table",
      category: "Tables",
      image: "/t-8 solid .jpg",
      description: "Mid-century modern inspired piece "
    },
    {
      id: 41,
      title: "Custom Coffee Table",
      category: "Tables",
      image: "/t-9 solid.jpg",
      description: "Mid-century modern inspired piece "
    }
    ,
    {
      id: 42,
      title: "Bed",
      category: "Headboards",
      image: "/bd.jpg",
      description: " modern inspired piece "
    }
    ,
    {
      id: 43,
      title: "Bed",
      category: "Headboards",
      image: "/bd2.jpg",
      description: "Mid-century modern inspired piece "
    }
    ,
    {
      id: 44,
      title: "Bed",
      category: "Headboards",
      image: "/bd3.jpg",
      description: "Modern inspired piece "
    }
    ,
    {
      id: 45,
      title: "Bed",
       category: "Headboards",
      image: "/bd4.jpg",
      description: "Modern inspired piece"
    }
    ,
    ,
    {
      id: 46,
      title: "Bed",
      category: "Headboards",
      image: "/bd5.jpg",
      description: "Mid-century modern inspired piece "
    }
    ,
    {
      id: 47,
      title: "Bed",
      category: "Headboards",
      image: "/bd6.jpg",
      description: "Modern inspired piece"
    }
    ,
    {
      id: 48,
      title: "Bed",
      category: "Headboards",
      image: "/bd7.jpg",
      description: "Modern inspired piece"
    }
    ,
    {
      id: 49,
      title: "Bed",
      category: "Headboards",
      image: "/bd8.jpg",
      description: "Mid-century modern inspired piece "
    }
    ,
    {
      id:50,
      title: "Storage",
      category: "Storage ",
      image: "/wd solid.jpg",
      description: "Mid-century modern inspired piece with storage"
    }
    ,
    {
      id:51,
      title: "Storage",
      category: "Storage ",
      image: "/wd2.jpg",
      description: "Mid-century modern inspired piece"
    }
    ,
    {
      id:52,
      title: "Storage",
      category: "Storage ",
      image: "/wd3.jpg",
      description: "Mid-century modern inspired piece with storage"
    }
    ,
    {
      id:53,
      title: "Storage",
      category: "Storage ",
      image: "/wd4.jpg",
      description: "Mid-century modern inspired piece with storage"
    }
 ,
    {
      id:54,
      title: "Storage",
      category: "Storage ",
      image: "/wd5.jpg",
      description: "Mid-century modern inspired piece with storage"
    }
     ,
    {
      id:55,
      title: "Storage",
      category: "Storage ",
      image: "/wd6.jpg",
      description: "Mid-century modern inspired piece with storage"
    }
     ,
    {
      id:56,
      title: "Storage",
      category: "Storage ",
      image: "/wd7.jpg",
      description: "Mid-century modern inspired piece with storage"
    }
     ,
    {
      id:57,
      title: "Storage",
      category: "Storage ",
      image: "/wd8.jpg",
      description: "Mid-century modern inspired piece with storage"
    }
     ,
    {
      id:54,
      title: "Storage",
      category: "Storage ",
      image: "/wd9.jpg",
      description: "Mid-century modern inspired piece with storage"
    }



  ];

  const categories = ['All', 'Kitchens', 'Tables', 'TV Stands',' Headboards' ,'Storage ']

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