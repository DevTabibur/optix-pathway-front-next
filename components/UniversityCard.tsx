import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface UniversityCardProps {
  name: string;
  logoQuery: string;
  delay?: number;
}

export function UniversityCard({ 
  name, 
  logoQuery,
  delay = 0 
}: UniversityCardProps) {
  return (
    <motion.div
      className="group relative bg-white border border-[#E5E7EB] rounded-2xl p-6 hover:border-[#1F4E6D] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ y: -4 }}
    >
      {/* Logo Container */}
      <div className="w-full h-20 md:h-24 mb-4 flex items-center justify-center bg-white rounded-lg overflow-hidden">
        <ImageWithFallback
          src={`https://source.unsplash.com/400x300/?${encodeURIComponent(logoQuery)}`}
          alt={`${name} logo`}
          className="w-full h-full object-contain"
        />
      </div>

      {/* University Name */}
      <h3 className="text-base font-semibold text-[#0F172A] text-center mb-2 leading-tight min-h-[2.5rem] flex items-center justify-center">
        {name}
      </h3>

      {/* Helper Text */}
      <p className="text-[13px] text-[#475569] text-center mb-3">
        UK University
      </p>

      {/* Optional Learn More Link */}
      <div className="mt-auto pt-2 flex items-center justify-center gap-1 text-sm font-medium text-[#1F4E6D] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </motion.div>
  );
}
