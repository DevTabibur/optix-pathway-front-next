
"use client"
import { motion } from 'motion/react';
import { IntakeCard } from './IntakeCard';

const intakes = [
  {
    title: "September Intake",
    description: "The main intake with the widest range of courses and universities available for UK Home Students.",
    delay: 0.1
  },
  {
    title: "January Intake",
    description: "Available for selected courses and universities. Planning ahead is recommended.",
    delay: 0.15
  },
  {
    title: "May Intake",
    description: "Limited intake for specific courses and institutions.",
    delay: 0.2
  }
];

export function AvailableIntakesSection() {
  return (
    <section className="bg-[#F8FAFC] py-14 md:py-18 lg:py-24">
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
                Intakes
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
              Available Intakes for UK Home Students
            </motion.h2>

            {/* Subheading */}
            <motion.p
              className="text-[17px] text-[#475569] leading-[1.6] max-w-[760px] mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Most UK Home Students apply for one of the following intakes depending on course availability and eligibility.
            </motion.p>
          </div>

          {/* Intake Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {intakes.map((intake, index) => (
              <IntakeCard
                key={index}
                title={intake.title}
                description={intake.description}
                delay={intake.delay}
              />
            ))}
          </div>

          {/* Supporting Note */}
          <motion.div
            className="text-center mt-8 md:mt-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p className="text-[14px] text-[#64748B] max-w-[900px] mx-auto leading-[1.6]">
              Intake availability depends on course selection and university criteria. Our advisors help you plan the most suitable intake based on your profile.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
