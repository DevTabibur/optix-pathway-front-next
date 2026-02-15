import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

const leftColumnPoints = [
  "Eligibility-based guidance",
  "Maintenance support included",
  "Clear explanation of the process",
  "No pressure or hidden charges"
];

const rightColumnPoints = [
  "Eligibility assessment",
  "Course pathway alignment",
  "University suitability guidance",
  "Timeline planning"
];

export function StudentFinanceSection() {
  return (
    <section className="bg-white py-14 md:py-18 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[120px]">
        <div className="max-w-[1100px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-14 lg:mb-16">
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-[13px] font-semibold text-[#1F4E6D] tracking-[0.12em] uppercase mb-4">
                Funding & Support
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              className="text-[28px] md:text-[32px] lg:text-[36px] font-bold text-[#0F172A] mb-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Student Finance & Maintenance Support
            </motion.h2>

            {/* Subheading */}
            <motion.p
              className="text-[17px] text-[#475569] leading-[1.6] max-w-[760px] mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              UK Home Students may be eligible for Student Finance support, including maintenance funding, depending on their status and circumstances.
            </motion.p>
          </div>

          {/* Two-Column Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - What This Means */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3 className="text-[20px] font-bold text-[#0F172A] mb-4">
                What This Means for You
              </h3>
              
              <p className="text-[16px] text-[#475569] leading-[1.7] mb-6">
                If you qualify as a UK Home Student, you may be able to access Student Finance support to help fund your studies, along with maintenance support to assist with living costs.
              </p>

              <ul className="space-y-3">
                {leftColumnPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-5 h-5 text-[#1F4E6D]" />
                    </div>
                    <span className="text-[16px] text-[#475569] leading-[1.7]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right Column - How We Help */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h3 className="text-[20px] font-bold text-[#0F172A] mb-4">
                How Optix Pathway Supports You
              </h3>
              
              <p className="text-[16px] text-[#475569] leading-[1.7] mb-6">
                Our advisors help you understand your eligibility, explain how the process works, and guide you towards courses and universities aligned with Student Finance requirements.
              </p>

              <ul className="space-y-3">
                {rightColumnPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-5 h-5 text-[#1F4E6D]" />
                    </div>
                    <span className="text-[16px] text-[#475569] leading-[1.7]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Important Note Box */}
          <motion.div
            className="mt-10 md:mt-12 lg:mt-14 max-w-[900px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-6 md:p-8">
              <p className="text-[14px] text-[#64748B] text-center leading-[1.6]">
                Student Finance eligibility and funding decisions are made by the relevant authorities. We provide independent guidance to help you understand your options and prepare correctly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
