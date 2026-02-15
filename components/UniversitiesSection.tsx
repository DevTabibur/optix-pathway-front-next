import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { UniversityPreviewCard } from './UniversityPreviewCard';

const universities = [
  { name: "University of Bedfordshire", delay: 0.1 },
  { name: "Teesside University", delay: 0.15 },
  { name: "University of Bolton", delay: 0.2 },
  { name: "University of Sunderland", delay: 0.25 },
  { name: "London Metropolitan University", delay: 0.3 },
  { name: "University of Cumbria", delay: 0.35 },
  { name: "University of West London", delay: 0.4 },
  { name: "Solent University", delay: 0.45 }
];

export function UniversitiesSection() {
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
                Universities
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
              Universities Available for UK Home Students
            </motion.h2>

            {/* Subheading */}
            <motion.p
              className="text-[17px] text-[#475569] leading-[1.6] max-w-[760px] mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              We guide UK Home Students towards universities that offer Home Fee status and support Student Finance eligibility.
            </motion.p>
          </div>

          {/* University Preview Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {universities.map((university, index) => (
              <UniversityPreviewCard
                key={index}
                name={university.name}
                delay={university.delay}
              />
            ))}
          </div>

          {/* University Display Note */}
          <motion.div
            className="text-center mt-8 md:mt-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <p className="text-[14px] text-[#64748B] max-w-[900px] mx-auto leading-[1.6]">
              University options vary based on course choice, intake, and eligibility. We provide guidance and application support but do not represent universities unless formally stated.
            </p>
          </motion.div>

          {/* Primary CTA Link */}
          <motion.div
            className="text-center mt-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[16px] font-semibold text-[#E63946] hover:text-[#C62E3A] transition-colors duration-200"
            >
              View universities for UK Home Students
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
