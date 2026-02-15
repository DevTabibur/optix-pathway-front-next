"use client"
import { motion } from 'motion/react';
import { ClipboardCheck, Banknote, GraduationCap, Building2, FileText, Calendar } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    icon: ClipboardCheck,
    title: "Eligibility Assessment",
    description: "We review your status, background, and goals to determine suitable study pathways before you apply.",
    delay: 0.1
  },
  {
    icon: Banknote,
    title: "Student Finance & Maintenance Guidance",
    description: "Clear guidance on Student Finance eligibility and maintenance support based on your circumstances.",
    delay: 0.15
  },
  {
    icon: GraduationCap,
    title: "Course Pathway Planning",
    description: "Advice on realistic course options aligned with your academic background and career goals.",
    delay: 0.2
  },
  {
    icon: Building2,
    title: "University Shortlisting",
    description: "We help identify universities that match your profile and eligibility as a UK Home Student.",
    delay: 0.25
  },
  {
    icon: FileText,
    title: "Application Guidance",
    description: "Step-by-step support with applications, documentation, and timelines.",
    delay: 0.3
  },
  {
    icon: Calendar,
    title: "Intake Planning & Timelines",
    description: "Guidance on available intakes and when to apply for the best possible outcome.",
    delay: 0.35
  }
];

export function HowWeHelpSection() {
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
                Our Support
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
              How We Support UK Home Students
            </motion.h2>

            {/* Subheading */}
            <motion.p
              className="text-[17px] text-[#475569] leading-[1.6] max-w-[760px] mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              We provide structured, eligibility-based guidance to help you plan your UK study journey with confidence.
            </motion.p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={feature.delay}
              />
            ))}
          </div>

          {/* Supporting Disclaimer */}
          <motion.div
            className="text-center mt-10 md:mt-12 lg:mt-14"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="text-[14px] text-[#64748B] max-w-[900px] mx-auto leading-[1.6]">
              Admission and funding decisions are made by universities and Student Finance bodies. Our role is to guide and support you throughout the process.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
