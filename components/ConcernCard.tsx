import { motion } from 'motion/react';
import { HelpCircle } from 'lucide-react';

interface ConcernCardProps {
  text: string;
  delay?: number;
}

export function ConcernCard({ text, delay = 0 }: ConcernCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-7 flex items-start gap-4 h-full"
    >
      {/* Icon */}
      <div className="flex-shrink-0 mt-0.5">
        <HelpCircle className="w-5 h-5 text-[#1F4E6D]" />
      </div>

      {/* Text */}
      <p className="text-[16px] font-medium text-[#0F172A] leading-[1.6]">
        {text}
      </p>
    </motion.div>
  );
}
