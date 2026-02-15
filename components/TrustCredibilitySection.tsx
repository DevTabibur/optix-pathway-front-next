import { motion } from 'motion/react';
import { Shield, Target, GraduationCap, CheckCircle } from 'lucide-react';
import { TrustItem } from './TrustItem';

const trustItems = [
  {
    icon: Shield,
    iconColor: '#1F4E6D',
    title: 'Ethical & Honest Advice',
    description: 'We recommend options based on suitability and requirements — not pressure or unrealistic promises.'
  },
  {
    icon: Target,
    iconColor: '#E63946',
    title: 'Student-First Decision Making',
    description: 'Your academic background and long-term goals guide every recommendation we make.'
  },
  {
    icon: GraduationCap,
    iconColor: '#1F4E6D',
    title: 'UK Education Expertise',
    description: 'In-depth understanding of UK universities, visa pathways, and student finance systems.'
  },
  {
    icon: CheckCircle,
    iconColor: '#1F4E6D',
    title: 'Clear Expectations',
    description: 'We explain processes, timelines, and outcomes clearly so you know what to expect at every stage.'
  }
];

const secondaryTrustPoints = [
  'Guidance for International & UK Home Students',
  'No Hidden Fees or Pressure',
  'Up-to-Date Intake & Visa Information'
];

export function TrustCredibilitySection() {
  return (
    <section className="bg-[#F8FAFC] py-12 md:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[120px]">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-12 lg:mb-14">
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-sm font-semibold text-[#1F4E6D] tracking-[0.08em] uppercase mb-4">
                Trust & Credibility
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
              Guidance Built on Integrity and Transparency
            </motion.h2>

            {/* Subheading */}
            <motion.p
              className="text-base md:text-lg text-[#475569] max-w-[720px] mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Our advice is shaped by eligibility, long-term outcomes, and honest communication.
            </motion.p>
          </div>

          {/* Trust Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-8 mb-10 md:mb-12">
            {trustItems.map((item, index) => (
              <TrustItem
                key={index}
                icon={item.icon}
                iconColor={item.iconColor}
                title={item.title}
                description={item.description}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* Secondary Trust Strip */}
          <motion.div
            className="bg-white rounded-xl p-6 md:p-8 mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center">
              {secondaryTrustPoints.map((point, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E63946]" />
                    <span className="text-sm md:text-base font-medium text-[#0F172A]">
                      {point}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            className="text-center max-w-[900px] mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <p className="text-[13px] text-[#475569] leading-relaxed">
              Optix Pathway provides independent education guidance and application support. 
              University admission decisions remain with the institutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
