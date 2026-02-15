"use client"
import { motion } from 'motion/react';
import { ValueItem } from './ValueItem';
import { Lightbulb, Users, FileCheck } from 'lucide-react';

export function ValuePillarsSection() {
  const pillars = [
    {
      icon: Lightbulb,
      iconColor: "#FBBF24",
      title: "One Stop Study Solution",
      description: "Course selection, university shortlisting, application handling, and visa guidance — managed in one organised process.",
      delay: 0.1
    },
    {
      icon: Users,
      iconColor: "#7C3AED",
      title: "One-to-One Consultation",
      description: "Dedicated sessions to assess your background, eligibility, and study goals before recommending any pathway.",
      delay: 0.2
    },
    {
      icon: FileCheck,
      iconColor: "#E63946",
      title: "Application & Visa Assistance",
      description: "We assist with documentation, timelines, and submission requirements to help avoid delays and mistakes.",
      delay: 0.3
    }
  ];

  return (
    <section className="bg-[#F8FAFC] py-12 md:py-14 lg:py-18">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-12">
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-sm font-semibold text-[#1F4E6D] tracking-[0.08em] uppercase mb-3">
                What You Get
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h3
              className="text-[26px] md:text-[30px] lg:text-[32px] font-bold text-[#0F172A] mb-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Clear Support at Every Stage of Your Application
            </motion.h3>

            {/* Subheading */}
            <motion.p
              className="text-base md:text-lg text-[#475569] max-w-[720px] mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Practical guidance and structured support designed to move your application forward.
            </motion.p>
          </div>

          {/* Value Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {pillars.map((pillar, index) => (
              <ValueItem
                key={index}
                icon={pillar.icon}
                iconColor={pillar.iconColor}
                title={pillar.title}
                description={pillar.description}
                delay={pillar.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
