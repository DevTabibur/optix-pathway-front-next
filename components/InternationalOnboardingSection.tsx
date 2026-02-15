import { motion } from 'motion/react';
import { Plane, Home, BookOpen, Users } from 'lucide-react';

const features = [
  {
    icon: Plane,
    title: "Airport Pickup Assistance",
    description: "Guidance and coordination support to help students arrange safe airport pickup upon arrival in the UK."
  },
  {
    icon: Home,
    title: "Accommodation Guidance",
    description: "Support with understanding accommodation options, including university halls and private housing."
  },
  {
    icon: BookOpen,
    title: "UK Student Starter Guide",
    description: "A practical guide for new international students covering life in the UK, essentials, and next steps."
  },
  {
    icon: Users,
    title: "Post-Arrival Support",
    description: "Ongoing guidance during the initial settling period to help students adapt confidently."
  }
];

export function InternationalOnboardingSection() {
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
                UK Onboarding Support
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
              Support Beyond Admission — From Arrival to Settlement
            </motion.h2>

            {/* Subheading */}
            <motion.p
              className="text-[17px] text-[#475569] leading-[1.6] max-w-[760px] mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              We support international students not only with applications, but also with settling into life in the UK.
            </motion.p>
          </div>

          {/* Support Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white border border-[#E5E7EB] rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-[#F1F5F9] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#1F4E6D]" />
                  </div>

                  {/* Feature Title */}
                  <h3 className="text-[18px] font-semibold text-[#0F172A] mb-3">
                    {feature.title}
                  </h3>

                  {/* Feature Description */}
                  <p className="text-[15px] text-[#475569] leading-[1.7]">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Supporting Note */}
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <p className="text-[14px] text-[#64748B] leading-[1.6] max-w-[900px] mx-auto">
              Availability of post-arrival support may vary by location and service type. We provide guidance and coordination support to help students prepare effectively.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
