import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  subLabel?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  delay?: number;
}

export function CategoryCard({ 
  icon: Icon, 
  title, 
  description,
  subLabel, 
  ctaText = "Explore Pathway →",
  onCtaClick,
  delay = 0
}: CategoryCardProps) {
  return (
    <motion.div
      className="group bg-white border border-[#E5E7EB] rounded-2xl p-8 transition-all duration-300 hover:border-[#1F4E6D] hover:-translate-y-1 hover:shadow-lg cursor-pointer focus-within:ring-2 focus-within:ring-[#1F4E6D] focus-within:ring-offset-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.5 }}
      onClick={onCtaClick}
      role="article"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onCtaClick?.();
        }
      }}
    >
      {/* Icon Container */}
      <motion.div 
        className="relative w-14 h-14 bg-[#F8FAFC] rounded-[12px] flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1F4E6D]/5"
      >
        <Icon className="w-7 h-7 text-[#1F4E6D] transition-transform duration-300 group-hover:scale-110" />
        {/* Decorative background circle */}
        <div className="absolute inset-0 rounded-[12px] bg-gradient-to-br from-[#1F4E6D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </motion.div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
        {title}
      </h3>

      {/* Optional Sub-label */}
      {subLabel && (
        <p className="text-[13px] text-[#475569] mb-3 italic">
          {subLabel}
        </p>
      )}

      {/* Description */}
      <p className="text-[#475569] leading-relaxed mb-6">
        {description}
      </p>

      {/* CTA Link */}
      <button 
        className="group/cta inline-flex items-center gap-2 text-[#E63946] font-semibold transition-all duration-200 hover:text-[#CC2F3C] focus:outline-none focus:ring-2 focus:ring-[#E63946] focus:ring-offset-2 rounded"
        onClick={(e) => {
          e.stopPropagation();
          onCtaClick?.();
        }}
      >
        <span className="relative">
          {ctaText}
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#E63946] transition-all duration-300 group-hover/cta:w-full"></span>
        </span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
      </button>
    </motion.div>
  );
}
