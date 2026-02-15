"use client"
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function UKHomeStudentsHero() {
  return (
    <section className="bg-white py-14 md:py-18 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              {/* Eyebrow Label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block text-[13px] font-semibold text-[#1F4E6D] tracking-[0.12em] uppercase mb-3">
                  STUDENT PATH
                </span>
              </motion.div>

              {/* Main Heading (H1) */}
              <motion.h1
                className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#0F172A] leading-[1.2] max-w-[560px] mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                Study in the UK as a Home Student
              </motion.h1>

              {/* Subheading */}
              <motion.p
                className="text-base md:text-[18px] text-[#475569] leading-[1.6] max-w-[560px] mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Guidance for British citizens, EU settled or pre-settled, and ILR holders with access to Student Finance and maintenance support.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 mb-5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {/* Primary CTA */}
                <a
                  href="#consultation"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-[#E63946] text-white text-base font-semibold rounded-xl hover:bg-[#C52A35] transition-all duration-200 shadow-sm hover:shadow-md min-h-[44px]"
                >
                  Get Free Consultation
                </a>

                {/* Secondary CTA */}
                <a
                  href="#eligibility"
                  className="inline-flex items-center gap-2 text-base font-semibold text-[#1F4E6D] hover:text-[#163A52] transition-colors duration-200 group min-h-[44px]"
                >
                  <span>Check Home Fee Eligibility</span>
                  <svg 
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </a>
              </motion.div>

              {/* Trust Micro-copy */}
              <motion.div
                className="flex items-center gap-2 text-[14px] text-[#64748B]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <CheckCircle2 className="w-4 h-4 text-[#1F4E6D] flex-shrink-0" />
                <span>Eligibility-based guidance • No pressure • No hidden charges</span>
              </motion.div>
            </div>

            {/* Right Column - Visual */}
            <motion.div
              className="relative order-first lg:order-last"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="relative rounded-[24px] overflow-hidden bg-[#F1F5F9] aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1712617505164-e13bc5f2d4a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="UK university students studying on campus"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient for better text visibility if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F4E6D]/5 to-transparent pointer-events-none" />
              </div>

              {/* Optional decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#E63946]/5 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-4 -left-4 w-40 h-40 bg-[#1F4E6D]/5 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
