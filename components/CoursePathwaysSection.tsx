import { motion } from 'motion/react';
import { Briefcase, Heart, Laptop, Scale, GraduationCap, BookOpen } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const pathways = [
  {
    icon: Briefcase,
    title: "Business & Management",
    description: "Business management, marketing, finance, and entrepreneurship-related courses.",
    delay: 0.1
  },
  {
    icon: Heart,
    title: "Health & Social Care",
    description: "Courses focused on healthcare, social services, and community support roles.",
    delay: 0.15
  },
  {
    icon: Laptop,
    title: "Computing & IT",
    description: "IT, computing, data-related, and technology-focused study routes.",
    delay: 0.2
  },
  {
    icon: Scale,
    title: "Law",
    description: "Law and legal studies pathways for students interested in legal systems and compliance.",
    delay: 0.25
  },
  {
    icon: GraduationCap,
    title: "Education & Teaching Pathways",
    description: "Education-related courses and pathways towards teaching or training roles.",
    delay: 0.3
  },
  {
    icon: BookOpen,
    title: "Alternative & Access Routes",
    description: "Foundation or access-style routes designed for students without traditional qualifications.",
    delay: 0.35
  }
];

export function CoursePathwaysSection() {
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
                Course Pathways
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
              Popular Course Pathways for UK Home Students
            </motion.h2>

            {/* Subheading */}
            <motion.p
              className="text-[17px] text-[#475569] leading-[1.6] max-w-[760px] mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Based on eligibility, academic background, and long-term goals, UK Home Students commonly explore the following pathways.
            </motion.p>
          </div>

          {/* Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {pathways.map((pathway, index) => (
              <FeatureCard
                key={index}
                icon={pathway.icon}
                title={pathway.title}
                description={pathway.description}
                delay={pathway.delay}
              />
            ))}
          </div>

          {/* Supporting Note */}
          <motion.div
            className="text-center mt-10 md:mt-12 lg:mt-14"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="text-[14px] text-[#64748B] max-w-[900px] mx-auto leading-[1.6]">
              Course availability depends on eligibility, university requirements, and intake schedules. Our advisors help identify suitable options based on your profile.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
