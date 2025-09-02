import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

const AnimatedCounter = ({ 
  end, 
  duration = 2, 
  prefix = '', 
  suffix = '', 
  decimals = 0,
  className = '',
  delay = 0
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { 
    damping: 60, 
    stiffness: 100,
    duration: duration * 1000
  });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        motionValue.set(end);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, [isInView, end, motionValue, delay]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(latest);
    });

    return unsubscribe;
  }, [springValue]);

  const formatValue = (value) => {
    if (decimals > 0) {
      return value.toFixed(decimals);
    }
    return Math.round(value);
  };

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ 
        duration: 0.6, 
        delay: delay,
        ease: "easeOut" 
      }}
    >
      {prefix}{formatValue(displayValue)}{suffix}
    </motion.span>
  );
};

const StatsSection = () => {
  const stats = [
    {
      number: 24,
      suffix: '/7',
      label: 'Professional Care',
      description: 'Round-the-clock monitoring and support for your recovery journey',
      color: 'from-[#203B42] to-[#788B9C]',
      delay: 0
    },
    {
      number: 100,
      suffix: '%',
      label: 'Patient Satisfaction',
      description: 'Dedicated to excellence in compassionate care and healing',
      color: 'from-[#D89D66] to-[#99A48E]',
      delay: 0.2
    },
    {
      number: 15,
      suffix: '+',
      label: 'Years Experience',
      description: 'Trusted expertise in recuperative and medical respite care',
      color: 'from-[#99A48E] to-[#788B9C]',
      delay: 0.4
    },
    {
      number: 500,
      suffix: '+',
      label: 'Lives Transformed',
      description: 'Helping individuals heal with dignity, comfort, and hope',
      color: 'from-[#788B9C] to-[#203B42]',
      delay: 0.6
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-[#F2F1E4] via-white to-[#FFFFF0] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-[#D89D66]/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-[#99A48E]/10 rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-[#203B42] mb-6">
            Trusted by <span className="gradient-text">Hundreds</span> of Patients
          </h2>
          <p className="text-xl text-[#788B9C] max-w-3xl mx-auto">
            Our commitment to excellence is reflected in every aspect of our care
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.8, 
                delay: stat.delay,
                ease: "easeOut" 
              }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`bg-gradient-to-br ${stat.color} rounded-3xl p-8 text-white relative overflow-hidden group cursor-pointer`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-16 h-16 rounded-full border-2 border-white"></div>
                <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full border border-white"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-white/30"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-montserrat font-bold mb-4">
                  <AnimatedCounter
                    end={stat.number}
                    suffix={stat.suffix}
                    duration={2}
                    delay={stat.delay + 0.5}
                  />
                </div>
                
                <h3 className="text-xl font-montserrat font-semibold mb-3">
                  {stat.label}
                </h3>
                
                <p className="text-sm opacity-90 leading-relaxed">
                  {stat.description}
                </p>
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100"
                style={{ backdropFilter: 'blur(1px)' }}
                transition={{ duration: 0.3 }}
              />

              {/* Floating Element */}
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 bg-white/20 rounded-full"
                animate={{
                  y: [0, -8, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto border border-[#788B9C]/20">
            <h3 className="text-2xl font-montserrat font-bold text-[#203B42] mb-4">
              Every Number Tells a Story
            </h3>
            <p className="text-[#788B9C] leading-relaxed">
              Behind every statistic is a person whose life we've touched. Our commitment to excellence 
              isn't just measured in numbers—it's reflected in the smiles, the healing, and the hope 
              we help restore every single day.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { AnimatedCounter, StatsSection };

