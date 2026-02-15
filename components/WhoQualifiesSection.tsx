"use client"
import { motion } from 'motion/react';
import { Shield, Globe, CheckCircle } from 'lucide-react';
import { QualificationCard } from './QualificationCard';

const qualifications = [
  {
    icon: Shield,
    title: "British Citizens",
    description: "Students holding British citizenship and eligible for Home Fee status at UK universities.",
    delay: 0.1
  },
  {
    icon: Globe,
    title: "EU Settled / Pre-Settled Status",
    description: "EU nationals with settled or pre-settled status who meet residency and eligibility requirements.",
    delay: 0.2
  },
  {
    icon: CheckCircle,
    title: "Indefinite Leave to Remain (ILR)",
    description: "Students with ILR status who are eligible for Home Fee assessment and Student Finance support.",
    delay: 0.3
  }
];

export function WhoQualifiesSection() {
  return (
    <section className="bg-[#F8FAFC] py-14 md:py-18 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[120px]">
        <div className="max-w-[1000px] mx-auto">
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
                Eligibility
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
              Who Qualifies as a UK Home Student?
            </motion.h2>

            {/* Subheading */}
            <motion.p
              className="text-[17px] text-[#475569] leading-[1.6] max-w-[720px] mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              This pathway is designed for students who meet UK Home Fee eligibility and can access Student Finance support.
            </motion.p>
          </div>

          {/* Qualification Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {qualifications.map((qualification, index) => (
              <QualificationCard
                key={index}
                icon={qualification.icon}
                title={qualification.title}
                description={qualification.description}
                delay={qualification.delay}
              />
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
            <p className="text-[14px] text-[#64748B] max-w-[760px] mx-auto leading-[1.6]">
              Eligibility can vary depending on individual circumstances, residency history, and course selection. Our advisors assess your profile before making recommendations.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
