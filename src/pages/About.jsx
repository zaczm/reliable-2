import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Heart, Shield, Users, Target, Eye, Award } from 'lucide-react';
import aboutImage from '../assets/modern_wellness_center_2.jpg';
import teamImage from '../assets/modern_wellness_center_3.jpg';
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

const About = () => {
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
              About Us
            </h1>
            <p className="text-xl font-merriweather max-w-2xl mx-auto">
              Dedicated to providing compassionate care and supporting your journey to recovery
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary">
                  Our Story
                </h2>
                <p className="text-lg font-merriweather text-foreground leading-relaxed">
                  Reliable Recuperative was founded with a simple yet powerful vision: to create 
                  a space where healing feels like home. We understand that recovery is not just 
                  about physical healing—it's about restoring dignity, hope, and the human spirit.
                </p>
                <p className="text-lg font-merriweather text-foreground leading-relaxed">
                  Our approach combines medical expertise with genuine compassion, creating an 
                  environment where every individual feels valued, respected, and supported 
                  throughout their recovery journey.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-montserrat font-bold text-accent">100%</div>
                    <div className="text-sm font-merriweather text-muted-foreground">
                      Personalized Care
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-montserrat font-bold text-accent">24/7</div>
                    <div className="text-sm font-merriweather text-muted-foreground">
                      Support Available
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative">
                <img
                  src={aboutImage}
                  alt="Comfortable healing environment"
                  className="rounded-2xl shadow-2xl hover-lift"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-2xl opacity-20"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-6">
                Mission & Vision
              </h2>
              <p className="text-lg font-merriweather text-foreground max-w-2xl mx-auto leading-relaxed">
                Our guiding principles shape everything we do
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <Eye size={32} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-montserrat font-bold text-primary">
                    Our Vision
                  </h3>
                </div>
                <p className="text-lg font-merriweather text-foreground leading-relaxed">
                  Our vision is to create a community where every person has the chance to heal 
                  in safety and with dignity. We envision a world where recovery is supported by 
                  compassion, understanding, and unwavering hope.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <Target size={32} className="text-primary" />
                  </div>
                  <h3 className="text-3xl font-montserrat font-bold text-primary">
                    Our Mission
                  </h3>
                </div>
                <p className="text-lg font-merriweather text-foreground leading-relaxed">
                  Our mission is to provide compassionate recuperative care that nurtures physical 
                  recovery, emotional wellness, and personal growth. We are committed to treating 
                  every individual with dignity, respect, and genuine care.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-6">
                Our Core Values
              </h2>
              <p className="text-lg font-merriweather text-foreground max-w-2xl mx-auto leading-relaxed">
                These values guide our approach to care and define who we are
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <Heart size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-primary">
                  Compassion
                </h3>
                <p className="font-merriweather text-foreground leading-relaxed">
                  We approach every interaction with empathy, understanding, and genuine care 
                  for the human experience.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto">
                  <Shield size={40} className="text-primary" />
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-primary">
                  Safety
                </h3>
                <p className="font-merriweather text-foreground leading-relaxed">
                  We maintain the highest standards of safety and security, creating a protected 
                  environment for healing.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto">
                  <Users size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-primary">
                  Community
                </h3>
                <p className="font-merriweather text-foreground leading-relaxed">
                  We foster a sense of belonging and connection, recognizing that healing happens 
                  best in community.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto">
                  <Award size={40} className="text-primary" />
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-primary">
                  Excellence
                </h3>
                <p className="font-merriweather text-foreground leading-relaxed">
                  We strive for excellence in all aspects of care, continuously improving our 
                  services and approach.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <Heart size={40} className="text-white" />
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-primary">
                  Dignity
                </h3>
                <p className="font-merriweather text-foreground leading-relaxed">
                  We honor the inherent worth and dignity of every person, treating each 
                  individual with respect and honor.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto">
                  <Target size={40} className="text-primary" />
                </div>
                <h3 className="text-2xl font-montserrat font-bold text-primary">
                  Hope
                </h3>
                <p className="font-merriweather text-foreground leading-relaxed">
                  We believe in the power of hope to transform lives and inspire recovery, 
                  nurturing optimism in every interaction.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <img
                  src={teamImage}
                  alt="Our caring team environment"
                  className="rounded-2xl shadow-2xl hover-lift"
                />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary rounded-2xl opacity-20"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary">
                  Our Approach
                </h2>
                <p className="text-lg font-merriweather text-foreground leading-relaxed">
                  We believe that healing is a holistic process that encompasses physical, 
                  emotional, and spiritual well-being. Our approach is centered on creating 
                  a home-like environment where individuals feel safe, supported, and valued.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold text-primary mb-2">
                        Personalized Care Plans
                      </h4>
                      <p className="font-merriweather text-foreground">
                        Every individual receives a customized care plan tailored to their 
                        specific needs and recovery goals.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold text-primary mb-2">
                        Holistic Healing
                      </h4>
                      <p className="font-merriweather text-foreground">
                        We address not just physical recovery but also emotional and 
                        spiritual well-being for complete healing.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold text-primary mb-2">
                        Family-Centered Care
                      </h4>
                      <p className="font-merriweather text-foreground">
                        We involve families and loved ones in the recovery process, 
                        recognizing their important role in healing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section 
        className="section-padding parallax relative"
        style={{ backgroundImage: `url(${landscapeImage})` }}
      >
        <div className="absolute inset-0 gradient-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center text-white max-w-4xl mx-auto">
              <blockquote className="text-3xl md:text-4xl font-merriweather italic leading-relaxed mb-8">
                "We guide every individual toward resilience and hope."
              </blockquote>
              <p className="text-xl font-montserrat font-semibold">
                — Reliable Recuperative Team
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;

