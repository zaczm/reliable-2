import React from 'react';
import { motion } from 'framer-motion';

const ReferralForm = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="h-screen w-screen">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full h-[calc(100%-80px)]"
        >
          <iframe
            src="https://airtable-form-pg9k.vercel.app/"
            title="Referral Form"
            className="w-full h-full border-0"
            style={{ border: 'none' }}
          ></iframe>
        </motion.div>
      </section>
    </div>
  );
};

export default ReferralForm;