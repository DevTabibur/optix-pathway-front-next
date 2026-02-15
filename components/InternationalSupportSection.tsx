import { motion } from 'motion/react';
import { ClipboardCheck, GraduationCap, FileText, Globe, MapPin, Calendar } from 'lucide-react';

const supportFeatures = [
  {
    icon: ClipboardCheck,
    title: "Eligibility & Profile Assessment",
    description: "We review your academic background, visa status, and goals to identify suitable study options."
  },
  {
    icon: GraduationCap,
    title: "Course & University Shortlisting",
    description: "Guidance on courses and universities aligned with your eligibility, intake, and long-term plans."
  },
  {
    icon: FileText,
    title: "Application Guidance",
    description: "Support with application requirements, documentation, and submission timelines."
  },
  {
    icon: Globe,
    title: "Student Visa Guidance",
    description: "Clear guidance on the student visa process and required documentation based on your situation."
  },
  {
    icon: MapPin,
    title: "In-Country Support & Visa Switching",
    description: "Advisory support for students already in the UK who are planning to change courses or switch visas."
  },
  {
    icon: Calendar,
    title: "Intake Planning & Timelines",
    description: "Advice on available intakes and when to apply to improve planning and preparation."
  }
];

export function InternationalSupportSection() {
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
              How We Support International Students
            </motion.h2>

            {/* Subheading */}
            <motion.p
              className="text-[17px] text-[#475569] leading-[1.6] max-w-[760px] mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              We provide clear, eligibility-based guidance to help international students plan their UK study journey with confidence.
            </motion.p>
          </div>

          {/* Support Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white border border-[#E5E7EB] rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index, duration: 0.5 }}
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-[#F1F5F9] flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-[#1F4E6D]" />
                </div>

                {/* Title */}
                <h3 className="text-[18px] font-semibold text-[#0F172A] mb-3 leading-[1.4]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[15px] text-[#475569] leading-[1.6]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Supporting Disclaimer */}
          <motion.div
            className="text-center mt-10 md:mt-12"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="text-[14px] text-[#64748B] leading-[1.6] max-w-[900px] mx-auto">
              Visa and admission decisions are made by universities and relevant authorities. Our role is to guide and support you throughout the process.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
