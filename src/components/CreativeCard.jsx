import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const CreativeCard = ({ 
  service,
  index = 0
}) => {
  const { icon: Icon, title, description, features, color } = service;
  const delay = index * 0.2;
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const colorClasses = {
    'from-[#203B42] to-[#788B9C]': "from-[#203B42]/20 to-[#788B9C]/5",
    'from-[#788B9C] to-[#99A48E]': "from-[#788B9C]/20 to-[#99A48E]/5",
    'from-[#99A48E] to-[#D89D66]': "from-[#99A48E]/20 to-[#D89D66]/5"
  };

  const iconColorClasses = {
    'from-[#203B42] to-[#788B9C]': "bg-gradient-to-br from-[#203B42] to-[#788B9C] text-white",
    'from-[#788B9C] to-[#99A48E]': "bg-gradient-to-br from-[#788B9C] to-[#99A48E] text-white", 
    'from-[#99A48E] to-[#D89D66]': "bg-gradient-to-br from-[#99A48E] to-[#D89D66] text-white"
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="relative group perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-[500px] transform-gpu"
      >
        {/* Main Card */}
        <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden transform-gpu">
          {/* Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[color]} opacity-50`} />
          
          {/* Floating Elements */}
          <motion.div
            animate={{
              y: isHovered ? -10 : 0,
              rotate: isHovered ? 5 : 0,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm"
          />
          
          <motion.div
            animate={{
              y: isHovered ? 5 : 0,
              rotate: isHovered ? -3 : 0,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm"
          />

          {/* Content Container */}
          <div className="relative z-10 p-8 h-full flex flex-col">
            {/* Icon Section */}
            <motion.div
              animate={{
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? 360 : 0,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-6"
            >
              <div className={`w-20 h-20 ${iconColorClasses[color]} rounded-2xl flex items-center justify-center shadow-lg`}>
                <Icon size={40} />
              </div>
            </motion.div>

            {/* Title */}
            <motion.h3
              animate={{
                x: isHovered ? 5 : 0,
              }}
              transition={{ duration: 0.4 }}
              className="text-3xl font-montserrat font-bold text-primary mb-4"
            >
              {title}
            </motion.h3>

            {/* Description */}
            <motion.p
              animate={{
                x: isHovered ? 5 : 0,
              }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="font-merriweather text-foreground leading-relaxed mb-6 flex-grow"
            >
              {description}
            </motion.p>

            {/* Features List */}
            <motion.div
              animate={{
                opacity: isHovered ? 1 : 0.7,
                y: isHovered ? 0 : 10,
              }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="space-y-2 mb-6"
            >
              {features.slice(0, 3).map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: delay + 0.1 * index }}
                  className="flex items-center space-x-2 text-sm"
                >
                  <div className={`w-2 h-2 ${iconColorClasses[color]} rounded-full`} />
                  <span className="font-merriweather text-foreground/80">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Learn More Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full py-3 px-6 ${iconColorClasses[color]} rounded-xl font-montserrat font-semibold transition-all duration-300 shadow-lg hover:shadow-xl`}
            >
              Learn More
            </motion.button>
          </div>

          {/* Hover Overlay */}
          <motion.div
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"
          />
        </div>

        {/* Shadow Card */}
        <motion.div
          animate={{
            z: isHovered ? -50 : -20,
            opacity: isHovered ? 0.3 : 0.1,
          }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-black rounded-3xl transform translate-z-[-20px]"
          style={{ transform: "translateZ(-20px)" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default CreativeCard;

