import { motion } from 'motion/react';
import { CategoryCard } from './CategoryCard';
import { Globe, GraduationCap, RefreshCw, Briefcase } from 'lucide-react';
import { useRouter } from "next/navigation";


export function StudentCategoriesSection() {
  const router = useRouter();

  const categories = [
    {
      icon: Globe,
      title: "International Students",
      description: "Support for students applying from outside the UK or already in the UK on a temporary visa. Includes course selection, applications, visa guidance, and in-country visa switching support.",
      subLabel: "Including in-country applicants",
      delay: 0.1,
      path: "/international-students"
    },
    {
      icon: GraduationCap,
      title: "UK Home Students",
      description: "Guidance for British citizens, EU settled or pre-settled, and ILR holders with access to Student Finance.",
      delay: 0.2,
      path: "/uk-home-students"
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
              <span className="inline-block text-sm font-semibold text-[#1F4E6D] tracking-wider uppercase mb-4">
                Who We Support
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
              Choose Your Student Path
            </motion.h2>

            {/* Subheading */}
            <motion.p
              className="text-base md:text-lg text-[#475569] max-w-[640px] mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              We provide tailored guidance based on your background and study goals.
            </motion.p>
          </div>

          {/* Path Cards Grid - 2 Cards Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[940px] mx-auto">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                icon={category.icon}
                title={category.title}
                description={category.description}
                subLabel={category.subLabel}
                delay={category.delay}
                onCtaClick={() => router.push(category.path)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
