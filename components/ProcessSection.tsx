"use client"
import { motion } from 'motion/react';
import { ProcessStepCard } from './ProcessStepCard';
import { MessageCircle, Map, FileText, GraduationCap } from 'lucide-react';

export function ProcessSection() {
  const steps = [
    {
      stepNumber: "01",
      icon: MessageCircle,
      title: "Free Consultation",
      description: "Discuss your background, goals, and study plans with our expert advisors.",
      delay: 0.1
    },
    {
      stepNumber: "02",
      icon: Map,
      title: "Personalised Pathway",
      description: "We recommend suitable courses, universities, and entry requirements tailored to you.",
      delay: 0.2
    },
    {
      stepNumber: "03",
      icon: FileText,
      title: "Application & Visa Support",
      description: "We manage applications, documentation, and guide you through the visa process.",
      delay: 0.3
    },
    {
      stepNumber: "04",
      icon: GraduationCap,
      title: "Enrolment & Arrival",
      description: "From offer acceptance to arrival support, we stay with you until you start studying.",
      delay: 0.4
    }
  ];

  return (
    <section className="bg-[#F8FAFC] py-14 md:py-18 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-sm font-semibold text-[#1F4E6D] tracking-[0.08em] uppercase mb-4">
                Our Process
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              className="text-[32px] md:text-[38px] lg:text-[40px] font-bold text-[#0F172A] mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              How Your Journey Works
            </motion.h2>

            {/* Subheading */}
            <motion.p
              className="text-base md:text-lg text-[#475569] max-w-[720px] mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              A simple, transparent process designed to guide you from consultation to enrolment.
            </motion.p>
          </div>

          {/* Process Steps Grid with Connectors */}
          <div className="relative">
            {/* Connecting Line - Desktop Only */}
            <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-[1px] mx-[10%]">
              <div className="w-full h-full border-t-2 border-dashed border-[#E5E7EB]"></div>
            </div>

            {/* Steps Grid */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <ProcessStepCard
                  key={index}
                  stepNumber={step.stepNumber}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  delay={step.delay}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
