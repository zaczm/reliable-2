import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import landscapeImage from '../assets/path_recovery.jpg';

const Card = ({ icon: Icon, title, details, link, description, bgGradient, textColor = 'text-white' }) => (
  <div className={`p-6 rounded-xl shadow-lg text-center flex flex-col items-center ${bgGradient} ${textColor}`}>
    <Icon size={32} className="mb-4" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <a href={link} className="block mb-2 hover:underline">{details}</a>
    <p className="text-sm">{description}</p>
  </div>
);

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "612-394-5624",
      link: "tel:612-394-5624",
      description: "Call us for immediate assistance",
      bgGradient: "bg-gradient-to-br from-[#203B42] to-[#D89D66]"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@hprecuperative.com",
      link: "mailto:info@hprecuperative.com",
      description: "Send us a message anytime",
      bgGradient: "bg-gradient-to-br from-[#D89D66] to-[#99A4E5]"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "123 Healing Path, Minneapolis, MN 55401",
      link: "#",
      description: "Visit us at our facility",
      bgGradient: "bg-gradient-to-br from-[#99A4E5] to-[#788B9C]"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "24/7 Care Available",
      link: "#",
      description: "We're here when you need us",
      bgGradient: "bg-gradient-to-br from-[#788B9C] to-[#203B42]"
    }
  ];

  return (
    <div className="min-h-screen pt-24 bg-[#FFFFF0]">
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center bg-cover"
        style={{ backgroundImage: `url(${landscapeImage})` }}
      >
       
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold">Get In Touch</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mt-4">
            We're here to help you begin your journey to recovery
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#203B42] mb-12">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
              >
                <Card {...info} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-[#F2F1E4]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#203B42] mb-6">Send Us a Message</h2>
              <p className="text-lg text-[#203B42] leading-relaxed mb-8">
                Fill out the form below and we'll get back to you as soon as possible. We're here to answer any questions you may have about our services.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <form className="space-y-6">
                <input type="text" placeholder="Name" className="w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-[#D89D66]" required />
                <input type="email" placeholder="Email" className="w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-[#D89D66]" required />
                <input type="text" placeholder="Subject" className="w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-[#D89D66]" />
                <textarea placeholder="Message" rows="5" className="w-full p-3 rounded border focus:outline-none focus:ring-2 focus:ring-[#D89D66]" required></textarea>
                <motion.button
                  type="submit"
                  className="bg-[#4CAF50] hover:bg-[#45a049] text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
