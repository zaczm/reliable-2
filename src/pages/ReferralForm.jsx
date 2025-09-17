import React, { useState } from "react";
import { motion } from "framer-motion";

const ReferralForm = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <section className="h-screen w-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full h-[calc(100%-80px)] relative"
        >
          {/* Loading Overlay */}
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-600"></div>
              <span className="ml-3 text-gray-700 font-medium">
                Loading form...
              </span>
            </div>
          )}

          {/* Iframe */}
          <iframe
            className="airtable-embed w-full h-full"
            src="https://airtable.com/embed/apppN8dJmcI7OtQsy/pag4y1SMqzErRskPt/form"
            frameBorder="0"
            style={{ background: "transparent", border: "1px solid #ccc" }}
            title="Referral Form"
            onLoad={() => setLoading(false)}
          />
        </motion.div>
      </section>
    </div>
  );
};

export default ReferralForm;
