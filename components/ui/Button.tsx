import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'accent';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-3 rounded-app font-semibold transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-opacity-90 shadow-lg hover:shadow-xl",
    secondary: "bg-secondary text-primary hover:bg-gray-300",
    accent: "bg-accent text-white hover:bg-opacity-90 shadow-lg hover:shadow-xl", // Changed text to white for cleaner Gold look
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;