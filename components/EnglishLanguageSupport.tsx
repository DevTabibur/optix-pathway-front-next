"use client"
import { motion } from 'motion/react';
import { FileCheck, Headphones, Globe, FileText, Monitor, MessageSquare, Info } from 'lucide-react';

const languageProofs = [
  {
    icon: FileCheck,
    title: "IELTS",
    description: "Academic / UKVI where required. Score varies by course.",
    delay: 0.1
  },
  {
    icon: Headphones,
    title: "OET",
    description: "Common for healthcare routes. Grade depends on program.",
    delay: 0.15
  },
  {
    icon: Globe,
    title: "Duolingo",
    description: "Online option accepted by many universities.",
    delay: 0.2
  },
  {
    icon: FileText,
    title: "MOI",
    description: "Accepted if prior studies were taught in English (subject to approval).",
    delay: 0.25
  },
  {
    icon: Monitor,
    title: "PTE",
    description: "Computer-based test. Requirements vary by university.",
    delay: 0.3
  },
  {
    icon: MessageSquare,
    title: "TOEFL",
    description: "iBT accepted by many institutions; score depends on course.",
    delay: 0.35
  }
];

export function EnglishLanguageSupport() {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const finalCTA = document.querySelector('#international-final-cta');
    if (finalCTA) {
      finalCTA.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-white py-14 md:py-18 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-14 lg:mb-16">
            {/* Main Heading */}
            <motion.h2
              className="text-[28px] md:text-[32px] lg:text-[36px] font-bold text-[#0F172A] mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              English Language Support (Accepted Proofs)
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              className="text-[16px] md:text-[17px] text-[#475569] leading-[1.6] max-w-[800px] mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              We guide you on the accepted English proofs for UK university admission. Final acceptance depends on each university's policy.
            </motion.p>
          </div>

          {/* English Proof Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {languageProofs.map((proof, index) => {
              const Icon = proof.icon;
              
              return (
                <motion.div
                  key={index}
                  className="bg-white border border-[#E2E8F0] rounded-2xl p-6 hover:shadow-md transition-all duration-200"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: proof.delay, duration: 0.5 }}
                >
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-full bg-[#FEE2E2] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#E63946]" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                    {proof.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[15px] text-[#475569] leading-[1.6]">
                    {proof.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Important Rule Callout */}
          <motion.div
            className="bg-[#FEF2F2] border-l-4 border-[#E63946] rounded-lg p-6 md:p-8 mb-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="flex items-start gap-4">
              {/* Info Icon */}
              <div className="flex-shrink-0">
                <Info className="w-6 h-6 text-[#E63946]" strokeWidth={1.5} />
              </div>

              <div className="flex-1">
                {/* Title */}
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                  Important Rule
                </h3>

                {/* Text */}
                <p className="text-[15px] text-[#475569] leading-[1.6] mb-4">
                  Requirements are fulfilled based on each university's requirements (case-by-case assessment).
                </p>

                {/* Link Button */}
                <a
                  href="#international-final-cta"
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#E63946] hover:text-[#d32f3c] transition-colors duration-200 group"
                >
                  <span className="relative">
                    Check Eligibility
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#E63946] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <svg 
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Micro-CTA Row */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#F8FAFC] rounded-xl p-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {/* Left Text */}
            <p className="text-[15px] text-[#475569] text-center md:text-left">
              Not sure which proof works for your course?
            </p>

            {/* Right Button */}
            <a
              href="#international-final-cta"
              onClick={scrollToForm}
              className="inline-block px-6 py-3 border-2 border-[#E63946] text-[#E63946] font-semibold rounded-xl hover:bg-[#E63946] hover:text-white transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#E63946]/30 whitespace-nowrap"
            >
              Free Eligibility Check
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
