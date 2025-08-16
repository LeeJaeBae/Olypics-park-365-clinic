"use client";

import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ReactNode } from 'react';
import { useReducedMotion } from '@/hooks/useScrollAnimation';

// Animation variants
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// Stagger container for list animations
interface StaggerContainerProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const StaggerContainer = ({ 
  children, 
  delay = 0.1,
  className = ""
}: StaggerContainerProps) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: delay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

// Animated section wrapper
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: Variants;
  useInView?: boolean; // Option to use viewport-based animation
}

export const AnimatedSection = ({ 
  children, 
  className = "",
  animation = fadeInUp,
  useInView = false // Default to page mount animation
}: AnimatedSectionProps) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <section className={className}>{children}</section>;
  }

  // For viewport-based animation (sections below the fold)
  if (useInView) {
    return (
      <motion.section
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={animation}
      >
        {children}
      </motion.section>
    );
  }

  // For page mount animation (hero sections and initial content)
  return (
    <motion.section
      className={className}
      initial="hidden"
      animate="visible"
      variants={animation}
    >
      {children}
    </motion.section>
  );
};

// Medical Button with hover effects
interface MedicalButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const MedicalButton = ({ 
  children, 
  variant = 'primary',
  onClick,
  className = "",
  disabled = false
}: MedicalButtonProps) => {
  const baseClasses = `px-6 py-3 rounded-lg font-medium transition-all duration-300 ${className}`;
  const variantClasses = variant === 'primary' 
    ? "bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg disabled:opacity-50" 
    : "border-2 border-primary text-primary hover:bg-primary hover:text-white disabled:opacity-50";

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses}`}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onClick={onClick}
      disabled={disabled}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
};