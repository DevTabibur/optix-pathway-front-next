import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

interface IntakeCardProps {
  title: string;
  description: string;
  delay?: number;
}

export function IntakeCard({ title, description, delay = 0 }: IntakeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white border border-[#E5E7EB] rounded-2xl p-7 text-center hover:border-[#1F4E6D] transition-colors duration-300"
    >
      {/* Calendar Icon */}
      <div className="w-12 h-12 mx-auto mb-4 bg-[#F1F5F9] rounded-xl flex items-center justify-center">
        <Calendar className="w-6 h-6 text-[#1F4E6D]" />
      </div>

      {/* Title */}
      <h3 className="text-[20px] font-bold text-[#0F172A] mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[15px] text-[#475569] leading-[1.6]">
        {description}
      </p>
    </motion.div>
  );
}
