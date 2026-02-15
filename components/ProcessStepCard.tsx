import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ProcessStepCardProps {
  stepNumber: string;
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function ProcessStepCard({ 
  stepNumber,
  icon: Icon, 
  title, 
  description, 
  delay = 0 
}: ProcessStepCardProps) {
  return (
    <motion.div
      className="group relative bg-white border border-[#E5E7EB] rounded-2xl p-8 transition-all duration-300 hover:border-[#1F4E6D] hover:-translate-y-1 hover:shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.5 }}
      role="article"
    >
      {/* Step Number Badge */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-[#1F4E6D] rounded-full flex items-center justify-center shadow-md z-10 transition-transform duration-300 group-hover:scale-110">
        <span className="text-white font-bold text-sm">
          {stepNumber}
        </span>
      </div>

      {/* Content */}
      <div className="pt-6">
        {/* Icon Container */}
        <motion.div 
          className="relative w-12 h-12 bg-[#F8FAFC] rounded-[12px] flex items-center justify-center mb-5 mx-auto transition-all duration-300 group-hover:scale-110"
        >
          <Icon className="w-6 h-6 text-[#1F4E6D] transition-transform duration-300" />
          {/* Decorative background */}
          <div className="absolute inset-0 rounded-[12px] bg-gradient-to-br from-[#1F4E6D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-[#0F172A] mb-3 text-center">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#475569] leading-relaxed text-sm md:text-base text-center">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
