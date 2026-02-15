/* eslint-disable react/no-unescaped-entities */
"use client"
import { motion } from 'motion/react';
import { HelpCircle } from 'lucide-react';

const concerns = [
  "Am I eligible to study in the UK?",
  "Which universities will accept my background?",
  "Can I switch my visa or course while in the UK?",
  "What documents are required for my application?",
  "When should I apply for my preferred intake?",
  "I had a refusal before — can I apply again?"
];

export function InternationalConcernsSection() {
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
                Common Concerns
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
              Questions International Students Often Ask
            </motion.h2>

            {/* Subheading */}
            <motion.p
              className="text-[17px] text-[#475569] leading-[1.6] max-w-[720px] mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Many international students feel uncertain about eligibility, visas, and university options. These concerns are very common.
            </motion.p>
          </div>

          {/* Concern Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {concerns.map((concern, index) => (
              <motion.div
                key={index}
                className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-7 flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index, duration: 0.5 }}
              >
                {/* Question Icon */}
                <div className="flex-shrink-0 mt-0.5">
                  <HelpCircle className="w-5 h-5 text-[#1F4E6D]" />
                </div>

                {/* Concern Text */}
                <p className="text-[16px] font-medium text-[#0F172A] leading-[1.6]">
                  {concern}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Reassurance Strip */}
          <motion.div
            className="mt-10 md:mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="bg-[#F1F5F9] rounded-2xl p-6 max-w-[900px] mx-auto">
              <p className="text-[15px] text-[#475569] leading-[1.6] text-center">
                Every international student's situation is different. Our role is to assess your profile carefully and explain your options clearly before you apply.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
