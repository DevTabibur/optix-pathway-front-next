"use client"
import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

const intakes = [
  {
    title: "September Intake",
    description: "The main intake with the widest range of courses and universities for international students."
  },
  {
    title: "January Intake",
    description: "Available for selected courses and universities. Planning ahead is recommended due to visa timelines."
  },
  {
    title: "May Intake",
    description: "Limited intake for specific postgraduate courses and institutions."
  }
];

export function InternationalIntakesSection() {
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
              Available Intakes for International Students
            </motion.h2>

            {/* Subheading */}
            <motion.p
              className="text-[17px] text-[#475569] leading-[1.6] max-w-[760px] mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              International students can apply for different intakes depending on course availability, visa timelines, and eligibility.
            </motion.p>
          </div>

          {/* Intake Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {intakes.map((intake, index) => (
              <motion.div
                key={index}
                className="bg-white border border-[#E5E7EB] rounded-2xl p-7 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                {/* Calendar Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#EBF4F8] flex items-center justify-center mx-auto mb-5">
                  <Calendar className="w-6 h-6 text-[#1F4E6D]" />
                </div>

                {/* Intake Title */}
                <h3 className="text-[20px] font-semibold text-[#0F172A] mb-3">
                  {intake.title}
                </h3>

                {/* Intake Description */}
                <p className="text-[15px] text-[#475569] leading-[1.6]">
                  {intake.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Supporting Note */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="text-[14px] text-[#64748B] leading-[1.6] max-w-[900px] mx-auto">
              Intake availability varies by university, course, and visa processing timelines. Our advisors help you plan accordingly.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
