import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ServiceItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function ServiceItem({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0 
}: ServiceItemProps) {
  return (
    <motion.div
      className="group border-t border-[#E5E7EB] py-6"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="flex gap-4">
        {/* Icon */}
        <div className="flex-shrink-0 pt-1">
          <Icon 
            className="w-7 h-7 text-[#1F4E6D] transition-colors duration-300 group-hover:text-[#163D52]" 
            strokeWidth={1.5}
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Title */}
          <h3 className="text-lg md:text-xl font-semibold text-[#0F172A] mb-2 leading-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="text-[15px] md:text-base text-[#475569] leading-relaxed max-w-[90%]">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
