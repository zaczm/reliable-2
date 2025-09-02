import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Users, Clock, Award, TrendingUp } from 'lucide-react';

const BentoGrid = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const hoverVariants = {
    hover: { scale: 1.02, y: -5, transition: { duration: 0.3, ease: "easeOut" } }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-[#F2F1E4] via-[#FFFFF0] to-[#F2F1E4]">
      <div className="container">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-[#203B42] mb-6">
            Why Choose <span className="gradient-text">Reliable Recuperative</span>
          </h2>
          <p className="text-xl text-[#788B9C] max-w-3xl mx-auto">
            Experience the difference of compassionate, professional care in a modern healing environment
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]"
        >

          {/* Item 1: Stat */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="col-span-1 row-span-1 bg-gradient-to-br from-[#203B42] to-[#788B9C] text-white rounded-3xl p-6 relative overflow-hidden group cursor-pointer"
          >
            <motion.div variants={hoverVariants} className="h-full flex flex-col justify-between relative z-10">
              <div className="relative z-20 flex justify-between items-start">
                <Clock className="w-8 h-8 opacity-80" />
                <TrendingUp className="w-6 h-6 opacity-60" />
              </div>
              <div className="mt-4">
                <div className="text-3xl md:text-4xl font-montserrat font-bold mb-2">24/7</div>
                <div className="text-lg font-semibold mb-1">Professional Care</div>
                <div className="text-sm opacity-80">Round-the-clock monitoring and support</div>
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10 z-0">
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full border-2 border-current"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full border border-current"></div>
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                style={{ backdropFilter: 'blur(1px)' }}
              />
            </motion.div>

            {/* Floating element */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full"
              animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Item 2: Feature */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="col-span-2 row-span-1 bg-gradient-to-br from-[#D89D66] to-[#99A48E] text-white rounded-3xl p-6 relative overflow-hidden group cursor-pointer"
          >
            <motion.div variants={hoverVariants} className="h-full flex flex-col justify-between relative z-10">
              <Heart className="w-8 h-8 relative z-20" />
              <div className="mt-4 relative z-20">
                <h3 className="text-2xl font-montserrat font-bold mb-3">Compassionate Care</h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  We provide comfort, dignity, and personalized care in a safe environment where healing feels like home.
                </p>
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10 z-0">
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full border-2 border-current"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full border border-current"></div>
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                style={{ backdropFilter: 'blur(1px)' }}
              />
            </motion.div>
          </motion.div>

          {/* Item 3: Image */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="col-span-1 row-span-2 rounded-3xl relative overflow-hidden group cursor-pointer"
          >
            <motion.div variants={hoverVariants} className="h-full flex flex-col justify-between relative z-10">
              <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(/assets/modern_wellness_center_new_1.jpg)` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <div className="relative z-20 mt-auto p-6">
                <h3 className="text-xl font-montserrat font-bold mb-2 text-white">Modern Facilities</h3>
                <p className="text-sm text-white/90">State-of-the-art wellness centers designed for recovery</p>
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                style={{ backdropFilter: 'blur(1px)' }}
              />
            </motion.div>
          </motion.div>

          {/* Item 4: Stat */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="col-span-1 row-span-1 bg-gradient-to-br from-[#99A48E] to-[#788B9C] text-white rounded-3xl p-6 relative overflow-hidden group cursor-pointer"
          >
            <motion.div variants={hoverVariants} className="h-full flex flex-col justify-between relative z-10">
              <div className="relative z-20 flex justify-start items-center gap-2">
                <Award className="w-8 h-8 opacity-80" />
              </div>
              <div className="mt-4">
                <div className="text-3xl md:text-4xl font-montserrat font-bold mb-2">100%</div>
                <div className="text-lg font-semibold mb-1">Patient Satisfaction</div>
                <div className="text-sm opacity-80">Dedicated to excellence in care</div>
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10 z-0">
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full border-2 border-current"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full border border-current"></div>
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                style={{ backdropFilter: 'blur(1px)' }}
              />
            </motion.div>
          </motion.div>

          {/* Item 5: Service */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="col-span-2 row-span-1 bg-gradient-to-br from-[#788B9C] to-[#203B42] text-white rounded-3xl p-6 relative overflow-hidden group cursor-pointer"
          >
            <motion.div variants={hoverVariants} className="h-full flex flex-col justify-between relative z-10">
              <Shield className="w-8 h-8 relative z-20" />
              <div className="mt-4 relative z-20">
                <h3 className="text-xl font-montserrat font-bold mb-4">Three Core Services</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-sm"><div className="w-2 h-2 bg-current rounded-full mr-3 opacity-80"></div>Recuperative Care</div>
                  <div className="flex items-center text-sm"><div className="w-2 h-2 bg-current rounded-full mr-3 opacity-80"></div>Wound Care</div>
                  <div className="flex items-center text-sm"><div className="w-2 h-2 bg-current rounded-full mr-3 opacity-80"></div>Medical Respite</div>
                </div>
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                style={{ backdropFilter: 'blur(1px)' }}
              />
            </motion.div>
          </motion.div>

          {/* Item 6: Testimonial */}
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="col-span-1 row-span-1 bg-gradient-to-br from-[#FFFFF0] to-[#F2F1E4] text-[#203B42] rounded-3xl p-6 relative overflow-hidden group cursor-pointer"
          >
            <motion.div variants={hoverVariants} className="h-full flex flex-col justify-between relative z-10">
              <Users className="w-8 h-8 relative z-20" />
              <div className="mt-4 relative z-20">
                <h3 className="text-lg font-montserrat font-bold mb-3">Patient Stories</h3>
                <blockquote className="text-sm italic mb-2 opacity-90">"The care I received was exceptional. The staff made me feel like family."</blockquote>
                <cite className="text-xs opacity-70">— Sarah M.</cite>
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                style={{ backdropFilter: 'blur(1px)' }}
              />
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;
