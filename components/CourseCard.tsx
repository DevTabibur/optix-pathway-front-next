import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface CourseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function CourseCard({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0 
}: CourseCardProps) {
  return (
    <motion.a
      href={`#course-${title.toLowerCase().replace(/\s+/g, '-')}`}
      className="group block bg-white border border-[#E5E7EB] rounded-2xl p-7 md:p-8 transition-all duration-300 hover:border-[#1F4E6D] hover:-translate-y-1 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.5 }}
    >
      {/* Icon Container */}
      <div className="mb-5">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] transition-all duration-300 group-hover:bg-[#1F4E6D] group-hover:border-[#1F4E6D]">
          <Icon 
            className="w-7 h-7 text-[#1F4E6D] transition-colors duration-300 group-hover:text-white" 
            strokeWidth={1.5}
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg md:text-xl font-semibold text-[#0F172A] mb-3 leading-tight transition-colors duration-300 group-hover:text-[#1F4E6D]">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[15px] md:text-base text-[#475569] leading-relaxed">
        {description}
      </p>
    </motion.a>
  );
}
