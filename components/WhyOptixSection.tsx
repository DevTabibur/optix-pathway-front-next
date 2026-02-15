import { motion } from 'motion/react';
import { FeatureCard } from './FeatureCard';
import { GraduationCap, FileCheck, MapPin, Heart } from 'lucide-react';

export function WhyOptixSection() {
  const features = [
    {
      icon: GraduationCap,
      title: "Expert Guidance",
      description: "Our experienced advisors provide clear, honest guidance from course selection to visa success.",
      delay: 0.1
    },
    {
      icon: FileCheck,
      title: "Transparent Process",
      description: "No hidden steps or confusion. We keep you informed at every stage of your application journey.",
      delay: 0.2
    },
    {
      icon: MapPin,
      title: "UK-Focused Expertise",
      description: "Specialised support for UK universities, student finance, and in-country visa pathways.",
      delay: 0.3
    },
    {
      icon: Heart,
      title: "Student-Centric Support",
      description: "Your goals come first. We tailor every pathway to match your background and ambitions.",
      delay: 0.4
    }
  ];

  const trustMetrics = [
    {
      label: "High Visa Success Rate",
      description: "Proven track record",
      delay: 0.5
    },
    {
      label: "Trusted Partner Universities",
      description: "Established relationships",
      delay: 0.6
    },
    {
      label: "Personalised 1-to-1 Support",
      description: "Dedicated guidance",
      delay: 0.7
    }
  ];

  return (
    <section className="bg-white py-14 md:py-18 lg:py-24">
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
                Why Optix Pathway
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
              Why Students Choose Optix Pathway
            </motion.h2>

            {/* Subheading */}
            <motion.p
              className="text-base md:text-lg text-[#475569] max-w-[720px] mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              We combine expertise, integrity, and personalised guidance to help you succeed in your UK education journey.
            </motion.p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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

          {/* Trust Metrics */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-[#E5E7EB]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {trustMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: metric.delay, duration: 0.5 }}
              >
                <div className="font-semibold text-[#1F4E6D] text-lg mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-[#475569]">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
