import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Shield, Users, Phone, Mail } from 'lucide-react';
import InteractiveHero from '../components/InteractiveHero';
import BentoGrid from '../components/BentoGrid';
import { StatsSection } from '../components/AnimatedCounter';
import CreativeCard from '../components/CreativeCard';
import FloatingElements from '../components/FloatingElements';
import ParallaxSection from '../components/ParallaxSection';
import MorphingShape from '../components/MorphingShape';
import CookieConsent from '../components/CookieConsent';
import hero2 from '../assets/modern_wellness_center_2.jpg'
import serene1 from '../assets/serene_landscape_1.jpeg'
import serene2 from '../assets/serene_landscape_2.jpg'

const Home = () => {
  const services = [
    {
      icon: Heart,
      title: 'Recuperative Care',
      description: 'A supportive, home-like environment offering short-term recovery with dignity, comfort, and personalized compassionate care.',
      features: [
        '24/7 professional care and monitoring',
        'Comfortable, home-like accommodations',
        'Personalized care plans'
      ],
      color: 'from-[#203B42] to-[#788B9C]'
    },
    {         
      icon: Shield,
      title: 'Wound Care',
      description: 'Specialized support for recovery, providing gentle treatment and monitoring to promote safe, effective, and comfortable healing.',
      features: [
        'Advanced wound assessment and treatment',
        'Specialized dressing changes',
        'Infection prevention protocols'
      ],
      color: 'from-[#788B9C] to-[#99A48E]'
    },
    {
      icon: Users,
      title: 'Medical Respite',
      description: 'Short-term medical care in a supportive setting, ensuring rest, recovery, and dignity after hospital discharge.',
      features: [
        'Post-hospital discharge care',
        'Medical supervision and monitoring',
        'Recovery planning and coordination'
      ],
      color: 'from-[#99A48E] to-[#D89D66]'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassionate',
      description: 'Caring approach to healing'
    },
    {
      icon: Shield,
      title: 'Safe',
      description: 'Secure environment for recovery'
    },
    {
      icon: Users,
      title: 'Supportive',
      description: 'Community-focused care'
    }
  ];

  const whyChooseUs = [
    'Personalized care plans tailored to individual needs',
    'Home-like environment that promotes healing',
    'Experienced and compassionate care team',
    'Comprehensive support for physical and emotional recovery',
    'Dignity and respect at the center of everything we do'
  ];

  return (
    <div className="min-h-screen">
      <FloatingElements />
      <CookieConsent />
      
      {/* Interactive Hero Section */}
      <InteractiveHero />

      {/* About Section with Enhanced Design */}
      <section className="section-padding bg-gradient-to-br from-[#F2F1E4] via-white to-[#FFFFF0]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-[#203B42] mb-6">
                About <span className="gradient-text">Reliable Recuperative</span>
              </h2>
              <p className="text-lg text-[#788B9C] mb-8 leading-relaxed">
                Reliable Recuperative offers compassionate wellness care, supporting recovery with dignity, comfort, belonging, renewal, and hope. We provide comfort, dignity, and personalized care in a safe environment where healing feels like home.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="text-center group"
                    >
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-br from-[#D89D66] to-[#99A48E] rounded-2xl flex items-center justify-center mx-auto mb-4 hover-lift group-hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-montserrat font-semibold text-[#203B42] mb-2">
                        {value.title}
                      </h3>
                      <p className="text-[#788B9C] text-sm">
                        {value.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
              
              <motion.a 
                href="/about" 
                className="btn-primary hover-lift group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift">
                <img
                  src={hero2}
                  alt="Modern Wellness Center"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#203B42]/30 via-transparent to-transparent"></div>
                
                {/* Floating Info Cards */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
                >
                  <div className="text-2xl font-bold text-[#203B42]">15+</div>
                  <div className="text-sm text-[#788B9C]">Years Experience</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <BentoGrid />

      {/* Animated Stats Section */}
      <StatsSection />

      {/* Services Section */}
      <section id="services" className="section-padding bg-gradient-to-br from-white via-[#FFFFF0] to-[#F2F1E4]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-[#203B42] mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-[#788B9C] max-w-3xl mx-auto">
              At Reliable Recuperative, every service is designed to bring comfort, healing, and hope.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <CreativeCard
                key={index}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Vision & Mission Section */}
      <ParallaxSection
        backgroundImage={serene1}
        title="Our Vision & Mission"
        content={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 hover-lift"
            >
              <h3 className="text-2xl font-montserrat font-bold text-[#203B42] mb-4">
                Vision
              </h3>
              <p className="text-[#788B9C] leading-relaxed">
                Our vision is to create a community where every person has the chance to heal in safety and with dignity.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 hover-lift"
            >
              <h3 className="text-2xl font-montserrat font-bold text-[#203B42] mb-4">
                Mission
              </h3>
              <p className="text-[#788B9C] leading-relaxed">
                Our mission is to provide compassionate recuperative care that nurtures physical recovery, emotional wellness, and personal growth.
              </p>
            </motion.div>
          </div>
        }
      />

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gradient-to-br from-[#F2F1E4] via-white to-[#FFFFF0]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-lift">
                <img
                  src={serene2}
                  alt="Peaceful Environment"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#203B42]/30 via-transparent to-transparent"></div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-[#203B42] mb-6">
                Why Choose <span className="gradient-text">Us</span>
              </h2>
              
              <div className="space-y-4 mb-8">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3 group"
                  >
                    <motion.div 
                      className="w-3 h-3 bg-gradient-to-r from-[#D89D66] to-[#99A48E] rounded-full mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.2 }}
                    />
                    <p className="text-[#788B9C] leading-relaxed group-hover:text-[#203B42] transition-colors">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="section-padding bg-gradient-to-br from-[#203B42] to-[#788B9C] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url(/assets/modern_wellness_center_3.jpg)' }}
          ></div>
          {/* Animated Background Elements */}
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full blur-xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.6, 0.3, 0.6]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="container relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-montserrat font-bold mb-6"
          >
            Ready to Begin Your Recovery Journey?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8 max-w-3xl mx-auto"
          >
            We guide every individual toward resilience and hope. Contact us today to learn more about our compassionate care services.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a 
              href="/contact" 
              className="btn-secondary hover-lift group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              href="tel:(952) 217-6756" 
              className="btn-primary hover-lift group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (952) 217-6756
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

