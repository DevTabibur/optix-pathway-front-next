"use client"
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function InternationalFinalCTA() {
  const handleConsultationClick = () => {
    // Scroll to top where contact/consultation form would be
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="international-final-cta" className="bg-[#1F4E6D] py-16 md:py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[120px]">
        <div className="max-w-[900px] mx-auto text-center">
          {/* Main Heading */}
          <motion.h2
            className="text-[28px] md:text-[34px] lg:text-[38px] font-bold text-white leading-[1.25] mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Start Your UK Study Journey with Confidence
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="text-[18px] text-[#E5E7EB] leading-[1.6] mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Get clear, eligibility-based guidance whether you're applying from abroad or already in the UK.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <button
              onClick={handleConsultationClick}
              className="inline-flex items-center justify-center gap-2 bg-[#E63946] text-white text-[16px] font-semibold px-8 py-4 rounded-xl min-h-[48px] hover:bg-[#D32F3C] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Reassurance Micro-copy */}
          <motion.p
            className="text-[14px] text-[#E5E7EB] mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            No obligation • Eligibility-based guidance • In-country support included
          </motion.p>
        </div>
      </div>
    </section>
  );
}
