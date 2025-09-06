// About.js
import React from 'react';
import { Heart, Shield, Users, Target, Eye, Award } from 'lucide-react';
import landscapeImage from '../assets/path_recovery.jpg';

const Card = ({ icon: Icon, title, description, bgGradient, textColor = 'text-white' }) => (
  <div className={`p-6 rounded-xl shadow-lg flex flex-col items-center text-center ${bgGradient} ${textColor}`}>
    <Icon size={40} className="mb-4" />
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="leading-relaxed">{description}</p>
  </div>
);

const About = () => {
  return (
    <div className="min-h-screen pt-28 bg-[#FFFFF0]">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${landscapeImage})` }}
      >
       
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold">About Us</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mt-4">
            Dedicated to compassionate care and supporting your journey to recovery
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-[#F2F1E4]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#203B42] mb-12">Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card
              icon={Eye}
              title="Our Vision"
              description="To create a community where every person can heal safely and with dignity."
              bgGradient="bg-gradient-to-br from-[#99A4E5] to-[#788B9C]"
            />
            <Card
              icon={Target}
              title="Our Mission"
              description="To provide compassionate recuperative care that nurtures physical recovery, emotional wellness, and personal growth."
              bgGradient="bg-gradient-to-br from-[#D89D66] to-[#203B42]"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-[#FFFFF0]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#203B42] mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              icon={Heart}
              title="Compassion"
              description="We approach every interaction with empathy, understanding, and genuine care."
              bgGradient="bg-gradient-to-br from-[#203B42] to-[#D89D66]"
            />
            <Card
              icon={Shield}
              title="Safety"
              description="We maintain the highest standards of safety and security for healing."
              bgGradient="bg-gradient-to-br from-[#788B9C] to-[#99A4E5]"
            />
            <Card
              icon={Users}
              title="Community"
              description="We foster belonging and connection, recognizing that healing happens in community."
              bgGradient="bg-gradient-to-br from-[#D89D66] to-[#F2F1E4]"
              textColor="text-[#203B42]"
            />
            <Card
              icon={Award}
              title="Excellence"
              description="We continuously improve our services and approach to care."
              bgGradient="bg-gradient-to-br from-[#99A4E5] to-[#203B42]"
            />
            <Card
              icon={Heart}
              title="Dignity"
              description="We honor the inherent worth of every person."
              bgGradient="bg-gradient-to-br from-[#D89D66] to-[#788B9C]"
            />
            <Card
              icon={Target}
              title="Hope"
              description="We believe in hope's power to transform lives and inspire recovery."
              bgGradient="bg-gradient-to-br from-[#203B42] to-[#99A4E5]"
            />
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-[#F2F1E4]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#203B42] mb-12">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              icon={Heart}
              title="Personalized Care Plans"
              description="Every individual receives a customized care plan tailored to their recovery goals."
              bgGradient="bg-gradient-to-br from-[#203B42] to-[#D89D66]"
            />
            <Card
              icon={Shield}
              title="Holistic Healing"
              description="We address physical, emotional, and spiritual well-being for complete recovery."
              bgGradient="bg-gradient-to-br from-[#D89D66] to-[#99A4E5]"
            />
            <Card
              icon={Users}
              title="Family-Centered Care"
              description="We involve families and loved ones, recognizing their role in healing."
              bgGradient="bg-gradient-to-br from-[#788B9C] to-[#203B42]"
            />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section
        className="section-padding bg-[#203B42] text-white text-center"
        style={{ backgroundImage: `url(${landscapeImage})`, backgroundAttachment: 'fixed' }}
      >
        <div className="container mx-auto px-4">
          <blockquote className="text-3xl md:text-4xl italic leading-relaxed mb-8">
            "We guide every individual toward resilience and hope."
          </blockquote>
          <p className="text-xl">- Reliable Recuperative Care</p>
        </div>
      </section>
    </div>
  );
};

export default About;
