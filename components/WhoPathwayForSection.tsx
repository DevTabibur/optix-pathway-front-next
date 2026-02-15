import { motion } from 'motion/react';
import { Globe, MapPin, RefreshCw } from 'lucide-react';

const pathwayCards = [
  {
    icon: Globe,
    title: "Students Applying from Outside the UK",
    description: "Applicants planning to study in the UK from their home country and applying for a student visa."
  },
  {
    icon: MapPin,
    title: "Students Already in the UK",
    description: "Students currently in the UK on a temporary visa who are planning to continue or change their studies."
  },
  {
    icon: RefreshCw,
    title: "In-Country Visa Switching",
    description: "Students exploring options to switch visas or change courses while remaining in the UK."
  }
];

export function WhoPathwayForSection() {
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
                Who This Is For
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
              Who Should Choose This Pathway?
            </motion.h2>

            {/* Subheading */}
            <motion.p
              className="text-[17px] text-[#475569] leading-[1.6] max-w-[720px] mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              This pathway is designed for international students at different stages of their UK study journey.
            </motion.p>
          </div>

          {/* Eligibility Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pathwayCards.map((card, index) => (
              <motion.div
                key={index}
                className="bg-white border border-[#E5E7EB] rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#EBF4F8] flex items-center justify-center mb-5">
                  <card.icon className="w-6 h-6 text-[#1F4E6D]" />
                </div>

                {/* Title */}
                <h3 className="text-[18px] font-semibold text-[#0F172A] mb-3 leading-[1.4]">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-[15px] text-[#475569] leading-[1.6]">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Supporting Note */}
          <motion.div
            className="text-center mt-8 md:mt-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="text-[14px] text-[#64748B] leading-[1.6] max-w-[760px] mx-auto">
              Eligibility and available options depend on your current visa status, course choice, and university requirements. Our advisors assess your profile before providing guidance.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
