"use client"
import { motion } from 'motion/react';
import { ServiceItem } from './ServiceItem';
import { 
  GraduationCap, 
  FileText, 
  Shield, 
  Coins, 
  RefreshCw, 
  CheckCircle, 
  Plane, 
  HeartHandshake 
} from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: GraduationCap,
      title: "Course & University Selection",
      description: "Helping you choose the right course and university based on your academic background and career goals.",
      delay: 0.1
    },
    {
      icon: FileText,
      title: "Application Management",
      description: "End-to-end handling of university applications, documentation, and offer tracking.",
      delay: 0.15
    },
    {
      icon: Shield,
      title: "Visa Guidance & Documentation",
      description: "Expert guidance on UK student visas, document preparation, and compliance.",
      delay: 0.2
    },
    {
      icon: Coins,
      title: "Student Finance Support (UK Students)",
      description: "Support for eligible UK students applying for Student Finance and funding options.",
      delay: 0.25
    },
    {
      icon: RefreshCw,
      title: "In-Country Visa Switch Support",
      description: "Assistance for students already in the UK switching courses, universities, or visa categories.",
      delay: 0.3
    },
    {
      icon: CheckCircle,
      title: "Offer Acceptance & Enrolment",
      description: "Guidance on offer comparison, acceptance, and enrolment procedures.",
      delay: 0.35
    },
    {
      icon: Plane,
      title: "Pre-Departure & Arrival Support",
      description: "Support with travel planning, accommodation guidance, and UK arrival preparation.",
      delay: 0.4
    },
    {
      icon: HeartHandshake,
      title: "Ongoing Student Support",
      description: "Continued guidance even after enrolment to ensure a smooth study experience.",
      delay: 0.45
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
                Our Services
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
              Everything You Need to Study in the UK
            </motion.h2>

            {/* Subheading */}
            <motion.p
              className="text-base md:text-lg text-[#475569] max-w-[720px] mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Our end-to-end services are designed to guide you through every stage of your education journey.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-10">
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={service.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
