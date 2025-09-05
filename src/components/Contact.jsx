import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-accent" />,
      title: "Phone",
      info: "(555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <Mail className="h-6 w-6 text-accent" />,
      title: "Email",
      info: "hello@solidedge.com",
      link: "mailto:hello@solidedge.com"
    },
    {
      icon: <MapPin className="h-6 w-6 text-accent" />,
      title: "Workshop",
      info: "123 Craftsman Lane, Workshop District",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-b from-gray-900 to-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-rubik font-medium text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in-up">
              Get In <span className="text-accent">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-text/80 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your space? Let's discuss your project and bring your vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <div className="animate-fade-in-up">
              <h3 className="font-rubik font-medium text-2xl mb-8">Let's Start a Conversation</h3>
              <p className="text-lg text-text/80 mb-8 leading-relaxed">
                Whether you have a specific project in mind or just want to explore possibilities, 
                we'd love to hear from you. Reach out today for a free consultation.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-lg">{item.title}</h4>
                      {item.link ? (
                        <a 
                          href={item.link}
                          className="text-text/80 hover:text-accent transition-colors duration-300"
                        >
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-text/80">{item.info}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-gray-900/50 rounded-xl">
                <h4 className="font-rubik font-medium text-xl mb-3">Business Hours</h4>
                <div className="space-y-1 text-text/80">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-up">
              <div className="bg-gray-900/50 p-8 rounded-xl">
                {isSubmitted ? (
                  <div className="text-center py-8 animate-scale-in">
                    <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
                    <h3 className="font-rubik font-medium text-2xl mb-3">Thank You!</h3>
                    <p className="text-text/80">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="font-rubik font-medium text-2xl mb-6">Send Us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-accent focus:outline-none transition-colors duration-300"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-accent focus:outline-none transition-colors duration-300"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-accent focus:outline-none transition-colors duration-300"
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Project Details *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-accent focus:outline-none transition-colors duration-300 resize-none"
                          placeholder="Tell us about your project..."
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-accent hover:bg-accent/90 text-white py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                      >
                        Send Message
                        <Send className="h-5 w-5" />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;