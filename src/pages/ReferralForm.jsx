import React from 'react';
import { motion } from 'framer-motion';

const ReferralForm = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-100">
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#203B42]"
          >
            Referral Form
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-8"
          >
            <p className="text-lg text-gray-700 mb-4">
              Please complete the referral form below. Our team will review and contact you shortly.
            </p>

            <form className="space-y-6">
              {/* Patient Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Patient Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#D89D66]" required />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Date of Birth</label>
                  <input type="date" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#D89D66]" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Patient Gender</label>
                  <select className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#D89D66]" required>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Phone Number</label>
                  <input type="tel" placeholder="(123) 456-7890" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#D89D66]" required />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">Address</label>
                <input type="text" placeholder="123 Healing Path, Minneapolis, MN" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#D89D66]" required />
              </div>

              {/* Referrer Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Referrer's Name</label>
                  <input type="text" placeholder="Jane Smith" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#D89D66]" required />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Referrer's Email</label>
                  <input type="email" placeholder="jane.smith@example.com" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#D89D66]" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Referrer's Phone</label>
                  <input type="tel" placeholder="(123) 456-7890" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#D89D66]" required />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Relationship to Patient</label>
                  <input type="text" placeholder="Physician / Social Worker / Family" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#D89D66]" />
                </div>
              </div>

              {/* Medical Info */}
              <div>
                <label className="block text-gray-700 font-bold mb-2">Reason for Referral</label>
                <textarea rows="5" placeholder="Briefly describe why the patient needs recuperative care..." className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#D89D66]" required></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Primary Diagnosis</label>
                  <input type="text" placeholder="e.g., Pneumonia, Post-surgery recovery" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#D89D66]" />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Secondary Diagnosis</label>
                  <input type="text" placeholder="If any" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#D89D66]" />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">Special Considerations / Needs</label>
                <textarea rows="4" placeholder="Dietary restrictions, mobility, isolation precautions..." className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#D89D66]"></textarea>
              </div>

              {/* Insurance Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Insurance Provider</label>
                  <input type="text" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#D89D66]" />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Policy Number</label>
                  <input type="text" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#D89D66]" />
                </div>
              </div>

              <div className="flex items-center justify-center mt-6">
                <motion.button
                  type="submit"
                  className="bg-[#4CAF50] hover:bg-[#45a049] text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit Referral
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ReferralForm;
