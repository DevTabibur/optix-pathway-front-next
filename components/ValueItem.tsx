import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ValueItemProps {
  icon: LucideIcon;
  iconColor: string;
  title: string;
  description: string;
  delay?: number;
}

export function ValueItem({ 
  icon: Icon, 
  iconColor,
  title, 
  description, 
  delay = 0 
}: ValueItemProps) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.5 }}
    >
      {/* Icon */}
      <motion.div 
        className="inline-flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-105"
        whileHover={{ scale: 1.05 }}
      >
        <Icon 
          className="w-9 h-9" 
          style={{ color: iconColor }}
          strokeWidth={1.5}
        />
      </motion.div>

      {/* Title */}
      <h4 className="text-lg md:text-xl font-semibold text-[#0F172A] mb-3">
        {title}
      </h4>

      {/* Description */}
      <p className="text-[#475569] leading-relaxed text-[15px]">
        {description}
      </p>
    </motion.div>
  );
}
