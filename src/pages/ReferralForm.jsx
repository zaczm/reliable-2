import React, { useState } from "react";
import { motion } from "framer-motion";

const ReferralForm = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 flex items-center justify-center">
      <section className="flex items-center justify-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-6 relative"
        >
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Patient Referral Submission
          </h1>

          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 rounded-2xl z-10">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
            </div>
          )}

          <iframe
            src="https://docs.google.com/forms/d/14Tpu9dSeHoJpDQHAvtHMNyuBM0Jbl1qUDUJ0QQjEHWM/viewform?embedded=true"
            width="100%"
            height="1200"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="rounded-lg"
            onLoad={() => setLoading(false)}
          >
            Loading…
          </iframe>
        </motion.div>
      </section>
    </div>
  );
};

export default ReferralForm;
