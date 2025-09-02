import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import landscapeImage from '../assets/serene_landscape_2.jpg';

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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(952) 217-6756",
      link: "tel:+19522176756",
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@reliablerecuperative.com",
      link: "mailto:info@reliablerecuperative.com",
      description: "Send us a message anytime"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "6124739338",
      link: "#",
      description: "Visit us at our facility"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "24/7 Care Available",
      link: "#",
      description: "We're here when you need us"
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
              Contact Us
            </h1>
            <p className="text-xl font-merriweather max-w-2xl mx-auto">
              We're here to help you begin your journey to recovery
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-6">
                Get In Touch
              </h2>
              <p className="text-lg font-merriweather text-foreground max-w-2xl mx-auto leading-relaxed">
                We're available 24/7 to answer your questions and provide the support you need
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={info.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift text-center space-y-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                    <info.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-primary">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    <a
                      href={info.link}
                      className="block text-lg font-merriweather text-accent hover:text-primary transition-colors"
                    >
                      {info.details}
                    </a>
                    <p className="text-sm font-merriweather text-muted-foreground">
                      {info.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary">
                  Send Us a Message
                </h2>
                <p className="text-lg font-merriweather text-foreground leading-relaxed">
                  Fill out the form below and we'll get back to you as soon as possible. 
                  We're here to answer any questions you may have about our services.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-accent mt-1" />
                    <p className="font-merriweather text-foreground">
                      Quick response within 24 hours
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-accent mt-1" />
                    <p className="font-merriweather text-foreground">
                      Confidential and secure communication
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle size={20} className="text-accent mt-1" />
                    <p className="font-merriweather text-foreground">
                      Personalized consultation available
                    </p>
                  </div>
                </div>

                <div className="bg-accent/10 rounded-lg p-6">
                  <h3 className="font-montserrat font-semibold text-primary mb-3">
                    Emergency Contact
                  </h3>
                  <p className="font-merriweather text-foreground mb-4">
                    For urgent matters, please call us directly:
                  </p>
                  <a
                    href="tel:+19522176756"
                    className="inline-flex items-center space-x-2 btn-primary hover-lift"
                  >
                    <Phone size={20} />
                    <span>(952) 217-6756</span>
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6 py-12"
                  >
                    <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle size={40} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-montserrat font-bold text-primary">
                      Message Sent Successfully!
                    </h3>
                    <p className="font-merriweather text-foreground">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-montserrat font-semibold text-primary mb-2">
                          Name *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-montserrat font-semibold text-primary mb-2">
                          Phone
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-montserrat font-semibold text-primary mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-montserrat font-semibold text-primary mb-2">
                        Subject
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-montserrat font-semibold text-primary mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full"
                        placeholder="Please tell us how we can help you..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full btn-primary hover-lift inline-flex items-center justify-center space-x-2"
                    >
                      <Send size={20} />
                      <span>Send Message</span>
                    </Button>

                    <p className="text-xs font-merriweather text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="space-y-6">
                <h2 className="text-3xl font-montserrat font-bold text-primary">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="font-montserrat font-semibold text-primary mb-2">
                      What services do you provide?
                    </h3>
                    <p className="font-merriweather text-foreground text-sm">
                      We offer recuperative care, wound care, and medical respite services 
                      in a supportive, home-like environment.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="font-montserrat font-semibold text-primary mb-2">
                      How do I get started?
                    </h3>
                    <p className="font-merriweather text-foreground text-sm">
                      Contact us by phone or email to discuss your needs and begin the 
                      assessment process.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="font-montserrat font-semibold text-primary mb-2">
                      Do you accept insurance?
                    </h3>
                    <p className="font-merriweather text-foreground text-sm">
                      Please contact us to discuss insurance coverage and payment options 
                      for our services.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-3xl font-montserrat font-bold text-primary">
                  What to Expect
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mt-1">
                      <span className="text-sm font-montserrat font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-primary mb-2">
                        Initial Consultation
                      </h3>
                      <p className="font-merriweather text-foreground text-sm">
                        We'll discuss your needs and assess how our services can best support your recovery.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mt-1">
                      <span className="text-sm font-montserrat font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-primary mb-2">
                        Care Planning
                      </h3>
                      <p className="font-merriweather text-foreground text-sm">
                        We'll develop a personalized care plan tailored to your specific needs and goals.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mt-1">
                      <span className="text-sm font-montserrat font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-primary mb-2">
                        Ongoing Support
                      </h3>
                      <p className="font-merriweather text-foreground text-sm">
                        We provide continuous care and support throughout your recovery journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

