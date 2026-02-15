/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "motion/react";
import { ConcernCard } from "./ConcernCard";

const concerns = [
  {
    text: "Am I eligible for Student Finance?",
    delay: 0.1,
  },
  {
    text: "Can I study without A-levels or prior qualifications?",
    delay: 0.15,
  },
  {
    text: "I'm a mature student — can I still apply?",
    delay: 0.2,
  },
  {
    text: "Which universities will accept my background?",
    delay: 0.25,
  },
  {
    text: "I was rejected before — can I try again?",
    delay: 0.3,
  },
  {
    text: "How long does the application process take?",
    delay: 0.35,
  },
];

export function CommonConcernsSection() {
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
              Questions UK Home Students Often Ask
            </motion.h2>

            {/* Subheading */}
            <motion.p
              className="text-[17px] text-[#475569] leading-[1.6] max-w-[720px] mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              We regularly support students who are unsure about eligibility,
              qualifications, or funding. You're not alone.
            </motion.p>
          </div>

          {/* Concern Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {concerns.map((concern, index) => (
              <ConcernCard
                key={index}
                text={concern.text}
                delay={concern.delay}
              />
            ))}
          </div>

          {/* Reassurance Strip */}
          <motion.div
            className="mt-10 md:mt-12 lg:mt-14 max-w-[900px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="bg-[#F1F5F9] rounded-2xl p-6 md:p-8">
              <p className="text-[15px] text-[#475569] text-center leading-[1.6]">
                Every student's situation is different. Our role is to assess
                your profile carefully and provide clear, honest guidance based
                on eligibility and long-term outcomes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
