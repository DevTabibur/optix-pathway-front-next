"use client"
import { motion } from 'motion/react';
import { IntakeCard } from './IntakeCard';

const intakes = [
  {
    period: 'September 2026',
    status: 'Open' as const,
    description: 'Main intake for most undergraduate and postgraduate courses. Best availability of universities and subjects.',
    delay: 0.1
  },
  {
    period: 'January 2027',
    status: 'Limited' as const,
    description: 'Available for selected courses and universities. Early application recommended.',
    delay: 0.2
  },
  {
    period: 'May 2027',
    status: 'Upcoming' as const,
    description: 'Limited availability intake, mainly for specific postgraduate programmes.',
    delay: 0.3
  }
];

export function UpcomingIntakesSection() {
  return (
    <section className="bg-[#F8FAFC] py-16 md:py-20 lg:py-28">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-[13px] font-semibold text-[#1F4E6D] tracking-[0.12em] uppercase mb-5">
                UPCOMING INTAKES
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              className="text-[38px] md:text-[40px] lg:text-[42px] font-bold text-[#0F172A] mb-3 leading-tight"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Plan Your UK Study Timeline
            </motion.h2>

            {/* Subheading */}
            <motion.p
              className="text-[17px] md:text-[18px] text-[#475569] max-w-[760px] mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              University intakes vary by course, pathway, and eligibility. Early planning improves your chances.
            </motion.p>
          </div>

          {/* Intake Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 md:mb-10">
            {intakes.map((intake, index) => (
              <IntakeCard
                key={index}
                period={intake.period}
                status={intake.status}
                description={intake.description}
                delay={intake.delay}
              />
            ))}
          </div>

          {/* Disclaimer Text */}
          <motion.div
            className="text-center max-w-[900px] mx-auto mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="text-[14px] text-[#64748B] leading-relaxed">
              Intake availability depends on course selection, university criteria, and visa timelines.
            </p>
          </motion.div>

          {/* CTA Link */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a
              href="#eligibility"
              className="inline-flex items-center gap-2 text-base font-semibold text-[#E63946] hover:text-[#C52A35] transition-colors duration-200 group"
            >
              <span className="relative">
                Check your eligibility for upcoming intakes
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#E63946] transition-all duration-300 group-hover:w-full"></span>
              </span>
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
        </div>
      </div>
    </section>
  );
}
