import React from 'react';
import { motion } from 'framer-motion';

const MorphingShape = ({ 
  size = 200, 
  color = "accent", 
  className = "",
  animationDuration = 8 
}) => {
  const colorClasses = {
    primary: "fill-primary/20",
    secondary: "fill-secondary/20",
    accent: "fill-accent/20",
    muted: "fill-muted/20"
  };

  const paths = [
    "M60,-60C80,-40,100,-20,100,0C100,20,80,40,60,60C40,80,20,100,0,100C-20,100,-40,80,-60,60C-80,40,-100,20,-100,0C-100,-20,-80,-40,-60,-60C-40,-80,-20,-100,0,-100C20,-100,40,-80,60,-60Z",
    "M40,-60C60,-50,80,-30,90,-10C100,10,90,30,70,40C50,50,20,50,-10,50C-40,50,-70,40,-80,20C-90,0,-80,-20,-60,-30C-40,-40,-10,-50,20,-60C30,-65,35,-62.5,40,-60Z",
    "M50,-70C70,-60,90,-40,95,-15C100,10,90,35,70,50C50,65,20,70,-15,70C-50,70,-85,65,-95,45C-105,25,-90,-5,-70,-25C-50,-45,-25,-55,5,-65C20,-70,35,-75,50,-70Z",
    "M45,-65C65,-55,85,-35,90,-10C95,15,85,40,65,55C45,70,15,75,-20,75C-55,75,-90,70,-100,50C-110,30,-95,5,-75,-15C-55,-35,-30,-50,0,-60C15,-65,30,-70,45,-65Z"
  ];

  return (
    <div className={`absolute ${className}`} style={{ width: size, height: size }}>
      <svg
        width="100%"
        height="100%"
        viewBox="-100 -100 200 200"
        className="overflow-visible"
      >
        <motion.path
          animate={{
            d: paths,
          }}
          transition={{
            duration: animationDuration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={colorClasses[color]}
          style={{
            filter: "blur(1px)",
          }}
        />
        
        {/* Inner morphing shape */}
        <motion.path
          animate={{
            d: paths.map(path => path.replace(/\d+/g, (match) => Math.floor(parseInt(match) * 0.7))),
          }}
          transition={{
            duration: animationDuration * 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className={colorClasses[color].replace('/20', '/10')}
          style={{
            filter: "blur(2px)",
          }}
        />
      </svg>
    </div>
  );
};

export default MorphingShape;

