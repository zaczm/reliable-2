// Services.js
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, FileText, Users, ClipboardCheck, Home } from 'lucide-react';
import landscapeImage from '../assets/path_recovery.jpg';

const Card = ({ icon: Icon, title, description, bgGradient, textColor = 'text-white' }) => (
  <div className={`p-6 rounded-xl shadow-lg flex flex-col items-center text-center ${bgGradient} ${textColor}`}>
    <Icon size={40} className="mb-4" />
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="leading-relaxed">{description}</p>
  </div>
);

const Services = () => {
  return (
    <div className="min-h-screen  bg-[#FFFFF0]">
      {/* Hero Section */}
      <section
        className="relative h-96 md:h-[500px] flex items-center justify-center bg-cover"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1454982523318-4b6396f39d3a?q=100&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
      >\

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70"></div>
       
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold">Admission and Referral</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mt-4">
            Guiding you through a seamless and supportive admission process
          </p>
        </div>
      </section>

      {/* Admission Process Section */}
      <section className="section-padding bg-[#F2F1E4]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#203B42] mb-12">
            Our Admission Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              icon={FileText}
              title="1. Initial Inquiry"
              description="Contact us by phone or through our referral form to discuss patient needs and eligibility."
              bgGradient="bg-gradient-to-br from-[#203B42] to-[#D89D66]"
            />
            <Card
              icon={ClipboardCheck}
              title="2. Assessment"
              description="Our team conducts a comprehensive assessment to determine the appropriate level of care."
              bgGradient="bg-gradient-to-br from-[#D89D66] to-[#99A4E5]"
            />
            <Card
              icon={Users}
              title="3. Admission Planning"
              description="We work with you to finalize admission details, including care plans and financial arrangements."
              bgGradient="bg-gradient-to-br from-[#788B9C] to-[#203B42]"
            />
            <Card
              icon={Home}
              title="4. Welcome to Healing Path"
              description="Upon admission, patients are welcomed into our supportive and healing environment."
              bgGradient="bg-gradient-to-br from-[#99A4E5] to-[#D89D66]"
            />
          </div>
        </div>
      </section>

      {/* Referral Information Section */}
      <section className="section-padding bg-[#FFFFF0]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#203B42] mb-12">
            Referral Information
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <Card
              icon={Users}
              title="Who Can Refer?"
              description="Hospitals, physicians, social workers, community organizations, or family members with patient consent."
              bgGradient="bg-gradient-to-br from-[#203B42] to-[#99A4E5]"
            />
            <Card
              icon={ArrowRight}
              title="How to Make a Referral"
              description="Fill out our online referral form or contact our admissions team directly. We guide you through every step."
              bgGradient="bg-gradient-to-br from-[#D89D66] to-[#788B9C]"
            />
          </div>
          <div className="text-center mt-8">
            <Link
              to="/referral"
              className="inline-flex items-center space-x-2 bg-[#4CAF50] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#45a049] transition-colors duration-300"
            >
              <span>Go to Referral Form</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact for Admission */}
      <section className="section-padding bg-[#203B42] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Discuss Admission?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our compassionate admissions team is here to help. Contact us today to learn more and begin the admission process.
          </p>
          <a
            href="tel:612-394-5624"
            className="inline-flex items-center space-x-2 bg-[#D89D66] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#99A48E] transition-colors duration-300"
          >
            <Phone size={20} />
            <span>Call Us: 612-394-5624</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
