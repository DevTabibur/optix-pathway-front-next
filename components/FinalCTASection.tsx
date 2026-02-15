"use client"
import { motion } from 'motion/react';

export function FinalCTASection() {
  return (
    <section className="bg-[#1F4E6D] py-16 md:py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[120px]">
        <div className="max-w-[900px] mx-auto text-center">
          {/* Main Heading */}
          <motion.h2
            className="text-[28px] md:text-[34px] lg:text-[38px] font-bold text-white leading-[1.25] mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Plan Your UK Study Path with Confidence
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="text-[18px] text-[#E5E7EB] leading-[1.6] mb-8 md:mb-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Get clear, eligibility-based guidance from experienced advisors before you apply.
          </motion.p>

          {/* Primary CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <button
              className="bg-[#E63946] text-white text-[16px] font-semibold px-8 py-4 rounded-xl min-h-[48px] hover:bg-[#C62E3A] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center justify-center"
            >
              Get Free Consultation
            </button>
          </motion.div>

          {/* Reassurance Micro-copy */}
          <motion.p
            className="text-[14px] text-[#E5E7EB] mt-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            No obligation • No pressure • Honest guidance
          </motion.p>
        </div>
      </div>
    </section>
  );
}
