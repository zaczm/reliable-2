import React from 'react';
import { motion } from 'framer-motion';
import { Home, Heart, Leaf } from 'lucide-react';

const Section1 = () => {
  return (
    <div className="min-h-screen bg-[#203B42] text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white" style={{ backgroundColor: '#203B42', opacity: 0.9 }}>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#F2F1E4]">What Defines a Recovery Haven?</h1>
          <p className="text-lg md:text-xl mb-2 text-[#D89D66]">
            Recovery Haven offers a sanctuary for healing, focusing on personalized care and a renewed sense of purpose for each individual.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="pb-32 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-[#D89D66] to-[#D89D66] text-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform duration-300"
            >
              <Home className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-semibold mb-2"> Safe Recovery and Restitution</h3>
              <p>
                A secure, residence designed to aid recovery with comfort and tailored support for all residents.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-[#99A4E5] to-[#788B9C] text-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform duration-300"
            >
              <Heart className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Comprehensive Healing</h3>
              <p>
                We provide a full spectrum of care, including therapy, nutrition, and emotional support to foster well-being.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-[#D89D66] to-[#F2F1E4] text-[#203B42] p-8 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform duration-300"
            >
              <Leaf className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Path to Independence</h3>
              <p>
                Guiding individuals from recovery to self-reliance with resources and ongoing assistance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Healing Message */}
      <section className="py-8 bg-[#D89D66] text-center">
        <p className="text-white text-lg md:text-xl mx-auto max-w-2xl">
          Recovery Haven creates a supportive atmosphere, helping individuals rebuild their strength and confidence for a healthier future.
        </p>
      </section>
    </div>
  );
};

export default Section1;