import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';


const universities = [
  { name: "University of Birmingham", shortName: "UoB" },
  { name: "University of Manchester", shortName: "UoM" },
  { name: "University of Leeds", shortName: "Leeds" },
  { name: "Queen Mary University", shortName: "QMUL" },
  { name: "University of Sheffield", shortName: "Sheffield" },
  { name: "Newcastle University", shortName: "Newcastle" },
  { name: "University of Nottingham", shortName: "Nottingham" },
  { name: "Cardiff University", shortName: "Cardiff" }
];

export function InternationalUniversitiesSection() {
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
              Universities Available for International Students
            </motion.h2>

            {/* Subheading */}
            <motion.p
              className="text-[17px] text-[#475569] leading-[1.6] max-w-[760px] mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              We guide international students towards UK universities based on eligibility, course availability, and intake options.
            </motion.p>
          </div>

          {/* University Preview Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {universities.map((university, index) => (
              <motion.div
                key={index}
                className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-6 flex flex-col items-center justify-center min-h-[140px] group hover:border-[#1F4E6D] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index, duration: 0.5 }}
              >
                {/* Logo Placeholder */}
                <div className="w-16 h-16 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center mb-3 grayscale group-hover:grayscale-0 transition-all duration-300">
                  <span className="text-[14px] font-bold text-[#1F4E6D]">
                    {university.shortName}
                  </span>
                </div>

                {/* University Name */}
                <p className="text-[13px] font-medium text-[#475569] text-center leading-[1.4]">
                  {university.name}
                </p>
              </motion.div>
            ))}
          </div>

          {/* University Disclaimer */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="text-[14px] text-[#64748B] leading-[1.6] max-w-[900px] mx-auto">
              University options depend on course choice, intake, and eligibility. Optix Pathway provides guidance and application support and does not represent universities unless formally stated.
            </p>
          </motion.div>

          {/* Primary CTA Link */}
          <motion.div
            className="text-center mt-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Link
              href="/universities"
              className="inline-flex items-center gap-2 text-[16px] font-semibold text-[#E63946] hover:text-[#d32f3d] transition-colors duration-200"
            >
              View universities for international students
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
