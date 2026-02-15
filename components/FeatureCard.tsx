import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white border border-[#E5E7EB] rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col"
    >
      {/* Icon */}
      <div className="mb-5">
        <div className="w-12 h-12 rounded-xl bg-[#F1F5F9] flex items-center justify-center">
          <Icon className="w-6 h-6 text-[#1F4E6D]" strokeWidth={1.5} />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-[18px] font-bold text-[#0F172A] mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[15px] text-[#475569] leading-[1.6]">
        {description}
      </p>
    </motion.div>
  );
}
