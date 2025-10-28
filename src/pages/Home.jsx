import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Users, Home as HomeIcon, Stethoscope, UserCheck } from 'lucide-react';
import { Link } from "react-router-dom";


// Import images
import recuperativeCareImage from '../assets/recuperative_care.jpg';
import staffModelImage from '../assets/staff_model.jpg';
import pathRecoveryImage from '../assets/path_recovery.jpg';
import PathToRecovery from '@/components/PathToRecovery';

const Home = () => {
  const services = [
    {
      icon: Heart,
      title: 'Recuperative Care',
      description: 'A supportive, home-like environment offering recovery with dignity, comfort, and personalized compassionate care.',
      color: 'from-[#203B42] to-[#D89D66]'
    },
    {
      icon: Shield,
      title: 'Wound Care',
      description: 'Specialized support for recovery, providing gentle treatment and monitoring to promote safe, effective, and comfortable healing.',
      color: 'from-[#99A4E5] to-[#788B9C]'
    },
    {
      icon: Users,
      title: 'Medical Respite',
      description: 'Proper medical care in a supportive setting, ensuring rest, recovery, and dignity after hospital discharge.',
      color: 'from-[#D89D66] to-[#F2F1E4]'
    }
  ];

  // NEW: PDF Service Boxes
  const comprehensiveServices = [
    {
      icon: HomeIcon,
      title: 'Comfort & Facility Access',
      items: [
        '24/7 access to a comfortable bed in a safe environment',
        '24/7 access to bathrooms with shower, sink, and toilet',
        'Three nutritious meals daily, tailored to client needs',
        'Daily cleaning and sanitation for a healthy environment',
        'Secure storage for personal belongings',
        'Access to a facility telephone',
        'A trained staff member available on-site 24/7',
        'Daily in-person wellness checks by qualified providers'
      ],
      color: 'from-[#D4C5A0] to-[#E8DFC0]'
    },
        {
      icon: Stethoscope,
      title: 'Wellness & Nursing Care',
      items: [
        'Daily in-person wellness checks by qualified providers',
        'Basic nursing care, including monitoring physical health and pain level',
        'Wound care',
        'Medication support',
        'Patient education',
        'Immunization review and update'
      ],
      color: 'from-[#D4C5A0] to-[#E8DFC0]'
    },
    {
      icon: UserCheck,
      title: 'Care Coordination and Support Services',
      items: [
        'Care plan development and implementation',
        'Initial assessment of medical, behavioral, and social needs',
        'Support and referral assistance for legal, housing, and transportation needs',
        'Support and referral assistance for health care benefits and other eligible benefits',
        'Connection to community case management and social services'
      ],
      color: 'from-[#D4C5A0] to-[#E8DFC0]'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFFF0] text-gray-900">
      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center justify-center text-white"
        style={{ backgroundImage: `url("https://images.unsplash.com/photo-1501854140801-50d01698950b?q=100&w=1275&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-[#203B42] opacity-60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Healing, Growth, Transformation</h1>
          <p className="text-xl md:text-2xl mb-8">A Supportive Space for Your Recovery Journey</p>
          <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to="/referral"
          className="bg-red-700 text-white px-10 py-6 rounded-full text-xl font-semibold hover:bg-red-400 transition-colors duration-300 inline-block"
        >
          Referral Form
        </Link>
      </motion.div>
        </div>
      </section>

      {/* NEW: Reliable Recuperative Care — Facility & Support Services - PDF Version */}
      <section className="section-padding bg-[#203B42] text-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Reliable Recuperative Care — Facility & Support Services
          </h2>
          <p className="text-center text-lg md:text-xl mb-16 max-w-4xl mx-auto text-[#D4C5A0]">
            Reliable Recuperative Care provides a safe, supportive environment where clients recover with 
            dignity through 24/7 care, nutritious meals, and coordinated wellness services. 
          </p>

          {/* Three Service Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {comprehensiveServices.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className={`bg-gradient-to-br ${service.color} text-[#5A2E2E] p-8 rounded-2xl shadow-xl`}
              >
                <div className="flex flex-col items-center mb-6">
                  <service.icon className="w-14 h-14 mb-4 text-[#5A2E2E]" />
                  <h3 className="text-2xl font-bold text-center">{service.title}</h3>
                </div>
                <ul className="space-y-3 text-left">
                  {service.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start">
                      <span className="text-[#5A2E2E] font-extrabold text-xl mr-3 mt-1">•</span>
                      <span className="text-base leading-relaxed font-medium text-[#3A1F1F]">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What is a Recuperative Care Facility */}
      <section className="section-padding bg-[#F2F1E4]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#203B42]"></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-br ${service.color} text-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform duration-300`}
              >
                <service.icon className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xl mt-12 text-[#203B42]">
            Reliable Recuperative offers compassionate care that supports your recovery journey with dignity, comfort, belonging, renewal, and hope.
          </p>
        </div>
      </section>

     {/* Staff Model */}
<section className="section-padding bg-[#FFFFF0]">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12 text-[#203B42]">Staff Model</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Nursing */}
      <div className="bg-gradient-to-br from-[#203B42] to-[#D89D66] text-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
        <Heart className="w-12 h-12 mb-4" />
        <h3 className="text-2xl font-semibold mb-4">NURSING</h3>
        <p>Our nurses provide professional assessments, individualized care plans, medication guidance, and connection to primary care and specialists.</p>
      </div>

      {/* Social Services */}
      <div className="bg-gradient-to-br from-[#99A4E5] to-[#788B9C] text-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
        <Shield className="w-12 h-12 mb-4" />
        <h3 className="text-2xl font-semibold mb-4">SOCIAL SERVICES</h3>
        <p>Social workers provide emotional support, housing navigation, discharge planning, and access to community resources.</p>
      </div>

      {/* Support */}
      <div className="bg-gradient-to-br from-[#D89D66] to-[#F2F1E4] text-[#203B42] p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
        <Users className="w-12 h-12 mb-4" />
        <h3 className="text-2xl font-semibold mb-4">SUPPORT</h3>
        <p>Guest Service Associates ensure comfort, activities, meals, and room readiness, while environmental staff maintain a clean, welcoming facility.</p>
      </div>
    </div>
  </div>
</section>


     <section>
      <PathToRecovery />
     </section>

      {/* Book a Bed / Intake Team */}
      <section className="section-padding my-20 md:mx-10 mx-2 bg-[#203B42] text-white text-center rounded-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Book A Bed & Connect With Our Intake Team</h2>
          <p className="text-xl mb-6">
            Start your recovery journey today. Our team is ready to guide you through every step, ensuring your comfort, safety, and personalized care.
          </p>
          <p className="text-lg mb-8">
            📞 (612) 998-4449 | ✉️ info@reliablerecuperative.org
          </p>
          <motion.a 
            href="/contact" 
            className="bg-[#D89D66] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#99A4E5] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Intake Team
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Home;