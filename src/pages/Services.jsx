import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Heart, Shield, Users, Clock, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import serviceImage1 from '../assets/modern_wellness_center_1.jpg';
import serviceImage2 from '../assets/modern_wellness_center_2.jpg';
import serviceImage3 from '../assets/modern_wellness_center_3.jpg';
import landscapeImage from '../assets/serene_landscape_1.jpeg';

const AnimatedSection = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Recuperative Care",
      description: "A supportive, home-like environment offering short-term recovery with dignity, comfort, and personalized compassionate care.",
      features: [
        "24/7 professional care and monitoring",
        "Comfortable, home-like accommodations",
        "Personalized care plans",
        "Medication management",
        "Nutritious meals and dietary support",
        "Transportation coordination"
      ],
      image: serviceImage1,
      color: "primary"
    },
    {
      icon: Shield,
      title: "Wound Care",
      description: "Specialized support for recovery, providing gentle treatment and monitoring to promote safe, effective, and comfortable healing.",
      features: [
        "Advanced wound assessment and treatment",
        "Specialized dressing changes",
        "Infection prevention protocols",
        "Pain management strategies",
        "Healing progress monitoring",
        "Patient education and support"
      ],
      image: serviceImage2,
      color: "secondary"
    },
    {
      icon: Users,
      title: "Medical Respite",
      description: "Short-term medical care in a supportive setting, ensuring rest, recovery, and dignity after hospital discharge.",
      features: [
        "Post-hospital discharge care",
        "Medical supervision and monitoring",
        "Recovery planning and coordination",
        "Safe and comfortable environment",
        "Transition support services",
        "Family communication and updates"
      ],
      image: serviceImage3,
      color: "accent"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center"
        style={{ backgroundImage: `url(${landscapeImage})` }}
      >
        <div className="absolute inset-0 gradient-overlay"></div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-shadow">
              Our Services
            </h1>
            <p className="text-xl font-merriweather max-w-2xl mx-auto">
              Comprehensive care designed to bring comfort, healing, and hope
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-6">
                Compassionate Care Services
              </h2>
              <p className="text-lg font-merriweather text-foreground max-w-3xl mx-auto leading-relaxed">
                At Reliable Recuperative, every service is designed to bring comfort, healing, and hope. 
                We provide specialized care that addresses both physical recovery and emotional well-being.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-20">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.2}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-${service.color} rounded-full flex items-center justify-center`}>
                        <service.icon size={32} className={service.color === 'accent' ? 'text-primary' : 'text-white'} />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-primary">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg font-merriweather text-foreground leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="text-xl font-montserrat font-semibold text-primary">
                        What We Provide:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle size={16} className="text-accent mt-1 flex-shrink-0" />
                            <span className="text-sm font-merriweather text-foreground">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center space-x-2 btn-primary hover-lift"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={20} />
                    </Link>
                  </div>

                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <img
                      src={service.image}
                      alt={`${service.title} environment`}
                      className="rounded-2xl shadow-2xl hover-lift"
                    />
                    <div className={`absolute -bottom-6 -right-6 w-32 h-32 bg-${service.color} rounded-2xl opacity-20`}></div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-6">
                Our Care Process
              </h2>
              <p className="text-lg font-merriweather text-foreground max-w-2xl mx-auto leading-relaxed">
                A structured approach to ensure the best possible outcomes for every individual
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Assessment",
                description: "Comprehensive evaluation of individual needs and care requirements"
              },
              {
                step: "02",
                title: "Care Planning",
                description: "Development of personalized care plan tailored to specific goals"
              },
              {
                step: "03",
                title: "Implementation",
                description: "Delivery of compassionate care with continuous monitoring and support"
              },
              {
                step: "04",
                title: "Transition",
                description: "Smooth transition planning and ongoing support for continued recovery"
              }
            ].map((process, index) => (
              <AnimatedSection key={process.step} delay={index * 0.1}>
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-montserrat font-bold text-white">
                      {process.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-primary">
                    {process.title}
                  </h3>
                  <p className="font-merriweather text-foreground leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-6">
                Why Choose Our Services
              </h2>
              <p className="text-lg font-merriweather text-foreground max-w-2xl mx-auto leading-relaxed">
                Our commitment to excellence ensures the highest quality of care
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "24/7 Care",
                description: "Round-the-clock professional care and monitoring for peace of mind"
              },
              {
                icon: Heart,
                title: "Compassionate Staff",
                description: "Experienced and caring professionals dedicated to your recovery"
              },
              {
                icon: Shield,
                title: "Safe Environment",
                description: "Secure and comfortable facilities designed for healing and recovery"
              },
              {
                icon: Users,
                title: "Family Involvement",
                description: "We include families in the care process and maintain open communication"
              },
              {
                icon: CheckCircle,
                title: "Quality Assurance",
                description: "Continuous monitoring and improvement of our care standards"
              },
              {
                icon: Heart,
                title: "Holistic Approach",
                description: "Addressing physical, emotional, and spiritual aspects of recovery"
              }
            ].map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift text-center space-y-4">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                    <feature.icon size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-primary">
                    {feature.title}
                  </h3>
                  <p className="font-merriweather text-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold">
                Ready to Begin Your Recovery?
              </h2>
              <p className="text-xl font-merriweather leading-relaxed opacity-90">
                Contact us today to learn more about our services and how we can support 
                your journey to healing and recovery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="bg-accent text-primary px-8 py-4 rounded-lg font-montserrat font-semibold hover:bg-accent/90 transition-colors inline-flex items-center space-x-2 hover-lift"
                >
                  <span>Contact Us Today</span>
                  <ArrowRight size={20} />
                </Link>
                <a
                  href="tel:+19522176756"
                  className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg font-montserrat font-semibold hover:bg-primary-foreground hover:text-primary transition-colors inline-flex items-center space-x-2"
                >
                  <Phone size={20} />
                  <span>(952) 217-6756</span>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;

