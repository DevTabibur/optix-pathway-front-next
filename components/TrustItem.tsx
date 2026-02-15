import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface TrustItemProps {
  icon: LucideIcon;
  iconColor: string;
  title: string;
  description: string;
  delay?: number;
}

export function TrustItem({ 
  icon: Icon, 
  iconColor, 
  title, 
  description, 
  delay = 0 
}: TrustItemProps) {
  return (
    <motion.div
      className="flex flex-col items-center md:items-start text-center md:text-left group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      {/* Icon Container */}
      <motion.div
        className="mb-4"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <div 
          className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center transition-all duration-300"
          style={{ 
            backgroundColor: `${iconColor}10`,
          }}
        >
          <Icon 
            className="w-7 h-7 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110" 
            style={{ color: iconColor }}
            strokeWidth={1.5}
          />
        </div>
      </motion.div>

      {/* Title */}
      <h3 className="text-lg md:text-xl font-semibold text-[#0F172A] mb-2 leading-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm md:text-base text-[#475569] leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
