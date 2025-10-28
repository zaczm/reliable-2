import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sun, HeartPulse, Home, UserPlus, CheckCircle } from 'lucide-react';

const PathToRecovery = () => {
  const phases = [
    { icon: Sun, title: 'Week 1', description: ['Initial health evaluation', 'Medication review and support', 'Care if needed, including mental health screening'] },
    { icon: HeartPulse, title: 'Week 2', description: ['Link with Primary Care team', 'Develop a tailored Recovery Plan', 'Begin exploring long-term housing and benefit options'] },
    { icon: Home, title: 'Month 2', description: ['Review progress on health improvement', 'Healing support, adjusting therapy goals', 'Plan with medical input (in collaboration with healthcare providers)'] },
    { icon: UserPlus, title: 'Week 3', description: ['Execute Recovery Plan with client input', 'Support from social worker/case manager', 'Focus on therapy (e.g., physical, mental health)'] },
    { icon: CheckCircle, title: 'Week 4', description: ['Thorough health assessment if not done earlier', 'Evaluate daily living skills (ADLs) and support needed', 'Address housing or health barriers, connect to resources'] },
    { icon: Home, title: 'Discharge', description: ['Coordinate with supportive housing or programs', 'Connect the patient to ongoing medical care', 'Ensure access to follow-up post-discharge equipment'] },
  ];

  return (
    <section className="py-24 bg-[#203B42] text-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl text-center font-extrabold mb-10 text-[#F2F1E4] tracking-wide neon-text"
        >
          The Journey to Recovery
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8 text-lg text-[#D89D66] mx-auto"
        >
          At Reliable Recuperative, we deliver cutting-edge, person-centered medical respite care for those facing housing instability. Aligned with the 2025 Standards for Medical Respite Programs, we fuse advanced healthcare, housing solutions, and holistic healing.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-8 text-lg text-[#D89D66] mx-auto"
        >
          Our state-of-the-art facility bridges hospital care with stable living, using innovative strategies to empower community wellness and recovery.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(233, 69, 96, 0.5)' }}
              className="bg-[#FFFFF0] p-6 rounded-xl shadow-lg border border-[#E94560]/20 transition-all duration-300"
            >
              <phase.icon className="w-10 h-10 mb-4 text-[#203B42] animate-pulse" />
              <h3 className="text-xl font-semibold mb-3 text-[#203B42]">{phase.title}</h3>
              <ul className="list-none pl-0 text-gray-900 space-y-2 text-sm">
                {phase.description.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-[#203B42] rounded-full mr-2"></span>{item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <motion.div whileHover={{ scale: 1.1, backgroundColor: '#00D4FF' }}>
            <Link
              to="/referral"
              className="bg-[#D89D66] text-white px-8 py-4 rounded-full font-semibold text-lg cursor-pointer hover:shadow-neon transition-all duration-300"
            >
              Ignite Your Recovery
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PathToRecovery;